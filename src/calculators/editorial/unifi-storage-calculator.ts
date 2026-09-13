import type { CalculatorEditorial } from "~/lib/types";

const editorial: CalculatorEditorial = {
  reviewed: "2026-09-13",
  guides: [
    "continuous-vs-motion-recording",
    "surveillance-hard-drives-wd-purple-vs-skyhawk",
    "why-your-nvr-fills-up-faster-than-calculated",
  ],
  sections: [
    {
      heading: "Where UniFi Protect stores video",
      html: `
<p>UniFi Protect runs on Ubiquiti's own hardware, and the storage ceiling is set by which console you choose. There's no external NAS or cloud option for primary recording.</p>
<table>
  <thead><tr><th>Console</th><th>Drive bays</th><th>Typical capacity</th><th>RAID</th><th>Camera guidance</th></tr></thead>
  <tbody>
    <tr><td>Cloud Key Gen2 Plus (UCK-G2-PLUS)</td><td>1 × 2.5" SATA (1 TB included)</td><td>Up to 5 TB</td><td>None</td><td>Up to ~20 HD cameras; a few 4K</td></tr>
    <tr><td>Dream Machine Pro / SE (UDM-Pro, UDM-SE)</td><td>1 × 3.5"</td><td>Up to 16–20 TB (SE also has 128 GB internal for the OS)</td><td>None</td><td>Up to ~20 cameras alongside routing duties</td></tr>
    <tr><td>Network Video Recorder (UNVR)</td><td>4 × 3.5"</td><td>Up to 4 × 20 TB</td><td>RAID 1 (2 drives) or RAID 5 (3–4 drives), automatic</td><td>Up to ~15 × 4K or ~50 × HD</td></tr>
    <tr><td>NVR Pro (UNVR-PRO)</td><td>7 × 3.5"</td><td>Up to 7 × 20 TB</td><td>RAID 5 or RAID 10, selectable</td><td>Up to ~20 × 4K or ~60 × HD</td></tr>
    <tr><td>Enterprise NVR (ENVR)</td><td>Rack, many bays</td><td>Hundreds of TB</td><td>Yes</td><td>Large estates</td></tr>
  </tbody>
</table>
<p>The RAID behaviour matters for the calculator's output. A UNVR with four 8 TB drives has 24 TB usable in RAID 5, not 32. Its "camera guidance" numbers are Ubiquiti's, based on a mix of continuous recording at each camera's default quality; they're ceilings for the console's processing, not for storage, and the storage maths is done here.</p>`,
    },
    {
      heading: "Protect camera bitrates by model",
      html: `
<p>Protect sets each camera's bitrate from a quality preset (Low / Medium / High) rather than an explicit number, and the presets differ by model. Approximate main-stream bitrates at the High setting, which is what most people leave on:</p>
<table>
  <thead><tr><th>Camera</th><th>Resolution</th><th>Codec</th><th>High-quality bitrate (approx.)</th><th>GB/day continuous</th></tr></thead>
  <tbody>
    <tr><td>G3 Flex / G3 Instant</td><td>1080p</td><td>H.264</td><td>2–3 Mbps</td><td>22–32</td></tr>
    <tr><td>G4 Bullet / G4 Dome</td><td>4 MP (1440p)</td><td>H.264</td><td>4–6 Mbps</td><td>43–65</td></tr>
    <tr><td>G4 Doorbell / G4 Doorbell Pro</td><td>1600×1200 / 1600×1200 + package cam</td><td>H.264</td><td>3–4 Mbps</td><td>32–43</td></tr>
    <tr><td>G4 Pro</td><td>4K</td><td>H.264</td><td>8–12 Mbps</td><td>86–130</td></tr>
    <tr><td>G5 Bullet / G5 Dome / G5 Flex / G5 Turret</td><td>4 MP or 2K</td><td>H.265 (H.264 on older Protect)</td><td>2–4 Mbps</td><td>22–43</td></tr>
    <tr><td>G5 Pro</td><td>4K</td><td>H.265</td><td>6–8 Mbps</td><td>65–86</td></tr>
    <tr><td>G6 series (Bullet, Turret, Pro)</td><td>4K</td><td>H.265</td><td>5–8 Mbps</td><td>54–86</td></tr>
    <tr><td>AI Pro / AI 360 / AI Theta</td><td>4K</td><td>H.265</td><td>6–10 Mbps</td><td>65–108</td></tr>
  </tbody>
</table>
<p>These are field observations, not Ubiquiti specifications, and Protect adjusts them over firmware versions; check the current bitrate under each camera's <em>Settings → Manage</em> in the Protect app and use that if it differs. The calculator's UniFi preset (4 cameras, 4 MP, 30 fps, H.265, continuous, 14 days) models a small G5-based install. Older G4 cameras are H.264 only; if your estate is G4, pick H.264 and expect roughly double.</p>`,
    },
    {
      heading: "Recording modes and the timelapse overhead",
      html: `
<p>Protect offers three recording modes per camera: <strong>Always</strong> (continuous), <strong>Detections</strong> (motion, with optional smart detections for person/vehicle/package/animal on supported cameras), and <strong>Never</strong>. Two Protect-specific details affect storage:</p>
<ul>
  <li><strong>Detections mode still writes a low-bitrate timelapse continuously</strong> so the timeline stays scrubbable. It's small (well under 0.5 Mbps) but not zero; add 5% to a motion-only estimate.</li>
  <li><strong>Protect keeps a fixed retention per camera</strong> if you set one under <em>Settings → System → Storage</em>, and otherwise overwrites oldest-first when the disk fills. The calculator's "days" input corresponds to the retention setting; if you leave retention on automatic, the result tells you how many days you'll actually get.</li>
</ul>
<p>Worked figure at the preset: 4 × 4 MP H.265 at 30 fps = 8 × 0.5 × 30/25 = 4.8 Mbps each → 51.8 GB/day each → 207 GB/day → <strong>2.9 TB for 14 days</strong>. On a Cloud Key G2+ with its stock 1 TB drive, that's 5 days; upgrading to a 4 TB 2.5" drive (the largest widely available in that form factor is 5 TB) gets you to 19 days. Thirty days needs about 6.2 TB, which is UNVR territory. This is the single most common sizing surprise on Protect: the Cloud Key's included drive is for a handful of cameras at Medium quality, not four 4 MP cameras at High.</p>`,
    },
  ],
};

export default editorial;
