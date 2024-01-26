// import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

export default function AllMobilePage() {
  return (
    <div className="hidden sm:flex sm:flex-col ">
      {/* <Hero /> */}
      <About/>
      <Skills />
      <Projects />
    </div>
  );
}
