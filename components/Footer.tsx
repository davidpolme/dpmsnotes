import styles from "@/styles/Footer.module.scss";

type FooterProps = {
  about: string;
  social: { label: string; href: string }[];
};

export default function Footer({ about, social }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <section className={styles.about}>
        <p className={styles.aboutText}>{about}</p>
      </section>

      <section className={styles.social}>
        <ul>
          {social.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
}
