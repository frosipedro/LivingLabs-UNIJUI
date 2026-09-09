import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionReveal } from "@/components/SectionReveal";
import { MemberCard } from "@/components/MemberCard";
import { getTeam, LAB_LABEL, type Lab } from "@/content/api";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe — UNIJUI Living Labs" },
      {
        name: "description",
        content: "Conheça as pessoas por trás dos Living Labs Agro e Smart Cities da UNIJUI.",
      },
      { property: "og:title", content: "Equipe — UNIJUI Living Labs" },
      {
        property: "og:description",
        content: "Pesquisadores, coordenadores e bolsistas dos labs UNIJUI.",
      },
      { property: "og:url", content: "/equipe" },
    ],
    links: [{ rel: "canonical", href: "/equipe" }],
  }),
  component: EquipePage,
});

function EquipePage() {
  const [filter, setFilter] = useState<Lab | "all">("all");
  const list = filter === "all" ? getTeam() : getTeam({ lab: filter });

  return (
    <section className="container-page pt-20 md:pt-28 pb-24">
      <SectionReveal>
        <span className="eyebrow">Equipe</span>
      </SectionReveal>
      <SectionReveal delay={100}>
        <h1 className="h-display mt-4 max-w-3xl">Pessoas que fazem os labs acontecer.</h1>
      </SectionReveal>

      <div className="mt-10 flex flex-wrap gap-2">
        {(["all", "agro", "smart-cities"] as const).map((opt) => (
          <button
            key={opt}
            onClick={() => setFilter(opt)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
              filter === opt
                ? "bg-foreground text-background border-foreground"
                : "border-border hover:bg-accent",
            )}
          >
            {opt === "all" ? "Todos" : LAB_LABEL[opt]}
          </button>
        ))}
      </div>

      <div
        key={filter}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-[fade-in_0.5s_ease-out]"
      >
        {list.map((m, i) => (
          <SectionReveal key={m._id} delay={i * 60}>
            <MemberCard member={m} />
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
