"use client";

import { useEffect } from "react";
import Link from "next/link";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center bg-navy py-[var(--section-space-md)] text-white">
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-padding)]">
        <p className="type-eyebrow text-white/65">Something went wrong</p>
        <h1 className="type-display-lg mt-6 max-w-4xl text-balance">
          We could not complete that request.
        </h1>
        <p className="type-lead mt-8 max-w-2xl text-white/70">
          Try loading the page again, or return to a known part of the site.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="button-light-on-dark type-button inline-flex min-h-11 items-center justify-center rounded-[var(--radius-pill)] border px-6 py-3"
          >
            Try again
          </button>
          <Link
            href="/"
            className="button-outline-on-dark type-button inline-flex min-h-11 items-center justify-center rounded-[var(--radius-pill)] border px-6 py-3"
          >
            Return home
          </Link>
          <Link
            href="/work"
            className="button-outline-on-dark type-button inline-flex min-h-11 items-center justify-center rounded-[var(--radius-pill)] border px-6 py-3"
          >
            Explore our work
          </Link>
        </div>
      </div>
    </main>
  );
}
