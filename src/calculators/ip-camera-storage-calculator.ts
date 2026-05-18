import type { CalculatorConfig } from "~/lib/types";

const config: CalculatorConfig = {
  slug: "ip-camera-storage-calculator",
  title: "IP Camera Storage Calculator",
  description:
    "IP camera storage calculator with per-camera bitrate math across H.264, H.265, and smart codecs. Pick resolution and frame rate, get exact storage per device.",
  tagline: "Per-camera storage planning with realistic codec and resolution math.",
  category: "surveillance",
  keywords: [
    "ip camera storage calculator",
    "network camera storage calculator",
    "ip cam storage",
  ],
  widget: "surveillance",
  widgetProps: {
    defaults: {
      cameras: 1,
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
      "IP cameras stream digital video over the network, usually via ONVIF, RTSP, or some vendor-specific protocol. They feed an NVR, a VMS, or a NAS recorder. Their storage requirements are set by the camera's own encoder settings, not the recorder. So it makes sense to model a single camera first and then scale up. The default here is one camera so you can compare resolutions and codecs for the same scene before working out the total.",
    formula:
      "<p><strong>Per-camera storage</strong> = <code>(bitrate × 3600 / 8) × hours × days</code></p>" +
      "<p>IP camera bitrate is set in the camera's encoder configuration. VBR (Variable Bitrate) typically averages around the configured cap. CBR (Constant Bitrate) holds it steady. Smart codecs (H.265+ on Hikvision, WiseStream II on Hanwha, Zipstream on Axis) dynamically adjust the bitrate based on scene motion, often cutting storage by 50% to 75% versus standard H.265.</p>",
    useCases: [
      "Comparing resolution upgrades (does 4K really need 4× the storage of 1080p?)",
      "Checking codec efficiency for a specific camera model before purchase",
      "Sizing edge storage on cameras with onboard SD card slots",
      "Planning streaming bandwidth as well as storage (bitrate × cameras = network throughput)",
    ],
  },

  faqs: [
    {
      question: "What bitrate should I set on my IP camera?",
      answer:
        "For 1080p H.264 at 25 fps, 4 Mbps is a good baseline for general surveillance scenes. Drop to 2 Mbps for static scenes (parking lots), raise to 6-8 Mbps for high-detail areas (license plate capture, retail counters). For H.265, halve those numbers. Smart codecs (H.265+) auto-adjust, you set a maximum bitrate and the camera uses whatever's needed.",
    },
    {
      question: "VBR vs CBR, which uses more storage?",
      answer:
        "CBR (Constant Bitrate) uses predictable, slightly higher storage, useful when bandwidth must stay flat for network planning. VBR (Variable Bitrate) uses less storage on quiet scenes and more on busy ones, with the same maximum cap. For storage planning, assume VBR averages about 60-70% of its cap. The calculator's bitrate estimates are VBR-equivalent.",
    },
    {
      question: "How does 4K storage compare to 1080p?",
      answer:
        "4K (3840×2160, 8 MP) is 4× the pixels of 1080p (2 MP), but encoded bitrate is only ~3-4× higher due to compression efficiency at higher resolutions. With H.265+, the gap closes further, a 4K H.265+ stream can be smaller than a 1080p H.264 stream on the same scene. The calculator handles this correctly.",
    },
    {
      question: "Do IP cameras compress video on-camera or on the NVR?",
      answer:
        "On the camera. IP cameras have onboard encoders (typically Hi3516, GK7202, or Ambarella SoCs) that compress before transmission. The NVR or VMS receives an already-compressed stream and writes it to disk as-is. This means changing codec settings on the camera changes both bandwidth and storage simultaneously.",
    },
    {
      question: "What's the difference between main stream and substream?",
      answer:
        "Most IP cameras output two streams: a main stream (full resolution, used for recording) and a substream (lower resolution, used for live view on apps and multi-camera grids to save bandwidth). The calculator estimates main stream only. If your NVR also records the substream, common but optional, add 5-15% to the total.",
    },
    {
      question: "Can I use motion detection to reduce IP camera storage?",
      answer:
        "Yes, motion-triggered recording typically cuts storage by 60-90% versus 24/7 recording, depending on scene activity. The calculator's 'motion-triggered' mode assumes 40% effective recording time, which is conservative. Smart event recording (person/vehicle classification only) can push that to under 10% with modern AI cameras.",
    },
  ],

  related: [
    "video-surveillance-storage-calculator",
    "cctv-storage-calculator",
    "nvr-storage-calculator",
    "hikvision-storage-calculator",
    "hanwha-storage-calculator",
    "axis-storage-calculator",
  ],
};

export default config;
