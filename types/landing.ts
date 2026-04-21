export type NavItem = {
  readonly label: string;
  readonly href: string;
};

export type SocialLink = {
  readonly platform: "instagram" | "tiktok";
  readonly href: string;
  readonly label: string;
};

export type Benefit = {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
};

export type HeroStat = {
  readonly value: string;
  readonly label: string;
};

export type GalleryItem = {
  readonly title: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly description: string;
};

export type Testimonial = {
  readonly name: string;
  readonly text: string;
  readonly imageSrc?: string;
  readonly imageAlt?: string;
};

export type FinalCtaContent = {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly buttonLabel: string;
};
