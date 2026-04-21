import type { ReactNode } from "react";

type ContainerProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12 ${className}`.trim()}>
      {children}
    </div>
  );
}
