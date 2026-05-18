import type { CalculatorConfig } from "~/lib/types";

const config: CalculatorConfig = {
  slug: "s3-storage-calculator",
  title: "AWS S3 Storage Calculator",
  description:
    "S3 storage calculator covering all six AWS classes: Standard, Standard-IA, One Zone-IA, and Glacier Instant, Flexible, and Deep Archive. Plus egress and ops.",
  tagline: "Estimate S3 costs across all storage classes, including request and egress fees.",
  category: "cloud",
  keywords: [
    "s3 storage calculator",
    "aws s3 storage cost calculator",
    "s3 storage cost calculator",
    "aws storage cost calculator",
  ],
  widget: "cloud",
  widgetProps: {
    lockedProvider: "aws",
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
      "Amazon S3 gives you six storage classes that trade access speed, durability guarantees, and minimum commitments for steeply lower per-GB cost. This calculator covers all of them: Standard, Standard-IA, One Zone-IA, Glacier Instant Retrieval, Glacier Flexible Retrieval, and Glacier Deep Archive. All at us-east-1 list prices. Storage cost is rarely the whole bill, though. PUT and GET requests, egress to the internet, and Glacier retrieval fees often dominate the total, especially for active workloads.",
    formula:
      "<p><strong>S3 bill</strong> = storage + ops + egress + retrieval</p>" +
      "<p>S3 Standard: <code>$0.023/GB/mo</code>. Standard-IA: <code>$0.0125/GB/mo</code> with a $0.01/GB retrieval fee. Deep Archive: <code>$0.00099/GB/mo</code>, about $1 per TB per month, with a 180-day minimum and $0.02/GB retrieval. Request pricing scales from $0.005/1k PUTs on Standard to $0.05/1k PUTs on Deep Archive.</p>" +
      "<p>Egress to the internet: first 100 GB/month free, then <code>$0.09/GB</code> for the next 10 TB, sliding down to $0.05/GB above 150 TB.</p>",
    useCases: [
      "Sizing storage for a new S3 bucket before deploying",
      "Comparing S3 Standard against Standard-IA for an existing bucket",
      "Estimating cost of moving cold data to Glacier Deep Archive",
      "Modeling egress costs for an application serving downloads from S3",
    ],
  },

  faqs: [
    {
      question: "Which S3 storage class is cheapest?",
      answer:
        "For long-term cold storage with rare access: Glacier Deep Archive at $0.00099/GB/month (~$1/TB/month) is cheapest, but has a 180-day minimum storage charge and $0.02/GB retrieval fee plus 12+ hour retrieval time. For frequently accessed data: S3 Standard at $0.023/GB. For monthly-access data: Standard-IA at $0.0125/GB with a 30-day minimum and $0.01/GB retrieval fee.",
    },
    {
      question: "How do I cut S3 costs without changing my application?",
      answer:
        "Three quick wins: (1) enable S3 Lifecycle policies to auto-transition objects to Standard-IA after 30 days and Glacier after 90; (2) enable Intelligent-Tiering for unpredictable access patterns (S3 auto-moves objects based on usage); (3) use CloudFront or another CDN in front of S3 to cache hot reads, CDN egress is cheaper than S3 egress for high-volume reads.",
    },
    {
      question: "Does this calculator include S3 Intelligent-Tiering?",
      answer:
        "Not directly, Intelligent-Tiering pricing depends on how S3 moves your objects, which is workload-dependent. As a rule of thumb, IT averages between Standard and Standard-IA cost ($0.012-$0.023/GB) plus a small monitoring fee ($0.0025/1000 objects). For predictable access patterns, lifecycle policies on Standard / Standard-IA are usually cheaper.",
    },
    {
      question: "Are egress costs really $0.09 per GB?",
      answer:
        "Yes for the standard us-east-1 region, after the first 100 GB/month free. The price drops at volume: $0.085 next 40 TB, $0.07 next 100 TB, $0.05 above 150 TB. Cross-region replication and S3 Transfer Acceleration are extra. If you're serving large download volumes, CloudFront ($0.085 dropping to $0.02 at scale) is usually cheaper than S3 direct.",
    },
    {
      question: "What's the difference between Glacier classes?",
      answer:
        "Glacier Instant Retrieval ($0.004/GB) gives millisecond retrieval like S3 Standard, with 90-day minimum and $0.03/GB retrieval fee. Glacier Flexible Retrieval ($0.0036/GB) needs minutes-to-hours for restore. Glacier Deep Archive ($0.00099/GB) is the cheapest but takes 12+ hours to restore and has a 180-day minimum. Pick based on how patient you are during a restore.",
    },
    {
      question: "Does S3 charge for failed or aborted requests?",
      answer:
        "Yes, request charges apply to all API calls, including 4xx errors caused by client mistakes. Aborted multipart uploads leave partial uploads on disk that are billed as storage until cleaned up. Set a Lifecycle rule to abort incomplete multipart uploads after 7 days, a common surprise on AWS invoices.",
    },
  ],

  related: [
    "cloud-storage-cost-calculator",
    "aws-s3-cold-storage-calculator",
    "azure-storage-calculator",
    "google-cloud-storage-calculator",
  ],
};

export default config;
