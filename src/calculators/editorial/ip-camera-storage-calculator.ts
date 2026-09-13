import type { CalculatorEditorial } from "~/lib/types";

const editorial: CalculatorEditorial = {
  reviewed: "2026-09-13",
  guides: [
    "h264-vs-h265-vs-smart-codecs",
    "how-to-calculate-cctv-storage",
    "why-your-nvr-fills-up-faster-than-calculated",
  ],
  sections: [
    {
      heading: "Reading the real bitrate from the camera",
      html: `
<p>Every estimate on this page is a stand-in for a number the camera already knows. Once a camera is installed, the actual bitrate beats any table. Where to find it:</p>
<table>
  <thead><tr><th>Vendor</th><th>Where the live bitrate is shown</th></tr></thead>
  <tbody>
    <tr><td>Hikvision</td><td>Web UI → Configuration → Video/Audio → Video: "Max. Bitrate" is the cap; the live figure is on the Live View page status bar, or in the NVR's Camera → Stream Info</td></tr>
    <tr><td>Dahua</td><td>Web UI → Setting → Camera → Video: cap under "Bit Rate"; live figure under Info → Online User or the NVR's channel info (i)</td></tr>
    <tr><td>Axis</td><td>Web UI → Stream → the bitrate graph on the live view; Status → Stream Statistics for averages</td></tr>
    <tr><td>Hanwha (Wisenet)</td><td>Web UI → Video &amp; Audio → Video Setup: "Bitrate" cap; live figure on the monitoring page overlay</td></tr>
    <tr><td>Ubiquiti (Protect)</td><td>Camera → Settings → Manage: current bitrate per stream quality; Protect logs average over time</td></tr>
    <tr><td>Reolink, Amcrest, Uniview, generic ONVIF</td><td>Encode settings page shows the cap; VLC playing the RTSP URL shows the live input bitrate under Tools → Codec Information → Statistics</td></tr>
  </tbody>
</table>
<p>Watch the live figure for a minute at a busy time of day and a minute at a quiet one. The average over 24 hours usually sits at 50–70% of the VBR cap for an outdoor scene with a smart codec, and at the cap for CBR. Put the observed average into the calculator via the custom bitrate override if your widget shows one, or pick the resolution/codec combination whose estimate matches.</p>`,
    },
    {
      heading: "Storage per camera at every common setting",
      html: `
<p>GB per camera per day, 24/7 recording, at this site's reference bitrates. Multiply by retention days for the per-camera total; multiply by camera count for the system.</p>
<table>
  <thead><tr><th>Resolution</th><th>H.264 @ 15 fps</th><th>H.264 @ 25 fps</th><th>H.265 @ 15 fps</th><th>H.265 @ 25 fps</th><th>Smart codec @ 25 fps</th></tr></thead>
  <tbody>
    <tr><td>720p (1 MP)</td><td>13 GB</td><td>22 GB</td><td>6.5 GB</td><td>11 GB</td><td>5.4 GB</td></tr>
    <tr><td>1080p (2 MP)</td><td>26 GB</td><td>43 GB</td><td>13 GB</td><td>22 GB</td><td>11 GB</td></tr>
    <tr><td>3 MP</td><td>39 GB</td><td>65 GB</td><td>19 GB</td><td>32 GB</td><td>16 GB</td></tr>
    <tr><td>4 MP (1440p)</td><td>52 GB</td><td>86 GB</td><td>26 GB</td><td>43 GB</td><td>22 GB</td></tr>
    <tr><td>5 MP</td><td>65 GB</td><td>108 GB</td><td>32 GB</td><td>54 GB</td><td>27 GB</td></tr>
    <tr><td>4K (8 MP)</td><td>104 GB</td><td>173 GB</td><td>52 GB</td><td>86 GB</td><td>43 GB</td></tr>
  </tbody>
</table>
<p>The table answers the question the page is built around: <strong>a 4K H.265 camera at 15 fps (52 GB/day) costs less storage than a 1080p H.264 camera at 25 fps (43 GB/day) plus a little.</strong> Resolution is expensive; codec and frame rate are the levers that pay for it. For identification-grade footage of a doorway, 4K at 12–15 fps with H.265 is a better use of the same bytes than 1080p at 30 fps with H.264.</p>`,
    },
    {
      heading: "Network load and edge storage",
      html: `
<p><strong>Network.</strong> Storage bitrate is also network bitrate. A camera's main stream goes to the recorder continuously; its sub-stream goes to every live viewer. On a PoE switch, the camera-side ports are never the problem (a 4K camera uses under 2% of a 100 Mbps port), but the uplink is: 24 cameras × 8 Mbps main + 3 viewers × 24 × 1 Mbps sub-stream is 264 Mbps through one uplink. Use the calculator's per-camera bitrate, multiply by cameras, and keep the total under about 70% of the uplink speed to leave room for VBR peaks.</p>
<p><strong>PoE budget.</strong> Unrelated to storage but the other thing that runs out: a typical IP bullet or dome draws 5–8 W, a PTZ 15–30 W, a camera with an IR illuminator and heater up to 25 W. A 24-port switch with a 190 W PoE budget runs 24 basic cameras but only 6–8 PTZs.</p>
<p><strong>Edge (SD card) storage.</strong> Most professional IP cameras take a microSD card, usually up to 256 GB, and can record to it continuously or only when the NVR connection drops ("ANR", automatic network replenishment, on Hikvision/Dahua; "failover recording" on Axis). As a fallback, a 128 GB card holds about 6 days of 1080p H.265 at 15 fps (13 GB/day) or 1 day of 4K H.264 at 25 fps. That's enough to cover a switch failure over a weekend. As primary storage it's viable only for single-camera installs and motion-only recording; see the <a href="/security-camera-storage-calculator/">security camera calculator</a> for card sizing.</p>`,
    },
  ],
};

export default editorial;
