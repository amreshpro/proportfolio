import { Outlet } from "react-router-dom";
import Hero from "./components/Hero";
import ThemeButton from "./components/ThemeButton";
import AllSection from "./components/AllSection";

export default function App() {
  return (
    <div>
      <ThemeButton />
      <div className="large-screeen flex sm:flex-col justify-evenly ">
        <div className="hero sm:hidden pt-8 px-16 sm:px-8">
          <Hero />
        </div>
        <div className="outlet sm:hidden pt-8 overflow-y-scroll h-screen">
          <Outlet />
        </div>
        <div className=" hidden sm:flex pt-8 overflow-y-scroll h-screen">
          <AllSection />
        </div>
      </div>
    </div>
  );
}
