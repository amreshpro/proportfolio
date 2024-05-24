"use client";
import { IoMoonSharp } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
import NAV_LINKS from "@/data/NAV_LINKS";

import Link from "next/link";

import { useThemeStore } from "@/store/themeStore";

export default function Navbar() {

const {isDarkModeEnabled,toggleDarkMode} = useThemeStore((state)=>state)
  return (
    <nav className={`${ isDarkModeEnabled ? 'dark-box' : 'light-box'}   px-4 py-4 flex justify-between items-center rounded-r-full rounded-l-full  `}>
      <div className="logo flex gap-2 px-0.5">
        <p className="bg-red-400 rounded-full p-2 sm:p-1  hover:animate-bounce"></p>
        <p className="bg-purple-400 rounded-full p-2 sm:p-1 hover:animate-bounce"></p>
        <p className="bg-orange-400 rounded-full p-2 sm:p-1 hover:animate-bounce "></p>
      
      </div>

      <ul className="flex gap-8 sm:gap-2 md:gap-4 items-center sm:text-sm">
      <button onClick={()=>toggleDarkMode()} className="w-fit   flex justify-start items-center text-center text-xl "><p className="">{isDarkModeEnabled ? <IoMdSunny/>:<IoMoonSharp/> }</p></button>
        {NAV_LINKS.map((nav) => {
          return (
            <li key={nav.id} >
              <Link href={nav.path}>{nav.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
