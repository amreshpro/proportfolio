"use client";
import { ImLocation2 } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import Link from "next/link";
import { useAppSelector } from "@/types/redux.types";

export function Contact() {
  const isDarkMode = useAppSelector((state) => state.mode);

  return (
    <div
      className={` ${
        isDarkMode ? "contact-dark " : "contact-light"
      }  sm:px-4 py-4 sm:py-2 flex flex-col gap-4 justify-center items-center`}
    >
      <h1 id="contact" className="text-md uppercase font-bold  ">
        Contact
      </h1>
      <h1 className="text-2xl font-bold">Don&quot;t be shy! Hit me up! 👇</h1>
      <div className="mt-6 contact-container flex sm:flex-col gap-8 sm:gap-4 ">
        <div className="location flex gap-2">
          {/* icon */}
          <div className="icon rounded-full  bg-red-300 h-fit w-fit p-2 ">
            <ImLocation2 className="text-2xl " />
          </div>
          {/* content */}
          <div className="content">
            <h1 className="font-bold">Location</h1>
            <h1>Rohtak, India</h1>
          </div>
        </div>
        <div className="mail flex gap-2">
          {/* icon */}
          <div className="icon rounded-full bg-red-300 h-fit w-fit p-2">
            <FiMail className="text-2xl  " />
          </div>
          {/* content */}
          <div className="content flex flex-col ">
            <Link href="mailto:amresh.terminal@gmail.com" className="font-bold">
              Mail
            </Link>
            <Link href="mailto:amresh.terminal@gmail.com">
              amresh.terminal@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
