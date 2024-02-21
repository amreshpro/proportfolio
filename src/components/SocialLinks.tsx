import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsMailbox } from "react-icons/bs";

import { SOCIAL_LINKS } from "../constants/SOCIAL_LINKS";

const { github, instagram, linkedin, portfolio, mail } = SOCIAL_LINKS;
export default function SocialLinks() {
  return (
    <div className="flex  gap-6 text-3xl mt-8">
      <Link to={portfolio} className="hover:text-slate-200"></Link>
      <Link to={github} className="hover:text-slate-200">
        <BsGithub />
      </Link>
      <Link to={linkedin} className="hover:text-slate-200">
        <BsLinkedin />
      </Link>
      <Link to={mail} className="hover:text-slate-200">
        <BsMailbox />
      </Link>
      <Link to={instagram} className="hover:text-slate-200">
        <BsInstagram />
      </Link>
    </div>
  );
}
