import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import AboutTemplates from "./components/templates/aboutTemplates";
import HomeTemplates from "./components/templates/homeTemplates";
import ProjectsTemplates from "./components/templates/projectsTemplates";
import ProjectDetailTemplate from "./components/templates/projectsDetailTemplate";
import NewsTemplates from "./components/templates/newsTemplates";
import NewsDetailTemplate from "./components/templates/newsDetailTemplates";
import KsmTemplates from "./components/templates/ksmTemplates";
import KsmDetailTemplates from "./components/templates/ksmDetailTemplates";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "rrgroup",
        children: [
          {
            path: "about", 
            element: <AboutTemplates />,
          },
          {
            path: "", 
            element: <HomeTemplates />,
          },
          {
            path: "news",
            children: [
              {
                path: "",
                element: <NewsTemplates />,
              },
              {
                path: ":id", 
                element: <NewsDetailTemplate />,
              },
            ],
          },
          {
            path: "projects",
            children: [
              {
                path: "",
                element: <ProjectsTemplates />,
              },
              {
                path: ":id", 
                element: <ProjectDetailTemplate />,
              },
            ],
          },
          {
            path: "ksm",
            children: [
              {
                path: "",
                element: <KsmTemplates />,
              },
              {
                path: ":id", 
                element: <KsmDetailTemplates />,
              },
            ],
          }
        ],
      },
    ],
  },
]);

