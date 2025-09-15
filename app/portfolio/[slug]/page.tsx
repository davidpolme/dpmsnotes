import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/MDXComponents";
import { getPortfolioItems } from "@/lib/portfolio";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/ProjectArticle.module.scss";

// 📌 Carpeta de proyectos
const portfolioDir = path.join(process.cwd(), "content/portfolio");

// 1️⃣ Generamos los params dinámicos
export async function generateStaticParams() {
  const items = getPortfolioItems();
  return items.map((item) => ({ slug: item.slug }));
}

// 2️⃣ Metadata SEO por proyecto
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> } // 👈 Promise aquí
) {
  const { slug } = await params; // 👈 Await aquí

  const filePath = path.join(portfolioDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return {};

  const source = fs.readFileSync(filePath, "utf8");
  const { data } = matter(source);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: data.cover ? [{ url: data.cover }] : [],
    },
  };
}

// 3️⃣ Render de la página del proyecto
export default async function ProjectPage(
  { params }: { params: Promise<{ slug: string }> } // 👈 Promise aquí
) {
  const { slug } = await params; // 👈 Await aquí

  const filePath = path.join(portfolioDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return notFound();

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  return (
    <article className={styles.projectArticle}>
      <h1>{data.title}</h1>
      {data.description && <p className={styles.intro}>{data.description}</p>}
      <div className={styles.content}>
        <MDXRemote source={content} components={MDXComponents} />
      </div>
      <div className={styles.backContainer}>
        <Link href="/portfolio" className={styles.backLink}>
          ← Volver a portfolio
        </Link>
      </div>
    </article>
  );
}