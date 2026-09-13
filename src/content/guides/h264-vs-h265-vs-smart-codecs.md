---
title: "H.264 vs H.265 vs Smart Codecs: What They Actually Do to Your Storage"
description: "How H.265 halves surveillance bitrate, how H.265+, WiseStream and Zipstream halve it again, where the savings come from, and the situations where switching codec buys you nothing."
summary: "What each codec does to bitrate, when the vendor savings claims hold up, and the compatibility traps to check before you switch."
category: surveillance
published: 2026-09-11
calculators:
  - ip-camera-storage-calculator
  - hikvision-storage-calculator
  - hanwha-storage-calculator
  - axis-storage-calculator
readingMinutes: 9
---

Codec choice is the biggest lever you have on surveillance storage. Everything else, resolution, frame rate, retention, is a trade-off between storage and something you want. Switching from H.264 to H.265 gives you the same picture for half the bits, and a vendor smart codec gives you close to the same picture for a quarter. This guide explains what's happening, when the claims hold, and when they don't.

## The three tiers

| Codec | Also called | Typical bitrate vs H.264 | Introduced in cameras |
| --- | --- | --- | --- |
| H.264 | AVC, MPEG-4 Part 10 | 100% (baseline) | ~2008 |
| H.265 | HEVC | ~50% | ~2015 |
| H.265 + vendor smart codec | H.265+ (Hikvision), WiseStream II (Hanwha), Zipstream (Axis), H.265 Smart (Dahua), Ubiquiti "Enhanced" | ~25–35% | ~2016 onward |

The savings compound: a smart codec runs on top of H.265, so its ~50% saving is applied to a stream that's already half the size of H.264.

## What H.265 changes

Both H.264 and H.265 work the same way at a high level. A *key frame* (I-frame) stores a full image. The frames that follow (P-frames and B-frames) store only what changed, described as blocks of the previous frame that moved, plus a residual. Surveillance footage is ideal for this: most of the frame is a wall, a floor, or a car park that doesn't move.

H.265 improves on H.264 in three ways that matter here:

1. **Bigger, more flexible blocks.** H.264 splits the frame into 16×16 macroblocks. H.265 uses coding tree units up to 64×64 that can be subdivided as needed. Large flat regions (sky, walls, tarmac) are described in far fewer blocks.
2. **Better motion prediction.** More intra-prediction modes (35 vs 9) and more precise motion vectors mean the "what changed" description is smaller.
3. **Better entropy coding and filtering.** Less waste in how the bits are written, and a sample-adaptive offset filter that cleans up blockiness for free.

The result is roughly half the bitrate for the same visual quality, with higher-resolution footage benefiting most. At 4K, H.265's advantage is closer to 55–60%; at 720p, closer to 40%.

The cost is compute. H.265 encoding takes several times the processing of H.264, which is why it arrived on cameras after ASICs caught up, and why an older NVR may decode fewer H.265 channels than H.264 ones. Check the NVR's spec sheet for "decoding capacity" in both codecs before mixing them.

## What smart codecs change

Vendor smart codecs are not new compression standards. They are *encoder strategies* that use H.265 (or H.264) in a way that's tuned for surveillance rather than for movies. The three techniques, in order of impact:

**Dynamic GOP.** Standard encoders write a key frame at a fixed interval, often every 1–2 seconds. A key frame is 10–20× the size of a P-frame. Smart codecs stretch the interval when nothing is moving, so a static overnight scene might get a key frame every 30 seconds or more. This alone is worth 30–40% on quiet scenes.

**Region-of-interest quality.** The encoder detects moving objects (people, vehicles) and spends bits on them, while compressing static background harder. The background of a 3 a.m. recording gets slightly softer; the person walking through it does not. This is the part that gives smart codecs their "same quality" claim, and it's roughly true for the parts of the image you'd ever look at.

**Adaptive noise handling.** Sensor noise at night looks like motion to a naive encoder, which wastes bits encoding it. Smart codecs filter or recognise it as noise, which is why the savings are often largest on infrared night footage.

Put together, vendors claim 50–75% saving over plain H.265 and 70–90% over H.264. In real deployments:

