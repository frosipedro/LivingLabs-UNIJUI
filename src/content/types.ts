export type Lab = "agro" | "smart-cities";

export const LAB_LABEL: Record<Lab, string> = {
  agro: "Agro",
  "smart-cities": "Smart Cities",
};

export interface Project {
  _id: string;
  slug: string;
  title: string;
  lab: Lab;
  summary: string;
  cover: string;
  body: string;
  tags: string[];
  startedAt: string; // ISO date
  status: "ativo" | "concluido" | "planejado";
  members: string[]; // member ids
  featured?: boolean;
}

export interface NewsItem {
  _id: string;
  slug: string;
  title: string;
  lab: Lab;
  excerpt: string;
  cover: string;
  body: string;
  publishedAt: string; // ISO date
  author: string;
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
