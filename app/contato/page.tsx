import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { ContatoForm } from "@/components/ui/ContatoForm";

export const metadata: Metadata = {
  title: "Contato — TMD House",
  description: "Agende sua aula experimental na TMD House. Todo mundo começa em algum lugar.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        kicker="Aula experimental"
        title="Comece agora"
        text="Preencha o formulário e nossa equipe entra em contato para agendar sua primeira aula. Sem experiência, sem kimono, sem problema."
        img="/images/sections/cta.jpg"
        alt="Tatame com luz cinematográfica"
      />

      <section className="bg-bg py-24 md:py-32" aria-label="Formulário de contato">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-[1fr_1.2fr] md:px-10">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">
              Fale com<br />a gente
            </h2>
            <ul className="mt-10 space-y-4 text-sm text-fg-muted">
              <li>
                <span className="font-display block text-xs uppercase tracking-[0.3em] text-green-highlight">Endereço</span>
                Brasília — DF
              </li>
              <li>
                <span className="font-display block text-xs uppercase tracking-[0.3em] text-green-highlight">Funcionamento</span>
                Segunda a Sábado · 06h — 22h
              </li>
              <li>
                <span className="font-display block text-xs uppercase tracking-[0.3em] text-green-highlight">E-mail</span>
                <a href="mailto:contato@tmdhouse.com.br" className="text-fg hover:text-green-highlight">contato@tmdhouse.com.br</a>
              </li>
              <li>
                <span className="font-display block text-xs uppercase tracking-[0.3em] text-green-highlight">Instagram</span>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-fg hover:text-green-highlight">@tmdhouse</a>
              </li>
            </ul>
            <div className="mt-12 hidden md:block">
              <Image src="/images/athlete-1.jpg" alt="Atleta da TMD House de kimono azul" width={420} height={560} className="rounded-sm object-cover" />
            </div>
          </div>

          <ContatoForm />
        </div>
      </section>
    </>
  );
}
