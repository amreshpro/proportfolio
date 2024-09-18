"use client";
import { useTheme } from "next-themes";
import { buttonVariants } from "../ui/button";
import { useEffect, useState } from "react";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Ensure the component is mounted before rendering to avoid SSR mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Toggle between light and dark theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={buttonVariants({ variant: "default" })}
    >
      {theme === "dark" ? <SunIcon/> : <MoonIcon/>}
    </button>
  );
}
