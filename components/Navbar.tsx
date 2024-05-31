"use client";
import Link from "next/link";
import { IoMoonSharp } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
import NAV_LINKS from "@/data/NAV_LINKS";
import { useThemeStore } from "@/store/themeStore";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const { isDarkModeEnabled, toggleDarkMode } = useThemeStore((state) => state);
  return (<>
    <nav
      className={`${
        isDarkModeEnabled ? "dark-box" : "light-box"
      } fixed sm:hidden  border border-gray-300 px-4 py-4 flex justify-between gap-4 sm:gap-1 items-center rounded-r-full rounded-l-full  `}
    >
      <div className="logo flex sm:gap-0.5 gap-2 px-0.5 sm:animate-bounce">
        <p className="bg-red-400 rounded-full p-2 sm:p-1  hover:animate-bounce"></p>
        <p className="bg-orange-400 rounded-full p-2 sm:p-1 hover:animate-bounce "></p>
        <p className="bg-green-400 rounded-full p-2 sm:p-1 hover:animate-bounce"></p>
      </div>
      <ul className="flex gap-8 sm:gap-2 md:gap-4 items-center sm:text-sm">
        {NAV_LINKS.map((nav) => {
          const { id, title, path } = nav;
          return (
            <li key={id}>
              <Link href={path} className="hover:font-bold transition-all ease-in-out hover:transform  hover:scale-110">{title}</Link>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => toggleDarkMode()}
        className="w-fit   flex justify-start items-center text-center text-3xl "
      >
        <p className="">
          {isDarkModeEnabled ? <IoMdSunny /> : <IoMoonSharp />}
        </p>
      </button>
    </nav>

    {/* mobile menu */}
    <nav className="mobile-menu hidden sm:flex w-full px-2">
<MobileMenu/>
    </nav>
  </>

  );
}


