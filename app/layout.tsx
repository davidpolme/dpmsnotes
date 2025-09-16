import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./../styles/globals.scss";
import { headerLinks } from "@/content/content";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
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
      <body className={roboto.variable}>
        <Header links={headerLinks} />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
