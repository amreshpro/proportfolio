"use client";

import { PROFILE, BIO } from "@/data/ABOUT";
import { useThemeStore } from "@/store/themeStore";

export default function Hero() {
  const isDarkModeEnabled = useThemeStore((state) => state.isDarkModeEnabled);

  return (
    <>
      <div
        className={` ${
          isDarkModeEnabled ? "" : ""
        }   min-h-screen flex justify-center items-center  md:flex-col-reverse gap-8 sm:px-2 py-2 md:px-24 px-52`}
      >
        <HeroContent />
        <HeroImage />
      </div>
    </>
  );
}

const HeroContent = () => {
  return (
    <div className="about flex flex-col gap-4 text-3xl ">
      <span className=" text-5xl md:text-3xl sm:text-2xl">
        <strong> Hii, I&apos;m</strong>
        <strong className="mx-2 font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
          Amresh Maurya
        </strong>
      </span>

      <span className="flex gap-2 text-3xl md:text-2xl sm:text-xl">
        <h1 className="font-bold bg-gradient-to-r from-green-400 to-yellow-500 text-transparent bg-clip-text">
          {PROFILE}
        </h1>
      </span>

      <p className="intro text-xl sm:text-lg">{BIO}</p>
      {/* <Link
        href={`${SOCIAL_MEDIA_LINKS?.resume}`}
        target="_blank"
        className=" transition-all hover:scale-105 rounded-md px-0.5 py-0.5 w-fit text-xl sm:text-xl font-light"
      >
        <p
          className={`${
            isDarkModeEnabled
              ? "shadow-md  bg-slate-700 border-r-4 border-b-4 border-slate-800 "
              : " shadow-md text-blue-500 bg-gray-100 border-r-4 border-b-4 border-gray-200 "
          } rounded-md px-1 py-1 `}
        >
          Resume
        </p>
      </Link> */}
    </div>
  );
};

const HeroImage = () => {
  return (
    <div className=" w-full flex justify-center p-1 ">
      {/* image div */}
      <div className="blob cursor-grabbing transition-all hover:scale-125 ease-in-out px-4 py-4 sm:px-2 border-2 border-ternary box"></div>
    </div>
  );
};
