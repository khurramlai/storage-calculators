import type { CalculatorConfig } from "~/lib/types";

const config: CalculatorConfig = {
  slug: "cloud-storage-cost-calculator",
  title: "Cloud Storage Cost Calculator",
  description:
    "Cloud storage cost calculator for AWS S3, Azure Blob, GCS, and Firebase. Compare storage, egress, request, and retrieval fees side by side at list price.",
  tagline: "One calculator, all four major clouds, compare list prices in seconds.",
  category: "cloud",
  keywords: [
    "cloud storage cost calculator",
    "data storage cost calculator",
    "cloud storage pricing calculator",
    "cloud storage calculator",
  ],
  widget: "cloud",

  content: {
    intro:
      "Cloud storage pricing has way more moving parts than the per-GB headline suggests. Egress, request counts, retrieval fees, minimum storage duration: they all add up. This calculator models the four big providers (AWS S3, Azure Blob, Google Cloud Storage, Firebase) at list price in the common US region, so you can actually compare them. Switching providers can save 20% to 50% on the same workload. Switching tiers (hot to cool to cold to archive) can save 80% or more on data you barely touch.",
    formula:
      "<p><strong>Monthly cost</strong> = storage + egress + write ops + read ops + retrieval</p>" +
      "<ul>" +
      "<li><strong>Storage</strong>: <code>GB × $/GB/month</code> for the selected tier</li>" +
      "<li><strong>Egress</strong>: <code>max(0, GB out − free tier) × $/GB</code></li>" +
      "<li><strong>Write ops</strong>: <code>(PUTs / 1000) × $/1k</code></li>" +
      "<li><strong>Read ops</strong>: <code>(GETs / 1000) × $/1k</code></li>" +
      "<li><strong>Retrieval</strong>: <code>GB retrieved × $/GB</code>, on cold and archive tiers only</li>" +
      "</ul>" +
      "<p>The tier comparison chart at the bottom shows what your bill would look like on every tier within the selected provider. Handy for spotting when you're on the wrong tier for your access pattern.</p>",
    useCases: [
      "Comparing AWS S3, Azure Blob, and GCS for a new project",
      "Estimating the savings of moving cold data from S3 Standard to Glacier Deep Archive",
      "Modeling egress costs for high-bandwidth applications (CDN, video, ML training)",
      "Budgeting cloud spend before a new product launch",
    ],
  },

  faqs: [
    {
      question: "Which cloud has the cheapest object storage?",
      answer:
        "For hot/standard storage: Azure Blob Hot ($0.0184/GB) is cheapest, then GCP Standard ($0.020), then AWS S3 Standard ($0.023), then Firebase ($0.026). But hot storage is rarely the biggest line item. Egress (AWS: $0.09/GB, Azure: $0.087, GCP: $0.12) and request volume often dominate. The real answer depends on your access pattern.",
    },
    {
      question: "Why is egress so expensive on cloud providers?",
      answer:
        "Egress (data leaving the cloud) is the main lock-in mechanism in the cloud-storage market. Moving 100 TB out of any major cloud costs about $9,000. Inbound and intra-region traffic is free; cross-region is intermediate. If your workload reads data heavily, factor egress into the total cost. For some video, ML, or CDN workloads, egress can exceed storage by 10×.",
    },
    {
      question: "What's the cheapest tier for backups?",
      answer:
        "S3 Glacier Deep Archive ($0.00099/GB/mo) and Azure Archive ($0.00099/GB/mo) tie for cheapest, both at roughly $1/TB/month. GCP Archive is slightly more at $0.0012/GB. All have 90-180 day minimum storage commitments and retrieval fees ($0.02-0.05/GB). For backups you'll rarely touch, perfect. For backups you might restore monthly, calculate retrieval cost first.",
    },
    {
      question: "Does this calculator account for free tiers?",
      answer:
        "Partially, egress free tiers are modeled (first 100 GB/month free on AWS, Azure, GCP). Storage free tiers (Firebase Spark 5 GB, AWS Free Tier 5 GB for 12 months, GCS Always Free 5 GB) are not subtracted because they apply only to new accounts and have eligibility rules. For production workloads at scale, the free tiers are noise.",
    },
    {
      question: "Are these the actual prices I'll pay?",
      answer:
        "These are list prices for the most common US region (us-east-1 for AWS, East US for Azure, us-central1 for GCP). Real cost depends on region (some regions are 10-30% more expensive), committed-use discounts (Azure Reserved Capacity, GCP CUDs, AWS Savings Plans give 20-50% off), and any negotiated enterprise discount. Use this calculator for relative comparison, not invoicing.",
    },
    {
      question: "What about Cloudflare R2 and Backblaze B2?",
      answer:
        "Both offer significantly cheaper storage ($0.015 for R2, $0.006 for B2 in 2025) and zero egress fees, which is a game-changer for egress-heavy workloads. They're not included in this calculator because their feature sets (consistency, regions, compliance) differ from the hyperscalers. If you're cost-sensitive and don't need AWS/Azure/GCP-specific services, they're worth evaluating separately.",
    },
  ],

  related: [
    "s3-storage-calculator",
    "azure-storage-calculator",
    "google-cloud-storage-calculator",
    "firebase-storage-calculator",
    "aws-s3-cold-storage-calculator",
  ],
};

export default config;
