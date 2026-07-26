import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Divider } from "@/components/ui/Divider";
import { contact } from "@/data/contact";
import { primaryNavigation } from "@/data/navigation";
import { site } from "@/data/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <Container className="py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="max-w-md">
            <Link
              href="/"
              aria-label={`${site.name} home`}
              className="inline-flex min-h-11 items-center"
            >
              <BrandLogo variant="light" />
            </Link>
            <p className="type-body mt-4 text-white/70">{site.positioning}</p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="type-eyebrow mb-4 text-white/50">Navigate</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="type-small inline-flex min-h-11 min-w-11 items-center text-white/80 hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <p className="type-eyebrow mb-4 text-white/50">Contact</p>
            <ul className="type-small space-y-3 text-white/80">
              <li>
                <a
                  className="inline-flex min-h-11 items-center hover:text-white"
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  className="inline-flex min-h-11 items-center hover:text-white"
                  href="tel:+959448043397"
                >
                  {contact.phoneMyanmar}
                </a>
              </li>
              <li>
                <a
                  className="inline-flex min-h-11 items-center hover:text-white"
                  href="tel:+66805153718"
                >
                  Viber: {contact.viberThailand}
                </a>
              </li>
              <li>
                <a
                  className="inline-flex min-h-11 items-center hover:text-white"
                  href={contact.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </address>
        </div>

        <Divider className="my-10 border-white/15" />
        <p className="type-small text-white/55">
          © {currentYear} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
