/// Imports ///
// external
import { Blurhash } from "react-blurhash";
import { useContext, useEffect, useRef, useState } from "react";
// contexts
import ThemeContext from "../../ThemeContext";
// variables
import { INFINITE, JOURN } from "../../content";
// assets
import darkTheme from "./dark.module.css";
import lightTheme from "./light.module.css";
import s from "./index.module.css";

/// Constants ///
const INFINITE_CONTENT = {
  ...INFINITE,
  blurHash: "L055ti.TD4WA8^s7a$%h00tR8wH;",
  id: "infinite",
  imgSrc: "/images/infinite-square/",
};

const JOURN_CONTENT_LIGHT = {
  ...JOURN,
  blurHash: "LGRC-=-=xtS5_4-=M_IU.88_xutR",
  id: "journ",
  imgSrc: "/images/journ-square-light/",
};

const JOURN_CONTENT_DARK = {
  ...JOURN,
  blurHash: "L8Ci:YD*4m.9009G?at6EM~VNHIV",
  id: "journ",
  imgSrc: "/images/journ-square-dark/",
};

/// Private Components ///
function ShowcaseCard({ content, t }) {
  // initialize states and refs //
  const [imgLoading, setImgLoading] = useState(true);
  const imgRef = useRef(null);

  // reset image loading state when content changes //
  useEffect(() => {
    setImgLoading(!imgRef.current?.complete);
  }, [content]);

  // render //
  return (
    <li
      className={`${s.showcaseContainer} ${t.showcaseContainer}`}
      id={content.id}
    >
      <div className={s.showcaseImgWrapper}>
        {imgLoading ? (
          <div className={s.showcaseImgPlaceholder}>
            <Blurhash hash={content.blurHash} height="100%" width="100%" />
          </div>
        ) : null}
        <img
          alt={content.imgAlt}
          className={s.showcaseImg}
          onLoad={() => {
            setImgLoading(false);
          }}
          ref={imgRef}
          sizes="35vw"
          srcSet={`${content.imgSrc}500.webp 500w, ${content.imgSrc}1000.webp 1000w, ${content.imgSrc}1500.webp 1500w, ${content.imgSrc}2000.webp 2000w`}
        />
      </div>
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
  const [t, setT] = useState(theme === "light" ? lightTheme : darkTheme);

  // change CSS module when theme is changed //
  useEffect(() => {
    setT(theme === "light" ? lightTheme : darkTheme);
  }, [theme]);

  // render //
  return (
    <div className={s.component}>
      <section>
        <ul className={s.showcaseCards}>
          <ShowcaseCard content={INFINITE_CONTENT} t={t} />
          <ShowcaseCard
            content={
              theme === "light" ? JOURN_CONTENT_LIGHT : JOURN_CONTENT_DARK
            }
            t={t}
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
