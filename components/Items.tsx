"use client";
import { useState, useMemo } from "react";
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
  slug?: string;
  date?: string;
  tags?: string[];
  categories?: string[];
};

type ItemsProps = {
  data: Item[];
  filter?: boolean;
};

export default function Items({ data, filter = true }: ItemsProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredForTags = useMemo(() => {
    if (!selectedCategory) return data;
    return data.filter((item) => item.categories?.includes(selectedCategory));
  }, [data, selectedCategory]);

  const filteredForCategories = useMemo(() => {
    if (!selectedTag) return data;
    return data.filter((item) => item.tags?.includes(selectedTag));
  }, [data, selectedTag]);

  const availableTags = useMemo(
    () =>
      Array.from(new Set(filteredForTags.flatMap((item) => item.tags || []))),
    [filteredForTags]
  );

  const availableCategories = useMemo(
    () =>
      Array.from(
        new Set(filteredForCategories.flatMap((item) => item.categories || []))
      ),
    [filteredForCategories]
  );

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesTag = selectedTag ? item.tags?.includes(selectedTag) : true;
      const matchesCategory = selectedCategory
        ? item.categories?.includes(selectedCategory)
        : true;
      return matchesTag && matchesCategory;
    });
  }, [data, selectedTag, selectedCategory]);

  if (!data || data.length === 0) {
    return (
      <section className={styles.items}>
        <p className={styles.noItems}>Aún no hay elementos</p>
      </section>
    );
  }

  return (
    <section className={styles.items}>
      {filter && (
        <div className={styles.filters}>
          {availableCategories.length > 0 && (
            <select
              value={selectedCategory || ""}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
            >
              <option value="">Todas las categorías</option>
              {availableCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          )}

          {availableTags.length > 0 && (
            <select
              value={selectedTag || ""}
              onChange={(e) => setSelectedTag(e.target.value || null)}
            >
              <option value="">Todos los tags</option>
              {availableTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          )}
        </div>
      )}

      <div className={styles.cardGroup}>
        {filteredData.map((item) => {
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
