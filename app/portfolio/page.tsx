import Items from "@/components/Items";
import { getPortfolioItems } from "@/lib/portfolio";
import styles from "@/styles/PortfolioPage.module.scss";

export default function PortfolioPage() {
  const items = getPortfolioItems();

  return (
    <main className={styles.portfolioPage}>
      <h1>Portfolio</h1>
      <div className={styles.itemsWrapper}>
        <Items data={items} />
      </div>
    </main>
  );
}
