import arrowUpRightFromSquareOutline from "./svg/arrow-up-right-from-square-outline.svg?raw";
import bellOutline from "./svg/bell-outline.svg?raw";
import checkOutline from "./svg/check-outline.svg?raw";
import chevronDownOutline from "./svg/chevron-down-outline.svg?raw";
import chevronLeftOutline from "./svg/chevron-left-outline.svg?raw";
import chevronRightOutline from "./svg/chevron-right-outline.svg?raw";
import chevronUpOutline from "./svg/chevron-up-outline.svg?raw";
import circleCheckFilled from "./svg/circle-check-filled.svg?raw";
import circleCheckOutline from "./svg/circle-check-outline.svg?raw";
import circleExclamationOutline from "./svg/circle-exclamation-outline.svg?raw";
import circleInfoOutline from "./svg/circle-info-outline.svg?raw";
import circleXmarkOutline from "./svg/circle-xmark-outline.svg?raw";
import cloudArrowDownOutline from "./svg/cloud-arrow-down-outline.svg?raw";
import ellipsisOutline from "./svg/ellipsis-outline.svg?raw";
import eyeOutline from "./svg/eye-outline.svg?raw";
import eyeSlashOutline from "./svg/eye-slash-outline.svg?raw";
import filterOutline from "./svg/filter-outline.svg?raw";
import gearOutline from "./svg/gear-outline.svg?raw";
import lockOutline from "./svg/lock-outline.svg?raw";
import magnifyingGlassOutline from "./svg/magnifying-glass-outline.svg?raw";
import pencilOutline from "./svg/pencil-outline.svg?raw";
import plusOutline from "./svg/plus-outline.svg?raw";
import starFilled from "./svg/star-filled.svg?raw";
import starOutline from "./svg/star-outline.svg?raw";
import toggleOnFilled from "./svg/toggle-on-filled.svg?raw";
import toggleOnOutline from "./svg/toggle-on-outline.svg?raw";
import trashCanOutline from "./svg/trash-can-outline.svg?raw";
import triangleExclamationOutline from "./svg/triangle-exclamation-outline.svg?raw";
import userOutline from "./svg/user-outline.svg?raw";
import xmarkOutline from "./svg/xmark-outline.svg?raw";

/**
 * Curated set of real Font Awesome-based icons pulled from Figma's Icons
 * page (node 12497:2, ~350 icons total). This registry covers a starter
 * set of ~30 commonly-needed icons, downloaded as exact SVG paths via
 * download_assets rather than hand-drawn approximations.
 *
 * To add more: find the icon's node id in Figma (frame "font-awesome",
 * symbols named "<icon-name>-outline"/"<icon-name>-filled"), pull it with
 * download_assets({ defaultFormat: "svg" }), then strip the exported
 * background rect / wrapper <g> down to just the <path> with
 * fill="currentColor" and viewBox="0 0 24 24" (see the other files in
 * ./svg for the pattern), and register it below.
 */
const registry = {
  "arrow-up-right-from-square": arrowUpRightFromSquareOutline,
  bell: bellOutline,
  check: checkOutline,
  "chevron-down": chevronDownOutline,
  "chevron-left": chevronLeftOutline,
  "chevron-right": chevronRightOutline,
  "chevron-up": chevronUpOutline,
  "circle-check": circleCheckOutline,
  "circle-check-filled": circleCheckFilled,
  "circle-exclamation": circleExclamationOutline,
  "circle-info": circleInfoOutline,
  "circle-xmark": circleXmarkOutline,
  "cloud-arrow-down": cloudArrowDownOutline,
  ellipsis: ellipsisOutline,
  eye: eyeOutline,
  "eye-slash": eyeSlashOutline,
  filter: filterOutline,
  gear: gearOutline,
  lock: lockOutline,
  "magnifying-glass": magnifyingGlassOutline,
  pencil: pencilOutline,
  plus: plusOutline,
  star: starOutline,
  "star-filled": starFilled,
  "toggle-on": toggleOnOutline,
  "toggle-on-filled": toggleOnFilled,
  "trash-can": trashCanOutline,
  "triangle-exclamation": triangleExclamationOutline,
  user: userOutline,
  xmark: xmarkOutline,
} as const;

export type IconName = keyof typeof registry;

export const iconNames = Object.keys(registry) as IconName[];

export interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  color?: string;
}

export function Icon({ name, size = 20, className, color }: IconProps) {
  const svg = registry[name];
  return (
    <span
      className={["oc-icon", className].filter(Boolean).join(" ")}
      style={{ width: size, height: size, color }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
