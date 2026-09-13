---
title: "How to Calculate CCTV Storage by Hand"
description: "The formula every surveillance storage calculator uses, the bitrate table behind it, three fully worked examples, and retention tables for common drive sizes so you can sanity-check any quote."
summary: "The bitrate-to-terabytes formula with worked examples and retention tables for 2, 4, 8 and 16 TB drives."
category: surveillance
published: 2026-09-11
calculators:
  - cctv-storage-calculator
  - nvr-storage-calculator
  - ip-camera-storage-calculator
readingMinutes: 10
---

Every CCTV storage calculator, including the ones on this site, does the same arithmetic. Once you can do it on paper you can check a supplier's quote in your head, spot the assumption they've buried, and know which knob to turn when the answer is too big. This guide walks through the formula, where the numbers come from, and three worked examples.

## The formula

Storage is bitrate multiplied by time, summed across cameras:

```
Storage (bytes) = bitrate (bits/s) ÷ 8 × seconds recording × number of cameras
```

The ÷ 8 converts bits to bytes. In practical units, with bitrate in megabits per second and time in hours:

```
GB per camera per day = bitrate (Mbps) × 3600 × hours per day ÷ 8 ÷ 1000
```

So a camera streaming at 4 Mbps for 24 hours writes 4 × 3600 × 24 ÷ 8 ÷ 1000 = **43.2 GB per day**. Multiply by the number of days you want to keep, multiply by the number of cameras, and you have your total.

Everything else in a calculator is about estimating that first number, the bitrate, because it's the one figure most people don't have to hand.

## Where the bitrate comes from

A camera's bitrate is set in its encoder configuration. It depends on four things, in decreasing order of importance:

1. **Resolution.** More pixels, more bits. A 4K (8 MP) camera has four times the pixels of a 1080p (2 MP) one.
2. **Codec.** H.265 needs roughly half the bitrate of H.264 for the same picture. Vendor smart codecs (Hikvision H.265+, Hanwha WiseStream, Axis Zipstream) cut it again by lowering quality on static parts of the frame. See [H.264 vs H.265 vs smart codecs](/guides/h264-vs-h265-vs-smart-codecs/).
3. **Frame rate.** Bitrate scales roughly linearly with fps. 15 fps needs about 60% of what 25 fps needs, not exactly 60% because inter-frame compression gets slightly less effective with fewer frames, but close enough for planning.
4. **Scene complexity.** A car park at night with rain on the lens costs more bits than an empty corridor. This is the ±20–30% you can't calculate in advance.

The reference table below is what this site's calculators use. It's an H.264 baseline at 25 fps, derived from the planning tables Hikvision, Hanwha and Axis publish for their own tools and rounded to sensible numbers. Multiply by 0.5 for H.265 and 0.25 for a smart codec.

| Resolution | Megapixels | H.264 @ 25 fps | H.265 @ 25 fps | Smart codec @ 25 fps |
| --- | --- | --- | --- | --- |
| 480p (D1) | 0.4 | 1 Mbps | 0.5 Mbps | 0.25 Mbps |
| 720p | 1 | 2 Mbps | 1 Mbps | 0.5 Mbps |
| 1080p | 2 | 4 Mbps | 2 Mbps | 1 Mbps |
| 3 MP | 3 | 6 Mbps | 3 Mbps | 1.5 Mbps |
| 4 MP | 4 | 8 Mbps | 4 Mbps | 2 Mbps |
| 5 MP | 5 | 10 Mbps | 5 Mbps | 2.5 Mbps |
| 4K | 8 | 16 Mbps | 8 Mbps | 4 Mbps |

If you already know the actual bitrate from the camera's web interface, use that instead. It beats any table.

## Worked example 1: a small shop

Four 1080p cameras, H.264, 15 fps, recording 24/7, 30 days of retention.

1. Bitrate: 4 Mbps at 25 fps, scaled to 15 fps: 4 × 15 ÷ 25 = **2.4 Mbps**.
2. Per camera per day: 2.4 × 3600 × 24 ÷ 8 ÷ 1000 = **25.9 GB**.
3. Per camera for 30 days: 25.9 × 30 = **777 GB**.
4. Four cameras: 777 × 4 = **3.1 TB**.

A 4 TB surveillance drive covers it with a little headroom. If the retailer says "30 days on 2 TB", they've assumed a lower bitrate or motion-only recording. Ask which.

## Worked example 2: a house with a modern NVR

Eight 4 MP cameras, H.265, 20 fps, motion-triggered recording, 14 days.

