"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";

export const PricingSection: React.FC<{ onExploreClick: () => void }> = ({ onExploreClick }) => {
  return (
    <section id="pricing" className="py-20 px-4 max-w-5xl mx-auto border-t border-border/70">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-subtle bg-border-light px-3 py-1 rounded-full border border-border">
          Pricing
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal mt-3">
          Simple, transparent plans.
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
          Zero surprise markups. You only pay for posts that go live.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Self-Serve Tier */}
        <div className="bg-white border border-border rounded-3xl p-8 flex flex-col justify-between shadow-subtle hover:border-charcoal/40 transition-all">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-charcoal">Self-Serve</h3>
              <span className="text-[11px] font-bold text-charcoal uppercase tracking-wider bg-border-light px-2.5 py-1 rounded-full">
                For agile teams
              </span>
            </div>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-charcoal">€0</span>
              <span className="text-xs text-muted-subtle">/ month platform fee</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Find creators yourself, review public historical performance data, and book directly.
            </p>

            <ul className="mt-6 space-y-3 text-xs text-charcoal font-medium">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Full access to verified creator marketplace</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Fixed per-post pricing starting at €160</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Direct Stripe Connect escrow checkout</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Standard attribution tracking pixel</span>
              </li>
            </ul>
          </div>

          <button
            onClick={onExploreClick}
            className="mt-8 w-full py-3 bg-white border border-border hover:bg-border-light text-charcoal text-xs font-bold rounded-xl transition-colors text-center"
          >
            Start Self-Serve
          </button>
        </div>

        {/* Managed Tier */}
        <div className="bg-charcoal text-white rounded-3xl p-8 flex flex-col justify-between shadow-card relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent-linkedin/20 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Managed</h3>
              <span className="text-[11px] font-bold text-white uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-full">
                Done For You
              </span>
            </div>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-white">€700</span>
              <span className="text-xs text-slate-300">/ month</span>
            </div>
            <p className="mt-2 text-xs text-slate-300 leading-relaxed">
              Our dedicated growth team handles creator sourcing, angle pitching, copy drafts, and reporting.
            </p>

            <ul className="mt-6 space-y-3 text-xs text-slate-200 font-medium">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-white flex-shrink-0" />
                <span>Everything in Self-Serve</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-white flex-shrink-0" />
                <span>Dedicated B2B creator strategist</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-white flex-shrink-0" />
                <span>Custom angle briefing & copy QA</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-white flex-shrink-0" />
                <span>Custom pipeline attribution dashboards</span>
              </li>
            </ul>
          </div>

          <button
            onClick={onExploreClick}
            className="mt-8 w-full py-3 bg-white hover:bg-slate-100 text-charcoal text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Book Managed Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
