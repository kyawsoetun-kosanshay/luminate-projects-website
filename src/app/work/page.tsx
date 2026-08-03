import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Work",
  description:
    "Selected education, cultural, creative, and community projects supported by Luminate Projects.",
  path: "/work",
});

const workProjects = projects.filter(
  (project) => project.galleryImages.length >= 3,
);

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="Selected work"
          title="Meaningful experiences, carefully delivered."
          copy="A selection of projects spanning education, exhibitions, creative practice, and community engagement."
        />

        <Section spacing="lg" aria-labelledby="projects-title">
          <Container size="wide">
            <div className="flex flex-col gap-6 border-b border-line pb-10 md:flex-row md:items-end md:justify-between">
              <div>
                <Eyebrow>Project archive</Eyebrow>
                <h2 id="projects-title" className="type-h2 mt-6 text-navy">
                  {workProjects.length} selected projects.
                </h2>
              </div>
              <p className="type-body max-w-md text-quiet">
                A visual collection of the confirmed work currently available.
              </p>
            </div>

            <div className="mt-14 space-y-20">
              {workProjects.map((project, index) => (
                <article
                  key={project.id}
                  data-project-id={project.id}
                  className="group"
                >
                  <Link
                    href={`/work/${project.slug}`}
                    className="grid rounded-[var(--radius-lg)] gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-14"
                    aria-label={`View ${project.name} project`}
                  >
                    <div className="lg:sticky lg:top-8">
                      <span className="type-small text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="type-h3 mt-5 max-w-lg text-balance text-navy transition-colors group-hover:text-gold">
                        {project.name}
                      </h3>
                      <p className="type-small mt-5 text-quiet">
                        {project.galleryImages.length} confirmed gallery{" "}
                        {project.galleryImages.length === 1 ? "image" : "images"}
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] bg-panel-subtle sm:col-span-2">
                        <Image
                          src={project.galleryImages[0]}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 60vw, 100vw"
                          className="object-cover transition-transform duration-700 ease-[var(--ease-emphasized)] group-hover:scale-[1.02]"
                          priority={index === 0}
                        />
                      </div>
                      {project.galleryImages
                        .slice(1, 3)
                        .map((image) => (
                          <div
                            key={image}
                            className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)] bg-panel-subtle"
                          >
                            <Image
                              src={image}
                              alt=""
                              fill
                              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                              className="object-cover"
                            />
                          </div>
                        ))}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        <Section tone="dark" spacing="lg" aria-labelledby="work-cta-title">
          <Container size="wide">
            <div className="max-w-4xl">
              <Eyebrow className="text-white/65">Your project</Eyebrow>
              <h2 id="work-cta-title" className="type-h2 mt-6 text-balance">
                Have an idea that needs a clear path forward?
              </h2>
              <Button href="/contact" variant="light-on-dark" className="mt-9">
                Start a project
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
