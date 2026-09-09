# Living Labs UNIJUÍ — Portal Web

Portal institucional para os _Living Labs_ da UNIJUÍ, reunindo os eixos **Agro** e **Smart Cities** em um único ambiente digital: projetos, notícias, equipe, sensores e canais de contato.

O projeto foi preparado para demonstração e execução local. Os dados apresentados são demonstrativos e a publicação em ambiente institucional poderá ser definida posteriormente pela universidade.

Desenvolvido como Estágio Obrigatório do curso de Ciência da Computação — UNIJUÍ.

- **Aluno:** Pedro Rockenbach Frosi
- **Orientador:** Prof. Dr. Sandro Sawicki

---

## Sobre o problema

As informações dos _Living Labs_ estavam dispersas entre materiais institucionais, sem um ambiente digital único, dificultando a divulgação para estudantes, pesquisadores, empresas, cooperativas e comunidade. Este portal centraliza essas informações, mantendo identidades visuais distintas para cada laboratório.

## Stack

- **React 19** — biblioteca de interface, componentização
- **TypeScript** — tipagem estática
- **TanStack Start / Router / Query** — roteamento, SSR e estado assíncrono
- **Tailwind CSS 4** — estilização utilitária e responsividade
- **React Hook Form + Zod** — controle e validação de formulários
- **Radix UI** — base de componentes acessíveis (`src/components/ui`)
- **Sonner** — notificações de retorno
- **Lucide React** — ícones

> A configuração de build (`vite.config.ts`) usa `@lovable.dev/vite-tanstack-config`, que embute os plugins de TanStack Start, React, Tailwind, path aliases e integração de build. Não remova/adicione esses plugins manualmente — o próprio arquivo alerta sobre duplicação de plugins.

## Estrutura do projeto

```
src/
├── assets/            # imagens, logotipos (UNIJUÍ, capas Agro/Smart Cities)
├── components/        # componentes reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LabCard.tsx
│   ├── LabHero.tsx
│   ├── ProjectCard.tsx
│   ├── NewsCard.tsx
│   ├── SensorCard.tsx
│   ├── SensorSection.tsx
│   ├── MemberCard.tsx
│   ├── FeaturedCarousel.tsx
│   ├── SectionReveal.tsx
│   └── ui/            # componentes base (Radix UI)
├── content/           # camada de conteúdo (tipos + consultas)
│   ├── types.ts        # Project, NewsItem, Sensor, Member, Lab, status enums
│   ├── api.ts           # funções de consulta (getProjects, getNews, getSensors, getTeam...)
│   └── mock/            # dados simulados (projects, news, sensors, team)
├── routes/            # páginas e rotas (TanStack Router)
│   ├── __root.tsx       # layout global, providers, header/footer, erros
│   ├── index.tsx        # página inicial
│   ├── sobre.tsx
│   ├── agro.tsx
│   ├── smart-cities.tsx
│   ├── projetos.tsx
│   ├── projetos.$slug.tsx
│   ├── noticias.tsx
│   ├── noticias.$slug.tsx
│   ├── equipe.tsx
│   └── contato.tsx
└── server.ts          # camada SSR / normalização de erros
```

## Modelo de conteúdo

Os principais tipos, definidos em `src/content/types.ts`:

- **`Project`** — projetos vinculados a um laboratório (`Lab`), com desafio, solução, resultados, parceiros e `members: string[]` (IDs de membros)
- **`NewsItem`** — notícias e atualizações institucionais
- **`Sensor`** — leituras simuladas (localização, métrica, valor, status)
- **`Member`** — integrantes da equipe

A relação `Project ↔ Member` é **unidirecional**: um projeto referencia seus membros por ID, mas `Member` não mantém coleção inversa de projetos. Suficiente para as telas atuais; pode ser estendida sem quebrar o modelo existente.

A origem dos dados hoje é local (`src/content/mock`), mas isolada atrás de `src/content/api.ts`. Trocar por uma API, CMS ou banco de dados real exige alterar apenas as implementações desse arquivo — as páginas e componentes não precisam mudar.

## Como rodar localmente

**Pré-requisitos:**

- Bun (versão estável atual)
- Git (opcional, apenas para clonar)

**Instalação e desenvolvimento:**

```bash
# instalar dependências
bun install

# iniciar servidor de desenvolvimento
bun run dev
```

A aplicação fica disponível no endereço indicado pelo terminal. Normalmente, neste projeto, é `http://localhost:8080`.

**Build local:**

```bash
bun run build      # gera a build de produção
bun run preview    # pré-visualiza a build localmente
```

O comando `preview` serve a build gerada localmente. Para a entrega acadêmica, não é necessário configurar hospedagem, banco de dados ou serviços externos.

**Lint e formatação:**

```bash
bun run lint
bun run typecheck
bun run format
```

O projeto utiliza TanStack Start com renderização no servidor e está configurado para ser executado localmente. Uma publicação futura deverá ser ajustada ao ambiente escolhido pela universidade; hospedagem estática simples, como GitHub Pages ou Nginx sem runtime, não é garantida por esta configuração.

## Comportamento da interface

- Navegação responsiva para smartphones, tablets e desktops
- Menu mobile com rolagem própria e fundo adaptado ao laboratório atual
- Transição suave nas imagens principais das páginas Agro e Smart Cities
- Carrossel de projetos e notícias com arraste livre em telas pequenas
- Conteúdo separado em componentes reutilizáveis e dados locais simulados

## Limitações atuais

Este é um **protótipo funcional**, não um sistema em produção:

- Dados simulados (mock), sem persistência real
- Sem autenticação, área administrativa ou controle de permissões
- Formulário de contato valida os campos, mas não envia dados a um backend real
- Sensores exibem valores simulados, não telemetria real
- Sem suíte de testes automatizados
- Sem auditoria formal de acessibilidade (WCAG) ou validação de usabilidade com usuários reais — foram realizadas verificações técnicas manuais de contraste, navegação e responsividade

## Trabalhos futuros

- Integração com CMS, API institucional ou banco de dados
- Autenticação e controle de permissões para área administrativa
- Conexão de sensores a fontes reais de telemetria
- Envio e armazenamento real das mensagens de contato
- Testes automatizados, auditoria de acessibilidade e validação com usuários

## Nota sobre uso de ferramentas de IA

Em conformidade com as diretrizes de uso de IA da UNIJUÍ: ferramentas de IA foram utilizadas como apoio ao desenvolvimento (sugestão e revisão de código), à escrita do relatório técnico e ao estudo de conceitos relacionados ao projeto. Adicionalmente, a ferramenta **Lovable** foi utilizada em etapa exploratória inicial para gerar um protótipo de estrutura técnica (stack TanStack Start/Router), posteriormente revisado, corrigido e expandido manualmente pelo autor. Decisões técnicas e de projeto, bem como a elaboração final do trabalho, foram de responsabilidade do autor.
