import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Amresh Maurya",
  description: "I am Amresh Maurya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      <body>{children}</body>
    </html>
  );
}
