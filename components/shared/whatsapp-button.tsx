import Image from "next/image";
import type { ReactNode } from "react";

type WhatsAppButtonProps = {
  readonly href: string;
  readonly children?: ReactNode;
  readonly className?: string;
  readonly showIcon?: boolean;
  readonly iconClassName?: string;
  readonly ariaLabel?: string;
};

export function WhatsAppButton({
  href,
  children,
  className = "",
  showIcon = true,
  iconClassName,
  ariaLabel = "Abrir conversa no WhatsApp",
}: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center gap-3 rounded-full transition duration-300 ${className}`.trim()}
    >
      {showIcon ? (
        <Image
          src="/whatsapp.png"
          alt=""
          aria-hidden="true"
          width={100}
          height={100}
          className={iconClassName ?? "h-20 w-20"}
        />
      ) : null}
      {children ? <span>{children}</span> : null}
    </a>
  );
}
