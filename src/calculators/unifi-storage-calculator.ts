import type { CalculatorConfig } from "~/lib/types";

const config: CalculatorConfig = {
  slug: "unifi-storage-calculator",
  title: "UniFi Storage Calculator",
  description:
    "UniFi storage calculator for Protect deployments with G3, G4, and G5 cameras. Sizes HDDs for UNVR, UNVR Pro, and Cloud Key Gen2 Plus with H.265 defaults.",
  tagline: "UniFi Protect storage sizing for any G3/G4/G5 camera mix at any retention.",
  category: "surveillance",
  keywords: [
    "unifi storage calculator",
    "unifi protect storage calculator",
    "ubiquiti storage calculator",
    "unifi nvr storage",
  ],
  widget: "surveillance",
  widgetProps: {
    preset: "unifi",
  },

  content: {
    intro:
      "UniFi Protect runs on Ubiquiti's UNVR, UNVR Pro, or Cloud Key Gen2 Plus. G4 and G5 cameras default to H.265. There's no separate 'smart codec' setting; Protect's firmware just handles bitrate intelligently. This calculator defaults to G4 Pro style settings: 4 MP, 30 fps, H.265, 14 days of retention. One thing about Protect worth knowing: when the drive fills up, the oldest footage gets trimmed automatically. So the number here is what you should buy if you want the full retention window without losing anything.",
    formula:
      "<p><strong>UniFi Protect storage</strong> = <code>(bitrate × 3600 / 8) × cameras × hours × days</code></p>" +
      "<p>UniFi G4 Pro cameras at 4 MP, 30 fps, H.265 typically write 8 to 12 Mbps per camera. G5 series cameras are slightly more efficient. G3 series (older) tops out at 1080p and may not support H.265 on older firmware. Those cameras encode at H.264 with higher bitrates.</p>",
    useCases: [
      "Choosing between UNVR, UNVR Pro, and Cloud Key Gen2 Plus based on storage requirements",
      "Sizing the right HDD for the UNVR's four bays",
      "Planning camera count expansion within an existing UNVR's capacity",
      "Working out whether to enable UniFi Protect's cloud archive (Ubiquiti Cloud Storage)",
    ],
  },

  faqs: [
    {
      question: "How much storage does a UniFi G4 Pro camera use?",
      answer:
        "At default settings (4 MP, 30 fps, H.265, 24/7 continuous), a G4 Pro writes ~80-100 GB per day. With motion-only recording (typical home/SMB use), that drops to ~30-40 GB per day. The calculator's default UniFi preset reflects continuous recording, switch to 'Motion-triggered' if your install uses smart detection.",
    },
    {
      question: "How long will the UNVR's drive last?",
      answer:
        "Depends on drive size, camera count, and retention setting. UniFi Protect auto-trims oldest footage when the drive fills, there's no failure, just a shortened actual retention window. To get the *retention you want* without auto-trim, use this calculator with your camera config and pick a drive size that matches. The UNVR supports up to 16 TB per bay (4 bays total).",
    },
    {
      question: "Does UniFi Protect support H.265?",
      answer:
        "Yes, G4 Bullet, G4 Pro, G4 Dome, G4 Instant, and all G5 cameras support H.265 and use it by default. G3 series cameras may still use H.264 depending on firmware (some G3 models support H.265 in newer firmware). Mixing H.264 and H.265 cameras in one UniFi Protect deployment works fine; the calculator's H.265 codec assumption is conservative for mixed deployments.",
    },
    {
      question: "What hard drives are compatible with the UNVR?",
      answer:
        "Ubiquiti officially supports WD Purple, Seagate SkyHawk, and a list of surveillance/NAS drives in the UNVR. Maximum per-bay capacity is 16 TB on the UNVR Pro. Avoid SMR (shingled magnetic recording) drives, they struggle with continuous surveillance writes. The UNVR doesn't run RAID by default but UNVR Pro supports RAID 1, 5, and 10.",
    },
    {
      question: "Does UniFi Protect record to the cloud?",
      answer:
        "Yes, Ubiquiti Cloud Storage is available as a subscription ($1.99-3.99/camera/month depending on plan), backing up Protect footage to Ubiquiti's cloud. This is in addition to local storage, not a replacement. Use this calculator for local sizing; cloud storage costs are separate.",
    },
    {
      question: "Can I expand UniFi Protect storage without losing footage?",
      answer:
        "On UNVR Pro with RAID configured, drives can be expanded one at a time by replacing and rebuilding. On UNVR (single-drive) the drive can be swapped but historical footage is lost, back up critical clips via Protect's export feature before swapping. UniFi Protect doesn't currently support spanning multiple external drives; expanding means a larger replacement drive.",
    },
  ],

  related: [
    "video-surveillance-storage-calculator",
    "nvr-storage-calculator",
    "security-camera-storage-calculator",
    "ip-camera-storage-calculator",
  ],
};

export default config;
