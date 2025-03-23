import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { Milonga, Abel, Jura } from "next/font/google";
import BootstrapProvider from "@/components/bootstrap/BootstrapProvider";

// Fontes
const mainFontFamily = Abel({ weight: ["400"], style: "normal", subsets: ["latin"] });
const milongaFont = Milonga({ weight: ["400"], style: "normal", subsets: ["latin"] });
const juraFont = Jura({ weight: ["400"], style: "normal", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ricardo Hemmel - Portfólio</title>
        <link rel="icon" href="imgs/arts/boyArt.png" />
      </head>
      <body className={mainFontFamily.className}>
        <Header />
        {children}
        <Footer/>
        <BootstrapProvider />
      </body>
    </html>
  );
}
