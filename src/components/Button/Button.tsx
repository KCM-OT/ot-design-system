import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
  children?: ReactNode;
}

/**
 * From the OneCore Figma "Button" component (node 1010:763): Primary /
 * Secondary / Tertiary types, each with Default/Hover/Press/Load/Disabled
 * states. Figma's colors (#468254 primary green, #1470a9 link blue, etc.)
 * don't exist in this project's tokens.css palette, so states here are
 * mapped onto the closest existing semantic tokens (--oc-primary family)
 * rather than reproduced pixel-for-pixel — hover/press are real
 * :hover/:active CSS, not separate static swatches.
 */
export function Button({
  variant = "primary",
  loading = false,
  disabled,
  children = "Button",
  className,
  ...rest
}: ButtonProps) {
  const classes = ["oc-button", `oc-button--${variant}`, "oc-focus-ring", className].filter(Boolean).join(" ");

  return (
    <button type="button" className={classes} disabled={disabled || loading} {...rest}>
      {loading ? <Spinner /> : children}
    </button>
  );
}

function Spinner() {
  return (
    <svg className="oc-button__spinner" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" />
      <path d="M14.5 8a6.5 6.5 0 0 0-6.5-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
