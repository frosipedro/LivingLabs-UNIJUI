import type { NewsItem } from "../types";
import coverAgro1 from "@/assets/cover-agro-1.webp";
import coverAgro2 from "@/assets/cover-agro-2.webp";
import coverAgro3 from "@/assets/cover-agro-3.webp";
import coverSmart1 from "@/assets/cover-smart-1.webp";
import coverSmart2 from "@/assets/cover-smart-2.webp";
import coverSmart3 from "@/assets/cover-smart-3.webp";

export const news: NewsItem[] = [
  {
    _id: "n1",
    slug: "agro-firma-parceria-cooperativa",
    title: "Living Lab Agro firma parceria com cooperativa regional",
    lab: "agro",
    excerpt:
      "Acordo prevê instalação de 60 nós sensores em propriedades associadas ao longo de 2026.",
    cover: coverAgro1,
    body: `O Living Lab Agro da UNIJUI assinou nesta semana um acordo de cooperação técnica com uma das maiores cooperativas agropecuárias da região noroeste do RS.

A parceria viabiliza a expansão da rede experimental de sensores e o compartilhamento de dados anonimizados para pesquisas em manejo sustentável.`,
    publishedAt: "2026-05-20",
    author: "Comunicação UNIJUI",
    featured: true,
  },
  {
    _id: "n2",
    slug: "drones-reduzem-defensivos",
    title: "Estudo mostra redução de 35% no uso de defensivos com drones",
    lab: "agro",
    excerpt: "Resultados parciais da primeira safra acompanhada pelo lab foram apresentados em simpósio.",
    cover: coverAgro2,
    body: `Pesquisadores do Living Lab Agro apresentaram, no Simpósio Sul-Brasileiro de Agricultura de Precisão, resultados parciais do projeto de pulverização localizada.`,
    publishedAt: "2026-04-12",
    author: "Equipe Agro",
    featured: true,
  },
  {
    _id: "n3",
    slug: "novos-bolsistas-agro",
    title: "Living Lab Agro abre 12 vagas para bolsistas",
    lab: "agro",
    excerpt: "Inscrições abertas para alunos de graduação e mestrado até o fim do mês.",
    cover: coverAgro3,
    body: `O Living Lab Agro abriu inscrições para 12 vagas de bolsistas em projetos de IoT, visão computacional e gestão rural.`,
    publishedAt: "2026-03-30",
    author: "Coordenação Agro",
  },
  {
    _id: "n4",
    slug: "smart-cities-prefeitura-ijui",
    title: "Smart Cities e Prefeitura de Ijuí lançam painel de mobilidade",
    lab: "smart-cities",
    excerpt: "Plataforma pública entra no ar com dados em tempo quase real do trânsito urbano.",
    cover: coverSmart1,
    body: `O Living Lab Smart Cities e a Prefeitura de Ijuí lançaram oficialmente o painel público de mobilidade urbana, alimentado por uma rede de contadores instalados em vias estratégicas da cidade.`,
    publishedAt: "2026-05-08",
    author: "Comunicação UNIJUI",
    featured: true,
  },
  {
    _id: "n5",
    slug: "iluminacao-inteligente-resultados",
    title: "Iluminação inteligente reduz consumo em 28% em corredor piloto",
    lab: "smart-cities",
    excerpt: "Primeiros seis meses de operação trouxeram dados promissores sobre eficiência.",
    cover: coverSmart3,
    body: `Os primeiros seis meses do projeto de iluminação inteligente registraram redução de 28% no consumo energético do trecho monitorado.`,
    publishedAt: "2026-04-25",
    author: "Equipe Smart Cities",
    featured: true,
  },
  {
    _id: "n6",
    slug: "workshop-gemeo-digital",
    title: "Workshop internacional sobre gêmeos digitais acontece em junho",
    lab: "smart-cities",
    excerpt: "Evento reúne pesquisadores do Brasil, Portugal e Alemanha na UNIJUI.",
    cover: coverSmart2,
    body: `Em junho, o campus de Ijuí recebe pesquisadores internacionais para um workshop sobre gêmeos digitais aplicados a cidades médias.`,
    publishedAt: "2026-03-18",
    author: "Coordenação Smart Cities",
  },
];
