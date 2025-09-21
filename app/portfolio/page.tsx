import Items from "@/components/Items";
import { getPortfolioItems } from "@/lib/portfolio";
import styles from "@/styles/PortfolioPage.module.scss";
import Link from "next/link";

export default function PortfolioPage() {
  const items = getPortfolioItems();

  return (
    <main className={styles.portfolioPage}>
      <h1>Portfolio</h1>

      <Link href="/" className={styles.backButton}>
        ← Volver al inicio
      </Link>

      <div className={styles.itemsWrapper}>
        <Items data={items} />
      </div>
    </main>
  );
}
