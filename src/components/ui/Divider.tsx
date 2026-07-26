import { cn } from "@/lib/cn";

type DividerProps = {
  className?: string;
  decorative?: boolean;
};

export function Divider({ className, decorative = true }: DividerProps) {
  return (
    <hr
      aria-hidden={decorative || undefined}
      className={cn("m-0 w-full border-0 border-t border-line", className)}
    />
  );
}
