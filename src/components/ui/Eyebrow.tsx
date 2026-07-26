import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
};

export function Eyebrow({ children, className, ...props }: EyebrowProps) {
  return (
    <p className={cn("type-eyebrow text-navy", className)} {...props}>
      {children}
    </p>
  );
}
