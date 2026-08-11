"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LiquidButton } from "@/components/ui/LiquidButton";
import { IMAGES } from "@/lib/images";

gsap.registerPlugin(ScrollTrigger);

const DESTAQUES = [
  "Professores qualificados",
  "Ambiente seguro e acolhedor",
  "Desenvolvimento físico e emocional",
  "Turmas adequadas para cada faixa etária",
];

export function AulasKidsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const items = gsap.utils.toArray<HTMLElement>(".kids-destaque");
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 80%", end: "top 55%", scrub: true },
          }
        );
      });
      gsap.fromTo(
        ".kids-image",
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
    <section ref={ref} className="relative" aria-label="Aulas Kids">
      <div className="mx-auto grid max-w-[1600px] md:grid-cols-2">
        <div className="flex flex-col justify-center gap-10 px-6 py-24 md:gap-14 md:px-16 md:py-[24vh]">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.5em] text-green-highlight">Aulas Kids</p>
            <h2 className="font-display mt-3 text-4xl font-bold uppercase leading-[1.05] tracking-tight md:text-6xl">
              Disciplina, confiança e diversão desde cedo.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-fg-muted md:text-lg">
            Nossas aulas infantis ajudam as crianças a desenvolver coordenação motora, respeito, foco, autoestima e
            habilidades de defesa pessoal em um ambiente seguro, acolhedor e divertido.
          </p>
          <ul className="space-y-6">
            {DESTAQUES.map((item, i) => (
              <li key={item} className="kids-destaque border-l border-line pl-6 md:pl-8">
                <span className="font-display text-xs tracking-[0.4em] text-green-accent">0{i + 1}</span>
                <p className="font-display mt-2 text-xl font-semibold uppercase tracking-tight md:text-2xl">{item}</p>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-4">
            <LiquidButton href="/contato">Agende uma aula experimental</LiquidButton>
            <Link
              href="/kids"
              prefetch
              className="font-display text-xs uppercase tracking-[0.3em] text-fg-muted transition-colors hover:text-green-highlight"
            >
              Conheça o programa Kids →
            </Link>
          </div>
        </div>

        <div className="relative md:sticky md:top-0 md:h-screen">
          <div className="relative h-[70vh] overflow-hidden md:h-full">
            <Image
              src={IMAGES.team.prof4}
              alt="Aluno Kids com kimono TMD House no tatame"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="kids-image object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg2 via-transparent to-bg2/40" />
            <div className="absolute bottom-10 right-6 md:right-10">
              <p className="font-display text-xs uppercase tracking-[0.5em] text-green-highlight">Programa infantil</p>
              <p className="font-display mt-2 text-5xl font-bold uppercase leading-none tracking-tight md:text-7xl">
                Kids
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
