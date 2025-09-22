import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ContentType = "portfolio" | "blog";

export type ContentItem = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
};

export class ContentFactory {
  static getItems(type: ContentType): ContentItem[] {
    const dir = path.join(process.cwd(), `content/${type}`);
    if (!fs.existsSync(dir)) return [];

    const files = fs.readdirSync(dir);

    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file, index) => {
        const filePath = path.join(dir, file);
        const source = fs.readFileSync(filePath, "utf8");
        const { data } = matter(source);

        const slug = file.replace(/\.mdx$/, "");

        return {
          id: index + 1,
          slug: slug,
          title: data.title || slug,
          description: data.description || "",
          image: data.image || "/images/placeholder.jpg",
          alt: data.alt || data.title || slug,
          link: `/${type}/${slug}`,
          date: data.date || null,
          tags: data.tags || [],
          categories: data.categories || [],
        };
      });
  }

  static getBySlug(type: ContentType, slug: string) {
    const dir = path.join(process.cwd(), `content/${type}`);
    const filePath = path.join(dir, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) return null;

    const source = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(source);

    return { content, data };
  }
}
