"use client";

import { useState } from "react";

/** Drop Arhaan's photo at /public/arhaan.jpg — until then a branded placeholder shows. */
export default function PhotoSlot({ className = "" }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-brand ${className}`}>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/arhaan.jpg"
          alt="Arhaan Shaikh"
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <div className="absolute inset-0 flex flex-col justify-between p-5 text-cream">
          <span className="label">Photo</span>
          <span className="display text-[9rem] leading-none text-cream md:text-[12rem]">A&rsquo;</span>
          <span className="label">Arhaan Shaikh</span>
        </div>
      )}
    </div>
  );
}
