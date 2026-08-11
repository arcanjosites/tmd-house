import Image from "next/image";
import { INSTAGRAM_GALLERY, SITE_CONTACT } from "@/lib/data";

export function Comunidade() {
  return (
    <section className="relative py-28 md:py-36" aria-label="Comunidade">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">
            #nascidos<span className="text-green-highlight">para</span>vencer
          </h2>
          <a
            href={SITE_CONTACT.instagram}
            target="_blank"
            rel="noreferrer"
            data-cursor="OPEN"
            className="font-display text-xs uppercase tracking-[0.3em] text-fg-muted transition-colors hover:text-green-highlight"
          >
            Seguir {SITE_CONTACT.instagramHandle} →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-3 md:gap-5">
          {INSTAGRAM_GALLERY.map((f, i) => (
            <a
              key={`${f.src}-${i}`}
              href={f.href}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-sm"
              data-cursor="OPEN"
            >
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
