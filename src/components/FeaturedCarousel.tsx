import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getFeaturedNews, getFeaturedProjects } from "@/content/api";
import { ProjectCard } from "./ProjectCard";
import { NewsCard } from "./NewsCard";

type Tab = "projetos" | "noticias";

export function FeaturedCarousel() {
  const [tab, setTab] = useState<Tab>("projetos");
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const w = el.clientWidth * 0.8;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  const projects = getFeaturedProjects();
  const news = getFeaturedNews();

  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="eyebrow">Em destaque</span>
            <h2 className="h-section mt-3">O que está acontecendo agora</h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative grid grid-cols-2 rounded-full border border-border p-1 bg-card">
              <span
                aria-hidden
                className={cn(
                  "absolute inset-y-1 left-1 w-[calc(50%_-_0.25rem)] rounded-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  tab === "noticias" && "translate-x-full",
                )}
              />
              {(["projetos", "noticias"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={cn(
                    "relative z-10 px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-500",
                    tab === t ? "text-background" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {t === "projetos" ? "Projetos" : "Notícias"}
                </button>
              ))}
            </div>
            <div className="hidden md:flex gap-2">
              <button onClick={() => scrollBy(-1)} aria-label="Anterior" className="size-10 rounded-full border border-border hover:bg-accent flex items-center justify-center transition-colors">
                <ArrowLeft className="size-4" />
              </button>
              <button onClick={() => scrollBy(1)} aria-label="Próximo" className="size-10 rounded-full border border-border hover:bg-accent flex items-center justify-center transition-colors">
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div
          key={tab}
          ref={scrollerRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden animate-[fade-in_0.5s_ease-out]"
        >
          {tab === "projetos"
            ? projects.map((p) => (
                <div key={p._id} className="snap-start shrink-0 w-[78%] sm:w-[48%] lg:w-[32%]">
                  <ProjectCard project={p} />
                </div>
              ))
            : news.map((n) => (
                <div key={n._id} className="snap-start shrink-0 w-[78%] sm:w-[48%] lg:w-[32%]">
                  <NewsCard item={n} />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
