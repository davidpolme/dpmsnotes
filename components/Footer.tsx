import styles from "@/styles/Footer.module.scss";
import Image from "next/image";
import dpmsLogo from "@/public/images/dpmsnotes_logo.jpg";

type FooterProps = {
  about: string;
  social: { label: string; href: string }[];
};

export default function Footer({ about, social }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <section className={styles.logo}>
        <Image src={dpmsLogo} alt="logo" width={20} height={20} />
      </section>
    </footer>
  );
}
