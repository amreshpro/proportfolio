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
    }, 1000);
  }, [ themeChangeAnimation]);

if(themeChangeAnimation){
  return<ThemeChangeAnimation/>
}


  return (
    <nav className={`mb-8 z-50 `}>
      <div className="navbar-container flex justify-between sm:px-2  md:px-4 px-8 py-4 ">
        <div className="logo-and-mode flex gap-4 ">
          {/* logo */}
          <Link to="/" className="gradient-text font-cursive    text-2xl">
            amresh
          </Link>
          {/* dark mode btn */}
          <button
            onClick={() => themeChangeHandler()}
            className="text-xl mb-0.5 link-hover"
          >
            {theme == "dark" ? <BsFillSunFill /> : <BsMoonStarsFill />}
          </button>
        </div>
        {/* links */}
        <ul className="flex gap-4 sm:hidden">
          {NAV_LINKS?.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.path} className="link-hover font-light">
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
        >
          <Sidebar />
        </motion.div>
      )}
    </nav>
  );
}
