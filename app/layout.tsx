import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pornkamon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          property="og:image"
          content="https://www.pornkamonpkm.online/og.png"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
