import PageHero from "@/components/PageHero";
import { AboutSection, ExecutionSection, StatsRow } from "@/components/Sections";
import CTASection from "@/components/CTASection";

export const metadata = { title: "About — Arhaan Shaikh" };

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Strategy and delivery under one roof."
        intro="A decade between strategy rooms and delivery calendars, across categories and markets."
      />
      <AboutSection />
      <section className="border-b-2 border-brand">
        <div className="wrap py-14 md:py-20">
          <StatsRow />
        </div>
      </section>
      <ExecutionSection />
      <CTASection />
    </>
  );
}
