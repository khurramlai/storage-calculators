---
title: "Surveillance Hard Drives: WD Purple vs Seagate SkyHawk vs NAS Drives"
description: "What makes a surveillance drive different from a desktop or NAS drive, how the WD Purple and Seagate SkyHawk ranges compare, which capacity to buy, and when a NAS drive is the better choice."
summary: "Why surveillance drives exist, Purple vs SkyHawk line by line, and when an IronWolf or WD Red makes more sense."
category: surveillance
published: 2026-09-12
calculators:
  - nvr-storage-calculator
  - cctv-storage-calculator
  - raid-storage-calculator
readingMinutes: 8
---

Every NVR manual says to use a "surveillance-grade" drive and every forum has someone saying a desktop drive worked fine for years. Both are right, for different reasons. This guide explains what the surveillance classes actually change, compares the two ranges that dominate the market, and gives a straightforward rule for which drive to buy.

## What a surveillance workload looks like

A drive in an NVR does one thing almost continuously: accept a handful of simultaneous sequential write streams, one per camera, 24 hours a day, and occasionally serve a playback read while the writes continue. Over a year that's on the order of 100–200 TB written for a small system and far more for a large one. Two things about this workload are unusual:

1. **Writes must not stall.** If the drive pauses for a second to recover a marginal sector, the incoming video has nowhere to go and frames drop. Recording gaps are a worse outcome than a slightly corrupted frame.
2. **The duty cycle is 100%.** Desktop drives are designed around a few hours a day of use and a workload rating of roughly 55 TB/year. Running one 24/7 under continuous writes exceeds its design assumptions within months.

Surveillance drives address both. Everything else in the marketing is secondary.

## What "surveillance-grade" actually means

**Streaming error recovery (ATA streaming command set).** Standard drives, on hitting a hard-to-read sector, retry for up to tens of seconds before giving up. Surveillance firmware caps the recovery time so the drive keeps accepting writes, accepting the possibility of a small data error in the video rather than a recording gap. WD calls this AllFrame; Seagate calls it ImagePerfect. It's the single most important difference and it's why surveillance drives are a poor choice for a file server, where you'd rather wait and get the data right.

**Workload rating.** Surveillance drives are rated for 180 TB/year (WD Purple, SkyHawk) or 550 TB/year (WD Purple Pro, SkyHawk AI). A desktop drive is rated at 55 TB/year. Exceeding the rating doesn't void the warranty by itself, but it's the manufacturer's own statement of what the drive was engineered for.

**Multi-stream support.** Firmware and cache tuned to interleave many concurrent writes without thrashing. Spec sheets quote a stream count: 64 for Purple and SkyHawk, higher for the Pro/AI variants.

**Rotational vibration tolerance.** Drives in a multi-bay enclosure shake each other. Surveillance and NAS drives include RV sensors that compensate; desktop drives don't, and in an 8-bay chassis their performance degrades.

**Power and thermal profile.** Lower-RPM (5400-class) spindles on the mainstream surveillance models mean less heat in a sealed NVR that often has one small fan.

## WD Purple vs Seagate SkyHawk

Line-by-line as of the current generations. Capacities and specs change; check the datasheet for the exact model number before buying.

| | WD Purple | Seagate SkyHawk | WD Purple Pro | Seagate SkyHawk AI |
| --- | --- | --- | --- | --- |
| Capacities | 1–8 TB (some regions to 12) | 1–8 TB | 8–24 TB | 8–24 TB |
| Spindle | 5400-class (larger models 7200) | 5400-class (larger 7200) | 7200 | 7200 |
| Workload rating | 180 TB/yr | 180 TB/yr | 550 TB/yr | 550 TB/yr |
| Camera streams | up to 64 | up to 64 | up to 64 + 32 AI | up to 64 + 32 AI |
| Drive bays supported | up to 8 | up to 8 | up to 24 | up to 24 (16 in some docs) |
| MTBF | 1 M hours | 1 M hours | 2.5 M hours | 2 M hours |
| Warranty | 3 years | 3 years | 5 years | 5 years |
| Health monitoring | WD Device Analytics (WDDA) | SkyHawk Health Management (SHM) | WDDA | SHM |

