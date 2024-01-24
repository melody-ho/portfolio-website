import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./components/Home";
import Me from "./components/Me";
import NotFound from "./components/NotFound";
import Showcase from "./components/Showcase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/showcase", element: <Showcase /> },
      { path: "/me", element: <Me /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
