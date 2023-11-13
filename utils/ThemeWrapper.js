
"use client";
import { useSelector } from "react-redux";

const ThemeWrapper = ({ children }) => {
  const isDarkMode = useSelector((state) => state.mode);

  return (
    <main
      className={`${isDarkMode ? "dark " : "light"} `}
    >
      {children}
    </main>
  );
};
export default ThemeWrapper;