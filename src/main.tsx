import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Hero from "./components/Hero.tsx";
import Loader from "./components/Loader.tsx";




const LazyAbout = lazy(()=>import("./components/About.tsx"))
const LazySkills = lazy(()=>import("./components/Skills.tsx"))
const LazyProjects = lazy(()=>import("./components/Projects.tsx"))

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: "Error",
    element:<App/>,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/about",
        element: <LazyAbout/>,
      },
      {
        path: "/skills",
        element: <LazySkills />,
      },
      {
        path: "/projects",
        element: <LazyProjects/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
 <Suspense fallback={<Loader/>}>
   <RouterProvider router={router} />
 </Suspense>
);
