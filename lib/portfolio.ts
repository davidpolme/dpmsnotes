import fs from "fs";
import path from "path";
import matter from "gray-matter";

const portfolioDir = path.join(process.cwd(), "content/portfolio");

export type PortfolioItem = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
};


export function getPortfolioItems(): PortfolioItem[] {
  const files = fs.readdirSync(portfolioDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file, index) => {
      const filePath = path.join(portfolioDir, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data } = matter(source);

      const slug = file.replace(/\.mdx$/, "");

      return {
        id: index + 1,
        slug,
        title: data.title || slug,
        description: data.description || "",
        image: data.image || "/images/placeholder.jpg", // default si no está en el frontmatter
        alt: data.alt || data.title || slug,
        link: data.link || `/portfolio/${slug}`, // por defecto interno
      };
    });
}
