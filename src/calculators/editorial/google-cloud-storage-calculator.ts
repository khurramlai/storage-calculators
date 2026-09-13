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
      heading: "Location type changes the price more than the class does",
      html: `
<p>Google prices Cloud Storage by class <em>and</em> by bucket location type, and the location multiplier is easy to miss because it's chosen once at bucket creation and never shown again. The calculator uses a single US region (us-east1) at Standard's $0.020. The alternatives:</p>
<table>
  <thead><tr><th>Location type</th><th>Example</th><th>Standard $/GB-month</th><th>Nearline</th><th>Coldline</th><th>Archive</th></tr></thead>
  <tbody>
    <tr><td>Region</td><td>us-east1, us-central1, europe-west1</td><td>0.020</td><td>0.010</td><td>0.004</td><td>0.0012</td></tr>
    <tr><td>Region (premium)</td><td>europe-west2 (London), asia-northeast1 (Tokyo), australia-southeast1</td><td>0.023</td><td>0.013–0.016</td><td>0.006–0.007</td><td>0.0025</td></tr>
    <tr><td>Dual-region</td><td>nam4 (Iowa + South Carolina), eur4</td><td>0.036</td><td>0.020</td><td>0.007</td><td>0.0024</td></tr>
    <tr><td>Multi-region</td><td>US, EU, ASIA</td><td>0.026</td><td>0.015</td><td>0.007</td><td>0.0024</td></tr>
  </tbody>
</table>
<p>The default in the console is the US multi-region, which is 30% dearer than a single US region. For a bucket that serves one application in one region, a regional bucket is the right choice and the saving is real. Multi-region buys geo-redundancy and lower-latency reads from anywhere in the continent; dual-region buys the same with more control over where the two copies are. Note also that data moving <em>between</em> a multi-region bucket and a regional Compute Engine VM incurs a replication/egress charge that regional-to-regional in the same region doesn't; check the "data transfer within Google Cloud" table if your compute isn't in the bucket's region.</p>`,
    },
    {
      heading: "Nearline, Coldline and Archive: all online, all with strings",
      html: `
<p>Unlike AWS Glacier and Azure Archive, every GCS class returns data in milliseconds; there's no restore step even from Archive. What differs is the price of reading and how long you're committed:</p>
<table>
  <thead><tr><th>Class</th><th>Storage (region)</th><th>Retrieval $/GB</th><th>Class A ops / 1,000 (writes, lists)</th><th>Class B ops / 1,000 (reads)</th><th>Minimum duration</th></tr></thead>
  <tbody>
    <tr><td>Standard</td><td>$0.020</td><td>0</td><td>$0.005</td><td>$0.0004</td><td>none</td></tr>
    <tr><td>Nearline</td><td>$0.010</td><td>$0.01</td><td>$0.01</td><td>$0.001</td><td>30 days</td></tr>
    <tr><td>Coldline</td><td>$0.004</td><td>$0.02</td><td>$0.02</td><td>$0.005</td><td>90 days</td></tr>
    <tr><td>Archive</td><td>$0.0012</td><td>$0.05</td><td>$0.05</td><td>$0.05</td><td>365 days</td></tr>
  </tbody>
</table>
<p>Two consequences. The Archive class is the only offline-priced tier on any provider that is actually online, which makes it attractive for compliance archives that occasionally need a single file in a hurry. But its 365-day minimum is the longest anywhere, and its $0.05/GB retrieval is the most expensive: a full restore of a 10 TB archive costs $500 before egress. Coldline at $0.004 with a 90-day minimum and $0.02 retrieval is the safer default for backups; Archive earns its price only for data you're confident will sit untouched for over a year.</p>
<p>Google also offers <strong>Autoclass</strong>, which moves objects between classes automatically based on access (to Nearline after 30 days unread, Coldline after 90, Archive after 365) and back to Standard on any read, with no retrieval fees or early-deletion charges. The cost is a management fee of $0.0025 per 1,000 objects per month. It behaves like S3 Intelligent-Tiering and suits data with unpredictable access; for data you know is cold, an explicit lifecycle rule is cheaper.</p>`,
    },
    {
      heading: "Egress: where Google is dearest",
      html: `
<p>Google's internet egress is the highest of the three major providers: $0.12/GB for the first 1 TB (after 200 GB free with Standard tier networking), dropping to $0.11 between 1 and 10 TB and $0.08 above. AWS and Azure start around $0.09 and reach $0.05 at volume. For a bucket that serves data to users, that's a 30–40% higher bill for the same traffic.</p>
<p>Worked example: a media application stores 3 TB in a regional Standard bucket and serves 4 TB a month to the internet with 30 million reads.</p>
<ul>
  <li>Storage: 3,000 × $0.020 = <strong>$60</strong></li>
  <li>Reads: 30,000 × $0.0004 = <strong>$12</strong></li>
  <li>Egress: 200 GB free, then 800 GB × $0.12 + 3,000 GB × $0.11 = <strong>$426</strong></li>
  <li><strong>Total ≈ $498/month</strong>, of which 86% is egress.</li>
</ul>
<p>Cloud CDN in front of the bucket changes the egress line to Cloud CDN's cache-egress rates ($0.02–0.08/GB depending on volume and geography) for cache hits, which for a media workload with a decent hit rate roughly halves the bill. The calculator's egress field uses the first-tier $0.12 rate; for volumes above 1 TB it overestimates slightly, as the worked figure shows.</p>`,
    },
  ],
};

export default editorial;
