import { SiteFooter } from "@/components/footer/SiteFooter";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Creative project management, event operations, stakeholder coordination, and support for creative and educational projects.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="Services"
          title="Creative direction meets operational clarity."
          copy="Flexible project support for events, programs, exhibitions, workshops, and collaborative initiatives."
        />

        <Section spacing="lg" aria-labelledby="services-list-title">
          <Container size="wide">
            <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
              <div>
                <Eyebrow>What we do</Eyebrow>
                <h2
                  id="services-list-title"
                  className="type-h3 mt-6 max-w-md text-navy"
                >
                  Support shaped around the work.
                </h2>
              </div>
              <ol className="border-t border-line">
                {services.map((service, index) => (
                  <li
                    key={service.id}
                    className="grid gap-8 border-b border-line py-10 md:grid-cols-[4rem_0.8fr_1.2fr] md:py-14"
                  >
                    <span className="type-small text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="type-h4 text-navy">{service.title}</h3>
                    <ul className="space-y-3">
                      {service.activities.map((activity) => (
                        <li
                          key={activity}
                          className="type-body border-b border-line/70 pb-3 text-quiet last:border-0"
                        >
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </Section>

        <Section tone="dark" spacing="lg" aria-labelledby="engagement-title">
          <Container size="wide">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
              <div>
                <Eyebrow className="text-white/65">Working together</Eyebrow>
                <h2
                  id="engagement-title"
                  className="type-h2 mt-6 max-w-3xl text-balance"
                >
                  A focused partnership, scoped to your project.
                </h2>
              </div>
              <div>
                <p className="type-lead text-white/70">{site.pricing.note}</p>
                <p className="mt-7 font-display text-2xl font-semibold">
                  Starting from USD {site.pricing.startingAtUsd}
                </p>
                <Button
                  href="/contact"
                  variant="light-on-dark"
                  className="mt-9"
                >
                  Discuss your project
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
