import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Faixas } from "@/components/sections/Faixas";
import { CTAFinal } from "@/components/sections/CTAFinal";

export const metadata: Metadata = {
  title: "Jiu-Jitsu — TMD House",
  description: "O programa de Brazilian Jiu-Jitsu da TMD House: fundamentos, avançado, no-gi, kids e competição.",
};

const PROGRAMAS = [
  { nome: "Fundamentos", desc: "A base bem-feita. Posições essenciais, defesa pessoal e o vocabulário do jogo. Ideal para os primeiros 12 meses." },
  { nome: "All Levels", desc: "Turma mista com técnica do dia e treino situacional. Faixa branca treina com roxa — e todo mundo aprende." },
  { nome: "Avançado", desc: "Ritmo alto, detalhe fino. Sistemas de guarda, passagens em cadeia e estratégia de luta." },
  { nome: "No-Gi", desc: "Sem kimono, mais velocidade. Wrestling, leg locks e o jogo moderno do grappling." },
  { nome: "Kids", desc: "Disciplina e coordenação para crianças de 4 a 14 anos, divididas por idade. Respeito antes do ouro." },
  { nome: "Competição", desc: "Para quem quer testar o jogo. Preparação específica de campeonato, com cronograma e cortes de treino." },
];

export default function JiuJitsuPage() {
  return (
    <>
      <PageHero
        kicker="A arte principal"
        title="Jiu-Jitsu"
        text="O coração da TMD House. Um programa completo, da primeira aula à faixa preta, com metodologia séria e tatame de alto nível."
        img="/images/sections/jiujitsu.jpg"
        alt="Atleta de Jiu-Jitsu da TMD House"
      />

      <section className="bg-bg py-24 md:py-32" aria-label="Programas de Jiu-Jitsu">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">Programas</h2>
          <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {PROGRAMAS.map((p, i) => (
              <article key={p.nome} className="border-t border-line pt-6">
                <span className="font-display text-xs tracking-[0.4em] text-green-accent">0{i + 1}</span>
                <h3 className="font-display mt-2 text-3xl font-semibold uppercase tracking-tight">{p.nome}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Faixas />
      <CTAFinal />
    </>
  );
}
