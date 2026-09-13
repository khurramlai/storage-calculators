import type { CalculatorEditorial } from "~/lib/types";

const editorial: CalculatorEditorial = {
  reviewed: "2026-09-12",
  guides: [
    "h264-vs-h265-vs-smart-codecs",
    "how-to-calculate-cctv-storage",
    "continuous-vs-motion-recording",
  ],
  sections: [
    {
      heading: "Zipstream strength levels and what they save",
      html: `
<p>Zipstream is Axis's smart-codec technology and it differs from Hikvision's H.265+ or Hanwha's WiseStream in one useful way: it is fully standards-compliant on the wire. A Zipstream H.264 or H.265 stream decodes on any player or third-party VMS with no special support, because all the cleverness is in how the encoder chooses to spend bits, not in the bitstream format. That's why Axis cameras with Zipstream keep their savings on Milestone, Genetec and other VMS platforms where a Hikvision camera would fall back to plain H.265.</p>
<p>Zipstream's strength is configurable, and the level matters for sizing:</p>
<table>
  <thead><tr><th>Strength</th><th>Numeric value</th><th>Effect on static areas</th><th>Typical saving vs no Zipstream</th></tr></thead>
  <tbody>
    <tr><td>Off</td><td>0</td><td>None</td><td>0%</td></tr>
    <tr><td>Low</td><td>10</td><td>Slight</td><td>10–20%</td></tr>
    <tr><td>Medium</td><td>20</td><td>Visible on close inspection</td><td>25–40%</td></tr>
    <tr><td>High</td><td>30</td><td>Noticeable softening of background</td><td>40–55%</td></tr>
    <tr><td>Higher</td><td>40</td><td>Clear softening; moving objects still sharp</td><td>50–65%</td></tr>
    <tr><td>Extreme</td><td>50</td><td>Background heavily compressed</td><td>60–75%</td></tr>
  </tbody>
</table>
<p>Alongside strength, Axis exposes <em>Dynamic GOP</em> (on/off, with an upper GOP length; leave it on and the length at 300+ for surveillance), <em>Dynamic FPS</em> (drops frame rate on static scenes, which is a further saving the calculator doesn't model), and a <em>forensic mode</em> that fine-tunes for low light. Axis's own headline claim is "average 50% or more" with Zipstream on H.264, which corresponds to roughly the High–Higher range. This calculator's Axis preset uses the "smart codec" option (75% saving over H.264, i.e. H.265 with Zipstream at Higher–Extreme). For Medium strength on H.265, use the plain H.265 option and expect the real figure to be 25–40% under it.</p>`,
    },
    {
      heading: "Axis recorders and Camera Station sizing",
      html: `
<p>Axis sells its own recorders under the S-series name, all running AXIS Camera Station. Current classes:</p>
<table>
  <thead><tr><th>Model class</th><th>Form factor</th><th>Storage</th><th>Suited to</th></tr></thead>
  <tbody>
    <tr><td>AXIS S3008 Mk II Recorder</td><td>Desktop with 8 PoE ports (124 W budget)</td><td>Single drive, 4 TB or 8 TB preinstalled</td><td>Small sites, up to 8 cameras</td></tr>
    <tr><td>AXIS S1216 (tower or rack)</td><td>Recording server, 16 licences</td><td>8 TB preinstalled, up to 4 drives in RAID 0/1/10</td><td>Up to 16 cameras</td></tr>
    <tr><td>AXIS S1232 / S1248 (tower or rack)</td><td>Recording server, 32 / 48 licences</td><td>16 TB or 32 TB variants, RAID 0/1/5/6/10</td><td>32–48 cameras</td></tr>
    <tr><td>AXIS S22 series</td><td>Rack, higher spec</td><td>Larger RAID arrays</td><td>Larger sites</td></tr>
    <tr><td>Camera Station on your own server</td><td>Any</td><td>Whatever RAID you attach</td><td>Anything</td></tr>
  </tbody>
</table>
<p>Axis also publishes <strong>AXIS Site Designer</strong>, a free web tool that sizes storage per camera model using Axis's measured bitrates for that model and scene type. If you're specifying an all-Axis system, Site Designer's per-model figures are more precise than this page's generic table; use this page to sanity-check its output or to compare an Axis quote against other vendors on equal terms. Site Designer's default scene profiles map roughly to this page's options as follows: "Indoor, low activity" ≈ smart codec with motion recording; "Outdoor, high activity" ≈ plain H.265, continuous.</p>`,
    },
    {
      heading: "Worked example: an office building on Axis",
      html: `
<p>Twenty cameras: 12 × M-series indoor domes (1080p), 8 × P-series outdoor bullets (4 MP). All H.265, Zipstream High, dynamic GOP on. Indoor cameras record on motion (office hours make the duty cycle low, use 30%); outdoor cameras record continuously. 30 days.</p>
<ol>
  <li><strong>Indoor, 1080p:</strong> H.264 baseline 4 Mbps at 25 fps → H.265 2 Mbps → Zipstream High ~50% → about 1 Mbps. At 30% duty: 1 × 3600 × 24 × 0.3 ÷ 8 ÷ 1000 = 3.2 GB/day × 12 cameras × 30 days = <strong>1.2 TB</strong>.</li>
  <li><strong>Outdoor, 4 MP:</strong> H.264 baseline 8 Mbps → H.265 4 Mbps → Zipstream High ~50% → 2 Mbps, continuous: 21.6 GB/day × 8 cameras × 30 days = <strong>5.2 TB</strong>.</li>
  <li><strong>Total 6.4 TB</strong>, plus 15% margin: <strong>7.4 TB</strong>. An AXIS S3008 Mk II with the 8 TB drive fits only 8 of the 20 cameras, so this is S1232 territory: the 16 TB variant covers it, and RAID 5 or 6 across its drives gives redundancy.</li>
</ol>
<p>The outdoor cameras are 80% of the storage despite being 40% of the cameras, which is the usual pattern: continuous recording at higher resolution dominates. If the site later wanted 60 days, the cheap way to get it is dynamic FPS on the outdoor cameras overnight, not a bigger recorder.</p>`,
    },
  ],
};

export default editorial;
