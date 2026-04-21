import Image from "next/image";
import type { Testimonial } from "@/types/landing";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

type TestimonialsSectionProps = {
  readonly testimonials: readonly Testimonial[];
};

function getInitials(name: string) {
  return name
    .split("-")[0]
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="depoimentos" className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem já encomendou destaca a praticidade e o resultado"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-card"
            >
              <div className="mb-5 flex items-center gap-4">
                {testimonial.imageSrc ? (
                  <div className="relative h-14 w-14 overflow-hidden rounded-full shadow-sm">
                    <Image
                      src={testimonial.imageSrc}
                      alt={testimonial.imageAlt ?? `Foto de ${testimonial.name}`}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,_#dbeafe,_#f5f5dc)] text-base font-semibold text-ink shadow-sm">
                    {getInitials(testimonial.name)}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">Cliente verificado</p>
                </div>
              </div>
              <p className="text-base leading-8 text-slate-600">&ldquo;{testimonial.text}&rdquo;</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
