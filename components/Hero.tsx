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
  items: HeroData[];
};

export default function Hero({}: HeroProps) {
  return (
    <div className={styles.hero}>
      <section className={styles.image}>
        <Image
          src="https://dpmsnotes.s3.us-east-1.amazonaws.com/illustrations/character-dark-mode.png"
          alt="character_dark-mode"
          width={40}
          height={40}
        />
      </section>
      <section className={styles.text}>
        <h1>Hola, soy David</h1>
        <p>Desarrollador de software Full Stack</p>
        <Link href="/notes" className={styles.button}>
          Get Started
        </Link>
      </section>
    </div>
  );
}
