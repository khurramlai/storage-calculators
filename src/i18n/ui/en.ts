/**
 * English UI strings. This file is the reference: every other locale in
 * src/i18n/ui/ is typed as `UIStrings`, so a missing or misspelled key is a
 * compile error rather than an English string leaking into a translated page.
 *
 * Placeholders use {name} and are substituted by `t()` in src/i18n/index.ts.
 */
const en = {
  site: {
    name: "Storage Calculators",
    tagline:
      "Free calculators for RAID, NAS, CCTV, cloud storage, and self-storage needs.",
  },

  nav: {
    calculators: "Calculators",
    about: "About",
    tryRaid: "Try RAID calculator",
    openMenu: "Open menu",
    language: "Language",
    chooseLanguage: "Choose a language",
  },

  category: {
    raid: "RAID",
    surveillance: "Surveillance & CCTV",
    nas: "NAS",
    cloud: "Cloud Storage",
    "self-storage": "Self Storage",
    specialty: "Specialty",
  },

  common: {
    home: "Home",
    breadcrumb: "Breadcrumb",
    openCalculator: "Open calculator",
    calculatorCount: "{count} calculator",
    calculatorCountPlural: "{count} calculators",
    relatedHeading: "Related Calculators",
    faqHeading: "Frequently Asked Questions",
  },

  calcPage: {
    aboutHeading: "About this calculator",
    formulaHeading: "The formula",
    useCasesHeading: "Common use cases",
    freeNoSignup: "Free, no signup",
    privacyNote:
      "This calculator runs in your browser. Inputs never leave your device. Results are estimates, see our",
    disclaimerLink: "disclaimer",
    alsoKnownAs: "Also known as",
  },

  home: {
    heroEyebrow: "{count} free storage calculators",
    heroTitleLead: "Storage math,",
    heroTitleAccent: "instantly solved",
    heroSubtitle:
      "Accurate calculators for RAID, NAS, surveillance, and cloud storage, powered by published vendor specs. No signup, no fluff, no overpromises.",
    heroCtaPrimary: "Start with RAID",
    heroCtaSecondary: "Browse all calculators",
    statCalculators: "Calculators",
    statCategories: "Categories",
    statFreeValue: "$0",
    statFree: "Ever",
    statNoSignupValue: "No signup",
    statNoSignup: "Required",
    previewCaption: "usable capacity · survives 2 drive failures",
    previewReadSpeed: "Read speed",
    previewWriteSpeed: "Write speed",
    previewEfficiency: "Efficiency",
    previewUsable: "Usable 75%",
    previewParity: "Parity 25%",
    trustStrip: "Math sourced from public docs of",
    categoriesEyebrow: "Pick a category",
    categoriesTitle: "Six clusters, twenty calculators",
    categoriesSubtitle:
      "Every calculator targets a specific search and audience. Pick the category that matches what you're sizing.",
    featuredEyebrow: "Most useful",
    featuredTitle: "Featured calculators",
    featuredSeeAll: "See all",
    whyEyebrow: "Why these calculators",
    whyTitle: "Built right, kept free",
    whySubtitle:
      "Vendor calculators hide the formula and try to upsell you. These don't.",
    feature1Title: "Industry-standard formulas",
    feature1Body:
      "Math sourced from public vendor docs: Hikvision, Hanwha, Axis, AWS, Azure, GCP. Verified against published planning numbers.",
    feature2Title: "Vendor-aware presets",
    feature2Body:
      "Hikvision page defaults to H.265+. UniFi defaults to G4 Pro at 4 MP. Azure defaults to Hot. Real defaults, not toy examples.",
    feature3Title: "Instant, no signup",
    feature3Body:
      "Calculations run in your browser as you type. No accounts, no email gates, no marketing follow-ups.",
    feature4Title: "Privacy-first",
    feature4Body:
      "Static site, no backend, no analytics until you accept. Your inputs never leave your device.",
    feature5Title: "Visual comparisons",
    feature5Body:
      "Capacity breakdowns, codec savings charts, tier-by-tier cost bars. See the trade-off, don't read it.",
    feature6Title: "Mobile-friendly",
    feature6Body:
      "Every calculator works on phones. Useful when you're already in the server room or at the storage unit.",
    allEyebrow: "The full library",
    allTitle: "All calculators",
    allSubtitle: "Organized by category. Pick the one closest to your use case.",
    allEmpty: "No calculators yet",
    ctaTitle: "Find the right calculator for your storage need.",
    ctaBody:
      "From 4-drive home NAS to 64-camera surveillance racks to multi-petabyte cloud archives, there's a calculator above for it.",
    ctaPrimary: "Open RAID calculator",
    ctaSecondary: "Browse the library",
  },

  footer: {
    blurb:
      "Free calculators for RAID, surveillance, NAS, and cloud storage. Accurate math, no signup, no tracking until you accept.",
    madeFor:
      "Made for IT admins, sysadmins, installers, and anyone who's tired of vendor calculators that hide the formula.",
    categories: "Categories",
    popular: "Popular",
    legal: "Legal",
    about: "About",
    disclaimer: "Disclaimer",
    privacy: "Privacy Policy",
    cookies: "Cookie Policy",
    terms: "Terms of Service",
    sitemap: "Sitemap",
    copyright:
      "© {year} StorageCalc. All calculators free to use. Results are estimates. See",
    builtWith: "Built with Astro + Tailwind. Static, fast, privacy-first.",
  },

  cookies: {
    title: "Cookies & analytics",
    body: "We use Google Analytics to understand which calculators are useful, and may show Google ads to keep this free. Nothing personal is collected. See",
    policyLink: "Cookie Policy",
    accept: "Accept",
    reject: "Reject",
    dismiss: "Dismiss",
  },

  feedback: {
    heading: "Spot an error? Have feedback?",
    subheading:
      "Tell us what's wrong with the math, what's missing, or what would make this calculator better. We read everything.",
    openForm: "Open form",
    close: "Close",
    notConfiguredStrong: "Form not configured yet.",
    notConfiguredBody:
      "The site owner needs to add a Web3Forms access key to {env} as {key}.",
    typeLabel: "Type of feedback",
    typePlaceholder: "Pick one",
    typeMath: "Error in math or formula",
    typeMissing: "Missing feature or input",
    typeVendor: "Outdated vendor spec or pricing",
    typeSuggestion: "Suggestion or improvement",
    typeBug: "UI bug or broken behavior",
    typeOther: "Other",
    emailLabel: "Your email",
    emailOptional: "(optional)",
    emailPlaceholder: "you@example.com",
    messageLabel: "Your message",
    messagePlaceholder: "What did you find? Be specific so we can fix it fast.",
    messageHint: "We don't store this anywhere. It just lands in our inbox.",
    submit: "Send feedback",
    submitting: "Sending…",
    successStrong: "Thanks!",
    successBody: "Your feedback landed in our inbox. We read every message.",
    errorBody: "Something went wrong. Please try again in a moment.",
  },

  widget: {
    inputs: "Inputs",
    results: "Results",
    calculate: "Calculate",
    reset: "Reset",
    liveHint: "Results update live as you type.",
    resultsRegion: "Calculation results",
    minimum: "Minimum: {n}",

    raidLevel: "RAID level",
    driveCount: "Number of drives",
    driveSize: "Drive size",
    driveSizeUnit: "Drive size unit",
    hotSpares: "Hot spares",
    hotSparesHelp: "Idle drives reserved for automatic rebuild.",
    stripeGroups: "Stripe groups",
    stripeGroupsHelp: "RAID {level} stripes across multiple groups.",
    usableCapacity: "Usable capacity",
    usableOfRaw: "{percent} of raw capacity",
    rawCapacity: "Raw capacity",
    faultTolerance: "Fault tolerance",
    faultToleranceRange: "{min}-{max} drives",
    driveFailures: "{n} drive",
    driveFailuresPlural: "{n} drives",
    faultToleranceHint:
      "Min (worst case) - max (best case) drive failures survivable.",
    readSpeed: "Read speed",
    writeSpeed: "Write speed",
    vsOneDrive: "vs. one drive",
    hotSpareReserve: "Hot spare reserve",
    arrayLayout: "Array layout",
    arrayLayoutValue: "{groups} × {perGroup} drives",
    capacityBreakdown: "Capacity breakdown",
    capacityRaw: "{tb} TB raw",
    capacityEmpty: "Enter valid inputs to see the capacity breakdown.",
    segUsable: "Usable",
    segParity: "Parity",
    segMirror: "Mirror",
    segHotSpare: "Hot spare",
    capacityBreakdownAria: "Capacity breakdown: {segments}",

    cameraCount: "Number of cameras",
    retention: "Retention",
    retentionHelp: "How many days of footage to keep.",
    days: "days",
    resolution: "Resolution",
    frameRate: "Frame rate",
    frameRateHelp: "Higher fps = smoother motion + more storage.",
    fps: "{n} fps",
    codec: "Codec",
    codecHelp: "Modern codecs reduce bitrate by 50-75%.",
    recordingMode: "Recording mode",
    hoursPerDay: "Hours per day",
    hoursHelpMotion:
      "Active window, motion-only further reduces actual recording time.",
    hoursHelpScheduled: "Hours per day the schedule is active.",
    hoursHelpContinuous: "24 for 24/7 recording.",
    vendorPresetApplied: "Vendor preset applied:",
    totalStorage: "Total storage required",
    totalStorageHint: "{cameras} × {days} days",
    cameraSingular: "{n} camera",
    cameraPlural: "{n} cameras",
    perCameraTotal: "Per camera, total",
    allCamerasPerDay: "All cameras, per day",
    bitratePerCamera: "Bitrate per camera",
    bitrateHint: "{resolution} @ {fps} fps, {codec}",
    recommendedDrive: "Recommended drive",
    recommendedDriveHint:
      "Surveillance-grade HDD (e.g. WD Purple, Seagate SkyHawk).",
    savedVsH264: "Saved vs H.264",
    savedVsH264Hint: "By choosing a more efficient codec.",
    codecComparison: "Codec comparison",
    codecComparisonHint: "Same cameras, same retention, different codec.",

    cloudProvider: "Cloud provider",
    storageTier: "Storage tier",
    storageAmount: "Storage amount",
    storageUnit: "Storage size unit",
    monthlyEgress: "Monthly egress",
    monthlyEgressHelp: "Data downloaded out of the cloud each month.",
    writeRequests: "Write requests",
    writeRequestsHelp: "PUT, COPY, POST, LIST, per 1,000 requests.",
    readRequests: "Read requests",
    readRequestsHelp: "GET, SELECT, per 1,000 requests.",
    dataRetrieved: "Data retrieved this month",
    dataRetrievedHelp: "Archive tiers charge per GB restored.",
    estimatedCost: "Estimated cost",
    estimatedCostRegion: "Estimated monthly and annual cost",
    monthlyCost: "Monthly cost",
    annualCost: "Annual cost",
    storageLine: "Storage",
    egressLine: "Egress",
    writeOps: "Write ops",
    readOps: "Read ops",
    retrievalLine: "Retrieval",
    tierComparison: "Tier comparison",
    tierComparisonHint: "Monthly cost of the same data in every tier.",
    cheapest: "Cheapest",
    selected: "Selected",
    freeTierNote: "Free tier applied",

    gb: "GB",
    timesThousand: "× 1,000",
    tierOption: "{label} (${price}/GB/mo)",
    egressHelp: "First {gb} GB/mo to internet is free.",
    egressHint: "After {gb} GB free tier.",
    retrievalHelp:
      "{tier} charges ${price}/GB to retrieve data from cold storage.",
    retrievalHint: "${price}/GB out of {tier}",
    monthlyCostHint: "{gb} GB on {tier}",
    priceNoteStrong: "Note:",
    priceNoteBody:
      "Prices are list rates for the most common US region as of early 2025. Actual cost varies by region, committed-use discounts, and provider updates. Use for estimation, not invoicing.",

    codecChartAria: "Storage comparison across video codecs",
    codecChartBody:
      "Modern smart codecs (H.265+ / WiseStream II / Zipstream) cut storage by ~75% on typical scenes without visible quality loss.",
    codecBaseline: "Baseline",
    codecSaving: "~{percent}% vs H.264",
    tierChartAria: "Monthly cost comparison across storage tiers",
    tierChartBody:
      "Moving infrequently-accessed data to colder tiers can cut storage costs by 75-95%, at the cost of retrieval latency and per-GB read fees.",
    perMonth: "/mo",
    perGb: "/GB",
  },

  tierNotes: {
    "aws:standard":
      "Default. Frequently accessed, millisecond latency, 11 9s durability.",
    "aws:standard-ia":
      "Infrequent access. Min 30-day storage; per-GB retrieval fee.",
    "aws:one-zone-ia":
      "Single-AZ infrequent access. ~20% cheaper than Standard-IA.",
    "aws:glacier-ir":
      "Millisecond retrieval, 90-day minimum, $0.03/GB retrieval fee.",
    "aws:glacier-flex": "Minutes-to-hours retrieval, 90-day minimum.",
    "aws:glacier-deep": "Cheapest tier. 12+ hour retrieval, 180-day minimum.",
    "azure:hot": "Frequently accessed. Default tier for most workloads.",
    "azure:cool":
      "Infrequent access (≥30 days). Higher op costs, retrieval fee applies.",
    "azure:cold": "Rare access (≥90 days). Cheaper than Cool, slower SLA.",
    "azure:archive":
      "Cheapest. Hours-to-day rehydration. Read costs are eye-watering.",
    "gcp:standard": "Frequently accessed. Default tier.",
    "gcp:nearline": "Monthly access. 30-day minimum, $0.01/GB retrieval.",
    "gcp:coldline": "Quarterly access. 90-day minimum, $0.02/GB retrieval.",
    "gcp:archive": "Yearly access. 365-day minimum, $0.05/GB retrieval.",
    "firebase:standard":
      "Firebase wraps GCS Standard. Spark plan includes 5 GB free; Blaze is pay-as-you-go.",
  },

  raidLevels: {
    "0": "RAID 0 (Striping)",
    "1": "RAID 1 (Mirror)",
    "5": "RAID 5 (Striping + Parity)",
    "6": "RAID 6 (Striping + Dual Parity)",
    "10": "RAID 10 (Mirror + Stripe)",
    "50": "RAID 50 (Striped RAID 5 Groups)",
    "60": "RAID 60 (Striped RAID 6 Groups)",
  },

  raidWarning: {
    minDrives: "RAID {level} requires at least {min} drives.",
    afterSpares:
      "After {spares} hot spare(s), only {active} active drive(s) remain, RAID {level} needs at least {min}.",
    driveSize: "Enter a drive size greater than 0.",
    evenDrives:
      "RAID 10 requires an even number of active drives, {lost} drive(s) unused.",
    groupsUneven:
      "RAID {level} needs {groups} equal groups of at least {min} drives. {active} active drives / {groups} groups doesn't divide evenly into RAID {level} sets.",
  },

  resolutions: {
    "480p": "480p (D1 / 0.4 MP)",
    "720p": "720p (1 MP)",
    "1080p": "1080p (2 MP)",
    "3MP": "3 MP",
    "4MP": "4 MP",
    "5MP": "5 MP",
    "4K": "4K (8 MP)",
  },

  codecs: {
    h264: "H.264",
    h265: "H.265 / HEVC",
    "h265+": "H.265+ / Smart Codec (Zipstream, WiseStream II)",
  },

  recordingModes: {
    continuous: "24/7 continuous",
    motion: "Motion-triggered only",
    scheduled: "Scheduled hours",
  },

  vendorNotes: {
    hikvision:
      "Hikvision DS-2CD series cameras typically ship with H.265+ enabled, halving storage again over plain H.265.",
    hanwha:
      "Hanwha (Samsung) Wisenet cameras use WiseStream II, a smart codec that performs similarly to H.265+ on stationary scenes.",
    axis: "Axis cameras with Zipstream achieve roughly 50-80% bitrate reduction depending on scene activity. The 'H.265+' preset approximates this.",
    genetec:
      "Genetec Security Center Archivers commonly aggregate many cameras across long retention windows; defaults reflect that scale.",
    unifi:
      "UniFi Protect G4 and G5 cameras default to H.265 at native resolution. UniFi Protect itself trims footage automatically when the drive fills.",
  },
} as const;

export type UIStrings = {
  [K in keyof typeof en]: { [P in keyof (typeof en)[K]]: string };
};

export default en satisfies UIStrings;
