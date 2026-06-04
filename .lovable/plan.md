# Portal Living Labs UNIJUI — Plano

Portal em Português (BR) para dois Living Labs (Agro e Smart Cities), minimalista, com bastante animação, tipografia Space Grotesk + DM Sans, totalmente responsivo. Dados mocados agora, estruturados para futura migração para Sanity.

## Estrutura de rotas

```
/                 Home (branco, hero, dois acessos aos labs, "Em destaque")
/sobre            Sobre o portal e a UNIJUI
/projetos         Lista geral de projetos (filtro por lab)
/projetos/$slug   Página de detalhe do projeto
/noticias         Lista geral de notícias (filtro por lab)
/noticias/$slug   Página de detalhe da notícia
/agro             Living Lab Agro (tema verde escuro + off-white)
/smart-cities     Living Lab Smart Cities (tema navy + variações)
/equipe           Equipe (cards de pessoas)
/contato          Formulário (simulado, toast no envio)
```

Cada rota com `head()` próprio (title, description, og:title/description) em PT-BR.

## Design system

- **Tipografia:** Space Grotesk (headings) + DM Sans (body), via `@import` Google Fonts em `src/styles.css`.
- **Tema global (claro/branco):** fundo off-white quase puro, texto quase preto, acento neutro. Tokens em `oklch` no `:root`.
- **Tema Agro:** aplicado via classe `theme-agro` no wrapper da rota. Verde escuro profundo + off-white quente + acento verde-musgo.
- **Tema Smart Cities:** classe `theme-smart`. Navy escuro + cinza-azulado + acento ciano elétrico.
- Todos os tokens semânticos (`--background`, `--foreground`, `--primary`, `--accent`, `--muted`, `--border`) redefinidos dentro de cada classe de tema — componentes shadcn herdam automaticamente.
- Gradientes e sombras suaves definidos como tokens (`--gradient-hero`, `--shadow-soft`).

## Animação (personalidade)

- Reveal on scroll (fade + slide sutil) em seções — Intersection Observer leve, sem libs pesadas.
- Hero com texto animado (palavra rotativa: "Agro · Smart Cities · Inovação · UNIJUI") usando keyframes do CSS.
- Hover states caprichados: cards com leve scale + sombra, links com underline animado.
- Transição suave entre páginas (fade-in no mount da rota).
- Carrossel horizontal do "Em destaque" com scroll-snap + setas animadas.
- Toggle Notícias/Projetos com transição cross-fade.

## Home

1. Hero branco, headline grande em Space Grotesk, subhead, dois CTAs.
2. **Dois cards grandes** lado a lado (empilham no mobile): "Agro" (preview verde) e "Smart Cities" (preview navy) — cada card já mostra a personalidade do lab e leva para a rota.
3. Seção **"Em destaque"** com toggle Notícias / Projetos + carrossel horizontal com scroll-snap (3-4 visíveis em desktop, 1.2 em mobile, setas + swipe).
4. Faixa de números/impacto (projetos, parceiros, publicações).
5. Faixa CTA para Contato.

## Páginas dos Labs (Agro / Smart Cities)

Mesma estrutura, temas diferentes:
- Hero temático com pattern/textura sutil de fundo.
- Manifesto curto do lab.
- Linhas de pesquisa (grid de 3-4).
- Projetos do lab (grid filtrado).
- Notícias recentes do lab.
- Equipe vinculada.

## Páginas de lista e detalhe

- **/projetos** e **/noticias:** grid responsivo, filtro por lab (chips), busca por título.
- **/projetos/$slug** e **/noticias/$slug:** layout editorial — imagem de capa, título, meta (data, lab, autores), corpo, navegação prev/next, itens relacionados. `head()` derivado dos dados (inclui `og:image` da capa).

## Equipe

Grid de cards (foto, nome, papel, lab, link). Filtro por lab.

## Contato

Form com Nome, Email, Assunto, Mensagem (validação Zod + react-hook-form, componentes shadcn). Submit mostra `toast.success` do sonner e limpa o form. Bloco lateral com endereço da UNIJUI, email institucional e redes.

## Camada de dados (mock → Sanity-ready)

Tipos em `src/content/types.ts` espelhando schemas Sanity típicos:

```ts
type Lab = "agro" | "smart-cities";
type Project = { _id, slug, title, lab, summary, cover, body, tags, startedAt, members[] };
type NewsItem = { _id, slug, title, lab, excerpt, cover, body, publishedAt, author };
type Member  = { _id, slug, name, role, lab?, photo, bio, links };
```

Mocks em `src/content/mock/{projects,news,team}.ts`. Acesso via `src/content/api.ts` com funções `getProjects()`, `getProjectBySlug()`, etc. — assinatura idêntica à que um cliente Sanity exporia, para troca futura sem mexer nas páginas.

Imagens mocadas: gerar 6-8 capas (3 Agro, 3 Smart Cities, 2 genéricas) + hero de cada lab em `src/assets/`.

## Responsividade

Mobile-first com Tailwind. Breakpoints checados: 360, 414, 768, 1024, 1440, 1920+ (TV). Tipografia fluida (`clamp()`) nos headings. Grids colapsam para 1 coluna no mobile, carrossel vira swipe nativo.

## Detalhes técnicos

- Stack: TanStack Start (já configurado), Tailwind v4, shadcn, sonner, lucide-react, react-hook-form + zod.
- Layout compartilhado em `src/routes/__root.tsx`: Header sticky (logo UNIJUI Labs + nav + CTA) e Footer. Nav destaca rota ativa via `activeProps`.
- Tema por rota: wrapper `<div className="theme-agro">` em `/agro` (idem smart-cities) — tokens redefinidos em escopo, componentes shadcn herdam sem alteração.
- Animações via CSS keyframes + utilitário `animate-fade-in` / `animate-slide-up` no `styles.css`. Reveal-on-scroll via hook `useInView` simples.
- SEO: `head()` por rota, alt em todas imagens, H1 único por página, JSON-LD opcional em projetos/notícias.
- `og:image` apenas nas leaf routes (não no `__root`).

## Entregáveis desta build

1. Design system (tokens claro + temas Agro e Smart Cities, fontes, animações).
2. Layout raiz (Header, Footer, transição de página).
3. 10 rotas listadas acima, todas funcionais com mocks.
4. Componentes reutilizáveis: `LabCard`, `ProjectCard`, `NewsCard`, `MemberCard`, `FeaturedCarousel`, `LabHero`, `SectionReveal`.
5. Mock data (6+ projetos, 6+ notícias, 8+ pessoas) + imagens geradas.
6. Formulário de contato simulado.
7. Camada `content/api.ts` pronta para swap por Sanity (apenas trocar implementação interna).

Não inclui: integração real com Sanity, envio real de email, autenticação, CMS admin. Tudo isso fica plugável depois sem refactor das páginas.
