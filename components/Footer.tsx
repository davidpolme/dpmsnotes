import styles from "@/styles/Footer.module.scss";

type FooterProps = {
  about: string;
  social: { label: string; href: string }[];
};

export default function Footer({ about, social }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <section className={styles.logo}>
        <img src="/images/dpmsnotes_logo.jpg" alt="logo" />
      </section>
    </footer>
  );
}
