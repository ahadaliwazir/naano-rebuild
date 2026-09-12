"use client";

import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, ArrowUpDown, Sparkles, Filter } from "lucide-react";
import { Creator, Category, CampaignItem } from "@/types/creator";
import { CreatorCard } from "./CreatorCard";
import { CreatorModal } from "./CreatorModal";

interface MarketplaceProps {
  creators: Creator[];
  campaign: CampaignItem[];
  onToggleCampaign: (creator: Creator) => void;
}

const CATEGORIES: Array<"All" | Category> = [
  "All",
  "SaaS",
  "AI & Data",
  "Growth & GTM",
  "Engineering",
  "FinTech",
  "Product",
];

export const Marketplace: React.FC<MarketplaceProps> = ({
  creators,
  campaign,
  onToggleCampaign,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | Category>("All");
  const [sortBy, setSortBy] = useState<"recommended" | "followers" | "price-asc" | "engagement">("recommended");
  const [activeModalCreator, setActiveModalCreator] = useState<Creator | null>(null);

  // Filter and Sort Logic
  const filteredCreators = useMemo(() => {
    return creators
      .filter((creator) => {
        // Category filter
        if (selectedCategory !== "All" && creator.category !== selectedCategory) {
          return false;
        }
        // Search query filter
        if (searchQuery.trim() !== "") {
          const query = searchQuery.toLowerCase();
          const matchName = creator.name.toLowerCase().includes(query);
          const matchHeadline = creator.headline.toLowerCase().includes(query);
          const matchBio = creator.bio.toLowerCase().includes(query);
          const matchTags = creator.tags.some((t) => t.toLowerCase().includes(query));
          const matchBrands = creator.previousBrands.some((b) => b.toLowerCase().includes(query));
          return matchName || matchHeadline || matchBio || matchTags || matchBrands;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "followers") {
          return b.followers - a.followers;
        }
        if (sortBy === "price-asc") {
          return a.startingPriceEur - b.startingPriceEur;
        }
        if (sortBy === "engagement") {
          return b.engagementRate - a.engagementRate;
        }
        return b.rating - a.rating; // default recommended
      });
  }, [creators, selectedCategory, searchQuery, sortBy]);

  const campaignIds = useMemo(
    () => new Set(campaign.map((item) => item.creator.id)),
    [campaign]
  );

  return (
    <section id="marketplace" className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-subtle bg-border-light px-2.5 py-1 rounded-full border border-border mb-3">
            <Sparkles className="w-3.5 h-3.5 text-charcoal" />
            <span>Interactive Marketplace</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal">
            Work with verified LinkedIn voices.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl">
            Filter by audience ICP, check historical attributed conversion rates, and book guaranteed sponsored posts.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-subtle" />
          <input
            type="text"
            placeholder="Search by topic, skill, or brand..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-border rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-charcoal placeholder:text-muted-subtle focus:outline-none focus:border-charcoal shadow-subtle transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-subtle hover:text-charcoal"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Category Pills & Sorting Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-border mb-8">
        {/* Category horizontal scroll */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-semibold px-3.5 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-charcoal text-white shadow-sm"
                  : "bg-white text-muted-foreground border border-border hover:bg-border-light hover:text-charcoal"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort selector & Count */}
        <div className="flex items-center justify-between lg:justify-end gap-4 text-xs font-medium">
          <span className="text-muted-subtle">
            Showing <strong className="text-charcoal">{filteredCreators.length}</strong> vetted creators
          </span>

          <div className="flex items-center gap-2 bg-white border border-border rounded-xl px-3 py-1.5 shadow-subtle">
            <ArrowUpDown className="w-3.5 h-3.5 text-muted-subtle" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-charcoal font-semibold focus:outline-none cursor-pointer text-xs"
            >
              <option value="recommended">Recommended</option>
              <option value="followers">Most Followers</option>
              <option value="engagement">Highest Engagement</option>
              <option value="price-asc">Price: Low to High</option>
            </select>
          </div>
        </div>
      </div>

      {/* Creators Grid */}
      {filteredCreators.length === 0 ? (
        <div className="py-16 text-center bg-white border border-border rounded-3xl p-8 max-w-lg mx-auto">
          <p className="text-base font-bold text-charcoal">No creators match your query</p>
          <p className="text-xs text-muted-foreground mt-1">
            Try resetting your filters or searching for terms like &quot;SaaS&quot;, &quot;AI&quot;, or &quot;Engineering&quot;.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="mt-4 text-xs font-semibold text-charcoal bg-border-light px-4 py-2 rounded-lg hover:bg-border transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCreators.map((creator) => (
            <CreatorCard
              key={creator.id}
              creator={creator}
              isInCampaign={campaignIds.has(creator.id)}
              onToggleCampaign={onToggleCampaign}
              onSelectCreator={(c) => setActiveModalCreator(c)}
            />
          ))}
        </div>
      )}

      {/* Creator Detail Slide-over Modal */}
      <CreatorModal
        creator={activeModalCreator}
        isOpen={Boolean(activeModalCreator)}
        isInCampaign={activeModalCreator ? campaignIds.has(activeModalCreator.id) : false}
        onClose={() => setActiveModalCreator(null)}
        onToggleCampaign={onToggleCampaign}
      />
    </section>
  );
};
