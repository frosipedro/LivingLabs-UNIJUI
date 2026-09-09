import type { Project } from "../types";
import coverAgro1 from "@/assets/cover-agro-1.webp";
import coverAgro2 from "@/assets/cover-agro-2.webp";
import coverAgro3 from "@/assets/cover-agro-3.webp";
import coverSmart1 from "@/assets/cover-smart-1.webp";
import coverSmart2 from "@/assets/cover-smart-2.webp";
import coverSmart3 from "@/assets/cover-smart-3.webp";

export const projects: Project[] = [
  {
    _id: "p1",
    slug: "monitoramento-soja-iot",
    title: "Monitoramento de Soja com IoT",
    lab: "agro",
    excerpt:
      "Rede de sensores de baixo custo para acompanhar umidade do solo, temperatura e desenvolvimento da soja em propriedades da região noroeste do RS.",
    cover: coverAgro3,
    categories: ["IoT", "Soja", "LoRaWAN", "Sensoriamento"],
    year: 2024,
    status: "ativo",
    challenge:
      "Produtores da região precisam tomar decisões rápidas sobre irrigação e manejo, mas nem sempre contam com dados locais, contínuos e acessíveis da lavoura.",
    solution:
      "O projeto desenvolve nós sensores de baixo custo com comunicação LoRaWAN, instalados em propriedades parceiras e conectados a uma plataforma de indicadores em tempo real.",
    results:
      "Os primeiros ciclos de validação indicam redução de até 18% no uso de água em irrigações suplementares e maior precisão na identificação de períodos críticos da cultura.",
    partners: [
      "Cooperativas regionais",
      "Produtores rurais",
      "Cursos de Agronomia, Computação e Engenharia Elétrica",
    ],
    members: ["m1", "m2", "m5"],
    featured: true,
  },
  {
    _id: "p2",
    slug: "drones-pulverizacao-precisao",
    title: "Drones para Pulverização de Precisão",
    lab: "agro",
    excerpt:
      "Mapeamento aéreo e pulverização localizada com drones, reduzindo o uso de defensivos em até 35% em lavouras de milho.",
    cover: coverAgro2,
    categories: ["Drones", "Visão Computacional", "Milho"],
    year: 2023,
    status: "ativo",
    challenge:
      "A aplicação uniforme de defensivos aumenta custos e impacto ambiental quando a incidência de pragas e plantas daninhas está concentrada em áreas específicas.",
    solution:
      "A frente combina drones multiespectrais, visão computacional e pulverização autônoma para localizar manchas de manejo e orientar aplicações pontuais.",
    results:
      "Ensaios de campo registraram economia de até 35% no uso de defensivos em áreas acompanhadas, mantendo o controle agronômico esperado.",
    partners: [
      "Produtores de milho",
      "Empresas de tecnologia agrícola",
      "Pesquisadores em agricultura de precisão",
    ],
    members: ["m2", "m6"],
    featured: true,
  },
  {
    _id: "p3",
    slug: "plataforma-gestao-rural",
    title: "Plataforma de Gestão Rural",
    lab: "agro",
    excerpt:
      "Aplicativo aberto para pequenas propriedades familiares organizarem custos, safras, insumos e visitas técnicas.",
    cover: coverAgro1,
    categories: ["Software", "Agricultura Familiar"],
    year: 2024,
    status: "ativo",
    challenge:
      "Pequenas propriedades familiares registram informações produtivas em formatos dispersos, dificultando análise de custos, planejamento de safra e acompanhamento técnico.",
    solution:
      "A plataforma oferece um painel simples, com uso offline, para registrar atividades, insumos, safras, visitas técnicas e indicadores básicos da propriedade.",
    results:
      "O protótipo já organiza rotinas de acompanhamento com sindicatos rurais parceiros e prepara dados para relatórios técnicos mais claros.",
    partners: ["Sindicatos rurais", "Famílias produtoras", "Extensionistas e técnicos agrícolas"],
    members: ["m1", "m7"],
  },
  {
    _id: "p4",
    slug: "iluminacao-inteligente-iju",
    title: "Iluminação Inteligente em Ijuí",
    lab: "smart-cities",
    excerpt:
      "Piloto de luminárias LED conectadas com sensores de presença e telemetria de consumo em corredor urbano de Ijuí.",
    cover: coverSmart3,
    categories: ["Iluminação", "LoRaWAN", "Eficiência Energética"],
    year: 2024,
    status: "ativo",
    challenge:
      "A gestão da iluminação pública precisa reduzir consumo, identificar falhas mais rápido e manter segurança em vias de circulação intensa.",
    solution:
      "O piloto instala luminárias LED conectadas com sensores de presença, telemetria de consumo e integração dos dados a uma central de acompanhamento.",
    results:
      "Os primeiros meses apontam redução de consumo e melhor tempo de resposta para manutenção em pontos monitorados do corredor urbano.",
    partners: [
      "Prefeitura de Ijuí",
      "Concessionárias e fornecedores de iluminação",
      "Equipes de gestão urbana",
    ],
    members: ["m3", "m4"],
    featured: true,
  },
  {
    _id: "p5",
    slug: "mobilidade-dados-abertos",
    title: "Mobilidade com Dados Abertos",
    lab: "smart-cities",
    excerpt:
      "Painel público com dados de trânsito, ônibus urbanos e ocorrências, alimentado por contadores instalados em vias estratégicas.",
    cover: coverSmart1,
    categories: ["Dados Abertos", "Mobilidade"],
    year: 2023,
    status: "ativo",
    challenge:
      "Decisões sobre trânsito e transporte urbano dependem de dados que muitas vezes ficam fragmentados entre diferentes sistemas e relatórios.",
    solution:
      "A iniciativa estrutura um pipeline público com dados de trânsito, ônibus urbanos e ocorrências, publicado em formato aberto para consulta e análise.",
    results:
      "O painel facilita leitura de fluxo em vias estratégicas e apoia conversas entre universidade, gestão municipal e comunidade.",
    partners: ["Prefeitura de Ijuí", "Operadores de transporte urbano", "Comunidade local"],
    members: ["m3", "m8"],
    featured: true,
  },
  {
    _id: "p6",
    slug: "gemeo-digital-urbano",
    title: "Gêmeo Digital Urbano",
    lab: "smart-cities",
    excerpt:
      "Maquete digital 3D de bairros de Ijuí integrando dados ambientais e de infraestrutura para apoiar decisões municipais.",
    cover: coverSmart2,
    categories: ["Gêmeo Digital", "GIS", "3D"],
    year: 2024,
    status: "planejado",
    challenge:
      "Intervenções urbanas exigem visualizar impactos sobre drenagem, infraestrutura e conforto térmico antes que obras sejam executadas.",
    solution:
      "O gêmeo digital combina LIDAR, imagens de satélite e sensores de campo em um ambiente 3D navegável para simular cenários urbanos.",
    results:
      "A etapa planejada define base cartográfica, integra camadas ambientais e prepara pilotos de simulação para bairros selecionados.",
    partners: [
      "Prefeitura de Ijuí",
      "Pesquisadores em GIS",
      "Parceiros internacionais em cidades digitais",
    ],
    members: ["m4", "m8"],
  },
];
