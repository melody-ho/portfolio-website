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
function Landscape({ setTheme, theme }) {
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
        <div className={s.headerTop}>
          <a aria-label="return to top" className={s.logoLink} href="/#home">
            <Logo theme={theme} />
          </a>
          <a className={s.textLink} href="/#showcase">
            showcase
          </a>
          <a className={s.textLink} href="/#me">
            me
          </a>
        </div>
        <div className={s.headerBottom}>
          <ThemeToggle setTheme={setTheme} theme={theme} />
        </div>
      </header>
      <div>
        <main>
          <section className={s.home} id="home">
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
          <section className={s.showcase} id="showcase"></section>
          <section className={s.me} id="me"></section>
        </main>
        <footer className={s.footer}></footer>
      </div>
    </div>
  );
}

export default Landscape;
