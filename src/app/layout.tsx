import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Github search portal",
  description: "Project for MVST, Github user searcher.",
  applicationName: "Github search portal",
  authors: [
    { name: "Eloi Pampliega", url: "https://eloipampliega.netlify.app/" },
  ],
  icons: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
