import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

type ServicesSectionProps = {
  readonly services: readonly string[];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="servicos" className="py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow="O que fazemos"
            title="Serviços sob medida para transformar qualquer ideia em peça real"
            description="Atendemos desde projetos pessoais até demandas para validação de produto, decoração ou uso funcional."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service}
                className="rounded-[1.75rem] border border-white/70 bg-[linear-gradient(180deg,_rgba(255,255,255,0.96),_rgba(239,247,255,0.7))] p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <span className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-900 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold">{service}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Desenvolvimento e produção com foco em acabamento, viabilidade e uso final da peça.
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
