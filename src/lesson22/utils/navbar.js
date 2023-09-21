import React from "react";
import Home from "../components/Home/index.jsx";
import About from "../components/About/index.jsx";
import Templates from "../components/Templates/index.jsx";
import Contact from "../components/Contact/index.jsx";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    element: <Home />,
  },
  {
    id: 1,
    title: "About",
    path: "/about",
    element: <About />,
  },
  {
    id: 1,
    title: "Contact",
    path: "/contact",
    element: <Contact />,
  },
  {
    id: 1,
    title: "Templates",
    path: "/templates",
    element: <Templates />,
  },
];
