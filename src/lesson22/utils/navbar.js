import React from "react";
import Home from "../components/Home/index.jsx";
import About from "../components/About/index.jsx";
import Templates from "../components/Templates/index.jsx";
import Contact from "../components/Contact/index.jsx";
import Single from "../components/Signle/index.jsx";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    element: <Home />,
    isPrivate: false,
  },
  {
    id: 1,
    title: "Single",
    path: "/home/:id",
    element: <Single />,
    isPrivate: false,
  },
  {
    id: 1,
    title: "Login",
    path: "/login",
    element: <About />,
    isPrivate: false,
  },
  {
    id: 1,
    title: "Contact",
    path: "/contact",
    element: <Contact />,
    isPrivate: true,
  },
  {
    id: 1,
    title: "Templates",
    path: "/templates",
    element: <Templates />,
    isPrivate: false,
  },
];
