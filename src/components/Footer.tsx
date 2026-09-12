"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-border mt-24 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Brand info */}
        <div className="max-w-sm">
          <div className="text-2xl font-bold tracking-tight text-charcoal flex items-center">
            naano<span className="w-1.5 h-1.5 rounded-full bg-accent-linkedin ml-0.5 inline-block"></span>
          </div>
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            The B2B LinkedIn creator marketplace. Empowering tech companies to find verified industry leaders and measure real revenue impact.
          </p>
          <div className="mt-4 text-xs text-muted-subtle">
            Paris, France • Built for modern engineering & GTM teams.
          </div>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-medium">
          <div>
            <div className="font-bold text-charcoal uppercase tracking-wider mb-3">Product</div>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#marketplace" className="hover:text-charcoal transition-colors">Marketplace</a></li>
              <li><a href="#how-it-works" className="hover:text-charcoal transition-colors">Attribution Pixel</a></li>
              <li><a href="#pricing" className="hover:text-charcoal transition-colors">Pricing Models</a></li>
              <li><a href="#" className="hover:text-charcoal transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-charcoal uppercase tracking-wider mb-3">Company</div>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-charcoal transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-charcoal transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-charcoal transition-colors">For Agencies</a></li>
              <li><a href="#" className="hover:text-charcoal transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-charcoal uppercase tracking-wider mb-3">Connect</div>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-charcoal transition-colors"
                >
                  LinkedIn <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-charcoal transition-colors"
                >
                  Twitter / X <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li><a href="mailto:info@naano.com" className="hover:text-charcoal transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-muted-subtle gap-4">
        <div>© {new Date().getFullYear()} Naano Technologies SAS. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <span>Engineered for 8x Hiring Assessment</span>
          <span>•</span>
          <span>Next.js 15 & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};
