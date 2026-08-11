import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { ContatoForm } from "@/components/ui/ContatoForm";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { SITE_CONTACT } from "@/lib/data";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contato | TMD House",
  description: "Agende sua aula experimental na TMD House. Todo mundo começa em algum lugar.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        kicker="Aula experimental"
        title="Comece agora"
        text="Escolha a modalidade, preencha seus dados e você será direcionado ao WhatsApp da TMD House para agendar sua primeira aula."
        img={IMAGES.sections.cta}
        alt="Tatame com luz cinematográfica"
      />

      <section className="relative bg-bg2/70 backdrop-blur-md py-24 md:py-32" aria-label="Formulário de contato">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-[1fr_1.2fr] md:px-10">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">
              Fale com<br />a gente
            </h2>
            <ul className="mt-10 space-y-4 text-sm text-fg-muted">
              <li>
                <span className="font-display block text-xs uppercase tracking-[0.3em] text-green-highlight">Endereço</span>
                {SITE_CONTACT.endereco}
                <br />
                {SITE_CONTACT.cidade}
              </li>
              <li>
                <span className="font-display block text-xs uppercase tracking-[0.3em] text-green-highlight">Funcionamento</span>
                {SITE_CONTACT.horario}
              </li>
              <li>
                <span className="font-display block text-xs uppercase tracking-[0.3em] text-green-highlight">E-mail</span>
                <a href={`mailto:${SITE_CONTACT.email}`} className="text-fg hover:text-green-highlight">
                  {SITE_CONTACT.email}
                </a>
              </li>
              <li>
                <span className="font-display block text-xs uppercase tracking-[0.3em] text-green-highlight">WhatsApp</span>
                {SITE_CONTACT.whatsappDisplay}
              </li>
              <li>
                <span className="font-display block text-xs uppercase tracking-[0.3em] text-green-highlight">Instagram</span>
                <a href={SITE_CONTACT.instagram} target="_blank" rel="noreferrer" className="text-fg hover:text-green-highlight">
                  {SITE_CONTACT.instagramHandle}
                </a>
              </li>
            </ul>
            <div className="mt-12 hidden md:block">
              <Image src={IMAGES.athletes.primary} alt="Atleta da TMD House de kimono azul" width={420} height={560} className="rounded-sm object-cover" />
            </div>
          </div>

          <ContatoForm />
        </div>
      </section>

      <section className="relative py-16 md:py-24" aria-label="Localização">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="font-display text-xs uppercase tracking-[0.5em] text-green-highlight">Como chegar</p>
          <h2 className="font-display mt-3 text-3xl font-bold uppercase tracking-tight md:text-5xl">No tatame</h2>
          <div className="mt-10">
            <MapEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
