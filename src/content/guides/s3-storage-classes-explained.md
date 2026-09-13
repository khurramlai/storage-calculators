---
title: "S3 Storage Classes Explained With Real Cost Examples"
description: "Every Amazon S3 storage class compared on price, retrieval time, minimum duration and hidden per-object charges, with three worked scenarios showing which class actually comes out cheapest."
summary: "All seven S3 classes on one table, the minimum-duration and small-object traps, and three costed scenarios."
category: cloud
published: 2026-09-12
calculators:
  - s3-storage-calculator
  - aws-s3-cold-storage-calculator
  - cloud-storage-cost-calculator
readingMinutes: 11
---

Amazon S3's pricing page lists seven storage classes, and the headline per-gigabyte price ranges from $0.023 down to under $0.001. Picking the cheapest one looks obvious until the first bill arrives with retrieval fees, early-deletion charges and per-object overhead that the per-GB number never mentioned. This guide lays out what each class costs in full and works through three realistic scenarios.

Prices are US East (N. Virginia) list prices at the time of writing. Other regions are typically 5–30% higher. AWS changes prices a few times a year; the [S3 storage calculator](/s3-storage-calculator/) carries the current figures and the date they were checked.

## The classes at a glance

| Class | Storage $/GB-month | Retrieval $/GB | First-byte latency | Minimum duration | Minimum object | Availability |
| --- | --- | --- | --- | --- | --- | --- |
| Standard | 0.023 | 0 | milliseconds | none | none | 99.99% |
| Intelligent-Tiering | 0.023 → 0.00099 (auto) | 0 | ms (archive tiers: minutes–hours) | none | none (monitoring fee per object) | 99.9% |
| Standard-IA | 0.0125 | 0.01 | milliseconds | 30 days | 128 KB | 99.9% |
| One Zone-IA | 0.01 | 0.01 | milliseconds | 30 days | 128 KB | 99.5% |
| Glacier Instant Retrieval | 0.004 | 0.03 | milliseconds | 90 days | 128 KB | 99.9% |
| Glacier Flexible Retrieval | 0.0036 | 0.01 (standard), 0 (bulk) | minutes to 12 hours | 90 days | 40 KB overhead | 99.99% |
| Glacier Deep Archive | 0.00099 | 0.02 (standard), 0.0025 (bulk) | 12 to 48 hours | 180 days | 40 KB overhead | 99.99% |

All classes except One Zone-IA store data across at least three availability zones and quote 99.999999999% (eleven nines) durability. The durability is the same everywhere; you're paying for access speed and access frequency.

## The three charges the per-GB price hides

**Retrieval fees.** Every class below Standard charges per gigabyte *read*. Standard-IA at $0.0125 storage plus $0.01 retrieval is cheaper than Standard only if you read less than about 105% of the stored volume per month. Read the whole bucket twice a month and Standard wins.

**Minimum storage duration.** Delete or overwrite an object in Standard-IA before 30 days and you're billed for the full 30. Glacier Flexible and Instant Retrieval bill 90 days minimum; Deep Archive bills 180. Write daily backups to Deep Archive and delete them after a week and you pay for six months of storage on each one. That's 26× the storage cost you expected.

**Per-object overhead.** Standard-IA, One Zone-IA and Glacier Instant Retrieval bill a minimum of 128 KB per object. A million 10 KB thumbnails (10 GB) bill as 128 GB. Glacier Flexible and Deep Archive add 32 KB of Standard-priced index plus 8 KB of metadata per object on top of the object size. Intelligent-Tiering charges $0.0025 per 1,000 objects per month for monitoring, which for a million small objects is $2.50 a month regardless of what they weigh.

The rule that falls out: **cold classes are for large objects that live a long time and are rarely read.** Aggregate small files into archives (tar, zip) before sending them cold.

## Retrieval tiers for the Glacier classes

Glacier Flexible Retrieval and Deep Archive let you choose how long you'll wait:

| Class | Expedited | Standard | Bulk |
| --- | --- | --- | --- |
| Glacier Flexible | 1–5 min, $0.03/GB + $10/1,000 requests | 3–5 hours, $0.01/GB | 5–12 hours, free |
| Deep Archive | not available | 12 hours, $0.02/GB | 48 hours, $0.0025/GB |

Bulk retrieval is what makes Glacier Flexible viable for disaster recovery: restoring 20 TB costs nothing in retrieval fees if you can wait half a day. You still pay internet egress at $0.09/GB if the data is leaving AWS, which on 20 TB is $1,800 and is usually the dominant cost of a restore. The [AWS cold storage calculator](/aws-s3-cold-storage-calculator/) breaks out storage, retrieval and egress separately for this reason.

