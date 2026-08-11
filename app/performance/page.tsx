import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { IMAGES } from "@/lib/images";
import { CTAFinal } from "@/components/sections/CTAFinal";

export const metadata: Metadata = {
  title: "Performance | TMD House",
  description: "Preparação física orientada ao combate: força, mobilidade e condicionamento na TMD House.",
};

const BLOCOS = [
  { nome: "Força para o combate", desc: "Levantamentos básicos com progressão inteligente. Força que aparece no grip, na queda e na pressão." },
  { nome: "Condicionamento", desc: "Motor para aguentar os cinco minutos finais. Intervalados construídos no ritmo da luta." },
  { nome: "Mobilidade", desc: "Quadril que gira, ombro que aguenta. Prevenção de lesão como prioridade, não detalhe." },
  { nome: "Área liberada", desc: "Estrutura completa de musculação disponível o dia inteiro para alunos da casa." },
];

export default function PerformancePage() {
  return (
    <>
      <PageHero
        kicker="Suporte à luta"
        title="Performance"
        text="A musculação aqui serve ao tatame: força e condicionamento para render mais no treino e na luta."
        img={IMAGES.sections.performance}
        alt="Atleta treinando levantamento terra"
      />
      <section className="relative bg-bg/60 backdrop-blur-sm py-24 md:py-32" aria-label="Programa de performance">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
            {BLOCOS.map((b, i) => (
              <article key={b.nome} className="border-t border-line pt-6">
                <span className="font-display text-xs tracking-[0.4em] text-green-accent">0{i + 1}</span>
                <h3 className="font-display mt-2 text-3xl font-semibold uppercase tracking-tight md:text-4xl">{b.nome}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-fg-muted">{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTAFinal />
    </>
  );
}
