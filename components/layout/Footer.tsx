import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE_CONTACT } from "@/lib/data";
import { IMAGES } from "@/lib/images";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-bg2/60 backdrop-blur-md">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <Image src={IMAGES.logo} alt="Logo TMD House" width={64} height={64} className="rounded-full" />
              <div>
                <p className="font-display text-2xl font-semibold uppercase tracking-[0.2em]">TMD House</p>
                <p className="text-xs uppercase tracking-[0.3em] text-green-highlight">#nascidosparavencer</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-fg-muted">
              Instituto de Brazilian Jiu-Jitsu. Técnica, disciplina e comunidade, dentro e fora do tatame.
            </p>
          </div>

          <nav aria-label="Links do site">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-fg-muted">Navegação</p>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} prefetch className="text-sm text-fg transition-colors hover:text-green-highlight">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-fg-muted">Contato</p>
            <ul className="mt-5 space-y-2.5 text-sm text-fg-muted">
              <li>{SITE_CONTACT.endereco}</li>
              <li>{SITE_CONTACT.cidade}</li>
              <li>{SITE_CONTACT.horario}</li>
              <li>
                <a href={`mailto:${SITE_CONTACT.email}`} className="text-fg hover:text-green-highlight">
                  {SITE_CONTACT.email}
                </a>
              </li>
              <li>{SITE_CONTACT.whatsappDisplay}</li>
              <li>
                <a href={SITE_CONTACT.instagram} target="_blank" rel="noreferrer" className="text-fg hover:text-green-highlight">
                  {SITE_CONTACT.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-line" aria-hidden="true">
        <p className="font-display whitespace-nowrap py-4 text-center text-[11vw] font-bold uppercase leading-none tracking-tight text-surface2 select-none">
          TMD HOUSE
        </p>
      </div>

      <div className="border-t border-line py-5 text-center text-xs text-fg-muted">
        © {new Date().getFullYear()} TMD House. Todos os direitos reservados.
      </div>
    </footer>
  );
}
