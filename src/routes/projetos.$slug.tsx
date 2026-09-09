import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import {
  getProjectBySlug,
  getMemberById,
  LAB_LABEL,
  PROJECT_STATUS_LABEL,
  type Project,
} from "@/content/api";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }): { project: Project } => {
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
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
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
      <Link to="/projetos" className="link-underline mt-6 inline-block">
        Voltar para Projetos
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="container-page py-32 text-center">
      <h1 className="font-display text-2xl">Não foi possível carregar este projeto</h1>
      <p className="text-muted-foreground mt-2">{error.message}</p>
      <button
        onClick={reset}
        className="mt-6 px-4 py-2 rounded-md bg-primary text-primary-foreground"
      >
        Tentar novamente
      </button>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const members = project.members.map(getMemberById).filter(Boolean);

  return (
    <article className="pb-32">
      <div className="container-page pt-12">
        <Link
          to="/projetos"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" /> Todos os projetos
        </Link>
      </div>

      <div className="container-page pt-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start xl:gap-14">
          <div className="lg:col-span-7">
            <SectionReveal>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="px-2.5 py-1 rounded-full bg-accent text-accent-foreground font-medium">
                  {LAB_LABEL[project.lab]}
                </span>
                <span className="text-muted-foreground">Ano {project.year}</span>
                <span className="text-muted-foreground">
                  · {PROJECT_STATUS_LABEL[project.status]}
                </span>
              </div>
            </SectionReveal>
            <SectionReveal delay={100}>
              <h1 className="h-display mt-6">{project.title}</h1>
            </SectionReveal>
            <SectionReveal delay={200}>
              <p className="mt-6 max-w-3xl text-xl text-muted-foreground leading-relaxed">
                {project.excerpt}
              </p>
            </SectionReveal>
          </div>

          <SectionReveal delay={300} className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted lg:aspect-[5/6]">
              <img
                src={project.cover}
                alt={project.title}
                width={1920}
                height={1080}
                className="size-full object-cover"
              />
            </div>
          </SectionReveal>
        </div>
      </div>

      <div className="container-page mt-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start xl:gap-14">
          <div className="lg:col-span-7 xl:col-span-8">
            <SectionReveal>
              <div className="grid gap-10">
                <section>
                  <h2 className="eyebrow">Desafio</h2>
                  <p className="mt-3 max-w-3xl text-lg text-foreground/90 leading-relaxed">
                    {project.challenge}
                  </p>
                </section>

                <section>
                  <h2 className="eyebrow">Solução</h2>
                  <p className="mt-3 max-w-3xl text-lg text-foreground/90 leading-relaxed">
                    {project.solution}
                  </p>
                </section>

                <section>
                  <h2 className="eyebrow">Resultados</h2>
                  <p className="mt-3 max-w-3xl text-lg text-foreground/90 leading-relaxed">
                    {project.results}
                  </p>
                </section>
              </div>
            </SectionReveal>
          </div>

          <aside className="space-y-10 border-t border-border pt-10 lg:sticky lg:top-28 lg:col-span-5 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0 xl:col-span-4">
            <SectionReveal delay={120}>
              <div>
                <h2 className="eyebrow">Resumo</h2>
                <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Lab</dt>
                    <dd className="mt-1 font-medium">{LAB_LABEL[project.lab]}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Status</dt>
                    <dd className="mt-1 font-medium">{PROJECT_STATUS_LABEL[project.status]}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Ano</dt>
                    <dd className="mt-1 font-medium">{project.year}</dd>
                  </div>
                </dl>
              </div>
            </SectionReveal>

            <SectionReveal delay={160}>
              <div>
                <h2 className="eyebrow">Categorias</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className="px-3 py-1 text-xs font-medium rounded-full border border-border"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={200}>
              <div>
                <h2 className="eyebrow">Parceiros</h2>
                <ul className="mt-4 grid gap-2">
                  {project.partners.map((partner) => (
                    <li key={partner} className="text-sm text-foreground/90">
                      {partner}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            {members.length > 0 && (
              <SectionReveal delay={240}>
                <div>
                  <h2 className="eyebrow">Equipe envolvida</h2>
                  <ul className="mt-4 grid gap-2">
                    {members.map(
                      (m) =>
                        m && (
                          <li key={m._id} className="text-sm">
                            <span className="font-medium">{m.name}</span>{" "}
                            <span className="text-muted-foreground">— {m.role}</span>
                          </li>
                        ),
                    )}
                  </ul>
                </div>
              </SectionReveal>
            )}
          </aside>
        </div>
      </div>
    </article>
  );
}
