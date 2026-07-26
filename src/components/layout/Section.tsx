import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionTone = "light" | "surface" | "dark";
type SectionSpacing = "sm" | "md" | "lg";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

const toneClasses: Record<SectionTone, string> = {
  light: "bg-page text-ink",
  surface: "bg-panel text-ink",
  dark: "bg-navy text-white",
};

const spacingClasses: Record<SectionSpacing, string> = {
  sm: "py-[var(--section-space-sm)]",
  md: "py-[var(--section-space-md)]",
  lg: "py-[var(--section-space-lg)]",
};

export function Section({
  children,
  className,
  tone = "light",
  spacing = "md",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(toneClasses[tone], spacingClasses[spacing], className)}
      {...props}
    >
      {children}
    </section>
  );
}
