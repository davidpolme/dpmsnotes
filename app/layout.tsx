import type { Metadata } from "next";
import "./../styles/globals.scss";

export const metadata: Metadata = {
  title: "DPMsNotes",
  description: "El blog de David Polania",
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
      <body>{children}</body>
    </html>
  );
}
