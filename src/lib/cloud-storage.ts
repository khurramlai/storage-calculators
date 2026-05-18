/**
 * Cloud object-storage pricing math for AWS S3, Azure Blob, Google Cloud
 * Storage, and Firebase Cloud Storage.
 *
 * Prices in this file are baseline list prices for the most common US region
 * of each provider as of 2025-Q1. They're meant for *estimation*, not invoicing ,
 * actual cost varies with region, committed-use discounts, free-tier offsets,
 * and frequent provider updates. The widget surfaces this disclaimer.
 *
 * Source: each provider's public pricing page.
 *   AWS S3:      https://aws.amazon.com/s3/pricing/
 *   Azure Blob:  https://azure.microsoft.com/en-us/pricing/details/storage/blobs/
 *   GCS:         https://cloud.google.com/storage/pricing
 *   Firebase:    https://firebase.google.com/pricing
 */

export const PROVIDERS = ["aws", "azure", "gcp", "firebase"] as const;
export type Provider = (typeof PROVIDERS)[number];

export const PROVIDER_LABELS: Record<Provider, string> = {
  aws: "AWS S3",
  azure: "Azure Blob Storage",
  gcp: "Google Cloud Storage",
  firebase: "Firebase Cloud Storage",
};

export interface StorageTier {
  id: string;
  label: string;
  /** USD per GB per month, list price */
  pricePerGbMonth: number;
  /** USD per 1,000 PUT/COPY/POST/LIST requests (write-class) */
  writeOpsPer1k: number;
  /** USD per 1,000 GET/SELECT requests (read-class) */
  readOpsPer1k: number;
  /** USD per GB retrieved from this tier (Glacier/Archive retrieval fee) */
  retrievalPerGb: number;
  /** Minimum storage commitment days (early-delete fee applies before this) */
  minDurationDays: number;
  /** Short pitch shown in the UI */
  notes: string;
}

export interface ProviderPricing {
  tiers: StorageTier[];
  /** USD per GB egressed to the internet (after free tier). Approximated as
   *  the first paid pricing band, most providers tier discounts downward. */
  egressPerGb: number;
  /** Bytes of egress included free per month */
  freeEgressGb: number;
}

export const PRICING: Record<Provider, ProviderPricing> = {
  aws: {
    tiers: [
      {
        id: "standard",
        label: "S3 Standard",
        pricePerGbMonth: 0.023,
        writeOpsPer1k: 0.005,
        readOpsPer1k: 0.0004,
        retrievalPerGb: 0,
        minDurationDays: 0,
        notes: "Default. Frequently accessed, millisecond latency, 11 9s durability.",
      },
      {
        id: "standard-ia",
        label: "S3 Standard-IA",
        pricePerGbMonth: 0.0125,
        writeOpsPer1k: 0.01,
        readOpsPer1k: 0.001,
        retrievalPerGb: 0.01,
        minDurationDays: 30,
        notes: "Infrequent access. Min 30-day storage; per-GB retrieval fee.",
      },
      {
        id: "one-zone-ia",
        label: "S3 One Zone-IA",
        pricePerGbMonth: 0.01,
        writeOpsPer1k: 0.01,
        readOpsPer1k: 0.001,
        retrievalPerGb: 0.01,
        minDurationDays: 30,
        notes: "Single-AZ infrequent access. ~20% cheaper than Standard-IA.",
      },
      {
        id: "glacier-ir",
        label: "S3 Glacier Instant Retrieval",
        pricePerGbMonth: 0.004,
        writeOpsPer1k: 0.02,
        readOpsPer1k: 0.01,
        retrievalPerGb: 0.03,
        minDurationDays: 90,
        notes: "Millisecond retrieval, 90-day minimum, $0.03/GB retrieval fee.",
      },
      {
        id: "glacier-flex",
        label: "S3 Glacier Flexible Retrieval",
        pricePerGbMonth: 0.0036,
        writeOpsPer1k: 0.03,
        readOpsPer1k: 0.0004,
        retrievalPerGb: 0.01,
        minDurationDays: 90,
        notes: "Minutes-to-hours retrieval, 90-day minimum.",
      },
      {
        id: "glacier-deep",
        label: "S3 Glacier Deep Archive",
        pricePerGbMonth: 0.00099,
        writeOpsPer1k: 0.05,
        readOpsPer1k: 0.0004,
        retrievalPerGb: 0.02,
        minDurationDays: 180,
        notes: "Cheapest tier. 12+ hour retrieval, 180-day minimum.",
      },
    ],
    egressPerGb: 0.09,
    freeEgressGb: 100,
  },

  azure: {
    tiers: [
      {
        id: "hot",
        label: "Hot",
        pricePerGbMonth: 0.0184,
        writeOpsPer1k: 0.0065,
        readOpsPer1k: 0.00052,
        retrievalPerGb: 0,
        minDurationDays: 0,
        notes: "Frequently accessed. Default tier for most workloads.",
      },
      {
        id: "cool",
        label: "Cool",
        pricePerGbMonth: 0.01,
        writeOpsPer1k: 0.013,
        readOpsPer1k: 0.0013,
        retrievalPerGb: 0.01,
        minDurationDays: 30,
        notes: "Infrequent access (≥30 days). Higher op costs, retrieval fee applies.",
      },
      {
        id: "cold",
        label: "Cold",
        pricePerGbMonth: 0.0036,
        writeOpsPer1k: 0.013,
        readOpsPer1k: 0.0065,
        retrievalPerGb: 0.02,
        minDurationDays: 90,
        notes: "Rare access (≥90 days). Cheaper than Cool, slower SLA.",
      },
      {
        id: "archive",
        label: "Archive",
        pricePerGbMonth: 0.00099,
        writeOpsPer1k: 0.13,
        readOpsPer1k: 5.5,
        retrievalPerGb: 0.022,
        minDurationDays: 180,
        notes: "Cheapest. Hours-to-day rehydration. Read costs are eye-watering.",
      },
    ],
    egressPerGb: 0.087,
    freeEgressGb: 100,
  },

  gcp: {
    tiers: [
      {
        id: "standard",
        label: "Standard",
        pricePerGbMonth: 0.02,
        writeOpsPer1k: 0.005,
        readOpsPer1k: 0.0004,
        retrievalPerGb: 0,
        minDurationDays: 0,
        notes: "Frequently accessed. Default tier.",
      },
      {
        id: "nearline",
        label: "Nearline",
        pricePerGbMonth: 0.01,
        writeOpsPer1k: 0.01,
        readOpsPer1k: 0.001,
        retrievalPerGb: 0.01,
        minDurationDays: 30,
        notes: "Monthly access. 30-day minimum, $0.01/GB retrieval.",
      },
      {
        id: "coldline",
        label: "Coldline",
        pricePerGbMonth: 0.004,
        writeOpsPer1k: 0.02,
        readOpsPer1k: 0.005,
        retrievalPerGb: 0.02,
        minDurationDays: 90,
        notes: "Quarterly access. 90-day minimum, $0.02/GB retrieval.",
      },
      {
        id: "archive",
        label: "Archive",
        pricePerGbMonth: 0.0012,
        writeOpsPer1k: 0.05,
        readOpsPer1k: 0.05,
        retrievalPerGb: 0.05,
        minDurationDays: 365,
        notes: "Yearly access. 365-day minimum, $0.05/GB retrieval.",
      },
    ],
    egressPerGb: 0.12,
    freeEgressGb: 100,
  },

  firebase: {
    tiers: [
      {
        id: "standard",
        label: "Firebase Cloud Storage",
        pricePerGbMonth: 0.026,
        writeOpsPer1k: 0.05,
        readOpsPer1k: 0.004,
        retrievalPerGb: 0,
        minDurationDays: 0,
        notes:
          "Firebase wraps GCS Standard. Spark plan includes 5 GB free; Blaze is pay-as-you-go.",
      },
    ],
    egressPerGb: 0.12,
    freeEgressGb: 1, // Spark gives 1 GB/day = ~30 GB/month, but Blaze charges from byte 1
  },
};

