import type { CalculatorConfig } from "~/lib/types";

const config: CalculatorConfig = {
  slug: "hanwha-storage-calculator",
  title: "Hanwha Storage Calculator",
  description:
    "Hanwha storage calculator for Wisenet cameras with WiseStream II codec savings modeled. Defaults match P-series and Q-series feeding XRN, SRN, or WRN NVRs.",
  tagline: "Storage planning for Hanwha Wisenet cameras with WiseStream II compression modeled.",
  category: "surveillance",
  keywords: [
    "hanwha storage calculator",
    "hanwha wisenet storage calculator",
    "wisenet storage calculator",
    "samsung wisenet storage",
  ],
  widget: "surveillance",
  widgetProps: {
    preset: "hanwha",
  },

  content: {
    intro:
      "Hanwha Wisenet (previously Samsung Techwin) IP cameras use WiseStream II. It's a scene-aware smart codec built on H.265, and on typical surveillance scenes it cuts about 75% off H.264. This calculator defaults to common Wisenet P-series and Q-series settings at 1080p, 30 fps, smart codec on. It also handles multi-camera setups feeding XRN, SRN, or WRN NVRs. Drive recommendations match the bay configurations on those chassis.",
    formula:
      "<p><strong>Hanwha storage</strong> = <code>(bitrate × 3600 / 8) × cameras × hours × days</code></p>" +
      "<p>WiseStream II is Hanwha's smart-codec extension of H.265. On scenes with predictable motion (parking lots, building exteriors), it can outperform Hikvision H.265+. On highly dynamic scenes (retail floors, busy intersections) the gap narrows. The calculator models WiseStream II at the same 75% reduction factor as H.265+, which matches Hanwha's own planning bitrates.</p>",
    useCases: [
      "Sizing Hanwha Wisenet XRN, SRN, or WRN series NVRs",
      "Planning Wisenet PNM multi-sensor (panoramic) camera storage, where each sensor is its own stream",
      "Comparing WiseStream II savings before enabling on existing cameras",
      "Capacity planning for SSM (Smart Security Manager) VMS deployments",
    ],
  },

  faqs: [
    {
      question: "What is WiseStream II and how is it different from H.265?",
      answer:
        "WiseStream II is Hanwha's intelligent codec layered on top of H.265. It applies dynamic GOP (group-of-pictures) control and per-region bitrate adaptation, recognising stationary scene areas and reducing their bitrate while preserving moving subjects at full quality. The result is comparable to Hikvision's H.265+, typically ~50% smaller than plain H.265 on the same scene.",
    },
    {
      question: "Does WiseStream II work with third-party NVRs and VMS systems?",
      answer:
        "Yes, WiseStream II encodes a fully-compatible H.265 stream that any H.265-capable NVR or VMS can decode. The smart compression happens entirely at the camera; the recorder just sees a smaller H.265 file. This makes it portable across mixed-vendor deployments.",
    },
    {
      question: "What's the best Wisenet camera bitrate setting for storage planning?",
      answer:
        "For 1080p Wisenet cameras with WiseStream II enabled: target 2 Mbps maximum bitrate (VBR mode). For 4 MP: 3-4 Mbps. For 4K: 6-8 Mbps. These are real-world averages, actual file size will be lower on quiet scenes. Use the calculator's defaults as a starting point and adjust if your camera spec sheet shows different numbers.",
    },
    {
      question: "What drives are compatible with Hanwha Wisenet NVRs?",
      answer:
        "Hanwha publishes a compatibility list per NVR model, generally WD Purple, Seagate SkyHawk, and Toshiba S300 are confirmed compatible across the lineup. Maximum supported size depends on NVR model and firmware version; recent Wisenet NVRs support up to 16-20 TB per bay. Check Hanwha's official HDD compatibility document for your specific model.",
    },
    {
      question: "Why is my Wisenet camera using more bitrate than expected?",
      answer:
        "Possible causes: (1) WiseStream II is disabled in the camera settings; (2) the scene is unusually dynamic, reducing smart-codec benefits; (3) the bitrate is set to CBR (constant) instead of VBR; (4) the camera is running in a mode that priorities quality over compression (e.g., evidence-grade recording for forensic review). Check Setup → Video & Audio → Video Profile in the camera's web interface.",
    },
    {
      question: "Does this calculator support Wisenet panoramic cameras?",
      answer:
        "Panoramic Wisenet cameras (PNM-9085RQZ, PNM-9322VQP) are multi-sensor, they appear as multiple separate streams. Set the camera count to the total number of sensors (typically 2 or 4) and the calculator handles the rest. Each sensor records independently and consumes its own storage.",
    },
  ],

  related: [
    "video-surveillance-storage-calculator",
    "nvr-storage-calculator",
    "ip-camera-storage-calculator",
    "hikvision-storage-calculator",
    "axis-storage-calculator",
  ],
};

export default config;
