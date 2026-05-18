import type { CalculatorConfig } from "~/lib/types";

const config: CalculatorConfig = {
  slug: "raid-6-storage-calculator",
  title: "RAID 6 Storage Calculator",
  description:
    "RAID 6 storage calculator with double-parity math. Get usable capacity, two-drive fault tolerance, and read/write speeds at any drive count. No signup.",
  tagline: "Double-parity striping, survives two simultaneous drive failures.",
  category: "raid",
  keywords: [
    "raid 6 storage calculator",
    "raid 6 calculator",
    "calculate raid 6 storage",
  ],
  widget: "raid",
  widgetProps: {
    lockedLevel: 6,
    defaultDrives: 6,
    defaultDriveSize: 4,
    defaultUnit: "TB",
  },

  content: {
    intro:
      "RAID 6 is RAID 5 with a safety net. It uses a second parity block, so the array survives two drives failing at the same time instead of just one. The cost is one more drive of capacity, leaving usable space at (N − 2) × drive size. RAID 6 is the standard pick for large arrays of 8 drives or more. When you're rebuilding a multi-TB drive that takes a full day to copy, the odds of a second drive dying during the rebuild stop being negligible. RAID 6 makes that scenario survivable.",
    formula:
      "<p><strong>Usable capacity</strong> = <code>(N − 2) × drive size</code></p>" +
      "<p><strong>Parity overhead</strong> = <code>2 × drive size</code></p>" +
      "<p><strong>Capacity efficiency</strong> = <code>(N − 2) / N</code></p>" +
      "<p><strong>Fault tolerance</strong> = 2 drive failures (any two)</p>" +
      "<p><strong>Read speed</strong> ≈ <code>N − 2</code>× (data drives only)</p>" +
      "<p><strong>Write speed</strong> ≈ <code>(N − 2) / 6</code>×. Two parity blocks have to be recomputed on every write.</p>",
    useCases: [
      "Large enterprise arrays of 8 to 24 drives with multi-TB disks",
      "Archives and backup targets where data loss isn't acceptable",
      "Replacing aging RAID 5 arrays as drive sizes grew past safe rebuild thresholds",
      "Comparing the cost of an extra parity drive against RAID 10's 50% efficiency",
    ],
  },

  faqs: [
    {
      question: "When should I pick RAID 6 over RAID 5?",
      answer:
        "Any array of 8+ drives, or any array using drives larger than ~4 TB, benefits significantly from RAID 6. The second parity block protects against the second drive failure that becomes statistically likely during a long rebuild on a large array. The capacity cost (one extra drive) is small relative to the risk it eliminates.",
    },
    {
      question: "What's the minimum number of drives for RAID 6?",
      answer:
        "Four. Two drives store data, two drives' worth of capacity is used for parity. Below four drives the math doesn't make sense, RAID 1 or RAID 10 would be better.",
    },
    {
      question: "Why is RAID 6 write performance lower than RAID 5?",
      answer:
        "RAID 5 requires 4 disk operations per write (read old data, read old parity, write new data, write new parity). RAID 6 requires roughly 6, both parity blocks must be read and rewritten. For write-heavy workloads, RAID 10 is usually a better fit; RAID 6 shines for read-heavy archival storage.",
    },
    {
      question: "Can RAID 6 survive two drives failing at the same time?",
      answer:
        "Yes, any two drives. Both parity blocks together encode enough information to reconstruct the missing data from any combination of two failures. This is the entire point of RAID 6 and the reason it's preferred for large or critical arrays.",
    },
    {
      question: "Should I still use hot spares with RAID 6?",
      answer:
        "Often yes. RAID 6 buys you time, but a hot spare lets the rebuild begin instantly instead of waiting for human intervention. For arrays of 12+ drives, a hot spare is cheap insurance, the calculator shows the impact on usable capacity.",
    },
  ],

  related: [
    "raid-storage-calculator",
    "raid-5-storage-calculator",
    "raid-10-storage-calculator",
  ],
};

export default config;
