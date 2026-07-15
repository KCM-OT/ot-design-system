import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Icon } from "../../icons";
import "./LinkButton.css";

export type LinkButtonSize = "large" | "small";

export interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: LinkButtonSize;
  icon?: boolean;
  children?: ReactNode;
}

/**
 * From the OneCore Figma "Link Button" component (node 1012:891): a
 * standalone call-to-action link, Large/Small, each with an optional
 * trailing icon variant. Figma's link color (#1470a9) has a dedicated
 * match in this project's tokens (--oc-utility-link), unlike Button's
 * green palette.
 */
export function LinkButton({ size = "large", icon = false, children = "Link button", className, ...rest }: LinkButtonProps) {
  const classes = ["oc-link-button", `oc-link-button--${size}`, "oc-focus-ring", className].filter(Boolean).join(" ");

  return (
    <a className={classes} {...rest}>
      {children}
      {icon && <Icon name="arrow-up-right-from-square" size={size === "large" ? 16 : 14} className="oc-link-button__icon" />}
    </a>
  );
}
