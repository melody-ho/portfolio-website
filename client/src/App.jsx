/// Imports ///
// external
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
// components
import TabletOrMobile from "./components/TabletOrMobile";
// assets
import s from "./App.module.css";

/// Component ///
function App() {
  // hooks
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1000, minHeight: 600 });

  // markup
  if (isDesktopOrLaptop) {
    return (
      <div className={s.app}>
        <header className={s.header}>Header</header>
        <main className={s.main}>
          <Outlet />
        </main>
        <footer className={s.footer}>Footer</footer>
      </div>
    );
  }
  return <TabletOrMobile />;
}

export default App;
