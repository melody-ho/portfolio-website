/// Imports ///
// external
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { NavLink, useLocation, useNavigate, useOutlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
// contexts
import ThemeContext from "./ThemeContext";
// components
import Avatar from "./components/Avatar";
import TabletOrMobile from "./components/TabletOrMobile";
import ThemeToggle from "./components/ThemeToggle";
// variables
import routes from "./routes";
// svgs
import GitHubIcon from "./svgs/GitHubIcon";
import LinkedInIcon from "./svgs/LinkedInIcon";
// assets
import darkTheme from "./appDark.module.css";
import { DarkBlinkingLogo, LightBlinkingLogo } from "./components/BlinkingLogo";
import lightTheme from "./appLight.module.css";
import linkTransition from "./linkTransition.module.css";
import pageTransition from "./pageTransition.module.css";
import s from "./app.module.css";

/// Constants ///
const PAGE_TRANSITION_DURATION = 1500;

/// Private Components ///
function Logo({ theme }) {
  if (window.matchMedia("(hover: hover)").matches) {
    return theme === "light" ? <LightBlinkingLogo /> : <DarkBlinkingLogo />;
  }
  return (
    <svg viewBox="0 0 500 500">
      <title>Website Logo</title>
      <path
        d="M290.85,340.8h.01s0,35.89,0,35.89c0,0,0,.01-.01.01-17.33,28.36-33.31,49.95-44.43,53.26-53.59,15.99-42.59-64.89-39.59-89.45s18.86-110.21,2.98-114.94c-10.48-3.12-37.98,8.38-45.6,164.64,0,0-33.23,23.64-40.31,2.19-7.07-21.45,33.41-170.45,15.17-182.45s-62.16,60.8-62.7,68.9c-.54,8.1,1.54,115.14,0,117.12-1.54,1.98-30.26,16.7-39.9,1.34-9.64-15.36-9.73-180.77,4.32-204.06h.01c4.55-7.55,35.04-4.3,38.04,2.7s-1.02,48.82-1.02,48.82c0,0,38.24-75.92,71.02-71.82,24,3,31.22,48.78,31.22,48.78,0,0,39.28-46.17,72.59-28.99,39.19,20.21-24.31,186.07,4.69,195.12,6.29,1.97,18.37-18.34,33.51-47.06Z"
        fill="currentColor"
      />
      <path
        d="M440.14,391.24c-30.31,20.71-70.49-6.69-48.31-121.29,6-31,4.87-58.24-3.29-56.95-10.13,1.6-40.38,61.92-71.71,118.61h0s0,.02-.01.02v-40.94s.01-.01.01-.01c27.74-53.07,59.58-108.95,84.99-113.59,50.02-9.14,33.15,72.65,31.08,92.25-2.06,19.61-10.18,96.32,7.07,89.55,27.86-10.94,31.51-70.32,44.4-75.72,12.46-5.22,10.39,70.74-44.23,108.07Z"
        fill="currentColor"
      />
      <path
        d="M316.82,58.73v231.97c-2.31,4.42-4.59,8.82-6.84,13.17-1.03,2-2.06,3.99-3.08,5.97-.4.78-.8,1.56-1.21,2.34-3.5,6.8-6.9,13.43-10.19,19.74-1.58,3.03-3.12,5.99-4.64,8.87v35.92c3.78-6.17,7.61-12.66,11.46-19.35,1.36-2.34,2.71-4.71,4.06-7.09.96-1.67,1.91-3.36,2.86-5.05.86-1.52,1.72-3.05,2.57-4.59.46-.81.92-1.62,1.36-2.43.46-.81.91-1.63,1.36-2.45.77-1.37,1.53-2.74,2.29-4.11v110.53c0,4.57-3.71,8.28-8.28,8.28h-9.41c-4.57,0-8.28-3.71-8.28-8.28V58.73c0-4.58,3.71-8.28,8.28-8.28h9.41c4.57,0,8.28,3.7,8.28,8.28Z"
        fill="currentColor"
      />
      <path
        d="M480.34,20.45v460H20.34V20.45h460M483.59.45H17.09C7.84.45.34,7.95.34,17.2v466.51c0,9.25,7.5,16.75,16.75,16.75h466.51c9.25,0,16.75-7.5,16.75-16.75V17.2c0-9.25-7.5-16.75-16.75-16.75h-.01Z"
        fill="currentColor"
      />
    </svg>
  );
}

/// Component ///
function App() {
  // get browser theme //
  const initialTheme = window.matchMedia("(prefers-color-scheme: light)")
    .matches
    ? "light"
    : "dark";

  // initialize states //
  const [avatarReady, setAvatarReady] = useState(false);
  const [laptopLoaded, setLaptopLoaded] = useState(false);
  const [mobileLoaded, setMobileLoaded] = useState(false);
  const [t, setT] = useState(initialTheme === "light" ? lightTheme : darkTheme);
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
    setT(theme === "light" ? lightTheme : darkTheme);
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

  // show loader //
  useEffect(() => {
    const loader = document.getElementById("loader");
    if (isDesktopOrLaptop && (!avatarReady || !laptopLoaded)) {
      loader.classList.replace("loader--hide", "loader--show");
    } else if (!isDesktopOrLaptop && !mobileLoaded) {
      loader.classList.replace("loader--hide", "loader--show");
    }
  }, [avatarReady, isDesktopOrLaptop, laptopLoaded, mobileLoaded]);
  // hide loader //
  useEffect(() => {
    const loader = document.getElementById("loader");
    if (
      (isDesktopOrLaptop && avatarReady && laptopLoaded) ||
      (!isDesktopOrLaptop && mobileLoaded)
    ) {
      loader.classList.replace("loader--show", "loader--hide");
    }
  }, [avatarReady, isDesktopOrLaptop, laptopLoaded, mobileLoaded]);
  useEffect(() => {
    function handlePageLoaded() {
      setLaptopLoaded(true);
    }

    if (document.readyState === "complete") {
      setLaptopLoaded(true);
      return undefined;
    }
    window.addEventListener("load", handlePageLoaded);
    return () => window.removeEventListener("load", handlePageLoaded);
  }, []);

  // render
  if (isDesktopOrLaptop) {
    return (
      <div className={s.app}>
        <div className={s.preloadFonts}>
          <span className={s.acuminExtralight} />
          <span className={s.acuminSemibold} />
          <span className={s.eavesXlModRegular} />
          <span className={s.eavesXlModUltra} />
          <span className={s.eavesXlSanHeavy} />
          <span className={s.monolisaBlack} />
          <span className={s.monolisaBold} />
          <span className={s.monolisaLight} />
          <span className={s.monolisaThin} />
        </div>
        <div className={s.background}>
          <div className={t.leftBackgroundColor} />
          <div className={t.rightBackgroundColor} />
        </div>
        <header className={s.header}>
          <div className={s.headerBackground}>
            <div className={t.leftBackgroundColor} />
            <div className={t.rightBackgroundColor} />
          </div>
          <div className={s.headerContent}>
            <NavLink
              aria-label="home"
              className={`${s.headerLogoLink} ${t.headerLogoLink}`}
              to="/"
            >
              <div className={s.headerLogo}>
                <Logo theme={theme} />
              </div>
              <span className={s.headerLogotype}>melody ho</span>
            </NavLink>
            <div className={s.headerRight}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${s.headerLink} ${t.headerLink} ${t.headerActiveLink} ${linkTransition.slideIn}`
                    : `${s.headerLink} ${t.headerLink}`
                }
                to="/showcase"
              >
                showcase
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${s.headerLink} ${t.headerLink} ${t.headerActiveLink} ${linkTransition.slideIn}`
                    : `${s.headerLink} ${t.headerLink}`
                }
                to="/me"
              >
                me
              </NavLink>
              <div className={s.headerThemeToggle}>
                <ThemeToggle setTheme={setTheme} theme={theme} />
              </div>
            </div>
          </div>
        </header>
        <main className={s.main}>
          <TransitionGroup>
            <CSSTransition
              classNames={{
                enter: pageTransition.enter,
                enterActive: pageTransition.enterActive,
                exit: pageTransition.exit,
                exitActive: pageTransition.exitActive,
              }}
              key={location.pathname}
              nodeRef={nodeRef}
              onEnter={() => {
                window.scrollTo(0, 0);
              }}
              timeout={PAGE_TRANSITION_DURATION}
            >
              <div className={`${s.page} ${pageTransition.page}`} ref={nodeRef}>
                <ThemeContext.Provider value={theme}>
                  {outlet}
                </ThemeContext.Provider>
              </div>
            </CSSTransition>
          </TransitionGroup>
          <div className={s.avatar}>
            <Avatar
              handleReady={() => {
                setAvatarReady(true);
              }}
            />
          </div>
        </main>
        <footer className={s.footer}>
          <div className={s.footerBackground}>
            <div className={t.leftBackgroundColor} />
            <div className={t.rightBackgroundColor} />
          </div>
          <div className={s.footerContent}>
            <div className={s.footerLeft}>
              <p>© 2024 Melody Ho. All rights reserved.</p>
              <a
                className={`${s.footerTextLink} ${t.footerTextLink}`}
                href="//github.com/melody-ho/portfolio-website"
              >
                See on GitHub
              </a>
            </div>
            <div className={s.footerRight}>
              <a
                aria-label="my GitHub profile"
                className={s.footerIconLink}
                href="//github.com/melody-ho"
              >
                <div
                  className={`${s.footerIconLinkIcon} ${t.footerIconLinkIcon}`}
                >
                  <GitHubIcon />
                </div>
              </a>
              <a
                aria-label="my LinkedIn profile"
                className={s.footerIconLink}
                href="//linkedin.com/in/melodyho-dev"
              >
                <div
                  className={`${s.footerIconLinkIcon} ${t.footerIconLinkIcon}`}
                >
                  <LinkedInIcon />
                </div>
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  return (
    <TabletOrMobile
      setTheme={setTheme}
      theme={theme}
      updateLoadState={setMobileLoaded}
    />
  );
}

export default App;
