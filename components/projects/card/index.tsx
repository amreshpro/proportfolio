
import Link from "next/link";

import { useThemeStore } from "@/store/themeStore";



import { PROJECT_TYPES } from "@/data/types";
import LinkButton from "@/components/ui/LinkButton";
import Technology from "@/components/ui/Technology";
import Image from "next/image";


export default function Project(props: PROJECT_TYPES) {
  const { title, image_url, github_link, live_link, description, tag } = props;
  const isDarkModeEnabled = useThemeStore((state) => state.isDarkModeEnabled);
  return (
    <div
      className={` ${
        isDarkModeEnabled ? "dark-box" : "light-box"
      } border border-gray-300 rounded-lg  transition-all ease-in-out hover:transform  hover:scale-105 p-3 w-80 h-[450px]`}
    >
      <div className="img-box w-full rounded-lg p-2">
        <Link
          href={live_link ?? "#"}
          target="_blank"
          className="rounded-lg  w-full  "
        >
          <Image quality={100} width={1000} height={1000} src={image_url} alt={title} className="rounded-lg" />
        </Link>
      </div>
      <div className="content w-full p-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description}</p>
        <div className="btns py-2  flex gap-4">
          {github_link && <LinkButton title={"Code"} link={github_link} />}
          {live_link && (
            <LinkButton title={"Check Live Site"} link={live_link} />
          )}
        </div>
        <div className="tag flex  flex-wrap gap-2 sm:gap-1">
          {tag?.map((tagItem) => {
            return <Technology key={tagItem.id} {...tagItem} />;
          })}
        </div>
      </div>
    </div>
  );
}


