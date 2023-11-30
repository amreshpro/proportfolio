"use client";

import { socialLinks } from "@/constants";
import { useAppSelector } from "@/types/redux.types";
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export function Footer() {
  const isDarkMode = useAppSelector((state) => state.mode);

  return (
    <footer
      className={`${
        isDarkMode ? "footer-dark" : "footer-light"
      } px-16  py-4 sm:px-2  flex sm:flex-col-reverse justify-between items-center gap-3`}
    >
      <div className="content">
        <p>© Amresh Maurya | 2023 | All rights reserved</p>
      </div>
      <div className="social-links flex gap-4">
        <Link
          href={socialLinks.github}
          target="_blank"
          className="rounded-full p-3 bg-gray-300 text-xl"
        >
          <BsGithub className="text-gray-900 text-xl" />
        </Link>
        <Link
          href={socialLinks.linkedin}
          target="_blank"
          className="rounded-full p-3 bg-gray-300 text-xl"
        >
          <BsLinkedin className="text-gray-900 text-xl" />
        </Link>
        <Link
          href={socialLinks.instagram}
          target="_blank"
          className="rounded-full p-3 bg-gray-300 text-xl"
        >
          <BsInstagram className="text-gray-900 text-xl" />
        </Link>
      </div>
    </footer>
  );
}
