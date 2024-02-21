import { Outlet } from "react-router-dom";
import Hero from "./components/Hero";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="flex gap-4  justify-between  md:flex-col sm:justify-center ">
      <div className="hero pt-24 px-36 md:px-16 sm:px-6 sm:static">
        <Hero />
      </div>
      <div className="site-components w-full pt-24 px-36 md:px-16 sm:px-6 h-screen overflow-y-scroll sm:overflow-hidden">
       <Outlet/>
      </div>
    </div>
  );
}
