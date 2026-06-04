import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { LabCard } from "@/components/LabCard";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import heroAgro from "@/assets/hero-agro.jpg";
import heroSmart from "@/assets/hero-smart.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UNIJUI Living Labs — Inovação Aberta em Agro e Smart Cities" },
      { name: "description", content: "Portal dos Living Labs Agro e Smart Cities da UNIJUI. Projetos, notícias e pesquisa aberta." },
      { property: "og:title", content: "UNIJUI Living Labs" },
      { property: "og:description", content: "Inovação aberta em Agro e Smart Cities, a partir do interior do RS." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const STATS = [
  { value: "12+", label: "Projetos ativos" },
  { value: "30+", label: "Pesquisadores" },
  { value: "8", label: "Parceiros institucionais" },
  { value: "2024", label: "Ano de lançamento" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 md:pt-32 pb-24 md:pb-40">
        <div className="container-page">
          <SectionReveal>
            <span className="eyebrow">UNIJUI · Living Labs</span>
          </SectionReveal>
          <SectionReveal delay={120}>
            <h1 className="h-display mt-6 max-w-5xl">
              Pesquisa aberta para o{" "}
              <span className="italic font-normal text-muted-foreground">campo</span> e a{" "}
              <span className="italic font-normal text-muted-foreground">cidade</span>.
            </h1>
          </SectionReveal>
          <SectionReveal delay={280}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              Dois laboratórios vivos da Universidade Regional do Noroeste do Estado do RS, conectando ciência, comunidade e tecnologia.
            </p>
          </SectionReveal>
          <SectionReveal delay={440}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/agro" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-medium hover-lift">
                Conheça o Agro <ArrowRight className="size-4" />
              </Link>
              <Link to="/smart-cities" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-medium hover-lift">
                Conheça o Smart Cities <ArrowRight className="size-4" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Lab cards */}
      <section className="container-page">
        <div className="grid gap-5 md:grid-cols-2">
          <SectionReveal>
            <LabCard
              to="/agro"
              eyebrow="Living Lab 01"
              title="Agro"
              description="Tecnologia, dados e cooperação para a agricultura do sul do Brasil."
              image={heroAgro}
              theme="theme-agro"
            />
          </SectionReveal>
          <SectionReveal delay={150}>
            <LabCard
              to="/smart-cities"
              eyebrow="Living Lab 02"
              title="Smart Cities"
              description="Cidades médias mais inteligentes, transparentes e habitáveis."
              image={heroSmart}
              theme="theme-smart"
            />
          </SectionReveal>
        </div>
      </section>

      {/* Featured */}
      <FeaturedCarousel />

      {/* Stats */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-page py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <SectionReveal key={s.label} delay={i * 80}>
              <div className="font-display text-4xl md:text-5xl font-semibold tracking-tight">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-32">
        <SectionReveal>
          <div className="rounded-3xl border border-border p-10 md:p-16 bg-card flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="h-section">Quer construir junto?</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                Parcerias com empresas, prefeituras, cooperativas e demais universidades são bem-vindas.
              </p>
            </div>
            <Link to="/contato" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-medium hover-lift self-start">
              Fale com a equipe <ArrowRight className="size-4" />
            </Link>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
