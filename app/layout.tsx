import type { Metadata } from "next";
import "./globals.css";
import {ThemeProvider} from 'next-themes'



export const metadata: Metadata = {
  title: "Amresh Maurya",
  description: "A portfolio website of Amresh Maurya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="shortcut icon" href="./" type="image/x-icon" />
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-192x192.png" />
        <meta name="description" content="Your website description here" />
      </head>
      <body
        className={` antialiased  `}
      >
        <ThemeProvider attribute="class">

        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
