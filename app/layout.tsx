import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Garrett "Bear" Whisten',
  description:
    "Hybrid designer and front-end developer based in Los Angeles, specializing in design systems and crafting efficient, user-friendly solutions.",
  openGraph: {
    title: 'Garrett "Bear" Whisten',
    description:
      "Hybrid designer and front-end developer based in Los Angeles, specializing in design systems and crafting efficient, user-friendly solutions.",
    url: "https://www.garrettbear.com",
    images: [
      {
        url: "/media.png",
        width: 1200,
        height: 630,
        alt: "Garrett Bear",
      },
    ],
    siteName: "GarrettBear",
  },
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
      <body className={`${interFont.variable} antialiased font-biotif`}>
        {children}
      </body>
    </html>
  );
}
