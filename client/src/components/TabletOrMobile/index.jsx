/// Imports ///
// external
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
// components
import Landscape from "./Landscape";
import Portrait from "./Portrait";
// assets
import s from "./index.module.css";

/// Component ///
function TabletOrMobile({ setTheme, theme }) {
  // initialize hooks //
  const location = useLocation();
  const isLandscape = useMediaQuery({ minAspectRatio: "16/9" });

  // render - invalid paths //
  if (location.pathname !== "/") {
    return <div className={s.notFound}>Not Found</div>;
  }

  // render - main //
  if (isLandscape) {
    return <Landscape setTheme={setTheme} theme={theme} />;
  }
  return <Portrait setTheme={setTheme} theme={theme} />;
}

export default TabletOrMobile;
