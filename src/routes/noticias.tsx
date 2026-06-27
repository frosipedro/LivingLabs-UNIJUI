import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { SectionReveal } from "@/components/SectionReveal";
import { NewsCard } from "@/components/NewsCard";
import { getNews, LAB_LABEL, type Lab } from "@/content/api";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias — UNIJUI Living Labs" },
      { name: "description", content: "Últimas notícias dos Living Labs Agro e Smart Cities da UNIJUI." },
      { property: "og:title", content: "Notícias — UNIJUI Living Labs" },
      { property: "og:description", content: "Acompanhe as novidades dos Living Labs UNIJUI." },
      { property: "og:url", content: "/noticias" },
    ],
    links: [{ rel: "canonical", href: "/noticias" }],
  }),
  component: NoticiasPage,
});

function NoticiasPage() {
  const { pathname } = useLocation();
  const [filter, setFilter] = useState<Lab | "all">("all");
  const all = getNews();
  const list = filter === "all" ? all : all.filter((n) => n.lab === filter);
  const isListRoute = pathname === "/noticias" || pathname === "/noticias/";

  if (!isListRoute) {
    return <Outlet />;
  }

  return (
    <section className="container-page pt-20 md:pt-28 pb-24">
      <SectionReveal><span className="eyebrow">Notícias</span></SectionReveal>
      <SectionReveal delay={100}>
        <h1 className="h-display mt-4 max-w-3xl">O que aconteceu por aqui.</h1>
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
            {opt === "all" ? "Todas" : LAB_LABEL[opt]}
          </button>
        ))}
      </div>

      <div key={filter} className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 animate-[fade-in_0.5s_ease-out]">
        {list.map((n, i) => (
          <SectionReveal key={n._id} delay={i * 60}>
            <NewsCard item={n} />
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
