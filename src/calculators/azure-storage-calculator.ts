import type { CalculatorConfig } from "~/lib/types";

const config: CalculatorConfig = {
  slug: "azure-storage-calculator",
  title: "Azure Storage Calculator",
  description:
    "Azure storage calculator for Blob Storage Hot, Cool, Cold, and Archive tiers. Models transactions, egress, and retrieval fees in one monthly estimate.",
  tagline:
    "Azure Blob Storage pricing without the calculator-page maze, all four tiers compared.",
  category: "cloud",
  keywords: [
    "azure storage calculator",
    "azure storage cost calculator",
    "azure storage pricing calculator",
    "azure blob storage pricing calculator",
  ],
  widget: "cloud",
  widgetProps: {
    lockedProvider: "azure",
    defaultTierId: "hot",
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
      "Azure Blob Storage has four access tiers: Hot, Cool, Cold, and Archive. They share one API but the pricing changes dramatically. This calculator covers all four at East US LRS (Locally Redundant Storage) list prices. Microsoft's own pricing calculator is thorough but overwhelming. This one is focused. Pick a tier, type in your numbers, and you see the monthly bill for all four tiers side by side.",
    formula:
      "<p><strong>Azure bill</strong> = storage + transactions + egress + retrieval</p>" +
      "<ul>" +
      "<li><strong>Hot</strong>: $0.0184/GB/mo storage, $0.0065/10k write ops. Frequent access.</li>" +
      "<li><strong>Cool</strong>: $0.01/GB/mo, 30-day minimum, $0.01/GB retrieval. Monthly access.</li>" +
      "<li><strong>Cold</strong>: $0.0036/GB/mo, 90-day minimum, $0.02/GB retrieval. Rare access.</li>" +
      "<li><strong>Archive</strong>: $0.00099/GB/mo, 180-day minimum, $0.022/GB retrieval plus rehydration time. Cheapest.</li>" +
      "</ul>" +
      "<p>Egress: first 100 GB/month free, then $0.087/GB.</p>",
    useCases: [
      "Pricing Azure Blob storage for a new project before deployment",
      "Comparing Hot against Cool and Cold for a media library",
      "Estimating Archive tier cost for compliance retention",
      "Modeling cross-region replication and the costs it doubles up",
    ],
  },

  faqs: [
    {
      question: "What's the difference between Cool and Cold tier?",
      answer:
        "Both target infrequent access, but Cold (introduced 2023) is roughly 3× cheaper than Cool for storage ($0.0036 vs $0.01/GB) and applies a longer 90-day minimum vs Cool's 30-day. Use Cool for data accessed monthly; use Cold for data accessed quarterly or less. Both have higher transaction costs than Hot, for write-heavy workloads, the savings may evaporate.",
    },
    {
      question: "Why is Azure Archive read so expensive?",
      answer:
        "Archive charges $5.50 per 10,000 read operations, 1,000× more than Hot tier. Plus retrieval has a $0.022/GB fee and rehydration takes up to 15 hours (Standard priority) or 1 hour (High priority, more expensive). Archive is genuinely for write-once-read-rarely scenarios: long-term backups, regulatory compliance, raw data archives. If you'll ever actually read it, model the retrieval cost carefully.",
    },
    {
      question: "How does LRS vs ZRS vs GRS affect cost?",
      answer:
        "This calculator uses LRS (Locally Redundant Storage) list pricing, the cheapest. ZRS (Zone-Redundant) adds ~25%. GRS (Geo-Redundant, cross-region async replication) adds ~100%. RA-GRS (read-access GRS) adds ~125%. For non-critical data LRS is fine; for production data with disaster recovery needs, ZRS or GRS is the call. Multiply the calculator's storage line accordingly.",
    },
    {
      question: "Does Azure charge for transactions on Archive tier?",
      answer:
        "Yes, and significantly. Write ops to Archive: $0.13/10k vs Hot's $0.0065. Read ops on Archive: $5.50/10k vs Hot's $0.00052. Archive is optimized for occasional bulk writes (uploading a backup) and rare retrievals (compliance audit), not for active operations.",
    },
    {
      question: "How does Azure's egress pricing compare to AWS and GCP?",
      answer:
        "Azure egress ($0.087/GB after 100 GB free) is the cheapest of the three hyperscalers, slightly under AWS ($0.09) and significantly under GCP ($0.12). For egress-heavy workloads (CDN origin, ML training data, video streaming), this can make Azure 15-25% cheaper than GCP on the total bill even at similar storage prices.",
    },
    {
      question: "Can I move data between tiers automatically?",
      answer:
        "Yes, Azure Blob Lifecycle Management rules can auto-tier objects based on last-modified or last-accessed time. Example: move to Cool after 30 days without access, Cold after 90, Archive after 365. Lifecycle rule executions are charged as transactions; for high object counts, this adds up. Plan for the transition transaction cost as part of the migration savings.",
    },
  ],

  related: [
    "cloud-storage-cost-calculator",
    "s3-storage-calculator",
    "google-cloud-storage-calculator",
    "aws-s3-cold-storage-calculator",
  ],
};

export default config;
