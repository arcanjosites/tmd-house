import Image from "next/image";

const FOTOS = [
  { src: "/images/athlete-1.jpg", alt: "Atleta da TMD House de kimono azul com patches da equipe" },
  { src: "/images/hero/frame-3.jpg", alt: "Treino de Jiu-Jitsu na TMD House" },
  { src: "/images/athlete-2.jpg", alt: "Atleta com jaqueta TMD House" },
  { src: "/images/hero/frame-6.jpg", alt: "Atleta no tatame da TMD House" },
];

export function Comunidade() {
  return (
    <section className="relative bg-bg2 py-28 md:py-36" aria-label="Comunidade">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">
            #nascidos<span className="text-green-highlight">para</span>vencer
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            data-cursor="OPEN"
            className="font-display text-xs uppercase tracking-[0.3em] text-fg-muted transition-colors hover:text-green-highlight"
          >
            Seguir @tmdhouse →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {FOTOS.map((f) => (
            <div key={f.src} className="group relative aspect-square overflow-hidden rounded-sm" data-cursor="VIEW">
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-green-primary/0 transition-colors duration-500 group-hover:bg-green-primary/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
