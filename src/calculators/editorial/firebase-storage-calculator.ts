import type { CalculatorEditorial } from "~/lib/types";

const editorial: CalculatorEditorial = {
  reviewed: "2026-09-12",
  guides: [
    "cloud-storage-hidden-costs-egress-requests-retrieval",
    "s3-vs-azure-blob-vs-google-cloud-storage",
  ],
  sections: [
    {
      heading: "Spark, Blaze, and what the free quota actually covers",
      html: `
<p>Cloud Storage for Firebase is a Google Cloud Storage bucket with Firebase Authentication rules and client SDKs layered on top. Its billing is GCS billing, but the way the free quota works has changed and still confuses people:</p>
<ul>
  <li><strong>Spark (free) plan:</strong> since late 2024, new Firebase projects on Spark cannot create a default Storage bucket at all. Existing Spark projects with a bucket keep it, but that path is closed for new apps.</li>
  <li><strong>Blaze (pay-as-you-go) plan:</strong> required for Storage on new projects. It carries a monthly no-cost allowance, then bills at list price above it.</li>
</ul>
<table>
  <thead><tr><th>Resource</th><th>No-cost allowance (Blaze)</th><th>Price above it</th></tr></thead>
  <tbody>
    <tr><td>Stored data</td><td>5 GB</td><td>$0.026 per GB-month</td></tr>
    <tr><td>Downloaded data</td><td>1 GB per day (≈30 GB/month)</td><td>$0.12 per GB</td></tr>
    <tr><td>Upload operations</td><td>20,000 per day</td><td>$0.05 per 10,000</td></tr>
    <tr><td>Download operations</td><td>50,000 per day</td><td>$0.004 per 10,000</td></tr>
  </tbody>
</table>
<p>The $0.026 storage price is GCS Standard in a <em>multi-region</em> location (the default bucket is created in US multi-region unless you pick otherwise), which is why it's higher than the $0.020 regional price on the <a href="/google-cloud-storage-calculator/">Google Cloud Storage calculator</a>. If your users are in one region, creating the bucket as regional saves 23% on storage and is a one-time decision at setup. Note also that the daily allowances reset daily, not monthly: a day with 5 GB of downloads bills 4 GB even if the rest of the month is quiet.</p>`,
    },
    {
      heading: "Sizing a consumer app: photos are the whole bill",
      html: `
<p>Firebase Storage almost always means user-generated media, and media size is set by what the client uploads. Typical sizes by asset, which is where sizing starts:</p>
<table>
  <thead><tr><th>Asset</th><th>Typical size</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>Profile photo, resized client-side to 512 px</td><td>50–100 KB</td><td>Negligible at any user count</td></tr>
    <tr><td>Phone photo, uploaded as-is (12 MP JPEG)</td><td>3–5 MB</td><td>HEIC converted to JPEG grows; PNG screenshots 1–3 MB</td></tr>
    <tr><td>Phone photo, compressed to 1080p on device</td><td>200–400 KB</td><td>10× cheaper than raw; most apps should do this</td></tr>
    <tr><td>Short video, 15 s at 1080p from a phone</td><td>20–40 MB</td><td>Dominates storage if allowed</td></tr>
    <tr><td>Voice message, 30 s AAC</td><td>200–400 KB</td><td></td></tr>
    <tr><td>Document / PDF</td><td>100 KB–5 MB</td><td></td></tr>
  </tbody>
</table>
<p>Worked example: a social app with 10,000 monthly active users, each uploading 20 photos a month at 300 KB (compressed on device) and viewing 200 photos a month. Users keep photos indefinitely; the app has been live 12 months.</p>
<ul>
  <li>Stored: 10,000 × 20 × 0.3 MB × 12 months = 720 GB → (720 − 5) × $0.026 = <strong>$18.60/month</strong></li>
  <li>Downloads: 10,000 × 200 × 0.3 MB = 600 GB/month → (600 − 30) × $0.12 = <strong>$68.40/month</strong></li>
  <li>Upload ops: 200,000/month, within the 20,000/day allowance → <strong>$0</strong></li>
  <li>Download ops: 2,000,000/month ≈ 67,000/day → 17,000/day over allowance ≈ 510,000/month × $0.004 per 10k = <strong>$0.20</strong></li>
  <li><strong>Total ≈ $87/month</strong>, 79% of it download bandwidth.</li>
</ul>
<p>Same app uploading uncompressed 4 MB photos: storage $250, downloads $956, total about $1,200/month. Client-side resizing is the single largest cost decision in a Firebase media app, and it's a few lines of code.</p>`,
    },
    {
      heading: "Cutting the download line",
      html: `
<p>Because downloads are billed at GCS's internet egress rate ($0.12/GB, the highest of the major providers), the levers that matter are all about serving fewer bytes:</p>
<ol>
  <li><strong>Generate thumbnails on upload.</strong> The Resize Images extension (or a Cloud Function) writes 200 px and 800 px variants alongside the original. Feed and grid views load the thumbnail; only a tap loads the full image. This typically cuts download volume by 60–80%.</li>
  <li><strong>Set Cache-Control on uploaded objects.</strong> <code>public, max-age=31536000</code> for immutable content lets the client (and any CDN) cache it. Firebase's SDK downloads honour it; repeat views cost nothing.</li>
  <li><strong>Put a CDN in front for public content.</strong> Firebase Hosting with a rewrite to the bucket, or Cloud CDN with a backend bucket, serves cache hits at CDN rates (from $0.02/GB) instead of $0.12. This requires the files to be publicly readable, so it's for public feeds, not private messages.</li>
  <li><strong>Serve video via a transcoding service, not the raw upload.</strong> A raw 30 MB phone clip served to 100 viewers is 3 GB; the same clip transcoded to 720p adaptive is under a third of that.</li>
</ol>
<p>Use the calculator's egress field for the download line: it's the one that grows with engagement rather than with user count, and it's the one that catches teams by surprise at the first traction spike.</p>`,
    },
  ],
};

export default editorial;
