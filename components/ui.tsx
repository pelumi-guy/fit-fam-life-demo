import type { ComponentProps, ReactNode } from "react";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

type ButtonVariant = "primary" | "secondary" | "ghost-light" | "dark";

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold font-display tracking-tight transition duration-200 ease-out motion-safe:hover:-translate-y-0.5 active:translate-y-0 cursor-pointer";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-gold text-ink shadow-[0_10px_24px_-10px_rgb(255_199_44/0.7)] hover:bg-[#ffd457]",
  secondary: "bg-white text-ink shadow-soft ring-1 ring-ink/10 hover:ring-ink/25",
  "ghost-light": "text-cream ring-1 ring-cream/35 hover:bg-cream/10 hover:ring-cream/60",
  dark: "bg-ink text-cream hover:bg-teal shadow-[0_12px_28px_-12px_rgb(16_36_38/0.8)]",
};

export function buttonClass(variant: ButtonVariant = "primary", extra = "") {
  return `${buttonBase} ${buttonVariants[variant]} ${extra}`;
}

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"a"> & { variant?: ButtonVariant }) {
  return <a className={buttonClass(variant, className)} {...props} />;
}

export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <p
      className={`mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] ${
        tone === "light" ? "text-gold" : "text-leaf"
      }`}
    >
      <span aria-hidden className={`h-px w-6 ${tone === "light" ? "bg-gold" : "bg-leaf"}`} />
      {children}
    </p>
  );
}

export function DemoBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-teal px-2.5 py-1 text-[0.68rem] font-bold tracking-[0.08em] whitespace-nowrap text-cream uppercase ${className}`}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-gold" />
      ISF Forum Demo
    </span>
  );
}

export function ArrowIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
      <path d="M4 10h11m-4.5-4.5L15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
