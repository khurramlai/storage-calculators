import type { CalculatorEditorial } from "~/lib/types";

const editorial: CalculatorEditorial = {
  reviewed: "2026-09-13",
  guides: [
    "how-to-calculate-cctv-storage",
    "continuous-vs-motion-recording",
    "h264-vs-h265-vs-smart-codecs",
  ],
  sections: [
    {
      heading: "Retention requirements by sector",
      html: `
<p>For a commercial video surveillance system the retention period is usually not a preference; it's set by regulation, an insurer, a client contract, or a standard the organisation has adopted. Common figures, which you should verify against the rule that applies to you:</p>
<table>
  <thead><tr><th>Sector / context</th><th>Typical retention</th><th>Source of the requirement</th></tr></thead>
  <tbody>
    <tr><td>General commercial premises (UK, EU)</td><td>30 days</td><td>Data-protection guidance (ICO, national DPAs): keep no longer than necessary; 30 days is the accepted norm</td></tr>
    <tr><td>Licensed premises (bars, clubs)</td><td>28–31 days</td><td>Licensing conditions set by the local authority</td></tr>
    <tr><td>Retail cash handling, banks</td><td>60–90 days</td><td>Insurer and PCI-related guidance; bank regulators often longer</td></tr>
    <tr><td>Casinos and gaming (US)</td><td>7–30 days continuous, incidents longer</td><td>State gaming commissions; Nevada requires 7 days minimum</td></tr>
    <tr><td>Cannabis dispensaries (US states)</td><td>30–90 days</td><td>State licensing rules; e.g. 90 days in several states</td></tr>
    <tr><td>Schools and universities</td><td>30 days</td><td>Institutional policy, safeguarding guidance</td></tr>
    <tr><td>Healthcare facilities</td><td>30–90 days</td><td>Institutional policy; longer where footage may be evidence</td></tr>
    <tr><td>Logistics, warehousing</td><td>30–60 days</td><td>Claims windows in shipping contracts</td></tr>
    <tr><td>Body-worn and evidential footage</td><td>Months to years</td><td>Evidence-retention rules; separate archive, not the live NVR</td></tr>
  </tbody>
</table>
<p>Two design consequences. Retention should be enforced by the system (a maximum-age purge) as well as by disk space, because data-protection regulators treat over-retention as a breach. And anything evidential should be exported and archived separately so it isn't overwritten by the rolling buffer; the <a href="/aws-s3-cold-storage-calculator/">cold storage calculator</a> prices that archive.</p>`,
    },
    {
      heading: "Bandwidth: the number that fails before storage does",
      html: `
<p>Total storage is bitrate × time. Total <em>bandwidth</em> is bitrate × cameras, right now, all at once, and it hits three limits before the disk fills:</p>
<ul>
  <li><strong>The recorder's incoming bandwidth.</strong> NVRs are rated for a maximum aggregate incoming bitrate: 80 Mbps for a typical 8-channel unit, 160 Mbps for 16 channels, 256–320 Mbps for 32. Exceed it and channels drop frames. Thirty-two 4K H.264 cameras at 16 Mbps is 512 Mbps and will not work on a 320 Mbps NVR regardless of drive size.</li>
  <li><strong>PoE switch uplinks.</strong> Twenty-four cameras on a 24-port PoE switch with a single 1 Gbps uplink share that gigabit. At 8 Mbps each that's fine (192 Mbps); at 16 Mbps peaks with a smart codec spiking on motion, it's marginal.</li>
  <li><strong>Disk write throughput.</strong> A single surveillance drive sustains 150–250 MB/s (1,200–2,000 Mbps) of sequential writes, so this is rarely the limit on an NVR, but it can be on a NAS that's doing other work or on a VMS server writing to a single spindle.</li>
</ul>
<p>The calculator's "bitrate per camera" output times the camera count gives you the aggregate. Compare it to the recorder's rated input before committing to a camera count.</p>`,
    },
    {
      heading: "Multi-site planning",
      html: `
<p>For an estate of sites, resist the urge to size one central store for everything. The usual pattern that works:</p>
<ol>
  <li><strong>Record locally at each site</strong> on an NVR or VMS archiver sized for the site's full retention. Video is written once, near the cameras, over a local network that can carry it.</li>
  <li><strong>Centralise viewing and management</strong>, not storage. A VMS (Milestone, Genetec, Avigilon, Hanwha WAVE, Hikvision HikCentral) can present every site's cameras in one client without moving the recordings.</li>
  <li><strong>Replicate only exceptions.</strong> Bookmarked incidents, alarm clips, or a low-bitrate sub-stream can be pushed to a central or cloud archive. That's a few percent of the total and can cross a WAN.</li>
</ol>
<p>A worked figure: ten sites with 16 cameras each at 1080p H.265 (2 Mbps), 30 days continuous, is 10 × 16 × 21.6 GB/day × 30 = <strong>104 TB</strong> in total, but 10.4 TB per site, which is a 2-bay NVR with two 8 TB drives. Centralising that same 104 TB means a 320 Mbps continuous WAN feed into one location and a storage server with RAID 6 across 10+ drives. The local option is cheaper, more resilient (a WAN outage doesn't stop recording), and easier to grow.</p>
<p>Run each site through the calculator separately when camera counts or codecs differ; the <a href="/genetec-storage-calculator/">Genetec calculator</a> covers the VMS-archiver case specifically.</p>`,
    },
  ],
};

export default editorial;
