"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";
import { Switch } from "../ui/switch";

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
    <button className={" flex justify-center items-center gap-2 "}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}{" "}
      <Switch onClick={toggleTheme} />
    </button>
  );
}
