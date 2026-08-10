import Image from "next/image";
import { LiquidButton } from "@/components/ui/LiquidButton";

export function CTAFinal() {
  return (
    <section className="relative overflow-hidden" aria-label="Aula experimental">
      <div className="relative min-h-[90vh]">
        <Image
          src="/images/sections/cta.jpg"
          alt="Tatame vazio com luz cinematográfica"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/40 to-bg" />
        <div className="relative mx-auto flex min-h-[90vh] max-w-[1400px] flex-col items-center justify-center px-6 text-center">
          <p className="font-display text-xs uppercase tracking-[0.5em] text-green-highlight">
            Aula experimental
          </p>
          <h2 className="font-display mt-6 text-5xl font-bold uppercase leading-[1.0] tracking-tight md:text-8xl">
            Todo mundo<br />começa em<br />algum lugar.
          </h2>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-fg-muted md:text-base">
            Sem experiência, sem kimono, sem problema. Venha sentir o tatame da TMD House.
            A primeira aula é por nossa conta.
          </p>
          <div className="mt-12">
            <LiquidButton href="/contato" size="lg">
              Agendar aula experimental
            </LiquidButton>
          </div>
        </div>
      </div>
    </section>
  );
}
