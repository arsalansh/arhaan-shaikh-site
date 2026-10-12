import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact — Arhaan Shaikh" };

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Have a business problem worth solving?"
        intro="Every growth story starts with one honest conversation. Let's have ours."
      />
      <section>
        <div className="wrap py-16 md:py-24">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
