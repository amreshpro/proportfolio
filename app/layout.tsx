import Providers from "@/utils/Providers";

import "./globals.css";

import ThemeWrapper from "@/utils/ThemeWrapper";
import { Navbar, Footer } from "@/components";

import { ReactNode } from "react";

export const metadata = {
  title: "amresh",
  description: "A portfolio site of Amresh Maurya",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      <body id="body" className="">
        <Providers>
          <ThemeWrapper>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeWrapper>
        </Providers>
      </body>
    </html>
  );
}
