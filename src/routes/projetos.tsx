import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { SectionReveal } from "@/components/SectionReveal";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjects, LAB_LABEL, type Lab } from "@/content/api";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — UNIJUI Living Labs" },
      { name: "description", content: "Todos os projetos dos Living Labs Agro e Smart Cities da UNIJUI." },
      { property: "og:title", content: "Projetos — UNIJUI Living Labs" },
      { property: "og:description", content: "Projetos ativos, concluídos e planejados dos Living Labs UNIJUI." },
      { property: "og:url", content: "/projetos" },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
  component: ProjetosPage,
});

function ProjetosPage() {
  const { pathname } = useLocation();
  const [filter, setFilter] = useState<Lab | "all">("all");
  const all = getProjects();
  const list = filter === "all" ? all : all.filter((p) => p.lab === filter);
  const isListRoute = pathname === "/projetos" || pathname === "/projetos/";

  if (!isListRoute) {
    return <Outlet />;
  }

  return (
    <section className="container-page pt-20 md:pt-28 pb-24">
      <SectionReveal><span className="eyebrow">Projetos</span></SectionReveal>
      <SectionReveal delay={100}>
        <h1 className="h-display mt-4 max-w-3xl">Pesquisa em movimento.</h1>
      </SectionReveal>

      <div className="mt-10 flex flex-wrap gap-2">
        {(["all", "agro", "smart-cities"] as const).map((opt) => (
          <button
            key={opt}
            onClick={() => setFilter(opt)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
              filter === opt ? "bg-foreground text-background border-foreground" : "border-border hover:bg-accent",
            )}
          >
            {opt === "all" ? "Todos" : LAB_LABEL[opt]}
          </button>
        ))}
      </div>

      <div key={filter} className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 animate-[fade-in_0.5s_ease-out]">
        {list.map((p, i) => (
          <SectionReveal key={p._id} delay={i * 60}>
            <ProjectCard project={p} />
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
