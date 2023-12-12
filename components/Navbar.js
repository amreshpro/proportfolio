"use client";

import { changeMode } from "@/store/themeSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { TfiClose } from "react-icons/tfi";
import { NAV_LINKS } from "@/constants";
import { useState } from "react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const darkModeHandler = () => {
    dispatch(changeMode());
  };

  const isDarkMode = useSelector((state) => state.mode);

  return (
    <nav className={`mb-8 z-50 `}>
      <div className="navbar-container flex justify-between sm:px-2  md:px-4 px-8 py-4 ">
        <div className="logo-and-mode flex gap-4 ">
          {/* logo */}
          <Link
            href="/"
            className="gradient-text font-bold   text-xl"
          >
            amresh.dev
          </Link>
          {/* dark mode btn */}
          <button
            onClick={darkModeHandler}
            className="text-xl mb-0.5 link-hover"
          >
            {isDarkMode ? (
              <BsFillSunFill className="" />
            ) : (
              <BsMoonStarsFill className="" />
            )}
          </button>
        </div>
        {/* links */}
        <ul className="flex gap-4 sm:hidden">
          {NAV_LINKS?.map((link) => {
            return (
              <li key={link.id}>
                <Link href={link.path} className="link-hover font-bold">
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* menu button */}
        <button
          className="hidden text-3xl sm:flex"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <TfiClose className=" text-2xl " />
          ) : (
            <CgMenuRight />
          )}
        </button>
      </div>

      {/* mobile menu */}
      <div 
        className={`  ${isMobileMenuOpen ? "flex flex-col  " : "hidden"} ${
          isDarkMode ? "dark-mobile-menu" : "light-mobile-menu"
        } rounded-lg mx-2 py-4 px-4    z-50 flex justify-center items-center absolute right-0`}
      >
        {/* mobile-menu-links  */}
        <ul className="flex flex-col justify-center w-fit gap-6">
          {NAV_LINKS?.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  onClick={() => setIsMobileMenuOpen(false)}
                  className=" hover:bg-blue-600 hover:rounded-lg px-1 py-1 text-xl"
                  href={link.path}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
