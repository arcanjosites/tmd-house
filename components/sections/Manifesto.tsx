"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LINES = [
  "NO TATAME NÃO EXISTE ATALHO.",
  "CADA QUEDA ENSINA.",
  "CADA TREINO CONSTRÓI.",
  "CADA FAIXA É SÓ O COMEÇO.",
];

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>(".manifesto-line").forEach((line) => {
        const words = line.querySelectorAll<HTMLElement>(".word");
        gsap.fromTo(
          words,
          { opacity: 0.12, y: 24, filter: "blur(4px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            stagger: 0.06,
            ease: "none",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={ref} className="relative py-32 md:py-48" aria-label="Manifesto">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="font-display mb-14 text-xs uppercase tracking-[0.5em] text-green-highlight">
          Manifesto
        </p>
        <div className="space-y-6 md:space-y-8">
          {LINES.map((line, i) => (
            <p
              key={line}
              className={`manifesto-line font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight md:text-7xl ${
                i % 2 === 1 ? "md:pl-[12vw]" : ""
              }`}
            >
              {line.split(" ").map((w, j) => (
                <span key={j} className="word mr-[0.28em] inline-block">
                  {w}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
