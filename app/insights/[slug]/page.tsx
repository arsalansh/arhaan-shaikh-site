import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/data";
import { WordReveal, FadeUp } from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const a = articles.find((x) => x.slug === params.slug);
  return { title: a ? `${a.title} — Arhaan Shaikh` : "Insight" };
}

export default function Article({ params }: { params: { slug: string } }) {
  const idx = articles.findIndex((a) => a.slug === params.slug);
  if (idx === -1) notFound();
  const a = articles[idx];
  const next = articles[(idx + 1) % articles.length];

  return (
    <>
      <section className="border-b-2 border-brand">
        <div className="wrap pb-14 pt-10 md:pb-20 md:pt-16">
          <Link href="/insights" className="label hover:underline">
            ← Notes on growth
          </Link>
          <p className="label mt-10 flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-brand" /> {a.tag}
          </p>
          <h1 className="display mt-6 max-w-[14ch] text-5xl sm:text-7xl md:text-[8rem]">
            <WordReveal text={a.title} />
          </h1>
        </div>
      </section>

      <section className="border-b-2 border-brand">
        <div className="wrap grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <p className="label md:col-span-3">By Arhaan Shaikh</p>
          <FadeUp className="body-copy space-y-6 text-lg md:col-span-7 md:text-xl">
            <p className="text-2xl font-extrabold leading-snug md:text-3xl">{a.excerpt}</p>
            {a.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </FadeUp>
        </div>
      </section>

      <Link
        href={`/insights/${next.slug}`}
        className="group block border-b-2 border-brand transition-colors hover:bg-brand hover:text-cream"
      >
        <div className="wrap flex items-end justify-between gap-6 py-12 md:py-16">
          <div>
            <p className="label mb-3">Next note</p>
            <p className="display text-4xl md:text-7xl" style={{ color: "inherit" }}>
              {next.title}
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
