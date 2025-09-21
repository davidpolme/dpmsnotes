import Items from "@/components/Items";
import { getBlogItems } from "@/lib/blog";
import styles from "@/styles/BlogPage.module.scss";
import Link from "next/link";

export default function BlogPage() {
  const items = getBlogItems();

  return (
    <main className={styles.blogPage}>
      <h1>Blog</h1>

      <Link href="/" className={styles.backButton}>
        ← Volver al inicio
      </Link>

      <div className={styles.itemsWrapper}>
        <Items data={items} />
      </div>
    </main>
  );
}
