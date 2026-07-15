import type { ReactNode } from "react";
import { CloseIcon, ErrorStatusIcon, InfoStatusIcon, SuccessStatusIcon, WarningStatusIcon } from "../../icons";
import "./Toast.css";

export type ToastType = "neutral" | "info" | "error" | "warning" | "success";

export interface ToastProps {
  type?: ToastType;
  heading?: ReactNode;
  description?: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  onClose?: () => void;
  showIcon?: boolean;
  showTimeoutBar?: boolean;
  className?: string;
}

const ICONS: Record<ToastType, typeof InfoStatusIcon | null> = {
  neutral: InfoStatusIcon,
  info: InfoStatusIcon,
  error: ErrorStatusIcon,
  warning: WarningStatusIcon,
  success: SuccessStatusIcon,
};

export function Toast({
  type = "neutral",
  heading = "Section Heading",
  description = "Toast additional description text (optional)",
  actionLabel = "Label",
  onAction,
  onClose,
  showIcon = true,
  showTimeoutBar = false,
  className,
}: ToastProps) {
  const Icon = ICONS[type];
  const classes = ["oc-toast", type !== "neutral" ? `oc-toast--${type}` : "", className].filter(Boolean).join(" ");

  return (
    <div className={classes} role="status">
      {showIcon && Icon && <Icon size={20} className="oc-toast__icon" />}
      <div className="oc-toast__content">
        {heading && <p className="oc-toast__heading">{heading}</p>}
        {description && <p className="oc-toast__description">{description}</p>}
        {actionLabel && (
          <button type="button" className="oc-toast__action" onClick={onAction}>
            {actionLabel}
          </button>
        )}
      </div>
      <button type="button" className="oc-toast__close" aria-label="Dismiss" onClick={onClose}>
        <CloseIcon size={16} />
      </button>
      {showTimeoutBar && <div className="oc-toast__timeout-bar" />}
    </div>
  );
}
