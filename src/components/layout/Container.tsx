import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerSize = "content" | "default" | "wide";

type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
  size?: ContainerSize;
};

const sizeClasses: Record<ContainerSize, string> = {
  content: "max-w-[var(--container-content)]",
  default: "max-w-[var(--container-default)]",
  wide: "max-w-[var(--container-wide)]",
};

export function Container({
  as: Component = "div",
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-[var(--page-padding)]",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
