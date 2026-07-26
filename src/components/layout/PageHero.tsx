import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  titleId?: string;
};

export function PageHero({
  eyebrow,
  title,
  copy,
  titleId = "page-title",
}: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-navy py-[clamp(5rem,12vw,10rem)] text-white"
      aria-labelledby={titleId}
    >
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/[0.04] blur-3xl"
        aria-hidden="true"
      />
      <Container size="wide" className="relative">
        <Eyebrow className="text-white/65">{eyebrow}</Eyebrow>
        <h1
          id={titleId}
          className="type-display-lg mt-6 max-w-5xl text-balance"
        >
          {title}
        </h1>
        <p className="type-lead mt-8 max-w-2xl text-white/70">{copy}</p>
      </Container>
    </section>
  );
}
