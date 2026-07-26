import type { Metadata } from "next";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { Container } from "@/components/layout/Container";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The requested page could not be found on the Luminate Projects website.",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section
          className="flex min-h-[calc(100svh-5rem)] items-center bg-navy py-[var(--section-space-md)] text-white"
          aria-labelledby="not-found-title"
        >
          <Container size="wide">
            <Eyebrow className="text-white/65">404 · Page not found</Eyebrow>
            <h1
              id="not-found-title"
              className="type-display-lg mt-6 max-w-4xl text-balance"
            >
              This page is outside the current project plan.
            </h1>
            <p className="type-lead mt-8 max-w-2xl text-white/70">
              The page may have moved, or the address may be incomplete.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/" variant="light-on-dark">
                Return home
              </Button>
              <Button href="/work" variant="outline-on-dark">
                Explore our work
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
