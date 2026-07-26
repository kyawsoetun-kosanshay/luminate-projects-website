"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { primaryNavigation } from "@/data/navigation";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        ref={menuButtonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="type-nav inline-flex min-h-11 items-center rounded-[var(--radius-pill)] border border-line bg-panel px-4 text-navy"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {isOpen ? (
        <nav
          id={menuId}
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-y border-line bg-panel shadow-[var(--shadow-md)]"
        >
          <ul className="mx-auto grid max-w-[var(--container-default)] px-[var(--page-padding)] py-4">
            {primaryNavigation.map((item) => {
              const isCurrent =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(`${item.href}/`));

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`type-nav flex min-h-11 items-center rounded-[var(--radius-sm)] px-3 py-3 text-navy hover:bg-panel-subtle ${
                      isCurrent ? "bg-panel-subtle" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
