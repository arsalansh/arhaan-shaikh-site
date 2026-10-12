"use client";

import { useState } from "react";
import { services } from "@/lib/data";

const field =
  "w-full border-b-2 border-brand bg-transparent py-3 text-lg font-bold text-brand placeholder:text-brand/50 focus:outline-none focus:border-ink";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="max-w-2xl">
        <p className="display text-6xl md:text-8xl">Thank you.</p>
        <p className="body-copy mt-6">Your message is in. I&rsquo;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form
      className="grid max-w-3xl gap-8"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: connect to email / CRM (e.g. Formspree, Resend, or an API route).
        setSent(true);
      }}
    >
      <label className="block">
        <span className="label">Name</span>
        <input required name="name" className={field} placeholder="Your name" />
      </label>
      <label className="block">
        <span className="label">Email</span>
        <input required type="email" name="email" className={field} placeholder="you@company.com" />
      </label>
      <label className="block">
        <span className="label">Company</span>
        <input name="company" className={field} placeholder="Brand or business name" />
      </label>
      <label className="block">
        <span className="label">What do you need help with?</span>
        <select name="service" className={field} defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="not-sure">Not sure yet</option>
        </select>
      </label>
      <label className="block">
        <span className="label">Tell me about the problem</span>
        <textarea required name="message" rows={4} className={field} placeholder="A few lines is plenty" />
      </label>
      <div>
        <button type="submit" className="btn btn-solid">
          Send message <span aria-hidden>→</span>
        </button>
      </div>
    </form>
  );
}
