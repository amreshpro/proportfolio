import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import {Inter,Calistoga} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets:["latin"],variable:"--font-sans"});
const calistoga = Calistoga({subsets:["latin"],variable:"--font-serif",weight:"400"});

export const metadata: Metadata = {
  title: "Amresh Maurya",
  description: "A portfolio website for Amresh Maurya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <body className={twMerge(inter.variable,calistoga.variable,"bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
