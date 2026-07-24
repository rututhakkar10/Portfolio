// Simple line-art icons, drawn with an even stroke.
// The hand-drawn "wobble" comes from the #sketch SVG filter applied in CSS.

type IconProps = { className?: string };

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function FrontendIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="6" y="9" width="36" height="30" rx="3" />
      <path d="M6 17 H42" />
      <circle cx="11" cy="13" r="1" />
      <circle cx="15" cy="13" r="1" />
      <circle cx="19" cy="13" r="1" />
      <path d="M20 24 L16 28 L20 32" />
      <path d="M28 24 L32 28 L28 32" />
    </svg>
  );
}

export function BackendIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="8" y="11" width="32" height="11" rx="2.5" />
      <rect x="8" y="26" width="32" height="11" rx="2.5" />
      <circle cx="13" cy="16.5" r="1.2" />
      <circle cx="13" cy="31.5" r="1.2" />
      <path d="M30 16.5 H35" />
      <path d="M30 31.5 H35" />
    </svg>
  );
}

export function DatabaseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <ellipse cx="24" cy="13" rx="14" ry="5" />
      <path d="M10 13 V35" />
      <path d="M38 13 V35" />
      <path d="M10 24 A14 5 0 0 0 38 24" />
      <path d="M10 35 A14 5 0 0 0 38 35" />
    </svg>
  );
}

export function CloudIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M16 34 a8 8 0 0 1 -1.5 -15.9 a11 11 0 0 1 20.5 -1.6 a7 7 0 0 1 1 14.5 a4 4 0 0 1 -.5 0 H16 Z" />
    </svg>
  );
}

export function CodeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M18 16 L10 24 L18 32" />
      <path d="M30 16 L38 24 L30 32" />
      <path d="M27 13 L21 35" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="7" y="13" width="34" height="22" rx="2.5" />
      <path d="M8 15 L24 27 L40 15" />
    </svg>
  );
}

export function AboutIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="24" cy="16" r="7" />
      <path d="M11 39 a13 13 0 0 1 26 0" />
    </svg>
  );
}

export function SkillsIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M24 7 l4.2 8.6 9.5 1.4 -6.9 6.7 1.6 9.4 -8.5 -4.5 -8.5 4.5 1.6 -9.4 -6.9 -6.7 9.5 -1.4 Z" />
    </svg>
  );
}

export function ProjectsIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M24 8 L40 16 L24 24 L8 16 Z" />
      <path d="M8 24 L24 32 L40 24" />
      <path d="M8 31 L24 39 L40 31" />
    </svg>
  );
}

export function AchievementsIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M15 9 H33 V19 a9 9 0 0 1 -18 0 Z" />
      <path d="M15 12 H9 v3 a5 5 0 0 0 6 5" />
      <path d="M33 12 H39 v3 a5 5 0 0 1 -6 5" />
      <path d="M24 28 V33" />
      <path d="M17 39 H31 L29 33 H19 Z" />
    </svg>
  );
}
