import { useContext } from "react";
import { ThemeContext } from "../context/context";

export default function Navbar() {
  const { setTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>Navbar</h1>
      <button
        onClick={() =>
          setTheme((prev) => {
            return prev == "dark" ? "light" : "dark";
          })
        }
        className="bg-orange-500 text-white p-2 m-2"
      >
        Theme
      </button>
    </div>
  );
}
