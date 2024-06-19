import { useState } from "react";
import Link from "next/link";
import { TbMenu } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import NAV_LINKS from "@/data/NAV_LINKS";
import { IoMdSunny } from "react-icons/io";
import { IoMoonSharp } from "react-icons/io5";
import { useThemeStore } from "@/store/themeStore";

export default function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkModeEnabled, toggleDarkMode } = useThemeStore((state) => state);

  return (
    <div className=" fixed  flex justify-between w-screen px-2 ">
      <div className="flex justify-between items-center px-2 w-full">
        <div className="logo flex sm:gap-0.5 gap-2 px-0.5 sm:animate-bounce">
          <p className="bg-red-400 rounded-full p-2 sm:p-1  hover:animate-bounce"></p>
          <p className="bg-orange-400 rounded-full p-2 sm:p-1 hover:animate-bounce "></p>
          <p className="bg-green-400 rounded-full p-2 sm:p-1 hover:animate-bounce"></p>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-2xl"
        >
          {isMobileMenuOpen ? <RxCross1 /> : <TbMenu />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div
          className={`${
            isDarkModeEnabled ? " bg-n-10" : "light-box "
          } absolute w-[50vw] flex flex-col gap-8 top-12 right-2 rounded-lg p-4 mr-5`}
        >
          <button
            onClick={() => toggleDarkMode()}
            className="w-fit   flex justify-start items-center text-center text-4xl "
          >
            <p className="">
              {isDarkModeEnabled ? <IoMdSunny /> : <IoMoonSharp />}
            </p>
          </button>
          <ul className=" text-xl flex flex-col gap-8  rounded-lg items-center">
            {NAV_LINKS.map((nav) => {
              const { id, title, path } = nav;
              return (
                <li key={id}>
                  <Link
                    href={path}
                    className="hover:font-bold transition-all ease-in-out hover:transform  hover:scale-110"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
       
      )}
    </div>
  );
}
