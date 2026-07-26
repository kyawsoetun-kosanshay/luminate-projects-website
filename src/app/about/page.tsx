import { SiteFooter } from "@/components/footer/SiteFooter";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Meet Luminate Projects, a creative project management studio combining thoughtful planning, creative thinking, and reliable delivery.",
  path: "/about",
});

const qualities = [
  {
    title: "Strategic",
    copy: "We begin with purpose, priorities, audiences, and clear outcomes.",
  },
  {
    title: "Creative",
    copy: "We shape engaging experiences while keeping delivery practical.",
  },
  {
    title: "Collaborative",
    copy: "We bring teams, partners, and stakeholders into one clear process.",
  },
  {
    title: "Reliable",
    copy: "We follow through with careful coordination and hands-on support.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="About Luminate"
          title="Structure for ideas that deserve to happen."
          copy={site.valueProposition}
        />

        <Section spacing="lg" aria-labelledby="studio-title">
          <Container size="wide">
            <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <Eyebrow>Our studio</Eyebrow>
              <div>
                <h2 id="studio-title" className="type-h2 text-balance text-navy">
                  {site.positioning}
                </h2>
                <p className="type-lead mt-8 max-w-3xl text-quiet">
                  We collaborate with educational institutions, creative
                  communities, cultural organizations, businesses, and artists
                  to transform ideas into well-planned and impactful
                  experiences.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        <Section tone="surface" spacing="lg" aria-labelledby="vision-title">
          <Container size="wide">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div className="border-t border-line pt-8">
                <Eyebrow>Vision</Eyebrow>
                <h2 id="vision-title" className="type-h3 mt-6 text-navy">
                  From idea to impact.
                </h2>
                <p className="type-lead mt-6 max-w-xl text-quiet">
                  {site.positioning}
                </p>
              </div>
              <div className="border-t border-line pt-8">
                <Eyebrow>Mission</Eyebrow>
                <h2 className="type-h3 mt-6 text-navy">
                  Structure with room for creativity.
                </h2>
                <p className="type-lead mt-6 max-w-xl text-quiet">
                  {site.valueProposition}
                </p>
              </div>
            </div>
          </Container>
        </Section>

        <Section spacing="lg" aria-labelledby="approach-title">
          <Container size="wide">
            <SectionHeading
              eyebrow="How we work"
              title="Thoughtful in approach. Dependable in delivery."
              titleId="approach-title"
            />
            <ol className="mt-16 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
              {qualities.map((quality, index) => (
                <li
                  key={quality.title}
                  className="border-b border-line py-8 sm:px-6 sm:odd:border-r lg:border-r lg:last:border-r-0"
                >
                  <span className="type-small text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="type-h4 mt-8 text-navy">{quality.title}</h3>
                  <p className="type-body mt-4 text-quiet">{quality.copy}</p>
                </li>
              ))}
            </ol>
          </Container>
        </Section>

        <Section spacing="lg" aria-labelledby="founder-page-title">
          <Container size="wide">
            <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <div>
                <Eyebrow>Founder</Eyebrow>
                <p className="type-small mt-6 text-quiet">
                  Creative leadership with operational discipline.
                </p>
              </div>
              <div>
                <h2 id="founder-page-title" className="type-h2 text-navy">
                  {site.founder.name}
                </h2>
                <p className="mt-3 font-display text-xl font-semibold text-gold">
                  {site.founder.role}
                </p>
                <p className="type-lead mt-8 max-w-3xl text-quiet">
                  {site.founder.biography}
                </p>
              </div>
            </div>
          </Container>
        </Section>

        <Section tone="dark" spacing="lg" aria-labelledby="partners-title">
          <Container size="wide">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <SectionHeading
                eyebrow="Who we support"
                title="Built to work across disciplines."
                titleId="partners-title"
                inverse
              />
              <ul className="grid gap-x-10 sm:grid-cols-2">
                {site.industries.map((industry) => (
                  <li
                    key={industry}
                    className="type-body border-b border-white/15 py-5 text-white/75"
                  >
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
            <Button href="/contact" variant="light-on-dark" className="mt-14">
              Start a conversation
            </Button>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
