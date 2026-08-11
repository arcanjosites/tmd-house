import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Horarios } from "@/components/sections/Horarios";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { LiquidButton } from "@/components/ui/LiquidButton";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Aulas Kids | TMD House",
  description:
    "Programa infantil da TMD House: Jiu-Jitsu e Karatê Kids com disciplina, segurança e diversão para crianças de 4 a 14 anos.",
};

const PROGRAMAS = [
  {
    nome: "Jiu-Jitsu Kids",
    desc: "Coordenação, respeito e defesa pessoal em turmas por faixa etária. O tatame como escola de vida.",
  },
  {
    nome: "Karatê Kids",
    desc: "Disciplina, foco e postura. Kata, fundamentos e valores que acompanham a criança fora do dojo.",
  },
  {
    nome: "Turmas por idade",
    desc: "De 4 a 6, 7 a 10 e 11 a 14 anos — ritmo e conteúdo adequados para cada fase do desenvolvimento.",
  },
  {
    nome: "Ambiente seguro",
    desc: "Professores qualificados, metodologia clara e um espaço pensado para que os pais confiem e os filhos se divirtam.",
  },
];

export default function KidsPage() {
  return (
    <>
      <PageHero
        kicker="Programa infantil"
        title="Aulas Kids"
        text="Disciplina, confiança e diversão desde cedo. Um ambiente seguro onde as crianças aprendem no tatame e levam isso para a vida."
        img={IMAGES.team.prof4}
        alt="Aluno Kids com kimono TMD House no tatame"
      />

      <section className="relative bg-bg/60 backdrop-blur-sm py-24 md:py-32" aria-label="Programas Kids">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">O programa</h2>
          <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2">
            {PROGRAMAS.map((p, i) => (
              <article key={p.nome} className="border-t border-line pt-6">
                <span className="font-display text-xs tracking-[0.4em] text-green-accent">0{i + 1}</span>
                <h3 className="font-display mt-2 text-3xl font-semibold uppercase tracking-tight">{p.nome}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{p.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap gap-4">
            <LiquidButton href="/contato">Agendar aula experimental</LiquidButton>
            <Link
              href="/horarios"
              prefetch
              className="inline-flex items-center rounded-full border border-line px-8 py-4 font-display text-xs uppercase tracking-[0.2em] text-fg-muted transition-colors hover:border-green-highlight hover:text-fg"
            >
              Ver horários Kids →
            </Link>
          </div>
        </div>
      </section>

      <Horarios defaultTab="Kids" />
      <FAQSection />
      <CTAFinal />
    </>
  );
}
