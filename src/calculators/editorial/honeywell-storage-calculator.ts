import type { CalculatorEditorial } from "~/lib/types";

const editorial: CalculatorEditorial = {
  reviewed: "2026-09-16",
  guides: [
    "h264-vs-h265-vs-smart-codecs",
    "how-to-calculate-cctv-storage",
    "why-your-nvr-fills-up-faster-than-calculated",
  ],
  sections: [
    {
      heading: "Honeywell camera generations and what each one encodes",
      html: `
<p>Honeywell has sold IP cameras under several range names over the last decade, and the codec support differs by generation. The model picker above sets the right codec automatically; this table is the reference behind it.</p>
<table>
  <thead><tr><th>Range</th><th>Model prefix</th><th>Resolutions</th><th>Codecs</th><th>Smart Codec</th><th>Status</th></tr></thead>
  <tbody>
    <tr><td>35 Series</td><td>HC35W…</td><td>2, 2.5, 3, 5, 8 MP; 5 MP PTZ</td><td>H.265 / H.264 / MJPEG, triple stream</td><td>Yes, up to 50% (scene dependent)</td><td>Current; adds on-camera AI analytics, NDAA-compliant</td></tr>
    <tr><td>30 Series</td><td>HC30W…</td><td>2, 4, 5 MP; 5 MP fisheye</td><td>H.265 / H.264 / MJPEG</td><td>Yes, up to 50%</td><td>Current; the value line, NDAA-compliant</td></tr>
    <tr><td>60 Series</td><td>HC60W…, HBW…</td><td>2, 4, 5 MP</td><td>H.265 HEVC / H.264</td><td>Yes</td><td>Current; WDR &gt;120 dB, motorised lenses</td></tr>
    <tr><td>Performance Series</td><td>H4W…PER, H4D…PR, HEN NVRs</td><td>2, 4, 8 MP</td><td>H.265 / H.264 (H.264-only on early units)</td><td>Generally no</td><td>Older; many still deployed</td></tr>
    <tr><td>equIP</td><td>H4W…GR, H4D…PRV, HCD…</td><td>1, 2, 3 MP</td><td>H.264 / MJPEG</td><td>No</td><td>Legacy</td></tr>
  </tbody>
</table>
<p>The practical consequence for storage: a 5 MP 35 Series camera with Smart Codec on uses roughly the same bytes per day as a 2 MP equIP camera on H.264. If you're replacing equIP units one for one with 35 Series at higher resolution, retention on the existing NVR drive usually stays the same or improves. The calculator lets you run each group separately: pick the old model, note the total, then pick the new one.</p>`,
    },
    {
      heading: "Honeywell recorders",
      html: `
<p>Honeywell's recorders are sold in ranges that match the camera lines, plus the server-based MAXPRO NVR for larger estates. Channel counts and the model-number pattern:</p>
<table>
  <thead><tr><th>Range</th><th>Models</th><th>Channels</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>35 Series embedded NVR</td><td>HN35040100, HN35080200, HN35160200 (and HN35 PLUS)</td><td>4 / 8 / 16</td><td>4K decode, H.265 Smart Codec, built-in PoE; the model number's last digits indicate PoE ports and bays</td></tr>
    <tr><td>30 Series embedded NVR</td><td>HN30040204, HN30080204, HN30160204, HN30320408</td><td>4 / 8 / 16 / 32</td><td>4K, H.265/H.264/MJPEG, PoE ports matching channels on the 4/8/16; the trailing "04" / "08" is the shipped HDD size in TB on many SKUs</td></tr>
    <tr><td>Performance Series NVR</td><td>HEN04103, HEN08103, HEN16103, HEN32103 (plus L/H variants)</td><td>4 / 8 / 16 / 32</td><td>Older; typically 1–2 SATA bays on 4/8/16 ch, more on 32 ch</td></tr>
    <tr><td>MAXPRO NVR</td><td>MAXPRO NVR SE / XE / PE, or software on your server</td><td>32 to hundreds</td><td>Server-based; storage is whatever RAID array you attach</td></tr>
  </tbody>
</table>
<p>Honeywell's embedded NVR datasheets list the number of SATA interfaces and a maximum HDD size per bay, and these vary within a range, so treat the calculator's "recommended drive" as a target to check against the specific model's HDD line rather than as a guarantee it fits. For a MAXPRO NVR, take the calculator's total to the <a href="/raid-storage-calculator/">RAID calculator</a> and size a RAID 5 or 6 array.</p>`,
    },
    {
      heading: "Worked example: a 16-camera 35 Series site",
      html: `
<p>A distribution warehouse: 10 × HC35WB5R2 (5 MP bullet) on the yard and loading doors, 6 × HC35W42R2 (2 MP dome) inside. All at 30 fps with Smart Codec on, 24/7, 30 days.</p>
<ol>
  <li><strong>5 MP bullets:</strong> H.264 baseline for 5 MP at 25 fps is 10 Mbps; at 30 fps, 12 Mbps; Smart Codec at 25% → <strong>3 Mbps</strong>. Per camera per day: 3 × 3600 × 24 ÷ 8 ÷ 1000 = 32.4 GB. Ten cameras for 30 days: <strong>9.7 TB</strong>.</li>
  <li><strong>2 MP domes:</strong> 4 Mbps × 30/25 = 4.8 Mbps; Smart Codec → <strong>1.2 Mbps</strong>. Per camera per day: 13 GB. Six cameras for 30 days: <strong>2.3 TB</strong>.</li>
  <li><strong>Total 12.0 TB</strong>, plus 15% margin: <strong>13.8 TB</strong>. Aggregate bitrate: 10 × 3 + 6 × 1.2 = 37 Mbps, well within a 16-channel NVR's limit.</li>
</ol>
<p>The yard cameras are 81% of the storage. If the site wanted 60 days, the cheaper change is dropping the yard bullets to 20 fps (which cuts their share by a third) rather than doubling the drive. And if Smart Codec turns out to deliver only 30% on the busy loading doors rather than 50%, the 5 MP group grows to about 13.6 TB: the reason to keep the 15% margin and to check the real bitrates after the first week.</p>`,
    },
  ],
};

export default editorial;
