type SectionHeadingProps = {
  readonly eyebrow: string;
  readonly title: string;
  readonly description?: string;
  readonly align?: "left" | "between";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  if (align === "between") {
    return (
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{title}</h2>
        </div>
        {description ? (
          <p className="max-w-xl text-sm leading-7 text-slate-600">{description}</p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="mb-10 max-w-2xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-8 text-slate-600">{description}</p> : null}
    </div>
  );
}
