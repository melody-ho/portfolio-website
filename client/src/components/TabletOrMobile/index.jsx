/// Imports ///
// external
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
// assets
import s from "./index.module.css";

/// Component ///
function TabletOrMobile() {
  // hooks
  const location = useLocation();
  const isLandscape = useMediaQuery({ minAspectRatio: "16/9" });

  // markup - invalid paths
  if (location.pathname !== "/") {
    return <div className={s.notFound}>Not Found</div>;
  }

  // markup - main
  if (isLandscape) {
    return <div className={s.landscape}>Landscape Tablet Or Mobile</div>;
  }
  return <div className={s.portrait}>Portrait Tablet or Mobile</div>;
}

export default TabletOrMobile;
