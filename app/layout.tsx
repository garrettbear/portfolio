import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garrett Bear",
  description:
    "Hybrid designer and front-end developer based in Los Angeles, specializing in design systems and crafting efficient, user-friendly solutions. Experience includes contributing to the MetaMask Design System at ConsenSys and leading GumGum’s design system development, streamlining workflows and enhancing team productivity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/agrandir.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="antialiased font-biotif">{children}</body>
    </html>
  );
}
