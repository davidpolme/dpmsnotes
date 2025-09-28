"use client";
import styles from "@/styles/Card.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type CardItem = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData | string;
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
  const isExternal = link.startsWith("http");
  const imgUrl = typeof image === "string" ? image : image.src;

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
          src={image}
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
