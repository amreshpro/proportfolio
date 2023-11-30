"use client";

import { useAppSelector } from "@/types/redux.types";
import { intro1, intro2, intro3 } from "../constants/about";

export function About() {
  const isDarkMode = useAppSelector((state) => state.mode);

  return (
    <div
      id="about"
      className={`  ${
        isDarkMode ? "about-dark " : "about-light"
      }   flex justify-center items-center md:flex-col-reverse gap-24 sm:gap-4 w-full h-full px-8 sm:px-1 py-8`}
    >
      <div className="about-content px-2  flex flex-col gap-4 w-1/2 md:w-full">
        <h1 className="text-4xl sm:text-2xl font-bold">I'am Amresh Maurya</h1>
        {/* <p className="about text-justify text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ratione iste eum enim odit doloribus doloremque non neque quia quo nemo facere voluptatum architecto at culpa deserunt illo inventore eius? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptates earum error voluptas itaque maiores magni aperiam exercitationem iste perferendis, alias nemo asperiores sit velit nostrum quos incidunt, illo vero eos iusto esse doloremque! Dignissimos soluta iusto reprehenderit natus dolores aliquam exercitationem, quibusdam sequi omnis dolorum, sunt provident quaerat ut?</p>
     <p className="about text-justify text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ratione iste eum enim odit doloribus doloremque non neque quia quo nemo facere voluptatum architecto at culpa deserunt illo inventore eius? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptates earum error voluptas itaque maiores magni aperiam exercitationem iste perferendis, alias nemo asperiores sit velit nostrum quos incidunt, illo vero eos iusto esse doloremque! Dignissimos soluta iusto reprehenderit natus dolores aliquam exercitationem, quibusdam sequi omnis dolorum, sunt provident quaerat ut?</p>
       */}
        <p className=" text-justify text-lg">{intro1}</p>
        <p className=" text-justify text-lg">{intro2}</p>
        <p className=" text-justify text-lg">{intro3}</p>
      </div>
      <div className="my-image  md:w-full flex justify-center">
        <img
          className=" w-[350px] h-[350px] sm:w-[300px] sm:h-[300px] rounded-full shadow-xl object-cover "
          src="/profile2.jpg"
          alt="my-photo"
        />
      </div>
    </div>
  );
}
