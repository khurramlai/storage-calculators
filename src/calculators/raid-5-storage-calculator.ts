import type { CalculatorConfig } from "~/lib/types";

const config: CalculatorConfig = {
  slug: "raid-5-storage-calculator",
  title: "RAID 5 Calculator",
  description:
    "RAID 5 calculator: get usable capacity, parity overhead, fault tolerance, and throughput for any drive count and size. Free, instant, no signup.",
  tagline: "Single-parity striping, high efficiency, survives one drive failure.",
  category: "raid",
  keywords: [
    "raid 5 calculator",
    "raid 5 storage calculator",
    "calculate raid 5 storage",
    "raid 5 capacity calculator",
  ],
  widget: "raid",
  widgetProps: {
    lockedLevel: 5,
    defaultDrives: 4,
    defaultDriveSize: 4,
    defaultUnit: "TB",
  },

  content: {
    intro:
      "RAID 5 stripes your data across every drive in the array and sets aside one drive's worth of capacity for parity. If a drive dies, the array rebuilds it from the parity blocks on the survivors. Usable capacity is just (N − 1) × drive size. RAID 5 stays popular on small servers and home NAS boxes because the math works out so well: you get most of the capacity, with one drive of failure protection. It's the obvious choice when one drive of redundancy is enough.",
    formula:
      "<p><strong>Usable capacity</strong> = <code>(N − 1) × drive size</code></p>" +
      "<p><strong>Parity overhead</strong> = <code>drive size</code> (one drive's worth)</p>" +
      "<p><strong>Capacity efficiency</strong> = <code>(N − 1) / N</code>. Approaches 100% as drives are added.</p>" +
      "<p><strong>Fault tolerance</strong> = 1 drive failure</p>" +
      "<p><strong>Read speed</strong> ≈ <code>N − 1</code>× (parallel reads across data drives)</p>" +
      "<p><strong>Write speed</strong> ≈ <code>(N − 1) / 4</code>×. Every write requires reading old data plus old parity, then writing new data plus new parity.</p>",
    useCases: [
      "Small business NAS with 4 to 6 drives where capacity matters most",
      "Home media servers where one drive of redundancy is enough",
      "Backup targets where the array isn't the primary copy",
      "Comparing efficiency against RAID 6 before buying drives",
    ],
  },

  faqs: [
    {
      question: "Why is RAID 5 risky with large drives?",
      answer:
        "As drive sizes grow into the multi-TB range, rebuild times stretch into many hours or days. During that window the array runs unprotected, if a second drive fails (or hits an unrecoverable read error on the surviving drives), all data is lost. For arrays of 8+ drives or drive sizes above ~4 TB, many admins prefer RAID 6 or RAID 10 instead.",
    },
    {
      question: "What's the minimum number of drives for RAID 5?",
      answer:
        "Three. Two drives store data and one drive's worth of capacity is dedicated to parity. With only two drives there'd be nothing to stripe, you'd want RAID 1 instead.",
    },
    {
      question: "Does RAID 5 use a dedicated parity drive?",
      answer:
        "No. Parity is distributed across all drives (unlike RAID 4, which uses one dedicated parity disk). This avoids the parity drive becoming a write bottleneck and means any drive can fail without losing parity entirely.",
    },
    {
      question: "How long does a RAID 5 rebuild take?",
      answer:
        "Rebuilds typically run at 50–150 MB/s depending on controller, drive type, and concurrent workload. A 4 TB drive rebuild often takes 8–24 hours. SSD arrays rebuild dramatically faster. During rebuild the array is degraded and another drive failure will lose all data.",
    },
    {
      question: "Can I add a hot spare to RAID 5?",
      answer:
        "Yes, and you should for arrays of 6+ drives. The hot spare automatically begins rebuilding the moment a drive fails, shortening the exposure window. Set the hot spare count in the calculator to see how it affects usable capacity.",
    },
  ],

  related: [
    "raid-storage-calculator",
    "raid-6-storage-calculator",
    "raid-10-storage-calculator",
  ],
};

export default config;
