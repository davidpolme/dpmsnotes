import Link from "next/link";
import styles from "@/styles/NotFoundPage.module.scss";


export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>
        Lo sentimos, no pudimos encontrar lo que buscabas.
      </p>
      <Link href="/" className={styles.link}>
        Volver al inicio
      </Link>
    </div>
  );
}
  