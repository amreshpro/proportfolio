"use client";
import { useAppSelector } from "@/types/redux.types";
import type { ReactNode } from "react";

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const isDarkMode = useAppSelector((state) => state.mode);

  return (
    <main className={`${isDarkMode ? "dark " : "light"} `}>{children}</main>
  );
};
export default ThemeWrapper;
