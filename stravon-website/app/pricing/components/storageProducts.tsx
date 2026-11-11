import type { Fact, PackageCategory, ProductPackage } from "./types";

/* ------------------------------------------------------------------ */
/* Shared lists                                                        */
/* ------------------------------------------------------------------ */

const STORAGE_INCLUDED: string[] = [
  "Unlimited bandwidth — no charges for downloads, page loads, or file access",
  "Automatic image compression and optimization on delivery",
  "Global CDN delivery via SCALE's worldwide network",
  "DDoS protection and enterprise-grade security",
  "Storage usage dashboard and alerts",
];

const STREAMING_INCLUDED: string[] = [
  "Adaptive bitrate streaming — automatic quality switching based on viewer connection",
  "Multiple quality outputs per video: 1080p, 720p, 480p, 360p",
  "Automatic video transcoding on upload",
  "Global CDN delivery with zero bandwidth fees",
  "Video analytics and delivery reports",
  "Annual billing option with 2 months free",
];

/* ------------------------------------------------------------------ */
/* Standard storage (monthly, annual option)                           */
/* ------------------------------------------------------------------ */

interface StorageTier {
  id: string;
  name: string;
  gb: number;
  monthly: number;
  annual: number;
  photos: string;
  tagline: string;
  bestFor: string;
}

const STORAGE_TIERS: StorageTier[] = [
  {
    id: "micro",
    name: "Micro",
    gb: 2,
    monthly: 800,
    annual: 8800,
    photos: "~5,000 photos",
    tagline: "For new businesses, small blogs and simple landing pages.",
    bestFor: "New businesses, small blogs, simple sites",
  },
  {
    id: "entry",
    name: "Entry",
    gb: 5,
    monthly: 1000,
    annual: 11000,
    photos: "~12,500 photos",
    tagline: "For ongoing businesses, medium blogs and simple sites.",
    bestFor: "Ongoing businesses, medium blogs, simple sites",
  },
  {
    id: "starter",
    name: "Starter",
    gb: 10,
    monthly: 1500,
    // Source document lists 25,000. 1,500 x 12 - 1,500 (1 month free) = 16,500.
    annual: 16500,
    photos: "~25,000 photos",
    tagline: "For growing shops, active blogs and rental sites.",
    bestFor: "Growing shops, active blogs, rental sites",
  },
  {
    id: "growth",
    name: "Growth",
    gb: 25,
    monthly: 3000,
    annual: 30000,
    photos: "~62,500 photos",
    tagline: "For established businesses and large catalogs.",
    bestFor: "Established businesses, large catalogs",
  },
  {
    id: "scale",
    name: "Scale",
    gb: 50,
    monthly: 6000,
    annual: 60000,
    photos: "~125,000 photos",
    tagline: "For high-volume stores and media-heavy platforms.",
    bestFor: "High-volume stores, media-heavy platforms",
  },
];

const storagePackage = (t: StorageTier): ProductPackage => ({
  id: `storage-${t.id}`,
  name: t.name,
  tagline: t.tagline,
  targetClient: t.bestFor,
  price: { type: "fixed", amount: t.monthly, period: "mo" },
  annualPrice: t.annual,
  features: [
    `${t.gb} GB storage`,
    `Approx. ${t.photos}`,
    ...STORAGE_INCLUDED,
    "Annual billing option with up to 2 months free",
  ],
  facts: [
    { label: "Storage", value: `${t.gb} GB` },
    { label: "Approx. images supported", value: t.photos },
    {
      label: "Overage",
      value: "KES 100/GB",
      note: "KES 80/GB during promotional periods",
    },
  ],
});

/* ------------------------------------------------------------------ */
/* Annual managed storage                                              */
/* ------------------------------------------------------------------ */

const MANAGED_TARGET =
  "Clients running e-commerce stores, property management systems, rental platforms, media libraries, and other storage-intensive applications.";

const managedPackage = (
  id: string,
  name: string,
  storage: string,
  annual: number | null,
): ProductPackage => {
  const facts: Fact[] = [
    { label: "Storage", value: storage },
    { label: "Term", value: "12 months, billed annually" },
  ];
  return {
    id: `managed-${id}`,
    name,
    tagline: `${storage} allocation for 12 months.`,
    targetClient: MANAGED_TARGET,
    price:
      annual === null
        ? { type: "quote", label: "Custom Quote" }
        : { type: "fixed", amount: annual, period: "yr" },
    features: [
      `${storage} storage`,
      "12-month allocation, billed annually",
      ...STORAGE_INCLUDED,
    ],
    facts,
  };
};

/* ------------------------------------------------------------------ */
/* Streaming                                                           */
/* ------------------------------------------------------------------ */

interface StreamTier {
  id: string;
  name: string;
  storage: string;
  delivery: string;
  monthly: number;
  annual: number;
  tagline: string;
  bestFor: string;
}

