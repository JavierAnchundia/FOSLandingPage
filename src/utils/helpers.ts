import type { NavigationItem } from "../data/navigation";

export type FeatureIconKind =
  | "access"
  | "local"
  | "fiber"
  | "telecom"
  | "network"
  | "support"
  | "maintenance"
  | "projects"
  | "connectivity"
  | "infrastructure"
  | "corporate";

export const isActivePath = (pathname: string, href: string) =>
  pathname === href;

export const pickPreviewItems = <T>(items: T[], count: number) =>
  items.slice(0, count);

export const getServiceIconKind = (title: string): FeatureIconKind => {
  const value = title.toLowerCase();

  if (value.includes("telecom")) return "telecom";
  if (value.includes("fibra")) return "fiber";
  if (value.includes("infraestructura")) return "infrastructure";
  if (value.includes("redes")) return "network";
  if (value.includes("electrica")) return "maintenance";
  if (value.includes("industrial")) return "maintenance";
  if (value.includes("soporte")) return "support";
  if (value.includes("consultoria")) return "support";
  if (value.includes("mantenimiento")) return "maintenance";
  if (value.includes("suministro")) return "projects";

  return "projects";
};

export const getProjectIconKind = (category: string): FeatureIconKind => {
  const value = category.toLowerCase();

  if (value.includes("comunic")) return "connectivity";
  if (value.includes("fibra")) return "fiber";
  if (value.includes("electrica")) return "maintenance";
  if (value.includes("energia")) return "maintenance";
  if (value.includes("industrial")) return "infrastructure";
  if (value.includes("subestaciones")) return "telecom";
  if (value.includes("red")) return "corporate";

  return "projects";
};

export const getNavigationLabels = (items: NavigationItem[]) =>
  items.map((item) => item.label);
