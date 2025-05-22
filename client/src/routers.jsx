import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import AboutTemplates from "./components/templates/aboutTemplates";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <AboutTemplates />,
      },
      {
        path: "/about",
        element: <AboutTemplates />,
      },
    ],
  },
]);
