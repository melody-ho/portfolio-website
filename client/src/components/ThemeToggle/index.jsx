/// Imports ///
// external
import { create } from "@lottiefiles/lottie-interactivity";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { useEffect, useRef } from "react";
// assets
import s from "./index.module.css";

/// Constants ///
const DARK_LOOP_FRAMES = [60, 96];
const DARK_TO_LIGHT_FRAMES = [97, 120];
const LIGHT_LOOP_FRAMES = [0, 36];
const LIGHT_TO_DARK_FRAMES = [37, 60];

/// Component ///
function ThemeToggle({ setTheme, theme }) {
  // initialize refs //
  const themeToggleInteraction = useRef(false);
  const themeToggleRef = useRef(null);

  // configure animation chain //
  useEffect(() => {
    themeToggleRef.current.addEventListener("load", () => {
      // create animation chain if none configured yet
      if (!themeToggleInteraction.current) {
        const interaction = create({
          player: "#themeToggle",
          mode: "chain",
          actions: [
            {
              state: "loop",
              frames: LIGHT_LOOP_FRAMES,
              transition: "click",
            },
            {
              state: "autoplay",
              frames: LIGHT_TO_DARK_FRAMES,
              transition: "onComplete",
            },
            {
              state: "loop",
              frames: DARK_LOOP_FRAMES,
              transition: "click",
            },
            {
              state: "autoplay",
              frames: DARK_TO_LIGHT_FRAMES,
              transition: "onComplete",
              reset: true,
            },
          ],
        });
        // set animation to match current theme
        if (theme === "dark") {
          interaction.jumpToInteraction(2);
        }
        // mark animation chain as configured
        themeToggleInteraction.current = true;
      }
    });
  }, [theme, themeToggleInteraction]);

  // configure theme toggling //
  useEffect(() => {
    if (themeToggleRef.current) {
      themeToggleRef.current.addEventListener("transition", (e) => {
        if (e.detail.newIndex === 0) {
          setTheme("light");
        } else if (e.detail.newIndex === 2) {
          setTheme("dark");
        }
      });
    }
  });

  // render //
  return (
    <button
      aria-label={`switch to ${theme === "light" ? "dark" : "light"} mode`}
      className={s.themeToggle}
      type="button"
    >
      <lottie-player
        id="themeToggle"
        ref={themeToggleRef}
        src="/animations/theme-toggle.json"
      />
    </button>
  );
}

export default ThemeToggle;
