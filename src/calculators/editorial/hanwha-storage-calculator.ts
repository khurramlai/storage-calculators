import type { CalculatorEditorial } from "~/lib/types";

const editorial: CalculatorEditorial = {
  reviewed: "2026-09-12",
  guides: [
    "h264-vs-h265-vs-smart-codecs",
    "how-to-calculate-cctv-storage",
    "surveillance-hard-drives-wd-purple-vs-skyhawk",
  ],
  sections: [
    {
      heading: "WiseStream II and the 30 fps convention",
      html: `
<p>Two things distinguish Hanwha (formerly Samsung Techwin, branded Wisenet) from the other vendors on this site, and both affect the numbers.</p>
<p><strong>WiseStream II</strong> is Hanwha's smart codec. It works like the others (dynamic GOP, region-based quality, noise-aware encoding) but exposes its strength as a setting: <em>Off</em>, <em>Low</em>, <em>Medium</em>, <em>High</em>. Hanwha's published guidance is up to 50% bitrate reduction at Medium and up to 75% at High combined with H.265 versus H.264, on scenes with limited motion. This calculator's Hanwha preset uses the "H.265+ / smart codec" option, which applies the 75% figure, so it corresponds to <strong>WiseStream II High</strong>. If you run Medium, pick plain H.265 in the calculator and treat the result as slightly conservative.</p>
<p><strong>30 fps default.</strong> Hanwha's cameras and its own storage calculator default to 30 fps, following the NTSC convention, where Hikvision and Axis material tends to assume 25 fps. Bitrate scales with frame rate, so a Hanwha spec-sheet bitrate at 30 fps is about 20% higher than the equivalent 25 fps figure. This page's preset uses 30 fps for that reason. If your cameras are set to 25 fps (common on PAL-region installs), change it and the estimate drops accordingly.</p>`,
    },
    {
      heading: "Wisenet recorder families",
      html: `
<p>Hanwha's NVRs follow a similar naming pattern to the other vendors. Bay counts and bandwidth for the current ranges (verify against the datasheet for the exact model):</p>
<table>
  <thead><tr><th>Series</th><th>Channels</th><th>Bays</th><th>Incoming bandwidth</th><th>RAID</th></tr></thead>
  <tbody>
    <tr><td>XRN-420S (replaces XRN-410S)</td><td>4</td><td>1 (6 TB max)</td><td>50 Mbps</td><td>No</td></tr>
    <tr><td>XRN-820S</td><td>8</td><td>2 (6 TB each, 12 TB max)</td><td>100 Mbps</td><td>No</td></tr>
    <tr><td>XRN-16xx (e.g. XRN-1620SB1)</td><td>16</td><td>2 or more, model-dependent</td><td>Model-dependent; check the datasheet</td><td>Model-dependent</td></tr>
    <tr><td>XRN-3210B4</td><td>32</td><td>16 hot-swap (160 TB max)</td><td>400 Mbps (150 Mbps in "normal" non-distributed mode)</td><td>Yes: RAID 5/6 as two 8-drive arrays</td></tr>
    <tr><td>PRN-32xx / PRN-64xx and up</td><td>32–64+</td><td>8–24</td><td>400+ Mbps</td><td>Yes</td></tr>
  </tbody>
</table>
<p>Hanwha's compatibility lists cover WD Purple and Seagate SkyHawk. Per-bay maximums are lower than you might expect on the desktop models (6 TB on the XRN-420S and XRN-820S), so check the datasheet before assuming a 10 TB drive will initialise. For larger estates Hanwha's WAVE VMS runs on standard servers, where the storage is whatever RAID array you attach; size that with the <a href="/raid-storage-calculator/">RAID calculator</a> after getting the raw requirement here.</p>`,
    },
    {
      heading: "Worked example at the Hanwha preset",
      html: `
<p>The preset is 8 cameras, 1080p, 30 fps, WiseStream II High (smart codec), 24/7, 30 days. Step by step:</p>
<ol>
  <li>H.264 baseline for 1080p at 25 fps is 4 Mbps; at 30 fps, 4 × 30/25 = 4.8 Mbps.</li>
  <li>Smart codec at 25% of H.264: 4.8 × 0.25 = <strong>1.2 Mbps</strong> per camera.</li>
  <li>Per camera per day: 1.2 × 3600 × 24 ÷ 8 ÷ 1000 = 13 GB. Per camera for 30 days: 389 GB.</li>
  <li>Eight cameras: <strong>3.1 TB</strong>. A single 4 TB drive in an XRN-820S has enough margin.</li>
</ol>
<p>Compare the same estate on Hikvision's preset (25 fps): 2.6 TB. The difference is entirely the frame rate. Twenty-five frames per second is more than enough for general surveillance; if the Hanwha cameras are at 30 fps only because it's the default, dropping to 25 saves 17% of storage with no visible change.</p>`,
    },
  ],
};

export default editorial;
