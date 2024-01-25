/// Imports ///
// external
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { NavLink, useLocation, useNavigate, useOutlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
// components
import TabletOrMobile from "./components/TabletOrMobile";
import ThemeToggle from "./components/ThemeToggle";
// variables
import routes from "./routes";
// assets
import darkTheme from "./dark.module.css";
import { DarkBlinkingLogo, LightBlinkingLogo } from "./components/BlinkingLogo";
import lightTheme from "./light.module.css";
import linkTransition from "./linkTransition.module.css";

/// Constants ///
const PAGE_TRANSITION_DURATION = 1500;

/// Private Components ///
function Logo({ theme }) {
  if (window.matchMedia("(hover: hover)").matches) {
    return theme === "light" ? <LightBlinkingLogo /> : <DarkBlinkingLogo />;
  }
  return <img alt="website logo" src={`/static-logo/${theme}-laptop.svg`} />;
}

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

  // initialize states and nodeRef for transition between routes //
  const location = useLocation();
  const outlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};

  // initialize function for programmatic navigation //
  const navigate = useNavigate();

  // change CSS module and body background color when theme is changed //
  useEffect(() => {
    setS(theme === "light" ? lightTheme : darkTheme);
    document.body.style = `background-color: rgb(var(--${theme}-primary-rgb))`;
  }, [theme]);

  // redirect when switching between mobile/tablet and laptop/desktop viewport dimensions //
  useEffect(() => {
    if (isDesktopOrLaptop) {
      const fragment = window.location.hash.substring(1);
      if (fragment !== "" && fragment !== "home") {
        navigate(`/${fragment}`);
      } else if (fragment === "home") {
        navigate("/");
      } else {
        navigate(window.location);
      }
    }
  }, [isDesktopOrLaptop, navigate]);

  // render
  if (isDesktopOrLaptop) {
    return (
      <div className={s.app}>
        <div className={s.background}>
          <div className={s.backgroundLeft} />
          <div className={s.backgroundRight} />
        </div>
        <header className={s.header}>
          <NavLink className={s.headerLogoLink} to="/">
            <div className={s.headerLogo}>
              <Logo theme={theme} />
            </div>
            <span className={s.headerLogotype}>melody ho</span>
          </NavLink>
          <div className={s.headerRight}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${s.headerLink} ${s.headerActiveLink} ${linkTransition.slideIn}`
                  : s.headerLink
              }
              to="/showcase"
            >
              showcase
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${s.headerLink} ${s.headerActiveLink} ${linkTransition.slideIn}`
                  : s.headerLink
              }
              to="/me"
            >
              me
            </NavLink>
            <div className={s.headerThemeToggle}>
              <ThemeToggle setTheme={setTheme} theme={theme} />
            </div>
          </div>
        </header>
        <main className={s.main}>
          <TransitionGroup>
            <CSSTransition
              classNames={{
                enter: s.pageEnter,
                enterActive: s.pageEnterActive,
                exit: s.pageExit,
                exitActive: s.pageExitActive,
              }}
              key={location.pathname}
              nodeRef={nodeRef}
              timeout={PAGE_TRANSITION_DURATION}
            >
              <div className={s.page} ref={nodeRef}>
                {outlet}
              </div>
            </CSSTransition>
          </TransitionGroup>
        </main>
        <footer className={s.footer}>
          <div className={s.footerLeft}>
            <p>© 2024 Melody Ho. All rights reserved.</p>
            <a
              className={s.footerTextLink}
              href="//github.com/melody-ho/portfolio-website"
            >
              See on GitHub
            </a>
          </div>
          <div className={s.footerRight}>
            <a className={s.footerIconLink} href="//github.com/melody-ho">
              <img alt="GitHub" src={`/github-icon/${theme}-laptop.svg`} />
            </a>
            <a
              className={s.footerIconLink}
              href="//linkedin.com/in/melodyho-profile"
            >
              <img alt="LinkedIn" src={`/linkedin-icon/${theme}-laptop.svg`} />
            </a>
          </div>
        </footer>
      </div>
    );
  }
  return <TabletOrMobile setTheme={setTheme} theme={theme} />;
}

export default App;
