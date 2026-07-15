export { Icon, iconNames } from "./Icon";
export type { IconProps as GeneralIconProps, IconName } from "./Icon";

type IconProps = { size?: number; className?: string };

export function CloseIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronDownIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M3 8.5L6.5 12L13 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Toast status glyphs: filled shape + white icon baked in, matching the Figma Toast component's icon set. */
export function InfoStatusIcon({ size = 20, className, color = "var(--oc-foreground)" }: IconProps & { color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill={color} />
      <rect x="9" y="9" width="2" height="6" rx="1" fill="white" />
      <circle cx="10" cy="6" r="1.15" fill="white" />
    </svg>
  );
}

export function ErrorStatusIcon({ size = 20, className, color = "var(--oc-supportive-red)" }: IconProps & { color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.34 1h7.32L18 5.34v7.32L13.66 17H6.34L2 12.66V5.34L6.34 1Z"
        fill={color}
      />
      <rect x="9" y="5" width="2" height="6" rx="1" fill="white" />
      <circle cx="10" cy="13.5" r="1.15" fill="white" />
    </svg>
  );
}

export function WarningStatusIcon({ size = 20, className, color = "var(--oc-supportive-yellow)" }: IconProps & { color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M10 1.5 19 17H1L10 1.5Z" fill={color} />
      <rect x="9" y="7.5" width="2" height="5" rx="1" fill="white" />
      <circle cx="10" cy="14.5" r="1.1" fill="white" />
    </svg>
  );
}

export function SuccessStatusIcon({ size = 20, className, color = "var(--oc-success)" }: IconProps & { color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill={color} />
      <path d="M5.5 10.3 8.3 13 14.5 6.8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
