import styles from "@/styles/Items.module.scss";
import Image from "next/image";
import Link from "next/link";

type Item = {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
};

type ItemsProps = {
  data: Item[];
  columns?: number; // número de ítems por fila
};

export default function Items({ data, columns = 3 }: ItemsProps) {
  return (
    <section className={styles.items}>
      <div
        className={styles.cardGroup}
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {data.map((item) => {
          const isExternal = item.link.startsWith("http");

          return (
            <div key={item.id} className={styles.card}>
              <Image
                src={item.image}
                alt={item.alt}
                width={400}
                height={300}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <Link
                  href={item.link}
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={styles.cardTitle}
                >
                  {item.title}
                </Link>

                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
