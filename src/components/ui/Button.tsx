import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "light-on-dark"
  | "outline-on-dark";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkButtonProps = SharedProps & {
  href: string;
  external?: boolean;
  target?: "_blank" | "_self";
  type?: never;
};

type NativeButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
    external?: never;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "button-primary",
  secondary: "button-secondary",
  ghost: "button-ghost",
  "light-on-dark": "button-light-on-dark",
  "outline-on-dark": "button-outline-on-dark",
};

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    variant = "primary",
  } = props;
  const classes = cn(
    "type-button inline-flex min-h-11 items-center justify-center rounded-[var(--radius-pill)] border px-6 py-3 text-center transition-colors duration-[var(--duration-default)] ease-[var(--ease-standard)]",
    variantClasses[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, external, target } = props;
    const isExternal = external ?? /^https?:\/\//.test(href);

    if (isExternal) {
      return (
        <a
          className={classes}
          href={href}
          target={target ?? "_blank"}
          rel={target === "_self" ? undefined : "noreferrer"}
        >
          {children}
        </a>
      );
    }

    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as NativeButtonProps;
  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  );
}
