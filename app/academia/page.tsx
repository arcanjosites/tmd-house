import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Estrutura } from "@/components/sections/Estrutura";
import { Professores } from "@/components/sections/Professores";
import { Comunidade } from "@/components/sections/Comunidade";
import { CTAFinal } from "@/components/sections/CTAFinal";

export const metadata: Metadata = {
  title: "A Casa — TMD House",
  description: "Conheça a estrutura, os professores e a comunidade da TMD House.",
};

export default function AcademiaPage() {
  return (
    <>
      <PageHero
        kicker="Instituto Brazilian Jiu-Jitsu"
        title="A Casa"
        text="Mais que uma academia: uma casa. Tatame amplo, área de força, professores de referência e uma comunidade que puxa você para cima."
        img="/images/gym/tatame.jpg"
        alt="Tatame principal da TMD House"
      />
      <Estrutura />
      <Professores />
      <Comunidade />
      <CTAFinal />
    </>
  );
}
