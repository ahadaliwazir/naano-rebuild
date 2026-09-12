"use client";

import React from "react";
import Image from "next/image";
import { X, ShieldCheck, TrendingUp, Users, MapPin, Check, Plus, ExternalLink, Activity } from "lucide-react";
import { Creator } from "@/types/creator";

interface CreatorModalProps {
  creator: Creator | null;
  isOpen: boolean;
  isInCampaign: boolean;
  onClose: () => void;
  onToggleCampaign: (creator: Creator) => void;
}

export const CreatorModal: React.FC<CreatorModalProps> = ({
  creator,
  isOpen,
  isInCampaign,
  onClose,
  onToggleCampaign,
}) => {
  if (!isOpen || !creator) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl border border-border shadow-modal max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-border flex items-start justify-between gap-4 bg-canvas/60">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
              <Image
                src={creator.avatar}
                alt={creator.name}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-charcoal">{creator.name}</h2>
                {creator.verified && (
                  <span className="text-accent-linkedin" title="Verified Creator">
                    <ShieldCheck className="w-5 h-5 fill-accent-linkedin/20" />
                  </span>
                )}
                <span className="text-xs font-semibold text-charcoal bg-white border border-border px-2.5 py-0.5 rounded-full">
                  {creator.category}
                </span>
              </div>
              <p className="text-xs font-medium text-muted-subtle mt-0.5">@{creator.handle}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <MapPin className="w-3.5 h-3.5 text-muted-subtle" />
                <span>{creator.location}</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-muted-subtle hover:text-charcoal hover:bg-border-light rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Bio */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-subtle mb-1.5">
              About & Audience Focus
            </h4>
            <p className="text-sm text-charcoal leading-relaxed">{creator.bio}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {creator.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-charcoal bg-border-light px-2.5 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Attribution Metrics Grid */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-4 h-4 text-accent-linkedin" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-subtle">
                Pixel-Attributed Performance
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {creator.attributions.map((attr, i) => (
                <div key={i} className="p-3.5 bg-canvas rounded-2xl border border-border">
                  <div className="text-xs font-medium text-muted-subtle">{attr.label}</div>
                  <div className="text-xl font-bold text-charcoal mt-1">{attr.value}</div>
                  <div className="text-[11px] text-emerald-600 font-medium mt-0.5">
                    {attr.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Sponsored Posts */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-subtle mb-3">
              Recent Sponsored Post Teardowns
            </h4>
            <div className="space-y-3">
              {creator.samplePosts.map((post, i) => (
                <div
                  key={i}
                  className="p-4 bg-white border border-border rounded-2xl hover:border-charcoal/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="text-sm font-bold text-charcoal leading-snug">
                      {post.title}
                    </h5>
                    <span className="text-[11px] text-muted-subtle whitespace-nowrap">
                      {post.date}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    “{post.contentSnippet}”
                  </p>
                  <div className="mt-3 pt-3 border-t border-border/60 flex items-center gap-4 text-xs font-medium text-muted-foreground">
                    <div>
                      <span className="text-charcoal font-bold">{post.impressions}</span> views
                    </div>
                    <div>
                      <span className="text-charcoal font-bold">{post.clicks}</span> tracked clicks
                    </div>
                    <div>
                      <span className="text-emerald-600 font-bold">+{post.leadsGenerated}</span> qualified leads
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-border bg-canvas/60 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs text-muted-subtle font-medium">Fixed per-post rate</div>
            <div className="text-2xl font-bold text-charcoal">€{creator.startingPriceEur}</div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="text-xs sm:text-sm font-semibold text-charcoal hover:bg-border-light px-4 py-2.5 rounded-xl transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => onToggleCampaign(creator)}
              className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm ${
                isInCampaign
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "bg-charcoal hover:bg-charcoal-hover text-white"
              }`}
            >
              {isInCampaign ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Booked in Campaign</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add to Campaign</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
