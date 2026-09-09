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
    categories: ["Parcerias", "Sensoriamento", "Agro"],
    publishedAt: "2026-05-20",
    readTime: "3 min",
    author: "Comunicação UNIJUI",
    content: `O Living Lab Agro da UNIJUI assinou nesta semana um acordo de cooperação técnica com uma das maiores cooperativas agropecuárias da região noroeste do RS.

A parceria viabiliza a expansão da rede experimental de sensores e o compartilhamento de dados anonimizados para pesquisas em manejo sustentável.

A primeira etapa prevê a instalação de 60 nós sensores em propriedades associadas. Os dados coletados serão utilizados para acompanhar umidade do solo, temperatura, chuva e indicadores de desenvolvimento das culturas.

Além da infraestrutura tecnológica, a cooperação inclui formações com produtores, estudantes e técnicos da cooperativa. A proposta é aproximar pesquisa aplicada, extensão universitária e tomada de decisão no campo.`,
    featured: true,
  },
  {
    _id: "n2",
    slug: "drones-reduzem-defensivos",
    title: "Estudo mostra redução de 35% no uso de defensivos com drones",
    lab: "agro",
    excerpt:
      "Resultados parciais da primeira safra acompanhada pelo lab foram apresentados em simpósio.",
    cover: coverAgro2,
    categories: ["Pesquisa", "Drones", "Agricultura de Precisão"],
    publishedAt: "2026-04-12",
    readTime: "2 min",
    author: "Equipe Agro",
    content: `Pesquisadores do Living Lab Agro apresentaram, no Simpósio Sul-Brasileiro de Agricultura de Precisão, resultados parciais do projeto de pulverização localizada.

O estudo avaliou áreas de milho acompanhadas por drones multiespectrais e algoritmos de visão computacional. A combinação permitiu mapear pontos de aplicação e comparar o manejo localizado com práticas convencionais.

Segundo a equipe, os dados indicam redução de até 35% no uso de defensivos nas áreas analisadas, sem prejuízo ao controle agronômico observado no ciclo.`,
    featured: true,
  },
  {
    _id: "n3",
    slug: "novos-bolsistas-agro",
    title: "Living Lab Agro abre 12 vagas para bolsistas",
    lab: "agro",
    excerpt: "Inscrições abertas para alunos de graduação e mestrado até o fim do mês.",
    cover: coverAgro3,
    categories: ["Bolsas", "Formação", "Agro"],
    publishedAt: "2026-03-30",
    readTime: "2 min",
    author: "Coordenação Agro",
    content: `O Living Lab Agro abriu inscrições para 12 vagas de bolsistas em projetos de IoT, visão computacional e gestão rural.

As vagas são destinadas a estudantes de graduação e mestrado interessados em pesquisa aplicada, desenvolvimento de protótipos e atividades em campo com produtores parceiros.

As inscrições seguem abertas até o fim do mês. A seleção considera disponibilidade, aderência aos projetos e interesse em atuação interdisciplinar.`,
  },
  {
    _id: "n4",
    slug: "smart-cities-prefeitura-ijui",
    title: "Smart Cities e Prefeitura de Ijuí lançam painel de mobilidade",
    lab: "smart-cities",
    excerpt: "Plataforma pública entra no ar com dados em tempo quase real do trânsito urbano.",
    cover: coverSmart1,
    categories: ["Mobilidade", "Dados Abertos", "Gestão Pública"],
    publishedAt: "2026-05-08",
    readTime: "3 min",
    author: "Comunicação UNIJUI",
    content: `O Living Lab Smart Cities e a Prefeitura de Ijuí lançaram oficialmente o painel público de mobilidade urbana, alimentado por uma rede de contadores instalados em vias estratégicas da cidade.

A plataforma reúne dados de fluxo, horários de maior movimento e registros de ocorrências em um ambiente de consulta simples. O objetivo é apoiar decisões de planejamento urbano e ampliar a transparência sobre os dados coletados.

O painel será atualizado em ciclos contínuos, com novas camadas de informação previstas para as próximas etapas do projeto.`,
    featured: true,
  },
  {
    _id: "n5",
    slug: "iluminacao-inteligente-resultados",
    title: "Iluminação inteligente reduz consumo em 28% em corredor piloto",
    lab: "smart-cities",
    excerpt: "Primeiros seis meses de operação trouxeram dados promissores sobre eficiência.",
    cover: coverSmart3,
    categories: ["Iluminação", "Eficiência Energética", "Sensores"],
    publishedAt: "2026-04-25",
    readTime: "2 min",
    author: "Equipe Smart Cities",
    content: `Os primeiros seis meses do projeto de iluminação inteligente registraram redução de 28% no consumo energético do trecho monitorado.

O piloto combina luminárias LED conectadas, sensores de presença e telemetria de consumo. A rede também sinaliza falhas e oscilações, permitindo resposta mais rápida das equipes responsáveis.

Os dados serão utilizados para avaliar a expansão do modelo para outros corredores urbanos de Ijuí.`,
    featured: true,
  },
  {
    _id: "n6",
    slug: "workshop-gemeo-digital",
    title: "Workshop internacional sobre gêmeos digitais acontece em junho",
    lab: "smart-cities",
    excerpt: "Evento reúne pesquisadores do Brasil, Portugal e Alemanha na UNIJUI.",
    cover: coverSmart2,
    categories: ["Evento", "Gêmeos Digitais", "Internacionalização"],
    publishedAt: "2026-03-18",
    readTime: "2 min",
    author: "Coordenação Smart Cities",
    content: `Em junho, o campus de Ijuí recebe pesquisadores internacionais para um workshop sobre gêmeos digitais aplicados a cidades médias.

O encontro terá mesas técnicas, apresentação de casos e atividades práticas sobre modelagem 3D, integração de sensores e uso de dados ambientais em simulações urbanas.

A programação reúne especialistas do Brasil, Portugal e Alemanha, reforçando a agenda de cooperação internacional dos Living Labs UNIJUI.`,
  },
];
