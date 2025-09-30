"use client";
import styles from "@/styles/Card.module.scss";
import Image, { StaticImageData } from "next/image"; // 👈 Importa StaticImageData
import Link from "next/link";
import { useThemeStore } from "@/store/themeStore";

export type CardItem = {
  id: number;
  title: string;
  description: string;
  image:
    | string
    | StaticImageData
    | {
        dark: string | StaticImageData;
        light: string | StaticImageData;
      };
  alt: string;
  link: string;
};

export default function Card({
  id,
  title,
  description,
  image,
  alt,
  link,
}: CardItem) {
  const darkMode = useThemeStore((state) => state.darkMode);

  // 🔹 Helper interno para resolver imagen
  const resolveImage = (): string => {
    if (typeof image === "string") return image;
    if ("dark" in image && "light" in image) {
      return darkMode ? (image.dark as string) : (image.light as string);
    }
    return (image as StaticImageData).src;
  };

  const imgUrl = resolveImage();
  const isExternal = link.startsWith("http");

  const cardStyle: React.CSSProperties & { [key: string]: string } = {
    "--card-img": `url(${imgUrl})`,
  };

  return (
    <Link
      key={id}
      href={link}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={styles.card}
      style={cardStyle}
    >
      <div className={styles.imageWrap}>
        <Image
          src={imgUrl}
          alt={alt}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className={styles.cardImage}
          priority={false}
        />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </Link>
  );
}
