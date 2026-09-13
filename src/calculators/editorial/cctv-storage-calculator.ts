import type { CalculatorEditorial } from "~/lib/types";

const editorial: CalculatorEditorial = {
  reviewed: "2026-09-12",
  guides: [
    "how-to-calculate-cctv-storage",
    "why-your-nvr-fills-up-faster-than-calculated",
    "surveillance-hard-drives-wd-purple-vs-skyhawk",
  ],
  sections: [
    {
      heading: "Analog HD vs IP: what changes for storage",
      html: `
<p>"CCTV" still covers two different technologies, and the storage maths diverges between them mainly because of what the recorder can do with the signal.</p>
<table>
  <thead><tr><th>System</th><th>Signal</th><th>Practical max resolution</th><th>Codec at the recorder</th><th>Typical 1080p bitrate</th></tr></thead>
  <tbody>
    <tr><td>Legacy analog (CVBS)</td><td>Coax, 960H / D1</td><td>960×576</td><td>H.264</td><td>1–2 Mbps</td></tr>
    <tr><td>HD-TVI (Hikvision) / HD-CVI (Dahua) / AHD</td><td>Coax, uncompressed HD</td><td>1080p common; 4–8 MP on newer DVRs</td><td>H.264, H.265 on 2018+ DVRs, H.265+ on Hikvision "Turbo HD 5+" DVRs</td><td>2–4 Mbps</td></tr>
    <tr><td>IP (ONVIF / RTSP)</td><td>Ethernet, compressed in the camera</td><td>4K and above</td><td>Whatever the camera encodes: H.264, H.265, smart codecs</td><td>1–4 Mbps depending on codec</td></tr>
  </tbody>
</table>
<p>The important consequence: on an analog HD system, the <strong>DVR</strong> does the encoding, so the codec is set once for the whole box and is limited by the DVR's chipset. A 2016 HD-TVI DVR is H.264 only; there's no camera setting that will change that. On an IP system each camera encodes independently, so a 2019 H.264 camera and a 2024 H.265+ camera can share an NVR, and per-camera bitrate varies widely. The calculator's codec selector models both; if you have a mixed estate, run each group separately and add the totals.</p>
<p>Analog HD over coax has one more practical limit: cable length. HD-TVI and HD-CVI hold 1080p to roughly 300–500 m over RG59 and drop resolution beyond that; 4K analog is realistic only under ~100 m. That's why analog 4K deployments are rare, and why the calculator's 4K option mostly applies to IP.</p>`,
    },
    {
      heading: "DVR and NVR drive bays",
      html: `
<p>Recorder capacity is bounded by drive bays as much as by the maths. Common configurations:</p>
<table>
  <thead><tr><th>Recorder class</th><th>Channels</th><th>SATA bays</th><th>Max per bay (typical)</th><th>Realistic maximum</th></tr></thead>
  <tbody>
    <tr><td>Entry DVR/NVR</td><td>4</td><td>1</td><td>8–10 TB</td><td>10 TB</td></tr>
    <tr><td>Mid DVR/NVR</td><td>8–16</td><td>2</td><td>10–16 TB</td><td>32 TB</td></tr>
    <tr><td>Pro NVR</td><td>16–32</td><td>4</td><td>16–20 TB</td><td>80 TB (60 TB in RAID 5)</td></tr>
    <tr><td>Enterprise NVR</td><td>32–128</td><td>8–24</td><td>20 TB</td><td>160–480 TB</td></tr>
  </tbody>
</table>
<p>The "max per bay" column is set by recorder firmware, not by the drive. Older units cap at 6 or 8 TB; putting a 16 TB drive in one either fails to initialise or silently uses part of it. Check the datasheet before buying drives, and prefer fewer, larger drives up to the cap: a single 8 TB drive in a 4-channel DVR is simpler and no less reliable than two 4 TB drives with no RAID between them.</p>
<p>Most DVRs and small NVRs have no RAID at all: drives are filled sequentially and a failed drive loses whatever was on it. RAID 5 or 6 typically appears at the 4-bay "pro" tier and above. If the footage matters, that's the tier to buy. See the <a href="/raid-storage-calculator/">RAID calculator</a> for what RAID 5 costs you in capacity on a 4-bay unit.</p>`,
    },
    {
      heading: "Worked example: a hybrid retail system",
      html: `
<p>A shop upgrading from analog: it keeps 8 existing 1080p HD-TVI cameras on a hybrid recorder and adds 4 new 4 MP IP cameras with H.265. Requirement is 30 days, 24/7.</p>
<ol>
  <li><strong>Analog group:</strong> 1080p, H.264 (the DVR chipset's limit), 15 fps: 4 Mbps × 15/25 = 2.4 Mbps per camera → 25.9 GB/day → 8 cameras × 30 days = <strong>6.2 TB</strong>.</li>
  <li><strong>IP group:</strong> 4 MP, H.265, 15 fps: 8 Mbps × 0.5 × 15/25 = 2.4 Mbps per camera → same 25.9 GB/day → 4 cameras × 30 days = <strong>3.1 TB</strong>.</li>
  <li><strong>Total:</strong> 9.3 TB, plus 15% for the TB/TiB gap and scene variation = <strong>10.7 TB</strong>. Two 6 TB drives in a 2-bay hybrid recorder, or one 12 TB if the recorder supports it.</li>
</ol>
<p>Notice the 4 MP H.265 cameras cost the same per day as the 1080p H.264 ones. That's the codec doing the work: the IP cameras deliver twice the pixels for the same storage. Replacing the analog cameras with H.265 IP later would halve the analog group's share without changing retention.</p>`,
    },
  ],
};

export default editorial;
