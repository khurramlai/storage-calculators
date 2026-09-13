import type { CalculatorEditorial } from "~/lib/types";

const editorial: CalculatorEditorial = {
  reviewed: "2026-09-13",
  guides: [
    "continuous-vs-motion-recording",
    "why-your-nvr-fills-up-faster-than-calculated",
    "how-to-calculate-cctv-storage",
  ],
  sections: [
    {
      heading: "Local, cloud, or both: where home camera footage actually goes",
      html: `
<p>Consumer security cameras store footage in one of three places, and each has a different sizing question.</p>
<table>
  <thead><tr><th>Storage model</th><th>Examples</th><th>What you size</th><th>Typical cost</th></tr></thead>
  <tbody>
    <tr><td>MicroSD card in the camera</td><td>Reolink, Wyze, Eufy (some), TP-Link Tapo, Ring (with base), Blink (Sync Module)</td><td>Card capacity per camera, 32–512 GB</td><td>One-off, $10–60 per card</td></tr>
    <tr><td>Local hub or NVR</td><td>Eufy HomeBase, Reolink NVR, Ubiquiti Protect, Synology Surveillance Station, Frigate</td><td>Drive capacity shared across all cameras</td><td>One-off, $60–200 per drive</td></tr>
    <tr><td>Cloud subscription</td><td>Ring Protect, Arlo Secure, Nest Aware, Wyze Cam Plus, Eufy Cloud</td><td>Nothing to size; retention is fixed by plan (30–60 days of events)</td><td>$3–20 per month, per camera or per home</td></tr>
  </tbody>
</table>
<p>The calculator is for the first two. For a cloud plan, the question is whether the plan's event-only, fixed-retention model is enough, and what it costs over the life of the camera: three cameras on an $8/month plan is $480 over five years, which buys a lot of local storage.</p>`,
    },
    {
      heading: "MicroSD card sizing for cameras with onboard storage",
      html: `
<p>Onboard cards are almost always motion-only and record at the camera's main stream. At 1080p H.264 (2–4 Mbps) a motion clip of 30 seconds is 8–15 MB. At 2K/4 MP H.265 (2–3 Mbps) it's similar. Typical days of retention, assuming 40 motion events a day of 30 seconds each:</p>
<table>
  <thead><tr><th>Card</th><th>1080p H.264</th><th>2K H.265</th><th>4K H.265</th><th>Continuous 1080p (where supported)</th></tr></thead>
  <tbody>
    <tr><td>32 GB</td><td>~55 days</td><td>~70 days</td><td>~25 days</td><td>~1 day</td></tr>
    <tr><td>64 GB</td><td>~110 days</td><td>~140 days</td><td>~50 days</td><td>~2 days</td></tr>
    <tr><td>128 GB</td><td>~220 days</td><td>~280 days</td><td>~100 days</td><td>~4 days</td></tr>
    <tr><td>256 GB</td><td>card usually caps here</td><td>~560 days</td><td>~200 days</td><td>~8 days</td></tr>
  </tbody>
</table>
<p>Two caveats. First, most cameras cap supported card size (128 GB or 256 GB is common; check the spec sheet, not the Amazon listing). Second, buy a "high endurance" card (Samsung Pro Endurance, SanDisk Max Endurance, WD Purple microSD). Standard cards are rated for consumer camera use, not thousands of overwrite cycles, and they fail silently: the camera keeps reporting "recording" while writing nothing. Replace cards every 2–3 years regardless.</p>
<p>A busy front-door camera on a street can log 200+ events a day, which divides the figures above by five. Use the calculator with "motion-triggered" and a high hours-per-day value if that's your situation.</p>`,
    },
    {
      heading: "Local hub sizing: the 14-day default and when to change it",
      html: `
<p>The calculator's defaults for this page (4 cameras, 1080p, motion-only, 14 days) reflect what most home hub systems ship with. Fourteen days is enough to notice a break-in, a package theft, or damage to a car and go back for the footage. Reasons to extend it:</p>
<ul>
  <li><strong>Holiday homes or long trips.</strong> If you won't review footage for a month, retention needs to be longer than the trip.</li>
  <li><strong>Insurance claims.</strong> Insurers sometimes ask for footage weeks after an incident is reported. 30 days is a safer floor.</li>
  <li><strong>Neighbourhood incidents.</strong> Police requests for footage of a street incident can arrive 1–3 weeks later.</li>
</ul>
<p>Going from 14 to 30 days on four 1080p motion-only cameras at 2.4 Mbps takes storage from roughly 0.6 TB to 1.2 TB, which on a hub that accepts a 2 TB drive is free. For Eufy HomeBase 3 (up to 16 TB expansion via USB or SATA), Reolink NVRs (typically 2 bays, up to 12 TB each) and Ubiquiti UNVR (4 bays) the drive is rarely the constraint; for a Cloud Key G2+ (one 2.5-inch drive, 5 TB maximum) it can be, and the calculator's "recommended drive" output will show whether you're near the ceiling.</p>
<p>Doorbell cameras are worth sizing separately: they trigger constantly (every passer-by), record at 1.5–2 K, and on a busy street can outweigh three ordinary cameras. Treat a doorbell as a continuous camera for planning.</p>`,
    },
  ],
};

export default editorial;