In practice, for the same capacity the two mainstream lines are interchangeable. Buy whichever is cheaper or whichever your NVR vendor lists on its compatibility page, because that list is what support will ask about. Hikvision's and Dahua's lists include both; Ubiquiti's UNVR documentation tends to reference Purple and SkyHawk explicitly.

The Pro and AI variants exist for two situations: large drive counts (16–24 bay servers running a VMS) where the extra vibration tolerance and workload rating matter, and analytics workloads where the NVR reads footage back continuously for AI processing while still writing. For a 4- or 8-bay NVR they're a waste of money.

## When a NAS drive is the better choice

If your recorder is not a dedicated NVR but a NAS running Surveillance Station (Synology), QVR (QNAP) or Frigate/Blue Iris on a general-purpose box, a NAS drive is the right pick:

- **Seagate IronWolf / IronWolf Pro** and **WD Red Plus / Red Pro** have similar 24/7 ratings (180 and 300–550 TB/yr) and RV sensors, but use *normal* error recovery with a time limit (TLER / ERC) suited to RAID rather than the streaming-optimised recovery of surveillance drives.
- A NAS with a RAID volume needs the drive to report a bad sector within a few seconds so the RAID controller can rebuild it from parity; that's what TLER does. A surveillance drive's error handling is aimed at the opposite goal.
- The video workload is also mixed with everything else the NAS does.

Avoid **WD Red** (non-Plus) and any drive using shingled magnetic recording (SMR) in either role. SMR drives have terrible sustained-write performance once their cache fills, which for a 24/7 write workload is always. Every current Purple, SkyHawk, IronWolf and Red Plus model is CMR, but it's worth a two-second check of the spec sheet for "recording technology".

## Which capacity to buy

Two rules:

**Fewer, larger drives beat more, smaller ones** up to the point where a single drive failure loses too much footage. In a 2-bay NVR with no RAID, one 8 TB drive is simpler than two 4 TB drives and no less reliable per byte. In a 4-bay NVR that supports RAID 5, four drives are better than two because RAID becomes possible.

**Buy for the retention you need plus 25%.** Run your camera count and codec through the [NVR storage calculator](/nvr-storage-calculator/) or the [CCTV storage calculator](/cctv-storage-calculator/), then round up to the next drive size. The margin covers the TB-to-TiB gap, filesystem overhead, and bitrate creep as you inevitably add a camera or bump a resolution.

Price per terabyte currently bottoms out around the 8–12 TB mark for surveillance drives; below 4 TB you pay a premium per TB, and above 16 TB you pay a premium for density. If capacity math says you need 6 TB, an 8 TB drive is usually the same money.

## Practical notes

- **Format inside the NVR.** Dedicated NVRs use their own filesystem and will insist on initialising the drive. Don't pre-format it on a PC.
- **Check the compatibility list for maximum size.** Older NVRs cap at 6, 8 or 10 TB per bay regardless of what the drive is. Putting a 16 TB drive in a bay that supports 10 TB either fails to initialise or silently uses 10.
- **Enable the health monitoring.** WDDA and SHM report drive health through the NVR's UI on supported models, which is the only early warning you'll get in a box with no SMART tools.
- **Replace on the first reallocated sector, not the first failure.** Under a continuous-write workload a drive that's started remapping sectors rarely recovers.
- **Warranty is 3 years, expect 4–6.** Drives in a well-ventilated NVR commonly run 5+ years; the same drive in a sealed cabinet at 45 °C may not make 3.

## Quick decision rule

| Your recorder | Drive |
| --- | --- |
| Dedicated NVR/DVR, up to 8 bays, no analytics | WD Purple or Seagate SkyHawk, whichever is cheaper on the compatibility list |
| NVR with 16+ bays, or server-side AI analytics | WD Purple Pro or SkyHawk AI |
| NAS running surveillance software, any RAID | Seagate IronWolf or WD Red Plus (CMR) |
| Anything | Not a desktop drive, not SMR |
