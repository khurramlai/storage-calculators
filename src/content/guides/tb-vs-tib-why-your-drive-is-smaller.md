---
title: "Why Your 4 TB Drive Shows 3.6 TB: TB vs TiB and Formatting Overhead"
description: "Where the missing 9% goes when you format a new drive, the difference between decimal and binary units, how much each filesystem and RAID layer reserves, and how to convert without a mistake."
summary: "The decimal-vs-binary unit gap, filesystem and RAID reservations, and a conversion table so your capacity math matches what the OS reports."
category: general
published: 2026-09-13
calculators:
  - raid-storage-calculator
  - nvr-storage-calculator
  - cloud-storage-cost-calculator
readingMinutes: 6
---

A new 4 TB drive shows up as 3.63 TB in Windows, 3.6 TB in a Synology, and 3,726 GB on an NVR. Nothing is missing and nobody is cheating; two different definitions of "terabyte" are in play, and then the filesystem takes a slice. Once you know the numbers, you can convert in your head and stop over- or under-buying.

## Two definitions of a terabyte

Drive manufacturers, cloud providers and the SI system use **decimal** prefixes: a kilobyte is 1,000 bytes, a megabyte 1,000,000, a terabyte 1,000,000,000,000 (10¹²).

Operating systems and most software historically used **binary** prefixes and called them by the same names: a "kilobyte" of 1,024 bytes, a "megabyte" of 1,048,576, a "terabyte" of 1,099,511,627,776 (2⁴⁰). The IEC standardised the unambiguous names kibibyte (KiB), mebibyte (MiB), gibibyte (GiB) and tebibyte (TiB) for the binary versions in 1998, but Windows still labels binary units as KB/MB/GB/TB. macOS switched to decimal in 2009. Linux tools vary and usually say which they mean.

The gap compounds with each prefix:

| Unit | Decimal (bytes) | Binary (bytes) | Binary is smaller by |
| --- | --- | --- | --- |
| kilo / kibi | 10³ | 2¹⁰ | 2.4% |
| mega / mebi | 10⁶ | 2²⁰ | 4.9% |
| giga / gibi | 10⁹ | 2³⁰ | 7.4% |
| tera / tebi | 10¹² | 2⁴⁰ | 9.1% |
| peta / pebi | 10¹⁵ | 2⁵⁰ | 11.2% |

So a 4 TB (decimal) drive is 4 × 10¹² ÷ 2⁴⁰ = **3.638 TiB**. Windows shows 3.63 TB because it's reporting TiB and calling it TB. That's the whole mystery for the first 9%.

## Conversion table for common drive sizes

| Label | Bytes | TiB (what Windows shows as "TB") | GiB |
| --- | --- | --- | --- |
| 1 TB | 1.0 × 10¹² | 0.909 | 931 |
| 2 TB | 2.0 × 10¹² | 1.819 | 1,863 |
| 4 TB | 4.0 × 10¹² | 3.638 | 3,725 |
| 6 TB | 6.0 × 10¹² | 5.457 | 5,588 |
| 8 TB | 8.0 × 10¹² | 7.276 | 7,451 |
| 10 TB | 1.0 × 10¹³ | 9.095 | 9,313 |
| 12 TB | 1.2 × 10¹³ | 10.914 | 11,176 |
| 16 TB | 1.6 × 10¹³ | 14.552 | 14,901 |
| 20 TB | 2.0 × 10¹³ | 18.190 | 18,626 |
| 24 TB | 2.4 × 10¹³ | 21.828 | 22,352 |

Quick mental conversion: **multiply the label by 0.91 to get TiB**, or divide the TiB figure by 0.91 to get back to the label.

## What the filesystem takes

After the unit change, formatting reserves some space for its own bookkeeping. The amount depends on the filesystem:

| Filesystem | Typical overhead on a large drive | Where it goes |
| --- | --- | --- |
| NTFS | 0.1–0.5% | MFT reservation (12.5% is *reserved* but can be reclaimed), journal, metadata |
| exFAT / FAT32 | under 0.1% | Allocation tables |
| APFS | under 0.5% | Container metadata |
| ext4 | ~1.6% plus 5% reserved for root | Inode tables, journal, superblock copies; the 5% root reservation is tunable with `tune2fs -m` |
| XFS | ~0.5% | Allocation groups, log |
| Btrfs | 1–3% | Metadata is stored duplicated by default |
| ZFS | 3.2% slop space plus metadata; performance drops above 80% full | Slop reservation is a fixed 1/32 of the pool |

NAS appliances add their own layer. A Synology volume on Btrfs reserves roughly 2–4% on top of the RAID; QNAP is similar. Dedicated NVRs typically format with a proprietary filesystem and hold back 1–3% for the recording index.

## What RAID takes

RAID overhead is the big one and it's *intentional*: it's the redundancy you're paying for.

| Level | Usable fraction | 4 × 8 TB example |
| --- | --- | --- |
| RAID 0 | 100% | 32 TB (29.1 TiB) |
| RAID 1 (2 drives) | 50% | — |
| RAID 5 | (N − 1) / N | 24 TB (21.8 TiB) |
| RAID 6 | (N − 2) / N | 16 TB (14.6 TiB) |
| RAID 10 | 50% | 16 TB (14.6 TiB) |

The [RAID calculator](/raid-storage-calculator/) reports both decimal TB and TiB so you can match whichever your NAS shows.

## Putting it together

For a 4-bay NAS with four 8 TB drives in RAID 5, formatted Btrfs on a Synology:

1. Raw: 4 × 8 TB = 32 TB decimal
2. RAID 5: 3 × 8 TB = 24 TB decimal usable
3. In TiB: 24 × 0.9095 = 21.83 TiB
4. Filesystem and appliance reservation, ~3%: about **21.2 TiB** shown in DSM

Which is why a "32 TB" NAS shows 21.2 TB free the day you set it up. Every step is expected.

## Cloud storage uses decimal (mostly)

AWS, Azure and Google bill per GB and their consoles report in decimal GB; 1 TB of S3 is 1,000 GB is 10¹² bytes. Windows will report the same files as 931 GB when you download them. This trips people up in the other direction: an "8 TB" (TiB) volume backed up to S3 becomes 8.8 TB (decimal) of billable storage. The [cloud storage cost calculator](/cloud-storage-cost-calculator/) takes decimal GB; convert from your OS's number first.

Some tools, notably `du` and `ls -lh` on Linux and the macOS Finder since 10.6, use decimal. `df` defaults to binary 1K blocks. When two tools disagree by 7–9%, it's this.

## Practical rules

- **Buying to fill a requirement expressed in TiB (from an OS or NAS):** divide by 0.91 to get the decimal label you need, then add the RAID and filesystem overhead.
- **Buying to fill a requirement expressed in decimal TB (from a calculator, a cloud bill or a video bitrate calculation):** the label matches; add RAID and filesystem overhead only.
- **Either way, add 10–15% headroom.** Filesystems slow down and fragment when nearly full, ZFS wants 20% free, and you will add data.

The calculators on this site use decimal TB throughout and say so on each result. If your NAS reports TiB, the number on the box is the one to compare against the calculator, not the number in the file manager.
