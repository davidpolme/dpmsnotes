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
    <div
      className={`${styles.hero} ${
        darkMode ? styles.hero_dark_mode : styles.hero_light_mode
      }`}
    >
      <section
        className={`${styles.image} ${
          darkMode ? styles.hero_dark_mode : styles.hero_light_mode
        }`}
      >
        <Image
          src={imgSrc}
          alt={data.image.alt}
          width={data.image.width}
          height={data.image.height}
          priority
        />
      </section>
      <section
        className={`${styles.text} ${
          darkMode ? styles.hero_dark_mode : styles.hero_light_mode
        }`}
      >
        {data.title && <h1>{data.title}</h1>}
        {data.subtitle && <p>{data.subtitle}</p>}
        {data.buttonText && data.buttonLink && (
          <Link
            href={data.buttonLink}
            className={`${styles.button} ${
              darkMode ? styles.hero_dark_mode : styles.hero_light_mode
            }`}
          >
            {data.buttonText}
          </Link>
        )}
      </section>
    </div>
  );
}
