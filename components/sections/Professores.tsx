import Image from "next/image";
import { PROFESSORES } from "@/lib/data";

export function Professores() {
  return (
    <section className="relative bg-bg2 py-28 md:py-40" aria-label="Professores">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="font-display text-xs uppercase tracking-[0.5em] text-green-highlight">Quem ensina</p>
        <h2 className="font-display mt-3 text-5xl font-bold uppercase tracking-tight md:text-7xl">
          Professores
        </h2>

        <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {PROFESSORES.map((p, i) => (
            <article key={p.nome} className={`group ${i % 2 === 1 ? "lg:mt-16" : ""}`} data-cursor="VIEW">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src={p.img}
                  alt={`${p.nome} — ${p.especialidade}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg2/90 via-transparent to-transparent opacity-80" />
                <span className="font-display absolute right-4 top-4 text-xs tracking-[0.3em] text-fg/60">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display mt-5 text-3xl font-semibold uppercase leading-none tracking-tight">
                {p.nome}
              </h3>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-green-highlight">{p.faixa}</p>
              <p className="mt-1 text-sm text-fg-muted">
                {p.especialidade} · {p.anos} anos de experiência
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
