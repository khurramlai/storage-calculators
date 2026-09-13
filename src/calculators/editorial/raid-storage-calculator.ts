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
      heading: "Every RAID level on one table",
      html: `
<table>
  <thead><tr><th>Level</th><th>Min drives</th><th>Usable capacity</th><th>Survives (worst case)</th><th>Survives (best case)</th><th>Read speed</th><th>Write speed</th><th>Rebuild reads</th></tr></thead>
  <tbody>
    <tr><td>RAID 0</td><td>2</td><td>N</td><td>0 drives</td><td>0</td><td>N×</td><td>N×</td><td>n/a (no rebuild)</td></tr>
    <tr><td>RAID 1</td><td>2</td><td>1 drive (N/2 for 2 drives)</td><td>N − 1</td><td>N − 1</td><td>N×</td><td>1×</td><td>One drive</td></tr>
    <tr><td>RAID 5</td><td>3</td><td>N − 1</td><td>1</td><td>1</td><td>(N−1)×</td><td>(N−1)×/4 random</td><td>Whole array</td></tr>
    <tr><td>RAID 6</td><td>4</td><td>N − 2</td><td>2</td><td>2</td><td>(N−2)×</td><td>(N−2)×/6 random</td><td>Whole array</td></tr>
    <tr><td>RAID 10</td><td>4</td><td>N / 2</td><td>1</td><td>N / 2</td><td>N×</td><td>(N/2)×</td><td>One mirror partner</td></tr>
    <tr><td>RAID 50</td><td>6</td><td>N − groups</td><td>1</td><td>1 per group</td><td>(N−g)×</td><td>(N−g)×/4</td><td>One group</td></tr>
    <tr><td>RAID 60</td><td>8</td><td>N − 2 × groups</td><td>2</td><td>2 per group</td><td>(N−2g)×</td><td>(N−2g)×/6</td><td>One group</td></tr>
  </tbody>
</table>
<p>Speed multipliers are theoretical maximums relative to a single drive, assuming the controller and bus keep up; real-world figures are lower, especially for writes on software RAID without a write cache. The "/4" and "/6" on parity levels are the random-write penalty: each small write costs 4 (RAID 5) or 6 (RAID 6) physical operations. Sequential writes of full stripes avoid the penalty.</p>
<p>The calculator implements exactly this table. Hot spares are removed from the pool before any of the arithmetic; RAID 50/60 require the active drive count to divide evenly into the stripe groups you specify.</p>`,
    },
    {
      heading: "Hot spares, rebuild time, and the URE question",
      html: `
<p><strong>Hot spares</strong> are drives that sit idle in the chassis until a member fails, at which point the controller starts rebuilding onto the spare immediately, without waiting for someone to notice and swap a drive. They don't add fault tolerance in the strict sense (a RAID 5 with a hot spare still only survives one failure at a time) but they shrink the window of exposure from "days until someone visits" to "hours of rebuild". On a RAID 5 with large drives that difference is most of the risk.</p>
<p><strong>Rebuild time</strong> is roughly the drive's capacity divided by its sustained write speed, with contention from normal use on top. Rules of thumb for 7200 rpm NAS drives:</p>
<table>
  <thead><tr><th>Drive</th><th>Idle rebuild</th><th>Under normal load</th></tr></thead>
  <tbody>
    <tr><td>4 TB</td><td>6–8 h</td><td>12–24 h</td></tr>
    <tr><td>8 TB</td><td>12–16 h</td><td>1–2 days</td></tr>
    <tr><td>12 TB</td><td>18–24 h</td><td>2–3 days</td></tr>
    <tr><td>16 TB</td><td>24–30 h</td><td>2–4 days</td></tr>
    <tr><td>20 TB</td><td>30–40 h</td><td>3–5 days</td></tr>
  </tbody>
</table>
<p><strong>Unrecoverable read errors.</strong> During a rebuild the controller reads every surviving drive end to end. Drives are rated for one URE per 10<sup>14</sup> bits (consumer) or 10<sup>15</sup> bits (NAS/enterprise). 10<sup>14</sup> bits is 12.5 TB. A RAID 5 rebuild on 4 × 8 TB reads 24 TB from the three survivors: on 10<sup>14</sup>-rated drives, the expected number of UREs is about 1.9, meaning a rebuild is more likely than not to hit at least one. On 10<sup>15</sup>-rated drives it's 0.19, a roughly 17% chance. Modern controllers usually skip the bad sector and continue rather than aborting, but the file that sector belonged to is gone. RAID 6 makes the same rebuild survivable because the second parity can correct the error. This is the arithmetic behind "don't use RAID 5 with large drives".</p>`,
    },
    {
      heading: "Nested levels and when to split into groups",
      html: `
<p>RAID 50 and RAID 60 stripe data across several RAID 5 or RAID 6 sub-arrays. The purpose is to keep rebuilds small: a failed drive in one group is rebuilt from that group's drives only, so a 24-drive RAID 60 in four groups of six rebuilds like a 6-drive RAID 6, not a 24-drive one. Capacity cost is one (RAID 50) or two (RAID 60) drives <em>per group</em>.</p>
<table>
  <thead><tr><th>Configuration</th><th>Usable (12 × 16 TB)</th><th>Guaranteed failures</th><th>Best case</th><th>Rebuild reads</th></tr></thead>
  <tbody>
    <tr><td>RAID 6, one array of 12</td><td>160 TB</td><td>2</td><td>2</td><td>11 drives</td></tr>
    <tr><td>RAID 60, 2 groups of 6</td><td>128 TB</td><td>2</td><td>4 (2 per group)</td><td>5 drives</td></tr>
    <tr><td>RAID 60, 3 groups of 4</td><td>96 TB</td><td>2</td><td>6</td><td>3 drives</td></tr>
    <tr><td>RAID 10, 6 pairs</td><td>96 TB</td><td>1</td><td>6</td><td>1 drive</td></tr>
  </tbody>
</table>
<p>Below about 12 drives, plain RAID 6 is nearly always the better trade. Above 16, RAID 60 with groups of 8–12 is the standard enterprise layout. The calculator's stripe-group input lets you try both; the "best case" fault tolerance shown is per-group and only applies when failures fall in different groups, so plan on the guaranteed figure.</p>`,
    },
  ],
};

export default editorial;
