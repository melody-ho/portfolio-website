/// Imports ///
// external
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
// components
import Landscape from "./Landscape";
import Portrait from "./Portrait";
// assets
import darkTheme from "./dark.module.css";
import lightTheme from "./light.module.css";
import s from "./index.module.css";

/// Constants ///
const validSubpaths = ["", "showcase", "me"];

/// Component ///
function TabletOrMobile({ setTheme, theme }) {
  // initialize hook for responsive layout //
  const isLandscape = useMediaQuery({ minAspectRatio: "16/9" });

  // initialize CSS module //
  const [t, setT] = useState(theme === "light" ? lightTheme : darkTheme);

  // change CSS module when theme is changed //
  useEffect(() => {
    setT(theme === "light" ? lightTheme : darkTheme);
  }, [theme]);

  // get subpath //
  const subpath = window.location.pathname.split("/")[1];

  // render - invalid paths //
  if (!validSubpaths.includes(subpath)) {
    return (
      <main
        className={`${s.notFound} ${t.notFound} ${
          isLandscape ? s.landscape : s.portrait
        }`}
      >
        <p className={`${s.notFoundMessage} ${t.notFoundMessage}`}>
          <span
            className={`${s.notFoundMessageLarge} ${t.notFoundMessageLarge}`}
          >
            Oops!
          </span>
          <span className={s.notFoundMessageSmall}>
            This page does not exist.
          </span>
        </p>
        <a className={`${s.notFoundLink} ${t.notFoundLink}`} href="/">
          Back to home
        </a>
      </main>
    );
  }

  // render - main //
  if (isLandscape) {
    return <Landscape fragmentId={subpath} setTheme={setTheme} theme={theme} />;
  }
  return <Portrait fragmentId={subpath} setTheme={setTheme} theme={theme} />;
}

export default TabletOrMobile;
