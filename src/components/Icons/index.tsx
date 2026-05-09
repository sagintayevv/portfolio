import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 20): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

export const IconHome = ({ size = 20, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5z" />
    <path d="M9 21V12h6v9" />
  </svg>
);

export const IconDesign = ({ size = 20, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <path d="M3 3l6.5 17 3-7 7-3L3 3z" />
    <path d="M13 13l5.5 5.5" />
  </svg>
);

export const IconArt = ({ size = 20, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="8.5" cy="9.5" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="14" cy="8" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="15.5" cy="14" r="1.5" fill="currentColor" stroke="none" />
    <path d="M7.5 15.5c1.5-2.5 6-2.5 7 .5" />
  </svg>
);

export const IconPhoto = ({ size = 20, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="17" cy="7.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const IconStack = ({ size = 20, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <path d="M12 4l8 4-8 4-8-4 8-4z" />
    <path d="M4 12l8 4 8-4" />
    <path d="M4 16l8 4 8-4" />
  </svg>
);

export const IconSpark = ({ size = 20, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z" />
  </svg>
);

export const IconBriefcase = ({ size = 20, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <rect x="3" y="7" width="18" height="12" rx="2" />
    <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
    <path d="M3 12h18" />
  </svg>
);

export const IconSun = ({ size = 18, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
  </svg>
);

export const IconMoon = ({ size = 18, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

export const IconLinkedIn = ({ size = 18, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const IconTelegram = ({ size = 18, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M21.2 4.2L3.9 10.9c-1.2.5-1.2 1.2-.2 1.5l4.4 1.4 1.7 5.2c.2.6.1.9.8.9.5 0 .7-.2 1-.5l2.4-2.3 5 3.7c.9.5 1.5.3 1.7-.8l2.9-13.8c.3-1.4-.5-2-1.4-1.6zm-11 9.1l-.4 4-1.8-5.9 10.8-6.8-8.6 8.7z" />
  </svg>
);

export const IconLink = ({ size = 14, ...props }: IconProps) => (
  <svg {...base(size)} {...props}>
    <path d="M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L10.7 5.22" />
    <path d="M14 11a5 5 0 0 0-7.07 0L4.8 13.12a5 5 0 0 0 7.07 7.07l1.41-1.41" />
  </svg>
);
