import styles from "@/styles/Hero.module.scss";
import Image from "next/image";
import Link from "next/link";

type ImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type HeroData = {
  image?: ImageData;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
};

type HeroProps = {
  data: HeroData;
};

export default function Hero({ data }: HeroProps) {
  return (
    <div className={styles.hero}>
      {data.image && (
        <section className={styles.image}>
          <Image
            src={data.image.src}
            alt={data.image.alt}
            width={data.image.width}
            height={data.image.height}
          />
        </section>
      )}
      <section className={styles.text}>
        {data.title && <h1>{data.title}</h1>}
        {data.subtitle && <p>{data.subtitle}</p>}
        {data.buttonText && data.buttonLink && (
          <Link href={data.buttonLink} className={styles.button}>
            {data.buttonText}
          </Link>
        )}
      </section>
    </div>
  );
}
