import PageHero from "@/components/PageHero";
import Marquee from "@/components/Marquee";
import { ProcessSection, ExecutionSection } from "@/components/Sections";
import CTASection from "@/components/CTASection";

export const metadata = { title: "Process — Arhaan Shaikh" };

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="Performance, not promises."
        intro="A simple four-step roadmap, from understanding your business to results you can measure."
      />
      <ProcessSection />
      <Marquee items={["Listen", "Audit", "Strategize", "Execute"]} dark />
      <ExecutionSection />
      <CTASection />
    </>
  );
}
