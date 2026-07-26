import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  getProjectBySlug,
  projects,
  type Project,
} from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return createPageMetadata({
    title: project.name,
    description:
      project.objective ??
      project.overview ??
      `Explore ${project.name}, a Luminate Projects case study.`,
    path: `/work/${project.slug}`,
    image: project.coverImage,
  });
}

function ProjectInformation({ project }: { project: Project }) {
  const details = [
    ["Client", project.client],
    ["Role", project.role],
    ["Date", project.date],
    ["Location", project.location],
  ].filter((detail): detail is [string, string] => Boolean(detail[1]));

  if (!details.length) return null;

  return (
    <Section spacing="sm" aria-labelledby="project-information-title">
      <Container size="wide">
        <h2 id="project-information-title" className="sr-only">
          Project information
        </h2>
        <dl className="grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
          {details.map(([label, value]) => (
            <div
              key={label}
              className="min-w-0 border-b border-line py-7 sm:px-6 sm:odd:border-r lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0"
            >
              <dt className="type-eyebrow text-quiet">{label}</dt>
              <dd className="type-body mt-3 break-words font-semibold text-navy">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject =
    currentIndex > 0 ? projects[currentIndex - 1] : undefined;
  const nextProject =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : undefined;

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <article>
          <header className="bg-navy py-[clamp(4.5rem,10vw,8rem)] text-white">
            <Container size="wide">
              {project.category ? (
                <Eyebrow className="text-white/65">{project.category}</Eyebrow>
              ) : null}
              <h1 className="type-display-lg mt-6 max-w-5xl text-balance">
                {project.name}
              </h1>
              <div className="mt-9 flex max-w-4xl flex-wrap gap-x-8 gap-y-3 text-white/70">
                {project.client ? (
                  <p className="type-body">{project.client}</p>
                ) : null}
                {project.date ? (
                  <p className="type-body">{project.date}</p>
                ) : null}
                {project.location ? (
                  <p className="type-body">{project.location}</p>
                ) : null}
              </div>
            </Container>
          </header>

          <div className="bg-navy pb-[var(--section-space-sm)]">
            <Container size="wide">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] bg-panel-subtle md:aspect-[16/9]">
                <Image
                  src={project.coverImage}
                  alt={`${project.name} project`}
                  fill
                  priority
                  sizes="(min-width: 1440px) 1312px, calc(100vw - 2 * clamp(1.25rem, 4vw, 4rem))"
                  className="object-cover"
                />
              </div>
            </Container>
          </div>

          <ProjectInformation project={project} />

          {project.overview ? (
            <Section spacing="md" aria-labelledby="overview-title">
              <Container size="wide">
                <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
                  <Eyebrow>Project overview</Eyebrow>
                  <div>
                    <h2 id="overview-title" className="type-h2 text-navy">
                      Leading the work from coordination to delivery.
                    </h2>
                    <p className="type-lead mt-8 max-w-3xl text-quiet">
                      {project.overview}
                    </p>
                  </div>
                </div>
              </Container>
            </Section>
          ) : null}

          {project.objective ? (
            <Section spacing="md" aria-labelledby="objective-title">
              <Container size="wide">
                <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
                  <Eyebrow>Objective</Eyebrow>
                  <h2
                    id="objective-title"
                    className="type-h2 max-w-4xl text-balance text-navy"
                  >
                    {project.objective}
                  </h2>
                </div>
              </Container>
            </Section>
          ) : null}

          {project.responsibilities?.length ? (
            <Section
              tone="surface"
              spacing="md"
              aria-labelledby="responsibilities-title"
            >
              <Container size="wide">
                <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
                  <div>
                    <Eyebrow>Key responsibilities</Eyebrow>
                    <h2
                      id="responsibilities-title"
                      className="type-h3 mt-6 text-navy"
                    >
                      Focused coordination across the project.
                    </h2>
                  </div>
                  <ol className="border-t border-line">
                    {project.responsibilities.map((responsibility, index) => (
                      <li
                        key={responsibility}
                        className="grid gap-5 border-b border-line py-7 sm:grid-cols-[4rem_1fr]"
                      >
                        <span className="type-small text-gold">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="type-lead text-navy">{responsibility}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </Container>
            </Section>
          ) : null}

          {project.result ? (
            <Section tone="dark" spacing="md" aria-labelledby="result-title">
              <Container size="wide">
                <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
                  <Eyebrow className="text-white/65">Result</Eyebrow>
                  <h2
                    id="result-title"
                    className="type-h2 max-w-4xl text-balance"
                  >
                    {project.result}
                  </h2>
                </div>
              </Container>
            </Section>
          ) : null}

          {project.statistics?.length ? (
            <Section spacing="md" aria-labelledby="statistics-title">
              <Container size="wide">
                <Eyebrow>Project scale</Eyebrow>
                <h2 id="statistics-title" className="type-h2 mt-6 text-navy">
                  Coordination at scale.
                </h2>
                <dl className="mt-14 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
                  {project.statistics.map((statistic) => (
                    <div
                      key={statistic.label}
                      className="border-b border-line py-8 sm:px-6 sm:odd:border-r lg:border-r lg:last:border-r-0"
                    >
                      <dd className="font-display text-5xl font-semibold tracking-[-0.04em] text-navy">
                        {statistic.value}
                      </dd>
                      <dt className="type-body mt-4 max-w-xs text-quiet">
                        {statistic.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </Container>
            </Section>
          ) : null}

          <Section
            tone="surface"
            spacing="lg"
            aria-labelledby="project-gallery-title"
          >
            <Container size="wide">
              <Eyebrow>Project gallery</Eyebrow>
              <h2 id="project-gallery-title" className="type-h2 mt-6 text-navy">
                Moments from the project.
              </h2>
              <div
                className={`mt-14 grid items-start gap-5 ${
                  project.galleryAspectRatios?.length === 4
                    ? "lg:grid-cols-2"
                    : "md:grid-cols-2"
                }`}
              >
                {project.galleryImages.map((image, index) => {
                  const orientation =
                    project.galleryOrientations?.[index] ?? "landscape";
                  const aspectRatio = project.galleryAspectRatios?.[index];
                  const aspectClass =
                    aspectRatio === "3/2"
                      ? "aspect-[3/2]"
                      : aspectRatio === "3/4" || orientation === "portrait"
                        ? "aspect-[3/4] md:row-span-2"
                        : "aspect-[4/3]";

                  return (
                    <figure
                      key={image}
                      className={`relative overflow-hidden rounded-[var(--radius-lg)] bg-panel-subtle ${aspectClass}`}
                    >
                      <Image
                        src={image}
                        alt={`${project.name}, project image ${index + 1}`}
                        fill
                        sizes={
                          project.galleryAspectRatios?.length === 4
                            ? "(min-width: 1024px) 50vw, 100vw"
                            : "(min-width: 768px) 50vw, 100vw"
                        }
                        className="object-cover"
                      />
                    </figure>
                  );
                })}
              </div>
            </Container>
          </Section>

          <Section spacing="sm" aria-labelledby="project-navigation-title">
            <Container size="wide">
              <h2 id="project-navigation-title" className="sr-only">
                Project navigation
              </h2>
              <nav
                aria-label="Project navigation"
                className="grid gap-8 border-y border-line py-8 sm:grid-cols-2"
              >
                <div>
                  {previousProject ? (
                    <Link
                      href={`/work/${previousProject.slug}`}
                      className="group inline-flex min-h-11 flex-col justify-center"
                    >
                      <span className="type-eyebrow text-quiet">
                        Previous project
                      </span>
                      <span className="type-h4 mt-2 text-navy group-hover:text-gold">
                        {previousProject.name}
                      </span>
                    </Link>
                  ) : null}
                </div>
                <div className="sm:text-right">
                  {nextProject ? (
                    <Link
                      href={`/work/${nextProject.slug}`}
                      className="group inline-flex min-h-11 flex-col justify-center"
                    >
                      <span className="type-eyebrow text-quiet">
                        Next project
                      </span>
                      <span className="type-h4 mt-2 text-navy group-hover:text-gold">
                        {nextProject.name}
                      </span>
                    </Link>
                  ) : null}
                </div>
              </nav>
              <Button href="/work" variant="secondary" className="mt-8">
                Back to all work
              </Button>
            </Container>
          </Section>
        </article>

        <Section tone="dark" spacing="lg" aria-labelledby="project-cta-title">
          <Container size="wide">
            <div className="max-w-4xl">
              <Eyebrow className="text-white/65">Start a conversation</Eyebrow>
              <h2 id="project-cta-title" className="type-h2 mt-6 text-balance">
                Have a project that needs a clear path forward?
              </h2>
              <Button href="/contact" variant="light-on-dark" className="mt-9">
                Contact Luminate
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
