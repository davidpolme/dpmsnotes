import styles from "@/styles/Items.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Item = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData | string;
  alt: string;
  link: string;
};

type ItemsProps = {
  data: Item[];
};

export default function Items({ data }: ItemsProps) {
  if (!data || data.length === 0) {
    return (
      <section className={styles.items}>
        <p className={styles.noItems}>Aún no hay elementos</p>
      </section>
    );
  }

  return (
    <section className={styles.items}>
      <div className={styles.cardGroup}>
        {data.map((item) => {
          const isExternal = item.link.startsWith("http");

          return (
            <Link
              key={item.id}
              href={item.link}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={styles.card}
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={400}
                height={300}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
