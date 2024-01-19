/// Imports ///
// external
import { useEffect, useState } from "react";
// components
import Avatar from "../../Avatar";
import DeskIllustration from "../../DeskIllustration";
import ThemeToggle from "../../ThemeToggle";
import { DarkBlinkingLogo, LightBlinkingLogo } from "../../BlinkingLogo";
// assets
import darkTheme from "./dark.module.css";
import lightTheme from "./light.module.css";

/// Constants ///
const INFINITE_CONTENT = {
  title: "Infinite: A Game",
  imgAlt: "screenshot of Infinite",
  imgSrc: "/infinite-square-screenshot.webp",
  description:
    "Infinite is a game where you can endlessly expand the galaxy by matching edges of hexagonal tiles.",
  skills: ["JavaScript", "HTML", "CSS", "Express"],
  githubUrl: "//github.com/melody-ho/infinite",
  demoUrl: "//infinite.melodyho.dev",
};

const JOURN_CONTENT = {
  title: "Journ: A Scrapbook",
  imgAlt: "screenshot of Journ",
  description:
    "Journ is a digital scrapbook where you can document moments using images, videos, and text.",
  skills: ["React", "Next.js", "Sequelize", "SQL", "AWS S3"],
  githubUrl: "//github.com/melody-ho/journ",
  demoUrl: "//journ.melodyho.dev",
};

const JOURN_CONTENT_LIGHT = {
  ...JOURN_CONTENT,
  imgSrc: "/journ-square-light-screenshot.webp",
};

const JOURN_CONTENT_DARK = {
  ...JOURN_CONTENT,
  imgSrc: "/journ-square-dark-screenshot.webp",
};

/// Private Components ///
function Logo({ theme }) {
  if (window.matchMedia("(hover: hover)").matches) {
    return theme === "light" ? <LightBlinkingLogo /> : <DarkBlinkingLogo />;
  }
  return <img alt="website logo" src={`/static-logo/${theme}.svg`} />;
}

function ShowcaseCard({ content, s }) {
  return (
    <div className={s.showcaseContainer}>
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
    </div>
  );
}

/// Public Components ///
function Landscape({ setTheme, theme }) {
  // initialize states //
  const [s, setS] = useState(theme === "light" ? lightTheme : darkTheme);

  // change CSS module when theme is changed //
  useEffect(() => {
    setS(theme === "light" ? lightTheme : darkTheme);
  }, [theme]);

  // render //
  return (
    <div className={s.body}>
      <header className={s.header}>
        <div className={s.headerTop}>
          <a aria-label="return to top" className={s.logoLink} href="/#home">
            <Logo theme={theme} />
          </a>
          <a className={s.textLink} href="/#showcase">
            showcase
          </a>
          <a className={s.textLink} href="/#me">
            me
          </a>
        </div>
        <div className={s.headerBottom}>
          <ThemeToggle setTheme={setTheme} theme={theme} />
        </div>
      </header>
      <div>
        <main>
          <section className={s.home} id="home">
            <div className={s.taglineWrapper}>
              <p className={s.taglineBase}>
                <span className={s.taglineTertiary}>Hello</span>
                , my name is
                <br />
                <span className={s.taglinePrimary}>Melody Ho</span>
                .<br />
                I&apos;m a{" "}
                <span className={s.taglineSecondary}>software engineer</span>.
              </p>
            </div>
            <div className={s.deskIllustration}>
              <DeskIllustration theme={theme} />
            </div>
            <div className={s.avatar}>
              <Avatar />
            </div>
          </section>
          <section className={s.showcase} id="showcase">
            <ShowcaseCard content={INFINITE_CONTENT} s={s} />
            <ShowcaseCard
              content={
                theme === "light" ? JOURN_CONTENT_LIGHT : JOURN_CONTENT_DARK
              }
              s={s}
            />
          </section>
          <section className={s.me} id="me"></section>
        </main>
        <footer className={s.footer}></footer>
      </div>
    </div>
  );
}

export default Landscape;
