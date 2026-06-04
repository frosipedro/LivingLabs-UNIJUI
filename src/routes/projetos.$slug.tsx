import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { getProjectBySlug, getMemberById, LAB_LABEL, formatDate } from "@/content/api";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Projeto" }] };
    return {
      meta: [
        { title: `${p.title} — UNIJUI Living Labs` },
        { name: "description", content: p.summary },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projetos/${params.slug}` },
        { property: "og:image", content: p.cover },
        { name: "twitter:image", content: p.cover },
      ],
      links: [{ rel: "canonical", href: `/projetos/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <h1 className="font-display text-4xl">Projeto não encontrado</h1>
      <Link to="/projetos" className="link-underline mt-6 inline-block">Voltar para Projetos</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="container-page py-32 text-center">
      <h1 className="font-display text-2xl">Não foi possível carregar este projeto</h1>
      <p className="text-muted-foreground mt-2">{error.message}</p>
      <button onClick={reset} className="mt-6 px-4 py-2 rounded-md bg-primary text-primary-foreground">Tentar novamente</button>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const members = project.members.map(getMemberById).filter(Boolean);

  return (
    <article className="pb-32">
      <div className="container-page pt-12">
        <Link to="/projetos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="size-4" /> Todos os projetos
        </Link>
      </div>

      <div className="container-page pt-10 max-w-4xl">
        <SectionReveal>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="px-2.5 py-1 rounded-full bg-accent text-accent-foreground font-medium">{LAB_LABEL[project.lab]}</span>
            <span className="text-muted-foreground">Início em {formatDate(project.startedAt)}</span>
            <span className="text-muted-foreground capitalize">· {project.status}</span>
          </div>
        </SectionReveal>
        <SectionReveal delay={100}>
          <h1 className="h-display mt-6">{project.title}</h1>
        </SectionReveal>
        <SectionReveal delay={200}>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">{project.summary}</p>
        </SectionReveal>
      </div>

      <SectionReveal delay={300}>
        <div className="container-page mt-12">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-muted">
            <img src={project.cover} alt={project.title} width={1920} height={1080} className="size-full object-cover" />
          </div>
        </div>
      </SectionReveal>

      <div className="container-page mt-16 max-w-3xl">
        <SectionReveal>
          <div className="prose max-w-none text-foreground/90 leading-relaxed text-lg whitespace-pre-line">
            {project.body}
          </div>
        </SectionReveal>

        <SectionReveal delay={120}>
          <div className="mt-12 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="px-3 py-1 text-xs font-medium rounded-full border border-border">{t}</span>
            ))}
          </div>
        </SectionReveal>

        {members.length > 0 && (
          <SectionReveal delay={200}>
            <div className="mt-16">
              <h2 className="eyebrow">Equipe envolvida</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {members.map((m) => m && (
                  <li key={m._id} className="text-sm">
                    <span className="font-medium">{m.name}</span>{" "}
                    <span className="text-muted-foreground">— {m.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        )}
      </div>
    </article>
  );
}
