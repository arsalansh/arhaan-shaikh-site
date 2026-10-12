import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/data";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { WordReveal, FadeUp, Stagger, StaggerItem } from "@/components/Reveal";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = services.find((x) => x.slug === params.slug);
  return { title: s ? `${s.title} — Arhaan Shaikh` : "Service" };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const idx = services.findIndex((s) => s.slug === params.slug);
  if (idx === -1) notFound();
  const s = services[idx];
  const next = services[(idx + 1) % services.length];

  return (
    <>
      <PageHero eyebrow={`Service ${s.num}`} title={s.headline} intro={s.intro} />

      {/* Problems */}
      <section className="border-b-2 border-brand">
        <div className="wrap grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <h2 className="display text-4xl md:col-span-5 md:text-6xl">
            <WordReveal text="Sound familiar?" />
          </h2>
          <Stagger className="border-t-2 border-brand md:col-span-7">
            {s.problems.map((p, i) => (
              <StaggerItem key={p} className="flex gap-6 border-b border-brand/40 py-5">
                <span className="label w-8 shrink-0 pt-1">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-xl font-extrabold leading-tight tracking-tight md:text-2xl">{p}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* What I do */}
      <section className="border-b-2 border-brand">
        <div className="wrap py-16 md:py-24">
          <h2 className="display text-4xl md:text-7xl">
            <WordReveal text="What I do." />
          </h2>
          <Stagger className="mt-12 grid gap-px border-2 border-brand bg-brand md:grid-cols-2">
            {s.whatIDo.map((w, i) => (
              <StaggerItem key={w.title} className="bg-cream p-6 md:p-8">
                <p className="display text-5xl">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-6 text-2xl font-extrabold tracking-tight">{w.title}</h3>
                <p className="body-copy mt-2">{w.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Deliverables + ideal for */}
      <section className="bg-brand text-cream">
        <div className="wrap grid gap-12 py-16 md:grid-cols-2 md:py-24">
          <FadeUp>
            <p className="label mb-4">What you get</p>
            <ul className="space-y-3">
              {s.deliverables.map((d) => (
                <li key={d} className="flex gap-3 text-xl font-extrabold leading-tight md:text-2xl">
                  <span className="mt-2 inline-block h-3 w-3 shrink-0 bg-cream" />
                  {d}
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="label mb-4">Ideal for</p>
            <ul className="flex flex-wrap gap-2">
              {s.idealFor.map((d) => (
                <li key={d} className="label rounded-full border-2 border-cream px-4 py-2">
                  {d}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* Next service */}
      <Link
        href={`/services/${next.slug}`}
        className="group block border-b-2 border-brand transition-colors hover:bg-brand hover:text-cream"
      >
        <div className="wrap flex items-end justify-between gap-6 py-12 md:py-16">
          <div>
            <p className="label mb-3">Next service</p>
            <p className="display text-4xl md:text-7xl" style={{ color: "inherit" }}>
              {next.num} {next.title}
            </p>
          </div>
          <span className="text-5xl font-extrabold transition-transform group-hover:translate-x-2" aria-hidden>
            →
          </span>
        </div>
      </Link>

      <CTASection />
    </>
  );
}
