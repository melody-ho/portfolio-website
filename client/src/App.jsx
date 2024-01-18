/// Imports ///
// external
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
// components
import TabletOrMobile from "./components/TabletOrMobile";
import ThemeToggle from "./components/ThemeToggle";
// assets
import darkTheme from "./dark.module.css";
import lightTheme from "./light.module.css";

/// Component ///
function App() {
  // get browser theme //
  const initialTheme = window.matchMedia("(prefers-color-scheme: light)")
    .matches
    ? "light"
    : "dark";

  // initialize states //
  const [s, setS] = useState(initialTheme === "light" ? lightTheme : darkTheme);
  const [theme, setTheme] = useState(initialTheme);

  // initialize hook for responsive layout //
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1000, minHeight: 600 });

  // change CSS module and body background color when theme is changed //
  useEffect(() => {
    setS(theme === "light" ? lightTheme : darkTheme);
    document.body.style = `background-color: rgb(var(--${theme}-primary-rgb))`;
  }, [theme]);

  // render
  if (isDesktopOrLaptop) {
    return (
      <div className={s.app}>
        <header className={s.header}>
          <ThemeToggle setTheme={setTheme} theme={theme} />
        </header>
        <main className={s.main}>
          <Outlet />
        </main>
        <footer className={s.footer}>Footer</footer>
      </div>
    );
  }
  return <TabletOrMobile setTheme={setTheme} theme={theme} />;
}

export default App;
