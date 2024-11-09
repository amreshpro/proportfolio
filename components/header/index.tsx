"use client";
import NAV_LINKS from "@/data/NAV_LINKS";
import Link from "next/link";

export default function Header() {
  return (
    <div className="z-50 flex justify-center items-center fixed top-3 sm:top-[90vh] w-full">
      <nav className="flex gap-1 p-0.5 px-4 py-2 border border-secondary/15 rounded-full bg-secondary backdrop-blur">
        {NAV_LINKS?.map((link) => {
          return (
            <Link href={link.path} key={link.id} className={"nav-item hover:bg-ternary rounded-l-full rounded-r-full px-1.5 "}>
              {link.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
