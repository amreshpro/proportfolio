import { BiSolidChevronRightCircle } from "react-icons/bi";

export default function About() {
  return (
    <div id="about" className="w-full m-1 mt-4 mb-36 flex flex-col justify-center gap-2 px-4 sm:px-2">
      <h1 className=" secondary w-fit p-2 px-6 rounded-lg  text-2xl text-center font-bold">What I do</h1>
      <p>I am well-versed in the following technologies:</p>
      <ul className="about-list flex flex-col gap-4 ">
        <li className="">
        <strong className=" flex items-center gap-1"> <BiSolidChevronRightCircle className="blue-text bg-white rounded-full text-lg" /> React.js:</strong> 
        I love building dynamic user interfaces
          and single-page applications with React. My experience includes state
          management, component-based architecture, and integrating third-party
          APIs.
        </li>
        <li className="">
          <strong className=" flex items-center gap-1"> <BiSolidChevronRightCircle className="blue-text bg-white rounded-full text-lg" /> Next.js:</strong> I have hands-on experience with Next.js,
          utilizing its powerful features such as server-side rendering (SSR)
          and static site generation (SSG) to optimize performance and SEO.
        </li>

        <li>
        <strong className=" flex items-center gap-1"> <BiSolidChevronRightCircle className="blue-text bg-white rounded-full text-lg" /> Express.js:</strong> On the backend, I&apos;ve worked with
          Express.js and similar frameworks to develop robust server-side
          applications. Understanding the full stack allows me to create
          seamless end-to-end solutions.
        </li>
        <li>
        <strong className=" flex items-center gap-1"> <BiSolidChevronRightCircle className="blue-text bg-white rounded-full text-lg" />TypeScript:</strong> I am proficient in TypeScript,
          leveraging its static typing to catch errors early and enhance code
          readability. This helps me create scalable and maintainable codebases.
        </li>
      </ul>
    </div>
  );
}