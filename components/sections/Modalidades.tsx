"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IMAGES } from "@/lib/images";

const MODS = [
  {
    nome: "Jiu-Jitsu",
    href: "/jiu-jitsu",
    img: IMAGES.sections.jiujitsu,
    desc: "A arte suave. O centro de tudo na TMD House.",
    tag: "Principal",
  },
  {
    nome: "Muay Thai",
    href: "/muay-thai",
    img: IMAGES.sections.muaythai,
    desc: "A arte das oito armas. Ritmo, impacto e respeito.",
    tag: "Striking",
  },
  {
    nome: "Karatê",
    href: "/karate",
    img: IMAGES.sections.karate,
    desc: "Tradição, precisão e disciplina em cada movimento.",
    tag: "Tradição",
  },
  {
    nome: "Performance",
    href: "/performance",
    img: IMAGES.sections.performance,
    desc: "Força fora do tatame para render mais dentro dele.",
    tag: "Suporte",
  },
];

export function Modalidades() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-28 md:py-40" aria-label="Modalidades">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.5em] text-green-highlight">Modalidades</p>
            <h2 className="font-display mt-3 text-5xl font-bold uppercase tracking-tight md:text-7xl">
              O que se treina<br />na casa
            </h2>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <ul className="flex flex-col" role="list">
            {MODS.map((m, i) => (
              <li key={m.nome}>
                <Link
                  href={m.href}
                  data-cursor="VIEW"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`group flex items-baseline justify-between gap-4 border-b border-line py-8 transition-colors md:py-10 ${
                    active === i ? "text-fg" : "text-fg-muted"
                  }`}
                >
                  <span
                    className={`font-display uppercase tracking-tight transition-all duration-300 ${
                      i === 0
                        ? "text-5xl font-bold md:text-8xl"
                        : "text-4xl font-semibold md:text-6xl"
                    } ${active === i ? "translate-x-3 md:translate-x-5" : ""}`}
                  >
                    {m.nome}
                  </span>
                  <span className="hidden shrink-0 text-xs uppercase tracking-[0.3em] text-green-accent md:block">
                    {m.tag}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative hidden min-h-[560px] overflow-hidden rounded-lg lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={MODS[active].img}
                  alt={MODS[active].nome}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
                <p className="absolute bottom-8 left-8 max-w-xs text-sm leading-relaxed text-fg">
                  {MODS[active].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
