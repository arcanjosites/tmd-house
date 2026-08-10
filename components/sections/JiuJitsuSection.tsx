"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LiquidButton } from "@/components/ui/LiquidButton";

gsap.registerPlugin(ScrollTrigger);

const PILARES = [
  { titulo: "Técnica", texto: "Detalhe sobre detalhe. Cada posição tem lógica, ordem e propósito." },
  { titulo: "Controle", texto: "Antes de vencer o outro, você aprende a controlar a si mesmo." },
  { titulo: "Disciplina", texto: "Aparecer todos os dias vale mais do que talento em dia bom." },
  { titulo: "Evolução", texto: "A faixa muda de cor devagar. O caráter muda junto." },
  { titulo: "Comunidade", texto: "Ninguém evolui sozinho. O tatame é feito de parceiros." },
];

export function JiuJitsuSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const items = gsap.utils.toArray<HTMLElement>(".pilar-item");
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 80%", end: "top 55%", scrub: true },
          }
        );
      });
      gsap.fromTo(
        ".jj-image",
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        }
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={ref} className="relative bg-bg2" aria-label="Jiu-Jitsu">
      <div className="mx-auto grid max-w-[1600px] md:grid-cols-2">
        {/* sticky visual */}
        <div className="relative md:sticky md:top-0 md:h-screen">
          <div className="relative h-[70vh] overflow-hidden md:h-full">
            <Image
              src="/images/sections/jiujitsu.jpg"
              alt="Atleta de Jiu-Jitsu ajustando o kimono"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="jj-image object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg2 via-transparent to-bg2/40" />
            <div className="absolute bottom-10 left-6 md:left-10">
              <p className="font-display text-xs uppercase tracking-[0.5em] text-green-highlight">A arte principal</p>
              <h2 className="font-display mt-2 text-6xl font-bold uppercase leading-none tracking-tight md:text-8xl">
                Jiu<span className="text-green-highlight">-</span>Jitsu
              </h2>
            </div>
          </div>
        </div>

        {/* pillars */}
        <div className="flex flex-col justify-center gap-16 px-6 py-24 md:gap-24 md:px-16 md:py-[30vh]">
          <p className="max-w-md text-base leading-relaxed text-fg-muted md:text-lg">
            O Jiu-Jitsu é o coração da TMD House. Não é hobby, não é moda — é um caminho.
            Aqui ele é ensinado com seriedade, do primeiro nó na faixa branca ao último grau da preta.
          </p>
          {PILARES.map((p, i) => (
            <div key={p.titulo} className="pilar-item border-l border-line pl-6 md:pl-8">
              <span className="font-display text-xs tracking-[0.4em] text-green-accent">0{i + 1}</span>
              <h3 className="font-display mt-2 text-4xl font-semibold uppercase tracking-tight md:text-6xl">
                {p.titulo}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-fg-muted md:text-base">{p.texto}</p>
            </div>
          ))}
          <div>
            <LiquidButton href="/jiu-jitsu">Conheça o programa</LiquidButton>
          </div>
        </div>
      </div>
    </section>
  );
}
