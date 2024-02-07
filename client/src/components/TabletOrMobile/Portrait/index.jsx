/// Imports ///
// external
import { useEffect, useRef, useState } from "react";
// components
import Avatar from "../../Avatar";
import DeskIllustration from "../../DeskIllustration";
import ThemeToggle from "../../ThemeToggle";
import {
  DarkMobileBlinkingLogo,
  LightMobileBlinkingLogo,
} from "../../BlinkingLogo";
// variables
import {
  CERTIFICATES,
  HOBBIES,
  INFINITE,
  JOURN,
  TECHNICAL_SKILLS,
} from "../../../content";
// assets
import darkTheme from "./dark.module.css";
import lightTheme from "./light.module.css";

/// Constants ///
const INFINITE_CONTENT = {
  ...INFINITE,
  imgSrc: "/images/infinite-landscape.webp",
};

const JOURN_CONTENT_LIGHT = {
  ...JOURN,
  imgSrc: "/images/journ-landscape-light.webp",
};

const JOURN_CONTENT_DARK = {
  ...JOURN,
  imgSrc: "/images/journ-landscape-dark.webp",
};

/// Private Components ///
function Logo({ theme }) {
  if (window.matchMedia("(hover: hover)").matches) {
    return theme === "light" ? (
      <LightMobileBlinkingLogo />
    ) : (
      <DarkMobileBlinkingLogo />
    );
  }
  return <img alt="website logo" src={`/images/logo/${theme}-mobile.svg`} />;
}

function ShowcaseCard({ content, s }) {
  return (
    <li className={s.showcaseContainer}>
      <p className={s.showcaseLabel}>showcase</p>
      <h1 className={s.showcaseTitle}>{content.title}</h1>
      <img
        alt={content.imgAlt}
        className={s.showcaseImg}
        src={content.imgSrc}
      />
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
    </li>
  );
}

function TechSkillsBar({ level, s }) {
  return (
    <div
      aria-description={`skill level ${level} out of 3`}
      className={s.meTechSkillsBar}
    >
      <div className={s.meTechSkillsBarSolid} />
      <div className={level >= 2 ? s.meTechSkillsBarSolid : null} />
      <div className={level === 3 ? s.meTechSkillsBarSolid : null} />
    </div>
  );
}

/// Public Components ///
function Portrait({ fragmentId, setTheme, theme }) {
  // initialize states and refs //
  const [s, setS] = useState(theme === "light" ? lightTheme : darkTheme);
  const homeLink = useRef(null);
  const showcaseLink = useRef(null);
  const meLink = useRef(null);

  // change CSS module when theme is changed //
  useEffect(() => {
    setS(theme === "light" ? lightTheme : darkTheme);
  }, [theme]);

  // go to target indicated by fragment ID //
  useEffect(() => {
    // get existing hash
    const existingHash = window.location.hash.substring(1);
    if (existingHash === "") {
      // handle transition from laptop/desktop dimensions
      if (fragmentId === "") {
        homeLink.current.click();
      }
      if (fragmentId === "showcase") {
        showcaseLink.current.click();
      }
      if (fragmentId === "me") {
        meLink.current.click();
      }
    } else {
      // handle transition from landscape mobile/tablet dimensions
      if (existingHash === "home") {
        homeLink.current.click();
      }
      if (existingHash === "showcase") {
        showcaseLink.current.click();
      }
      if (existingHash === "me") {
        meLink.current.click();
      }
    }
  }, [fragmentId]);

  // render //
  return (
    <div className={s.body}>
      <header className={s.header}>
        <div className={s.headerLeft}>
          <a aria-label="return to top" href="/#home" ref={homeLink}>
            <Logo theme={theme} />
          </a>
        </div>
        <div className={s.headerRight}>
          <a className={s.link} href="/#showcase" ref={showcaseLink}>
            showcase
          </a>
          <a className={s.link} href="/#me" ref={meLink}>
            me
          </a>
          <div className={s.themeToggle}>
            <ThemeToggle setTheme={setTheme} theme={theme} />
          </div>
        </div>
      </header>
      <main>
        <section className={`${s.home} ${s.targetOffset}`} id="home">
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
        <section className={`${s.showcase} ${s.targetOffset}`} id="showcase">
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
        <section className={`${s.me} ${s.targetOffset}`} id="me">
          <header className={s.meHeader}>
            <img
              alt="Melody Ho"
              className={s.meProfilePhoto}
              src={`/images/profile-picture/${theme}-mobile.png`}
            />
            <h1 className={s.meHeading}>About Me</h1>
          </header>
          <section className={s.meTagline}>
            <p>
              Hello there! I&apos;m Melody Ho, a frontend-focused software
              engineer with a profound passion for creating seamless user
              experiences through the art of coding.
            </p>
          </section>
          <section className={s.meLinks}>
            <a className={s.meLink} href="//github.com/melody-ho">
              <img
                alt="GitHub"
                className={s.meLinkImg}
                src={`/images/github/${theme}-mobile.svg`}
              />
            </a>
            <a className={s.meLink} href="//linkedin.com/in/melodyho-dev">
              <img
                alt="LinkedIn"
                className={s.meLinkImg}
                src={`/images/linkedin/${theme}-mobile.svg`}
              />
            </a>
          </section>
          <section>
            <a className={s.meResumeBtn} href="/melody-ho.pdf">
              resume.pdf
            </a>
          </section>
          <hr className={s.meHorizontalRule} />
          <div className={s.meSubsections}>
            <section>
              <h2 className={s.meSubheading}>technical skills</h2>
              <ul className={s.meTechSkills}>
                {TECHNICAL_SKILLS.map((skill) => (
                  <li className={s.meTechSkill} key={skill.name}>
                    <p>{skill.name}</p>
                    <TechSkillsBar level={skill.level} s={s} />
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className={s.meSubheading}>certificates</h2>
              <ul className={s.meCertificates}>
                {CERTIFICATES.map((certificate) => (
                  <li className={s.meCertificate} key={certificate.title}>
                    <img
                      alt={certificate.title}
                      className={s.meCertificateImg}
                      src={certificate.img}
                    />
                    <div>
                      <p className={s.meCertificateTitle}>
                        {certificate.title}
                      </p>
                      <a
                        aria-label={`Open ${certificate.title} certificate`}
                        className={s.meCertificateLink}
                        href={certificate.url}
                      >
                        See Certificate
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className={s.meSubheading}>hobbies</h2>
              <ul className={s.meHobbies}>
                {HOBBIES.map((hobby) => (
                  <li className={s.meHobby} key={hobby.text}>
                    <img
                      alt={hobby.text}
                      className={s.meHobbyImg}
                      src={`/images/${hobby.img}/${theme}-mobile.svg`}
                    />
                    <p className={s.meHobbyText}>{hobby.text}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </main>
      <footer className={s.footer}>
        <p>© 2024 Melody Ho. All rights reserved.</p>
        <a
          className={s.footerLink}
          href="//github.com/melody-ho/portfolio-website"
        >
          See on GitHub
        </a>
      </footer>
    </div>
  );
}

export default Portrait;
