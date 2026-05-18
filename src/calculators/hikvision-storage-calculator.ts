import type { CalculatorConfig } from "~/lib/types";

const config: CalculatorConfig = {
  slug: "hikvision-storage-calculator",
  title: "Hikvision Storage Calculator",
  description:
    "Hikvision storage calculator tuned to H.265+ smart codec and DS-2CD camera defaults. Size HDDs for DS-76xx, DS-77xx, or DS-96xx NVRs in seconds.",
  tagline: "Storage sizing tuned to Hikvision's H.265+ smart codec and DS-2CD camera defaults.",
  category: "surveillance",
  keywords: [
    "hikvision storage calculator",
    "storage calculator hikvision",
    "hikvision nvr storage calculator",
    "hikvision storage calculator h265+",
  ],
  widget: "surveillance",
  widgetProps: {
    preset: "hikvision",
  },

  content: {
    intro:
      "Hikvision's H.265+ smart codec is one of the most efficient surveillance codecs out there. It cuts about 75% off H.264 file sizes on the same scene. This calculator defaults to typical Hikvision DS-2CD settings: 1080p, 25 fps, H.265+, 24/7 continuous. The math follows Hikvision's published planning specs. If you're sizing drives for a DS-76xx, DS-77xx, or DS-96xx NVR, the recommended drive size lines up with the common bay counts on those chassis.",
    formula:
      "<p><strong>Hikvision storage</strong> = <code>(bitrate × 3600 / 8) × cameras × hours × days</code></p>" +
      "<p>Hikvision's H.265+ encoder looks at each frame and reduces bitrate on static regions like backgrounds, sky, and walls, while preserving quality on anything that's moving. The result is roughly 75% bitrate reduction versus H.264 and 50% versus standard H.265 on typical scenes. The calculator's H.265+ option models this.</p>",
    useCases: [
      "Sizing HDDs for Hikvision DS-76xx, DS-77xx, or DS-96xx NVR series",
      "Planning a Hikvision-only deployment with mixed DS-2CD camera models",
      "Comparing H.265+ savings to justify upgrading older H.264 cameras",
      "Sanity-checking a Hikvision installer's storage estimate against the math",
    ],
  },

  faqs: [
    {
      question: "What's the difference between H.265 and H.265+ on Hikvision cameras?",
      answer:
        "Standard H.265 (HEVC) is the international video codec, about 50% more efficient than H.264. H.265+ is Hikvision's proprietary extension that adds smart bitrate control: the encoder reduces bitrate on stationary scene regions, achieving ~50% additional reduction over standard H.265. Net savings versus H.264 is ~75%. Quality on moving subjects is preserved; only static backgrounds compress harder.",
    },
    {
      question: "Does H.265+ work with all NVRs?",
      answer:
        "H.265+ requires both the camera and NVR to support it. All recent Hikvision NVRs (DS-76xx/77xx/96xx I and K series) support H.265+ decoding for live view and recording. Third-party NVRs and VMS systems may receive H.265+ as standard H.265 (still smaller than H.264, just not as small as the camera could go). Always pair Hikvision cameras with Hikvision or Hikvision-OEM NVRs for full H.265+ support.",
    },
    {
      question: "What drives does Hikvision recommend for NVRs?",
      answer:
        "Hikvision's compatibility list emphasizes surveillance-grade drives, primarily WD Purple, Seagate SkyHawk, and Toshiba S300. Maximum supported drive size varies by NVR model; recent models (2022+) support up to 20 TB per bay. Hikvision's NVR firmware is tuned for sequential writes from these drives, and using consumer drives may produce slower performance and earlier failure.",
    },
    {
      question: "Why does my Hikvision NVR use more storage than the calculator says?",
      answer:
        "Common reasons specific to Hikvision setups: (1) the camera is recording both main stream and substream, doubling storage if you have substream recording enabled in the NVR config; (2) smart event recording is creating separate event archives in addition to continuous; (3) the camera is using a fixed bitrate (CBR) instead of VBR. Check the camera's encoder settings and the NVR's recording schedule.",
    },
    {
      question: "How do I enable H.265+ on a Hikvision camera?",
      answer:
        "In the camera's web interface (or via iVMS-4200 / Hik-Connect): Configuration → Video/Audio → Video → Video Encoding → set to 'H.265+'. The setting also exists at the NVR level under camera channel configuration. If H.265+ is greyed out, the firmware may need updating or the camera model may not support it (some legacy DS-2CD2xxx-W and -G models top out at H.264 only).",
    },
    {
      question: "Are these bitrate numbers official Hikvision specs?",
      answer:
        "The bitrate estimates approximate Hikvision's published storage planning recommendations (available in their official iVMS storage calculator and product manuals). Real-world bitrate varies ±20% with scene complexity. The calculator gives a planning-grade estimate. For tight-budget deployments, add a 10-20% safety margin.",
    },
  ],

  related: [
    "video-surveillance-storage-calculator",
    "nvr-storage-calculator",
    "cctv-storage-calculator",
    "ip-camera-storage-calculator",
    "hanwha-storage-calculator",
  ],
};

export default config;
