import type { CalculatorEditorial } from "~/lib/types";

const editorial: CalculatorEditorial = {
  reviewed: "2026-09-12",
  guides: [
    "h264-vs-h265-vs-smart-codecs",
    "why-your-nvr-fills-up-faster-than-calculated",
    "surveillance-hard-drives-wd-purple-vs-skyhawk",
  ],
  sections: [
    {
      heading: "Hikvision NVR families and their drive limits",
      html: `
<p>Hikvision's NVR model numbers encode the channel count and bay count, which makes matching a recorder to the calculator's output straightforward once you know the pattern. <code>DS-76</code> is the desktop series, <code>DS-77</code> the 1U rack series, <code>DS-96</code> the 2U/3U enterprise series. The two digits after that are channels; the suffix letter-digit (K1, K2, I4, I8, I16) gives the series generation and bay count.</p>
<table>
  <thead><tr><th>Model family</th><th>Channels</th><th>Bays</th><th>Incoming bandwidth</th><th>RAID</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>DS-7604NI-K1 / -K1/4P</td><td>4</td><td>1</td><td>40 Mbps</td><td>No</td><td>4P = built-in 4-port PoE</td></tr>
    <tr><td>DS-7608NI-K2 / -K2/8P</td><td>8</td><td>2</td><td>80 Mbps</td><td>No</td><td>Most common small-business unit</td></tr>
    <tr><td>DS-7616NI-K2 / -K2/16P</td><td>16</td><td>2</td><td>160 Mbps</td><td>No</td><td></td></tr>
    <tr><td>DS-7716NI-I4 / DS-7732NI-I4 (and the (B) revisions)</td><td>16 / 32</td><td>4</td><td>160 / 256 Mbps (320 Mbps on the newer /24P and (B) datasheets)</td><td>Yes (0/1/5/6/10)</td><td>1U rack; I-series adds RAID and higher decode. Being superseded by the DS-77xxNI-M4 "M series"</td></tr>
    <tr><td>DS-9632NI-I8 / DS-9664NI-I8</td><td>32 / 64</td><td>8</td><td>320 Mbps</td><td>Yes</td><td>2U; hot-swap bays</td></tr>
    <tr><td>DS-9664NI-I16</td><td>64</td><td>16</td><td>320 Mbps</td><td>Yes</td><td>3U</td></tr>
    <tr><td>DS-76xxNXI / 77xxNXI (AcuSense)</td><td>4–32</td><td>1–4</td><td>as above</td><td>I-series only</td><td>Adds human/vehicle classification; same storage maths</td></tr>
  </tbody>
</table>
<p>Maximum drive size per bay depends on the datasheet revision, not just the model: the DS-7608NI-K2 is listed at 6 TB per bay on its original datasheet and 10 TB (20 TB raw) on current ones; I-series units are typically 10 TB per bay, with newer M-series models supporting more. Check the specific datasheet's "HDD capacity" line before buying 16 or 20 TB drives. Hikvision's compatibility list favours WD Purple and Seagate SkyHawk.</p>`,
    },
    {
      heading: "What H.265+ does and how to verify it's on",
      html: `
<p>H.265+ is Hikvision's smart-codec layer on top of H.265. It combines three techniques: a long, adaptive GOP that only sends a key frame when the scene changes; region-of-interest encoding that keeps moving objects sharp and compresses static background harder; and noise suppression so sensor noise at night isn't encoded as motion. Hikvision's own planning guidance assumes roughly a 50% saving over H.265 (so ~75% over H.264) on typical scenes, which is what this calculator's "H.265+" option applies.</p>
<p>To confirm it's active end to end:</p>
<ol>
  <li>On the camera: <em>Configuration → Video/Audio → Video</em>: "Video Encoding" should read <strong>H.265+</strong>, and "Bitrate Type" should be <strong>Variable</strong>. On CBR the saving disappears.</li>
  <li>On the NVR: <em>Camera → Camera → Edit (or the (i) icon on the channel)</em> and look at the stream info. If the NVR reports "H.265" for a camera set to H.265+, the NVR isn't negotiating the plus mode. All K- and I-series NVRs from the last several years support it; very old firmware may not.</li>
  <li>Watch the bitrate for a minute on a static scene. With H.265+ working, a 1080p camera on an empty corridor drops to 200–500 kbps; on plain H.265 it sits around 1–2 Mbps.</li>
</ol>
<p>Two situations where H.265+ is the wrong choice: cameras feeding a third-party VMS (Milestone, Genetec) that expects a regular GOP for analytics, and licence-plate cameras where the plate is static in frame and needs full detail. Set those to plain H.265.</p>`,
    },
    {
      heading: "Using this calculator alongside Hikvision's own tool",
      html: `
<p>Hikvision publishes a storage calculator (in the iVMS-4200 client and on its website) that produces broadly similar figures to this page, with a few differences worth knowing when you compare the two:</p>
<ul>
  <li><strong>Hikvision's tool sizes per model.</strong> Pick a DS-2CD2xxx camera and it fills in that model's default bitrate. This page uses a generic table by resolution and codec, so the numbers will differ by 10–20% for any given model. If you know the model, Hikvision's default bitrate is the better input.</li>
  <li><strong>Hikvision's defaults assume H.265+ with VBR at "medium" quality.</strong> That's also what this page's Hikvision preset assumes (8 cameras, 1080p, 25 fps, H.265+, 24/7, 30 days).</li>
  <li><strong>Neither tool models scene complexity.</strong> Both are planning estimates. Hikvision's guidance in its NVR manuals is to add a 10–20% margin, which is the same advice given here.</li>
</ul>
<p>Worked figure at the preset: 8 × 1080p at 25 fps H.265+ = 1 Mbps each → 10.8 GB/day per camera → 86 GB/day → <strong>2.6 TB for 30 days</strong>. A DS-7608NI-K2 with a single 4 TB WD Purple covers it with margin. Switching those same cameras to plain H.264 would need 10.4 TB, which is more than the two-bay unit can hold at 10 TB per bay without RAID; that's the practical reason to keep H.265+ on.</p>`,
    },
  ],
};

export default editorial;
