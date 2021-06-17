// import React from 'react';
import { join } from "lodash-es";
import Home from "../pages/Home";
import Movies from "../pages/Movies";

const ROUTES = [
  {
    path: "/movies/:id?",
    name: "Movies",
    icon: null,
    component: Movies,
    layout: "/home",
    desc: "Get Yo Movieeeees",
  },
  {
    path: "/",
    name: "Home",
    icon: null,
    component: Home,
    layout: "/home",
    desc: "HOMEEEEE",
  },
];

export default ROUTES;
