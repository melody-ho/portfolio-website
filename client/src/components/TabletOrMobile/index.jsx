/// Imports ///
// external
import { useMediaQuery } from "react-responsive";
// components
import Landscape from "./Landscape";
import Portrait from "./Portrait";
// assets
import s from "./index.module.css";

/// Constants ///
const validSubpaths = ["", "showcase", "me"];

/// Component ///
function TabletOrMobile({ setTheme, theme }) {
  // initialize hook for responsive layout //
  const isLandscape = useMediaQuery({ minAspectRatio: "16/9" });

  // get subpath //
  const subpath = window.location.pathname.split("/")[1];

  // render - invalid paths //
  if (!validSubpaths.includes(subpath)) {
    return <div className={s.notFound}>Not Found</div>;
  }

  // render - main //
  if (isLandscape) {
    return <Landscape fragmentId={subpath} setTheme={setTheme} theme={theme} />;
  }
  return <Portrait fragmentId={subpath} setTheme={setTheme} theme={theme} />;
}

export default TabletOrMobile;
