import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/context";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import NAV_LINKS from "../constants/NAV_LINKS";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import ThemeChangeAnimation from "./ThemeChangeAnimation";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [themeChangeAnimation, setThemeChangeAnimation] = useState(false);

  const themeChangeHandler = () => {
    setThemeChangeAnimation(true);
    setTheme((prev) => {
      return prev == "dark" ? "light" : "dark";
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setThemeChangeAnimation(false);
    }, 1200);
  }, [themeChangeAnimation]);

  if (themeChangeAnimation) {
    return <ThemeChangeAnimation />;
  }

  return (
    <nav className={`mb-8 z-50 `}>
      <div className=" flex justify-between sm:px-2  md:px-4 px-8 py-4 ">
        <div className=" flex gap-4 ">
          {/* logo */}
          <Link
            to="/"
            className=" font-cursive hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-pink-500 text-2xl"
          >
            amresh
          </Link>
          {/* dark mode btn */}
          <button
            onClick={() => themeChangeHandler()}
            className={`text-xl mb-1  flex items-start  link-hover hover:rounded-full p-2  ${
              theme == "dark" ? "hover:bg-blue-900 " : "hover:bg-blue-300"
            }  `}
          >
            {theme == "dark" ? (
              <BsFillSunFill className="pb-0.5" />
            ) : (
              <BsMoonStarsFill className="pb-0.5" />
            )}
          </button>
        </div>
        {/* links */}
        <ul className="flex gap-4 sm:hidden">
          {NAV_LINKS?.map((link) => {
            return (
              <li
                key={link.id}
                className="overflow-hidden text-center m-1 w-16 h-6"
              >
                <Link
                  to={link.path}
                  className="font-light hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-pink-500  "
                >
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
            <CgMenuRight className="text-3xl" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ scale: 0, rotate: 320 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}

          className="z-50"
        >
          <Sidebar />
        </motion.div>
      )}
    </nav>
  );
}
