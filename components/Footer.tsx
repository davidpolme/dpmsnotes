import styles from "@/styles/Footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.logo}>
        <Image
          src="https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F683979%2Fb4f8545f-ce78-4130-a1d5-a9f0176ed82d.png"
          alt="logo"
          width={40}
          height={40}
        />
      </section>
    </footer>
  );
}
