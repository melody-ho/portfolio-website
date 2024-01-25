/// Imports ///
// external
import { useContext, useEffect, useState } from "react";
// context
import ThemeContext from "../../ThemeContext";
// components
import DeskIllustration from "../DeskIllustration";
// assets
import darkTheme from "./dark.module.css";
import lightTheme from "./light.module.css";

/// Component ///
function Home() {
  // initialize theme //
  const theme = useContext(ThemeContext);

  // initialize CSS module //
  const [s, setS] = useState(theme === "light" ? lightTheme : darkTheme);

  // change CSS module when theme is changed //
  useEffect(() => {
    setS(theme === "light" ? lightTheme : darkTheme);
  }, [theme]);

  // render //
  return (
    <div className={s.component}>
      <div className={s.lowerLayer}>
        <div className={s.deskIllustration}>
          <DeskIllustration theme={theme} />
        </div>
      </div>
      <div className={s.topLayer}>
        <p className={s.tagline}>
          <span className={s.taglineTertiary}>Hello</span>
          , my name is
          <br />
          <span className={s.taglinePrimary}>Melody Ho</span>
          .<br />
          I&apos;m a{" "}
          <span className={s.taglineSecondary}>software engineer</span>.
        </p>
      </div>
    </div>
  );
}

export default Home;
