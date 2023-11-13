import { NAV_LINKS } from "@/constants";
import { changeMode } from "@/store/themeSlice";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function MobileSideBar() {




  const isDarkMode = useSelector((state) => state.mode);


  return (
    <div className={` ${isDarkMode ? 'dark' :'light'}  w-full h-[100vh] flex justify-center absolute `}>
      {/* menu-button */}

      {/* mobile-menu-links  */}
      <ul className="flex flex-col justify-center  gap-6">
        {NAV_LINKS?.map((link) => {
          return (
            <li key={link.id}>
              <Link className=" hover:text-blue px-4 py-4 text-3xl" href={link.path}>
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
