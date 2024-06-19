"use client";
import SOCIAL_MEDIA_LINKS from "@/data/SOCIAL_MEDIA_LINKS";
import { useThemeStore } from "@/store/themeStore";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaCopy } from "react-icons/fa";

export default function Contact() {
  const isDarkModeEnabled = useThemeStore((state) => state.isDarkModeEnabled);

  function emailCopiedHandler() {
    navigator.clipboard.writeText(SOCIAL_MEDIA_LINKS.mail);
    toast.success("Email is Copied Successfully", {
      position: "bottom-center",
    });
  }

  return (
    <>
      <div
        id="contact"
        className="w-fit p-1 mx-1 transition-all ease-in-out hover:transform  hover:scale-125 sm:text-sm rounded-md bg-n-9 "
      >
        <button
          onClick={() => {
            emailCopiedHandler();
          }}
          className={`${
            isDarkModeEnabled ? "dark" : "light"
          } rounded-md  p-6 flex gap-1 justify-center items-center `}
        >
          <Link href={"mailto:" + SOCIAL_MEDIA_LINKS.mail}>
            {SOCIAL_MEDIA_LINKS.mail}
          </Link>
          <FaCopy className="animate-bounce text-2xl" />{" "}
        </button>
      </div>
    </>
  );
}
