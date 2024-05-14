/// Imports ///
// external
import { Blurhash } from "react-blurhash";
import { useEffect, useRef, useState } from "react";
// components
import Avatar from "../../Avatar";
import {
  DarkMobileBlinkingLogo,
  LightMobileBlinkingLogo,
} from "../../BlinkingLogo";
import DeskIllustration from "../../DeskIllustration";
import ProfilePhoto from "../../ProfilePhoto";
import ThemeToggle from "../../ThemeToggle";
// variables
import {
  HOBBIES,
  INFINITE,
  JOURN,
  ME,
  TOOLBOX_SUBSECTIONS,
} from "../../../content";
// svgs
import GitHubIcon from "../../../svgs/GitHubIcon";
import LinkedInIcon from "../../../svgs/LinkedInIcon";
// assets
import darkTheme from "./dark.module.css";
import lightTheme from "./light.module.css";
import s from "./index.module.css";

/// Constants ///
const INFINITE_CONTENT = {
  ...INFINITE,
  blurHash: "L055ti.TD4WA8^s7a$%h00tR8wH;",
  imgSrc: "/images/infinite-square/",
};

const JOURN_CONTENT_LIGHT = {
  ...JOURN,
  blurHash: "LGRC-=-=xtS5_4-=M_IU.88_xutR",
  imgSrc: "/images/journ-square-light/",
};

const JOURN_CONTENT_DARK = {
  ...JOURN,
  blurHash: "L8Ci:YD*4m.9009G?at6EM~VNHIV",
  imgSrc: "/images/journ-square-dark/",
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
  return (
    <svg viewBox="0 0 500 500">
      <title>Website Logo</title>
      <path
        d="M290.85,340.8h.01s0,35.89,0,35.89c0,0,0,.01-.01.01-17.33,28.36-33.31,49.95-44.43,53.26-53.59,15.99-42.59-64.89-39.59-89.45s18.86-110.21,2.98-114.94c-10.48-3.12-37.98,8.38-45.6,164.64,0,0-33.23,23.64-40.31,2.19-7.07-21.45,33.41-170.45,15.17-182.45s-62.16,60.8-62.7,68.9c-.54,8.1,1.54,115.14,0,117.12-1.54,1.98-30.26,16.7-39.9,1.34-9.64-15.36-9.73-180.77,4.32-204.06h.01c4.55-7.55,35.04-4.3,38.04,2.7s-1.02,48.82-1.02,48.82c0,0,38.24-75.92,71.02-71.82,24,3,31.22,48.78,31.22,48.78,0,0,39.28-46.17,72.59-28.99,39.19,20.21-24.31,186.07,4.69,195.12,6.29,1.97,18.37-18.34,33.51-47.06Z"
        fill="currentColor"
      />
      <path
        d="M440.14,391.24c-30.31,20.71-70.49-6.69-48.31-121.29,6-31,4.87-58.24-3.29-56.95-10.13,1.6-40.38,61.92-71.71,118.61h0s0,.02-.01.02v-40.94s.01-.01.01-.01c27.74-53.07,59.58-108.95,84.99-113.59,50.02-9.14,33.15,72.65,31.08,92.25-2.06,19.61-10.18,96.32,7.07,89.55,27.86-10.94,31.51-70.32,44.4-75.72,12.46-5.22,10.39,70.74-44.23,108.07Z"
        fill="currentColor"
      />
      <path
        d="M316.82,58.73v231.97c-2.31,4.42-4.59,8.82-6.84,13.17-1.03,2-2.06,3.99-3.08,5.97-.4.78-.8,1.56-1.21,2.34-3.5,6.8-6.9,13.43-10.19,19.74-1.58,3.03-3.12,5.99-4.64,8.87v35.92c3.78-6.17,7.61-12.66,11.46-19.35,1.36-2.34,2.71-4.71,4.06-7.09.96-1.67,1.91-3.36,2.86-5.05.86-1.52,1.72-3.05,2.57-4.59.46-.81.92-1.62,1.36-2.43.46-.81.91-1.63,1.36-2.45.77-1.37,1.53-2.74,2.29-4.11v110.53c0,4.57-3.71,8.28-8.28,8.28h-9.41c-4.57,0-8.28-3.71-8.28-8.28V58.73c0-4.58,3.71-8.28,8.28-8.28h9.41c4.57,0,8.28,3.7,8.28,8.28Z"
        fill="currentColor"
      />
      <path
        d="M480.34,20.45v460H20.34V20.45h460M483.59.45H17.09C7.84.45.34,7.95.34,17.2v466.51c0,9.25,7.5,16.75,16.75,16.75h466.51c9.25,0,16.75-7.5,16.75-16.75V17.2c0-9.25-7.5-16.75-16.75-16.75h-.01Z"
        fill="currentColor"
      />
    </svg>
  );
}

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
    <li className={`${s.showcaseContainer} ${t.showcaseContainer}`}>
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

