"use client";

import ThemeSwitcher from "../theme-switcher";
import MobileMenu from "./mobile-menu";
import Navbar, { navbarVariant } from "./navbar";

export default function Header() {
  return (
    <div className="fixed z-50 w-full mr-1 flex gap-4 p-2 justify-center sm:justify-items-start items-center ">
     <div className="flex gap-4 w-fit  p-2 sm:w-screen sm:justify-between border border-gray-300 rounded-md  bg-gradient-to-r  from-blue-300  to-blue-600">
     <ThemeSwitcher />
      <div className=" sm:hidden flex gap-2 justify-center">
       <Navbar navbarVariant={navbarVariant.ROW}/>
      </div>
      {/* mobileMenu */}
      <div className="mobile hidden sm:block">
        <MobileMenu/>
      </div>
     </div>
    </div>
  );
}
