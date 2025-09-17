import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/MDXComponents";
import { getBlogItems, getBlogBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/ProjectArticle.module.scss";

export async function generateStaticParams() {
  const items = getBlogItems();
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  return {
    title: post.data.title,
    description: post.data.description,
    openGraph: {
      title: post.data.title,
      description: post.data.description,
      images: post.data.cover ? [{ url: post.data.cover }] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return notFound();

  return (
    <article className={styles.projectArticle}>
      <h1>{post.data.title}</h1>
      {post.data.description && (
        <p className={styles.intro}>{post.data.description}</p>
      )}
      <div className={styles.content}>
        <MDXRemote source={post.content} components={MDXComponents} />
      </div>
      <div className={styles.backContainer}>
        <Link href="/blog" className={styles.backLink}>
          ← Volver al blog
        </Link>
      </div>
    </article>
  );
}
