import Link from "next/link";
import { nav, services } from "@/lib/data";
import { Logo } from "./Nav";

export default function Footer() {
  return (
    <footer className="bg-brand text-cream">
      <div className="wrap py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="display mt-8 text-4xl text-cream md:text-6xl">
              Have a business
              <br />
              problem worth
              <br />
              solving?
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="label mb-4 opacity-80">Pages</p>
            <ul className="space-y-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-sm font-bold uppercase hover:underline">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/questions" className="text-sm font-bold uppercase hover:underline">
                  Questions
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="label mb-4 opacity-80">Services</p>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm font-bold hover:underline">
                    {s.num} &nbsp;{s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-2 border-t border-cream/30 pt-6 text-xs font-bold uppercase tracking-wide sm:flex-row">
          <span>© {new Date().getFullYear()} Arhaan Shaikh</span>
          <span>Growth starts with clarity.</span>
        </div>
      </div>
    </footer>
  );
}
