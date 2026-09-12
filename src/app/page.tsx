"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustMarquee } from "@/components/TrustMarquee";
import { QuoteSection } from "@/components/QuoteSection";
import { Marketplace } from "@/components/Marketplace";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";
import { CampaignDrawer } from "@/components/CampaignDrawer";
import { CREATORS } from "@/data/creators";
import { Creator, CampaignItem } from "@/types/creator";

export default function Home() {
  const [campaign, setCampaign] = useState<CampaignItem[]>([]);
  const [isCampaignDrawerOpen, setIsCampaignDrawerOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Hydrate from localStorage once mounted
  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem("naano_campaign");
      if (saved) {
        setCampaign(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load campaign from storage", e);
    }
  }, []);

  // Save to localStorage whenever campaign updates
  useEffect(() => {
    if (!isMounted) return;
    try {
      localStorage.setItem("naano_campaign", JSON.stringify(campaign));
    } catch (e) {
      console.error("Failed to save campaign to storage", e);
    }
  }, [campaign, isMounted]);

  const handleToggleCampaign = (creator: Creator) => {
    setCampaign((prev) => {
      const exists = prev.some((item) => item.creator.id === creator.id);
      if (exists) {
        return prev.filter((item) => item.creator.id !== creator.id);
      } else {
        return [...prev, { creator, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (creatorId: string, delta: number) => {
    setCampaign((prev) =>
      prev
        .map((item) => {
          if (item.creator.id === creatorId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CampaignItem[]
    );
  };

  const handleRemoveItem = (creatorId: string) => {
    setCampaign((prev) => prev.filter((item) => item.creator.id !== creatorId));
  };

  const handleClearCampaign = () => {
    setCampaign([]);
  };

  const scrollToMarketplace = () => {
    const el = document.getElementById("marketplace");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const totalCampaignCount = campaign.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative min-h-screen bg-canvas flex flex-col justify-between">
      {/* Navigation */}
      <Navbar
        campaignCount={totalCampaignCount}
        onOpenCampaign={() => setIsCampaignDrawerOpen(true)}
        onExploreClick={scrollToMarketplace}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onExploreClick={scrollToMarketplace} />
        <TrustMarquee />
        <QuoteSection />
        <Marketplace
          creators={CREATORS}
          campaign={campaign}
          onToggleCampaign={handleToggleCampaign}
        />
        <HowItWorks />
        <PricingSection onExploreClick={scrollToMarketplace} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-out Campaign Drawer */}
      <CampaignDrawer
        isOpen={isCampaignDrawerOpen}
        onClose={() => setIsCampaignDrawerOpen(false)}
        campaign={campaign}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCampaign={handleClearCampaign}
      />
    </div>
  );
}
