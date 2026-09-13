import type { CalculatorEditorial } from "~/lib/types";

const editorial: CalculatorEditorial = {
  reviewed: "2026-09-12",
  guides: [
    "surveillance-hard-drives-wd-purple-vs-skyhawk",
    "why-your-nvr-fills-up-faster-than-calculated",
    "raid-5-vs-raid-6-vs-raid-10",
  ],
  sections: [
    {
      heading: "Matching the NVR to the drive count",
      html: `
<p>An NVR's storage ceiling is bays × maximum drive size per bay, and the two numbers are set by the model, not by what you can buy. Representative classes across the major vendors (Hikvision, Dahua, Uniview, Hanwha and their OEM brands):</p>
<table>
  <thead><tr><th>Class</th><th>Channels</th><th>Bays</th><th>Max per bay</th><th>Incoming bandwidth</th><th>RAID</th></tr></thead>
  <tbody>
    <tr><td>Mini / PoE 4-ch</td><td>4</td><td>1 × 3.5"</td><td>8–10 TB</td><td>40 Mbps</td><td>None</td></tr>
    <tr><td>Desktop 8-ch</td><td>8</td><td>2 × 3.5"</td><td>10 TB</td><td>80 Mbps</td><td>None</td></tr>
    <tr><td>Desktop 16-ch</td><td>16</td><td>2 × 3.5"</td><td>10–16 TB</td><td>160 Mbps</td><td>None</td></tr>
    <tr><td>1U rack 16/32-ch</td><td>16–32</td><td>4 × 3.5"</td><td>16–20 TB</td><td>160–256 Mbps</td><td>Optional on "pro" models (RAID 0/1/5/6/10)</td></tr>
    <tr><td>2U rack 32/64-ch</td><td>32–64</td><td>8 × 3.5"</td><td>20 TB</td><td>320 Mbps</td><td>Yes</td></tr>
    <tr><td>3U/4U enterprise</td><td>64–256</td><td>16–24 × 3.5"</td><td>20 TB</td><td>384–768 Mbps</td><td>Yes</td></tr>
  </tbody>
</table>
<p>The calculator's "recommended drive" output is a single-drive figure. For a multi-bay NVR without RAID, split the total across bays in equal sizes (recorders fill drives sequentially and mixed sizes work but waste nothing either way). For an NVR with RAID 5, add one drive's worth of capacity; for RAID 6, two. The <a href="/raid-storage-calculator/">RAID calculator</a> does this arithmetic for any bay count.</p>`,
    },
    {
      heading: "Incoming bandwidth is the other ceiling",
      html: `
<p>Every NVR has a maximum aggregate incoming bitrate, and it's a harder limit than storage: exceeding it drops frames on every channel, immediately. The calculator's per-camera bitrate multiplied by the camera count is the number to compare.</p>
<p>Examples at this site's reference bitrates:</p>
<ul>
  <li>8 × 4 MP H.265 at 20 fps (3.2 Mbps) = 26 Mbps. Fits any 8-channel NVR comfortably.</li>
  <li>16 × 4K H.264 at 25 fps (16 Mbps) = 256 Mbps. Exceeds a 160 Mbps 16-channel desktop NVR. Needs either H.265 (128 Mbps) or a rack NVR.</li>
  <li>32 × 1080p H.265+ at 25 fps (1 Mbps) = 32 Mbps. A 32-channel NVR rated at 256 Mbps is barely loaded; there's headroom to add resolution.</li>
</ul>
<p>Two related figures on the datasheet: <em>outgoing</em> bandwidth (how much can be streamed to viewers, usually similar to incoming) and <em>decoding capacity</em> (how many channels at what resolution the NVR can display live on its own HDMI output, often much lower: "2 × 4K or 8 × 1080p"). The decoding limit affects the local monitor only; recording is unaffected.</p>`,
    },
    {
      heading: "Worked example: a 16-channel NVR for a small warehouse",
      html: `
<p>Twelve cameras today, four more planned. Mix: 8 × 4 MP dome (H.265, 15 fps), 4 × 4K bullet on the yard (H.265, 15 fps). 45 days, 24/7.</p>
<ol>
  <li>4 MP H.265 at 15 fps: 8 × 0.5 × 15/25 = 2.4 Mbps → 25.9 GB/day × 8 cameras = 207 GB/day.</li>
  <li>4K H.265 at 15 fps: 16 × 0.5 × 15/25 = 4.8 Mbps → 51.8 GB/day × 4 cameras = 207 GB/day.</li>
  <li>Total 414 GB/day × 45 days = <strong>18.7 TB</strong>. With the four planned cameras (assume 4 MP): +104 GB/day → 23.3 TB.</li>
  <li>Bandwidth: 8 × 2.4 + 4 × 4.8 + 4 × 2.4 = 48 Mbps. Any 16-channel NVR handles this.</li>
  <li>Add 15% for TB/TiB and scene variation: <strong>27 TB</strong>.</li>
</ol>
<p>A 2-bay desktop NVR with two 14 TB drives gives 28 TB, no redundancy. A 4-bay rack NVR with four 10 TB drives in RAID 5 gives 30 TB and survives a drive failure. For a warehouse with insurance-driven retention, the second option is the right one; the price difference is mostly the chassis.</p>`,
    },
  ],
};

export default editorial;
