import { NavLink } from "react-router-dom";
import NAV_LINKS from "../constants/NAV_LINKS";
import { useThemeContext } from "../theme/ThemeProvider";

export default function Navbar() {
  const { theme } = useThemeContext();
  return (
    <nav className="flex flex-col gap-2">
      {NAV_LINKS?.map((link) => {
        const { path, title, id } = link;
        return (
          <NavLink
            to={path}
            key={id}
            className={({ isActive }) => {
              console.log("isactive:" + isActive);
              return isActive
                ? `flex items-center gap-1 text-lg font-semibold  ${
                    theme == "dark" ? "text-slate-200" : "text-red-900"
                  }`
                : `flex gap-1 items-center`;
            }}
          >
            {title}
          </NavLink>
        );
      })}
    </nav>
  );
}
