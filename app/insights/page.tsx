import PageHero from "@/components/PageHero";
import { InsightsList } from "@/components/Sections";
import CTASection from "@/components/CTASection";

export const metadata = { title: "Insights — Arhaan Shaikh" };

export default function Insights() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Notes on growth." intro="Short, practical thinking on strategy, brand and performance." />
      <InsightsList />
      <CTASection />
    </>
  );
}
