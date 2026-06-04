import { ArrowDown } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

interface Props {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
}

export function LabHero({ eyebrow, title, intro, image }: Props) {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" aria-hidden />
      <div className="relative container-page pt-40 pb-24 md:pt-48">
        <SectionReveal>
          <span className="eyebrow text-foreground/80">{eyebrow}</span>
        </SectionReveal>
        <SectionReveal delay={120}>
          <h1 className="h-display mt-5 max-w-4xl">{title}</h1>
        </SectionReveal>
        <SectionReveal delay={240}>
          <p className="mt-7 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">{intro}</p>
        </SectionReveal>
        <SectionReveal delay={400}>
          <div className="mt-14 flex items-center gap-3 text-sm text-muted-foreground">
            <ArrowDown className="size-4 animate-bounce" />
            Conheça mais
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
