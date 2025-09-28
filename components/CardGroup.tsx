"use client";
import styles from "@/styles/CardGroup.module.scss";
import Card, { CardItem } from "./Card";

type CardGroupProps = {
  items: CardItem[];
};

export default function CardGroup({ items }: CardGroupProps) {
  return (
    <div className={styles.cardGroup}>
      {items.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}
