import Image from "next/image";
import type { NavItem } from "@/types/landing";
import { Container } from "@/components/shared/container";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

type SiteHeaderProps = {
  readonly navItems: readonly NavItem[];
  readonly whatsappHref: string;
};

export function SiteHeader({ navItems, whatsappHref }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <Container className="pt-4 sm:px-8">
        <div className="flex items-center justify-between rounded-full border border-white/70 bg-white px-4 py-3 sm:px-6">
          <a href="#" className="flex min-w-0 items-center gap-3">
            <div className="overflow-hidden rounded-full bg-transparent">
              <Image
                src="/image.png"
                alt="Logo da Massu Shop"
                width={52}
                height={52}
                className="h-11 w-11 object-cover sm:h-[52px] sm:w-[52px]"
                priority
              />
            </div>
            <div className="min-w-0 leading-tight">
              <p className="truncate text-lg font-semibold tracking-[0.1em] text-black sm:text-base">
                Massu3D
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition duration-300 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <WhatsAppButton
            href={whatsappHref}
            showIcon={false}
            className="bg-ink px-6 py-3 text-sm bg-gradient-to-br from-blue-600 to-ink font-medium text-white hover:bg-black/10 sm:px-6 sm:text-sm"
            iconClassName="h-4 w-4 sm:h-5 sm:w-5"
          >
            Contato
          </WhatsAppButton>
        </div>
      </Container>
    </header>
  );
}
