"use client";

import { useState } from "react";

const MODALIDADES = ["Jiu-Jitsu", "Muay Thai", "Karatê", "Performance"];

export function ContatoForm() {
  const [enviado, setEnviado] = useState(false);

  if (enviado) {
    return (
      <div className="flex flex-col items-start justify-center rounded-sm border border-line bg-surface p-10">
        <p className="font-display text-3xl font-bold uppercase tracking-tight text-green-highlight md:text-4xl">
          Recebido.
        </p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted">
          Nossa equipe entra em contato em breve para agendar sua aula experimental. Nos vemos no tatame.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-8"
      onSubmit={(e) => {
        e.preventDefault();
        setEnviado(true);
      }}
      aria-label="Agendar aula experimental"
    >
      <Field label="Nome" id="nome">
        <input id="nome" name="nome" type="text" required autoComplete="name" placeholder="Seu nome completo" className={inputCls} />
      </Field>
      <Field label="WhatsApp" id="tel">
        <input id="tel" name="tel" type="tel" required autoComplete="tel" placeholder="(61) 9 0000-0000" className={inputCls} />
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
      <button
        type="submit"
        data-cursor="SEND"
        className="liquid-btn inline-flex items-center gap-3 rounded-full px-10 py-5 font-display text-sm font-medium uppercase tracking-[0.18em]"
      >
        <span className="relative z-10">Agendar aula experimental</span>
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
