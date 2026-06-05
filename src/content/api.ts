// Mock data layer — same shape as a future Sanity client.
// Swap implementations here without touching pages.
import { projects } from "./mock/projects";
import { news } from "./mock/news";
import { sensors } from "./mock/sensors";
import { team } from "./mock/team";
import type { Lab, Project, NewsItem, Sensor, Member } from "./types";

export type { Lab, Project, NewsItem, Sensor, Member };
export { LAB_LABEL } from "./types";

export function getProjects(filter?: { lab?: Lab }): Project[] {
  const list = filter?.lab ? projects.filter((p) => p.lab === filter.lab) : projects;
  return [...list].sort((a, b) => b.startedAt.localeCompare(a.startedAt));
}
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getNews(filter?: { lab?: Lab }): NewsItem[] {
  const list = filter?.lab ? news.filter((n) => n.lab === filter.lab) : news;
  return [...list].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
export function getNewsBySlug(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug);
}
export function getFeaturedNews(): NewsItem[] {
  return news.filter((n) => n.featured);
}

export function getSensors(filter?: { lab?: Lab }): Sensor[] {
  return filter?.lab ? sensors.filter((sensor) => sensor.lab === filter.lab) : sensors;
}

export function getTeam(filter?: { lab?: Lab }): Member[] {
  return filter?.lab ? team.filter((m) => m.lab === filter.lab) : team;
}
export function getMemberById(id: string): Member | undefined {
  return team.find((m) => m._id === id);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
