import { ContentFactory } from "./content";

export const getPortfolioItems = () => ContentFactory.getItems("portfolio");
export const getPortfolioBySlug = (slug: string) =>
  ContentFactory.getBySlug("portfolio", slug);
