import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Horarios } from "@/components/sections/Horarios";
import { CTAFinal } from "@/components/sections/CTAFinal";

export const metadata: Metadata = {
  title: "Horários — TMD House",
  description: "Grade de horários de Jiu-Jitsu, Muay Thai, Karatê e Performance na TMD House.",
};

export default function HorariosPage() {
  return (
    <>
      <PageHero
        kicker="Rotina"
        title="Horários"
        text="Manhã, meio-dia e noite. Sempre existe um horário para você entrar no tatame."
        img="/images/gym/reception.jpg"
        alt="Recepção da TMD House"
      />
      <Horarios compact />
      <CTAFinal />
    </>
  );
}
