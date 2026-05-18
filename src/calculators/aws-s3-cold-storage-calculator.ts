import type { CalculatorConfig } from "~/lib/types";

const config: CalculatorConfig = {
  slug: "aws-s3-cold-storage-calculator",
  title: "AWS S3 Cold Storage Calculator",
  description:
    "AWS S3 cold storage calculator for all three Glacier tiers. Models retrieval fees, 90 and 180-day minimum charges, and the real monthly cost in one view.",
  tagline: "True cold-storage math: $/GB looks cheap, retrieval fees are where Glacier hides cost.",
  category: "cloud",
  keywords: [
    "aws s3 cold storage calculator",
    "s3 glacier calculator",
    "glacier deep archive calculator",
    "aws cold storage pricing",
  ],
  widget: "cloud",
  widgetProps: {
    lockedProvider: "aws",
    defaultTierId: "glacier-deep",
    defaults: {
      storageGb: 10000, // 10 TB, cold storage usually starts at TB scale
      egressGb: 0, // cold data is rarely egressed
      writeOpsThousands: 1,
      readOpsThousands: 0,
      retrievalGb: 100, // simulate a small monthly restore
    },
  },

  content: {
    intro:
      "S3 Glacier classes are the cheapest object storage AWS sells. Deep Archive runs about $1 per TB per month, roughly 25× cheaper than S3 Standard. But the per-GB headline doesn't tell the whole story. Every Glacier class charges a retrieval fee when you actually pull data back, has a 90 or 180-day minimum storage commitment with early-delete penalties, and adds higher per-request costs. This calculator defaults to a realistic cold-archive setup: 10 TB stored, 100 GB pulled back each month. That way the retrieval cost shows up next to the storage cost, where it belongs.",
    formula:
      "<p><strong>Total Glacier cost</strong> = storage + write ops + retrieval + (egress if data leaves AWS)</p>" +
      "<p><strong>Glacier Instant Retrieval</strong>: $0.004/GB/mo storage, $0.03/GB retrieval, 90-day minimum. Millisecond access. Good for archive you might restore quickly.</p>" +
      "<p><strong>Glacier Flexible Retrieval</strong>: $0.0036/GB/mo storage, $0.01/GB retrieval, 90-day minimum. Minutes to hours restore.</p>" +
      "<p><strong>Glacier Deep Archive</strong>: $0.00099/GB/mo storage, $0.02/GB retrieval, 180-day minimum. 12+ hour restore. The cheapest, also the slowest.</p>",
    useCases: [
      "Comparing Glacier classes for a tape-replacement archive",
      "Modeling restore costs for a compliance retention scenario",
      "Working out Deep Archive break-even against on-prem tape libraries",
      "Estimating the cost of a one-time bulk migration to cold storage",
    ],
  },

  faqs: [
    {
      question: "What's the cheapest S3 cold storage class?",
      answer:
        "Glacier Deep Archive at $0.00099/GB/month, roughly $1 per TB per month. The catch: 180-day minimum storage charge (delete sooner and you still pay for 180 days), $0.02/GB retrieval fee, and 12+ hour restore time. For a 100 TB archive untouched for a year, Deep Archive costs ~$1,200 total vs S3 Standard's ~$28,000.",
    },
    {
      question: "How does the 180-day minimum work on Deep Archive?",
      answer:
        "If you delete an object before 180 days, AWS still charges as if it had been stored the full 180 days. Example: upload 1 TB on day 1, delete on day 30, you'll still be billed for the remaining 150 days ($0.50). For data that might be modified or deleted, Glacier Flexible Retrieval (90-day minimum) is safer. For truly immutable archives, backups, compliance, Deep Archive's penalty is irrelevant.",
    },
    {
      question: "How long does a Glacier Deep Archive restore actually take?",
      answer:
        "Standard restore: 12 hours typical, up to 48 hours guaranteed. Bulk restore (for petabyte-scale): up to 48 hours but cheaper per GB. There's no expedited option for Deep Archive (unlike Glacier Flexible). Plan accordingly, if you need same-day access, Glacier Instant Retrieval ($0.004/GB) is better despite costing 4× more.",
    },
    {
      question: "Do I pay retrieval AND egress when downloading from Glacier?",
      answer:
        "Yes, retrieval restores data to S3 Standard (where it sits for the configured restore duration), then egress charges apply when it leaves AWS. Total cost for restoring + downloading 1 TB from Deep Archive: $20 retrieval + $90 egress = $110. Plan restores to expire fast (S3 will auto-delete the restored copy) to avoid double-billing.",
    },
    {
      question: "When does Glacier Instant Retrieval beat Standard-IA?",
      answer:
        "Glacier Instant ($0.004/GB) is cheaper than Standard-IA ($0.0125/GB) for storage but costs 3× more per retrieval ($0.03/GB vs $0.01). The crossover: if you retrieve under ~3% of stored data per month, Glacier Instant wins. Above that, Standard-IA is cheaper. Both have similar 90-day minimums.",
    },
    {
      question: "Can I use S3 Lifecycle to auto-transition to Glacier?",
      answer:
        "Yes, S3 Lifecycle rules can transition objects: Standard → Standard-IA after 30 days → Glacier Instant after 60 → Deep Archive after 365. This is the standard pattern for log archives and old backups. Transitions themselves are charged ($0.05/1k requests to Deep Archive), so it's most cost-effective for objects ≥128 KB.",
    },
  ],

  related: [
    "s3-storage-calculator",
    "cloud-storage-cost-calculator",
    "azure-storage-calculator",
    "google-cloud-storage-calculator",
  ],
};

export default config;
