/// Imports ///
// external
import { useContext, useEffect, useState } from "react";
// contexts
import ThemeContext from "../../ThemeContext";
// assets
import darkTheme from "./dark.module.css";
import lightTheme from "./light.module.css";
import s from "./index.module.css";

/// Component ///
function NotFound() {
  // initialize theme //
  const theme = useContext(ThemeContext);

  // initialize CSS module //
  const [t, setT] = useState(theme === "light" ? lightTheme : darkTheme);

  // change CSS module when theme is changed //
  useEffect(() => {
    setT(theme === "light" ? lightTheme : darkTheme);
  }, [theme]);

  // render //
  return (
    <p className={`${s.message} ${t.message}`}>
      <span className={s.messageLarge}>Oops!</span>
      <span className={`${s.messageSmall} ${t.messageSmall}`}>
        This page does not exist.
      </span>
    </p>
  );
}

export default NotFound;
