import type { CalculatorConfig } from "~/lib/types";

const config: CalculatorConfig = {
  slug: "axis-storage-calculator",
  title: "Axis Storage Calculator",
  description:
    "Axis storage calculator with Zipstream compression savings modeled. Defaults match P-series, Q-series, and M-series IP cameras in real-world installs.",
  tagline: "Storage sizing for Axis cameras with Zipstream dynamic bitrate savings.",
  category: "surveillance",
  keywords: [
    "axis storage calculator",
    "axis camera storage calculator",
    "axis zipstream storage",
    "axis communications storage",
  ],
  widget: "surveillance",
  widgetProps: {
    preset: "axis",
  },

  content: {
    intro:
      "Axis was the first vendor to ship a smart codec (Zipstream, back in 2015) and it's everywhere in enterprise and government deployments. Zipstream knocks 50% to 80% off the bitrate depending on how busy the scene is. Quiet outdoor scenes compress the hardest. This calculator models Zipstream as an H.265+ equivalent and starts from typical Axis P-series settings at 1080p, 25 fps. Use it for sizing Axis Camera Station servers or any third-party NVR in an Axis-heavy install.",
    formula:
      "<p><strong>Axis storage</strong> = <code>(bitrate × 3600 / 8) × cameras × hours × days</code></p>" +
      "<p>Zipstream is Axis's proprietary scene-aware bitrate controller built on H.264 and H.265. It identifies forensically important regions of each frame (faces, license plates, motion) and preserves their detail while heavily compressing static backgrounds. Net savings versus H.264 baseline: 50% to 80%. Quiet outdoor scenes (parking lots overnight) benefit most. Busy retail or transit scenes benefit less.</p>",
    useCases: [
      "Sizing Axis Camera Station (ACS) recording server storage",
      "Planning storage on Axis S-series recorders or Axis-compatible third-party NVRs",
      "Comparing Zipstream against plain H.265 savings before enabling on existing cameras",
      "Capacity planning for AXIS Camera Station Edge and S22 appliances",
    ],
  },

  faqs: [
    {
      question: "What is Axis Zipstream?",
      answer:
        "Zipstream is Axis's smart-codec technology, available on most current P-, Q-, and M-series cameras. It overlays a scene-aware bitrate controller on top of H.264 or H.265, recognising regions of interest (faces, license plates, moving objects) and preserving them at high quality while reducing detail on static backgrounds. The resulting stream is fully H.264/H.265 compliant, so any compatible recorder can play it back.",
    },
    {
      question: "How much storage does Zipstream save?",
      answer:
        "Axis publishes savings of 50-80% versus standard H.264 / H.265, depending on scene activity. The calculator's 'H.265+ / Smart Codec' preset models a 75% reduction, which approximates a typical urban surveillance scene. For mostly-static views (industrial yards, after-hours offices), Zipstream may save more. For dynamic scenes (retail floors, transit hubs), expect 50-60%.",
    },
    {
      question: "Does Zipstream require special recording equipment?",
      answer:
        "No, Zipstream-encoded streams are standard H.264 or H.265 and play back on any compatible NVR, VMS, or player. The smart compression happens entirely at the camera. This makes Axis cameras a strong choice for mixed-vendor deployments where you may want to use third-party recording systems.",
    },
    {
      question: "What's the storage trade-off for Axis multi-sensor cameras?",
      answer:
        "Axis multi-sensor cameras (Q3819-PVE, Q6010-E, P3727-PLE) appear as multiple independent streams, typically 2 or 4 sensors per camera. Set the camera count to the total sensor count, not the physical camera count. Each sensor records at its own resolution and consumes its own bandwidth and storage.",
    },
    {
      question: "How do I enable Zipstream on Axis cameras?",
      answer:
        "In the camera's web interface (or via AXIS Device Manager): Video → Stream profile → Zipstream → select strength (low, medium, high, higher, extreme). 'Medium' is the typical default for general surveillance. 'High' or 'Higher' for areas with predictable activity patterns. Note: Zipstream is on by default on most recent Axis firmware, so check before assuming it's off.",
    },
    {
      question: "What's the recommended drive for AXIS Camera Station servers?",
      answer:
        "AXIS Camera Station supports any surveillance-grade drive, WD Purple, Seagate SkyHawk, or enterprise NAS drives (WD Red Pro, Seagate IronWolf Pro). For multi-server ACS deployments with large camera counts (50+), enterprise NAS or SAN storage is recommended for the additional reliability and IOPS. The calculator gives the raw capacity requirement; consult ACS documentation for IOPS planning.",
    },
  ],

  related: [
    "video-surveillance-storage-calculator",
    "nvr-storage-calculator",
    "ip-camera-storage-calculator",
    "hikvision-storage-calculator",
    "hanwha-storage-calculator",
    "genetec-storage-calculator",
  ],
};

export default config;
