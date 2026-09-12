"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export const TrustMarquee: React.FC = () => {
  const brands = [
    { name: "Lemlist", category: "Outbound" },
    { name: "Attio", category: "Next-gen CRM" },
    { name: "Folk", category: "Collaborative CRM" },
    { name: "Ringover", category: "VoIP & Telecom" },
    { name: "Leadbay", category: "B2B Intent" },
    { name: "La Growth Machine", category: "Multichannel" },
    { name: "Gojiberry", category: "E-Commerce" },
    { name: "Abyssale", category: "Creative Automation" },
  ];

  return (
    <div className="w-full py-10 border-y border-border/70 bg-white/50 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-5 flex items-center justify-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-subtle">
          Trusted by high-growth European & US B2B software companies
        </p>
      </div>

      <div className="relative w-full mask-marquee">
        <div className="flex items-center gap-12 sm:gap-16 whitespace-nowrap animate-marquee">
          {/* First loop */}
          <div className="inline-flex items-center gap-3 bg-white border border-border rounded-full py-1.5 pl-3 pr-2 shadow-sm">
            <span className="text-xs font-bold text-charcoal">BlogSEO</span>
            <span className="inline-flex items-center gap-1 bg-charcoal/5 text-charcoal text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full">
              CASE STUDY <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>

          {brands.map((brand, i) => (
            <div key={`brand-1-${i}`} className="inline-flex items-center gap-2 text-muted-subtle hover:text-charcoal transition-colors">
              <span className="text-base sm:text-lg font-bold tracking-tight">{brand.name}</span>
              <span className="text-[10px] uppercase font-semibold text-muted-subtle/70 bg-border-light px-1.5 py-0.5 rounded">
                {brand.category}
              </span>
            </div>
          ))}

          {/* Repeat loop for continuous animation */}
          <div className="inline-flex items-center gap-3 bg-white border border-border rounded-full py-1.5 pl-3 pr-2 shadow-sm">
            <span className="text-xs font-bold text-charcoal">BlogSEO</span>
            <span className="inline-flex items-center gap-1 bg-charcoal/5 text-charcoal text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full">
              CASE STUDY <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>

          {brands.map((brand, i) => (
            <div key={`brand-2-${i}`} className="inline-flex items-center gap-2 text-muted-subtle hover:text-charcoal transition-colors">
              <span className="text-base sm:text-lg font-bold tracking-tight">{brand.name}</span>
              <span className="text-[10px] uppercase font-semibold text-muted-subtle/70 bg-border-light px-1.5 py-0.5 rounded">
                {brand.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
