import type { CalculatorEditorial } from "~/lib/types";

const editorial: CalculatorEditorial = {
  reviewed: "2026-09-10",
  guides: [
    "raid-5-vs-raid-6-vs-raid-10",
    "raid-is-not-a-backup",
    "tb-vs-tib-why-your-drive-is-smaller",
  ],
  sections: [
    {
      heading: "Capacity efficiency improves with drive count",
      html: `
<p>RAID 6's fixed cost of two drives is expensive in a small array and cheap in a large one. That's the main reason it dominates in 8-bay and larger systems while RAID 10 competes at 4 bays:</p>
<table>
  <thead><tr><th>Drives</th><th>RAID 6 usable</th><th>Efficiency</th><th>RAID 10 usable</th><th>RAID 10 efficiency</th><th>Better on capacity</th></tr></thead>
  <tbody>
    <tr><td>4</td><td>2 drives</td><td>50%</td><td>2 drives</td><td>50%</td><td>Tie</td></tr>
    <tr><td>5</td><td>3</td><td>60%</td><td>2 (one drive unused)</td><td>40%</td><td>RAID 6</td></tr>
    <tr><td>6</td><td>4</td><td>67%</td><td>3</td><td>50%</td><td>RAID 6</td></tr>
    <tr><td>8</td><td>6</td><td>75%</td><td>4</td><td>50%</td><td>RAID 6</td></tr>
    <tr><td>10</td><td>8</td><td>80%</td><td>5</td><td>50%</td><td>RAID 6</td></tr>
    <tr><td>12</td><td>10</td><td>83%</td><td>6</td><td>50%</td><td>RAID 6</td></tr>
    <tr><td>16</td><td>14</td><td>88%</td><td>8</td><td>50%</td><td>RAID 6</td></tr>
    <tr><td>24</td><td>22</td><td>92%</td><td>12</td><td>50%</td><td>RAID 6 (or RAID 60)</td></tr>
  </tbody>
</table>
<p>At four drives the capacity is identical and the decision is about workload: RAID 10 for random writes (VMs, databases), RAID 6 for the ability to lose <em>any</em> two drives rather than one per mirror pair. From six drives up, RAID 6 gives you more space and the two-drive guarantee. Above about 16 drives, split into RAID 60 groups to keep rebuilds short; the <a href="/raid-storage-calculator/">general RAID calculator</a> models the groups.</p>`,
    },
    {
      heading: "Why the second parity block matters during rebuilds",
      html: `
<p>RAID 6 stores two parity blocks per stripe, computed differently (conventionally called P and Q; P is simple XOR, Q uses Reed–Solomon coding over a Galois field). Either one can reconstruct a single missing block; together they reconstruct any two. The practical consequence is not just "survives two failures" but something subtler and more valuable: <strong>with one drive failed, the array is still redundant.</strong></p>
<p>During a RAID 5 rebuild, an unrecoverable read error on any surviving drive means a block that cannot be reconstructed. During a RAID 6 rebuild with one drive missing, the same read error is corrected from the remaining parity and the rebuild continues. On a 6 × 16 TB array, a RAID 5 rebuild reads 80 TB and has roughly a 47% chance of encountering a URE on NAS-class drives; RAID 6 reads the same 80 TB and shrugs the error off. That's the arithmetic that makes RAID 6 the default for large drives.</p>
<p>The cost is the write penalty: six operations per random write (read old data, read P, read Q, write new data, write P, write Q) versus four for RAID 5. On a hardware controller with write cache, or for the sequential workloads RAID 6 arrays usually carry (backups, archives, media, surveillance), the penalty is rarely noticed. On a software RAID under a random-write workload it is, and RAID 10 is the better fit.</p>`,
    },
    {
      heading: "Worked example: a 6-bay NAS for a small business",
      html: `
<p>Six 12 TB NAS drives (WD Red Plus or Seagate IronWolf) in a Synology or QNAP 6-bay, holding file shares, a nightly backup of two servers, and a media archive. The business can tolerate a day of degraded performance but not data loss.</p>
<ol>
  <li>Raw: 6 × 12 = 72 TB.</li>
  <li>RAID 6: 4 × 12 = <strong>48 TB usable</strong>, 43.7 TiB as the NAS will report it, minus 2–3% for the filesystem: about <strong>42.5 TiB</strong> free on day one.</li>
  <li>Fault tolerance: any two drives. After one failure, still fully redundant during the 1–3 day rebuild.</li>
  <li>Alternative, RAID 5: 60 TB usable, one failure, and a rebuild that reads 60 TB with no safety net. Rejected.</li>
  <li>Alternative, RAID 10: 36 TB usable, faster random writes the workload doesn't need. Rejected on capacity.</li>
</ol>
<p>Synology's SHR-2 and QNAP's dual-redundancy pools give the same result with the option of mixed drive sizes later. Add a versioned backup to a separate device regardless; RAID 6 protects against drive failure, not against deletion or ransomware.</p>`,
    },
  ],
};

export default editorial;
