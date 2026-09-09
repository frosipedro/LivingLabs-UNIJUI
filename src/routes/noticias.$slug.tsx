import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { getNewsBySlug, LAB_LABEL, formatDate, type NewsItem } from "@/content/api";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }): { item: NewsItem } => {
    const item = getNewsBySlug(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData, params }) => {
    const n = loaderData?.item;
    if (!n) return { meta: [{ title: "Notícia" }] };
    return {
      meta: [
        { title: `${n.title} — UNIJUI Living Labs` },
        { name: "description", content: n.excerpt },
        { property: "og:title", content: n.title },
        { property: "og:description", content: n.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/noticias/${params.slug}` },
        { property: "og:image", content: n.cover },
        { name: "twitter:image", content: n.cover },
      ],
      links: [{ rel: "canonical", href: `/noticias/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <h1 className="font-display text-4xl">Notícia não encontrada</h1>
      <Link to="/noticias" className="link-underline mt-6 inline-block">
        Voltar para Notícias
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="container-page py-32 text-center">
      <h1 className="font-display text-2xl">Não foi possível carregar esta notícia</h1>
      <p className="text-muted-foreground mt-2">{error.message}</p>
      <button
        onClick={reset}
        className="mt-6 px-4 py-2 rounded-md bg-primary text-primary-foreground"
      >
        Tentar novamente
      </button>
    </div>
  ),
  component: NewsDetail,
});

function NewsDetail() {
  const { item } = Route.useLoaderData() as { item: NewsItem };
  return (
    <article className="pb-32">
      <div className="container-page pt-12">
        <Link
          to="/noticias"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" /> Todas as notícias
        </Link>
      </div>

      <div className="container-page pt-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start xl:gap-14">
          <div className="lg:col-span-7">
            <SectionReveal>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                {item.lab && (
                  <span className="px-2.5 py-1 rounded-full bg-accent text-accent-foreground font-medium">
                    {LAB_LABEL[item.lab]}
                  </span>
                )}
                <time className="text-muted-foreground" dateTime={item.publishedAt}>
                  {formatDate(item.publishedAt)}
                </time>
                <span className="text-muted-foreground">· {item.readTime} de leitura</span>
              </div>
            </SectionReveal>
            <SectionReveal delay={100}>
              <h1 className="h-display mt-6">{item.title}</h1>
            </SectionReveal>
            <SectionReveal delay={200}>
              <p className="mt-6 max-w-3xl text-xl text-muted-foreground leading-relaxed">
                {item.excerpt}
              </p>
            </SectionReveal>
          </div>

          <SectionReveal delay={300} className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted lg:aspect-[5/6]">
              <img
                src={item.cover}
                alt={item.title}
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
              <div className="max-w-3xl text-lg text-foreground/90 leading-relaxed whitespace-pre-line">
                {item.content}
              </div>
            </SectionReveal>
          </div>

          <aside className="space-y-10 border-t border-border pt-10 lg:sticky lg:top-28 lg:col-span-5 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0 xl:col-span-4">
            <SectionReveal delay={120}>
              <div>
                <h2 className="eyebrow">Sobre a notícia</h2>
                <dl className="mt-4 grid gap-y-4 text-sm">
                  {item.lab && (
                    <div>
                      <dt className="text-muted-foreground">Lab</dt>
                      <dd className="mt-1 font-medium">{LAB_LABEL[item.lab]}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-muted-foreground">Data</dt>
                    <dd className="mt-1 font-medium">
                      <time dateTime={item.publishedAt}>{formatDate(item.publishedAt)}</time>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Leitura</dt>
                    <dd className="mt-1 font-medium">{item.readTime}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Autor</dt>
                    <dd className="mt-1 font-medium">{item.author}</dd>
                  </div>
                </dl>
              </div>
            </SectionReveal>

            <SectionReveal delay={160}>
              <div>
                <h2 className="eyebrow">Categorias</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.categories.map((category) => (
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
          </aside>
        </div>
      </div>
    </article>
  );
}
