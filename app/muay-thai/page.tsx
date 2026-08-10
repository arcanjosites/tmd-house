import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CTAFinal } from "@/components/sections/CTAFinal";

export const metadata: Metadata = {
  title: "Muay Thai — TMD House",
  description: "Muay Thai na TMD House: a arte das oito armas com técnica, ritmo e respeito.",
};

const PILARES = [
  { nome: "Base e postura", desc: "Antes do impacto, o equilíbrio. Guarda, deslocamento e leitura de distância." },
  { nome: "As oito armas", desc: "Punhos, cotovelos, joelhos e canelas — cada arma no tempo certo." },
  { nome: "Clinch", desc: "A luta de dentro. Controle de pescoço, desequilíbrio e joelhadas." },
  { nome: "Sparring controlado", desc: "Intensidade com inteligência. Evoluir sem quebrar o parceiro." },
];

export default function MuayThaiPage() {
  return (
    <>
      <PageHero
        kicker="Striking"
        title="Muay Thai"
        text="A arte das oito armas, ensinada com a mesma seriedade do nosso tatame. Ritmo, impacto e respeito."
        img="/images/sections/muaythai.jpg"
        alt="Lutador de Muay Thai enfaixando as mãos"
      />
      <section className="bg-bg py-24 md:py-32" aria-label="Pilares do Muay Thai">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
            {PILARES.map((p, i) => (
              <article key={p.nome} className="border-t border-line pt-6">
                <span className="font-display text-xs tracking-[0.4em] text-green-accent">0{i + 1}</span>
                <h3 className="font-display mt-2 text-3xl font-semibold uppercase tracking-tight md:text-4xl">{p.nome}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-fg-muted">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTAFinal />
    </>
  );
}
