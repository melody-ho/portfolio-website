/// Imports ///
// external
import { useEffect, useState } from "react";
// components
import ThemeToggle from "../../ThemeToggle";
// assets
import darkTheme from "./dark.module.css";
import lightTheme from "./light.module.css";

/// Component ///
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
      <ThemeToggle setTheme={setTheme} theme={theme} />
    </div>
  );
}

export default Landscape;
