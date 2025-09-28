"use client";
import { useState, useMemo } from "react";
import styles from "@/styles/Items.module.scss";
import Filters from "./Filters";
import CardGroup from "./CardGroup";
import { CardItem } from "./Card";

type Item = CardItem & {
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

  const availableTags = useMemo(
    () => Array.from(new Set(data.flatMap((item) => item.tags || []))),
    [data]
  );

  const availableCategories = useMemo(
    () => Array.from(new Set(data.flatMap((item) => item.categories || []))),
    [data]
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
        <Filters
          categories={availableCategories}
          tags={availableTags}
          selectedCategory={selectedCategory}
          selectedTag={selectedTag}
          onCategoryChange={setSelectedCategory}
          onTagChange={setSelectedTag}
        />
      )}
      <CardGroup items={filteredData} />
    </section>
  );
}
