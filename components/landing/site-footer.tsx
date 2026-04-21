import Image from "next/image";
import { WHATSAPP_NUMBER, socialLinks } from "@/data/landing";
import type { NavItem, SocialLink } from "@/types/landing";
import { Container } from "@/components/shared/container";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

type SiteFooterProps = {
  readonly navItems: readonly NavItem[];
  readonly whatsappHref: string;
};

const footerServices = [
  "Impressão sob medida",
  "Protótipos",
  "Peças decorativas",
  "Peças funcionais",
];

const footerResources = [
  "Atendimento rápido",
  "Orçamento via WhatsApp",
  "Produção personalizada",
  "Entrega sob consulta",
];

function SocialIcon({ platform }: { readonly platform: SocialLink["platform"] }) {
  if (platform === "instagram") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-6 w-6">
        <defs>
          <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEDA75" />
            <stop offset="35%" stopColor="#FA7E1E" />
            <stop offset="68%" stopColor="#D62976" />
            <stop offset="100%" stopColor="#962FBF" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="18" fill="url(#instagram-gradient)" />
        <rect
          x="16"
          y="16"
          width="32"
          height="32"
          rx="10"
          fill="none"
          stroke="#fff"
          strokeWidth="4"
        />
        <circle cx="32" cy="32" r="9" fill="none" stroke="#fff" strokeWidth="4" />
        <circle cx="43.5" cy="20.5" r="3" fill="#fff" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-6 w-6">
      <path
        d="M37.48 8h9.2c.3 4.24 1.82 7.58 6.32 10.44v9.16c-3.02.3-6.1-.7-9-2.56v17.26c0 10.98-8.4 18.7-18.54 18.7-10.74 0-18.46-8.42-18.46-18.46 0-11.28 9.08-18.94 20.26-18.58v9.74c-5.1-.66-10.4 2.08-10.4 8.84 0 4.42 3.24 8.18 8.22 8.18 4.8 0 8.14-3.54 8.14-8.12V8h4.26Z"
        fill="#25F4EE"
      />
      <path
        d="M40.92 8h8.88c.46 4.2 2.42 7.52 6.2 10.06v9c-3.18-.1-5.86-1.04-8.88-2.92v17.72c0 10.86-8.22 19.14-19 19.14-4.16 0-8.02-1.14-11.34-3.24 2.38 1.04 4.28 1.26 5.92 1.26 8.32 0 14.96-6.34 14.96-15.34V8h3.26Z"
        fill="#FE2C55"
      />
      <path
        d="M37.48 8v35.42c0 4.58-3.34 8.12-8.14 8.12-4.98 0-8.22-3.76-8.22-8.18 0-6.2 4.46-9.18 9.36-8.9v-9.58c-12.42-.36-21.48 8.1-21.48 18.82 0 10.04 7.72 18.46 18.46 18.46 10.14 0 18.54-7.72 18.54-18.7V25.2c2.9 1.86 5.98 2.86 9 2.56v-9.16C50.5 15.58 48.98 12.24 48.68 8h-11.2Z"
        fill="#111827"
      />
    </svg>
  );
}

export function SiteFooter({ navItems, whatsappHref }: SiteFooterProps) {
  return (
    <>
      <footer className="border-t border-black/10 bg-white/65 backdrop-blur-xl">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-12 border-b border-slate-200/80 pb-12 lg:grid-cols-[1.1fr_1.9fr] lg:gap-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm">
                  <Image
                    src="/image.png"
                    alt="Logo da Massu Shop"
                    width={56}
                    height={56}
                    className="h-12 w-12 object-cover sm:h-14 sm:w-14"
                    priority
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold tracking-[0.18em] text-ink">Massu3D</p>
                  <p className="text-sm text-slate-500">Impressão 3D moderna e personalizada</p>
                </div>
              </div>

              <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                Transformamos referências, arquivos e ideias em peças personalizadas com acabamento
                limpo, produção ágil e atendimento direto no WhatsApp.
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map((socialLink) => (
                  <a
                    key={socialLink.platform}
                    href={socialLink.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={socialLink.label}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-300"
                  >
                    <SocialIcon platform={socialLink.platform} />
                  </a>
                ))}
              </div>

              <div className="rounded-[1.5rem] border border-slate-200/80 bg-white/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Contato
                </p>
                <p className="mt-3 text-sm text-slate-600">Atendimento via WhatsApp</p>
                <p className="mt-1 text-base font-semibold text-ink">+{WHATSAPP_NUMBER}</p>
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 grid-cols-2 xl:grid-cols-3">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Navegação
                </p>
                <div className="flex flex-col gap-3 text-sm text-slate-600 sm:text-base">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="transition duration-300 hover:text-ink"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Serviços
                </p>
                <div className="flex flex-col gap-3 text-sm text-slate-600 sm:text-base">
                  {footerServices.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-5 sm:col-span-2 xl:col-span-1">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Recursos
                </p>
                <div className="flex flex-col gap-3 text-sm text-slate-600 sm:text-base">
                  {footerResources.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-10 text-center">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
            <div className="space-y-4">
              <p className="text-xl font-semibold tracking-[0.45em] text-ink sm:text-2xl">
                MASSU 3D
              </p>
              <div className="space-y-2 text-sm leading-7 text-slate-500 sm:text-base">
                <p>Feito com amor e em família.❤️</p>
                <p>© 2026 Massu Shop. Todos os direitos reservados.</p>
              </div>
            </div>
          </div>
        </Container>
      </footer>

      <WhatsAppButton
        href={whatsappHref}
        ariaLabel="Fazer encomenda no WhatsApp"
        className="fixed bottom-5 right-5 z-50 h-22 w-22 p-0 text-white shadow-2xl hover:scale-[1.02] hover:bg-[#20ba59]"
        iconClassName="h-16 w-16"
      />
    </>
  );
}
