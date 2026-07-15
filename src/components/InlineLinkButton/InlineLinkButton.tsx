import type { AnchorHTMLAttributes, ReactNode } from "react";
import "./InlineLinkButton.css";

export type InlineLinkButtonSize = "large" | "medium" | "small";
export type InlineLinkButtonEmphasis = "primary" | "secondary";

export interface InlineLinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: InlineLinkButtonSize;
  emphasis?: InlineLinkButtonEmphasis;
  children?: ReactNode;
}

/**
 * From the OneCore Figma "Inline Link Button" component (node
 * 23716:11098): a link meant to sit inline within body copy, at three
 * sizes matching the body/sm-body/caption type scale, in two registers —
 * "primary" (link-blue, underline on hover) and "secondary" (body-color
 * text, always underlined).
 */
export function InlineLinkButton({
  size = "large",
  emphasis = "primary",
  children = "Inline link button",
  className,
  ...rest
}: InlineLinkButtonProps) {
  const classes = [
    "oc-inline-link",
    `oc-inline-link--${size}`,
    `oc-inline-link--${emphasis}`,
    "oc-focus-ring",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  );
}
