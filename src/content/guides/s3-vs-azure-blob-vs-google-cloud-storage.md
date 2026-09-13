---
title: "S3 vs Azure Blob vs Google Cloud Storage: A Like-for-Like Price Comparison"
description: "The three big object stores compared tier by tier on storage, requests, retrieval, egress and minimum durations, with the same three workloads priced on each so the differences are visible."
summary: "Tier-by-tier price mapping across AWS, Azure and Google, and the same three workloads costed on each provider."
category: cloud
published: 2026-09-13
calculators:
  - cloud-storage-cost-calculator
  - s3-storage-calculator
  - azure-storage-calculator
  - google-cloud-storage-calculator
readingMinutes: 10
---

The three major object stores are close enough in price that the choice usually comes down to where the rest of your infrastructure lives. But "close" hides real differences in how they bill, and those differences flip the winner depending on the workload. This guide maps the tiers to each other, lists the prices side by side, and then costs the same three scenarios on each provider.

All prices are list, US East (AWS us-east-1, Azure East US, GCS us-east1), locally redundant where the option exists, at the time of writing. Each provider adjusts prices a few times a year; the [cloud storage cost calculator](/cloud-storage-cost-calculator/) carries the current table and the date it was checked.

## Tier mapping

The tiers line up more neatly than the names suggest:

| Access pattern | AWS S3 | Azure Blob | Google Cloud Storage |
| --- | --- | --- | --- |
| Frequent | Standard | Hot | Standard |
| Monthly | Standard-IA | Cool | Nearline |
| Quarterly | Glacier Instant Retrieval | Cold | Coldline |
| Yearly, hours to retrieve | Glacier Flexible Retrieval | — | — |
| Yearly, offline | Glacier Deep Archive | Archive | Archive |
| Automatic | Intelligent-Tiering | (lifecycle policies only) | Autoclass |

Azure has no equivalent of Glacier Flexible; its Archive tier is offline (up to 15 hours to rehydrate) and its Cold tier is online. Google's Archive tier is *online* (millisecond access) but carries a 365-day minimum and the highest retrieval fee of any tier on any provider.

## Storage price per GB-month

| Tier | AWS | Azure (LRS) | GCS |
| --- | --- | --- | --- |
| Frequent | $0.023 | $0.0184 | $0.020 |
| Monthly | $0.0125 | $0.010 | $0.010 |
| Quarterly | $0.004 | $0.0036 | $0.004 |
| Yearly (online/flex) | $0.0036 | — | — |
| Offline/archive | $0.00099 | $0.00099 | $0.0012 |

Azure is cheapest at the hot end by about 20%, mainly because its default LRS keeps three copies in one datacenter rather than across zones. Its zone-redundant option (ZRS) is $0.023, the same as S3. Google's Standard is 13% under S3. At the cold end the three are within a fraction of a cent.

## Retrieval and minimum duration

| Tier | AWS retrieval / min days | Azure retrieval / min days | GCS retrieval / min days |
| --- | --- | --- | --- |
| Monthly | $0.01 / 30 | $0.01 / 30 | $0.01 / 30 |
| Quarterly | $0.03 / 90 | $0.03 / 90 | $0.02 / 90 |
| Yearly flex | $0.01 (bulk free) / 90 | — | — |
| Archive | $0.02 (bulk $0.0025) / 180 | $0.02 (high priority $0.10) / 180 | $0.05 / 365 |

The biggest divergence is archive retrieval: S3 Deep Archive with bulk retrieval is effectively free to read back slowly; GCS Archive is $0.05/GB every time, and its 365-day minimum makes it unsuitable for anything you might delete within a year.

## Requests per 1,000

| Operation | AWS Standard | Azure Hot | GCS Standard |
| --- | --- | --- | --- |
| Write | $0.005 | $0.0065 | $0.005 |
| Read | $0.0004 | $0.0005 | $0.0004 |

Nearly identical on hot tiers. On archive tiers Azure stands out: $0.13 per 10,000 writes and $5.50 per 10,000 reads, because every read is a rehydration request. Azure Archive with many small objects is the single most expensive combination in this comparison.

## Internet egress

