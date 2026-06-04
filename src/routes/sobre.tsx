import { createFileRoute } from "@tanstack/react-router";
import { SectionReveal } from "@/components/SectionReveal";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — UNIJUI Living Labs" },
      { name: "description", content: "Conheça os Living Labs Agro e Smart Cities da UNIJUI: missão, abordagem e parcerias." },
      { property: "og:title", content: "Sobre os Living Labs UNIJUI" },
      { property: "og:description", content: "Missão, abordagem e parcerias dos laboratórios vivos da UNIJUI." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <section className="container-page pt-20 md:pt-28 pb-24">
      <SectionReveal>
        <span className="eyebrow">Sobre</span>
      </SectionReveal>
      <SectionReveal delay={100}>
        <h1 className="h-display mt-4 max-w-4xl">
          Pesquisa que sai do papel e vai para o território.
        </h1>
      </SectionReveal>

      <div className="mt-16 grid gap-12 md:grid-cols-2 max-w-5xl">
        {[
          {
            title: "O que é um Living Lab?",
            body: "Um Living Lab é um ambiente de pesquisa aberta onde universidade, comunidade, poder público e empresas constroem soluções em conjunto — testando, errando e melhorando em situações reais.",
          },
          {
            title: "Por que dois labs?",
            body: "A UNIJUI está enraizada em uma região onde o campo e a cidade são economicamente e culturalmente indissociáveis. Dois labs permitem foco temático sem perder a integração.",
          },
          {
            title: "Como trabalhamos",
            body: "Em ciclos curtos, com protótipos no campo e na cidade. Os dados gerados são abertos sempre que possível e os resultados são compartilhados com a sociedade.",
          },
          {
            title: "Quem participa",
            body: "Professores, pesquisadores, bolsistas, comunidades rurais, cooperativas, prefeituras e empresas parceiras. Sempre buscando equilíbrio entre rigor científico e impacto prático.",
          },
        ].map((b, i) => (
          <SectionReveal key={b.title} delay={i * 100}>
            <h2 className="font-display text-2xl font-semibold">{b.title}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{b.body}</p>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
