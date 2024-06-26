/// Imports ///
// external
import { create } from "@lottiefiles/lottie-interactivity";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { useEffect, useRef } from "react";
// assets
import s from "./index.module.css";

/// Constants ///
const ANIMATION_FRAMES = [36, 106];
const STOP_FRAME = [0];

/// Private Components ///
function BlinkingLogo({ device, theme }) {
  // initialize refs //
  const blinkingLogoInteraction = useRef(false);
  const blinkingLogoRef = useRef(null);
  const staticLogoRef = useRef(null);

  // hide static placeholder when animation is ready
  useEffect(() => {
    blinkingLogoRef.current.addEventListener("ready", () => {
      staticLogoRef.current.classList.replace(
        s.staticLogoShow,
        s.staticLogoHide,
      );
    });
  });

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
  }, [theme]);

  // render //
  return (
    <div className={s.component}>
      <lottie-player
        id={`${theme}BlinkingLogo`}
        ref={blinkingLogoRef}
        src={`/animations/logo/${theme}-${device}.json`}
      />
      <svg
        className={s.staticLogoShow}
        ref={staticLogoRef}
        viewBox="0 0 500 500"
      >
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
    </div>
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
