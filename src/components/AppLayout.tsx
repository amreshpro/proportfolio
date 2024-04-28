import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AllSection from "./AllSection";

export default function AppLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
       
          </div>
  );
}
