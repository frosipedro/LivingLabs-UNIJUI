import type { Project } from "../types";
import coverAgro1 from "@/assets/cover-agro-1.jpg";
import coverAgro2 from "@/assets/cover-agro-2.jpg";
import coverAgro3 from "@/assets/cover-agro-3.jpg";
import coverSmart1 from "@/assets/cover-smart-1.jpg";
import coverSmart2 from "@/assets/cover-smart-2.jpg";
import coverSmart3 from "@/assets/cover-smart-3.jpg";

export const projects: Project[] = [
  {
    _id: "p1",
    slug: "monitoramento-soja-iot",
    title: "Monitoramento de Soja com IoT",
    lab: "agro",
    summary:
      "Rede de sensores de baixo custo para acompanhar umidade do solo, temperatura e desenvolvimento da soja em propriedades da região noroeste do RS.",
    cover: coverAgro3,
    body: `O projeto desenvolve nós sensores de baixo custo, com comunicação LoRaWAN, instalados em propriedades parceiras. Os dados são processados em uma plataforma própria, que entrega indicadores de manejo em tempo real ao produtor.

A iniciativa envolve estudantes de Agronomia, Ciência da Computação e Engenharia Elétrica, articulando pesquisa aplicada com extensão. Os primeiros resultados apontam redução de até 18% no uso de água em irrigações suplementares.`,
    tags: ["IoT", "Soja", "LoRaWAN", "Sensoriamento"],
    startedAt: "2024-03-01",
    status: "ativo",
    members: ["m1", "m2", "m5"],
    featured: true,
  },
  {
    _id: "p2",
    slug: "drones-pulverizacao-precisao",
    title: "Drones para Pulverização de Precisão",
    lab: "agro",
    summary:
      "Mapeamento aéreo e pulverização localizada com drones, reduzindo o uso de defensivos em até 35% em lavouras de milho.",
    cover: coverAgro2,
    body: `A pesquisa avalia o uso combinado de drones multiespectrais e pulverizadores autônomos para aplicação localizada de defensivos. A frente integra visão computacional, agronomia de precisão e regulação de aeronaves remotas.`,
    tags: ["Drones", "Visão Computacional", "Milho"],
    startedAt: "2023-09-15",
    status: "ativo",
    members: ["m2", "m6"],
    featured: true,
  },
  {
    _id: "p3",
    slug: "plataforma-gestao-rural",
    title: "Plataforma de Gestão Rural",
    lab: "agro",
    summary:
      "Aplicativo aberto para pequenas propriedades familiares organizarem custos, safras, insumos e visitas técnicas.",
    cover: coverAgro1,
    body: `Construída em parceria com sindicatos rurais, a plataforma oferece um painel simples, funcional offline, para registro diário das atividades da propriedade.`,
    tags: ["Software", "Agricultura Familiar"],
    startedAt: "2024-06-01",
    status: "ativo",
    members: ["m1", "m7"],
  },
  {
    _id: "p4",
    slug: "iluminacao-inteligente-iju",
    title: "Iluminação Inteligente em Ijuí",
    lab: "smart-cities",
    summary:
      "Piloto de luminárias LED conectadas com sensores de presença e telemetria de consumo em corredor urbano de Ijuí.",
    cover: coverSmart3,
    body: `O projeto piloto instala 120 pontos de iluminação inteligente em uma avenida da cidade, integrando dados de consumo, falhas e fluxo de pedestres a uma central única.`,
    tags: ["Iluminação", "LoRaWAN", "Eficiência Energética"],
    startedAt: "2024-05-10",
    status: "ativo",
    members: ["m3", "m4"],
    featured: true,
  },
  {
    _id: "p5",
    slug: "mobilidade-dados-abertos",
    title: "Mobilidade com Dados Abertos",
    lab: "smart-cities",
    summary:
      "Painel público com dados de trânsito, ônibus urbanos e ocorrências, alimentado por contadores instalados em vias estratégicas.",
    cover: coverSmart1,
    body: `A iniciativa estrutura um pipeline de dados abertos sobre mobilidade urbana, em parceria com a Prefeitura. Os datasets são publicados em formato CKAN.`,
    tags: ["Dados Abertos", "Mobilidade"],
    startedAt: "2023-11-01",
    status: "ativo",
    members: ["m3", "m8"],
    featured: true,
  },
  {
    _id: "p6",
    slug: "gemeo-digital-urbano",
    title: "Gêmeo Digital Urbano",
    lab: "smart-cities",
    summary:
      "Maquete digital 3D de bairros de Ijuí integrando dados ambientais e de infraestrutura para apoiar decisões municipais.",
    cover: coverSmart2,
    body: `O gêmeo digital combina LIDAR, imagens de satélite e sensores de campo em um ambiente 3D navegável. Serve como base para simulações de drenagem, calor urbano e expansão.`,
    tags: ["Gêmeo Digital", "GIS", "3D"],
    startedAt: "2024-01-20",
    status: "planejado",
    members: ["m4", "m8"],
  },
];
