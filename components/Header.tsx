"use client";

import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" className={`${styles.title} ${pacifico.className}`}>
          DPMsNotes
        </Link>
      </div>

      {/* Desktop nav */}
      <ul className={styles.nav}>
        {links.map((link, index) => (
          <li className={styles.item} key={index}>
            <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Hamburger button */}
      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        {links.map((link, index) => (
          <Link key={index} href={link.path} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
