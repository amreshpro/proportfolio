import { MYIMAGE } from "../assets";
export default function About() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1
        id="about"
        className="text-3xl text-justify uppercase font-bold   my-6"
      >
        About
      </h1>
      <div className="flex  gap-1 px-2 md:flex-col">
        <div className="content w-1/2 md:w-full p-2">
          <p>
            Hello! I&apos;m <strong>Amresh Maurya</strong>, a passionate and
            innovative frontend developer with a focus on creating engaging and
            interactive web experiences. I specialize in using cutting-edge
            technologies and frameworks to bring ideas to life.
          </p>
          <h1 className="text-2xl font-bold">What I do</h1>
          <p>I am well-versed in the following technologies:</p>
          <ul className="about-list ">
            <li className="">
              <strong> React.js:</strong> I love building dynamic user
              interfaces and single-page applications with React. My experience
              includes state management, component-based architecture, and
              integrating third-party APIs.
            </li>
            <li>
              <strong> Next.js:</strong> I have hands-on experience with
              Next.js, utilizing its powerful features such as server-side
              rendering (SSR) and static site generation (SSG) to optimize
              performance and SEO.
            </li>

            <li>
              <strong> Express.js:</strong> On the backend, I&apos;ve worked
              with Express.js and similar frameworks to develop robust
              server-side applications. Understanding the full stack allows me
              to create seamless end-to-end solutions.
            </li>
            <li>
              <strong> TypeScript:</strong> I am proficient in TypeScript,
              leveraging its static typing to catch errors early and enhance
              code readability. This helps me create scalable and maintainable
              codebases.
            </li>
          </ul>
        </div>
        <div className="my-image w-1/2 md:w-full flex items-center py-2 ">
          <img
            src={MYIMAGE}
            alt="my-image"
            className=" w-full text-center h-80 object-contain  "
          />
        </div>
      </div>
    </div>
  );
}
