import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type StackGap = "xs" | "sm" | "md" | "lg" | "xl";

type StackProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
  gap?: StackGap;
};

const gapClasses: Record<StackGap, string> = {
  xs: "gap-2",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-10",
  xl: "gap-16",
};

export function Stack({
  as: Component = "div",
  children,
  className,
  gap = "md",
  ...props
}: StackProps) {
  return (
    <Component className={cn("flex flex-col", gapClasses[gap], className)} {...props}>
      {children}
    </Component>
  );
}
