import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";
import ThemeProviders from "./providers/ThemeProviders";
import ThemeWrapper from "./providers/ThemeWrapper";

export default function AppLayout() {
  return (
    <div className="main">
      <ThemeProviders>
          <ThemeWrapper>
            <Navbar />
            <Outlet />
            <Footer />
          </ThemeWrapper>
      </ThemeProviders>
    </div>
  );
}
