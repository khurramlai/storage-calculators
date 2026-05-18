import type { CalculatorConfig } from "~/lib/types";

const config: CalculatorConfig = {
  slug: "firebase-storage-calculator",
  title: "Firebase Storage Pricing Calculator",
  description:
    "Firebase storage pricing calculator for the Blaze pay-as-you-go plan. Models storage, download, upload, and operation costs for any app size.",
  tagline: "Pricing for Firebase Cloud Storage, storage, downloads, and operations on Blaze.",
  category: "cloud",
  keywords: [
    "firebase storage pricing calculator",
    "firebase storage calculator",
    "firebase cloud storage cost",
    "firebase blaze pricing",
  ],
  widget: "cloud",
  widgetProps: {
    lockedProvider: "firebase",
    defaultTierId: "standard",
    defaults: {
      storageGb: 50,
      egressGb: 100,
      writeOpsThousands: 100,
      readOpsThousands: 1000,
      retrievalGb: 0,
    },
  },

  content: {
    intro:
      "Firebase Cloud Storage is basically Google Cloud Storage with a thinner wrapper. Same backend, simpler SDK, integrated with Firebase Auth and Security Rules. Pricing follows GCS Standard with a small markup, plus the Spark (free) plan that gives you 5 GB of storage and 1 GB of downloads per day. This calculator models Blaze, the pay-as-you-go plan, which is where every production Firebase app ends up. If you're modeling at real scale, also check the regular GCS calculator for the same workload on raw GCS.",
    formula:
      "<p><strong>Firebase Storage on Blaze</strong>:</p>" +
      "<ul>" +
      "<li><strong>Storage</strong>: $0.026/GB/month</li>" +
      "<li><strong>Download</strong> (egress to internet): $0.12/GB</li>" +
      "<li><strong>Upload</strong>: free</li>" +
      "<li><strong>Operations</strong>: $0.05/10k write ops, $0.004/10k read ops</li>" +
      "</ul>" +
      "<p>The Spark plan provides 5 GB storage, 1 GB/day downloads, 20k uploads/day, and 50k downloads/day for free. Most apps outgrow Spark on downloads first.</p>",
    useCases: [
      "Estimating Firebase Storage cost for a growing mobile app",
      "Working out when to upgrade from Spark (free) to Blaze (pay-as-you-go)",
      "Comparing Firebase Storage against raw GCS for the same workload",
      "Modeling cost of user-uploaded media (profile photos, video uploads)",
    ],
  },

  faqs: [
    {
      question: "When should I upgrade from Firebase Spark to Blaze?",
      answer:
        "You'll typically hit Spark limits in this order: daily downloads (1 GB/day cap), then daily operation counts, then storage (5 GB cap). For consumer apps, ~100-500 daily active users is the usual breakpoint. Blaze is pay-as-you-go with no minimum, for a small app at 10 GB stored, 50 GB/mo downloaded, expect ~$6-7/month total.",
    },
    {
      question: "Is Firebase Storage more expensive than raw Google Cloud Storage?",
      answer:
        "Slightly. Firebase Storage is $0.026/GB/month vs GCS Standard $0.020/GB. The markup pays for the simplified SDK, Authentication integration, Security Rules, and the Firebase console. For apps doing under ~1 TB of storage, the cost difference is noise, the developer time saved is worth it. At 10+ TB scale, going directly to GCS becomes worth the integration work.",
    },
    {
      question: "How much does it cost to host a profile photo for one user?",
      answer:
        "A typical compressed profile photo is ~500 KB. 1 GB holds ~2,000 photos at that size. At $0.026/GB/month, 2,000 user profile photos cost about $0.026/month or $0.31/year. Add ~$0.06 for 100 downloads of each (typical for first-month-of-use). For a 100k user app: ~$13/month storage + heavy variable cost for downloads.",
    },
    {
      question: "Do Firebase Security Rules cost extra?",
      answer:
        "No, Security Rules are part of the platform. But every storage operation is rules-evaluated, which counts against the operation quota. Complex rules with database lookups can be slow and add latency; in extreme cases, rules timeouts cause operation failures (which still count). Keep rules simple and storage-local where possible.",
    },
    {
      question: "Can I use Firebase Cloud Storage with Cloud Functions?",
      answer:
        "Yes, Cloud Storage triggers (onFinalize, onDelete, onMetadataUpdate) are commonly used to process uploads (image resizing, virus scanning, format conversion). Each function invocation costs separately on the Cloud Functions billing line (~$0.40/million invocations + memory/CPU time). Account for this on top of the storage cost.",
    },
    {
      question: "What's the cheapest way to store 1 TB of user uploads?",
      answer:
        "For pure storage cost on Firebase Blaze: 1 TB stored = ~$26/month. But downloads dominate for most apps, 1 TB of monthly downloads adds $122/month. For download-heavy workloads, consider: (1) Firebase Storage + Firebase Hosting cache, (2) Firebase Storage + Cloud CDN, or (3) move to a download-cheap provider like Cloudflare R2 ($0.015/GB storage, zero egress).",
    },
  ],

  related: [
    "google-cloud-storage-calculator",
    "cloud-storage-cost-calculator",
    "s3-storage-calculator",
    "azure-storage-calculator",
  ],
};

export default config;
