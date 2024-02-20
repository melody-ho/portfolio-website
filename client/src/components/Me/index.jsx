/// Imports ///
// external
import { useContext, useEffect, useState } from "react";
// contexts
import ThemeContext from "../../ThemeContext";
// variables
import { HOBBIES, ME, TOOLBOX_SUBSECTIONS } from "../../content";
// assets
import darkTheme from "./dark.module.css";
import lightTheme from "./light.module.css";
import pageTransition from "../../pageTransition.module.css";

/// Component ///
function Me() {
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
      <section className={s.leftSection}>
        <div
          className={`${s.headerBackground} ${pageTransition.meHeaderBackground}`}
        />
        <header className={s.header}>
          <img
            alt="Melody Ho"
            className={s.profilePhoto}
            src={`/images/profile-picture/${theme}-laptop.png`}
          />
          <h1 className={s.mainHeading}>About Me</h1>
        </header>
        <div
          className={`${s.contentBackground} ${pageTransition.meContentBackground}`}
        />
        <div className={s.content}>
          <p className={s.tagline}>{ME}</p>
          <div className={s.subsections}>
            <section>
              <h2 className={s.subheading}>toolbox</h2>
              <div className={s.subheadingDecoration} />
              <div className={s.toolboxSubsections}>
                {TOOLBOX_SUBSECTIONS.map((toolboxSubsection) => (
                  <section key={toolboxSubsection.title}>
                    <h3 className={s.toolboxSubheading}>
                      <span className={s.toolboxSubheadingContent}>
                        {toolboxSubsection.title}
                      </span>
                    </h3>
                    <ul className={s.toolboxToolList}>
                      {toolboxSubsection.tools.map((tool) => (
                        <li className={s.tool} key={tool.name}>
                          <img
                            alt={tool.name}
                            className={s.toolImg}
                            src={`/images/${tool.img}/${theme}-laptop.svg`}
                          />
                          <p className={s.toolText}>{tool.name}</p>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </section>
            <section>
              <h2 className={s.subheading}>toy box</h2>
              <div className={s.subheadingDecoration} />
              <ul className={s.hobbies}>
                {HOBBIES.map((hobby) => (
                  <li className={s.hobby} key={hobby.text}>
                    <img
                      alt={hobby.text}
                      className={s.hobbyImg}
                      src={`/images/${hobby.img}/${theme}-laptop.svg`}
                    />
                    <p className={s.hobbyText}>{hobby.text}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>
      <section>
        <a className={s.resumeBtn} href="/melody-ho.pdf">
          download
          <br />
          resume
        </a>
      </section>
    </div>
  );
}

export default Me;
