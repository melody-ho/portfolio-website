/// Imports ///
// external
import { useContext, useEffect, useState } from "react";
// contexts
import ThemeContext from "../../ThemeContext";
// variables
import { INFINITE, JOURN } from "../../content";
// assets
import darkTheme from "./dark.module.css";
import lightTheme from "./light.module.css";

/// Constants ///
const INFINITE_CONTENT = {
  ...INFINITE,
  id: "infinite",
  imgSrc: "/images/infinite-square.webp",
};

const JOURN_CONTENT_LIGHT = {
  ...JOURN,
  id: "journ",
  imgSrc: "/images/journ-square-light.webp",
};

const JOURN_CONTENT_DARK = {
  ...JOURN,
  id: "journ",
  imgSrc: "/images/journ-square-dark.webp",
};

/// Private Components ///
function ShowcaseCard({ content, s }) {
  return (
    <li className={s.showcaseContainer} id={content.id}>
      <img
        alt={content.imgAlt}
        className={s.showcaseImg}
        src={content.imgSrc}
      />
      <div className={s.showcaseRightSection}>
        <p className={s.showcaseLabel}>showcase</p>
        <h1 className={s.showcaseTitle}>{content.title}</h1>
        <p className={s.showcaseDescription}>{content.description}</p>
        <div className={s.showcaseSkills}>
          {content.skills.map((skill) => (
            <div className={s.showcaseSkillContainer} key={skill}>
              <p>{skill}</p>
            </div>
          ))}
        </div>
        <div className={s.showcaseLinks}>
          <a className={s.showcaseLink} href={content.githubUrl}>
            See on GitHub
          </a>
          <a className={s.showcaseLink} href={content.demoUrl}>
            See Live
          </a>
        </div>
      </div>
    </li>
  );
}

/// Component ///
function Showcase() {
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
      <section>
        <ul className={s.showcaseCards}>
          <ShowcaseCard content={INFINITE_CONTENT} s={s} />
          <ShowcaseCard
            content={
              theme === "light" ? JOURN_CONTENT_LIGHT : JOURN_CONTENT_DARK
            }
            s={s}
          />
        </ul>
      </section>
      <div className={s.sideBar}>
        <button
          className={s.sideBarBtn}
          onClick={() => {
            document.querySelector("#infinite").scrollIntoView(true);
          }}
          type="button"
        >
          Infinite: A Game
        </button>
        <button
          className={s.sideBarBtn}
          onClick={() => {
            document.querySelector("#journ").scrollIntoView(true);
          }}
          type="button"
        >
          Journ: Digital Scrapbook
        </button>
      </div>
    </div>
  );
}

export default Showcase;
