import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { HomeHeroMedia } from "@/components/home/HomeHeroMedia";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact } from "@/data/contact";
import { processSteps } from "@/data/process";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";

const studioQualities = [
  "Strategic",
  "Creative",
  "Collaborative",
  "Reliable",
] as const;

const differentiators = [
  {
    number: "01",
    title: "Strategy + Creativity",
    copy: "Structured thinking and creative direction work together from the first conversation.",
  },
  {
    number: "02",
    title: "Clear Coordination",
    copy: "People, timelines, decisions, and details stay aligned throughout delivery.",
  },
  {
    number: "03",
    title: "Resource Efficiency",
    copy: "Time, budgets, partners, and materials are planned with care and purpose.",
  },
  {
    number: "04",
    title: "Outcome Focus",
    copy: "Every project is shaped around meaningful experiences and measurable value.",
  },
] as const;

const projectLayout = [
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
] as const;

const projectAspect = [
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[16/9]",
] as const;

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section
          className="relative isolate flex min-h-[calc(100svh-5rem)] items-end overflow-hidden bg-navy text-white"
          aria-labelledby="hero-title"
        >
          <HomeHeroMedia />
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,12,24,0.9)_0%,rgba(4,12,24,0.62)_48%,rgba(4,12,24,0.2)_100%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(0deg,rgba(4,12,24,0.8)_0%,transparent_58%)]"
            aria-hidden="true"
          />

          <Container
            size="wide"
            className="relative z-10 pb-12 pt-28 sm:pb-16 md:pb-20 lg:pb-24"
          >
            <div className="home-reveal max-w-4xl">
              <Eyebrow className="text-white/72">
                Creative Project Management Studio
              </Eyebrow>
              <h1
                id="hero-title"
                className="type-display-xl mt-6 max-w-4xl text-balance"
              >
                From idea
                <br />
                to impact.
              </h1>
              <p className="type-lead mt-7 max-w-2xl text-white/78">
                We plan, coordinate, deliver, and evaluate meaningful events,
                workshops, exhibitions, educational programs, and creative
                projects.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="light-on-dark">
                  Start a Project
                </Button>
                <Button
                  href="/work"
                  variant="outline-on-dark"
                >
                  Explore Our Work
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <Section
          spacing="lg"
          className="overflow-hidden"
          aria-labelledby="studio-introduction-title"
        >
          <Container size="wide">
            <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <div className="home-reveal">
                <Eyebrow>Our studio</Eyebrow>
                <p className="mt-6 max-w-xs font-display text-2xl font-semibold leading-tight tracking-[-0.025em] text-navy">
                  Thoughtful structure for ambitious, meaningful work.
                </p>
              </div>
              <div className="home-reveal home-reveal-delay-1">
                <h2
                  id="studio-introduction-title"
                  className="type-h2 max-w-4xl text-balance text-navy"
                >
                  Luminate Projects is a Creative Project Management Studio
                  dedicated to designing and delivering meaningful projects,
                  events, workshops, exhibitions, and learning experiences.
                </h2>
                <p className="type-lead mt-8 max-w-3xl text-quiet">
                  We collaborate with educational institutions, creative
                  communities, cultural organizations, businesses, and artists
                  to transform ideas into well-planned and impactful
                  experiences.
                </p>
                <ul className="mt-12 grid grid-cols-2 border-y border-line sm:grid-cols-4">
                  {studioQualities.map((quality, index) => (
                    <li
                      key={quality}
                      className="border-line py-6 pr-3 sm:border-l sm:px-5 first:sm:border-l-0"
                    >
                      <span className="type-small text-quiet">
                        0{index + 1}
                      </span>
                      <p className="mt-2 font-display text-lg font-semibold text-navy">
                        {quality}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        <Section tone="surface" spacing="lg" aria-labelledby="services-title">
          <Container size="wide">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="What we do"
                title="Ideas need more than inspiration."
                titleId="services-title"
                copy="We bring the strategy, systems, and hands-on coordination that move projects from intention to delivery."
              />
              <Button href="/services" variant="ghost">
                View all services
              </Button>
            </div>

            <ol className="mt-16 border-t border-line">
              {services.map((service, index) => (
                <li
                  key={service.id}
                  className="home-reveal grid gap-5 border-b border-line py-9 md:grid-cols-[5rem_0.8fr_1.2fr] md:gap-10 md:py-12"
                >
                  <span className="type-small text-quiet">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="type-h4 max-w-md text-navy">
                    {service.title}
                  </h3>
                  <p className="type-body max-w-2xl text-quiet">
                    {service.activities.slice(0, 3).join(" · ")}
                  </p>
                </li>
              ))}
            </ol>
          </Container>
        </Section>

        <Section
          tone="dark"
          spacing="lg"
          className="relative overflow-hidden"
          aria-labelledby="why-luminate-title"
        >
          <div
            className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-white/[0.035] blur-3xl"
            aria-hidden="true"
          />
          <Container size="wide" className="relative">
            <SectionHeading
              eyebrow="Why Luminate"
              title="Creative ambition, delivered with clarity."
              titleId="why-luminate-title"
              copy="A composed working partnership designed to keep complex projects focused, efficient, and dependable."
              inverse
            />
            <ol className="mt-16 grid border-t border-white/15 md:grid-cols-2 lg:grid-cols-4">
              {differentiators.map((item) => (
                <li
                  key={item.title}
                  className="home-reveal border-b border-white/15 py-8 md:px-8 md:odd:border-r lg:border-r lg:last:border-r-0"
                >
                  <span className="type-small text-gold">{item.number}</span>
                  <h3 className="type-h4 mt-10">{item.title}</h3>
                  <p className="type-body mt-4 text-white/65">{item.copy}</p>
                </li>
              ))}
            </ol>
          </Container>
        </Section>

        <Section spacing="lg" aria-labelledby="selected-work-title">
          <Container size="wide">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Selected work"
                title="Projects shaped around people and purpose."
                titleId="selected-work-title"
                copy="A selection of education, culture, and community experiences planned and delivered with care."
              />
              <Button href="/work" variant="secondary">
                Explore our work
              </Button>
            </div>

            <div className="mt-16 grid gap-5 md:grid-cols-2">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className={`group home-reveal relative isolate overflow-hidden rounded-[var(--radius-lg)] bg-navy ${projectLayout[index]}`}
                >
                  <Link
                    href={`/work/${project.slug}`}
                    className="block rounded-[var(--radius-lg)]"
                    aria-label={`View ${project.name} project`}
                  >
                    <div className={`relative h-full ${projectAspect[index]}`}>
                      <Image
                        src={project.coverImage}
                        alt=""
                        fill
                        sizes={
                          index === projects.length - 1
                            ? "(min-width: 1440px) 1312px, (min-width: 768px) 92vw, 100vw"
                            : "(min-width: 1440px) 646px, (min-width: 768px) 46vw, 100vw"
                        }
                        className="object-cover transition-transform duration-700 ease-[var(--ease-emphasized)] group-hover:scale-[1.035]"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-[#06101f]/90 via-[#06101f]/10 to-transparent"
                        aria-hidden="true"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                        <span className="type-small text-white/60">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="type-h4 mt-2 max-w-xl text-balance">
                          {project.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        <Section tone="surface" spacing="lg" aria-labelledby="process-title">
          <Container size="wide">
            <SectionHeading
              eyebrow="Project process"
              title="A clear path from possibility to outcome."
              titleId="process-title"
              copy="Six connected stages keep everyone aligned while leaving room for ideas to evolve."
            />
            <ol className="mt-16 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step) => (
                <li
                  key={step.number}
                  className="home-reveal relative border-t border-line py-8 lg:min-h-56"
                >
                  <span className="type-small text-gold">
                    {String(step.number).padStart(2, "0")}
                  </span>
                  <h3 className="type-h4 mt-8 text-navy">{step.title}</h3>
                  <p className="type-body mt-3 max-w-sm text-quiet">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </Container>
        </Section>

        <Section spacing="lg" aria-labelledby="founder-title">
          <Container size="wide">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div className="home-reveal">
                <Eyebrow>Founder</Eyebrow>
                <p className="mt-8 type-small text-quiet">Luminate Projects</p>
              </div>
              <div className="home-reveal home-reveal-delay-1">
                <h2 id="founder-title" className="type-h2 text-navy">
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

        <Section tone="surface" spacing="lg" aria-labelledby="investment-title">
          <Container size="wide">
            <div className="home-reveal rounded-[var(--radius-lg)] bg-navy px-6 py-12 text-white sm:px-10 sm:py-16 lg:grid lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:px-16">
              <div>
                <Eyebrow className="text-white/65">
                  Starting investment
                </Eyebrow>
                <h2
                  id="investment-title"
                  className="mt-6 font-display text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-none tracking-[-0.055em]"
                >
                  USD {site.pricing.startingAtUsd}
                </h2>
              </div>
              <div className="mt-10 flex flex-col justify-between gap-10 lg:mt-0">
                <p className="type-lead max-w-2xl text-white/72">
                  {site.pricing.note}
                </p>
                <div>
                  <Button href="/contact" variant="light-on-dark">
                    Request a consultation
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section
          spacing="lg"
          className="overflow-hidden"
          aria-labelledby="contact-cta-title"
        >
          <Container size="wide">
            <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              <div className="home-reveal">
                <Eyebrow>Start a conversation</Eyebrow>
                <h2
                  id="contact-cta-title"
                  className="type-display-lg mt-6 max-w-5xl text-balance text-navy"
                >
                  Let&apos;s build meaningful projects together.
                </h2>
                <Button href="/contact" className="mt-9">
                  Contact Luminate
                </Button>
              </div>
              <address className="home-reveal home-reveal-delay-1 not-italic">
                <ul className="divide-y divide-line border-y border-line">
                  <li>
                    <a
                      href={`mailto:${contact.email}`}
                      className="group flex items-center justify-between gap-5 py-5"
                    >
                      <span className="type-small text-quiet">Email</span>
                      <span className="type-nav break-all text-right text-navy transition-colors group-hover:text-gold">
                        {contact.email}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+959448043397"
                      className="group flex items-center justify-between gap-5 py-5"
                    >
                      <span className="type-small text-quiet">Myanmar</span>
                      <span className="type-nav text-navy transition-colors group-hover:text-gold">
                        {contact.phoneMyanmar}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+66805153718"
                      className="group flex items-center justify-between gap-5 py-5"
                    >
                      <span className="type-small text-quiet">
                        Viber / Thailand
                      </span>
                      <span className="type-nav text-navy transition-colors group-hover:text-gold">
                        {contact.viberThailand}
                      </span>
                    </a>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="type-nav mt-6 inline-flex text-navy underline decoration-line underline-offset-8 transition-colors hover:text-gold"
                >
                  Visit the contact page
                </Link>
              </address>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
