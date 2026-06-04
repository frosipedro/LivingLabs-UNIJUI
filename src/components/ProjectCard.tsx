import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/api";
import { LAB_LABEL } from "@/content/api";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projetos/$slug"
      params={{ slug: project.slug }}
      className="group block hover-lift"
    >
      <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-muted">
        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          width={1280}
          height={800}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur text-xs font-medium">
          {LAB_LABEL[project.lab]}
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display font-semibold text-lg leading-snug group-hover:underline underline-offset-4 decoration-1">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{project.summary}</p>
        </div>
        <ArrowUpRight className="shrink-0 size-5 mt-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
