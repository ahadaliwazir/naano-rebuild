"use client";

import React from "react";
import Image from "next/image";
import { X, Trash2, ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Send } from "lucide-react";
import { CampaignItem } from "@/types/creator";

interface CampaignDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  campaign: CampaignItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCampaign: () => void;
}

export const CampaignDrawer: React.FC<CampaignDrawerProps> = ({
  isOpen,
  onClose,
  campaign,
  onUpdateQuantity,
  onRemoveItem,
  onClearCampaign,
}) => {
  const [isLaunched, setIsLaunched] = React.useState(false);

  if (!isOpen) return null;

  const totalCost = campaign.reduce(
    (acc, item) => acc + item.creator.startingPriceEur * item.quantity,
    0
  );

  const totalFollowers = campaign.reduce(
    (acc, item) => acc + item.creator.followers * item.quantity,
    0
  );

  const formattedReach =
    totalFollowers > 1000000
      ? `${(totalFollowers / 1000000).toFixed(1)}M`
      : `${(totalFollowers / 1000).toFixed(0)}K`;

  const handleLaunch = () => {
    setIsLaunched(true);
    setTimeout(() => {
      // simulate completed order
    }, 1500);
  };

  const handleReset = () => {
    setIsLaunched(false);
    onClearCampaign();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-white h-full border-l border-border shadow-modal flex flex-col justify-between overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-border flex items-center justify-between bg-canvas/70">
          <div>
            <h3 className="text-lg font-bold text-charcoal">Campaign Builder</h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {campaign.length} {campaign.length === 1 ? "creator" : "creators"} shortlisted
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-muted-subtle hover:text-charcoal hover:bg-border-light rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        {isLaunched ? (
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-charcoal">Campaign Brief Dispatched!</h4>
            <p className="text-xs text-muted-foreground mt-2 max-w-xs leading-relaxed">
              Tracking pixels generated and briefs queued for creator review via Stripe Connect escrow.
            </p>
            <div className="mt-6 p-4 bg-canvas rounded-xl border border-border w-full text-left text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-muted-subtle">Creators:</span>
                <span className="font-semibold text-charcoal">{campaign.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-subtle">Audience Reach:</span>
                <span className="font-semibold text-charcoal">{formattedReach}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-subtle">Escrow Total:</span>
                <span className="font-bold text-emerald-600">€{totalCost}</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="mt-6 w-full py-2.5 bg-charcoal hover:bg-charcoal-hover text-white text-xs font-semibold rounded-xl transition-colors"
            >
              Start New Campaign
            </button>
          </div>
        ) : campaign.length === 0 ? (
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center text-muted-subtle">
            <div className="w-12 h-12 rounded-full bg-border-light flex items-center justify-center mb-3">
              <Sparkles className="w-6 h-6 text-muted-subtle" />
            </div>
            <p className="text-sm font-semibold text-charcoal">Your campaign is empty</p>
            <p className="text-xs text-muted-foreground mt-1 max-w-xs">
              Explore the marketplace below and click &quot;Book&quot; on any creator to build your targeted campaign.
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-5 space-y-3">
            {campaign.map((item) => (
              <div
                key={item.creator.id}
                className="p-3 bg-white border border-border rounded-xl flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border flex-shrink-0">
                    <Image
                      src={item.creator.avatar}
                      alt={item.creator.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-charcoal truncate">
                      {item.creator.name}
                    </div>
                    <div className="text-[11px] text-muted-subtle">
                      €{item.creator.startingPriceEur} / post
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-border rounded-lg bg-canvas text-xs font-semibold">
                    <button
                      onClick={() => onUpdateQuantity(item.creator.id, -1)}
                      className="px-2 py-1 hover:bg-border-light text-charcoal rounded-l-lg"
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.creator.id, 1)}
                      className="px-2 py-1 hover:bg-border-light text-charcoal rounded-r-lg"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.creator.id)}
                    className="p-1.5 text-muted-subtle hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Summary */}
        {!isLaunched && campaign.length > 0 && (
          <div className="p-5 border-t border-border bg-canvas/70 space-y-3">
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Estimated Target Reach:</span>
                <span className="font-bold text-charcoal">{formattedReach} impressions</span>
              </div>
              <div className="flex justify-between">
                <span>Attribution Tracking:</span>
                <span className="font-semibold text-emerald-600">Included (Free)</span>
              </div>
              <div className="flex justify-between text-sm pt-2 border-t border-border/70 font-bold text-charcoal">
                <span>Total Campaign Budget:</span>
                <span className="text-base">€{totalCost}</span>
              </div>
            </div>

            <button
              onClick={handleLaunch}
              className="w-full flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal-hover text-white text-sm font-semibold py-3 rounded-xl shadow-card transition-all"
            >
              <span>Confirm & Dispatch Campaign</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
