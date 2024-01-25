/// Imports ///
// external
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// components
import App from "./App";
// variables
import routes from "./routes";

/// Router ///
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map((route) => {
      const childRoute = {};
      if (route.path === "/") {
        childRoute.index = true;
      } else {
        childRoute.path = route.path;
      }
      childRoute.element = route.element;
      return childRoute;
    }),
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
