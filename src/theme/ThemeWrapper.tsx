import type { ReactNode } from "react";
import { useThemeContext } from "./ThemeProvider";


export default function ThemeWrapper({ children }: { children: ReactNode }) {
  const { theme } = useThemeContext();
  return (
    <main className={`${theme == "dark" ? "bg-slate-900 text-slate-400 leading-relaxed antialiased selection:bg-teal-300 selection:text-teal-900" : "bg-red-50 text-red-700 leading-relaxed antialiased selection:bg-teal-300 selection:text-teal-900"}`}>{children}</main>
  );
}