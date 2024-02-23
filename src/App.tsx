import { Outlet } from "react-router-dom";
import Hero from "./components/Hero";
import ThemeButton from "./components/ThemeButton";
import AllSection from "./components/AllSection";

export default function App() {
  return (
    <div>
    <div className="top-bar flex px-4 justify-between">
    <ThemeButton />
      <div className="dot flex gap-4 mt-7 ">
        <div className="dot-1 bg-pink-500 w-4 h-4 rounded-full"></div>
        <div className="dot-2  bg-orange-500 w-4 h-4 rounded-full"></div>
        {/* <div className="dot-3  bg-yellow-500 w-4 h-4 rounded-full"></div> */}
      </div>
    </div>
      <div className="large-screeen flex sm:flex-col justify-evenly ">
        <div className="hero sm:hidden pt-8 px-16 sm:px-8">
          <Hero />
        </div>
        <div className="outlet sm:hidden pt-8 px-4 w-full overflow-y-scroll h-screen">
          <Outlet />
        </div>
        <div className=" hidden sm:flex justify-center pt-8 overflow-y-scroll h-screen">
          <AllSection />
        </div>
      </div>
    </div>
  );
}
