import Items from "@/components/Items";
import { getBlogItems } from "@/lib/blog";
import styles from "@/styles/PortfolioPage.module.scss";

export default function BlogPage() {
  const items = getBlogItems();

  return (
    <main className={styles.portfolioPage}>
      <h1>Blog</h1>
      <div className={styles.itemsWrapper}>
        <Items data={items} />
      </div>
    </main>
  );
}
