import type { CalculatorConfig } from "~/lib/types";

const config: CalculatorConfig = {
  slug: "nvr-storage-calculator",
  title: "NVR Storage Calculator",
  description:
    "NVR storage calculator that sizes HDDs by camera count, resolution, codec, and retention. Models H.265+ smart codec savings and surveillance-grade drives.",
  tagline: "Size the HDDs for your NVR before you buy, IP cameras, modern codecs, accurate math.",
  category: "surveillance",
  keywords: [
    "nvr storage calculator",
    "nvr hard drive calculator",
    "nvr calculator",
    "network video recorder storage",
  ],
  widget: "surveillance",
  widgetProps: {
    defaults: {
      cameras: 8,
      resolution: "4MP",
      fps: 25,
      codec: "h265",
      recordingMode: "continuous",
      hoursPerDay: 24,
      retentionDays: 30,
    },
  },

  content: {
    intro:
      "An NVR takes IP camera streams over Ethernet and writes them to internal hard drives. The hardware limits come down to channel count (how many cameras), bay count (how many HDDs), and the largest disk the NVR firmware will accept. But how much storage you actually need depends on resolution, frame rate, codec, and how long you want to keep the footage. This calculator gives you the answer in a few seconds, plus a recommended drive that fits common NVR chassis: 1, 2, 4, or 8 bays.",
    formula:
      "<p><strong>NVR storage</strong> = <code>(bitrate_bps × 3600 / 8) × cameras × hours × days</code></p>" +
      "<p>Modern NVRs support H.265 natively. High-end models also support smart codecs (H.265+, WiseStream II, Zipstream) that adapt bitrate to scene complexity. Switching from H.264 to H.265 typically halves storage. H.265+ smart codecs halve it again.</p>" +
      "<p><strong>Drive recommendations</strong> account for typical NVR bay configurations. The calculator suggests the smallest single-drive size that fits, scaling to multi-drive if the requirement exceeds 20 TB.</p>",
    useCases: [
      "Selecting an NVR before purchase, matching channel count and HDD capacity to your needs",
      "Replacing aging HDDs in an existing NVR with larger drives",
      "Planning storage for a RAID-equipped NVR (pair this with the RAID storage calculator)",
      "Sizing storage when migrating from cloud video storage to on-prem NVR",
    ],
  },

  faqs: [
    {
      question: "What size hard drive does my NVR need?",
      answer:
        "The drive size depends on three things: number of cameras, total bitrate per camera, and retention period. Use this calculator with your actual config, generic answers like '8 TB for 8 cameras' are misleading because they assume specific resolution/codec settings. For most 1080p/4MP H.265 deployments with 30 days retention, expect 4-12 TB per NVR.",
    },
    {
      question: "Can NVRs use any hard drive?",
      answer:
        "Technically yes, but you should use surveillance-grade drives. NVR manufacturers (Hikvision, Dahua, UniFi, Synology) publish compatibility lists, drives outside the list may work but won't be supported. WD Purple, Seagate SkyHawk, and Toshiba S300 are the safe choices. Some enterprise NVRs require drives rated for 24/7 operation in a NAS chassis.",
    },
    {
      question: "Why is NVR storage usage higher than the calculator says?",
      answer:
        "Common culprits: (1) dual-stream recording (main + substream) doubles storage if both are saved; (2) high I-frame intervals on smart codecs reduce their efficiency; (3) low scene complexity assumptions don't hold for busy environments; (4) the NVR is also recording event clips alongside continuous. Check NVR settings, most allow you to disable substream recording or motion event archives.",
    },
    {
      question: "How many cameras can an NVR support?",
      answer:
        "Channel count is limited by the NVR model, common sizes are 4, 8, 16, 32, and 64 channels. Storage scales linearly with channels, but the NVR's PoE switch capacity, CPU decoding power (for live view), and total HDD bay capacity may bottleneck before the channel count. The calculator helps with the storage side; check NVR specs for the other limits.",
    },
    {
      question: "Should I use RAID inside an NVR?",
      answer:
        "Yes for any business deployment with 4+ HDDs. Single-drive NVRs lose all recordings on disk failure. RAID 5 or RAID 6 give you continued operation through one or two drive failures with minimal capacity penalty. See our RAID storage calculator to plan the RAID layer on top of this storage estimate.",
    },
    {
      question: "Does the calculator account for NVR firmware overhead?",
      answer:
        "It assumes ~100% of disk capacity is available for video. In practice, NVR firmware reserves ~1-2% for system data and ext4/btrfs filesystem overhead is another ~3-5%. Plan for ~5% overhead on top of the calculator's number, meaning a 10 TB requirement realistically needs ~10.5 TB of disk.",
    },
  ],

  related: [
    "video-surveillance-storage-calculator",
    "cctv-storage-calculator",
    "ip-camera-storage-calculator",
    "hikvision-storage-calculator",
    "unifi-storage-calculator",
    "raid-storage-calculator",
  ],
};

export default config;
