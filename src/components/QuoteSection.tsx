"use client";

import React from "react";
import Image from "next/image";

export const QuoteSection: React.FC = () => {
  return (
    <section id="quote" className="py-20 px-4 max-w-5xl mx-auto text-center flex flex-col items-center">
      {/* Accent divider pill */}
      <div className="w-12 h-1 bg-accent-linkedin rounded-full mb-8" />

      {/* Main Testimonial Blockquote */}
      <blockquote className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-charcoal leading-[1.25] text-balance">
        “We manage <span className="text-accent-linkedin">€10M+</span> of influence budget every year. For B2B, Naano simply makes our life easier.”
      </blockquote>

      {/* Author details */}
      <div className="mt-10 flex flex-col items-center">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-border shadow-sm mb-3">
          <Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
            alt="David Zmirov"
            fill
            className="object-cover"
          />
        </div>
        <div className="text-lg font-bold text-charcoal">David Zmirov</div>
        <div className="text-sm font-medium text-muted-foreground mt-0.5">CEO, Zmirov Communication</div>
        <span className="text-xs uppercase tracking-wider font-semibold text-muted-subtle mt-1 bg-border-light px-2.5 py-0.5 rounded-full border border-border/60">
          €10M+ Influence Portfolio
        </span>
      </div>
    </section>
  );
};
