import {
    createBrowserRouter,
  } from "react-router-dom";
  
import Wrapper from "../pages/Wrapper";
import Dashboard from "../pages/Dashboard";
import Cameras from "../pages/Cameras";
  
  export const router = createBrowserRouter([
    {
        path : "/",
        element: <Wrapper/>,
        children: [
            {
            index: true,
            element: <Dashboard/>,
            },
            {
            path: "live-cams",
            element: <Cameras/>,
            },

        ]
    }
  ]);