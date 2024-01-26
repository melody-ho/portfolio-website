/// Imports ///
// external
import { useContext, useEffect, useState } from "react";
// contexts
import ThemeContext from "../../ThemeContext";
// variables
import { CERTIFICATES, HOBBIES, TECHNICAL_SKILLS } from "../../content";
// assets
import darkTheme from "./dark.module.css";
import lightTheme from "./light.module.css";
import pageTransition from "../../pageTransition.module.css";

/// Private Components ///
function TechSkillsBar({ level, s }) {
  return (
    <div className={s.techSkillsBar}>
      <div className={s.techSkillsBarSolid} />
      <div className={level >= 2 ? s.techSkillsBarSolid : null} />
      <div className={level === 3 ? s.techSkillsBarSolid : null} />
      <div />
    </div>
  );
}

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
            src={`/profile-picture/laptop-${theme}.png`}
          />
          <h1 className={s.mainHeading}>About Me</h1>
        </header>
        <div
          className={`${s.contentBackground} ${pageTransition.meContentBackground}`}
        />
        <div className={s.content}>
          <p className={s.tagline}>
            Hi! I&apos;m Melody Ho, a frontend-focused software engineer based
            in the US.
          </p>
          <hr className={s.horizontalRule} />
          <div className={s.subsections}>
            <section>
              <h2 className={s.subheading}>technical skills</h2>
              <ul className={s.techSkills}>
                {TECHNICAL_SKILLS.map((skill) => (
                  <li className={s.techSkill} key={skill.name}>
                    <p>{skill.name}</p>
                    <TechSkillsBar level={skill.level} s={s} />
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className={s.subheading}>certificates</h2>
              <ul className={s.certificates}>
                {CERTIFICATES.map((certificate) => (
                  <li className={s.certificate} key={certificate.title}>
                    <img
                      alt={certificate.title}
                      className={s.certificateImg}
                      src={certificate.img}
                    />
                    <div>
                      <p className={s.certificateTitle}>{certificate.title}</p>
                      <a
                        aria-label={`Open ${certificate.title} certificate`}
                        className={s.certificateLink}
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
              <h2 className={s.subheading}>hobbies</h2>
              <ul className={s.hobbies}>
                {HOBBIES.map((hobby) => (
                  <li className={s.hobby} key={hobby.text}>
                    <img
                      alt={hobby.text}
                      className={s.hobbyImg}
                      src={`/${hobby.img}/${theme}-laptop.svg`}
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
