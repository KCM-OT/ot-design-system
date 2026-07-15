import symbol from "./onetrust-symbol.svg?url";
import lockupHorizontal from "./onetrust-lockup-horizontal.svg?url";
import lockupVertical from "./onetrust-lockup-vertical.svg?url";
import subbrandLockupHorizontal from "./onetrust-subbrand-lockup-horizontal.svg?url";
import subbrandLockupVertical from "./onetrust-subbrand-lockup-vertical.svg?url";
import byotLockupHorizontal from "./onetrust-byot-lockup-horizontal.svg?url";
import byotLockupVertical from "./onetrust-byot-lockup-vertical.svg?url";

/**
 * OneTrust logo lockups pulled from the OneCore Figma file (node 30117:24579,
 * "Logo" page). Each type is exported at one representative density since
 * these are vector artwork — smaller "density" variants in Figma are optical
 * sizing tweaks, not different art. Reversed/light fill (#F5F5F5), meant for
 * dark or brand-colored surfaces.
 */
export const logos = {
  symbol,
  lockupHorizontal,
  lockupVertical,
  subbrandLockupHorizontal,
  subbrandLockupVertical,
  byotLockupHorizontal,
  byotLockupVertical,
} as const;

export type LogoName = keyof typeof logos;
