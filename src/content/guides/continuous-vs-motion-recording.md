---
title: "Continuous vs Motion Recording: What You Save and What You Lose"
description: "Motion-only recording can halve surveillance storage, but it also drops footage you may need. How to estimate the real duty cycle per camera, and a hybrid setup that keeps the saving without the gaps."
summary: "Real-world motion duty cycles by camera location, the evidence you lose with motion-only, and a hybrid schedule that keeps both."
category: surveillance
published: 2026-09-13
calculators:
  - security-camera-storage-calculator
  - video-surveillance-storage-calculator
  - unifi-storage-calculator
readingMinutes: 7
---

Every NVR offers a choice between recording all the time and recording only when something moves. Motion-only is the default on most consumer systems and a common cost-saving on commercial ones. The saving is real. So is the cost, and it doesn't show up until you need footage that isn't there.

## How much motion recording actually saves

Storage calculators, including this site's, apply a fixed duty cycle to motion recording: 40% is the default here, meaning the camera is assumed to record 9.6 hours out of every 24. The true number varies enormously by what the camera looks at.

| Camera location | Typical motion duty cycle | Effective saving vs continuous |
| --- | --- | --- |
| Interior room, business hours only | 10–20% | 80–90% |
| Residential driveway or front door | 15–30% | 70–85% |
| Back garden, no road in view | 10–25% | 75–90% |
| Shop floor during opening hours (12 h/day) | 60–80% of open hours ≈ 35–40% of the day | 60–65% |
| Car park | 40–70% | 30–60% |
| Street-facing with traffic | 80–100% | 0–20% |
| Anything with trees, flags, water or a flickering light in frame | 70–100% | 0–30% |

The last two rows are why "motion recording saves 60%" is only true on average. A street camera on motion recording is a continuous camera with extra event overhead.

If you have an existing system, the NVR's playback timeline shows the real duty cycle per camera: look at how much of the bar is filled over a typical week. If you're planning a new one, use the table, and be pessimistic for anything outdoors.

## What you lose

**Pre-event context.** Motion recording starts when the detector fires, plus a pre-record buffer of typically 5–10 seconds. A person who approached slowly, stood still in a shadow, or was partially out of frame may not trigger detection until they're already at the door. What happened before is gone.

**Slow or small movement.** Detection works on pixel change above a threshold. A figure at the far end of a wide-angle view, a hand reaching through a window, or something happening in fog or heavy rain may not cross it. Vendor "smart" detection (human/vehicle classification) helps with false positives but can miss the same subtle cases.

**Anything during a detection failure.** A camera that loses its motion configuration after a firmware update, a zone that was drawn slightly wrong, a sensitivity that was turned down to stop nuisance alerts: each produces a camera that appears to be working and records nothing. Continuous recording fails loudly (the timeline has a gap); motion recording fails silently.

**Proof of absence.** "Show me that nobody entered the yard between 2 and 4 a.m." is a common request from police and insurers. With motion recording, an empty timeline could mean nobody entered or could mean detection didn't fire. With continuous recording, an empty yard is on tape.

**Night footage.** Infrared noise at night raises false positives, so people turn sensitivity down, which raises false negatives at exactly the time of day when events are most likely.

## Hybrid recording: continuous at low quality, motion at full quality

Most NVRs from Hikvision, Dahua, Hanwha, Uniview and their OEMs, plus Synology Surveillance Station and Blue Iris, support a schedule that records the **sub-stream continuously** and the **main stream on motion**. UniFi Protect's equivalent is "Detections" mode with a continuous low-bitrate timelapse, and Frigate does the same with its `record` and `detect` roles.

The sub-stream is typically 640×360 to 704×576 at 0.3–1 Mbps. It's enough to see that a car arrived and a person walked to the door, and to tell what time it happened. The main stream at full resolution then covers the event itself with a normal pre-record buffer.

Storage for a camera set up this way is roughly:

```
continuous sub-stream  +  motion main-stream × duty cycle
```

Example, one 4 MP H.265 camera at 20 fps (main ≈ 3.2 Mbps) with a 0.5 Mbps sub-stream and a 30% motion duty cycle, 24 hours:

- Continuous sub-stream: 0.5 × 3600 × 24 ÷ 8 ÷ 1000 = **5.4 GB/day**
- Motion main stream: 3.2 × 3600 × 24 × 0.3 ÷ 8 ÷ 1000 = **10.4 GB/day**
- Total: **15.8 GB/day**, against 34.6 GB/day for continuous main-stream and 10.4 GB/day for motion-only

You give back about half the motion-only saving and get an unbroken timeline in return. For most residential and small-business systems this is the right trade.

## When motion-only is the right choice

- **Cameras with onboard SD storage** (Reolink, Wyze, Eufy, Ring and similar) where the card is 32–256 GB and continuous recording would give you a day or two. Motion-only with cloud backup of events is how these are designed to work.
- **Very low-traffic interior spaces** where the duty cycle is under 15% and the risk of a missed trigger is acceptable: a stockroom, a server closet, a holiday home.
- **Bandwidth-constrained links** where cameras are on Wi-Fi or a cellular backhaul and continuous streaming isn't possible.

## When continuous is non-negotiable

- **Regulated environments** (cash handling, pharmacies, licensed premises, care settings) where the requirement is usually written as "continuous recording, N days".
- **Cameras that provide the only view of an entry point.**
- **Anywhere you'd need to prove that something did *not* happen.**

## Configuring it

1. Set the main stream to VBR H.265 (or a smart codec) so continuous recording, where used, costs as little as possible. See [H.264 vs H.265 vs smart codecs](/guides/h264-vs-h265-vs-smart-codecs/).
2. Draw the motion zone to exclude roads, trees and sky. Enable human/vehicle classification if the camera has it.
3. Set pre-record to 10 seconds and post-record to 10–15 seconds.
4. In the recording schedule, set the sub-stream to continuous and the main stream to event/motion.
5. After a week, check the timeline on each camera. Any camera with a near-solid motion bar should be switched to continuous main-stream at a lower frame rate; it's using the storage anyway and continuous is more reliable.

Then size the drive with the [security camera storage calculator](/security-camera-storage-calculator/) using continuous for the cameras that need it and motion for the ones that don't, and add 20% for the sub-stream and event overhead. Sizing for the worst case (everything continuous) and treating motion as a bonus is the safe approach if you're unsure; the drive is the cheapest part of the system.
