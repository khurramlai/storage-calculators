---
title: "The Cloud Storage Bill Nobody Calculates: Egress, Requests and Retrieval"
description: "Per-gigabyte storage is usually the smallest line on a cloud storage invoice. This guide explains the four other charges, when each one dominates, and how to estimate them before you commit."
summary: "Why storage is rarely the big line item, how egress, request, retrieval and early-deletion charges work, and how to estimate each."
category: cloud
published: 2026-09-13
calculators:
  - cloud-storage-cost-calculator
  - s3-storage-calculator
  - azure-storage-calculator
  - google-cloud-storage-calculator
readingMinutes: 9
---

Ask someone what cloud storage costs and they'll quote a per-gigabyte-per-month price: two cents, one cent, a tenth of a cent. That number is real, and for a lot of workloads it's the smallest thing on the invoice. This guide covers the other four charges, in roughly the order they surprise people.

## 1. Egress: paying to read your own data out

Every major provider charges for data leaving their network to the internet. Data coming *in* is free. The list prices for the first tier:

| Provider | Free per month | Then | Drops to (at 10+ TB/month) |
| --- | --- | --- | --- |
| AWS S3 | 100 GB | $0.09/GB | $0.05/GB at 150 TB+ |
| Azure Blob | 100 GB | $0.087/GB | $0.05/GB at 150 TB+ |
| Google Cloud Storage | 200 GB (Standard tier networking; 100 GB in some accounts) | $0.12/GB | $0.08/GB at 10 TB+ |
| Cloudflare R2 | unlimited | $0 | $0 |
| Backblaze B2 | 3× stored volume | $0.01/GB | — |

Worked comparison: 2 TB stored, 6 TB downloaded per month (a modest media site).

| Provider | Storage | Egress | Total |
| --- | --- | --- | --- |
| S3 Standard | $46 | $531 | **$577** |
| Azure Hot | $37 | $513 | **$550** |
| GCS Standard | $40 | $696 | **$736** |
| Cloudflare R2 | $30 | $0 | **$30** |

The storage line is 6–8% of the bill on the big three. This is why "which provider has the cheapest per-GB storage" is the wrong question for anything that serves data to users; the right question is "what's my egress ratio". If you download more than about 30% of what you store each month, egress is your main cost, and a provider with free egress or a CDN in front of the bucket changes the picture completely.

**Traffic that doesn't count as internet egress:** transfers to other services in the same region (S3 to EC2 in us-east-1, Blob to a VM in the same Azure region) are free or near-free. Cross-region transfers cost $0.01–0.02/GB. The bill only gets expensive when bytes leave the provider.

## 2. Requests: paying per operation

Every PUT, GET, LIST, COPY and DELETE is metered. Prices look negligible until you have small objects:

| Operation | S3 Standard | Azure Hot | GCS Standard |
| --- | --- | --- | --- |
| Write (PUT/POST/COPY/LIST), per 1,000 | $0.005 | $0.0065 (per 10,000: $0.065) | $0.005 |
| Read (GET), per 1,000 | $0.0004 | $0.0005 | $0.0004 |
| Delete | free | free | free |

Example: an application that writes 20 million 50 KB log objects a month (1 TB) and reads each once.

- Storage: 1,000 GB × $0.023 = **$23**
- Writes: 20,000 × $0.005 = **$100**
- Reads: 20,000 × $0.0004 = **$8**

Request charges are more than four times the storage. Batching those logs into 100 MB objects before upload takes the write charge to $0.10.

Request prices are also *higher* on colder tiers: S3 Standard-IA charges $0.01 per 1,000 writes, Glacier Deep Archive $0.05, Azure Archive $0.13 per 10,000 writes and a staggering $5.50 per 10,000 reads (each read is a rehydration request). Cold tiers assume you write once and read almost never; use them that way.

## 3. Retrieval: the cold-tier tax

Every tier below "hot" charges per gigabyte *read back*, on top of the request charge and on top of any egress. It's how the provider recovers the cost of the cheap storage.

