export type Lab = "agro" | "smart-cities";

export const LAB_LABEL: Record<Lab, string> = {
  agro: "Agro",
  "smart-cities": "Smart Cities",
};

export type ProjectStatus = "ativo" | "concluido" | "planejado";

export const PROJECT_STATUS_LABEL: Record<ProjectStatus, string> = {
  ativo: "Ativo",
  concluido: "Concluído",
  planejado: "Planejado",
};

export interface Project {
  _id: string;
  slug: string;
  title: string;
  lab: Lab;
  excerpt: string;
  cover: string;
  categories: string[];
  year: number;
  status: ProjectStatus;
  challenge: string;
  solution: string;
  results: string;
  partners: string[];
  members: string[]; // member ids
  featured?: boolean;
}

export interface NewsItem {
  _id: string;
  slug: string;
  title: string;
  lab?: Lab;
  excerpt: string;
  cover: string;
  categories: string[];
  publishedAt: string; // ISO date
  readTime: string;
  author: string;
  content: string;
  featured?: boolean;
}

export interface Sensor {
  _id: string;
  name: string;
  lab: Lab;
  location: string;
  metric: string;
  value: string;
  unit: string;
  status: "online" | "atencao" | "offline";
  updatedAt: string; // ISO datetime
}

export interface Member {
  _id: string;
  slug: string;
  name: string;
  role: string;
  lab?: Lab;
  photo?: string;
  bio: string;
  links?: { label: string; href: string }[];
}
