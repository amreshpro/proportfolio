import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbMailOpenedFilled } from "react-icons/tb";
import { SOCIAL_LINKS } from "../constants/SOCIAL_LINKS";
import { useThemeContext } from "../theme/ThemeProvider";

const { github, instagram, linkedin, portfolio, mail } = SOCIAL_LINKS;
export default function SocialLinks() {
  const { theme } = useThemeContext();
  return (
    <div className="flex  gap-6 text-3xl mt-8">
      <Link
        to={portfolio}
        className={`${
          theme == "dark" ? "hover:text-slate-200" : "hover:text-[#f22256]"
        }`}
      ></Link>
      <Link
        to={github}
        className={`${
          theme == "dark" ? "hover:text-slate-200" : "hover:text-[#f22256]"
        }`}
      >
        <BsGithub />
      </Link>
      <Link
        to={linkedin}
        className={`${
          theme == "dark" ? "hover:text-slate-200" : "hover:text-[#f22256]"
        }`}
      >
        <BsLinkedin />
      </Link>
      <Link
        to={mail}
        className={`${
          theme == "dark" ? "hover:text-slate-200" : "hover:text-[#f22256]"
        }`}
      >
        <TbMailOpenedFilled />
      </Link>
      <Link
        to={instagram}
        className={`${
          theme == "dark" ? "hover:text-slate-200" : "hover:text-[#f22256]"
        }`}
      >
        <BsInstagram />
      </Link>
    </div>
  );
}
