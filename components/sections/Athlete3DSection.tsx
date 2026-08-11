"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ATHLETE_MODEL_PATH, SCROLL_ROTATION_MAX } from "@/lib/three/constants";
import { useAthleteRotation } from "@/lib/three/useAthleteRotation";
import { AthleteLoader } from "@/components/three/AthleteLoader";

gsap.registerPlugin(ScrollTrigger);

const AthleteScene = dynamic(
  () => import("@/components/three/AthleteScene").then((m) => m.AthleteScene),
  { ssr: false, loading: () => <AthleteLoader /> }
);

function useMedia() {
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [webgl, setWebgl] = useState(true);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    try {
      const canvas = document.createElement("canvas");
      setWebgl(!!(canvas.getContext("webgl2") || canvas.getContext("webgl")));
    } catch {
      setWebgl(false);
    }
  }, []);

  return { isMobile, reducedMotion, webgl };
}

export function Athlete3DSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasAreaRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLParagraphElement>(null);
  const [entranceProgress, setEntranceProgress] = useState(0);
  const [modelAvailable, setModelAvailable] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("DRAG 360°");
  const [shouldLoad, setShouldLoad] = useState(false);

  const { isMobile, reducedMotion, webgl } = useMedia();

  const {
    refs: rotationRefs,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerLeave,
    setScrollRotation,
    setEntranceProgress: setEntranceRef,
    isDragging,
  } = useAthleteRotation({ reducedMotion, enabled: sceneReady });

  useEffect(() => {
    fetch(ATHLETE_MODEL_PATH, { method: "HEAD" })
      .then((r) => {
        setModelAvailable(r.ok);
        if (r.ok) {
          import("@react-three/drei").then(({ useGLTF }) => {
            useGLTF.preload(ATHLETE_MODEL_PATH);
          });
        }
      })
      .catch(() => setModelAvailable(false));
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !webgl) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [webgl]);

  useEffect(() => {
    if (shouldLoad) setSceneReady(true);
  }, [shouldLoad]);

  useEffect(() => {
    if (isMobile) {
      setEntranceProgress(1);
      setEntranceRef(1);
    }
  }, [isMobile, setEntranceRef]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "center center",
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;
          const entrance = Math.min(p * 1.8, 1);
          setEntranceProgress(entrance);
          setEntranceRef(entrance);
          setScrollRotation(p * SCROLL_ROTATION_MAX);
        },
      });
    });

    mm.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
      ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "center center",
        scrub: true,
        onUpdate: (self) => {
          setScrollRotation(self.progress * SCROLL_ROTATION_MAX);
        },
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      setEntranceProgress(1);
      setEntranceRef(1);
    });

    return () => mm.revert();
  }, [setScrollRotation, setEntranceRef]);

  const hideHint = useCallback(() => {
    if (hasInteracted) return;
    setHasInteracted(true);
    if (hintRef.current) {
      gsap.to(hintRef.current, { opacity: 0, duration: 0.5, ease: "power2.out" });
    }
  }, [hasInteracted]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (e.pointerType === "touch") {
        const area = canvasAreaRef.current as HTMLDivElement & {
          _touchStart?: { x: number; y: number };
          _touchIntent?: string | null;
        };
        if (area) {
          area._touchStart = { x: e.clientX, y: e.clientY };
          area._touchIntent = null;
        }
      }
      onPointerDown(e.clientX);
      setCursorLabel("ROTATE");
      hideHint();
    },
    [onPointerDown, hideHint]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      const area = canvasAreaRef.current;
      if (!area) return;

      if (e.pointerType === "touch") {
        const start = (area as HTMLDivElement & { _touchStart?: { x: number; y: number } })._touchStart;
        const intent = (area as HTMLDivElement & { _touchIntent?: string | null })._touchIntent;
        if (start && !intent) {
          const dx = e.clientX - start.x;
          const dy = e.clientY - start.y;
          if (Math.abs(dx) > 12 || Math.abs(dy) > 12) {
            (area as HTMLDivElement & { _touchIntent?: string | null })._touchIntent =
              Math.abs(dx) > Math.abs(dy) ? "horizontal" : "vertical";
          }
        }
        const locked = (area as HTMLDivElement & { _touchIntent?: string | null })._touchIntent;
        if (locked === "vertical") return;
      }

      const rect = area.getBoundingClientRect();
      onPointerMove(e.clientX, e.clientY, rect);
    },
    [onPointerMove]
  );

  const handlePointerUp = useCallback(() => {
    onPointerUp();
    setCursorLabel("DRAG 360°");
  }, [onPointerUp]);

  const handlePointerLeave = useCallback(() => {
    onPointerLeave();
    if (!isDragging.current) setCursorLabel("DRAG 360°");
  }, [onPointerLeave, isDragging]);

  const show3D = webgl && sceneReady;

  return (
    <section
      ref={sectionRef}
      className="relative isolate z-10 overflow-visible py-4 md:py-6"
      aria-label="Atleta interativo de Jiu-Jitsu"
    >
      <div className="relative mx-auto max-w-[1600px] overflow-visible">
        <div
          ref={canvasAreaRef}
          className="relative min-h-[480px] h-[68vh] w-full overflow-visible md:min-h-[560px] md:h-[76vh]"
          data-cursor={cursorLabel}
          onPointerDown={show3D ? handlePointerDown : undefined}
          onPointerMove={show3D ? handlePointerMove : undefined}
          onPointerUp={show3D ? handlePointerUp : undefined}
          onPointerLeave={show3D ? handlePointerLeave : undefined}
          style={{ touchAction: "pan-y" }}
        >
          <div className="pointer-events-none absolute inset-x-0 top-6 z-10 px-6 md:top-10 md:px-10">
            <p className="font-display text-xs uppercase tracking-[0.5em] text-green-highlight">Presença</p>
            <div className="mt-3 space-y-1 md:mt-4">
              <h2 className="font-display text-4xl font-bold uppercase leading-none tracking-tight text-fg md:text-6xl">
                Técnica.
              </h2>
              <h2 className="font-display text-4xl font-bold uppercase leading-none tracking-tight text-fg md:text-6xl">
                Disciplina.
              </h2>
              <h2 className="font-display text-4xl font-bold uppercase leading-none tracking-tight text-green-highlight md:text-6xl">
                Controle.
              </h2>
            </div>
          </div>

          {show3D ? (
            <div className="absolute inset-0 z-[1]">
              <AthleteScene
                rotationRefs={rotationRefs}
                entranceProgress={entranceProgress}
                reducedMotion={reducedMotion}
                isMobile={isMobile}
                usePlaceholder={!modelAvailable}
              />
            </div>
          ) : (
            <div className="relative z-[1] h-full w-full">
              <Image
                src={IMAGES.sections.jiujitsu}
                alt="Atleta de Jiu-Jitsu da TMD House"
                fill
                sizes="100vw"
                className="object-cover object-center opacity-80"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg2 via-bg2/40 to-bg2/80" />
            </div>
          )}

          {!hasInteracted && show3D && !reducedMotion && (
            <p
              ref={hintRef}
              className="pointer-events-none absolute bottom-10 left-1/2 z-10 -translate-x-1/2 font-display text-[10px] uppercase tracking-[0.35em] text-fg-muted transition-opacity"
            >
              DRAG TO EXPLORE ↔
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
