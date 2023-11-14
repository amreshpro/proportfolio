"use client";

import { changeMode } from "@/store/themeSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { TfiClose } from "react-icons/tfi";
import { NAV_LINKS } from "@/constants";
import { useState } from "react";
import { motion } from "framer-motion";



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
          <Link href="/" className="font-openSans font-bold   text-xl">
            amresh.dev
          </Link>
          {/* dark mode btn */}
          <button onClick={darkModeHandler} className="text-xl mb-0.5">
            {isDarkMode ? (
              <BsFillSunFill />
            ) : (
              <BsMoonStarsFill className="mb-0.5 text-lg" />
            )}
          </button>
        </div>
        {/* links */}
        <ul className="flex gap-4 sm:hidden">
          {NAV_LINKS?.map((link) => {
            return (
              <li key={link.id}>
                <Link href={link.path} className="hover:text-carrot font-bold">
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

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`  ${
            isMobileMenuOpen ? "flex flex-col gap-8 " : "hidden"
          } ${
            isDarkMode ? "dark" : "light"
          }  w-full h-[100vh] flex justify-center items-center relative `}
        >
          {/* mobile-menu-links  */}
          <ul className="flex flex-col justify-center  gap-6">
            {NAV_LINKS?.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    onClick={() => setIsMobileMenuOpen(false)}
                    className=" hover:text-blue px-4 py-4 text-3xl"
                    href={link.path}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};
