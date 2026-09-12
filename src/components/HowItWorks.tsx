"use client";

import React from "react";
import { Search, Rocket, BarChart3 } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Discover vetted B2B voices",
      description:
        "Every creator is scored on true audience ICP fit and verified engagement. You browse real CPMs, follower demographics, and previous brand collaborations.",
    },
    {
      step: "02",
      icon: Rocket,
      title: "Book at transparent fixed prices",
      description:
        "No agency retainers or endless DM negotiations. Creators set their own per-post rates starting from €160. Book one post or coordinate a multi-creator blitz in minutes.",
    },
    {
      step: "03",
      icon: BarChart3,
      title: "Trace attributed clicks & pipeline",
      description:
        "Naano's privacy-first attribution pixel ties signups, demo requests, and revenue directly back to each specific creator and post. Prove ROI down to the euro.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 max-w-7xl mx-auto border-t border-border/70">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-subtle bg-border-light px-3 py-1 rounded-full border border-border">
          Workflow
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal mt-3">
          How B2B creator campaigns work on Naano.
        </h2>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">
          Reinventing enterprise influence marketing with developer-grade attribution and fixed pricing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="bg-white border border-border rounded-3xl p-7 flex flex-col justify-between hover:border-charcoal/30 transition-all shadow-subtle hover:shadow-card group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black text-charcoal/20 group-hover:text-accent-linkedin transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-canvas border border-border flex items-center justify-center text-charcoal">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 text-[11px] font-bold text-charcoal uppercase tracking-wider">
                Full transparency • Zero retainers
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
