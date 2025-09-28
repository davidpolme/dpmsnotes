"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Hero.module.scss";
import { useThemeStore } from "@/store/themeStore";

type HeroData = {
  image: {
    dark: string;
    light: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
};

export default function Hero({ data }: { data: HeroData }) {
  const darkMode = useThemeStore((state) => state.darkMode);

  const imgSrc = darkMode ? data.image.dark : data.image.light;

  return (
    <div className={styles.hero}>
      <section className={styles.image}>
        <Image
          src={imgSrc}
          alt={data.image.alt}
          width={data.image.width}
          height={data.image.height}
        />
      </section>
      <section className={styles.text}>
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
        <Link href={data.buttonLink}>{data.buttonText}</Link>
      </section>
    </div>
  );
}
