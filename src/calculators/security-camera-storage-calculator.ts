import type { CalculatorConfig } from "~/lib/types";

const config: CalculatorConfig = {
  slug: "security-camera-storage-calculator",
  title: "Security Camera Storage Calculator",
  description:
    "Security camera storage calculator for home and small business. Sizes drives for Ring, Reolink, Wyze, Nest, and multi-camera NVR setups in seconds.",
  tagline: "How many days of footage will your security cameras actually fit on that drive?",
  category: "surveillance",
  keywords: [
    "security camera storage calculator",
    "surveillance camera storage calculator",
    "camera storage calculator",
    "home security camera storage",
  ],
  widget: "surveillance",
  widgetProps: {
    defaults: {
      cameras: 4,
      resolution: "1080p",
      fps: 15,
      codec: "h265",
      recordingMode: "motion",
      hoursPerDay: 24,
      retentionDays: 14,
    },
  },

  content: {
    intro:
      "Most home and small-business security cameras only record when something moves. That cuts storage to a fraction of 24/7. You still need to size the drive right, because an undersized drive overwrites old footage exactly when you'd want to look at it. This calculator defaults to typical home setup numbers: 4 cameras at 1080p, motion-only, 14 days of retention. Tweak from there.",
    formula:
      "<p><strong>Effective recording time</strong> with motion-triggered cameras is roughly 40% of the active window. Most scenes have activity less than half the time. The calculator applies a 40% duty-cycle multiplier when you select 'Motion-triggered only.'</p>" +
      "<p><strong>Storage</strong> = <code>(bitrate × 3600 / 8) × cameras × effective_hours × days</code></p>",
    useCases: [
      "Choosing between a 1 TB and 4 TB drive for a home NVR or NAS",
      "Working out whether cloud storage or local storage is cheaper for your retention needs",
      "Estimating SD card capacity for cameras with onboard storage (Reolink, Wyze, Eufy)",
      "Planning storage for a multi-camera setup before buying the recorder",
    ],
  },

  faqs: [
    {
      question: "How long will a 1 TB drive last for home security cameras?",
      answer:
        "For a typical 4-camera 1080p H.265 setup with motion-only recording (~40% active time): roughly 60-90 days. Bump to 24/7 continuous and the same drive lasts ~25 days. The calculator gives the precise answer for your exact config, vendor marketing claims like '60 days on 1 TB' assume specific (often optimistic) settings.",
    },
    {
      question: "Do I need a recorder, or can I use SD cards?",
      answer:
        "Cameras with onboard SD card slots (Reolink, Wyze, Eufy, Amcrest) can record locally without a separate NVR. SD cards top out around 256-512 GB for most cameras, so plan for ~7-30 days of motion-triggered 1080p footage per camera. Use this calculator with cameras=1 and your retention requirement to see if an SD card is enough or you need a centralized recorder.",
    },
    {
      question: "Should I use cloud storage instead of a local drive?",
      answer:
        "Cloud is convenient (no hardware setup, off-site backup) but expensive over time. Ring Protect Plus is $40-100/year per location. Nest Aware is similar. A local 4 TB NVR drive costs ~$80 once and lasts 3-5 years. For 4+ cameras with longer retention, local storage is dramatically cheaper. The trade-off: cloud is harder for a burglar to defeat (they'd need to disconnect your internet at exactly the right moment).",
    },
    {
      question: "What codec do home security cameras use?",
      answer:
        "Newer cameras (2022+) support H.265 / HEVC out of the box. Older or budget cameras may only support H.264. Some Wi-Fi cameras still default to H.264 even when H.265 is available because mobile app decoding is more compatible. Check camera settings and turn on H.265 if available, it halves storage with no quality loss.",
    },
    {
      question: "How much storage do 4K security cameras need?",
      answer:
        "Roughly 2-3× the storage of 1080p for the same retention. With motion-only recording and H.265 codec, a 4K camera averages 5-15 GB per day in typical home use. The calculator gives the exact number for your scene activity and retention preference.",
    },
    {
      question: "Why does my Ring or Nest say it only retains 60 days?",
      answer:
        "Cloud-based security cameras (Ring, Nest, Arlo, Blink) typically cap retention at 30-60 days as part of the subscription. Storage isn't the constraint; subscription terms are. If you need longer retention, a local NVR or NAS is the right answer, and this calculator helps you size the drive.",
    },
  ],

  related: [
    "video-surveillance-storage-calculator",
    "cctv-storage-calculator",
    "ip-camera-storage-calculator",
    "unifi-storage-calculator",
  ],
};

export default config;
