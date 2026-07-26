import Image from "next/image";
import { cn } from "@/lib/cn";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "color" | "light";
};

export function BrandLogo({
  className,
  priority = false,
  variant = "color",
}: BrandLogoProps) {
  return (
    <span
      className={cn(
        "brand-logo relative block shrink-0 overflow-hidden",
        className,
      )}
    >
      <Image
        src={
          variant === "color"
            ? "/assets/logo/color_logo.png"
            : "/assets/logo/none_color_logo.png"
        }
        alt="Luminate Projects"
        width={1500}
        height={1500}
        priority={priority}
        sizes="(min-width: 1024px) 174px, (min-width: 640px) 158px, 143px"
        className="brand-logo-image absolute max-w-none object-contain"
      />
    </span>
  );
}
