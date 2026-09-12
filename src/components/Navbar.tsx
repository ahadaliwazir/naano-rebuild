"use client";

import React from "react";
import { Sparkles, ShoppingBag, Globe, ArrowRight, Menu, X } from "lucide-react";

interface NavbarProps {
  campaignCount: number;
  onOpenCampaign: () => void;
  onExploreClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  campaignCount,
  onOpenCampaign,
  onExploreClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto glass-nav rounded-full border border-border px-5 py-2.5 shadow-subtle flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-tight text-charcoal font-sans flex items-center">
              naano<span className="w-1.5 h-1.5 rounded-full bg-accent-linkedin ml-0.5 inline-block"></span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-muted-subtle uppercase tracking-wider bg-border-light px-2 py-0.5 rounded-full border border-border/50">
              B2B Marketplace
            </span>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-[14px] font-medium text-muted-foreground">
            <a href="#how-it-works" className="hover:text-charcoal transition-colors">
              How it works
            </a>
            <button
              onClick={onExploreClick}
              className="hover:text-charcoal transition-colors cursor-pointer"
            >
              Browse Creators
            </button>
            <a href="#quote" className="hover:text-charcoal transition-colors">
              Customers
            </a>
            <a href="#pricing" className="hover:text-charcoal transition-colors">
              Pricing
            </a>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language selector */}
          <button className="hidden lg:flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-charcoal px-2.5 py-1.5 rounded-md hover:bg-border-light transition-colors">
            <Globe className="w-3.5 h-3.5 text-muted-subtle" />
            <span>EN</span>
          </button>

          {/* Campaign shortlist button */}
          <button
            onClick={onOpenCampaign}
            className="relative flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-charcoal bg-white border border-border rounded-full hover:bg-border-light transition-all shadow-sm"
          >
            <ShoppingBag className="w-4 h-4 text-charcoal" />
            <span className="hidden sm:inline">Campaign</span>
            {campaignCount > 0 && (
              <span className="w-5 h-5 flex items-center justify-center text-[11px] font-bold text-white bg-charcoal rounded-full">
                {campaignCount}
              </span>
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={onExploreClick}
            className="flex items-center gap-1.5 bg-charcoal hover:bg-charcoal-hover text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all shadow-sm group"
          >
            <span>Launch campaign</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-charcoal hover:bg-border-light rounded-md"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-lg bg-white border border-border rounded-2xl p-4 shadow-modal flex flex-col gap-3">
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 text-sm font-medium text-charcoal rounded-lg hover:bg-border-light"
          >
            How it works
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onExploreClick();
            }}
            className="text-left px-3 py-2 text-sm font-medium text-charcoal rounded-lg hover:bg-border-light"
          >
            Browse Creators
          </button>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 text-sm font-medium text-charcoal rounded-lg hover:bg-border-light"
          >
            Pricing
          </a>
        </div>
      )}
    </header>
  );
};
