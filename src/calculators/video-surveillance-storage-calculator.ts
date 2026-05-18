import type { CalculatorConfig } from "~/lib/types";

const config: CalculatorConfig = {
  slug: "video-surveillance-storage-calculator",
  title: "Video Surveillance Storage Calculator",
  description:
    "Video surveillance storage calculator for IP cameras, NVRs, and DVRs. Handles H.264, H.265, smart codecs, motion recording, and any camera count or retention.",
  tagline: "Sizing footage storage for any camera, any codec, any retention window.",
  category: "surveillance",
  keywords: [
    "video surveillance storage calculator",
    "video surveillance storage",
    "surveillance storage calculator",
    "surveillance camera storage calculator",
  ],
  widget: "surveillance",

  content: {
    intro:
      "Video surveillance storage planning boils down to one formula: bitrate × cameras × hours × days. The math isn't the hard part. Picking the right bitrate is. It depends on resolution, frame rate, codec, and how busy the scene is. This calculator estimates a sensible bitrate from your camera specs and applies smart-codec savings (H.265+, WiseStream II, Zipstream) when they apply. You get a storage number and a recommended surveillance-grade drive.",
    formula:
      "<p><strong>Total storage</strong> = <code>(bitrate × 3600 / 8) × cameras × hours_per_day × retention_days</code></p>" +
      "<p>Bitrate is in bits per second. The calculator estimates it from resolution, frame rate, and codec using published Hikvision, Hanwha, and Axis spec tables. Pick a smart codec preset to model H.265+, WiseStream II, or Zipstream savings (around 75% reduction versus H.264).</p>" +
      "<p><strong>Motion-only recording</strong> applies a 40% duty-cycle multiplier to recording hours. That's typical for well-tuned motion detection on outdoor cameras.</p>",
    useCases: [
      "Sizing an NVR before purchase, so the drive size actually fits your retention requirement",
      "Comparing codec options to justify upgrading to H.265 or H.265+",
      "Planning multi-site surveillance with different camera counts per location",
      "Budgeting for surveillance-grade drives like WD Purple or Seagate SkyHawk",
    ],
  },

  faqs: [
    {
      question: "How much storage does one camera need?",
      answer:
        "A 1080p H.265 camera at 25 fps recording 24/7 generates roughly 22 GB per day, or ~660 GB per month. The same camera with H.265+ (smart codec) drops to ~5 GB per day. 4K at H.264 can hit 170 GB per day per camera, choice of codec dominates everything else.",
    },
    {
      question: "What's the difference between H.264, H.265, and H.265+?",
      answer:
        "H.264 is the legacy baseline. H.265 (HEVC) achieves roughly the same visual quality at half the bitrate. H.265+ (Hikvision), WiseStream II (Hanwha), and Zipstream (Axis) are 'smart' variants that detect motion regions and further reduce bitrate on static scenes, typically another 50% on top of H.265, meaning ~75% smaller files than H.264.",
    },
    {
      question: "Should I use surveillance-grade hard drives?",
      answer:
        "Yes, desktop drives are designed for ~8-hour duty cycles and will wear out quickly under 24/7 surveillance write loads. Surveillance drives (WD Purple, Seagate SkyHawk) are rated for continuous writes, vibration-resistant for multi-drive bays, and tuned for streaming workloads with low rotational latency.",
    },
    {
      question: "Does motion-only recording really save that much?",
      answer:
        "Yes, most environments have 10-40% actual motion across a 24-hour window. The calculator's motion preset assumes 40% duty cycle, which is conservative. Smart event recording (recording only on person/vehicle detection rather than any motion) can reduce that further to under 10%.",
    },
    {
      question: "How is bitrate calculated in this tool?",
      answer:
        "The calculator uses a baseline H.264 bitrate table at 25 fps per resolution (sourced from public Hikvision, Hanwha, and Axis storage planning docs), then scales linearly with frame rate and applies the codec efficiency multiplier. The bitrate is shown as a result so you can sanity-check against your camera's spec sheet.",
    },
    {
      question: "What retention period is standard?",
      answer:
        "30 days is the most common requirement for commercial deployments. Some jurisdictions mandate longer (60 or 90 days). Banking, gaming, and critical infrastructure often retain 1+ year. Home security setups can be as short as 7 days. The calculator defaults to 30 days.",
    },
  ],

  related: [
    "cctv-storage-calculator",
    "nvr-storage-calculator",
    "ip-camera-storage-calculator",
    "security-camera-storage-calculator",
    "hikvision-storage-calculator",
    "unifi-storage-calculator",
  ],
};

export default config;
