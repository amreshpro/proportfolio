import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PROJECT_TYPES } from "@/data/types";
import Technology from "../technology-used";
import { buttonVariants } from "@/components/ui/button";

export default function Project(props: PROJECT_TYPES) {
  const { title, image_url, github_link, live_link, description, tag } = props;
  return (
    <Card
      className={`  secondary border border-gray-300 rounded-lg  transition-all ease-in-out hover:transform  hover:scale-105 p-3 w-80 h-[450px]`}
    >
      <CardHeader className="img-box w-full rounded-lg p-2">
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
      </CardHeader>
      <CardContent className="content w-full p-2">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="btns py-2  flex gap-4">
          {github_link && (
            <Link
              className={buttonVariants({ variant: "default" })}
              href={github_link}
            >
              {" "}
              Code
            </Link>
          )}
          {live_link && (
            <Link
              className={buttonVariants({ variant: "default" })}
              href={live_link}
            >
              Check Live Site
            </Link>
          )}
        </div>
        <CardFooter className="tag flex  gap-2 sm:gap-1">
          {tag?.map((tagItem) => {
            return <Technology key={tagItem.id} {...tagItem} />;
          })}
        </CardFooter>
      </CardContent>
    </Card>
  );
}
