import Link from "next/link";
import { WordReveal, FadeUp } from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import CTASection from "@/components/CTASection";
import {
  AboutSection,
  ExecutionSection,
  InsightsList,
  ProcessSection,
  QuestionsSection,
  ServicesList,
  StatsRow,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      {/* Hero / banner */}
      <section className="border-b-2 border-brand">
        <div className="wrap pb-14 pt-10 md:pb-20 md:pt-16">
          <FadeUp>
            <div className="label flex flex-wrap justify-between gap-2">
              <span>Growth strategy · Brand · Digital</span>
              <span>Arhaan Shaikh</span>
            </div>
          </FadeUp>
          <h1 className="display mt-10 text-[3.4rem] sm:text-[6rem] md:text-[9.5rem] lg:text-[11rem]">
            <WordReveal text="Turning business problems into growth strategies." stagger={0.07} />
          </h1>
          <FadeUp delay={0.5} className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            <Link href="/contact" className="btn btn-solid">
              Start the conversation <span aria-hidden>→</span>
            </Link>
            <Link href="/services" className="btn">
              See how I help
            </Link>
          </FadeUp>
        </div>
        <div className="border-t-2 border-brand">
          <div className="wrap py-10 md:py-14">
            <StatsRow />
          </div>
        </div>
      </section>

      <AboutSection />
      <Marquee items={["Performance, not promises."]} />
      <QuestionsSection limit={4} />
      <div className="wrap -mt-8 pb-14">
        <Link href="/questions" className="btn">
          All questions <span aria-hidden>→</span>
        </Link>
      </div>
      <ServicesList />
      <ProcessSection />
      <ExecutionSection />
      <InsightsList limit={3} />
      <div className="wrap -mt-8 pb-14">
        <Link href="/insights" className="btn">
          All notes <span aria-hidden>→</span>
        </Link>
      </div>
      <CTASection />
    </>
  );
}
