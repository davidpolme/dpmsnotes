import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./../styles/globals.scss";
import { footerData, headerLinks } from "@/content/content";

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
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Lato|Pacifico&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header links={headerLinks} />
        {children}
        <Footer about={footerData.about} social={footerData.social} />
      </body>
    </html>
  );
}
