import type { CalculatorEditorial } from "~/lib/types";

const editorial: CalculatorEditorial = {
  reviewed: "2026-09-10",
  guides: [
    "raid-5-vs-raid-6-vs-raid-10",
    "raid-is-not-a-backup",
    "surveillance-hard-drives-wd-purple-vs-skyhawk",
  ],
  sections: [
    {
      heading: "Rebuild risk by drive size",
      html: `
<p>RAID 5's weakness is not the first failure, which it handles, but the rebuild that follows, during which the array has no redundancy and every surviving drive is read end to end. The chance of hitting an unrecoverable read error (URE) somewhere in that read grows with the total data read. Expected UREs during a RAID 5 rebuild, by drive size and count, for drives rated at one URE per 10<sup>15</sup> bits (the NAS/enterprise rating; consumer drives at 10<sup>14</sup> are ten times worse):</p>
<table>
  <thead><tr><th>Array</th><th>Data read during rebuild</th><th>Expected UREs (10<sup>15</sup>)</th><th>Chance of ≥1 URE</th><th>Same array on 10<sup>14</sup> drives</th></tr></thead>
  <tbody>
    <tr><td>3 × 4 TB</td><td>8 TB</td><td>0.064</td><td>6%</td><td>47%</td></tr>
    <tr><td>4 × 4 TB</td><td>12 TB</td><td>0.096</td><td>9%</td><td>62%</td></tr>
    <tr><td>4 × 8 TB</td><td>24 TB</td><td>0.19</td><td>17%</td><td>85%</td></tr>
    <tr><td>5 × 8 TB</td><td>32 TB</td><td>0.26</td><td>23%</td><td>92%</td></tr>
    <tr><td>4 × 16 TB</td><td>48 TB</td><td>0.38</td><td>32%</td><td>98%</td></tr>
    <tr><td>6 × 16 TB</td><td>80 TB</td><td>0.64</td><td>47%</td><td>&gt;99%</td></tr>
    <tr><td>8 × 20 TB</td><td>140 TB</td><td>1.12</td><td>67%</td><td>&gt;99%</td></tr>
  </tbody>
</table>
<p>A URE during a rebuild on a modern controller or on mdadm/ZFS/Synology usually means one corrupted file, not a dead array; on older hardware RAID cards it can abort the rebuild entirely. Either way, the table is the reason RAID 5 is recommended only for arrays of small drives or for data that has a backup. The published URE ratings are conservative and real drives often do better, but you shouldn't build on that.</p>`,
    },
    {
      heading: "The write penalty in practice",
      html: `
<p>Every small random write to RAID 5 costs four disk operations: read the old data block, read the old parity block, write the new data, write the new parity. On a 4-drive array with drives that do ~150 random IOPS each (600 total), that's roughly 150 random write IOPS for the whole array, the same as a single drive. Sequential writes of full stripes skip the read-modify-write cycle and run at close to (N − 1) × single-drive speed.</p>
<p>What this means for common workloads:</p>
<ul>
  <li><strong>Media library, backups, file shares:</strong> mostly large sequential writes. RAID 5 performs well.</li>
  <li><strong>Surveillance recording:</strong> many concurrent sequential streams. RAID 5 is fine on a dedicated NVR with a hardware controller; on a NAS doing other work, watch for dropped frames at high camera counts.</li>
  <li><strong>Virtual machines, databases, mail servers:</strong> random 4–64 KB writes. RAID 5 is a poor fit; RAID 10 or SSDs are the usual answer.</li>
</ul>
<p>Hardware RAID cards with a battery- or flash-backed write cache absorb the penalty for bursty workloads by acknowledging writes before they hit disk. Software RAID and most NAS appliances don't have this, which is why the same RAID 5 feels much slower on a home NAS than on a server.</p>`,
    },
    {
      heading: "Where RAID 5 is still the right choice",
      html: `
<p>Despite the caveats, RAID 5 remains sensible in specific situations, and the calculator's capacity figures will show why: it gives you the most usable space of any redundant level.</p>
<ul>
  <li><strong>Three drives.</strong> RAID 6 needs four and RAID 10 needs four. With three drives, RAID 5 is the only way to get redundancy and more than one drive's capacity.</li>
  <li><strong>Small drives (≤ 4 TB).</strong> Rebuilds take hours, not days, and the URE arithmetic is comfortable on NAS-class drives.</li>
  <li><strong>Data that is fully backed up elsewhere.</strong> If a failed rebuild costs a restore rather than data loss, RAID 5's capacity efficiency is worth the exposure. See <a href="/guides/raid-is-not-a-backup/">RAID is not a backup</a>.</li>
  <li><strong>Synology SHR-1 and QNAP single-redundancy pools.</strong> These behave like RAID 5 with mixed drive sizes, and for a 4-bay home NAS with 4 TB drives and a backup, they're the sensible default.</li>
</ul>
<p>Worked example: 4 × 4 TB in RAID 5 gives 12 TB usable (10.9 TiB as the NAS will show it), survives one failure, and rebuilds in 6–12 hours with a 9% chance of hitting a URE on NAS-class drives. Compare the same four drives in RAID 6 (8 TB, survives two) with the <a href="/raid-6-storage-calculator/">RAID 6 calculator</a>; at 4 TB per drive, RAID 5 is a defensible choice. At 16 TB per drive it isn't, and the calculator's fault-tolerance figure doesn't change to tell you that. The table above does.</p>`,
    },
  ],
};

export default editorial;
