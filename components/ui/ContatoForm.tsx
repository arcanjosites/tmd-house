"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { agendamentoWhatsAppUrl } from "@/lib/data";

const MODALIDADES = ["Jiu-Jitsu", "Muay Thai", "Karatê", "Kids", "Performance"];

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10;
}

export function ContatoForm() {
  const [erro, setErro] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <form
      className="space-y-8"
      onSubmit={(e) => {
        e.preventDefault();
        setErro(null);
        const form = e.currentTarget;
        const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
        const tel = (form.elements.namedItem("tel") as HTMLInputElement).value;
        const modalidade = (form.elements.namedItem("modalidade") as RadioNodeList).value;

        if (!nome.trim()) {
          setErro("Informe seu nome.");
          return;
        }
        if (!isValidPhone(tel)) {
          setErro("Informe um WhatsApp válido com DDD.");
          return;
        }

        setLoading(true);
        window.location.href = agendamentoWhatsAppUrl({ nome, modalidade });
      }}
      aria-label="Agendar aula experimental"
    >
      <p className="text-xs uppercase tracking-[0.25em] text-fg-muted">
        Escolha a modalidade, preencha seus dados e continue no WhatsApp · primeira aula grátis
      </p>

      <Field label="Nome" id="nome">
        <input id="nome" name="nome" type="text" required autoComplete="name" placeholder="Seu nome completo" className={inputCls} />
      </Field>
      <Field label="WhatsApp" id="tel">
        <input
          id="tel"
          name="tel"
          type="tel"
          required
          autoComplete="tel"
          placeholder="(61) 9 0000-0000"
          className={inputCls}
        />
      </Field>
      <Field label="E-mail" id="email">
        <input id="email" name="email" type="email" autoComplete="email" placeholder="voce@email.com" className={inputCls} />
      </Field>
      <fieldset>
        <legend className="font-display mb-4 text-xs uppercase tracking-[0.3em] text-fg-muted">
          Modalidade de interesse
        </legend>
        <div className="flex flex-wrap gap-3">
          {MODALIDADES.map((m, i) => (
            <label key={m} className="cursor-pointer">
              <input type="radio" name="modalidade" value={m} defaultChecked={i === 0} className="peer sr-only" />
              <span className="font-display inline-block rounded-full border border-line px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-fg-muted transition-all peer-checked:border-green-highlight peer-checked:bg-green-primary peer-checked:text-fg">
                {m}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <Field label="Mensagem (opcional)" id="msg">
        <textarea id="msg" name="msg" rows={4} placeholder="Conte um pouco sobre você e seu objetivo" className={inputCls} />
      </Field>

      <AnimatePresence>
        {erro && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm text-red-400"
            role="alert"
          >
            {erro}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={loading}
        data-cursor="SEND"
        className="liquid-btn inline-flex items-center gap-3 rounded-full px-10 py-5 font-display text-sm font-medium uppercase tracking-[0.18em] disabled:opacity-60"
      >
        <span className="relative z-10">{loading ? "Abrindo WhatsApp…" : "Continuar no WhatsApp"}</span>
        <span className="relative z-10 text-green-highlight" aria-hidden>→</span>
      </button>
    </form>
  );
}

const inputCls =
  "w-full border-b border-line bg-transparent py-3 text-base text-fg placeholder:text-fg-muted/50 focus:border-green-highlight focus:outline-none transition-colors";

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="font-display mb-2 block text-xs uppercase tracking-[0.3em] text-fg-muted">
        {label}
      </label>
      {children}
    </div>
  );
}
