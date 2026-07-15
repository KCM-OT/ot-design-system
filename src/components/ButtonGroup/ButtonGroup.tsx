import type { HTMLAttributes, ReactNode } from "react";
import "./ButtonGroup.css";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

/**
 * From the OneCore Figma "Button group" frame (node 1910:5010) — not a
 * distinct visual component, just Button instances placed side by side
 * with consistent spacing (Group=1/2/3 in Figma show 1-3 buttons). This
 * formalizes that spacing as a layout wrapper.
 */
export function ButtonGroup({ children, className, ...rest }: ButtonGroupProps) {
  const classes = ["oc-button-group", className].filter(Boolean).join(" ");
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
