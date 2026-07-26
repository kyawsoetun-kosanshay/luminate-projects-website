import { SiteFooter } from "@/components/footer/SiteFooter";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Process",
  description:
    "Discover how Luminate Projects moves ideas through definition, planning, coordination, delivery, and evaluation.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="Our process"
          title="Clear stages. Collaborative decisions. Reliable delivery."
          copy="A six-stage framework that gives every project structure while leaving space for creativity and change."
        />

        <Section spacing="lg" aria-labelledby="process-steps-title">
          <Container size="wide">
            <SectionHeading
              eyebrow="From idea to impact"
              title="One connected project journey."
              titleId="process-steps-title"
              copy="Each stage builds clarity for the next, helping teams understand what is happening, why it matters, and what comes next."
            />

            <ol className="mt-16 border-t border-line">
              {processSteps.map((step) => (
                <li
                  key={step.number}
                  className="grid gap-6 border-b border-line py-10 md:grid-cols-[5rem_0.75fr_1.25fr] md:items-start md:gap-10 md:py-14"
                >
                  <span className="type-small text-gold">
                    {String(step.number).padStart(2, "0")}
                  </span>
                  <h3 className="type-h3 text-navy">{step.title}</h3>
                  <p className="type-lead max-w-2xl text-quiet">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </Container>
        </Section>

        <Section tone="surface" spacing="lg" aria-labelledby="process-value-title">
          <Container size="wide">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <Eyebrow>Why structure matters</Eyebrow>
              <div>
                <h2 id="process-value-title" className="type-h2 text-navy">
                  Momentum without losing sight of meaning.
                </h2>
                <p className="type-lead mt-8 max-w-3xl text-quiet">
                  {site.valueProposition}
                </p>
                <Button href="/contact" className="mt-9">
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
