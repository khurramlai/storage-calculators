import type { CalculatorEditorial } from "~/lib/types";

const editorial: CalculatorEditorial = {
  reviewed: "2026-09-10",
  guides: [
    "raid-5-vs-raid-6-vs-raid-10",
    "raid-is-not-a-backup",
  ],
  sections: [
    {
      heading: "What 'survives one failure' means for RAID 10",
      html: `
<p>RAID 10's fault tolerance is unusual: it depends on <em>which</em> drives fail, not just how many. Data is mirrored in pairs and striped across the pairs, so the array survives any number of failures as long as no pair loses both members. The calculator reports the guaranteed figure (1 drive) and the best case (half the drives). The probabilities in between:</p>
<table>
  <thead><tr><th>Drives (pairs)</th><th>Survives 1st failure</th><th>Survives 2 random failures</th><th>Survives 3 random failures</th></tr></thead>
  <tbody>
    <tr><td>4 (2)</td><td>Always</td><td>67% (2 of 3 remaining drives are safe to lose)</td><td>0%</td></tr>
    <tr><td>6 (3)</td><td>Always</td><td>80%</td><td>40%</td></tr>
    <tr><td>8 (4)</td><td>Always</td><td>86%</td><td>57%</td></tr>
    <tr><td>12 (6)</td><td>Always</td><td>91%</td><td>73%</td></tr>
    <tr><td>16 (8)</td><td>Always</td><td>93%</td><td>80%</td></tr>
  </tbody>
</table>
<p>"Survives 2nd failure" is the chance that a second, random drive failure lands in a different pair from the first. On a 4-drive array it's a coin flip weighted slightly in your favour; on larger arrays it's very likely. RAID 6, by contrast, survives the second failure with certainty regardless of which drive it is. That is the precise trade: RAID 10 is <em>probably</em> two-failure tolerant and RAID 6 is <em>certainly</em> two-failure tolerant.</p>`,
    },
    {
      heading: "Why RAID 10 wins on random writes",
      html: `
<p>Parity RAID turns every small write into a read-modify-write cycle. RAID 10 doesn't compute anything: a write goes to both drives of the target pair, and that's it. The write penalty is 2 (versus 4 for RAID 5 and 6 for RAID 6), there's no parity calculation on the CPU or controller, and reads can be served by either member of a pair.</p>
<p>Approximate random 4 KB IOPS for arrays of eight 7200 rpm drives at ~150 IOPS each (1,200 raw):</p>
<table>
  <thead><tr><th>Level</th><th>Random read IOPS</th><th>Random write IOPS</th><th>Usable capacity (8 × 8 TB)</th></tr></thead>
  <tbody>
    <tr><td>RAID 0</td><td>~1,200</td><td>~1,200</td><td>64 TB</td></tr>
    <tr><td>RAID 10</td><td>~1,200</td><td>~600</td><td>32 TB</td></tr>
    <tr><td>RAID 5</td><td>~1,050</td><td>~300</td><td>56 TB</td></tr>
    <tr><td>RAID 6</td><td>~900</td><td>~200</td><td>48 TB</td></tr>
  </tbody>
</table>
<p>Three times the random write throughput of RAID 6 on the same drives is why RAID 10 is the standard recommendation for VM datastores, transactional databases, Exchange, and any surveillance recorder that's pushing its incoming-bandwidth limit. For sequential workloads (media, backups, most file shares) the gap nearly vanishes and RAID 6's extra capacity wins.</p>
<p>Rebuilds are also cheaper: replacing a failed drive copies its mirror partner (one drive read, one written) rather than reading the whole array. A 16 TB drive rebuilds in a day even under load, and the only drive at elevated risk during that day is its partner.</p>`,
    },
    {
      heading: "RAID 10 vs RAID 01, and the odd-drive problem",
      html: `
<p><strong>RAID 10 vs RAID 01.</strong> Both use mirroring and striping; the order matters. RAID 10 (mirror then stripe) makes pairs of mirrored drives and stripes across the pairs. RAID 01 (stripe then mirror) makes two RAID 0 stripes and mirrors one against the other. They have the same capacity and similar performance, but RAID 01's fault tolerance is worse: one failure takes out an entire stripe, and any second failure on the other stripe kills the array. RAID 10 tolerates a second failure in most cases (see the table above). There is no reason to choose RAID 01; if a controller offers only "RAID 0+1", check which it actually implements.</p>
<p><strong>Odd drive counts.</strong> RAID 10 needs pairs. With five drives, one is left over; the calculator flags this and computes on four, with the fifth best used as a hot spare. Some implementations (Linux mdadm's "far" and "offset" layouts, and Synology's RAID F1) can use odd counts by distributing mirrors differently, but the capacity is still N/2 rounded down in most cases.</p>
<p><strong>Worked example, 4-bay for a home lab running VMs.</strong> Four 4 TB drives: RAID 10 gives 8 TB usable (7.3 TiB), the same as RAID 6, with roughly three times the random write performance and a 67% chance of surviving a second simultaneous failure. For a VM host, RAID 10. For a media NAS with the same drives, RAID 6 for the guaranteed second failure. The <a href="/raid-6-storage-calculator/">RAID 6 calculator</a> gives you the other half of that comparison.</p>`,
    },
  ],
};

export default editorial;
