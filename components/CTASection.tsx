import Link from "next/link";
import { WordReveal, FadeUp } from "./Reveal";

export default function CTASection() {
  return (
    <section className="bg-brand text-cream">
      <div className="wrap py-20 md:py-32">
        <h2 className="display max-w-[14ch] text-5xl text-cream sm:text-7xl md:text-[8rem]">
          <WordReveal text="Have a business problem worth solving?" />
        </h2>
        <FadeUp delay={0.3}>
          <p className="body-copy mt-8 max-w-md text-cream">
            Every growth story starts with one honest conversation. Let&rsquo;s have ours.
          </p>
          <Link href="/contact" className="btn btn-light mt-8">
            Start the conversation <span aria-hidden>→</span>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