export interface CloudStorageInputs {
  provider: Provider;
  tierId: string;
  storageGb: number;
  /** Average storage age, for early-delete fee modeling. 0 means "indefinite". */
  storageMonths: number;
  egressGb: number;
  /** Per 1,000, same unit as the pricing table */
  writeOpsThousands: number;
  readOpsThousands: number;
  /** Data retrieved from cold tier this month, in GB (Glacier/Archive only) */
  retrievalGb: number;
}

export interface CloudStorageResult {
  tier: StorageTier;
  pricing: ProviderPricing;
  storageCost: number;
  writeOpsCost: number;
  readOpsCost: number;
  egressCost: number;
  retrievalCost: number;
  monthlyTotal: number;
  annualTotal: number;
  /** Comparison across all tiers of the same provider at the same storage size */
  tierComparison: Array<{ tier: StorageTier; monthlyTotal: number }>;
}

export function getTier(provider: Provider, tierId: string): StorageTier {
  const tier = PRICING[provider].tiers.find((t) => t.id === tierId);
  return tier ?? PRICING[provider].tiers[0];
}

export function calculateCloudStorage(input: CloudStorageInputs): CloudStorageResult {
  const pricing = PRICING[input.provider];
  const tier = getTier(input.provider, input.tierId);

  const storageGb = Math.max(0, input.storageGb || 0);
  const egressGb = Math.max(0, input.egressGb || 0);
  const writeOps = Math.max(0, input.writeOpsThousands || 0);
  const readOps = Math.max(0, input.readOpsThousands || 0);
  const retrievalGb = Math.max(0, input.retrievalGb || 0);

  const storageCost = storageGb * tier.pricePerGbMonth;
  const writeOpsCost = writeOps * tier.writeOpsPer1k;
  const readOpsCost = readOps * tier.readOpsPer1k;
  const billableEgress = Math.max(0, egressGb - pricing.freeEgressGb);
  const egressCost = billableEgress * pricing.egressPerGb;
  const retrievalCost = retrievalGb * tier.retrievalPerGb;

  const monthlyTotal =
    storageCost + writeOpsCost + readOpsCost + egressCost + retrievalCost;
  const annualTotal = monthlyTotal * 12;

  const tierComparison = pricing.tiers.map((t) => ({
    tier: t,
    monthlyTotal:
      storageGb * t.pricePerGbMonth +
      writeOps * t.writeOpsPer1k +
      readOps * t.readOpsPer1k +
      billableEgress * pricing.egressPerGb +
      retrievalGb * t.retrievalPerGb,
  }));

  return {
    tier,
    pricing,
    storageCost,
    writeOpsCost,
    readOpsCost,
    egressCost,
    retrievalCost,
    monthlyTotal,
    annualTotal,
    tierComparison,
  };
}
