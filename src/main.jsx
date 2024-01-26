import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./App";
import { Hero, Projects, Skills } from "./components";
import AllMobilePage from "./components/AllMobilePage";
import About from "./components/About";



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: (
      <h1 className="text-red-500 w-screen text-center p-2 ">
        Error Something Went Wrong
      </h1>
    ),
    children: [
      {
        path: "/",
        element: <div>

        <Hero/>
        <AllMobilePage/>
        </div>
          
      },
   
      {
        path: "/projects",
        element:<Projects/>,
      },
      {
        path: "/skills",
        element: <Skills/>,
      },{
        path:"/about",
        element:<About/>
      },
      {
        path: "/*",
        element: <h1>Hello Page Not found</h1>,
      },
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
