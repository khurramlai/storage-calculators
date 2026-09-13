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
      heading: "Redundancy options multiply the price",
      html: `
<p>Azure's per-GB price depends on the access tier <em>and</em> on the redundancy option, and the redundancy multiplier is bigger than the gap between most tiers. The calculator uses locally redundant storage (LRS), which is the cheapest and the default when you create a storage account without changing anything. The full set:</p>
<table>
  <thead><tr><th>Option</th><th>Copies</th><th>Where</th><th>Hot price $/GB-month (East US)</th><th>Relative to LRS</th></tr></thead>
  <tbody>
    <tr><td>LRS</td><td>3</td><td>One datacenter</td><td>0.0184</td><td>1.0×</td></tr>
    <tr><td>ZRS</td><td>3</td><td>Three availability zones in one region</td><td>0.023</td><td>1.25×</td></tr>
    <tr><td>GRS</td><td>6</td><td>LRS in two regions (paired)</td><td>0.0368</td><td>2.0×</td></tr>
    <tr><td>GZRS</td><td>6</td><td>ZRS plus LRS in the paired region</td><td>0.046</td><td>2.5×</td></tr>
    <tr><td>RA-GRS / RA-GZRS</td><td>6</td><td>As above with read access to the secondary</td><td>0.046 / 0.0575</td><td>2.5× / 3.1×</td></tr>
  </tbody>
</table>
<p>Compare like for like: S3 Standard and GCS Standard are zone-redundant by default, so Azure ZRS at $0.023 is the equivalent of S3's $0.023, not LRS at $0.0184. LRS is a perfectly good choice for data that also exists elsewhere (backups of on-premises systems, regenerable caches) and a poor one for a sole copy. The Cool, Cold and Archive tiers have the same multipliers; Archive is LRS or GRS only.</p>
<p>Region matters too. East US, East US 2, West US 2 and Central US are the baseline. West Europe and North Europe run about 10% higher; UK South, Australia East and Japan East about 20–25% higher; Brazil South up to 60% higher. The calculator's figures are East US.</p>`,
    },
    {
      heading: "The four access tiers and their traps",
      html: `
<p>Azure Blob has four tiers. Hot, Cool and Cold are <em>online</em>: reads return immediately. Archive is <em>offline</em>: a blob must be rehydrated to Hot or Cool before it can be read, which takes up to 15 hours at standard priority or under an hour at high priority (at ten times the retrieval price).</p>
<table>
  <thead><tr><th>Tier</th><th>Storage (LRS)</th><th>Write / 10k ops</th><th>Read / 10k ops</th><th>Retrieval $/GB</th><th>Minimum days</th><th>Early-deletion charge</th></tr></thead>
  <tbody>
    <tr><td>Hot</td><td>$0.0184</td><td>$0.065</td><td>$0.005</td><td>0</td><td>none</td><td>none</td></tr>
    <tr><td>Cool</td><td>$0.010</td><td>$0.13</td><td>$0.013</td><td>$0.01</td><td>30</td><td>Remaining days at Cool rate</td></tr>
    <tr><td>Cold</td><td>$0.0036</td><td>$0.234</td><td>$0.065</td><td>$0.03</td><td>90</td><td>Remaining days at Cold rate</td></tr>
    <tr><td>Archive</td><td>$0.00099</td><td>$0.13</td><td>$5.50 (rehydration)</td><td>$0.02 (high priority $0.10)</td><td>180</td><td>Remaining days at Archive rate</td></tr>
  </tbody>
</table>
<p>Two Azure-specific points. First, Azure prices operations per 10,000 where AWS and Google price per 1,000; the calculator normalises this, but when you compare pricing pages directly, divide Azure's figures by ten. Second, <strong>changing a blob's tier counts as a write to the new tier and a read from the old one</strong>, so moving a million blobs from Hot to Cool costs $13 in write operations and, if they'd been in Cool for under 30 days, an early-deletion charge. Lifecycle management rules do this automatically and are the right way to tier data; do it once, with a rule, rather than by hand.</p>
<p>Cold, added in 2023, sits between Cool and Archive: online access at Archive-adjacent prices, but with a 90-day minimum and a $0.03/GB retrieval fee that's the highest of the online tiers. It's the right tier for backups you need to restore in minutes rather than hours; for anything you'd read more than about once a quarter, Cool is cheaper overall.</p>`,
    },
    {
      heading: "Reserved capacity and the worked example",
      html: `
<p>Azure offers reserved capacity for Blob storage: commit to 100 TB or 1 PB for one or three years and the storage line drops. Typical discounts are around 20–25% for one year and 34–38% for three, on Hot, Cool and Archive (not Cold). Reserved capacity applies only to the storage component, not to operations, retrieval or egress. If you're consistently above 100 TB, it's usually worth it; below that it isn't available.</p>
<p>Worked example: a company keeps 20 TB of file-share data in Hot for active use, 60 TB of older project files in Cool, and 300 TB of compliance archive in Archive. All LRS, East US. Monthly storage:</p>
<ul>
  <li>Hot: 20,000 × $0.0184 = <strong>$368</strong></li>
  <li>Cool: 60,000 × $0.010 = <strong>$600</strong></li>
  <li>Archive: 300,000 × $0.00099 = <strong>$297</strong></li>
  <li><strong>Total: $1,265/month</strong> storage; with three-year reserved capacity on the 380 TB, roughly $800.</li>
</ul>
<p>The trap in this layout is the archive read cost. If legal discovery requires rehydrating 10 TB from Archive: $200 retrieval at standard priority, $5.50 per 10,000 blobs in read operations (small for large files, $550 for a million small ones), and the rehydrated copies then sit in Hot or Cool at those rates until deleted. Price that scenario in the calculator's retrieval field before choosing Archive for anything a lawyer might want in a hurry.</p>`,
    },
  ],
};

export default editorial;
