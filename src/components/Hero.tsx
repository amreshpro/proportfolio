import { Link } from "react-router-dom";
import { MYBIO, MYNAME, MYPROFILE } from "../constants/INFO";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import { SOCIAL_LINKS } from "../constants/SOCIAL_LINKS";
import { useThemeContext } from "../theme/ThemeProvider";
import { BiSolidChevronsDown } from "react-icons/bi";

export default function Hero() {
  const { theme } = useThemeContext();

  return (
    <div className=" w-full flex flex-col gap-4  ">
      <h1
        className={`${
          theme == "dark" ? "text-slate-200" : "text-red-800"
        } sm:text-3xl md:text-4xl text-5xl font-bold tracking-tight `}
      >
        {MYNAME}
      </h1>
      <h2
        className={` ${
          theme == "dark" ? "text-slate-200" : "text-red-700"
        }  text-xl sm:text-lg font-extralight tracking-tight `}
      >
        {MYPROFILE}
      </h2>
      <p className="tracking-tight ">{MYBIO}</p>
      {/* resume link */}
      <Link
        to={SOCIAL_LINKS?.resume}
        target="_blank"
        className={` px-4 py-2 ${
          theme == "dark"
            ? " bg-teal-200 hover:bg-teal-900 hover:text-teal-200 text-teal-900 "
            : " bg-red-900 hover:bg-red-700 hover:text-red-100 text-red-50 "
        } marker:transition-all  rounded-lg w-fit`}
      >
        Resume
      </Link>

      {/* down arrow */}
<BiSolidChevronsDown className="sm:hidden animate-bounce text-2xl"/>
      {/* Navlink */}
      <div className="navbar sm:hidden">
        <Navbar />
      </div>
      {/* social links */}
      <SocialLinks />
    </div>
  );
}
