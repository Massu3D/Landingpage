import type { FinalCtaContent } from "@/types/landing";
import { Container } from "@/components/shared/container";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

type FinalCtaSectionProps = {
  readonly content: FinalCtaContent;
  readonly whatsappHref: string;
};

export function FinalCtaSection({ content, whatsappHref }: FinalCtaSectionProps) {
  return (
    <section className="pb-24 pt-8">
      <Container>
        <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-700 to-blue-900 px-8 py-12 text-white shadow-card sm:px-12 sm:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                {content.eyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">{content.title}</h2>
              <p className="text-base leading-8 text-white/75">{content.description}</p>
            </div>
            <WhatsAppButton
              href={whatsappHref}
              showIcon={false}
              className="bg-white px-8 py-4 text-sm font-semibold text-ink hover:-translate-y-0.5 hover:bg-slate-100"
            >
              {content.buttonLabel}
            </WhatsAppButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
