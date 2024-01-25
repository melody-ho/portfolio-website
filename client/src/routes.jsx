/// Imports ///
// external
import { createRef } from "react";
// components
import Home from "./components/Home";
import Me from "./components/Me";
import NotFound from "./components/NotFound";
import Showcase from "./components/Showcase";

/// Public ///
const routes = [
  { path: "/", element: <Home />, nodeRef: createRef() },
  { path: "/showcase", element: <Showcase />, nodeRef: createRef() },
  { path: "/me", element: <Me />, nodeRef: createRef() },
  { path: "*", element: <NotFound />, nodeRef: createRef() },
];

export default routes;
