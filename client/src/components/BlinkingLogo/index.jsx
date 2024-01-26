/// Imports ///
import { create } from "@lottiefiles/lottie-interactivity";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { useEffect, useRef } from "react";

/// Constants ///
const ANIMATION_FRAMES = [12, 210];
const STOP_FRAME = [0];

/// Private Components ///
function BlinkingLogo({ device, theme }) {
  // initialize refs //
  const blinkingLogoInteraction = useRef(false);
  const blinkingLogoRef = useRef(null);

  // configure animation interactivity //
  useEffect(() => {
    blinkingLogoRef.current.addEventListener("load", () => {
      // create animation interactivity if none configured yet
      if (!blinkingLogoInteraction.current) {
        create({
          player: `#${theme}BlinkingLogo`,
          mode: "cursor",
          actions: [
            {
              position: { x: [0, 1], y: [0, 1] },
              type: "loop",
              frames: ANIMATION_FRAMES,
            },
            {
              position: { x: -1, y: -1 },
              type: "stop",
              frames: STOP_FRAME,
            },
          ],
        });
        // mark animation interactivity as configured
        blinkingLogoInteraction.current = true;
      }
    });
  }, [blinkingLogoInteraction, theme]);

  // render //
  return (
    <lottie-player
      id={`${theme}BlinkingLogo`}
      ref={blinkingLogoRef}
      src={`/animations/logo/${theme}-${device}.json`}
    />
  );
}

/// Public Components ///
function DarkBlinkingLogo() {
  return <BlinkingLogo device="laptop" theme="dark" />;
}

function DarkMobileBlinkingLogo() {
  return <BlinkingLogo device="mobile" theme="dark" />;
}

function LightBlinkingLogo() {
  return <BlinkingLogo device="laptop" theme="light" />;
}

function LightMobileBlinkingLogo() {
  return <BlinkingLogo device="mobile" theme="light" />;
}

export {
  DarkBlinkingLogo,
  DarkMobileBlinkingLogo,
  LightBlinkingLogo,
  LightMobileBlinkingLogo,
};
