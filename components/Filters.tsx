"use client";
import styles from "@/styles/Filters.module.scss";

type FiltersProps = {
  categories: string[];
  tags: string[];
  selectedCategory: string | null;
  selectedTag: string | null;
  onCategoryChange: (category: string | null) => void;
  onTagChange: (tag: string | null) => void;
};

export default function Filters({
  categories,
  tags,
  selectedCategory,
  selectedTag,
  onCategoryChange,
  onTagChange,
}: FiltersProps) {
  return (
    <div className={styles.filters}>
      {categories.length > 0 && (
        <select
          value={selectedCategory || ""}
          onChange={(e) => onCategoryChange(e.target.value || null)}
        >
          <option value="">Todas las categorías</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      )}

      {tags.length > 0 && (
        <select
          value={selectedTag || ""}
          onChange={(e) => onTagChange(e.target.value || null)}
        >
          <option value="">Todos los tags</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
