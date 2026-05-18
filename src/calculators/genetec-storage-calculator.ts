import type { CalculatorConfig } from "~/lib/types";

const config: CalculatorConfig = {
  slug: "genetec-storage-calculator",
  title: "Genetec Storage Calculator",
  description:
    "Genetec storage calculator for Security Center Archiver capacity planning. Sized for enterprise multi-vendor camera deployments with long retention windows.",
  tagline: "Archiver capacity planning for Genetec Security Center deployments at scale.",
  category: "surveillance",
  keywords: [
    "genetec storage calculator",
    "genetec security center storage",
    "genetec archiver storage calculator",
  ],
  widget: "surveillance",
  widgetProps: {
    preset: "genetec",
  },

  content: {
    intro:
      "Genetec Security Center is enterprise VMS territory. Its Archiver role pulls in video from a lot of cameras, often hundreds, across long retention windows. Sizing storage for Genetec isn't like sizing a single NVR. You're thinking about sustained write IOPS, multi-week retention, and sometimes tiered storage with hot disks for recent footage and cheaper disks for older clips. The defaults here reflect mid-size enterprise scale: 16 cameras, 60-day retention. The raw capacity number is what Genetec's own sizing tools then translate into Archiver count and disk array layout.",
    formula:
      "<p><strong>Genetec Archiver storage</strong> = <code>(bitrate × 3600 / 8) × cameras × hours × days</code></p>" +
      "<p>Security Center stores video in <em>G64x</em>, a proprietary multiplexed container around the underlying H.264 or H.265 stream. G64x adds minimal overhead, under 2%, so the calculator's raw-capacity number applies directly. For multi-tier deployments where some footage moves to slower archive storage, split your retention into 'hot' and 'cold' segments and run the calculator twice.</p>",
    useCases: [
      "Sizing Archiver server storage for new Security Center deployments",
      "Sanity-checking Genetec partner storage estimates against the math",
      "Planning Archiver expansion when adding camera channels",
      "Tiered storage planning: how to split hot and cold archive disk allocation",
    ],
  },

  faqs: [
    {
      question: "What is a Genetec Archiver?",
      answer:
        "The Archiver is the Security Center role responsible for receiving video from cameras and writing it to disk. One Archiver typically handles 50-200 cameras depending on bitrate and total throughput. Multi-Archiver deployments are common for sites with thousands of cameras. This calculator gives the storage requirement per Archiver, multiply by Archiver count for the full deployment.",
    },
    {
      question: "Does Security Center support H.265 and smart codecs?",
      answer:
        "Yes, Security Center has supported H.265 since version 5.7, and accepts smart-codec H.265 variants (Hikvision H.265+, Hanwha WiseStream II, Axis Zipstream) as standard H.265 streams. Storage savings flow through to the Archiver. The calculator's 'H.265+' option models these smart codecs at the published savings ratio.",
    },
    {
      question: "What's the storage difference between continuous and motion-only recording in Security Center?",
      answer:
        "Security Center supports per-camera and per-schedule recording rules. Motion-based recording typically reduces storage by 60-90% in well-tuned environments, but enterprise deployments often require continuous recording for compliance reasons (banking, gaming, transit). The calculator handles both modes, pick 'motion-triggered' for the 40% duty-cycle estimate or 'continuous' for full 24/7.",
    },
    {
      question: "Does Genetec require special storage hardware?",
      answer:
        "Security Center supports any block storage, direct-attached drives in the Archiver server, SAN, NAS via iSCSI or SMB. Enterprise deployments typically use either internal RAID arrays in 2U/4U servers, or shared SAN storage with multiple Archivers. Surveillance-grade drives (WD Purple Pro, Seagate Exos) are preferred over consumer drives. The calculator gives raw capacity, IOPS planning is a separate concern documented in Genetec's hardware guides.",
    },
    {
      question: "Can Genetec move old footage to cheaper storage automatically?",
      answer:
        "Yes, Security Center has built-in archive transfer that moves footage from primary (hot) storage to secondary (cold) storage after a configurable age. Cold storage can be lower-cost large-capacity drives or object storage. To plan a tiered deployment, run this calculator twice: once for hot-tier retention (e.g., 14 days) and once for cold-tier retention (e.g., 60 days minus 14). Sum the results.",
    },
    {
      question: "Why is my Archiver disk filling faster than the calculator says?",
      answer:
        "Most common: (1) cameras are using a higher bitrate than the spec sheet (always confirm at the Archiver's incoming stream stats); (2) audio recording is enabled across many channels; (3) edge recording playback is also being archived; (4) bookmarks and incidents add small overhead. Genetec's own Stream Statistics view in Security Center shows the real per-camera write rate.",
    },
  ],

  related: [
    "video-surveillance-storage-calculator",
    "nvr-storage-calculator",
    "ip-camera-storage-calculator",
    "axis-storage-calculator",
    "hanwha-storage-calculator",
  ],
};

export default config;
