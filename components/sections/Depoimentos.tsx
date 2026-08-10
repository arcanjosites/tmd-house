"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DEPOIMENTOS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export function Depoimentos() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>(".depo-item").forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: { trigger: item, start: "top 88%", end: "top 62%", scrub: true },
          }
        );
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={ref} className="relative bg-bg py-28 md:py-40" aria-label="Depoimentos">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="font-display text-xs uppercase tracking-[0.5em] text-green-highlight">Vozes do tatame</p>
        <div className="mt-16 space-y-20 md:space-y-28">
          {DEPOIMENTOS.map((d, i) => (
            <blockquote
              key={d.nome}
              className={`depo-item max-w-3xl ${i % 2 === 1 ? "md:ml-auto md:text-right" : ""}`}
            >
              <p className="font-display text-2xl font-medium uppercase leading-snug tracking-tight md:text-4xl">
                “{d.texto}”
              </p>
              <footer className="mt-5 text-xs uppercase tracking-[0.3em] text-fg-muted">
                <span className="text-green-highlight">{d.nome}</span> · {d.detalhe}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
