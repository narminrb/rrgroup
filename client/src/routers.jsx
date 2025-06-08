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
import ServiceTemplates from "./components/templates/serviceTemplates";
import ServiceDetailsTemplates from "./components/templates/serviceDetailTemplates";
import ServiceOfficeTemplates from "./components/templates/serviceOfficeTemplates";
import CareerTemplates from "./components/templates/careerTemplates";
import CareerDetailTemplates from "./components/templates/careerDetailTemplates";
import ContactTemplates from "./components/templates/contactTemplates";
import SpecialProjectsTemplates from "./components/templates/specialProjectsTemplates";



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
            path: "layihələr",
            children: [
              {
                path: "",
                element: <ProjectsTemplates />,
              },
              {
                path: ":id", 
                element: <ProjectDetailTemplate />,
              },
              {
                path:"yenilayihələr/:id",
                element:<SpecialProjectsTemplates/>
              }
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
          ,
          {
            path: "services",
            children: [
              {
                path: "",
                element: <ServiceTemplates />,
              },
              {
                path: ":id", 
                element: <ServiceDetailsTemplates />,
              },
              {
                path:"offices/:id",
                element:<ServiceOfficeTemplates/>
              }
            ],
          },
          {
            path: "career",
            children: [
              {
                path: "",
                element: <CareerTemplates />,
              },
              {
                path: ":id", 
                element: <CareerDetailTemplates />,
              }
            ],
          },
          {
            path: "contact",
            children: [
              {
                path: "",
                element: <ContactTemplates />,
              }
            ],
          }
        ],
      },
    ],
  },
]);

