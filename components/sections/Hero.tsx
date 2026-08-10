"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { LiquidButton } from "@/components/ui/LiquidButton";

const FRAMES = [
  "/images/hero/frame-1.jpg",
  "/images/hero/frame-2.jpg",
  "/images/hero/frame-3.jpg",
  "/images/hero/frame-4.jpg",
  "/images/hero/frame-5.jpg",
  "/images/hero/frame-6.jpg",
];

type Phrase = {
  text: string;
  sub?: string;
  num?: string;
  range: [number, number];
  align: "left" | "right" | "center" | "bottom";
};

const PHRASES: Phrase[] = [
  { text: "JIU JITSU", sub: "TMD House — Instituto Brazilian Jiu-Jitsu", num: "00", range: [0.0, 0.14], align: "center" },
  { text: "DISCIPLINA.", sub: "Todos os dias. Sem exceção.", num: "01", range: [0.15, 0.3], align: "left" },
  { text: "TÉCNICA.", sub: "Detalhe sobre detalhe.", num: "02", range: [0.32, 0.47], align: "right" },
  { text: "CONTROLE.", sub: "Do corpo. Da mente. Da luta.", num: "03", range: [0.49, 0.64], align: "center" },
  { text: "EVOLUÇÃO.", sub: "Cada treino constrói.", num: "04", range: [0.66, 0.8], align: "bottom" },
  { text: "MAIS QUE LUTA.", sub: "TMD House", num: "05", range: [0.82, 1.0], align: "center" },
];

/**
 * Scroll-driven cinematic sequence: scroll progress scrubs through the
 * keyframes on a canvas with smooth crossfade — scroll down advances,
 * scroll up rewinds.
 */
