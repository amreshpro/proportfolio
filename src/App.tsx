import { Outlet } from "react-router-dom";
import Hero from "./components/Hero";
import ThemeButton from "./components/ThemeButton";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";

export default function App() {
  return (<div className="w-screen">
  <ThemeButton/>
 <div className="layout flex gap-8 justify-evenly " >
    <div className="left px-16 pt-8 ">
        <Hero/>
    </div>
    <div className="right overflow-scroll px-16 pt-8">
        <Outlet/>
    </div>
 </div>
  </div>
  );
}
