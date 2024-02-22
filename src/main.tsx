import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import ThemeProviders from "./theme/ThemeProvider.tsx";
import ThemeWrapper from "./theme/ThemeWrapper.tsx";

const router = createBrowserRouter([
  {
    element: (
      <ThemeProviders>
        <ThemeWrapper>
          <App />
        </ThemeWrapper>
      </ThemeProviders>
    ),
    path: "/",
    errorElement: (
      <p className="text-red-500 text-center m-2">
        Something went wrong -error
      </p>
    ),
    children: [
      {
        path: "/",

        element: <About />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
