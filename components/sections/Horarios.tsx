"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HORARIOS } from "@/lib/data";

const TABS = Object.keys(HORARIOS);

export function Horarios({ compact = false }: { compact?: boolean }) {
  const [tab, setTab] = useState(TABS[0]);

  return (
    <section className="relative bg-bg2 py-28 md:py-40" aria-label="Horários de treino">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {!compact && (
          <>
            <p className="font-display text-xs uppercase tracking-[0.5em] text-green-highlight">Rotina</p>
            <h2 className="font-display mt-3 text-5xl font-bold uppercase tracking-tight md:text-7xl">
              Horários
            </h2>
          </>
        )}

        <div role="tablist" aria-label="Modalidades" className="mt-12 flex flex-wrap gap-3">
          {TABS.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={`font-display rounded-full border px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                tab === t
                  ? "border-green-highlight bg-green-primary text-fg"
                  : "border-line text-fg-muted hover:border-green-accent hover:text-fg"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            role="tabpanel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-12 divide-y divide-line border-y border-line"
          >
            {HORARIOS[tab].map((linha) => (
              <div key={linha.dia} className="grid gap-3 py-6 md:grid-cols-[200px_1fr] md:gap-8">
                <p className="font-display text-lg font-semibold uppercase tracking-wide text-fg">
                  {linha.dia}
                </p>
                <ul className="flex flex-wrap gap-x-8 gap-y-2">
                  {linha.horarios.map((h) => (
                    <li key={h} className="text-sm text-fg-muted">
                      <span className="font-display mr-2 text-green-highlight">{h.slice(0, 5)}</span>
                      {h.slice(6)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="mt-8 text-xs text-fg-muted">
          * Grade sujeita a ajustes. Confirme horários na recepção ou pelo Instagram @tmdhouse.
        </p>
      </div>
    </section>
  );
}
