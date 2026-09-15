import type { CalculatorConfig } from "~/lib/types";
import type { CameraModel } from "~/lib/surveillance";

/**
 * Honeywell camera models offered in the picker. Resolution, frame rate and
 * codec are taken from Honeywell's published datasheets for each series;
 * the bitrate itself is estimated from those settings using the site's
 * reference table (Honeywell publishes a range, e.g. 100 kbps-6 Mbps for the
 * HC35W43R3, not a single planning figure). "h265+" here means H.265 with
 * Honeywell Smart Codec enabled.
 */
const models: CameraModel[] = [
  // 35 Series (current, AI analytics, H.265 + Smart Codec)
  { id: "HC35WB2R2", group: "35 Series", label: "HC35WB2R2 · 2 MP bullet", resolution: "1080p", fps: 30, codec: "h265+" },
  { id: "HC35W42R2", group: "35 Series", label: "HC35W42R2 · 2 MP IR dome", resolution: "1080p", fps: 30, codec: "h265+" },
  { id: "HC35W25R3", group: "35 Series", label: "HC35W25R3 · 2.5 MP dome", resolution: "3MP", fps: 30, codec: "h265+" },
  { id: "HC35WB3R2", group: "35 Series", label: "HC35WB3R2 · 3 MP bullet", resolution: "3MP", fps: 30, codec: "h265+" },
  { id: "HC35W43R3", group: "35 Series", label: "HC35W43R3 · 3 MP IR dome", resolution: "3MP", fps: 30, codec: "h265+" },
  { id: "HC35WE3R2", group: "35 Series", label: "HC35WE3R2 · 3 MP ball", resolution: "3MP", fps: 30, codec: "h265+" },
  { id: "HC35WB5R2", group: "35 Series", label: "HC35WB5R2 · 5 MP bullet", resolution: "5MP", fps: 30, codec: "h265+" },
  { id: "HC35WE5R2", group: "35 Series", label: "HC35WE5R2 · 5 MP ball", resolution: "5MP", fps: 30, codec: "h265+" },
  { id: "HC35WZ5R30", group: "35 Series", label: "HC35WZ5R30 · 5 MP 30× PTZ", resolution: "5MP", fps: 30, codec: "h265+" },
  { id: "HC35WB8R2", group: "35 Series", label: "HC35WB8R2 · 8 MP bullet", resolution: "4K", fps: 30, codec: "h265+" },
  { id: "HC35WE8R2", group: "35 Series", label: "HC35WE8R2 · 8 MP ball", resolution: "4K", fps: 30, codec: "h265+" },
  { id: "HC35W48R3", group: "35 Series", label: "HC35W48R3 · 8 MP IR dome", resolution: "4K", fps: 30, codec: "h265+" },

  // 30 Series (H.265 + Smart Codec)
  { id: "HC30WB2R1", group: "30 Series", label: "HC30WB2R1 · 2 MP bullet", resolution: "1080p", fps: 30, codec: "h265+" },
  { id: "HC30W42R3", group: "30 Series", label: "HC30W42R3 · 2 MP IR dome", resolution: "1080p", fps: 30, codec: "h265+" },
  { id: "HC30W45R3", group: "30 Series", label: "HC30W45R3 · 5 MP IR dome", resolution: "5MP", fps: 30, codec: "h265+" },
  { id: "HC30WB5R1", group: "30 Series", label: "HC30WB5R1 · 5 MP bullet", resolution: "5MP", fps: 30, codec: "h265+" },
  { id: "HC30WE5R3", group: "30 Series", label: "HC30WE5R3 · 5 MP ball", resolution: "5MP", fps: 30, codec: "h265+" },
  { id: "HC30WF5R1", group: "30 Series", label: "HC30WF5R1 · 5 MP fisheye", resolution: "5MP", fps: 20, codec: "h265+" },

  // 60 Series (H.265 + Smart Codec, WDR)
  { id: "HBW2PR1", group: "60 Series", label: "HBW2PR1 · 2 MP bullet", resolution: "1080p", fps: 30, codec: "h265+" },
  { id: "HBW4PR1", group: "60 Series", label: "HBW4PR1 · 4 MP bullet", resolution: "4MP", fps: 30, codec: "h265+" },
  { id: "HC60W45R2", group: "60 Series", label: "HC60W45R2 · 5 MP IR dome", resolution: "5MP", fps: 30, codec: "h265+" },

  // Performance Series (H.265, no smart codec on older units)
  { id: "H4W2PER3", group: "Performance Series", label: "H4W2PER3 · 2 MP bullet", resolution: "1080p", fps: 30, codec: "h265" },
  { id: "H4W4PER3", group: "Performance Series", label: "H4W4PER3 · 4 MP bullet", resolution: "4MP", fps: 30, codec: "h265" },
  { id: "H4D8PR1", group: "Performance Series", label: "H4D8PR1 · 8 MP dome", resolution: "4K", fps: 25, codec: "h265" },
  { id: "H4W8PER2", group: "Performance Series", label: "H4W8PER2 · 8 MP bullet", resolution: "4K", fps: 25, codec: "h265" },

  // equIP (legacy, H.264)
  { id: "H4W2GR1", group: "equIP (legacy)", label: "H4W2GR1 · 2 MP bullet, H.264", resolution: "1080p", fps: 30, codec: "h264" },
  { id: "H4D3PRV3", group: "equIP (legacy)", label: "H4D3PRV3 · 3 MP dome, H.264", resolution: "3MP", fps: 30, codec: "h264" },
];

