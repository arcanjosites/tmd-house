"use client";

import { useState } from "react";
import { FAQ } from "@/lib/data";
import { LiquidButton } from "@/components/ui/LiquidButton";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-28 md:py-40" aria-label="Perguntas frequentes">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.5em] text-green-highlight">Dúvidas</p>
            <h2 className="font-display mt-3 text-4xl font-bold uppercase tracking-tight md:text-6xl">
              Antes do<br />primeiro treino
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-fg-muted">
              O essencial para chegar tranquilo ao tatame. Se ainda tiver dúvidas, fale com a nossa equipe.
            </p>
            <div className="mt-8 hidden md:block">
              <LiquidButton href="/contato">Agendar aula experimental</LiquidButton>
            </div>
          </div>

          <div className="divide-y divide-line border-y border-line">
            {FAQ.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-green-highlight"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-sm font-semibold uppercase tracking-tight md:text-base">
                      {item.q}
                    </span>
                    <span className="font-display text-xs text-green-highlight" aria-hidden>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-5 text-sm leading-relaxed text-fg-muted">{item.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
