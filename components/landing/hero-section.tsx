import type { HeroStat } from "@/types/landing";
import { Container } from "@/components/shared/container";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

type HeroSectionProps = {
  readonly heroStats: readonly HeroStat[];
  readonly whatsappHref: string;
};

export function HeroSection({ heroStats, whatsappHref }: HeroSectionProps) {
  return (
    <section className="pt-28 sm:pt-36">
      <Container className="flex min-h-screen flex-col justify-center pb-16">
        <div className="flex flex-col items-center gap-12 text-center">
          <div className="animate-fadeUp flex w-full max-w-4xl flex-col items-center space-y-8">
            <span className="inline-flex rounded-full border border-black/20 bg-white/70 px-4 py-2 text-sm font-medium text-slate-600 shadow-card backdrop-blur">
              Impressão 3D personalizada com atendimento rápido
            </span>
            <div className="flex flex-col items-center space-y-5">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-7xl">
                Transforme ideias em realidade com impressão 3D
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Peças personalizadas, protótipos e soluções sob medida com alta qualidade.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <WhatsAppButton
                href={whatsappHref}
                showIcon={false}
                className="bg-ink px-7 py-4 text-md bg-gradient-to-br from-blue-600 to-blue-900 font-semibold text-white hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Fazer encomenda
              </WhatsAppButton>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-[linear-gradient(180deg,_rgba(255,255,255,0.96),_rgba(239,247,255,0.7))] px-7 py-4 text-md font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300"
              >
                Ver como funciona
              </a>
            </div>
            <div className="grid w-full max-w-3xl grid-cols-1 gap-4 pt-2 text-sm text-slate-600 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border bg-white/55 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  <p className="text-2xl font-semibold text-ink">{stat.value}</p>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fadeUp [animation-delay:0.15s] w-full">
            <div className="relative mx-auto w-full max-w-3xl">
              <div className="absolute inset-0 translate-y-4 rounded-[2rem] bg-white/50 blur-2xl sm:-translate-x-4" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-transparent p-2 shadow-card backdrop-blur sm:rounded-[2rem] sm:p-6">
                <div className="grid gap-3 rounded-[1.5rem] bg-[linear-gradient(135deg,_rgba(167,199,231,0.25),_rgba(245,245,220,0.55))] p-3 sm:gap-4 sm:p-6">
                  <div className="flex items-center justify-between rounded-full bg-white/80 px-4 py-3 text-sm text-ink">
                    <span>Massu3D</span>
                    <span>3D Studio</span>
                  </div>
                  <div className="grid min-h-[240px] place-items-center rounded-[1.5rem] bg-white/80 p-3 sm:min-h-[320px] sm:p-6">
                    <div className="relative h-52 w-full max-w-[26rem] animate-float sm:h-64 sm:max-w-sm">
                      <div className="absolute left-1/2 top-0 h-24 w-40 -translate-x-1/2 rounded-[2rem] bg-[#dbeafe] shadow-lg sm:h-28 sm:w-28" />
                      <div className="absolute left-2 top-20 h-32 w-32 rotate-[-12deg] rounded-[2rem] border border-white bg-[#f5f5dc] shadow-lg sm:left-8 sm:h-36 sm:w-36" />
                      <div className="absolute right-2 top-24 h-36 w-36 rotate-[18deg] rounded-[2.2rem] bg-gradient-to-br from-[#c7def2] to-blue-500 shadow-xl sm:right-6 sm:h-40 sm:w-40" />
                      <div className="absolute bottom-2 left-1/2 h-28 w-44 -translate-x-1/2 rounded-[2rem] bg-gradient-to-br from-blue-600 to-blue-700 shadow-2xl sm:h-24 sm:w-48" />
                      <div className="absolute inset-x-8 bottom-7 h-5 rounded-full bg-white/60 blur-md sm:inset-x-10" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-3 text-center text-sm text-slate-600 sm:grid-cols-3">
                    <div className="rounded-2xl bg-white px-3 py-4">Projetos únicos</div>
                    <div className="rounded-2xl bg-white px-3 py-4">Prototipagem</div>
                    <div className="rounded-2xl bg-white px-3 py-4">Entrega ágil</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
