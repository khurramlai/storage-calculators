import type { CalculatorEditorial } from "~/lib/types";

const editorial: CalculatorEditorial = {
  reviewed: "2026-09-12",
  guides: [
    "s3-storage-classes-explained",
    "cloud-storage-hidden-costs-egress-requests-retrieval",
    "s3-vs-azure-blob-vs-google-cloud-storage",
  ],
  sections: [
    {
      heading: "Volume tiers: the price drops as you store more",
      html: `
<p>S3 Standard's headline price of $0.023 per GB-month applies to the first 50 TB in a given region each month. Above that AWS steps the price down:</p>
<table>
  <thead><tr><th>Monthly volume in S3 Standard</th><th>Price per GB-month (us-east-1)</th></tr></thead>
  <tbody>
    <tr><td>First 50 TB</td><td>$0.023</td></tr>
    <tr><td>Next 450 TB</td><td>$0.022</td></tr>
    <tr><td>Over 500 TB</td><td>$0.021</td></tr>
  </tbody>
</table>
<p>The other storage classes have a single flat rate. The calculator uses the first-tier price, which is exact below 50 TB and slightly pessimistic above it (by about 4% at 500 TB). Egress also steps down: $0.09/GB for the first 10 TB, $0.085 for the next 40 TB, $0.07 for the next 100 TB, $0.05 above 150 TB per month. Again the calculator uses the first tier, so a very large egress estimate will run a few percent high.</p>
<p>Regional variation is larger than tier variation. The same S3 Standard storage is $0.023 in US East and US West (Oregon), $0.024–0.025 in most European regions, $0.025 in Tokyo and Sydney, and $0.0405 in São Paulo. If your bucket isn't in a US region, multiply the storage line by the ratio for your region; the request and retrieval prices scale similarly.</p>`,
    },
    {
      heading: "Lifecycle rules: the setting that decides your real bill",
      html: `
<p>Most S3 cost is not decided when you create the bucket; it's decided by what happens to objects as they age. A lifecycle rule moves objects between classes automatically, and a well-designed one is worth more than any single class choice. A common pattern for application data:</p>
<table>
  <thead><tr><th>Age</th><th>Class</th><th>Why</th></tr></thead>
  <tbody>
    <tr><td>0–30 days</td><td>Standard</td><td>Actively read; no retrieval fees</td></tr>
    <tr><td>30–90 days</td><td>Standard-IA</td><td>Occasionally read; 46% cheaper storage, 30-day minimum already satisfied</td></tr>
    <tr><td>90–365 days</td><td>Glacier Instant Retrieval</td><td>Rarely read, but must be instant if it is; 83% cheaper than Standard</td></tr>
    <tr><td>1–7 years</td><td>Glacier Deep Archive</td><td>Compliance only; 96% cheaper than Standard</td></tr>
    <tr><td>7 years</td><td>Expire</td><td>Data-retention policy</td></tr>
  </tbody>
</table>
<p>Transition requests are billed: $0.01 per 1,000 objects into Standard-IA, $0.02 into Glacier Instant, $0.05 into Deep Archive. For large objects that's noise; for a million 20 KB log files it's $50 per transition step and the objects will then be billed at the 128 KB minimum in IA, so aggregate small files before they enter the lifecycle. Also enable <em>Delete expired object delete markers</em> and <em>Delete incomplete multipart uploads</em> in the same rule: abandoned multipart uploads sit invisibly in Standard and are billed until cleaned up.</p>
<p>Use the calculator to price each stage: enter the volume you expect to hold at that age and the class, and sum the stages. The tier comparison in the results shows what each stage would cost in every class, which makes it easy to see whether a middle stage is worth having.</p>`,
    },
    {
      heading: "Worked example: a SaaS application's user uploads",
      html: `
<p>An application accumulates 400 GB of user files a month. Files are read heavily for their first month, occasionally for the next two, and almost never after. Users can request any file at any time, so nothing can go offline. Retention is indefinite.</p>
<p>After two years the bucket holds 9.6 TB. With the lifecycle rule above (minus the Deep Archive stage, since files must stay instantly retrievable):</p>
<ul>
  <li>Standard (last 30 days): 400 GB × $0.023 = <strong>$9.20</strong></li>
  <li>Standard-IA (days 30–90): 800 GB × $0.0125 = <strong>$10.00</strong>, plus retrieval on the ~5% read per month: 40 GB × $0.01 = $0.40</li>
  <li>Glacier Instant Retrieval (90 days+): 8,400 GB × $0.004 = <strong>$33.60</strong>, plus retrieval on the ~1% read: 84 GB × $0.03 = $2.52</li>
  <li><strong>Total ≈ $56/month</strong>, versus $221/month if everything stayed in Standard.</li>
</ul>
<p>Egress is separate: if users download 1 TB a month, that's $81 on top regardless of class. Enter it in the calculator's egress field; for most applications it's a bigger line than storage.</p>`,
    },
  ],
};

export default editorial;
