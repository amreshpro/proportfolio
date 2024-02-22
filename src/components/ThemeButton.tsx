import { useEffect, useState } from "react";
import { useThemeContext } from "../theme/ThemeProvider";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import ThemeChangeEffect from "./ThemeChangeEffect";

export default function ThemeButton() {
    const { theme, setTheme } = useThemeContext();
    const [themeChangeEffect, setThemeChangeEffect] = useState(false);

    const themeChangeHandler = () => {
        setThemeChangeEffect(true);
        setTheme((prev: string) => {
          return prev === "dark" ? "light" : "dark";
        });
      };


      useEffect(() => {
        setTimeout(() => {
          setThemeChangeEffect(false);
        }, 1200);
      }, [themeChangeEffect]);
    
      if (themeChangeEffect) {
        return <ThemeChangeEffect />;
      }
    
      
  return (
    <button
    onClick={themeChangeHandler}
    className={` text-3xl flex items-start link-hover hover:rounded-full p-2 px-6 pt-6 `}
  >
    {theme === "dark" ? (
      <BsFillSunFill className="" />
    ) : (
      <BsMoonStarsFill className="" />
    )}
  </button>
  )
}