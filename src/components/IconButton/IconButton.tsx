import type { ButtonHTMLAttributes } from "react";
import { Icon } from "../../icons";
import type { IconName } from "../../icons";
import "./IconButton.css";

export type IconButtonSize = "md" | "sm";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  size?: IconButtonSize;
  "aria-label": string;
}

/**
 * From the OneCore Figma "Icon Button" (node 1012:876, 32px) and "Small
 * Icon Button" (node 28052:27324, 24px) components — a chrome-level icon
 * action with Hover/Press states. Merged into one component with a `size`
 * prop rather than two, since they differ only in dimensions.
 */
export function IconButton({ icon, size = "md", className, ...rest }: IconButtonProps) {
  const classes = ["oc-icon-button", `oc-icon-button--${size}`, "oc-focus-ring", className].filter(Boolean).join(" ");

  return (
    <button type="button" className={classes} {...rest}>
      <Icon name={icon} size={size === "md" ? 16 : 14} />
    </button>
  );
}
