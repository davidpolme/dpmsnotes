import styles from "@/styles/Welcome.module.scss";
import Image from "next/image";

type WelcomeProps = {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  paragraph: string;
  button: string;
};

export default function Welcome({
  image,
  title,
  paragraph,
  button,
}: WelcomeProps) {
  return (
    <section className={styles.welcome}>
      <figure>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={styles.image}
        />
      </figure>

      <section className={styles.textSection}>
        <h2 className={styles.title}>{title}</h2>
        {/* Permite saltos de línea en el texto */}
        <p className={styles.paragraph}>
          {paragraph.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <button className={styles.button}>{button}</button>
      </section>
    </section>
  );
}
