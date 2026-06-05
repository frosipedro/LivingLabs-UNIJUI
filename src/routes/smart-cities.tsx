import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { LabHero } from "@/components/LabHero";
import { ProjectCard } from "@/components/ProjectCard";
import { NewsCard } from "@/components/NewsCard";
import { MemberCard } from "@/components/MemberCard";
import { getProjects, getNews, getTeam } from "@/content/api";
import heroSmart from "@/assets/smartcity-hero.webp";

export const Route = createFileRoute("/smart-cities")({
  head: () => ({
    meta: [
      { title: "Living Lab Smart Cities — UNIJUI" },
      {
        name: "description",
        content:
          "Cidades médias mais inteligentes, transparentes e habitáveis a partir do interior do RS.",
      },
      { property: "og:title", content: "Living Lab Smart Cities — UNIJUI" },
      {
        property: "og:description",
        content: "Dados, sensores e gêmeos digitais aplicados a cidades médias.",
      },
      { property: "og:url", content: "/smart-cities" },
      { property: "og:image", content: heroSmart },
      { name: "twitter:image", content: heroSmart },
    ],
    links: [{ rel: "canonical", href: "/smart-cities" }],
  }),
  component: SmartPage,
});

const LINES = [
  {
    t: "Infraestrutura conectada",
    d: "Iluminação, mobilidade e energia em redes de sensores integradas.",
  },
  {
    t: "Dados abertos urbanos",
    d: "Pipelines públicos e dashboards para apoiar decisões municipais.",
  },
  { t: "Gêmeos digitais", d: "Modelagem 3D para simular intervenções antes de executá-las." },
  { t: "Cidadania digital", d: "Plataformas que aproximam moradores e gestão pública." },
];

function SmartPage() {
  const projects = getProjects({ lab: "smart-cities" });
  const news = getNews({ lab: "smart-cities" }).slice(0, 3);
  const team = getTeam({ lab: "smart-cities" });

  return (
    <div className="theme-smart bg-background text-foreground -mt-16 md:-mt-20">
      <LabHero
        title="Smart Cities. Tecnologia urbana de interesse público."
        intro="Trabalhamos com prefeituras, empresas e a comunidade para experimentar soluções de mobilidade, iluminação, dados abertos e gêmeos digitais em cidades médias do sul do Brasil."
        image={heroSmart}
      />

      <section className="container-page py-24 md:py-32 max-w-4xl">
        <SectionReveal>
          <span className="eyebrow">Manifesto</span>
        </SectionReveal>
        <SectionReveal delay={100}>
          <p className="mt-6 font-display text-2xl md:text-4xl leading-tight tracking-tight">
            Uma cidade inteligente não é a que tem mais sensores — é a que usa tecnologia para
            servir melhor às pessoas que vivem nela.
          </p>
        </SectionReveal>
      </section>

      <section className="container-page pb-24">
        <SectionReveal>
          <h2 className="h-section">Linhas de atuação</h2>
        </SectionReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {LINES.map((l, i) => (
            <SectionReveal key={l.t} delay={i * 80}>
              <div className="h-full p-6 rounded-2xl border border-border bg-card hover-lift">
                <div className="size-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-display font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg">{l.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{l.d}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="container-page py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="eyebrow">Projetos</span>
            <h2 className="h-section mt-3">Pilotando a cidade</h2>
          </div>
          <Link
            to="/projetos"
            className="text-sm link-underline hidden md:inline-flex items-center gap-1"
          >
            Todos os projetos <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <SectionReveal key={p._id} delay={i * 70}>
              <ProjectCard project={p} />
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="container-page py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="eyebrow">Notícias</span>
            <h2 className="h-section mt-3">Atualizações recentes</h2>
          </div>
          <Link
            to="/noticias"
            className="text-sm link-underline hidden md:inline-flex items-center gap-1"
          >
            Todas as notícias <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((n, i) => (
            <SectionReveal key={n._id} delay={i * 70}>
              <NewsCard item={n} />
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="container-page py-24 pb-32">
        <SectionReveal>
          <span className="eyebrow">Equipe</span>
          <h2 className="h-section mt-3">Quem faz acontecer</h2>
        </SectionReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <SectionReveal key={m._id} delay={i * 70}>
              <MemberCard member={m} />
            </SectionReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
