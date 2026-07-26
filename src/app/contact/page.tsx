import { SiteFooter } from "@/components/footer/SiteFooter";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { contact } from "@/data/contact";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Luminate Projects to discuss an event, workshop, exhibition, educational program, or creative project.",
  path: "/contact",
});

const contactMethods = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    label: "Myanmar",
    value: contact.phoneMyanmar,
    href: "tel:+959448043397",
  },
  {
    label: "Viber / Thailand",
    value: contact.viberThailand,
    href: "tel:+66805153718",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="Contact"
          title="Let’s build meaningful projects together."
          copy="Share what you are planning, where you are in the process, and the kind of support you need."
        />

        <Section spacing="lg" aria-labelledby="contact-options-title">
          <Container size="wide">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <Eyebrow>Start a conversation</Eyebrow>
                <h2
                  id="contact-options-title"
                  className="type-h3 mt-6 max-w-md text-navy"
                >
                  Choose the most convenient way to reach us.
                </h2>
              </div>

              <address className="min-w-0 not-italic">
                <ul className="border-t border-line">
                  {contactMethods.map((method) => (
                    <li key={method.label} className="border-b border-line">
                      <a
                        href={method.href}
                        className="group grid min-h-24 items-center gap-3 py-5 sm:grid-cols-[10rem_1fr]"
                      >
                        <span className="type-small text-quiet">
                          {method.label}
                        </span>
                        <span className="type-h4 min-w-0 break-all text-navy transition-colors group-hover:text-gold sm:break-words">
                          {method.value}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <a
                  href={contact.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="type-nav mt-7 inline-flex min-h-11 items-center text-navy underline decoration-line underline-offset-8 transition-colors hover:text-gold"
                >
                  Visit Luminate Projects on Facebook
                </a>
              </address>
            </div>
          </Container>
        </Section>

        <Section tone="surface" spacing="lg" aria-labelledby="consultation-title">
          <Container size="wide">
            <div className="rounded-[var(--radius-lg)] bg-navy px-6 py-12 text-white sm:px-10 sm:py-16 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-16">
              <div>
                <Eyebrow className="text-white/65">
                  Starting investment
                </Eyebrow>
                <h2
                  id="consultation-title"
                  className="mt-6 font-display text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-none tracking-[-0.055em]"
                >
                  USD {site.pricing.startingAtUsd}
                </h2>
              </div>
              <div className="mt-10 lg:mt-0">
                <p className="type-lead text-white/70">{site.pricing.note}</p>
                <Button
                  href={`mailto:${contact.email}`}
                  external
                  target="_self"
                  variant="light-on-dark"
                  className="mt-9"
                >
                  Email Luminate
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
