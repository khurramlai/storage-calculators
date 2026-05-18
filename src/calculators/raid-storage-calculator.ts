import type { CalculatorConfig } from "~/lib/types";

const config: CalculatorConfig = {
  slug: "raid-storage-calculator",
  title: "RAID Storage Calculator",
  description:
    "Free RAID storage calculator for levels 0, 1, 5, 6, 10, 50 and 60. Get usable capacity, fault tolerance, and read/write speeds for any drive count in seconds.",
  tagline:
    "Pick a RAID level, set your drive count and size, and see exactly how much usable storage you'll get.",
  category: "raid",
  keywords: [
    "raid storage calculator",
    "raid calculator",
    "calculate raid storage",
    "disk storage calculator",
    "storage spaces calculator",
  ],
  widget: "raid",
  widgetProps: {
    defaultLevel: 5,
    defaultDrives: 4,
    defaultDriveSize: 4,
    defaultUnit: "TB",
  },

  content: {
    intro:
      "RAID pools several disks into one logical volume. Each level makes its own bargain: capacity, performance, and how many drive failures the array can survive before everything's gone. The tricky part is picking the bargain that fits your hardware and your risk tolerance. That's what this is for. Drop in your drive count, drive size, RAID level, and any hot spares. You get usable capacity, fault tolerance, and rough read and write speed multipliers compared to a single drive.",
    formula:
      "<p>Usable capacity depends on the RAID level:</p>" +
      "<ul>" +
      "<li><strong>RAID 0</strong>: <code>N × size</code>. No redundancy.</li>" +
      "<li><strong>RAID 1</strong>: <code>size</code>. Every drive mirrors the same data.</li>" +
      "<li><strong>RAID 5</strong>: <code>(N − 1) × size</code>. One drive of distributed parity.</li>" +
      "<li><strong>RAID 6</strong>: <code>(N − 2) × size</code>. Double parity.</li>" +
      "<li><strong>RAID 10</strong>: <code>(N / 2) × size</code>. Striped mirrors.</li>" +
      "<li><strong>RAID 50</strong>: <code>groups × (drives_per_group − 1) × size</code>.</li>" +
      "<li><strong>RAID 60</strong>: <code>groups × (drives_per_group − 2) × size</code>.</li>" +
      "</ul>" +
      "<p>Hot spares get subtracted from the active pool before the RAID math runs.</p>",
    useCases: [
      "Sizing a new NAS or server before buying drives",
      "Comparing RAID 5, RAID 6, and RAID 10 tradeoffs for the same drive count",
      "Planning hot spare reserve without burning too much usable capacity",
      "Estimating throughput improvements when scaling out a stripe set",
    ],
  },

  faqs: [
    {
      question: "What's the difference between RAID 5 and RAID 6?",
      answer:
        "RAID 5 uses one drive's worth of parity and survives a single drive failure. RAID 6 uses two drives' worth and survives two simultaneous failures, important for large arrays where rebuild times are long and a second drive can fail mid-rebuild. RAID 6 sacrifices one more drive of capacity in exchange for that safety margin.",
    },
    {
      question: "How is usable capacity calculated for RAID 10?",
      answer:
        "RAID 10 pairs drives into mirrors, then stripes data across the pairs. Usable capacity equals (N / 2) × drive size, so a 4-drive RAID 10 with 4 TB drives gives 8 TB usable. It survives one failure per mirror pair, so worst case 1 drive, best case half the drives.",
    },
    {
      question: "Should I use hot spares?",
      answer:
        "Hot spares automatically replace a failed drive without manual intervention, shortening the rebuild window during which a second failure would be catastrophic. They reduce usable capacity by one drive each, but for arrays of 8+ drives, especially RAID 5, they're strongly recommended.",
    },
    {
      question: "Does this calculator account for filesystem overhead?",
      answer:
        "No, the results are raw block-level capacity. Filesystems (ext4, XFS, ZFS, NTFS) typically reserve 1–10% for metadata. Snapshots, deduplication, compression, and reserved blocks for root will reduce the figure further. Plan for ~5% filesystem overhead on top of the RAID overhead shown here.",
    },
    {
      question: "Why are RAID 5 and RAID 6 write speeds slower than reads?",
      answer:
        "Every write requires recalculating parity across the stripe. RAID 5 needs ~4 disk operations per write (read old data, read old parity, write new data, write new parity); RAID 6 needs ~6. Reads, by contrast, can be parallelized across all data drives. The multipliers shown are theoretical maximums, real-world numbers depend on controller cache, stripe size, and workload.",
    },
    {
      question: "What's RAID 50 and when should I use it?",
      answer:
        "RAID 50 stripes data across two or more RAID 5 sub-groups. It rebuilds faster than a large RAID 5 (only one group has to rebuild) and survives one failure per group. Good for arrays of 8+ drives where pure RAID 5 rebuild times become risky. RAID 60 does the same with RAID 6 sub-groups for even higher resilience.",
    },
  ],

  related: [
    "raid-5-storage-calculator",
    "raid-6-storage-calculator",
    "raid-10-storage-calculator",
  ],
};

export default config;
