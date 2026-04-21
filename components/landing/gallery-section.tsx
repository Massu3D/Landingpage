import Image from "next/image";
import type { GalleryItem } from "@/types/landing";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

type GallerySectionProps = {
  readonly items: readonly GalleryItem[];
};

export function GallerySection({ items }: GallerySectionProps) {
  return (
    <section id="galeria" className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Galeria"
          title="Exemplos de peças que podem ganhar forma"
          description="Peças reais para apresentar estilos de projetos personalizados, protótipos e componentes funcionais."
          align="between"
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[1.9rem] border border-white/70 bg-white shadow-card"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#f6f7f4] sm:h-96 sm:aspect-auto">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-contain object-center transition duration-500 group-hover:scale-105 sm:object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent sm:from-black/18" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
