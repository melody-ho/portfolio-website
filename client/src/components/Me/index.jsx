/// Imports ///
// external
import { useContext, useEffect, useState } from "react";
// contexts
import ThemeContext from "../../ThemeContext";
// components
import ProfilePhoto from "../ProfilePhoto";
// variables
import { HOBBIES, ME, TOOLBOX_SUBSECTIONS } from "../../content";
// assets
import darkTheme from "./dark.module.css";
import lightTheme from "./light.module.css";
import pageTransition from "../../pageTransition.module.css";
import s from "./index.module.css";

/// Component ///
function Me() {
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
    <div className={s.component}>
      <section className={s.leftSection}>
        <div
          className={`${s.headerBackground} ${t.headerBackground} ${pageTransition.meHeaderBackground}`}
        />
        <header className={s.header}>
          <div className={s.profilePhoto}>
            <ProfilePhoto device="laptop" theme={theme} />
          </div>
          <h1 className={s.mainHeading}>About Me</h1>
        </header>
        <div
          className={`${s.contentBackground} ${t.contentBackground} ${pageTransition.meContentBackground}`}
        />
        <div className={s.content}>
          <p className={s.tagline}>{ME}</p>
          <div className={s.subsections}>
            <section>
              <h2 className={`${s.subheading} ${t.subheading}`}>toolbox</h2>
              <div className={s.subheadingDecoration} />
              <div className={s.toolboxSubsections}>
                {TOOLBOX_SUBSECTIONS.map((toolboxSubsection) => (
                  <section key={toolboxSubsection.title}>
                    <h3 className={s.toolboxSubheading}>
                      <span
                        className={`${s.toolboxSubheadingContent} ${t.toolboxSubheadingContent}`}
                      >
                        {toolboxSubsection.title}
                      </span>
                    </h3>
                    <ul className={s.toolboxToolList}>
                      {toolboxSubsection.tools.map((tool) => (
                        <li className={s.tool} key={tool.name}>
                          <div className={s.toolIcon}>{tool.icon}</div>
                          <p className={s.toolText}>{tool.name}</p>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </section>
            <section>
              <h2 className={`${s.subheading} ${t.subheading}`}>toy box</h2>
              <div className={s.subheadingDecoration} />
              <ul className={s.hobbies}>
                {HOBBIES.map((hobby) => (
                  <li className={s.hobby} key={hobby.text}>
                    <div className={s.hobbyIcon}>{hobby.icon}</div>
                    <p className={s.hobbyText}>{hobby.text}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>
      <section>
        <a className={s.resumeBtn} href="/MelodyHo_SoftwareEngineer.pdf">
          download
          <br />
          resume
        </a>
      </section>
    </div>
  );
}

export default Me;
