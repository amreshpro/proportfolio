export default function About() {
  return (
    <div id="about" className="w-full text-justify flex flex-col gap-2 px-4 sm:px-2">
      <h1 className="text-2xl font-bold">What I do</h1>
      <p>I am well-versed in the following technologies:</p>
      <ul className="about-list flex flex-col gap-4 ">
        <li className="">
          <strong> React.js:</strong> I love building dynamic user interfaces
          and single-page applications with React. My experience includes state
          management, component-based architecture, and integrating third-party
          APIs.
        </li>
        <li>
          <strong> Next.js:</strong> I have hands-on experience with Next.js,
          utilizing its powerful features such as server-side rendering (SSR)
          and static site generation (SSG) to optimize performance and SEO.
        </li>

        <li>
          <strong> Express.js:</strong> On the backend, I&apos;ve worked with
          Express.js and similar frameworks to develop robust server-side
          applications. Understanding the full stack allows me to create
          seamless end-to-end solutions.
        </li>
        <li>
          <strong> TypeScript:</strong> I am proficient in TypeScript,
          leveraging its static typing to catch errors early and enhance code
          readability. This helps me create scalable and maintainable codebases.
        </li>
      </ul>
    </div>
  );
}
