/// Imports ///
import { create } from "@lottiefiles/lottie-interactivity";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { useEffect, useRef } from "react";

/// Constants ///
const BLINKING_LOOP_FRAMES = [46, 208];
const INITIAL_INTERACTION_DELAY = 1500;
const WAVE_FRAMES = [0, 48];
const WAVE_LOOP_FRAMES = [0, 96];

/// Component ///
function Avatar() {
  // initialize refs //
  const avatarInteraction = useRef(false);
  const avatarRef = useRef(null);

  // configure animation interactivity after first wave has played //
  useEffect(() => {
    if (avatarRef.current) {
      avatarRef.current.addEventListener("play", () => {
        if (!avatarInteraction.current) {
          setTimeout(() => {
            if (avatarRef.current) {
              if (window.matchMedia("(hover: hover)").matches) {
                create({
                  player: "#avatar",
                  mode: "cursor",
                  actions: [
                    {
                      position: { x: [0, 1], y: [0, 1] },
                      type: "loop",
                      frames: WAVE_LOOP_FRAMES,
                    },
                    {
                      position: { x: -1, y: -1 },
                      type: "loop",
                      frames: BLINKING_LOOP_FRAMES,
                    },
                  ],
                });
              } else {
                create({
                  player: "#avatar",
                  mode: "chain",
                  actions: [
                    {
                      state: "loop",
                      frames: BLINKING_LOOP_FRAMES,
                      transition: "click",
                    },
                    {
                      state: "autoplay",
                      frames: WAVE_FRAMES,
                      transition: "onComplete",
                      reset: true,
                    },
                  ],
                });
              }
            }
          }, INITIAL_INTERACTION_DELAY);
          avatarInteraction.current = true;
        }
      });
    }
  }, [avatarRef]);

  // render //
  return (
    <lottie-player
      autoplay
      id="avatar"
      ref={avatarRef}
      src="/animations/avatar.json"
    />
  );
}

export default Avatar;
