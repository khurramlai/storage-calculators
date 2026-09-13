/**
 * Site-level constants. Kept separate from seo.ts so the i18n routing helpers
 * can use them without importing seo.ts (which itself needs routing).
 */
export const SITE_NAME = "Storage Calculators";
export const SITE_URL = "https://storagecalculators.com";
export const SITE_TAGLINE =
  "Free calculators for RAID, NAS, CCTV, cloud storage, and self-storage needs.";

/**
 * Public contact address. Shown on the contact page, in the footer, and as
 * the fallback wherever the feedback form is not configured. Must be a
 * mailbox that is actually read: AdSense reviewers and readers alike use it.
 */
export const CONTACT_EMAIL = "contact@storagecalculators.com";

/**
 * The person who writes and maintains the site. Used for the byline on
 * calculator pages and guides and for the `author` field in JSON-LD.
 */
export const AUTHOR = {
  name: "Khurram Shahzad",
  /** Shown after the name on bylines; keep it short. */
  role: "Founder & editor, StorageCalc",
  /** Outside affiliation, shown on the About and Contact pages. */
  affiliation: "Founder · Curator, Schools Publishing Ltd",
  location: "Vancouver, British Columbia, Canada · Remote",
  linkedin: "https://www.linkedin.com/in/khurram-shahzad-574b75200/",
  url: `${SITE_URL}/about/#author`,
  bio:
    "Builds and maintains every calculator on this site, checks each formula against the vendor's published documentation, and answers every correction email personally.",
};
