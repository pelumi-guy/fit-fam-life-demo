// Simple original line icons. Decorative: always rendered aria-hidden.
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "size-6",
};

export function TodayIcon() {
  return (
    <svg {...base}>
      <rect x="3.5" y="5" width="17" height="15" rx="3.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      <path d="m9 14.5 2 2 4-4" />
    </svg>
  );
}

export function BowlIcon() {
  return (
    <svg {...base}>
      <path d="M3.5 11h17a8.5 8.5 0 0 1-17 0Z" />
      <path d="M9 19.5h6" />
      <path d="M8 8c.5-2 2-3 4-3M13.5 8c.3-1.5 1.5-2.6 3.3-2.8" />
    </svg>
  );
}

export function TrendIcon() {
  return (
    <svg {...base}>
      <path d="M4 19h16" />
      <path d="m5 15 4.5-4.5 3.5 3L19 7" />
      <path d="M15 7h4v4" />
    </svg>
  );
}

export function CommunityIcon() {
  return (
    <svg {...base}>
      <circle cx="9" cy="8.5" r="3" />
      <circle cx="17" cy="9.5" r="2.3" />
      <path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
      <path d="M15.5 14.3c2.3-.3 4.3 1.2 5 4.2" />
    </svg>
  );
}

export function HomeIcon() {
  return (
    <svg {...base}>
      <path d="M4 10.5 12 4l8 6.5V19a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19Z" />
      <path d="M9.5 20.5v-5h5v5" />
    </svg>
  );
}

export function PlusNoteIcon() {
  return (
    <svg {...base}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <path d="M12 8.5v7M8.5 12h7" />
    </svg>
  );
}

export function SparkIcon() {
  return (
    <svg {...base}>
      <path d="M12 3.5c.6 4.3 2.2 5.9 6.5 6.5-4.3.6-5.9 2.2-6.5 6.5-.6-4.3-2.2-5.9-6.5-6.5 4.3-.6 5.9-2.2 6.5-6.5Z" />
      <path d="M18.5 16.5c.2 1.4.8 2 2.2 2.2-1.4.2-2 .8-2.2 2.2-.2-1.4-.8-2-2.2-2.2 1.4-.2 2-.8 2.2-2.2Z" />
    </svg>
  );
}

export function CheckIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg {...base} className={className} strokeWidth={2.4}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}
