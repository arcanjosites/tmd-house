"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FAIXAS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export function Faixas() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>(".faixa-row").forEach((row) => {
        gsap.fromTo(
          row.querySelector(".faixa-bar"),
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left center",
            ease: "power2.out",
            scrollTrigger: { trigger: row, start: "top 80%", end: "top 50%", scrub: true },
          }
        );
        gsap.fromTo(
          row.querySelector(".faixa-content"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: { trigger: row, start: "top 78%", end: "top 55%", scrub: true },
          }
        );
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={ref} className="relative bg-bg py-28 md:py-40" aria-label="Jornada das faixas">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="font-display text-xs uppercase tracking-[0.5em] text-green-highlight">A jornada</p>
        <h2 className="font-display mt-3 max-w-3xl text-5xl font-bold uppercase tracking-tight md:text-7xl">
          Da branca à preta
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-fg-muted md:text-base">
          Cada faixa é uma temporada da mesma história. Não existe pulo de capítulo.
        </p>

        <div className="mt-20 space-y-16 md:space-y-24">
          {FAIXAS.map((f, i) => (
            <div key={f.nome} className="faixa-row">
              <div className="faixa-content flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="font-display text-xs tracking-[0.4em] text-green-accent">
                    ETAPA 0{i + 1} · {f.tempo}
                  </span>
                  <h3 className="font-display mt-1 text-5xl font-bold uppercase tracking-tight md:text-7xl">
                    {f.nome}
                  </h3>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-fg-muted md:text-right md:text-base">
                  {f.texto}
                </p>
              </div>
              {/* belt bar with black tip */}
              <div className="faixa-bar mt-6 flex h-4 w-full overflow-hidden rounded-sm md:h-6">
                <div className="h-full flex-1" style={{ backgroundColor: f.cor }} />
                <div className="relative h-full w-[14%] bg-black">
                  <div className="absolute inset-y-0 left-1/4 w-1 bg-[#7a0d0d]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
