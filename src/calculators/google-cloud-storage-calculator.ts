import type { CalculatorConfig } from "~/lib/types";

const config: CalculatorConfig = {
  slug: "google-cloud-storage-calculator",
  title: "Google Cloud Storage Calculator",
  description:
    "Google Cloud Storage cost calculator for Standard, Nearline, Coldline, and Archive classes. Includes Class A/B operations, egress, and retrieval fees.",
  tagline: "GCS pricing for Standard, Nearline, Coldline, and Archive, instant cost estimate.",
  category: "cloud",
  keywords: [
    "google cloud storage cost calculator",
    "google cloud storage pricing calculator",
    "google cloud storage price calculator",
    "google cloud storage calculator",
    "gcs calculator",
  ],
  widget: "cloud",
  widgetProps: {
    lockedProvider: "gcp",
    defaultTierId: "standard",
    defaults: {
      storageGb: 1000,
      egressGb: 100,
      writeOpsThousands: 10,
      readOpsThousands: 100,
      retrievalGb: 0,
    },
  },

  content: {
    intro:
      "Google Cloud Storage has four storage classes: Standard, Nearline, Coldline, and Archive. Same API, same consistency model, very different pricing for storage, operations, and retrieval. This calculator estimates monthly cost at us-central1 list pricing across all four. GCS pricing is actually simpler than AWS, with fewer transaction sub-categories. But egress is the most expensive of the three major clouds at $0.12 per GB. If you're moving data out, model that line carefully.",
    formula:
      "<p><strong>GCS bill</strong> = storage + Class A ops + Class B ops + egress + retrieval</p>" +
      "<ul>" +
      "<li><strong>Standard</strong>: $0.020/GB/mo. No minimum. Default for active data.</li>" +
      "<li><strong>Nearline</strong>: $0.010/GB/mo, 30-day minimum, $0.01/GB retrieval.</li>" +
      "<li><strong>Coldline</strong>: $0.004/GB/mo, 90-day minimum, $0.02/GB retrieval.</li>" +
      "<li><strong>Archive</strong>: $0.0012/GB/mo, 365-day minimum, $0.05/GB retrieval.</li>" +
      "</ul>" +
      "<p>Class A ops (writes, lists): $0.05/10k on Standard, scaling up by tier. Class B ops (reads): $0.004/10k on Standard. Internet egress: first 100 GB/mo free, then $0.12/GB.</p>",
    useCases: [
      "Comparing GCS classes for a new bucket before deploying",
      "Estimating savings of moving older data to Coldline or Archive",
      "Modeling egress cost for BigQuery, AI/ML training data, or analytics exports",
      "Comparing GCS against S3 or Azure for the same workload",
    ],
  },

  faqs: [
    {
      question: "What's the cheapest Google Cloud Storage class?",
      answer:
        "Archive at $0.0012/GB/month (~$1.20/TB/month) is cheapest, but with a 365-day minimum storage commitment and $0.05/GB retrieval fee. For data you may access within a year: Coldline ($0.004/GB, 90-day min, $0.02/GB retrieval) is the sweet spot. For monthly access: Nearline. For active data: Standard.",
    },
    {
      question: "Why is GCS egress more expensive than AWS or Azure?",
      answer:
        "GCS internet egress costs $0.12/GB after the 100 GB free tier, about 30% more than AWS ($0.09) and 40% more than Azure ($0.087). Google attributes this to network quality and the global infrastructure. For egress-heavy workloads, this can make GCS noticeably more expensive end-to-end even when storage is cheaper. Premium Tier networking is the default; Standard Tier is cheaper but has performance trade-offs.",
    },
    {
      question: "What's the difference between Class A and Class B operations?",
      answer:
        "Class A ops are writes and listings: insert, patch, list. Class B ops are reads: get, getIamPolicy. GCS bills them at different rates ($0.05/10k Class A on Standard, $0.004/10k Class B) because reads scale up cheaper than writes. For write-heavy workloads (logs, telemetry), Class A pricing dominates the operations line. For read-heavy (serving content), Class B does.",
    },
    {
      question: "Are there free tier discounts?",
      answer:
        "Yes, GCS Always Free includes 5 GB of Standard storage, 5,000 Class A ops, 50,000 Class B ops, and 100 GB egress (to most destinations) per month, in us-east1, us-west1, and us-central1 regions. Useful for small apps; negligible at production scale. This calculator subtracts the 100 GB egress free tier but doesn't subtract the 5 GB Always Free storage since it only applies to specific regions.",
    },
    {
      question: "Should I use Multi-Region or Dual-Region buckets?",
      answer:
        "Standard pricing in this calculator is for Single-Region buckets. Multi-Region (e.g. 'us') adds ~30% to storage and lower latency for global users, useful for content delivery. Dual-Region (e.g. nam4) adds ~50% for cross-region replication. Single-Region with Cloud CDN in front is often cheaper for read-heavy workloads than Multi-Region storage.",
    },
    {
      question: "How does GCS Autoclass work?",
      answer:
        "Autoclass is GCS's automatic tier-transition feature, it moves objects between Standard, Nearline, Coldline, and Archive based on access patterns, with no early-deletion fees. Costs ~$0.0025/1000 objects/month for the tracking. Useful for unpredictable access patterns; for predictable patterns, manual Lifecycle rules are cheaper.",
    },
  ],

  related: [
    "cloud-storage-cost-calculator",
    "s3-storage-calculator",
    "azure-storage-calculator",
    "firebase-storage-calculator",
  ],
};

export default config;
