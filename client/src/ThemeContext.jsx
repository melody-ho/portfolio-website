import { createContext } from "react";

const ThemeContext = createContext(
  window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark",
);

export default ThemeContext;
