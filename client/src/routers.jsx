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
import AdminLayout from "./pages/admin/AdminLayout";
import AdminPage from "./pages/admin/AdminPage";
import AdminAbout from "./pages/admin/AdminAbout";
import SwaggerDocs from "./components/templates/SwaggerDocs";
import AdminProjects from "./pages/admin/AdminProjects";
import AdminKsm from "./pages/admin/AdminKsm";
import AdminNews from "./pages/admin/AdminNews";
import AdminContact from "./pages/admin/AdminContact";
import AdminCareer from "./pages/admin/AdminCareer";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "rrgroup",
        children: [
          {
            path: "docs",
            element: <SwaggerDocs />,
          },          
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
  {
    path: "rrgroup/admin",
    element: <AdminLayout />,
    children : [
      {
        path:'',
        element:<AdminPage/>
      },
      {
        path:'about',
        element:<AdminAbout/>
      },
      {
        path:'projects',
        element:<AdminProjects/>
      },
      {
        path:'ksm',
        element:<AdminKsm/>
      },
      {
        path:'news',
        element:<AdminNews/>
      },
      {
        path:'contact',
        element:<AdminContact/>
      },
      {
        path:'career',
        element:<AdminCareer/>
      }

    ]
    
  }
]);