| Scene | Smart codec saving vs H.264 (typical) |
| --- | --- |
| Indoor corridor, office hours only | 80–90% |
| Retail floor, daytime, moderate traffic | 65–75% |
| Car park, 24/7, weather | 55–70% |
| Busy road junction | 40–55% |
| Camera with constant motion in frame (trees, water, flags) | 30–45% |

This site's calculators use 75% as the default smart-codec saving, which matches the middle of that range. If your cameras look at trees, be pessimistic.

## When switching codec doesn't help

**Constant bitrate mode.** If the camera is set to CBR, it produces the configured bitrate regardless of codec or scene. Switching to H.265 at CBR 4 Mbps gives you better quality for the same storage, not less storage. To save space you need VBR (variable bitrate) with a *maximum* set, so the encoder can drop below it on quiet scenes. This is the number-one reason people report "I turned on H.265 and nothing changed."

**Your NVR or VMS transcodes.** Some recorders convert incoming streams to a house format. If yours does, the camera codec is irrelevant to storage; the recorder's output codec is what matters.

**The smart codec isn't supported end to end.** H.265+ from a Hikvision camera into a third-party NVR usually arrives as plain H.265 (the dynamic-GOP part may survive, the ROI part may not). Zipstream works with any H.264/H.265 decoder because it's standards-compliant on the wire, but you lose nothing by checking. Hanwha WiseStream II needs the NVR to accept the long GOP. The general rule: **stick to one vendor for camera and recorder if you're counting on smart-codec savings.**

**Motion-only recording.** If you only record on motion, you're already discarding the static periods where smart codecs save most. The saving on the clips you do keep is much smaller, perhaps 20–30%.

## The trade-offs you're accepting

Smart codecs are close to free, but not entirely:

- **Long GOP means slow seeking.** A player has to decode from the previous key frame, so scrubbing through footage with a 30-second GOP can feel laggy on older NVR hardware. Most current recorders handle it.
- **Background detail loss.** A static object in the background, a parked car's number plate for instance, may be rendered with less detail than under plain H.265. If you need forensic detail on *static* objects, either exclude that region or use plain H.265 for that camera.
- **Analytics compatibility.** Some server-side video analytics (LPR, face matching) want a short GOP and consistent quality. Check with the analytics vendor before enabling.
- **Bandwidth spikes.** Because the bitrate is scene-driven, a quiet camera can jump from 0.5 Mbps to its VBR cap in a second when a car pulls in. Size your network switch uplinks for the caps, not the averages.

## What to actually configure

For most cameras, a good starting point:

- **Codec:** H.265, with the vendor smart codec enabled if the recorder supports it.
- **Bitrate mode:** VBR (variable), quality set to medium-high.
- **Maximum bitrate:** 2× the calculator's estimate for that resolution, so the encoder has headroom for busy scenes.
- **Key frame interval:** leave on the smart codec's automatic setting, or 2× frame rate (every 2 seconds) on plain H.265.
- **Frame rate:** 12–15 fps for general surveillance; 25–30 only where you need smooth motion (tills, entrances, traffic).

Then check the camera's actual reported bitrate after a day and feed that into the [IP camera storage calculator](/ip-camera-storage-calculator/). Real numbers beat estimates.

## H.266 and AV1

H.266 (VVC) promises another ~40% over H.265 and is shipping in a handful of high-end cameras. AV1, the royalty-free codec used by YouTube and Netflix, is appearing in some consumer cameras. Neither has broad NVR decode support yet. For now they're something to look for on a spec sheet, not something to plan storage around.

## Summary

- H.265 halves your storage over H.264 for the same picture. It should be the default on any camera made after 2017.
- Smart codecs (H.265+, WiseStream, Zipstream) cut it roughly in half again on typical scenes, mostly by stretching the key-frame interval and compressing static background harder.
- None of it works in CBR mode; use VBR with a cap.
- Same-vendor camera and recorder is the safe path if you're relying on the smart-codec saving.
- Compare the vendor pages directly: [Hikvision](/hikvision-storage-calculator/), [Hanwha](/hanwha-storage-calculator/) and [Axis](/axis-storage-calculator/) calculators each default to that vendor's typical smart-codec configuration.
