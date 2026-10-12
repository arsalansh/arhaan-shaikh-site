import PageHero from "@/components/PageHero";
import { ServicesList, ProcessSection } from "@/components/Sections";
import CTASection from "@/components/CTASection";

export const metadata = { title: "Services — Arhaan Shaikh" };

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Where I usually enter the picture."
        intro="Six areas of strategy, each with its own approach and deliverables. Open one to see the detail."
      />
      <ServicesList />
      <ProcessSection />
      <CTASection />
    </>
  );
}
