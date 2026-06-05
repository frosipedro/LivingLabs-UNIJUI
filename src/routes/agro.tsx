import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { LabHero } from "@/components/LabHero";
import { ProjectCard } from "@/components/ProjectCard";
import { NewsCard } from "@/components/NewsCard";
import { SensorSection } from "@/components/SensorSection";
import { MemberCard } from "@/components/MemberCard";
import { getProjects, getNews, getSensors, getTeam } from "@/content/api";
import heroAgro from "@/assets/agro-hero.webp";

export const Route = createFileRoute("/agro")({
  head: () => ({
    meta: [
      { title: "Living Lab Agro — UNIJUI" },
      {
        name: "description",
        content:
          "Pesquisa aberta em IoT, drones, dados e cooperação para a agricultura do sul do Brasil.",
      },
      { property: "og:title", content: "Living Lab Agro — UNIJUI" },
      {
        property: "og:description",
        content: "Tecnologia e dados para o campo, a partir do interior do RS.",
      },
      { property: "og:url", content: "/agro" },
      { property: "og:image", content: heroAgro },
      { name: "twitter:image", content: heroAgro },
    ],
    links: [{ rel: "canonical", href: "/agro" }],
  }),
  component: AgroPage,
});

const LINES = [
  {
    t: "Sensoriamento de campo",
    d: "Redes LoRaWAN e nós de baixo custo para monitorar solo, clima e culturas.",
  },
  { t: "Aeronaves remotas", d: "Drones para mapeamento multiespectral e pulverização localizada." },
  {
    t: "Plataformas abertas",
    d: "Software livre para gestão rural e abertura de dados agronômicos.",
  },
  {
    t: "Agricultura familiar",
    d: "Tecnologias acessíveis, em parceria com cooperativas e sindicatos da região.",
  },
];

function AgroPage() {
  const projects = getProjects({ lab: "agro" });
  const news = getNews({ lab: "agro" }).slice(0, 3);
  const sensors = getSensors({ lab: "agro" });
  const team = getTeam({ lab: "agro" });

  return (
    <div className="theme-agro bg-background text-foreground -mt-16 md:-mt-20">
      <LabHero
        title="Agro. Do dado bruto ao manejo melhor."
        intro="Pesquisa aplicada em parceria com produtores, cooperativas e indústrias do agronegócio. Trabalhamos com IoT, sensoriamento remoto, dados e visão computacional para que tecnologia chegue de verdade ao campo."
        image={heroAgro}
      />

      {/* Manifesto */}
      <section className="container-page py-24 md:py-32 max-w-4xl">
        <SectionReveal>
          <span className="eyebrow">Manifesto</span>
        </SectionReveal>
        <SectionReveal delay={100}>
          <p className="mt-6 font-display text-2xl md:text-4xl leading-tight tracking-tight">
            Acreditamos que a fronteira da agricultura moderna não é só tecnológica — é também
            social, ambiental e cooperativa.
          </p>
        </SectionReveal>
      </section>

      {/* Lines */}
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

      {/* Projects */}
      <section className="container-page py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="eyebrow">Projetos</span>
            <h2 className="h-section mt-3">Em campo agora</h2>
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

      {/* News */}
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

      <SensorSection sensors={sensors} title="Dados do campo em tempo real" />

      {/* Team */}
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
