import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./../styles/globals.scss";
import { headerLinks } from "@/content/content";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "DPMsNotes",
  description: "El blog de David Polanía Mejía",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={lato.variable}>
        <Header links={headerLinks} />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