const STREAM_TIERS: StreamTier[] = [
  {
    id: "starter",
    name: "Stream Starter",
    storage: "2,000 mins (~33 hrs)",
    delivery: "10,000 mins/mo",
    monthly: 4500,
    annual: 45000,
    tagline: "For small course platforms and event recordings.",
    bestFor: "Small course platforms, event recordings",
  },
  {
    id: "pro",
    name: "Stream Pro",
    storage: "5,000 mins (~83 hrs)",
    delivery: "30,000 mins/mo",
    monthly: 9000,
    annual: 90000,
    tagline: "For growing streaming platforms and course libraries.",
    bestFor: "Growing streaming platforms, course libraries",
  },
  {
    id: "scale",
    name: "Stream Scale",
    storage: "10,000 mins (~166 hrs)",
    delivery: "100,000 mins/mo",
    monthly: 18000,
    annual: 180000,
    tagline: "For full streaming platforms and large video libraries.",
    bestFor: "Full streaming platforms, large video libraries",
  },
];

const streamPackage = (t: StreamTier): ProductPackage => ({
  id: `stream-${t.id}`,
  name: t.name,
  tagline: t.tagline,
  targetClient: t.bestFor,
  price: { type: "fixed", amount: t.monthly, period: "mo" },
  annualPrice: t.annual,
  features: [
    `${t.storage} storage`,
    `${t.delivery} delivery`,
    ...STREAMING_INCLUDED,
  ],
  facts: [
    { label: "Storage", value: t.storage },
    { label: "Delivery", value: t.delivery },
  ],
});

/* ------------------------------------------------------------------ */
/* Categories                                                          */
/* ------------------------------------------------------------------ */

export const STORAGE_PRODUCTS: PackageCategory[] = [
  {
    id: "storage-packages",
    label: "Storage Packages (Images & Files)",
    description:
      "For clients with e-commerce stores, blogs, rental sites, and other image or document-heavy platforms. All packages include unlimited bandwidth — no additional charges for downloads or page loads.",
    packages: STORAGE_TIERS.map(storagePackage),
    infoBlocks: [
      {
        id: "storage-overage",
        title: "Storage overage policy",
        intro:
          "When you exceeds your monthly storage limit, overage is charged at a flat KES 100/GB. During promotional periods, holidays, and special events the rate is reduced to KES 80/GB. Discounted periods are announced in advance and applied automatically to all active clients.",
        table: {
          columns: [
            "Package",
            "Standard overage",
            "Discounted overage",
            "Example",
            "Upgrade price",
          ],
          rows: [
            [
              "Micro (2GB)",
              "KES 100/GB",
              "KES 80/GB",
              "2GB over: KES 800 + KES 200 = KES 1,000",
              "Entry = KES 1,000 (same price)",
            ],
            [
              "Entry (5GB)",
              "KES 100/GB",
              "KES 80/GB",
              "5GB over: KES 1,000 + KES 500 = KES 1,500",
              "Starter = KES 1,500 (same price)",
            ],
            [
              "Starter (10GB)",
              "KES 100/GB",
              "KES 80/GB",
              "15GB over: KES 1,500 + KES 1,500 = KES 3,000",
              "Growth = KES 3,000 (same price)",
            ],
            [
              "Growth (25GB)",
              "KES 100/GB",
              "KES 80/GB",
              "25GB over: KES 3,000 + KES 2,500 = KES 5,500",
              "Scale = KES 6,000",
            ],
            [
              "Scale (50GB)",
              "KES 100/GB",
              "KES 80/GB",
              "5GB over: KES 6,000 + KES 500 = KES 6,500",
              "Custom plan — contact us",
            ],
          ],
        },
      },
      {
        id: "storage-thresholds",
        title: "Storage warning thresholds",
        intro:
          "You receive automatic notifications as they approach their storage limit:",
        items: [
          "80% of storage used — warning: “You are approaching your storage limit”",
          "90% of storage used — upgrade prompt: “You are almost full — consider upgrading to avoid overage charges”",
          "100% reached — overage charges begin automatically at KES 100/GB",
        ],
      },
    ],
  },
  {
    id: "annual-managed-storage",
    label: "Annual Managed Storage",
    description:
      "For clients running e-commerce stores, property management systems, rental platforms, media libraries, and other storage-intensive applications. Annual Managed Storage Subscriptions provide a large upfront storage allocation for a 12-month period, including unlimited bandwidth, global CDN delivery, automatic file optimization, and infrastructure management with no additional charges for downloads or page loads.",
    packages: [
      managedPackage("business-growth", "Business Growth", "100 GB", 35000),
      managedPackage("scale-plus", "Scale Plus", "250 GB", 50000),
      managedPackage("enterprise", "Enterprise", "500 GB", 75000),
      managedPackage("custom", "Custom", "1 TB+", null),
    ],
    infoBlocks: [
      {
        id: "storage-upgrade-policy",
        title: "Storage upgrade policy",
        items: [
          "Clients may upgrade their storage package at any time.",
          "Monthly plans may be upgraded to the next monthly tier.",
          "Annual storage plans may purchase additional storage blocks without waiting for their renewal period.",
        ],
      },
    ],
  },
  {
    id: "streaming-packages",
    label: "Streaming Packages (Video Platforms)",
    description:
      "For clients running video-heavy platforms such as streaming services, online course platforms, event streaming, or video content sites. Includes full adaptive bitrate streaming — videos automatically adjust quality based on viewer connection speed.",
    packages: STREAM_TIERS.map(streamPackage),
  },
];
