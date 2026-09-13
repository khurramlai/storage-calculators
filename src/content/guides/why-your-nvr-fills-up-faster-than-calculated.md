---
title: "Why Your NVR Fills Up Faster Than the Calculator Said"
description: "Nine reasons real surveillance recorders use more storage than the sizing formula predicts, ranked by how often they're the cause, with the setting to check for each."
summary: "The nine usual suspects when retention comes up short, ranked by frequency, with the exact setting to check for each."
category: surveillance
published: 2026-09-12
calculators:
  - nvr-storage-calculator
  - cctv-storage-calculator
  - security-camera-storage-calculator
readingMinutes: 8
---

The calculator said 32 days. The NVR says it's holding 11. Nothing is broken; one of the assumptions behind the calculation doesn't match what the recorder is actually doing. Below are the causes, ordered by how often they turn out to be the answer. Work down the list.

## 1. The cameras are in constant bitrate mode

This is the cause more than half the time. In CBR mode the camera produces the configured bitrate every second, whether the scene is a busy loading bay or a dark, empty corridor. The calculator's estimate assumes an *average* bitrate; CBR makes the maximum the average.

**Check:** camera web UI → Video/Encode → Bitrate type. It should be **VBR** (variable) with a maximum bitrate set. On Hikvision it's "Bitrate Type: Variable"; on Dahua "Bit Rate Type: VBR"; on Axis "Variable bitrate" under Stream settings; on UniFi it's implicit (Protect uses VBR).

**Effect:** switching a 1080p H.265 camera from CBR 4096 kbps to VBR with a 4096 cap typically drops its average to 1.5–2.5 Mbps. That alone can double retention.

## 2. The NVR is recording the sub-stream as well as the main stream

Most cameras produce two streams: a full-resolution main stream and a low-resolution sub-stream for live view on phones and multi-camera grids. Some NVRs, and most "record to cloud" or "record to NAS" add-ons, can be configured to store both. The sub-stream is small (0.3–1 Mbps) but on 16 cameras it adds up to 10–25%.

**Check:** NVR → Record/Storage → Stream type per channel. It should be "Main stream" only unless you have a reason. On Hikvision look for "Dual-stream recording"; on Dahua "Sub Stream" under Record Control.

## 3. A smart codec has been turned off, or never turned on

The calculator was run with H.265+ / WiseStream / Zipstream and its ~75% saving. Then a playback problem on a third-party client led someone to switch the camera to plain H.265, or the NVR firmware update reset the option, or the cameras were added to a different-brand NVR that only negotiates standard H.265. The saving disappears and bitrate roughly doubles.

**Check:** camera → Video → Encode → the codec dropdown should read H.265+ (Hikvision), H.265 with WiseStream "High" (Hanwha), or Zipstream strength "Medium/High" (Axis). On the NVR, check the channel's received stream info. If it says H.265 where you expected H.265+, the smart layer isn't making it through.

See [H.264 vs H.265 vs smart codecs](/guides/h264-vs-h265-vs-smart-codecs/) for what does and doesn't survive a cross-vendor link.

## 4. Motion recording is triggering far more than expected

The calculator's motion-only mode assumes recording roughly 40% of the time. A camera watching a road, a tree in wind, a flickering light or its own IR reflection off rain triggers almost continuously. Motion recording on that camera is effectively 24/7 plus the overhead of event clips.

**Check:** NVR → Playback → look at the timeline for the camera. If the motion bar is nearly solid, the detection zone or sensitivity needs work. Exclude the road and the tree from the detection area; lower sensitivity; enable the camera's "smart" detection (human/vehicle only) if it has it.

**Alternative:** switch the camera to continuous recording at a lower frame rate. A camera that triggers 90% of the time on motion uses about as much as continuous and gives you worse coverage.

## 5. Pre-record and post-record buffers on event recording

Event recording typically keeps 5–10 seconds before the trigger and 10–30 seconds after. On a camera that triggers frequently, the post-record tail is the majority of what's stored. Thirty seconds post-record on a camera triggering every minute is effectively continuous recording.

**Check:** NVR → Record → Advanced/Schedule → Pre-record and Post-record. Bring post-record down to 10 seconds unless there's a reason for more.

## 6. Frame rate or resolution has crept up

Someone bumped a camera from 15 to 25 fps to make playback smoother, or the NVR's "auto" quality profile pushed a 4 MP camera to its full resolution when the calculation assumed 1080p. Bitrate scales roughly linearly with both.

**Check:** camera → Video → Encode → Resolution and Frame Rate for the *main* stream. Compare to the values used in the calculation. On a busy multi-vendor system, export the settings to a spreadsheet; drift is common.

## 7. Alarm and event archives are stored separately

Some NVRs keep event recordings (motion, line-crossing, intrusion) in a separate, protected pool that isn't overwritten on the same schedule as continuous footage. If the event pool has a long retention or a large quota, continuous retention shrinks to fill what's left.

**Check:** NVR → Storage → Quota or Storage Mode. Look for a split between "Record" and "Picture/Event" quotas, or a "locked/protected clips" setting. Reduce the event quota or its retention.

## 8. The drive is smaller than its label, and part of it is reserved

A "4 TB" drive holds 4,000,000,000,000 bytes, which the NVR's filesystem reports as 3.64 TiB, and the NVR reserves a few percent for its index and event database. The calculator works in decimal terabytes unless told otherwise. That's a 9–12% gap before a single byte of video is written. See [TB vs TiB](/guides/tb-vs-tib-why-your-drive-is-smaller/).

**Check:** NVR → Storage → HDD status. Compare total capacity shown with the drive's nominal size. If it's 3.6 TB for a 4 TB drive, that's normal, not a fault.

## 9. Audio, snapshots and secondary features

Individually small, collectively a few percent:

- Audio recording at 64–128 kbps per channel.
- Scheduled snapshots or "picture on event" storing JPEGs alongside the video.
- Face/ANPR databases and thumbnails on analytics NVRs.
- A cloud or NAS backup task that re-reads footage isn't storage, but it *is* I/O contention that can cause the NVR to drop to a lower quality profile on some models.

**Check:** turn off what you don't use. Audio in particular is often on by default and rarely needed on outdoor cameras.

## Diagnosing it in ten minutes

1. Open the NVR's storage or camera status page. Most show the **actual bitrate per channel** in kbps.
2. Add them up. That's your real total ingest rate.
3. Multiply by 86,400 seconds and divide by 8, then by 1,000,000,000: that's GB per day. Divide the drive's *reported* capacity by it: that's your true retention.
4. Compare each channel's real bitrate to the estimate for its resolution and codec in the [CCTV storage guide](/guides/how-to-calculate-cctv-storage/). Any channel more than about 50% over the estimate is one of the causes above, usually number 1 or 3.

If everything checks out and you simply have more cameras than storage, the choices are fewer frames per second, motion recording on the quiet cameras, or a bigger drive. Run the options through the [NVR storage calculator](/nvr-storage-calculator/) to see what each buys you before touching the hardware.

## A note on vendor calculators

Vendor sizing tools (Hikvision's, Dahua's, Axis's) tend to assume their own smart codec is on, VBR is set, and the scene is of medium complexity. Their numbers are best-case and are what installers copy into quotes. If a quote promised 30 days and you're seeing 12, the calculation probably assumed H.265+ and the deployment ended up on H.265, or assumed VBR and got CBR. That's not a hardware problem, and it's fixable from the camera settings.
