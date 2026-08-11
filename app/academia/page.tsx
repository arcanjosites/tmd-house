import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Estrutura } from "@/components/sections/Estrutura";
import { Professores } from "@/components/sections/Professores";
import { Comunidade } from "@/components/sections/Comunidade";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "A Casa | TMD House",
  description: "Conheça a estrutura, os professores e a comunidade da TMD House.",
};

export default function AcademiaPage() {
  return (
    <>
      <PageHero
        kicker="Instituto Brazilian Jiu-Jitsu"
        title="A Casa"
        text="Tatame amplo, área de força, professores de referência e uma comunidade que puxa você para cima. Por isso chamamos de casa."
        img={IMAGES.gym.tatame}
        alt="Tatame principal da TMD House"
      />
      <Estrutura />
      <section className="relative py-16 md:py-24" aria-label="Localização da academia">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <p className="font-display text-xs uppercase tracking-[0.5em] text-green-highlight">Localização</p>
          <h2 className="font-display mt-3 text-3xl font-bold uppercase tracking-tight md:text-5xl">
            Onde treinamos
          </h2>
          <div className="mt-10">
            <MapEmbed />
          </div>
        </div>
      </section>
      <Professores />
      <Comunidade />
      <CTAFinal />
    </>
  );
}
