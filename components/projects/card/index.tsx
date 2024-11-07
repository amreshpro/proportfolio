import Link from "next/link";
import Image from "next/image";

import { PROJECT_TYPES } from "@/data/types";
import Technology from "../technology-used";

import { twMerge } from "tailwind-merge";

export default function Project(props: PROJECT_TYPES) {
  const { title, image_url, github_link, live_link, description, tag } = props;
  return (
    <div
      className={`  secondary border border-gray-300 rounded-xl  transition-all ease-in-out hover:transform  hover:scale-105 p-3 w-80 h-[500px]`}
    >
      <div className="img-box w-full rounded-lg p-2">
        <Link
          href={live_link ?? "#"}
          target="_blank"
          className="rounded-lg  w-full  "
        >
          <Image
            quality={100}
            width={1000}
            height={1000}
            src={image_url}
            alt={title}
            className="rounded-lg"
          />
        </Link>
      </div>
      <div className="content w-full p-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description}</p>
        <div className="btn py-2 flex gap-4">
          {github_link && (
            <Link
              className={twMerge("bg-secondary hover:bg-ternary rounded-full p-2")}
              href={github_link}
            >
              Code
            </Link>
          )}
          {live_link && (
            <Link
              className={twMerge("bg-secondary hover:bg-ternary rounded-full p-2")}
              href={live_link}
            >
              Visit Live Site
            </Link>
          )}
        </div>
        <div className="tag flex  gap-2 sm:gap-1">
          {tag?.map((tagItem) => {
            return <Technology key={tagItem.id} {...tagItem} />;
          })}
        </div>
      </div>
    </div>
  );
}
