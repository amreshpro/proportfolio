import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

export default function AllSection() {
  return (
    <div className="flex flex-col gap-16 px-8 xsm:px-4">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