/// Public Components ///
function Landscape({ fragmentId, handleLoaded, setTheme, theme }) {
  // initialize states and refs //
  const [avatarReady, setAvatarReady] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [t, setT] = useState(theme === "light" ? lightTheme : darkTheme);
  const homeLink = useRef(null);
  const showcaseLink = useRef(null);
  const meLink = useRef(null);

  // change CSS module when theme is changed //
  useEffect(() => {
    setT(theme === "light" ? lightTheme : darkTheme);
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
      // handle transition from portrait mobile/tablet dimensions
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

  // hide loader //
  useEffect(() => {
    if (avatarReady && pageLoaded) {
      handleLoaded();
    }
  }, [avatarReady, handleLoaded, pageLoaded]);
  useEffect(() => {
    function handlePageLoaded() {
      setPageLoaded(true);
    }

    if (document.readyState === "complete") {
      setPageLoaded(true);
      return undefined;
    }
    window.addEventListener("load", handlePageLoaded);
    return () => window.removeEventListener("load", handlePageLoaded);
  }, []);

  // render //
  return (
    <div className={`${s.body} ${t.body}`}>
      <header className={`${s.header} ${t.header}`}>
        <div className={s.headerTop}>
          <a
            aria-label="return to top"
            className={`${s.logoLink} ${t.logoLink}`}
            href="/#home"
            ref={homeLink}
          >
            <Logo theme={theme} />
          </a>
          <a
            className={`${s.textLink} ${t.textLink}`}
            href="/#showcase"
            ref={showcaseLink}
          >
            showcase
          </a>
          <a className={`${s.textLink} ${t.textLink}`} href="/#me" ref={meLink}>
            me
          </a>
        </div>
        <div className={s.headerBottom}>
          <ThemeToggle setTheme={setTheme} theme={theme} />
        </div>
      </header>
      <div>
        <main>
          <section className={`${s.home} ${t.home}`} id="home">
            <div className={s.taglineWrapper}>
              <p className={`${s.taglineBase} ${t.taglineBase}`}>
                <span className={s.taglineTertiary}>Hello</span>
                , my name is
                <br />
                <span className={s.taglinePrimary}>Melody Ho</span>
                .<br />
                I&apos;m a{" "}
                <span className={`${s.taglineSecondary} ${t.taglineSecondary}`}>
                  software engineer
                </span>
                .
              </p>
            </div>
            <div className={s.deskIllustration}>
              <DeskIllustration theme={theme} />
            </div>
            <div className={s.avatar}>
              <Avatar
                handleReady={() => {
                  setAvatarReady(true);
                }}
              />
            </div>
          </section>
          <section className={`${s.showcase} ${t.showcase}`} id="showcase">
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
          <section className={`${s.me} ${t.me}`} id="me">
            <div className={s.meTopSections}>
              <header className={s.meHeader}>
                <div className={s.meProfilePhoto}>
                  <ProfilePhoto device="mobile" theme={theme} />
                </div>
                <h1 className={s.meHeading}>About Me</h1>
              </header>
              <section className={s.meResumeBtnContainer}>
                <a
                  className={`${s.meResumeBtn} ${t.meResumeBtn}`}
                  href="/MelodyHo_SoftwareEngineer.pdf"
                >
                  resume.pdf
                </a>
              </section>
            </div>
            <section className={s.meTagline}>
              <p>{ME}</p>
            </section>
            <section className={s.meLinks}>
              <a
                aria-label="my GitHub profile"
                className={`${s.meLink} ${t.meLink}`}
                href="//github.com/melody-ho"
              >
                <div className={s.meLinkIcon}>
                  <GitHubIcon />
                </div>
              </a>
              <a
                aria-label="my LinkedIn profile"
                className={`${s.meLink} ${t.meLink}`}
                href="//linkedin.com/in/melodyho-dev"
              >
                <div className={s.meLinkIcon}>
                  <LinkedInIcon />
                </div>
              </a>
            </section>
            <div className={s.meSubsections}>
              <section>
                <h2 className={`${s.meSubheading} ${t.meSubheading}`}>
                  toolbox
                </h2>
                <div
                  className={`${s.meSubheadingDecoration} ${t.meSubheadingDecoration}`}
                />
                <div className={s.meToolboxSubsections}>
                  {TOOLBOX_SUBSECTIONS.map((toolboxSubsection) => (
                    <section key={toolboxSubsection.title}>
                      <h3
                        className={`${s.meToolboxSubheading} ${t.meToolboxSubheading}`}
                      >
                        <span
                          className={`${s.meToolboxSubheadingContent} ${t.meToolboxSubheadingContent}`}
                        >
                          {toolboxSubsection.title}
                        </span>
                      </h3>
                      <ul className={s.meToolboxToolList}>
                        {toolboxSubsection.tools.map((tool) => (
                          <li className={s.meTool} key={tool.name}>
                            <div className={`${s.meToolIcon} ${t.meToolIcon}`}>
                              {tool.icon}
                            </div>
                            <p className={s.meToolText}>{tool.name}</p>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </section>
              <section>
                <h2 className={`${s.meSubheading} ${t.meSubheading}`}>
                  toy box
                </h2>
                <div
                  className={`${s.meSubheadingDecoration} ${t.meSubheadingDecoration}`}
                />
                <ul className={s.meHobbies}>
                  {HOBBIES.map((hobby) => (
                    <li className={s.meHobby} key={hobby.text}>
                      <div className={`${s.meHobbyIcon} ${t.meHobbyIcon}`}>
                        {hobby.icon}
                      </div>
                      <p className={s.meHobbyText}>{hobby.text}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </section>
        </main>
        <footer className={`${s.footer} ${t.footer}`}>
          <p>© 2024 Melody Ho. All rights reserved.</p>
          <a
            className={`${s.footerLink} ${t.footerLink}`}
            href="//github.com/melody-ho/portfolio-website"
          >
            See on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Landscape;
