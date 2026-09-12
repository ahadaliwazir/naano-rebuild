export type Category = "SaaS" | "AI & Data" | "Growth & GTM" | "Engineering" | "FinTech" | "Product";

export interface AttributionMetric {
  label: string;
  value: string;
  subtext: string;
}

export interface SamplePost {
  title: string;
  date: string;
  impressions: string;
  clicks: string;
  leadsGenerated: number;
  contentSnippet: string;
}

export interface Creator {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  headline: string;
  bio: string;
  location: string;
  verified: boolean;
  category: Category;
  tags: string[];
  followers: number;
  followersFormatted: string;
  engagementRate: number; // percentage e.g. 4.8
  startingPriceEur: number; // Fixed price per post
  previousBrands: string[];
  attributions: AttributionMetric[];
  samplePosts: SamplePost[];
  rating: number;
  reviewCount: number;
}

export interface CampaignItem {
  creator: Creator;
  quantity: number;
}
