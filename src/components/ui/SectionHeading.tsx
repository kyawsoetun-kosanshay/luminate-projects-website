import type { ElementType } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";
import { Stack } from "../layout/Stack";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  headingAs?: ElementType;
  className?: string;
  inverse?: boolean;
  titleId?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  headingAs: Heading = "h2",
  className,
  inverse = false,
  titleId,
}: SectionHeadingProps) {
  return (
    <Stack
      gap="sm"
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow className={inverse ? "text-white/70" : undefined}>{eyebrow}</Eyebrow>
      ) : null}
      <Heading id={titleId} className="type-h2 text-balance">
        {title}
      </Heading>
      {copy ? (
        <p className={cn("type-lead max-w-2xl", inverse ? "text-white/72" : "text-quiet")}>
          {copy}
        </p>
      ) : null}
    </Stack>
  );
}
