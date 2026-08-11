"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IMAGES } from "@/lib/images";

gsap.registerPlugin(ScrollTrigger);

const ITENS = [
  { src: IMAGES.gym.tatame, alt: "Tatame principal da TMD House", label: "Tatame principal", span: "md:col-span-7 md:row-span-2 aspect-[16/10]" },
  { src: IMAGES.gym.weights, alt: "Área de musculação", label: "Área de força", span: "md:col-span-5 aspect-[4/3]" },
  { src: IMAGES.gym.bags, alt: "Área funcional com sacos de pancada", label: "Área funcional", span: "md:col-span-5 aspect-[4/3]" },
  { src: IMAGES.gym.reception, alt: "Recepção da academia", label: "Recepção", span: "md:col-span-6 aspect-[16/9]" },
  { src: IMAGES.athletes.secondary, alt: "Aluno Kids com kimono TMD House", label: "A casa é nossa", span: "md:col-span-6 aspect-[16/9]" },
];

export function Estrutura() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>(".estrutura-item").forEach((item, i) => {
        gsap.fromTo(
          item,
          { y: 60 + (i % 3) * 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: { trigger: item, start: "top 90%", end: "top 60%", scrub: true },
          }
        );
        const img = item.querySelector("img");
        if (img)
          gsap.fromTo(
            img,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: "none",
              scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: true },
            }
          );
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={ref} className="relative py-28 md:py-40" aria-label="Estrutura da academia">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.5em] text-green-highlight">A casa</p>
            <h2 className="font-display mt-3 text-5xl font-bold uppercase tracking-tight md:text-7xl">
              Estrutura
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-fg-muted">
            Tatame amplo, área de força completa, vestiários e um ambiente pensado para treinar sério, com conforto.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-12 md:gap-6">
          {ITENS.map((item) => (
            <figure key={item.src} className={`estrutura-item group relative overflow-hidden rounded-sm ${item.span}`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="scale-110 object-cover transition-transform duration-700 group-hover:scale-[1.15]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
              <figcaption className="font-display absolute bottom-4 left-4 text-xs uppercase tracking-[0.3em] text-fg">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
