import { ContentFactory } from "./content";

export const getBlogItems = () => ContentFactory.getItems("blog");
export const getBlogBySlug = (slug: string) =>
  ContentFactory.getBySlug("blog", slug);
