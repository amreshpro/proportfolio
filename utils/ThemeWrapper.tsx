"use client";
import { useAppSelector } from "@/types/redux.types";
import type { ReactNode } from "react";

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const isDarkMode = useAppSelector((state) => state.mode);
const body = document.getElementById("body");
if(isDarkMode) {
  body?.classList.remove("light");
  body?.classList.add("dark");
}else{
  body?.classList.remove("dark");
  body?.classList.add("light");
}
  return (
    <main className={`${isDarkMode ? "  dark  " : "light"} `}>{children}</main>
  );
};
export default ThemeWrapper;
