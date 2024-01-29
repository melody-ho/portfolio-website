/// Imports ///
// external
import { useContext, useEffect, useState } from "react";
// contexts
import ThemeContext from "../../ThemeContext";
// assets
import darkTheme from "./dark.module.css";
import lightTheme from "./light.module.css";

/// Component ///
function NotFound() {
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
    <p className={s.message}>
      <span className={s.messageLarge}>Oops!</span>
      <span className={s.messageSmall}>This page does not exist.</span>
    </p>
  );
}

export default NotFound;
