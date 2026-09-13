import type { CalculatorEditorial } from "~/lib/types";

const editorial: CalculatorEditorial = {
  reviewed: "2026-09-12",
  guides: [
    "s3-vs-azure-blob-vs-google-cloud-storage",
    "cloud-storage-hidden-costs-egress-requests-retrieval",
    "s3-storage-classes-explained",
  ],
  sections: [
    {
      heading: "How to compare providers without fooling yourself",
      html: `
<p>Cross-provider comparisons go wrong in three predictable ways, and this calculator is built to avoid all of them:</p>
<ol>
  <li><strong>Comparing different redundancy levels.</strong> Azure's headline Hot price is LRS (one datacenter). S3 Standard and GCS Standard are multi-zone. Azure ZRS is the equivalent and costs the same as S3. The calculator uses LRS for Azure, so when you compare with S3, remember you're comparing a single-datacenter product with a multi-zone one. See the <a href="/azure-storage-calculator/">Azure calculator</a> for the multipliers.</li>
  <li><strong>Comparing per-1,000 with per-10,000 operation prices.</strong> AWS and Google quote operations per 1,000; Azure and Firebase per 10,000. The calculator normalises everything to per 1,000, so its figures can be compared directly, but the pricing pages can't.</li>
  <li><strong>Ignoring the lines that aren't storage.</strong> Egress, retrieval and requests routinely exceed the storage line. The calculator prices all five components and shows them separately; a comparison that only looks at the "monthly total" without seeing which line drives it usually picks wrong.</li>
</ol>
<p>The tier comparison in the results prices your inputs on every tier of the selected provider. Switch provider and repeat to get the full matrix; for most workloads it takes three runs.</p>`,
    },
    {
      heading: "Break-even table: when does a colder tier pay?",
      html: `
<p>A colder tier is cheaper only if you read back less than a certain fraction of it each month. The break-even fraction is (hot storage price − cold storage price) ÷ cold retrieval price. Computed from the current price tables:</p>
<table>
  <thead><tr><th>Move</th><th>Storage saving $/GB-month</th><th>Retrieval $/GB</th><th>Cold tier wins if you read less than</th></tr></thead>
  <tbody>
    <tr><td>S3 Standard → Standard-IA</td><td>0.0105</td><td>0.01</td><td>105% of stored volume per month</td></tr>
    <tr><td>S3 Standard → Glacier Instant Retrieval</td><td>0.019</td><td>0.03</td><td>63%</td></tr>
    <tr><td>S3 Standard → Glacier Flexible (standard retrieval)</td><td>0.0194</td><td>0.01</td><td>194%</td></tr>
    <tr><td>S3 Standard → Deep Archive (standard retrieval)</td><td>0.022</td><td>0.02</td><td>110%</td></tr>
    <tr><td>Azure Hot → Cool</td><td>0.0084</td><td>0.01</td><td>84%</td></tr>
    <tr><td>Azure Hot → Cold</td><td>0.0148</td><td>0.03</td><td>49%</td></tr>
    <tr><td>Azure Hot → Archive</td><td>0.0174</td><td>0.02</td><td>87%</td></tr>
    <tr><td>GCS Standard → Nearline</td><td>0.010</td><td>0.01</td><td>100%</td></tr>
    <tr><td>GCS Standard → Coldline</td><td>0.016</td><td>0.02</td><td>80%</td></tr>
    <tr><td>GCS Standard → Archive</td><td>0.0188</td><td>0.05</td><td>38%</td></tr>
  </tbody>
</table>
<p>The table ignores minimum-duration charges and the higher request prices on cold tiers, both of which push the true break-even lower. As a rule: anything read more than once a month stays hot; anything read a few times a year goes to the quarterly tier; anything read less than once a year goes to archive, provided it will live longer than the archive tier's minimum.</p>`,
    },
    {
      heading: "The alternatives the calculator doesn't cover",
      html: `
<p>Three object stores outside the big three are worth knowing about because they change the answer for specific workloads:</p>
<table>
  <thead><tr><th>Provider</th><th>Storage $/GB-month</th><th>Egress</th><th>Where it wins</th><th>Where it doesn't</th></tr></thead>
  <tbody>
    <tr><td>Cloudflare R2</td><td>0.015</td><td>Free</td><td>Anything that serves data to the internet; S3-compatible API</td><td>No cold tiers; fewer regions; operations priced per million</td></tr>
    <tr><td>Backblaze B2</td><td>0.006</td><td>Free up to 3× stored volume, then $0.01/GB</td><td>Backups and archives with occasional restores; cheapest hot storage</td><td>Single-region by default; fewer integrations</td></tr>
    <tr><td>Wasabi</td><td>0.0069 (1 TB minimum)</td><td>Free (fair-use: egress under stored volume)</td><td>Backup targets, media archives</td><td>90-day minimum on all data; 1 TB billing floor</td></tr>
  </tbody>
</table>
<p>A rough rule: if your monthly egress exceeds about 20% of your stored volume, price R2 or B2 alongside the big three before deciding. For a pure backup target with rare restores, B2 and Wasabi are typically a third the price of S3 Standard-IA and a similar price to Glacier Instant Retrieval without the retrieval fee. They lose on the things the hyperscalers are good at: dozens of regions, native integration with the rest of the cloud, and deep archive tiers under $0.001/GB.</p>
<p>The calculator sticks to AWS, Azure, Google and Firebase because those are the four whose pricing is complex enough to need a tool. For the flat-rate providers, storage × price + egress × price is the whole calculation.</p>`,
    },
  ],
};

export default editorial;
