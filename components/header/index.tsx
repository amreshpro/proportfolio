"use client";

import NAV_LINKS from "@/data/NAV_LINKS";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import ThemeSwitcher from "../theme-switcher";

export default function Header() {
  return (
    <div className="fixed z-50 w-screen flex gap-4 p-2 justify-center items-center ">
     <div className="flex gap-4 w-fit p-2 border  border-gray-300 rounded-md">
     <ThemeSwitcher />
      <div className="flex gap-4 justify-center">
        {NAV_LINKS?.map((link) => {
          return (
            <Link
              href={link.path}
              key={link.id}
              className={buttonVariants({ variant: "default" })}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
     </div>
    </div>
  );
}
