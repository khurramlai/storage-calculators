import type { CalculatorEditorial } from "~/lib/types";

const editorial: CalculatorEditorial = {
  reviewed: "2026-09-12",
  guides: [
    "s3-storage-classes-explained",
    "cloud-storage-hidden-costs-egress-requests-retrieval",
    "raid-is-not-a-backup",
  ],
  sections: [
    {
      heading: "The three Glacier classes are not one product",
      html: `
<p>"Glacier" now names three storage classes with different access models, and choosing between them is the whole decision on this page:</p>
<table>
  <thead><tr><th></th><th>Glacier Instant Retrieval</th><th>Glacier Flexible Retrieval</th><th>Glacier Deep Archive</th></tr></thead>
  <tbody>
    <tr><td>Storage $/GB-month</td><td>0.004</td><td>0.0036</td><td>0.00099</td></tr>
    <tr><td>Access</td><td>Milliseconds, like Standard; no restore step</td><td>Must issue a restore request first; expedited 1–5 min, standard 3–5 h, bulk 5–12 h</td><td>Restore request; standard 12 h, bulk 48 h</td></tr>
    <tr><td>Retrieval $/GB</td><td>0.03</td><td>Expedited 0.03, standard 0.01, bulk free</td><td>Standard 0.02, bulk 0.0025</td></tr>
    <tr><td>Retrieval requests</td><td>GET $0.01 per 1,000</td><td>Expedited $10 / standard $0.05 / bulk $0.025 per 1,000</td><td>Standard $0.10 / bulk $0.025 per 1,000</td></tr>
    <tr><td>Minimum duration</td><td>90 days</td><td>90 days</td><td>180 days</td></tr>
    <tr><td>Per-object overhead</td><td>128 KB minimum billable size</td><td>32 KB (Standard rate) + 8 KB (Glacier rate) per object</td><td>Same as Flexible</td></tr>
    <tr><td>Typical use</td><td>Medical images, media archives, anything that must be served on demand but is rarely asked for</td><td>Backups, disaster recovery, data that can wait hours</td><td>Compliance archives, tape replacement, 7-year retention</td></tr>
  </tbody>
</table>
<p>Instant Retrieval is functionally a cheaper Standard-IA with a longer minimum duration and a higher retrieval fee. Flexible and Deep Archive are genuinely offline: an object in those classes can't be read until a restore completes and a temporary copy exists in Standard, which you also pay for while it lasts.</p>`,
    },
    {
      heading: "How a restore actually works, and what it costs",
      html: `
<p>For Flexible Retrieval and Deep Archive, reading data is a three-step process, each with its own cost:</p>
<ol>
  <li><strong>Issue a restore request</strong> per object (or via S3 Batch Operations for many objects, $0.25 per job plus $1 per million objects), choosing a retrieval tier. Billed per 1,000 requests at the tier's rate.</li>
  <li><strong>Wait.</strong> Bulk retrievals from Deep Archive take up to 48 hours. AWS makes a temporary copy in Standard for the number of days you specified in the request, and bills Standard storage ($0.023/GB) for that copy's lifetime.</li>
  <li><strong>Read the copy.</strong> Normal GET requests, and egress at $0.09/GB if it leaves AWS.</li>
</ol>
<p>Worked figure: restoring a 5 TB backup set from Deep Archive using bulk retrieval, kept available for 7 days, then downloaded on-premises.</p>
<ul>
  <li>Retrieval: 5,000 GB × $0.0025 = <strong>$12.50</strong></li>
  <li>Restore requests: say 5,000 objects of 1 GB, $0.025 per 1,000 = <strong>$0.13</strong></li>
  <li>Temporary Standard copy: 5,000 GB × $0.023 × 7/30 = <strong>$26.83</strong></li>
  <li>Egress: (5,000 − 100) × $0.09 = <strong>$441</strong></li>
  <li><strong>Total ≈ $480</strong>, of which 92% is egress.</li>
</ul>
<p>Using standard retrieval instead of bulk would add $87.50 ($0.02/GB) and save 36 hours. Restoring to an EC2 instance in the same region instead of downloading would remove the $441 egress entirely, which is why DR plans that rebuild in AWS are much cheaper to test than ones that pull data back on-premises.</p>`,
    },
    {
      heading: "Sizing a backup archive correctly",
      html: `
<p>Three mistakes account for most Glacier bills that come in higher than the storage price suggested:</p>
<ul>
  <li><strong>Short-lived objects in a long-minimum class.</strong> A daily backup written to Deep Archive and deleted after 30 days is billed for 180. Effective storage price becomes 6 × $0.00099 = $0.006/GB, more than Glacier Instant Retrieval. Match the class minimum to the retention: 30–90 days of backups belong in Standard-IA or Glacier Instant; only the monthly or yearly fulls belong in Deep Archive.</li>
  <li><strong>Millions of small objects.</strong> The 40 KB per-object overhead on Flexible and Deep Archive means a million 100 KB files (100 GB) bill as 140 GB, with 32 GB of that at Standard rates: about $1.13 instead of $0.36 per month. Restore requests are also per object. Tar or zip backup sets into objects of at least 100 MB before upload.</li>
  <li><strong>Forgetting versioning.</strong> If the bucket has versioning on, every overwritten backup keeps its old versions, each subject to the minimum duration. Add a lifecycle rule to expire noncurrent versions.</li>
</ul>
<p>The calculator prices steady-state storage and does not add the early-deletion top-up, so check your retention against each class's minimum yourself: if objects live for less than the minimum, multiply the storage line by (minimum days ÷ actual days). The retrieval field lets you price a full restore against the monthly storage so you can see whether Deep Archive's savings survive one recovery a year. For most backup sets kept 90+ days, they do; for anything restored monthly, Glacier Instant Retrieval wins.</p>`,
    },
  ],
};

export default editorial;
