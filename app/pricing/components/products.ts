import type { PackageCategory } from "./types";
import { STORAGE_PRODUCTS } from "./storageProducts";

const WEBSITE_PRODUCTS: PackageCategory[] = [
  {
    id: "informational-websites",
    label: "Informational Websites",
    description:
      "Static or near-static. No revenue generation, no complex data flows. You exists online and displays information.",
    packages: [
      {
        id: "info-starter",
        name: "Starter",
        tagline: "For individuals, personal brands and small local businesses.",
        targetClient:
          "Individual, personal brand, small local business needing a single online presence with no transactional requirements.",
        price: { type: "once", amount: 15999 },
        features: [
          "Single landing page, fully responsive",
          "Contact form with email notification",
          "Social media links",
          "Basic SEO setup (meta tags, sitemap)",
          "Logo Starter + Hero Banner + Favicon",
          "Free Hosting",
          "1 month post-launch support",
        ],
        specs: [
          {
            factor: "Account & Access",
            specification: "Single admin login for content updates only",
            cost: "0",
          },
          {
            factor: "Payment Integration",
            specification: "None",
            cost: "0",
          },
          {
            factor: "Work Labour",
            specification: "Labour",
            cost: "10,999",
          },
          {
            factor: "Graphic Design",
            specification: "Logo",
            cost: "5,000",
          },
        ],
        postLaunchSupport: "1 month",
        maintenance: {
          monthly: 1500,
          note: "Content updates, uptime monitoring, basic SEO checks",
        },
      },
      {
        id: "info-bronze",
        name: "Bronze",
        tagline:
          "For small-to-medium businesses needing a multi-page presence.",
        targetClient:
          "Small-to-medium business needing a multi-page informational presence. Services listed, team displayed, contact form, no transactions.",
        price: { type: "once", amount: 20999 },
        popular: true,
        features: [
          "4–6 pages (Home, About, Services, Team, Gallery/Portfolio, Contact)",
          "Basic CMS — admin can update content without developer",
          "Contact form with email routing",
          "Image gallery or portfolio section",
          "Full SEO setup (meta, Open Graph, sitemap, robots.txt)",
          "Logo Standard",
          "Hosting on Vercel",
          "1 months post-launch support",
        ],
        specs: [
          {
            factor: "Account & Access",
            specification: "Single admin role — CMS access for content editing",
            cost: "0 — Auth",
          },
          {
            factor: "Payment Integration",
            specification: "None",
            cost: "0",
          },
          {
            factor: "Work Labour",
            specification: "Labour",
            cost: "20,999",
          },
          {
            factor: "Graphic Design",
            specification: "Logo Standard",
            cost: "5,000",
          },
        ],
        postLaunchSupport: "1 months",
        maintenance: {
          monthly: 2000,
          note: "Content updates, CMS support, uptime monitoring, SEO reporting",
        },
      },
    ],
  },
  {
    id: "dynamic-websites",
    label: "Dynamic Websites & Systems",
    description:
      "Active systems that generate, process, or manage data. Revenue-generating or operationally critical. Differentiated by user roles, integration complexity, and data flow volume.",
    packages: [
      {
        id: "dyn-bronze",
        name: "Bronze",
        tagline: "For small businesses automating one active workflow.",
        targetClient:
          "Small business needing one active workflow automated — bookings, inquiries, basic lead management. One user type beyond admin.",
        price: { type: "once", amount: 55999 },
        features: [
          "Booking, inquiry, or appointment system with admin dashboard",
          "Dual-role access — admin manages, client submits/tracks",
          "Payment Integration and receipt generation",
          "Email notifications on key actions (booking confirmed, payment received)",
          "Basic analytics dashboard — total submissions, revenue, active users",
          "Full SEO setup",
          "Logo Standard",
          "1 months post-launch support",
        ],
        specs: [
          {
            factor: "Account & Access",
            specification:
              "Dual Role — Admin + Client/Customer",
            cost: "0",
          },
          {
            factor: "Payment Integration",
            specification: "Single Method — eg: Daraja API or Preferred Payment Third-party",
            cost: "KES 30,000 one-time",
          },
          {
            factor: "Work Labour",
            specification:
              "Labour",
            cost: "20,999",
          },
          {
            factor: "Graphic Design",
            specification:
              "Logo Standard",
            cost: "5,000",
          },
        ],
        postLaunchSupport: "1 month",
        maintenance: {
          monthly: 3000,
          note: "System monitoring, bug fixes, content updates, provider cost coverage",
        },
      },
      {
        id: "dyn-silver",
        name: "Silver",
        tagline: "For growing businesses needing a multi-role system.",
        targetClient:
          "Growing business needing a multi-role system with active data management. Property listings, staff portals, client management systems, directories with user accounts.",
        price: { type: "once", amount: 80999 },
        popular: true,
        features: [
          "Full multi-role system — 3 distinct user types, custom dashboards per role",
          "Payment Intergration",
          "Advanced data management — CRUD operations per role with permission gating",
          "Automated email + SMS notifications on critical system events",
          "Reconciliation dashboard — payment history, export to CSV",
          "Full analytics — per-role activity, revenue tracking, user growth",
          "Logo Standard + Full Brand Kit",
          "3 months post-launch support",
        ],
        specs: [
          {
            factor: "Account & Access",
            specification:
              "Multi-Role — 3 user types with distinct views and permissions. Clerk free tier + Supabase RLS",
            cost: "KES 0",
          },
          {
            factor: "Payment Integration",
            specification: "Single Method — eg: Daraja API or Preferred Payment Third-party",
            cost: "KES 30,500 one-time",
          },
          {
            factor: "Work Labour",
            specification:
              "Labour",
            cost: "40,000",
          },
          {
            factor: "Graphic Design",
            specification:
              "Logo Standard + Full Brand Kit",
            cost: "10,000",
          },
        ],
        postLaunchSupport: "2 months",
        maintenance: {
          monthly: 5000,
          note: "Full system monitoring, bug fixes, feature patches, provider cost coverage",
        },
      },
      {
        id: "dyn-gold",
        name: "Gold",
        tagline:
          "For established businesses needing a full operational system.",
        targetClient:
          "Established business needing a comprehensive operational system. Property management platforms, e-commerce with vendor management, HR systems, multi-branch business operations.",
        price: { type: "once", amount: 120999 },
        features: [
          "Full operational system — 4+ user roles, permission sets, role-based dashboards",
          "Triple payment method — M-Pesa, card, bank. Full reconciliation and reporting",
          "Advanced analytics — revenue forecasting, user behaviour, exportable reports",
          "Automated workflows — approval chains, scheduled notifications, event triggers",
          "Audit logs — full action history per user, admin-viewable",
          "Third-party integrations — email marketing, SMS bulk, Google Analytics, CRM hookup",
          "Logo Premium + Full Brand Kit + All digital assets",
          "3 months post-launch support",
        ],
        specs: [
          {
            factor: "Account & Access",
            specification:
              "Multi-Role — 4+ user types, fine-grained permissions, audit logs.",
            cost: "KES 0",
          },
          {
            factor: "Payment Integration",
            specification:
              "Triple Method — M-Pesa + card + bank transfer + reconciliation dashboard",
            cost: "KES 30,999 one-time",
          },
          {
            factor: "Work Labour",
            specification:
              "Development Labour",
            cost: "70,000",
          },
          {
            factor: "Graphic Design",
            specification:
              "Logo Premium + Full Brand Kit + Full Web Pack + Social Presence Pack",
            cost: "20,000",
          },
        ],
        postLaunchSupport: "3 months",
        maintenance: {
          monthly: 25000,
          note: "Priority support, system monitoring, feature patches, all provider costs covered",
        },
      },
      {
        id: "dyn-platinum",
        name: "Platinum",
        tagline: "Custom-architected platforms, quoted after discovery.",
        targetClient:
          "Custom-scoped. SaaS platforms, multi-tenant systems, marketplaces, systems requiring bespoke architecture that cannot be mapped to Gold tier constraints.",
        price: { type: "quote", label: "Custom Quote" },
        features: [
          "Everything in Gold plus custom-architected features specific to their business logic",
          "Full system specification document produced during discovery",
          "Dedicated project timeline with milestones and delivery gates",
          "Multi-gateway payment with subscription and recurring billing engine",
          "Custom reporting and data export pipelines",
          "SLA-backed uptime commitment (agreed during discovery)",
          "Dedicated post-launch support period — scoped per project",
          "All provider infrastructure managed and covered under maintenance",
        ],
        specs: [
          {
            factor: "Account & Access",
            specification:
              "Custom — architecture defined during discovery. May include SSO, SAML, enterprise identity providers",
            cost: "Quoted per project",
          },
          {
            factor: "Payment Integration",
            specification:
              "Full Multi-Gateway + Subscriptions — all methods + recurring billing engine",
            cost: "KES 80,000",
          },
          {
            factor: "Work Labour",
            specification:
              "All four service types — hours scoped during paid discovery session",
            cost: "Quoted per project",
          },
          {
            factor: "Graphic Design",
            specification:
              "Full Digital Pack + any additional assets scoped during discovery",
            cost: "Quoted per project",
          },
        ],
        postLaunchSupport: "Scoped per project",
        maintenance: {
          monthly: 30000,
          isBase: true,
          note: "Base figure. Final amount scoped during discovery based on infrastructure requirements",
        },
        discovery: {
          fee: 30000,
          note: "Mandatory before any Platinum scope is produced. Credited toward the build if the client proceeds.",
        },
      },
    ],
  },
];

export const STRAVON_PRODUCTS: PackageCategory[] = [
  ...WEBSITE_PRODUCTS,
  ...STORAGE_PRODUCTS,
];