| | AWS | Azure | GCS |
| --- | --- | --- | --- |
| Free per month | 100 GB | 100 GB | 200 GB |
| First paid tier | $0.09/GB | $0.087/GB | $0.12/GB |
| At 10 TB+ per month | $0.085 | $0.083 | $0.11 |
| At 150 TB+ per month | $0.05 | $0.05 | $0.08 |

Google is the outlier: 30–40% more expensive to get data out. If you serve to the internet, that difference outweighs every storage-price advantage GCS has.

## Scenario A: 5 TB application storage, moderate reads

5,000 GB stored on the frequent tier, 500 GB egress/month, 2 million writes, 10 million reads.

| | AWS S3 Standard | Azure Hot | GCS Standard |
| --- | --- | --- | --- |
| Storage | $115.00 | $92.00 | $100.00 |
| Egress | $36.00 | $34.80 | $36.00 |
| Writes | $10.00 | $13.00 | $10.00 |
| Reads | $4.00 | $5.00 | $4.00 |
| **Monthly** | **$165** | **$145** | **$150** |

Azure wins on storage price; the difference is 12% and would evaporate if you needed zone redundancy.

## Scenario B: 30 TB backup archive, read once a year

30,000 GB in the archive tier, objects of 1–5 GB, one full restore per year that leaves the provider.

| | AWS Deep Archive (bulk) | Azure Archive | GCS Archive |
| --- | --- | --- | --- |
| Storage / month | $29.70 | $29.70 | $36.00 |
| Annual storage | $356 | $356 | $432 |
| One full retrieval | $75 | $600 | $1,500 |
| Egress on restore | $2,700 | $2,610 | $3,600 |
| **First-year total** | **$3,131** | **$3,566** | **$5,532** |

AWS wins, and by more than the table shows if you use bulk retrieval and accept a 48-hour wait. GCS Archive's retrieval fee and egress make it the most expensive place to keep a DR copy you might actually need to restore. If the restore happens *within* the provider (to a VM in the same region), drop the egress line and the gap narrows sharply.

## Scenario C: 1 TB of images served to the public, 8 TB/month egress

1,000 GB on the frequent tier, 8,000 GB egress, 50 million reads.

| | AWS S3 Standard | Azure Hot | GCS Standard |
| --- | --- | --- | --- |
| Storage | $23 | $18 | $20 |
| Egress | $711 | $687 | $936 |
| Reads | $20 | $25 | $20 |
| **Monthly** | **$754** | **$730** | **$976** |

Egress is 92–96% of every bill. The real answer for this workload is a CDN in front of the bucket (CloudFront, Azure Front Door, Cloud CDN all charge less per GB than raw egress and include free tiers) or a provider with free egress such as Cloudflare R2, which would price this at roughly $15/month plus request charges. The storage-provider choice barely matters.

## Non-price differences worth knowing

- **Redundancy defaults.** S3 Standard and GCS Standard are multi-zone by default. Azure's LRS is single-datacenter; you pay more for ZRS or GRS. Compare like with like.
- **Object versioning and lifecycle.** All three support both. Azure's lifecycle rules are the least granular (no per-prefix filters on some rule types); S3's are the most.
- **Consistency.** All three are now strongly consistent for reads after writes.
- **Free tiers.** AWS gives 5 GB of S3 Standard for 12 months. Azure and Google each offer 5 GB of hot/standard storage on an ongoing basis (Azure for 12 months on new accounts, Google's Always Free in us-regions). None of them meaningfully change a real bill.
- **Firebase.** Firebase Cloud Storage is a GCS bucket with Firebase auth and SDKs on top; it bills at GCS Standard rates ($0.026/GB in the Firebase pricing table, which reflects the multi-region default). See the [Firebase storage calculator](/firebase-storage-calculator/).

## A short decision guide

- **Already on one cloud:** stay there. Intra-provider transfer is free and cross-provider egress is not.
- **Cold archive you'll rarely restore:** AWS Deep Archive, mostly for bulk retrieval pricing.
- **Hot storage, price-sensitive, single-zone acceptable:** Azure LRS.
- **Serving to the internet:** whichever has your CDN, or a free-egress provider.
- **Unsure:** price it on all three with the [cloud storage cost calculator](/cloud-storage-cost-calculator/), then check the [S3](/s3-storage-calculator/), [Azure](/azure-storage-calculator/) and [Google Cloud](/google-cloud-storage-calculator/) calculators for the per-tier breakdown on the one you're leaning toward.