export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  // frame shrinks slightly at the end -> transition to next section
  const frameScale = useTransform(scrollYProgress, [0.86, 1], [1, 0.92]);
  const frameRadius = useTransform(scrollYProgress, [0.86, 1], ["0px", "24px"]);
  const progressH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    let cancelled = false;
    let settled = 0;
    const imgs = FRAMES.map((src) => {
      const img = new window.Image();
      const onSettle = () => {
        if (cancelled) return;
        settled += 1;
        // draw as soon as the first frame is available; don't block on failures
        if (img === imgs[0] || settled === FRAMES.length) setReady(true);
      };
      img.onload = onSettle;
      img.onerror = onSettle;
      img.src = src;
      return img;
    });
    imagesRef.current = imgs;
    return () => {
      cancelled = true;
      imgs.forEach((i) => {
        i.onload = null;
        i.onerror = null;
      });
    };
  }, []);

  const draw = (progress: number) => {
    const canvas = canvasRef.current;
    const imgs = imagesRef.current;
    if (!canvas || imgs.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const pos = Math.min(progress, 0.999) * (FRAMES.length - 1);
    const i = Math.floor(pos);
    const t = pos - i;

    const drawCover = (img: HTMLImageElement, alpha: number, zoom = 1) => {
      if (!img.complete || img.naturalWidth === 0) return;
      ctx.globalAlpha = alpha;
      const ir = img.naturalWidth / img.naturalHeight;
      const cr = w / h;
      let dw = w, dh = h;
      if (ir > cr) dw = h * ir;
      else dh = w / ir;
      dw *= zoom;
      dh *= zoom;
      ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
    };

    ctx.clearRect(0, 0, w, h);
    // subtle Ken-Burns style zoom inside each keyframe for motion feel
    drawCover(imgs[i], 1, 1 + t * 0.06);
    if (t > 0 && imgs[i + 1]) drawCover(imgs[i + 1], smooth(t), 1 + t * 0.02);
    ctx.globalAlpha = 1;

    // premium color grade: deep green tint + vignette
    ctx.fillStyle = "rgba(9, 16, 12, 0.28)";
    ctx.fillRect(0, 0, w, h);
    const grd = ctx.createRadialGradient(w / 2, h / 2, h * 0.3, w / 2, h / 2, h * 0.95);
    grd.addColorStop(0, "rgba(4,7,5,0)");
    grd.addColorStop(1, "rgba(4,7,5,0.75)");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, w, h);
  };

  useMotionValueEvent(scrollYProgress, "change", (v) => draw(v));

  useEffect(() => {
    if (!ready) return;
    draw(scrollYProgress.get());
    const onResize = () => draw(scrollYProgress.get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  // Reduced motion: static cinematic hero, no scrubbing
  if (reduced) {
    return (
      <section className="relative h-screen overflow-hidden bg-bg" aria-label="TMD House — Jiu-Jitsu">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={FRAMES[2]}
          alt="Atletas de Jiu-Jitsu da TMD House em treino"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-transparent to-bg" />
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="font-display text-[14vw] font-bold uppercase leading-[0.95] tracking-tight md:text-[9vw]">
            Jiu Jitsu
          </h1>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-fg-muted md:text-sm">
            TMD House — Instituto Brazilian Jiu-Jitsu
          </p>
          <div className="mt-10">
            <LiquidButton href="/contato" size="lg">Entre no tatame</LiquidButton>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={wrapRef} className="relative h-[600vh]" aria-label="TMD House — Jiu-Jitsu">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ scale: frameScale, borderRadius: frameRadius }}
          className="relative h-full w-full overflow-hidden bg-bg"
        >
          <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />

          {/* phrases */}
          {PHRASES.map((p) => (
            <HeroPhrase key={p.text} phrase={p} progress={scrollYProgress} />
          ))}

          {/* CTA at end */}
          <PhraseCTA progress={scrollYProgress} />

          {/* vertical progress indicator */}
          <div className="absolute right-6 top-1/2 hidden h-40 w-px -translate-y-1/2 bg-line md:block" aria-hidden="true">
            <motion.div style={{ height: progressH }} className="w-px bg-green-highlight" />
          </div>

          {/* scroll hint */}
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-fg-muted">Role para entrar</p>
            <div className="mx-auto mt-3 h-8 w-px animate-pulse bg-green-highlight" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function smooth(t: number) {
  return t * t * (3 - 2 * t);
}

function HeroPhrase({ phrase, progress }: { phrase: Phrase; progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const [a, b] = phrase.range;
  const mid = (a + b) / 2;
  const opacity = useTransform(progress, [a, a + (mid - a) * 0.6, mid, b], [0, 1, 1, 0]);
  const y = useTransform(progress, [a, mid, b], [60, 0, -60]);
  const blur = useTransform(progress, [a, a + (mid - a) * 0.6, mid, b], [8, 0, 0, 10]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);
  const scale = useTransform(progress, [a, mid, b], [0.96, 1, 1.03]);

  const pos =
    phrase.align === "left"
      ? "items-start text-left pl-6 md:pl-20 justify-center"
      : phrase.align === "right"
        ? "items-end text-right pr-6 md:pr-24 justify-center"
        : phrase.align === "bottom"
          ? "items-center text-center justify-end pb-28"
          : "items-center text-center justify-center";

  return (
    <motion.div
      style={{ opacity }}
      className={`pointer-events-none absolute inset-0 flex flex-col ${pos}`}
    >
      <motion.div style={{ y, filter, scale }} className="max-w-[92vw]">
        {phrase.num && (
          <span className="font-display mb-3 block text-xs tracking-[0.5em] text-green-highlight">
            {phrase.num} /
          </span>
        )}
        <h1 className="font-display text-[13vw] font-bold uppercase leading-[0.95] tracking-tight text-fg md:text-[9vw]">
          {phrase.text}
        </h1>
        {phrase.sub && (
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-fg-muted md:text-sm">
            {phrase.sub}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

function PhraseCTA({ progress }: { progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const opacity = useTransform(progress, [0.9, 0.97], [0, 1]);
  const y = useTransform(progress, [0.9, 0.97], [40, 0]);
  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-x-0 bottom-16 flex justify-center"
    >
      <div className="pointer-events-auto">
        <LiquidButton href="/contato" size="lg">
          Entre no tatame
        </LiquidButton>
      </div>
    </motion.div>
  );
}