Objects restored from Glacier are temporarily copied into Standard for the number of days you specify, and you pay Standard storage for that copy while it exists.

## Intelligent-Tiering

Intelligent-Tiering moves objects between a frequent-access tier (priced like Standard) and an infrequent-access tier (priced like Standard-IA) based on whether they've been read in 30 days, with optional archive tiers at 90 and 180 days. There are no retrieval fees and no minimum durations. The costs are the monitoring fee ($0.0025 per 1,000 objects) and the fact that you can't force a tier.

It's the right default for data with an *unknown* access pattern: user uploads, logs that might be queried, media libraries. It's the wrong choice for millions of tiny objects (the monitoring fee) or for data you *know* is cold (Glacier is cheaper).

## Scenario 1: 10 TB of nightly server backups

Full backup weekly (1 TB), incrementals daily (50 GB), kept for 90 days. Restores are rare: perhaps one file a month, one full restore a year.

Steady-state stored volume: about 13 fulls and 90 incrementals ≈ 17.5 TB. Objects are large. Retention is fixed at 90 days, which exactly matches Glacier Flexible's minimum.

| Class | Monthly storage | Notes |
| --- | --- | --- |
| Standard | $403 | No reason to pay for millisecond access on backups |
| Standard-IA | $219 | Fine, but Glacier IR is the same speed for a third of the price |
| Glacier Instant Retrieval | $70 | Millisecond restores, $0.03/GB when you do |
| Glacier Flexible Retrieval | $63 | Bulk restore is free; 5–12 hour wait |
| Glacier Deep Archive | $17 | 180-day minimum means each backup is billed for 2× its life: effectively $35 |

**Pick Glacier Flexible Retrieval** if a 12-hour recovery time is acceptable, or **Glacier Instant Retrieval** if the business needs files back in minutes. Deep Archive's 180-day minimum makes it more expensive than it looks for 90-day retention; it wins only if you extend retention past six months.

## Scenario 2: 500 GB of website images served constantly

An e-commerce site's product images. 500 GB stored, 5 TB served per month, 20 million GET requests.

Retrieval fees kill every cold class immediately: 5 TB read per month at $0.01/GB is $50, more than the storage. And the eleven-nines durability doesn't matter for images that also live in the source system.

| Class | Storage | Requests | Retrieval | Egress (after 100 GB free) | Total |
| --- | --- | --- | --- | --- | --- |
| Standard | $11.50 | $8.00 | $0 | $441 | **$460** |
| Standard-IA | $6.25 | $20.00 | $50 | $441 | $517 |

**Pick Standard**, and notice that 96% of the bill is egress, not storage. Putting CloudFront in front of the bucket (CloudFront egress is cheaper and includes 1 TB/month free) will save more than any storage-class decision. The [cloud storage cost calculator](/cloud-storage-cost-calculator/) lets you put egress in explicitly so this shows up before the bill does.

## Scenario 3: 50 TB video archive, kept seven years for compliance

Body-cam or CCTV footage, written once, almost never read, must be retained for seven years. Each file is a few hundred megabytes.

| Class | Monthly | Seven-year total |
| --- | --- | --- |
| Standard | $1,150 | $96,600 |
| Glacier Flexible Retrieval | $180 | $15,120 |
| Glacier Deep Archive | $50 | $4,200 |

**Pick Deep Archive.** A 48-hour retrieval for a compliance request is acceptable, the 180-day minimum is irrelevant at seven years, and objects are large enough that the 40 KB overhead is noise. Put an S3 Lifecycle rule on the bucket to expire objects at seven years so retention doesn't quietly become permanent.

If a subset needs to be reviewable quickly (last 30 days for incident response), keep that window in Standard or Standard-IA with a lifecycle transition to Deep Archive at day 31. Lifecycle transitions cost $0.05 per 1,000 objects into Deep Archive, which for large video files is negligible.

## A decision rule

1. **Read more than once a month, or objects under 128 KB:** Standard, or Intelligent-Tiering if you're unsure.
2. **Read a few times a year, need it in milliseconds:** Glacier Instant Retrieval (or Standard-IA if you'll delete within 90 days).
3. **Read rarely, can wait hours, kept 90+ days:** Glacier Flexible Retrieval.
4. **Read almost never, can wait 1–2 days, kept 6+ months:** Glacier Deep Archive.
5. **Whatever you choose, check egress.** For anything served to the internet, egress is usually the bill.

Run your own numbers through the [S3 storage calculator](/s3-storage-calculator/); it prices every class side by side for the same volume so you can see where the crossover falls for your access pattern.
