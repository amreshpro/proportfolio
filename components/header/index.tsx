"use client";

import NAV_LINKS from "@/data/NAV_LINKS";
import Link from "next/link";


export default function Header() {
  return (
    <div className=" flex gap-4 justify-center border-2 border-gray-300">
      {NAV_LINKS?.map((link) => {
        return (<Link
            href={link.path}
            key={link.id}
            className="text-gray-500 hover:text-gray-900"
          >
            {link.title}hhh
          </Link>
        );
      })}
    </div>
  );
}
