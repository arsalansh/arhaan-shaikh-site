"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { nav } from "@/lib/data";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${light ? "text-cream" : "text-brand"}`} aria-label="Arhaan Shaikh home">
      <span className="text-[34px] font-extrabold leading-none tracking-[-0.06em]">
        A<span className="align-top">&rsquo;</span>
      </span>
      <span className="label hidden leading-tight sm:block">
        Arhaan
        <br />
        Shaikh
      </span>
    </Link>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-brand/15 bg-cream/90 backdrop-blur">
      <div className="wrap flex h-[68px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`group relative text-sm font-bold uppercase tracking-wide ${isActive(n.href) ? "text-brand" : "text-brand/70 hover:text-brand"}`}
            >
              {n.label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-brand transition-all duration-300 ${isActive(n.href) ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn btn-solid hidden md:inline-flex !py-2">
          Let&rsquo;s talk
        </Link>
        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D4322E" strokeWidth="2.5" strokeLinecap="round">
            {open ? (
              <path d="M5 5l14 14M19 5L5 19" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-brand/15 bg-cream md:hidden">
          <div className="wrap flex flex-col gap-5 py-6">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="display text-4xl">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
