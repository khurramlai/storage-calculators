import type { CalculatorEditorial } from "~/lib/types";

const editorial: CalculatorEditorial = {
  reviewed: "2026-09-12",
  guides: [
    "how-to-calculate-cctv-storage",
    "raid-5-vs-raid-6-vs-raid-10",
    "h264-vs-h265-vs-smart-codecs",
  ],
  sections: [
    {
      heading: "How the Archiver role changes the sizing question",
      html: `
<p>Genetec Security Center is a VMS, not an NVR. Video is recorded by the <strong>Archiver</strong> role, a Windows service that runs on a server you supply (or on a Genetec Streamvault appliance) and writes to whatever disk that server has. That changes three things about sizing compared with a fixed-bay NVR:</p>
<ul>
  <li><strong>Storage is a server decision.</strong> Local RAID, iSCSI, a SAN, or a NAS share can all be Archiver disk groups. The calculator gives you the raw requirement; you then size an array with the <a href="/raid-storage-calculator/">RAID calculator</a>, typically RAID 6 for archives.</li>
  <li><strong>Each Archiver has a throughput ceiling.</strong> Genetec's guidance for a single Archiver is on the order of 300 Mbps aggregate incoming video (higher on well-specified hardware, lower on VMs with shared storage), and a practical limit of roughly 300 cameras per Archiver. Above that you add Archivers, each with its own storage. So a 600-camera system is at least two Archivers and two storage pools, sized separately.</li>
  <li><strong>Retention is a policy, not a disk-full event.</strong> Security Center enforces retention per camera (or per camera group) and purges on schedule. The storage needs to be big enough for the policy; if it isn't, the Archiver deletes the oldest video early and logs a warning. Size for the policy plus margin.</li>
</ul>
<p>Genetec also supports <strong>redundant archiving</strong> (a second Archiver records the same cameras in parallel) and <strong>failover archiving</strong> (a standby takes over when the primary fails). Redundant archiving doubles storage; failover doesn't, but the standby needs enough disk to cover the retention period on its own if the primary is down for long.</p>`,
    },
    {
      heading: "Streamvault appliances",
      html: `
<p>Genetec's own hardware line, Streamvault, ships with Security Center pre-installed and its storage already configured. Approximate classes:</p>
<table>
  <thead><tr><th>Series</th><th>Form factor</th><th>Usable storage (typical)</th><th>Suited to</th></tr></thead>
  <tbody>
    <tr><td>SV-100</td><td>Desktop all-in-one</td><td>Up to ~20 TB</td><td>Up to ~25 cameras, single-site</td></tr>
    <tr><td>SV-300</td><td>Desktop / short-depth rack</td><td>Up to ~40 TB</td><td>25–50 cameras</td></tr>
    <tr><td>SV-1000</td><td>1U/2U rack</td><td>Tens of TB, RAID 5/6</td><td>50–150 cameras</td></tr>
    <tr><td>SV-2000 / SV-4000</td><td>2U rack, more bays</td><td>100 TB+</td><td>150+ cameras, or multiple roles on one box</td></tr>
    <tr><td>SV-7000 and up</td><td>Rack, expandable with storage enclosures</td><td>Hundreds of TB</td><td>Enterprise, multiple Archivers</td></tr>
  </tbody>
</table>
<p>Genetec configures Streamvault appliances with the RAID and drive counts appropriate to the model, so the calculator's output maps to "which appliance" rather than "how many drives". If you're building on your own server instead, follow Genetec's Archiver hardware guidance: separate the OS/database volume from the video volume, and use a hardware RAID controller with battery- or flash-backed cache for the video array.</p>`,
    },
    {
      heading: "Worked example: 100 cameras on one Archiver",
      html: `
<p>The Genetec preset here is 16 cameras at 1080p, 15 fps, H.265, continuous, 60 days: a typical enterprise starting point (lower frame rate, longer retention than a small-business NVR). Scaled to a mid-sized deployment: 100 cameras, same settings.</p>
<ol>
  <li>1080p H.265 at 15 fps: 4 × 0.5 × 15/25 = <strong>1.2 Mbps</strong> per camera.</li>
  <li>Aggregate: 120 Mbps. Well within one Archiver's throughput.</li>
  <li>Per camera per day: 1.2 × 3600 × 24 ÷ 8 ÷ 1000 = 13 GB. Per camera for 60 days: 778 GB.</li>
  <li>100 cameras: <strong>77.8 TB</strong>. Add 15% margin: <strong>90 TB</strong>.</li>
  <li>As a RAID 6 array of 20 TB drives: 90 ÷ 20 = 4.5 data drives → 5 data + 2 parity = <strong>7 × 20 TB</strong>, giving 100 TB usable. An 8-bay chassis with one hot spare.</li>
</ol>
<p>If the client adds redundant archiving for the 20 most critical cameras, that's a second server with 20 × 778 GB × 1.15 = 18 TB, which is a small RAID 6 of four 8 TB drives. The calculator handles the per-group figures; run it once per camera group and sum.</p>`,
    },
  ],
};

export default editorial;