const config: CalculatorConfig = {
  slug: "honeywell-storage-calculator",
  title: "Honeywell CCTV Storage Calculator",
  description:
    "Honeywell storage calculator for 30, 35, 60 and Performance Series IP cameras. Pick a camera model, set retention, and get the NVR drive size with Smart Codec savings.",
  tagline:
    "Pick a Honeywell camera model or enter custom settings. Defaults reflect a typical 35 Series deployment with Smart Codec on.",
  category: "surveillance",
  keywords: [
    "honeywell storage calculator",
    "honeywell cctv storage calculator",
    "honeywell nvr storage calculator",
    "honeywell 35 series storage",
    "honeywell camera storage calculator",
  ],
  widget: "surveillance",
  widgetProps: {
    preset: "honeywell",
    models,
    defaultModel: "HC35WB5R2",
  },

  content: {
    intro:
      "Honeywell's current IP camera ranges (30 Series, 35 Series and 60 Series) all encode in H.265 with a Smart Codec option, and Honeywell's own guidance is that Smart Codec saves up to 50% over standard H.265 on static scenes. The older Performance Series is H.265 without Smart Codec, and the legacy equIP range is H.264 only. This calculator lets you pick the exact model so the resolution, frame rate and codec are right for that generation, then applies the standard storage formula. Defaults are 8 × 5 MP 35 Series cameras, 30 fps, Smart Codec on, 24/7, 30 days.",
    formula:
      "<p><strong>Honeywell storage</strong> = <code>(bitrate × 3600 / 8) × cameras × hours × days</code></p>" +
      "<p>Bitrate is estimated from the model's resolution, frame rate and codec using the same reference table as the other surveillance calculators. Honeywell publishes a bitrate <em>range</em> per camera (for example 100 kbps to 6 Mbps on the HC35W43R3) rather than a single planning value, so the estimate sits in the middle of that range for a typical scene. If the camera's web interface shows a different average bitrate, switch the model to \"Custom\" and match the resolution/codec that produces it.</p>",
    useCases: [
      "Sizing the drive in a Honeywell 30 or 35 Series embedded NVR before ordering",
      "Comparing Smart Codec on versus off to see whether a firmware update or a third-party NVR changed retention",
      "Planning a mixed estate where legacy equIP H.264 cameras share an NVR with new 35 Series units",
      "Checking a Honeywell integrator's quoted retention against the model list",
    ],
  },

  faqs: [
    {
      question: "Which Honeywell cameras support Smart Codec?",
      answer:
        "The 30 Series, 35 Series and 60 Series all list H.265 with Smart Codec on their datasheets. The Performance Series (H4W/H4D model numbers ending in PER/PR) supports H.265 but not Smart Codec on most units, and the legacy equIP range is H.264 only. The model picker sets the codec accordingly; if you have a Performance Series camera that does show a Smart Codec option in its web UI, switch to the H.265+ / Smart Codec option manually.",
    },
    {
      question: "How much does Honeywell Smart Codec actually save?",
      answer:
        "Honeywell's datasheets say up to 50% versus standard H.264/H.265, scene dependent. That is a more conservative claim than Hikvision's H.265+ (which claims ~50% over H.265, i.e. ~75% over H.264). This calculator's Smart Codec option applies a 75% saving over H.264, which matches Honeywell's figure on quiet scenes and is optimistic on busy ones. For a car park or a road-facing camera, use plain H.265 in the calculator and treat the result as your safe figure.",
    },
    {
      question: "Which Honeywell NVR do I need for the result?",
      answer:
        "Honeywell's embedded NVRs come in 4-, 8-, 16- and 32-channel versions across the 30 Series (HN30xx), 35 Series (HN35xx, 4K) and Performance Series (HEN04/08/16/32). Small units have one or two internal SATA bays; the 32-channel models have more. Bay counts and maximum drive size vary by model, so check the datasheet's HDD line and compare it with the calculator's recommended drive. For estates beyond 32 channels, Honeywell's MAXPRO NVR runs on a server and takes whatever RAID array you attach.",
    },
    {
      question: "Why does the fisheye model default to 20 fps?",
      answer:
        "Panoramic cameras like the HC30WF5R1 typically encode the full 360° image at a lower frame rate than a fixed camera, and their scene is almost entirely static background, so Smart Codec is unusually effective on them. The picker seeds 20 fps as a realistic default; raise it if your fisheye is set to 30.",
    },
    {
      question: "Does the calculator use Honeywell's published bitrates?",
      answer:
        "Not directly. Honeywell publishes a configurable bitrate range per model (for example 100 kbps to 6 Mbps) rather than a planning figure. The calculator estimates a typical average from resolution, frame rate and codec using the reference table shared by all the surveillance calculators on this site, which lands in the middle of Honeywell's range. The camera's actual reported bitrate in its web interface is always the better number if you have it.",
    },
    {
      question: "My Honeywell cameras record to a third-party NVR. Does Smart Codec still apply?",
      answer:
        "Usually yes, because Honeywell Smart Codec works largely through a dynamic GOP and region-based quality within a standard H.265 stream, so most ONVIF recorders accept it. But some third-party NVRs and VMS platforms request a fixed GOP from the camera, which disables the saving. Check the camera's actual bitrate once it is recording to the third-party system; if it is close to double the calculator's Smart Codec estimate, the NVR has overridden it.",
    },
  ],

  related: [
    "cctv-storage-calculator",
    "nvr-storage-calculator",
    "hikvision-storage-calculator",
    "hanwha-storage-calculator",
    "ip-camera-storage-calculator",
  ],
};

export default config;
