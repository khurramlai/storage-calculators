import type { CalculatorConfig } from "~/lib/types";

const config: CalculatorConfig = {
  slug: "raid-10-storage-calculator",
  title: "RAID 10 Calculator",
  description:
    "RAID 10 calculator for striped mirror arrays. Get usable capacity, mirror overhead, fault tolerance, and write-friendly throughput at any pair count.",
  tagline: "Striped mirrors, fastest RAID for writes, survives one drive per mirror pair.",
  category: "raid",
  keywords: [
    "raid 10 calculator",
    "raid 10 storage calculator",
    "raid 1+0 calculator",
    "raid 10 capacity calculator",
  ],
  widget: "raid",
  widgetProps: {
    lockedLevel: 10,
    defaultDrives: 4,
    defaultDriveSize: 4,
    defaultUnit: "TB",
  },

  content: {
    intro:
      "RAID 10 (sometimes written RAID 1+0) pairs drives into mirrors and then stripes data across the pairs. You give up half your raw capacity, which stings, but write performance is in a different league than parity-based RAID 5 or 6. Rebuilds are also quick since only one drive of data has to copy. RAID 10 is the default for databases, virtualization hosts, and anything with heavy write traffic or tight latency budgets.",
    formula:
      "<p><strong>Usable capacity</strong> = <code>(N / 2) × drive size</code></p>" +
      "<p><strong>Mirror overhead</strong> = <code>(N / 2) × drive size</code>. Half the array.</p>" +
      "<p><strong>Capacity efficiency</strong> = <code>50%</code>, constant regardless of drive count</p>" +
      "<p><strong>Fault tolerance</strong> = 1 drive worst case, up to N/2 best case (one per mirror pair)</p>" +
      "<p><strong>Read speed</strong> ≈ <code>N</code>×. Reads can hit either drive in any mirror.</p>" +
      "<p><strong>Write speed</strong> ≈ <code>N / 2</code>×. Every write hits two drives.</p>",
    useCases: [
      "Database servers (MySQL, PostgreSQL, SQL Server) that need low write latency",
      "Virtualization hosts (VMware, Hyper-V, Proxmox) running lots of concurrent VMs",
      "Mail and transaction servers with sustained random I/O",
      "Any workload where rebuild speed matters more than capacity efficiency",
    ],
  },

  faqs: [
    {
      question: "What's the minimum number of drives for RAID 10?",
      answer:
        "Four, two mirror pairs striped together. The drive count must be even (pairs of mirrors). The calculator warns if you enter an odd number and shows how many drives would be unused.",
    },
    {
      question: "Why is RAID 10 faster than RAID 5 or 6?",
      answer:
        "There's no parity calculation. A write just hits both drives in one mirror pair simultaneously, no read-modify-write cycle. For random I/O workloads (databases, VMs) the difference can be 3–5× in throughput and an order of magnitude in latency.",
    },
    {
      question: "How many drives can fail in RAID 10?",
      answer:
        "Worst case: one. If both drives in the same mirror pair fail, the array is lost. Best case: half the drives (N/2), as long as exactly one drive in each mirror pair fails. The calculator shows both worst and best case fault tolerance.",
    },
    {
      question: "Is RAID 10 the same as RAID 0+1?",
      answer:
        "No, they sound similar but RAID 0+1 stripes first, then mirrors the whole stripe set. RAID 0+1 has worse fault tolerance: losing one drive in either stripe set makes that whole side unavailable, leaving you exposed to any single failure on the other side. RAID 10 (mirror first, then stripe) is almost always the right choice.",
    },
    {
      question: "Why does RAID 10 cost more than RAID 5 or 6?",
      answer:
        "You're paying for 100% redundancy, every byte of data is stored twice. RAID 5 and 6 only set aside one or two drives' worth of parity, so capacity efficiency scales up with drive count. For a 10-drive array of 4 TB drives, RAID 10 gives 20 TB usable while RAID 5 gives 36 TB and RAID 6 gives 32 TB. The premium buys you performance and fast rebuilds.",
    },
  ],

  related: [
    "raid-storage-calculator",
    "raid-5-storage-calculator",
    "raid-6-storage-calculator",
  ],
};

export default config;
