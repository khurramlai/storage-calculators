import type { CalculatorConfig } from "~/lib/types";

const config: CalculatorConfig = {
  slug: "cctv-storage-calculator",
  title: "CCTV Storage Calculator",
  description:
    "CCTV storage calculator for DVR and NVR systems. Works with analog HD-TVI, HD-CVI, AHD, and IP cameras at any resolution, codec, or retention period.",
  tagline: "Storage sizing for both analog and IP CCTV systems, DVRs, NVRs, or hybrid recorders.",
  category: "surveillance",
  keywords: [
    "cctv storage calculator",
    "cctv calculator",
    "calculator storage",
    "calculate storage cctv",
  ],
  widget: "surveillance",
  widgetProps: {
    defaults: {
      cameras: 4,
      resolution: "1080p",
      fps: 15,
      codec: "h264",
      recordingMode: "continuous",
      hoursPerDay: 24,
      retentionDays: 30,
    },
  },

  content: {
    intro:
      "CCTV is a broad term these days. It covers old-school analog systems running over coax (HD-TVI, HD-CVI, or AHD into a DVR) and modern IP-based systems running over Ethernet (IP cameras into an NVR). This calculator handles both. Analog HD systems usually top out at 1080p, 15 fps, H.264, so start there. IP systems can push to 4K with H.265+ smart codecs. The formula doesn't care which one you've got. The only thing that changes is the bitrate ceiling.",
    formula:
      "<p><strong>CCTV storage</strong> = <code>(bitrate_bps × 3600 / 8) × cameras × hours × days</code></p>" +
      "<p>For HD-TVI, HD-CVI, or AHD analog systems, expect H.264 only. These DVRs predate widespread H.265 adoption. 1080p analog cameras typically encode at 2 to 4 Mbps. For IP CCTV (cameras feeding an NVR), modern systems support H.265 and smart codecs, which cut storage by 50% to 75%.</p>",
    useCases: [
      "Choosing the right DVR or NVR hard drive size before purchase",
      "Upgrading from analog CCTV to IP and comparing storage requirements",
      "Sizing hybrid recorders that mix analog and IP channels",
      "Validating retailer claims like '30 days on 2 TB' against your actual camera config",
    ],
  },

  faqs: [
    {
      question: "What's the difference between a DVR and an NVR?",
      answer:
        "A DVR (Digital Video Recorder) accepts analog video signals over coax (HD-TVI, HD-CVI, AHD, or legacy CVBS) and digitizes them. An NVR (Network Video Recorder) accepts already-digital IP streams from network cameras over Ethernet or Wi-Fi. NVRs support higher resolutions and modern codecs; DVRs are cheaper and reuse existing coax wiring. Hybrid recorders accept both.",
    },
    {
      question: "Can analog CCTV cameras record at 4K?",
      answer:
        "Most analog HD standards (HD-TVI, HD-CVI, AHD) currently top out at 8 MP / 4K, but real-world deployments are usually 1080p or 4 MP. The coax cable distance and signal degradation limit practical analog 4K to short runs. For 4K at scale, IP cameras are the standard.",
    },
    {
      question: "Why does my CCTV system use more storage than the calculator says?",
      answer:
        "Three common reasons: (1) your cameras are using a higher bitrate than the spec sheet, many cheap cameras lock to a fixed maximum bitrate regardless of scene complexity; (2) your DVR/NVR is recording dual-streams (main stream + substream) without you realizing; (3) sound recording is enabled, adding ~10-20%. The calculator gives video-only main-stream estimates.",
    },
    {
      question: "What hard drive should I put in a CCTV DVR?",
      answer:
        "Use a surveillance-grade drive, Western Digital Purple or Seagate SkyHawk are the industry standards. Desktop drives (WD Blue, Barracuda) will work but won't last long under 24/7 write loads; warranty claims will be denied for surveillance use. Surveillance drives are tuned for continuous sequential writes and have firmware optimizations for ATA streaming commands used by DVRs.",
    },
    {
      question: "How long can I record on a 2 TB CCTV drive?",
      answer:
        "Depends entirely on camera count, resolution, and codec. Examples for 24/7 recording on a 2 TB drive: 4 cameras at 1080p H.264 ≈ 11 days; 4 cameras at 1080p H.265 ≈ 22 days; 8 cameras at 4K H.265 ≈ 3 days; 1 camera at 720p H.264 ≈ 90 days. Use the calculator with your specific config, DVR vendor marketing often quotes best-case low-fps low-bitrate numbers.",
    },
    {
      question: "Does the calculator account for audio recording?",
      answer:
        "No, audio adds roughly 64-128 kbps per channel, which is negligible compared to 4 Mbps+ of video on modern cameras. For most planning purposes, you can ignore audio. If you have 16+ audio channels, add ~5% buffer.",
    },
  ],

  related: [
    "video-surveillance-storage-calculator",
    "nvr-storage-calculator",
    "ip-camera-storage-calculator",
    "security-camera-storage-calculator",
    "hikvision-storage-calculator",
  ],
};

export default config;