| Tier | Retrieval $/GB |
| --- | --- |
| S3 Standard-IA / One Zone-IA | 0.01 |
| S3 Glacier Instant Retrieval | 0.03 |
| S3 Glacier Flexible (standard / bulk) | 0.01 / free |
| S3 Glacier Deep Archive (standard / bulk) | 0.02 / 0.0025 |
| Azure Cool | 0.01 |
| Azure Cold | 0.03 |
| Azure Archive (standard / high priority) | 0.02 / 0.10 |
| GCS Nearline | 0.01 |
| GCS Coldline | 0.02 |
| GCS Archive | 0.05 |

The crossover math is simple. Standard-IA saves $0.0105/GB-month on storage versus Standard and charges $0.01/GB on retrieval. If you read more than roughly 100% of the stored volume per month, IA costs more than Standard. For Glacier Instant Retrieval (saves $0.019, charges $0.03) the crossover is about 63% read per month. For GCS Archive (saves $0.0188, charges $0.05) it's under 40%.

A full disaster-recovery restore from cold storage is the case to price in advance. Restoring 20 TB from GCS Archive is $1,000 in retrieval plus $2,400 in egress if it's leaving Google. From S3 Glacier Flexible with bulk retrieval it's $0 retrieval plus $1,800 egress. From Azure Archive, $400 plus $1,740. All three are survivable, but they should be in the DR budget rather than discovered during the incident.

## 4. Minimum duration and early deletion

Cold tiers bill a minimum period per object regardless of when you delete it:

| Tier | Minimum billed |
| --- | --- |
| S3 Standard-IA, One Zone-IA; Azure Cool; GCS Nearline | 30 days |
| S3 Glacier Instant, Glacier Flexible; Azure Cold; GCS Coldline | 90 days |
| S3 Glacier Deep Archive; Azure Archive | 180 days |
| GCS Archive | 365 days |

This is the charge that catches backup rotations. A nightly backup written to Azure Archive and deleted after 14 days is billed for 180 days: 13× the expected storage cost. Match the tier's minimum to your retention, or use a hot tier for the short-lived copies and a lifecycle rule to move only the long-lived ones cold.

Overwriting an object counts as deleting the old version, so a daily-refreshed file in a cold tier also triggers the minimum every day.

## 5. The small-object surcharges

Covered in more detail in the [S3 storage classes guide](/guides/s3-storage-classes-explained/), but the short version: S3's IA and Glacier Instant tiers bill a minimum of 128 KB per object; Glacier Flexible and Deep Archive add 40 KB of overhead per object; S3 Intelligent-Tiering charges $0.0025 per 1,000 objects for monitoring. Azure and GCS have no per-object minimum size, but their per-request charges make millions of small objects expensive anyway.

## Putting it together: a full estimate

For any workload, write down five numbers:

1. **GB stored** (average over the month)
2. **GB downloaded to the internet** per month
3. **GB read back** from a cold tier per month (0 for hot tiers)
4. **Thousands of write requests** and **thousands of read requests** per month
5. **Average object lifetime**, compared against the tier minimum

Then the monthly bill is roughly:

```
storage_gb × storage_price
+ max(0, egress_gb − free_egress) × egress_price
+ retrieval_gb × retrieval_price
+ write_k × write_price + read_k × read_price
+ early-deletion top-up if lifetime < minimum
```

The [cloud storage cost calculator](/cloud-storage-cost-calculator/) takes exactly these inputs and prices them across every tier of AWS, Azure and Google side by side, which is the quickest way to see which line dominates for your case.

## Three rules

- **Serving data to users:** egress dominates. Use a CDN, or a provider with free egress, before worrying about storage tiers.
- **Lots of small objects:** requests dominate. Aggregate before upload.
- **Backups and archives:** minimum duration and retrieval dominate. Match the tier's minimum to your retention and price the full restore.

Storage per gigabyte matters last.
