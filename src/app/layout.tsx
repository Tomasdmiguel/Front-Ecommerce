import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//*IMPORTACION DE COMPONENTES QUE SE VAN A VER SIEMPRE
import Nav from "@/componentes/Nav/Nav";
import Footer from "@/componentes/Footer/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}