import styles from "@/styles/Header.module.scss";
import Link from "next/link";

type HeaderProps = {
  links: { label: string; path: string }[];
};

export default function Header({ links }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1 className={styles.title}>DPMsNotes</h1>
      </div>

      <ul className={styles.nav}>
        {links.map((link, index) => (
          <li className={styles.item} key={index}>
            <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
