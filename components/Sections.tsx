import Link from "next/link";
import { WordReveal, FadeUp, Stagger, StaggerItem } from "./Reveal";
import PhotoSlot from "./PhotoSlot";
import { articles, execution, process, questions, services, stats } from "@/lib/data";

export function StatsRow() {
  return (
    <Stagger className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
      {stats.map((s) => (
        <StaggerItem key={s.l}>
          <p className="display text-6xl md:text-8xl">{s.n}</p>
          <p className="label mt-2">{s.l}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function AboutSection() {
  return (
    <section className="border-b-2 border-brand">
      <div className="wrap grid gap-10 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-7">
          <p className="label mb-6 flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-brand" /> About
          </p>
          <h2 className="display text-4xl sm:text-6xl md:text-7xl">
            <WordReveal text="Strategy that doesn't stay on paper." />
          </h2>
          <FadeUp delay={0.2} className="body-copy mt-10 max-w-xl space-y-5">
            <p>
              I&rsquo;ve spent the last decade moving between strategy rooms and delivery calendars: building positioning
              for founders, running campaigns, shaping brands, and sitting with teams on the days the plan meets reality.
            </p>
            <p>
              That mix is the point. I&rsquo;ve consulted for businesses across categories and markets, and I&rsquo;ve also
              built and led the teams that execute: brand, content, digital, performance and production.
            </p>
            <p className="text-xl font-extrabold leading-snug md:text-2xl">
              So my advice doesn&rsquo;t stay on paper. It&rsquo;s shaped by years of building the teams that make growth
              happen.
            </p>
          </FadeUp>
        </div>
        <FadeUp className="md:col-span-5" delay={0.15}>
          <PhotoSlot className="aspect-[4/5] w-full" />
          <p className="label mt-3 flex justify-between">
            <span>Arhaan Shaikh</span>
            <span>Growth &amp; brand strategist</span>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

export function QuestionsSection({ limit }: { limit?: number }) {
  const list = limit ? questions.slice(0, limit) : questions;
  return (
    <section className="border-b-2 border-brand">
      <div className="wrap py-16 md:py-24">
        <h2 className="display max-w-[14ch] text-4xl sm:text-6xl md:text-8xl">
          <WordReveal text="Growth starts with clarity. Clarity starts here." />
        </h2>
        <Stagger className="mt-12 border-t-2 border-brand">
          {list.map((item, i) => (
            <StaggerItem key={item.q}>
              <Link
                href={`/services/${item.to}`}
                className="group flex items-baseline gap-6 border-b border-brand/40 py-5 transition-colors hover:bg-brand hover:text-cream md:gap-10 md:px-3"
              >
                <span className="label w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1 text-xl font-extrabold leading-tight tracking-tight md:text-3xl">{item.q}</span>
                <span className="label hidden shrink-0 opacity-0 transition-opacity group-hover:opacity-100 sm:block">
                  See how I help →
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function ServicesList() {
  return (
    <section className="border-b-2 border-brand">
      <div className="wrap py-16 md:py-24">
        <h2 className="display text-4xl sm:text-6xl md:text-8xl">
          <WordReveal text="Where I usually enter the picture." />
        </h2>
        <Stagger className="mt-12 grid gap-px border-2 border-brand bg-brand md:grid-cols-2">
          {services.map((s) => (
            <StaggerItem key={s.slug} className="bg-cream">
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full min-h-[300px] flex-col justify-between p-6 transition-colors duration-300 hover:bg-brand hover:text-cream md:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="display text-6xl md:text-8xl" style={{ color: "inherit" }}>
                    {s.num}
                  </span>
                  <span className="text-3xl font-extrabold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden>
                    ↗
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">{s.title}</h3>
                  <p className="body-copy mt-3 max-w-md">{s.short}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="border-b-2 border-brand">
      <div className="wrap py-16 md:py-24">
        <p className="label mb-4">Roadmap to success</p>
        <h2 className="display text-5xl sm:text-7xl md:text-[8rem]">
          <WordReveal text="Listen → Audit → Strategize → Execute" />
        </h2>
        <Stagger className="mt-14 grid gap-6 md:grid-cols-4">
          {process.map((p) => (
            <StaggerItem key={p.step} className="border-t-4 border-brand pt-4">
              <p className="display text-5xl">{p.step}</p>
              <h3 className="mt-4 text-2xl font-extrabold uppercase tracking-tight">{p.title}</h3>
              <p className="body-copy mt-2">{p.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function ExecutionSection() {
  return (
    <section className="bg-brand text-cream">
      <div className="wrap grid gap-10 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-7">
          <p className="label mb-4">Performance, not promises.</p>
          <h2 className="display text-4xl text-cream sm:text-6xl md:text-7xl">
            <WordReveal text={execution.title} />
          </h2>
        </div>
        <FadeUp className="md:col-span-5" delay={0.2}>
          <p className="body-copy text-cream">{execution.text}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {execution.capabilities.map((c) => (
              <li key={c} className="label rounded-full border-2 border-cream px-4 py-2">
                {c}
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}

export function InsightsList({ limit }: { limit?: number }) {
  const list = limit ? articles.slice(0, limit) : articles;
  return (
    <section className="border-b-2 border-brand">
      <div className="wrap py-16 md:py-24">
        <h2 className="display text-5xl sm:text-7xl md:text-8xl">
          <WordReveal text="Notes on growth." />
        </h2>
        <Stagger className="mt-12 border-t-2 border-brand">
          {list.map((a, i) => (
            <StaggerItem key={a.slug}>
              <Link
                href={`/insights/${a.slug}`}
                className="group flex items-baseline gap-6 border-b border-brand/40 py-6 transition-colors hover:bg-brand hover:text-cream md:gap-10 md:px-3"
              >
                <span className="label w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1">
                  <span className="block text-2xl font-extrabold leading-tight tracking-tight md:text-4xl">{a.title}</span>
                  <span className="body-copy mt-1 block max-w-xl opacity-80">{a.excerpt}</span>
                </span>
                <span className="label hidden shrink-0 sm:block">{a.tag}</span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
