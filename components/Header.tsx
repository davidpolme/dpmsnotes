import styles from "@/styles/Header.module.scss";
import Link from "next/link";
import { Pacifico } from "next/font/google";

type HeaderProps = {
  links: { label: string; path: string }[];
};

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function Header({ links }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" className={`${styles.title} ${pacifico.className}`}>
          DPMsNotes
        </Link>
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
