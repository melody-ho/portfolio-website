/// Imports ///
// external
import { create } from "@lottiefiles/lottie-interactivity";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { useEffect, useRef } from "react";
// assets
import s from "./index.module.css";

/// Constants ///
const DARK_LOOP_FRAMES = [49, 50];
const LIGHT_LOOP_FRAMES = [0, 1];
const TURN_ON_FRAMES = [0, 50];

/// Component ///
function DeskIllustration({ theme }) {
  // initialize refs //
  const animatedLightInteraction = useRef(null);
  const animatedLightRef = useRef(null);

  // configure animation chain //
  useEffect(() => {
    animatedLightRef.current.addEventListener("load", () => {
      if (animatedLightInteraction.current === null) {
        animatedLightInteraction.current = create({
          player: "#light",
          mode: "chain",
          actions: [
            { state: "loop", frames: LIGHT_LOOP_FRAMES },
            {
              state: "autoplay",
              frames: TURN_ON_FRAMES,
              transition: "onComplete",
            },
            { state: "loop", frames: DARK_LOOP_FRAMES },
          ],
        });
        if (theme === "dark") {
          animatedLightInteraction.current.jumpToInteraction(1);
        }
      }
    });
  }, [theme]);

  // toggle animation frames when theme is changed //
  useEffect(() => {
    if (animatedLightInteraction.current !== null) {
      if (theme === "light") {
        animatedLightInteraction.current.jumpToInteraction(0);
      } else {
        animatedLightInteraction.current.jumpToInteraction(1);
      }
    }
  }, [theme]);

  // render //
  return (
    <>
      <lottie-player
        id="light"
        ref={animatedLightRef}
        src="/animations/ceiling-light.json"
      />
      <img
        alt="illustration of desk with computer"
        className={s.lowerLayer}
        src="/images/desk.svg"
      />
    </>
  );
}

export default DeskIllustration;
