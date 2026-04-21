import type { Benefit } from "@/types/landing";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

type BenefitsSectionProps = {
  readonly benefits: readonly Benefit[];
};

export function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Benefícios"
          title="Qualidade, velocidade e clareza em cada encomenda"
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group rounded-[1.75rem] border border-white/70 bg-[linear-gradient(180deg,_rgba(255,255,255,0.96),_rgba(239,247,255,0.7))] p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-soft text-2xl transition duration-300 group-hover:scale-105">
                {benefit.icon}
              </span>
              <h3 className="mb-3 text-xl font-semibold">{benefit.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{benefit.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
