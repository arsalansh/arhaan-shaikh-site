import { WordReveal, FadeUp } from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b-2 border-brand">
      <div className="wrap pb-14 pt-14 md:pb-20 md:pt-24">
        <FadeUp>
          <p className="label mb-6 flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-brand" /> {eyebrow}
          </p>
        </FadeUp>
        <h1 className="display max-w-[16ch] text-[3.2rem] sm:text-7xl md:text-[7.5rem]">
          <WordReveal text={title} />
        </h1>
        {intro && (
          <FadeUp delay={0.3}>
            <p className="body-copy mt-8 max-w-xl">{intro}</p>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
