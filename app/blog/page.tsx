import Items from "@/components/Items";
import { getPortfolioItems } from "@/lib/portfolio";
import styles from "@/styles/PortfolioPage.module.scss";
import Link from "next/link";

export default function BlogPage() {
  const items = getPortfolioItems();

  return (
    <main className={styles.portfolioPage}>
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
