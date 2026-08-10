import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CTAFinal } from "@/components/sections/CTAFinal";

export const metadata: Metadata = {
  title: "Karatê — TMD House",
  description: "Karatê na TMD House: tradição, precisão e disciplina para todas as idades.",
};

const PILARES = [
  { nome: "Kihon", desc: "A técnica fundamental, repetida até virar natureza." },
  { nome: "Kata", desc: "Formas que carregam séculos de conhecimento em cada movimento." },
  { nome: "Kumite", desc: "O combate com controle, timing e respeito ao oponente." },
  { nome: "Kids & Família", desc: "Disciplina e postura para crianças — e turmas em que pais treinam junto." },
];

export default function KaratePage() {
  return (
    <>
      <PageHero
        kicker="Tradição"
        title="Karatê"
        text="Precisão, postura e respeito. O caminho tradicional das artes marciais, vivo dentro da TMD House."
        img="/images/sections/karate.jpg"
        alt="Praticante de Karatê em posição de base"
      />
      <section className="bg-bg py-24 md:py-32" aria-label="Pilares do Karatê">
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
