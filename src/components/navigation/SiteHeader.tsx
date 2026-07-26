import { Container } from "@/components/layout/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { site } from "@/data/site";
import Link from "next/link";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export function SiteHeader() {
  return (
    <header className="relative z-50 border-b border-line bg-panel">
      <Container className="flex min-h-20 items-center justify-between gap-8">
        <Link
          href="/"
          aria-label={`${site.name} home`}
          className="inline-flex min-h-11 shrink-0 items-center"
        >
          <BrandLogo priority />
        </Link>

        <DesktopNavigation />

        <MobileNavigation />
      </Container>
    </header>
  );
}
