/// Imports ///
// external
import { useEffect, useState } from "react";
// components
import Avatar from "../../Avatar";
import DeskIllustration from "../../DeskIllustration";
import ThemeToggle from "../../ThemeToggle";
import { DarkBlinkingLogo, LightBlinkingLogo } from "../../BlinkingLogo";
// assets
import darkTheme from "./dark.module.css";
import lightTheme from "./light.module.css";

/// Private Components ///
function Logo({ theme }) {
  if (window.matchMedia("(hover: hover)").matches) {
    return theme === "light" ? <LightBlinkingLogo /> : <DarkBlinkingLogo />;
  }
  return <img alt="website logo" src={`/static-logo/${theme}.svg`} />;
}

/// Public Components ///
function Portrait({ setTheme, theme }) {
  // initialize states //
  const [s, setS] = useState(theme === "light" ? lightTheme : darkTheme);

  // change CSS module when theme is changed //
  useEffect(() => {
    setS(theme === "light" ? lightTheme : darkTheme);
  }, [theme]);

  // render //
  return (
    <div className={s.body}>
      <header className={s.header}>
        <div className={s.headerLeft}>
          <a aria-label="return to top" href="/#home">
            <Logo theme={theme} />
          </a>
        </div>
        <div className={s.headerRight}>
          <a className={s.link} href="/#showcase">
            showcase
          </a>
          <a className={s.link} href="/#me">
            me
          </a>
          <div className={s.themeToggle}>
            <ThemeToggle setTheme={setTheme} theme={theme} />
          </div>
        </div>
      </header>
      <main>
        <section className={`${s.home} ${s.targetOffset}`} id="home">
          <div className={s.taglineWrapper}>
            <p className={s.taglineBase}>
              <span className={s.taglineTertiary}>Hello</span>
              , my name is
              <br />
              <span className={s.taglinePrimary}>Melody Ho</span>
              .<br />
              I&apos;m a{" "}
              <span className={s.taglineSecondary}>software engineer</span>.
            </p>
          </div>
          <div className={s.deskIllustration}>
            <DeskIllustration theme={theme} />
          </div>
          <div className={s.avatar}>
            <Avatar />
          </div>
        </section>
        <section
          className={`${s.showcase} ${s.targetOffset}`}
          id="showcase"
        ></section>
        <section className={`${s.me} ${s.targetOffset}`} id="me"></section>
      </main>
      <footer className={s.footer}></footer>
    </div>
  );
}

export default Portrait;
