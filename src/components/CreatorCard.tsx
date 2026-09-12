"use client";

import React from "react";
import Image from "next/image";
import { Check, Plus, Star, TrendingUp, Users, ShieldCheck } from "lucide-react";
import { Creator } from "@/types/creator";

interface CreatorCardProps {
  creator: Creator;
  isInCampaign: boolean;
  onToggleCampaign: (creator: Creator) => void;
  onSelectCreator: (creator: Creator) => void;
}

export const CreatorCard: React.FC<CreatorCardProps> = ({
  creator,
  isInCampaign,
  onToggleCampaign,
  onSelectCreator,
}) => {
  return (
    <div className="group relative bg-white border border-border rounded-2xl p-5 hover:border-charcoal/40 transition-all duration-200 hover:shadow-card flex flex-col justify-between">
      <div>
        {/* Header: Avatar, Name, Verified, Category */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative w-13 h-13 rounded-full overflow-hidden border border-border flex-shrink-0">
              <Image
                src={creator.avatar}
                alt={creator.name}
                width={52}
                height={52}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-base font-bold text-charcoal tracking-tight">
                  {creator.name}
                </h3>
                {creator.verified && (
                  <span className="text-accent-linkedin" title="Verified Creator">
                    <ShieldCheck className="w-4 h-4 fill-accent-linkedin/15" />
                  </span>
                )}
              </div>
              <p className="text-xs font-medium text-muted-subtle">@{creator.handle}</p>
            </div>
          </div>

          <span className="text-[11px] font-semibold text-charcoal bg-border-light/80 px-2.5 py-1 rounded-full border border-border/50">
            {creator.category}
          </span>
        </div>

        {/* Headline / Bio */}
        <p className="mt-3.5 text-xs sm:text-[13px] text-muted-foreground line-clamp-2 leading-relaxed">
          {creator.headline}
        </p>

        {/* Core Metrics Grid */}
        <div className="mt-4 grid grid-cols-3 gap-2 py-3 px-3 bg-canvas rounded-xl border border-border/60">
          <div>
            <div className="flex items-center gap-1 text-[11px] text-muted-subtle font-medium">
              <Users className="w-3 h-3" />
              <span>Followers</span>
            </div>
            <div className="text-sm font-bold text-charcoal mt-0.5">
              {creator.followersFormatted}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1 text-[11px] text-muted-subtle font-medium">
              <TrendingUp className="w-3 h-3 text-emerald-600" />
              <span>Engage</span>
            </div>
            <div className="text-sm font-bold text-charcoal mt-0.5">
              {creator.engagementRate}%
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1 text-[11px] text-muted-subtle font-medium">
              <span>Price</span>
            </div>
            <div className="text-sm font-bold text-charcoal mt-0.5">
              €{creator.startingPriceEur}
            </div>
          </div>
        </div>

        {/* Previous Brands */}
        <div className="mt-3 flex items-center gap-1.5 flex-wrap">
          <span className="text-[10px] uppercase font-bold text-muted-subtle tracking-wider">
            Past:
          </span>
          {creator.previousBrands.slice(0, 3).map((brand) => (
            <span
              key={brand}
              className="text-[10px] font-medium text-muted-foreground bg-border-light px-1.5 py-0.5 rounded"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* Card Actions */}
      <div className="mt-5 pt-3.5 border-t border-border/50 flex items-center gap-2">
        <button
          onClick={() => onSelectCreator(creator)}
          className="flex-1 text-xs font-semibold text-charcoal hover:text-black py-2 px-3 rounded-lg border border-border hover:bg-border-light/70 transition-colors text-center"
        >
          View Attribution & Posts
        </button>

        <button
          onClick={() => onToggleCampaign(creator)}
          className={`flex items-center justify-center gap-1 text-xs font-semibold py-2 px-3 rounded-lg transition-all ${
            isInCampaign
              ? "bg-emerald-50 text-emerald-700 border border-emerald-300"
              : "bg-charcoal hover:bg-charcoal-hover text-white"
          }`}
          title={isInCampaign ? "Remove from campaign" : "Add to campaign"}
        >
          {isInCampaign ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Added</span>
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" />
              <span>Book</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
