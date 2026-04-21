import type {
  Benefit,
  FinalCtaContent,
  GalleryItem,
  HeroStat,
  NavItem,
  SocialLink,
  Testimonial,
} from "@/types/landing";

export const WHATSAPP_NUMBER = "5511922960716";
export const WHATSAPP_MESSAGE = "Olá, quero fazer uma encomenda 3D";

export const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const navItems: readonly NavItem[] = [
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export const socialLinks: readonly SocialLink[] = [
  {
    platform: "instagram",
    href: "https://instagram.com/massu.shop",
    label: "Instagram da Massu Shop",
  },
  {
    platform: "tiktok",
    href: "https://tiktok.com/@massu.shop3d",
    label: "TikTok da Massu Shop",
  },
];

export const heroStats: readonly HeroStat[] = [
  { value: "+120", label: "peças produzidas sob demanda" },
  { value: "1h", label: "para responder seu pedido" },
  { value: "100%", label: "personalizado para seu projeto" },
];

export const benefits: readonly Benefit[] = [
  {
    icon: "🚀",
    title: "Produção rápida",
    description: "Agilidade do orçamento até a fabricação para tirar sua ideia do papel.",
  },
  {
    icon: "🎯",
    title: "Alta precisão",
    description: "Acabamento consistente para protótipos, peças técnicas e projetos autorais.",
  },
  {
    icon: "🧩",
    title: "Personalização total",
    description: "Cada peça é adaptada ao seu uso, medida e objetivo.",
  },
  {
    icon: "💰",
    title: "Preço acessível",
    description: "Soluções sob medida com ótimo custo-benefício para pequenas e grandes demandas.",
  },
];

export const services: readonly string[] = [
  "Impressão 3D personalizada",
  "Protótipos para validação",
  "Peças decorativas exclusivas",
  "Peças funcionais e reposição",
];

export const galleryItems: readonly GalleryItem[] = [
  {
    title: "Jesus Cristo",
    imageSrc: "/gallery1.jpg",
    imageAlt: "Peça impressa em 3D da Massu3D em destaque",
    description: "Projeto personalizado com acabamento limpo e presença visual forte.",
  },
  {
    title: "Vaso Moderno",
    imageSrc: "/gallery2.jpg",
    imageAlt: "Protótipo funcional impresso em 3D",
    description: "Validação rápida de formato, encaixe e aplicação prática da peça.",
  },
  {
    title: "Miniatura Fenix",
    imageSrc: "/gallery3.jpg",
    imageAlt: "Detalhe de uma peça técnica feita em impressão 3D",
    description: "Precisão e consistência para componentes de uso real e sob medida.",
  },
  {
    title: "Suporte para Headset",
    imageSrc: "/gallery4.jpg",
    imageAlt: "Peça finalizada produzida em impressão 3D",
    description: "Resultado final pensado para unir estética, função e qualidade.",
  },
];

export const processSteps: readonly string[] = [
  "Você envia sua ideia",
  "Nós modelamos ou analisamos o arquivo",
  "Produzimos na impressora 3D",
  "Entregamos para você",
];

export const testimonials: readonly Testimonial[] = [
  {
    name: "Camila - São Paulo",
    imageSrc: "/foto1.jpeg",
    text: "Precisava de uma peça funcional que não encontrava pronta. A Massu resolveu rápido e com ótimo acabamento.",
  },
  {
    name: "Lucas - Minas Gerais",
    imageSrc: "/foto3.jpeg",
    text: "O protótipo saiu exatamente como eu precisava para validar meu projeto. Atendimento direto e processo muito prático.",
  },
  {
    name: "Fernanda - Fortaleza",
    imageSrc: "/foto2.jpeg",
    text: "Pedi uma peça decorativa personalizada e ficou melhor do que eu imaginava. Recomendo pela qualidade e agilidade.",
  },
];

export const finalCta: FinalCtaContent = {
  eyebrow: "Faça seu pedido",
  title: "Pronto para criar sua peça 3D?",
  description:
    "Envie sua ideia no WhatsApp e receba atendimento para orçamento, modelagem e produção.",
  buttonLabel: "Fazer encomenda agora",
};
