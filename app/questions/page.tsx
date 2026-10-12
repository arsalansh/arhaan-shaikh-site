import PageHero from "@/components/PageHero";
import { QuestionsSection } from "@/components/Sections";
import CTASection from "@/components/CTASection";

export const metadata = { title: "Questions — Arhaan Shaikh" };

export default function Questions() {
  return (
    <>
      <PageHero
        eyebrow="Core questions"
        title="Growth starts with clarity."
        intro="The questions founders and marketing teams bring me most often. Pick one to see how I approach it."
      />
      <QuestionsSection />
      <CTASection />
    </>
  );
}
