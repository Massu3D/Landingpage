import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

type ProcessSectionProps = {
  readonly steps: readonly string[];
};

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section id="como-funciona" className="py-16">
      <Container>
        <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-card sm:p-10">
          <SectionHeading
            eyebrow="Como funciona"
            title="Um processo simples para você pedir sem complicação"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step} className="rounded-[1.5rem] bg-[linear-gradient(180deg,_#ffffff,_#f8fbfe)] border p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:bg-white">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-900 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-base font-medium leading-7 text-slate-700">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