1. Bitrate: 8 Mbps H.264 baseline × 0.5 for H.265 = 4 Mbps at 25 fps; scaled to 20 fps: 4 × 20 ÷ 25 = **3.2 Mbps**.
2. Recording time: motion detection on a typical home exterior triggers roughly 30–50% of the time. Use 40%: 24 × 0.4 = **9.6 effective hours per day**.
3. Per camera per day: 3.2 × 3600 × 9.6 ÷ 8 ÷ 1000 = **13.8 GB**.
4. Per camera for 14 days: 13.8 × 14 = **194 GB**.
5. Eight cameras: 194 × 8 = **1.55 TB**.

A 2 TB drive works. The 40% figure is the soft spot: a camera on a busy street will trigger closer to 80%, a back garden closer to 15%. If you don't know, size for continuous recording and treat motion as a bonus.

## Worked example 3: a warehouse

Thirty-two 1080p cameras, H.265+ (Hikvision smart codec), 25 fps, 24/7, 90 days retention. This is the sort of spec that goes on a tender.

1. Bitrate: 4 Mbps H.264 baseline × 0.25 for H.265+ = **1 Mbps** at 25 fps.
2. Per camera per day: 1 × 3600 × 24 ÷ 8 ÷ 1000 = **10.8 GB**.
3. Per camera for 90 days: 10.8 × 90 = **972 GB**.
4. Thirty-two cameras: 972 × 32 = **31.1 TB**.

Plus a 20% safety margin for scene complexity and the audio channel: **37 TB**. In a 4-bay NVR that's 4 × 10 TB in RAID 0 (no redundancy, which is how most NVRs ship) or 4 × 14 TB in RAID 5 if the NVR supports it and you want to survive a drive failure. The [NVR storage calculator](/nvr-storage-calculator/) does this with drive-count recommendations.

## Retention tables

How many days a single drive holds for a given number of cameras, 24/7 recording, at the bitrates in the table above. Decimal TB, no safety margin, so treat these as upper bounds.

### 1080p, H.264, 15 fps (2.4 Mbps per camera, the classic budget DVR spec)

| Cameras | 2 TB | 4 TB | 8 TB | 16 TB |
| --- | --- | --- | --- | --- |
| 4 | 19 days | 39 days | 77 days | 154 days |
| 8 | 10 days | 19 days | 39 days | 77 days |
| 16 | 5 days | 10 days | 19 days | 39 days |
| 32 | 2 days | 5 days | 10 days | 19 days |

### 4 MP, H.265, 20 fps (3.2 Mbps per camera, a typical modern IP camera)

| Cameras | 2 TB | 4 TB | 8 TB | 16 TB |
| --- | --- | --- | --- | --- |
| 4 | 14 days | 29 days | 58 days | 116 days |
| 8 | 7 days | 14 days | 29 days | 58 days |
| 16 | 4 days | 7 days | 14 days | 29 days |
| 32 | 2 days | 4 days | 7 days | 14 days |

### 4K, H.265, 15 fps (4.8 Mbps per camera)

| Cameras | 2 TB | 4 TB | 8 TB | 16 TB |
| --- | --- | --- | --- | --- |
| 4 | 10 days | 19 days | 39 days | 77 days |
| 8 | 5 days | 10 days | 19 days | 39 days |
| 16 | 2 days | 5 days | 10 days | 19 days |

Rule of thumb from these: **a 1080p H.264 camera at 15 fps eats about 25 GB a day, and every doubling of resolution or frame rate doubles that.** A smart codec roughly quarters it.

## Things the formula leaves out

- **Audio.** 64–128 kbps per channel. Negligible on modern cameras; adds ~5% on a 16-channel analog system at low bitrates.
- **Sub-streams.** Most NVRs record only the main stream, but some (and most cloud-backup features) also store a low-resolution sub-stream. Check the recording schedule.
- **Event clips and pre-record buffers.** Alarm recording often keeps a separate copy of the event with 5–10 seconds of pre-roll. Small, but it's not zero.
- **Filesystem overhead and the TB/TiB gap.** A "4 TB" drive shows as about 3.6 TiB and the NVR reserves a little. Budget 10% for this. See [why your 4 TB drive shows 3.6 TB](/guides/tb-vs-tib-why-your-drive-is-smaller/).
- **Variable bitrate peaks.** If the camera is set to VBR with a cap, the *average* is what matters for storage and it's usually below the cap. If it's set to CBR, the cap *is* the bitrate, all the time, even at 3 a.m. on an empty car park.

That last point is the single most common reason real NVRs fill up faster than the calculation. It gets its own guide: [why your NVR fills up faster than the calculator said](/guides/why-your-nvr-fills-up-faster-than-calculated/).

## Checking a supplier's quote

Take the quote's camera count, resolution, fps, retention and drive size and run them backwards through the formula. If the implied bitrate is under 1 Mbps for a 1080p camera, they've assumed a smart codec and probably motion-only recording. That may be fine, but it should be stated, because the day the smart codec is turned off to fix a playback problem is the day retention drops from 30 days to 8.
