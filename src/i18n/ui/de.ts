import type { UIStrings } from "./en";

/**
 * German UI strings. Addresses the reader with "Sie": the audience is IT
 * admins, integrators and installers using this at work, where the formal
 * register is still the professional default.
 *
 * Technical terms that German IT professionals use in English (RAID, NAS,
 * Codec, Hot Spare, Egress) are kept as-is on purpose; translating them would
 * make the pages harder to search for, not easier to read.
 */
const de: UIStrings = {
  site: {
    name: "Speicherplatz-Rechner",
    tagline:
      "Kostenlose Rechner für RAID, NAS, Videoüberwachung und Cloud-Speicher.",
  },

  nav: {
    calculators: "Rechner",
    about: "Über uns",
    tryRaid: "RAID-Rechner ausprobieren",
    openMenu: "Menü öffnen",
    language: "Sprache",
    chooseLanguage: "Sprache wählen",
  },

  category: {
    raid: "RAID",
    surveillance: "Videoüberwachung & CCTV",
    nas: "NAS",
    cloud: "Cloud-Speicher",
    "self-storage": "Selfstorage",
    specialty: "Spezialfälle",
  },

  common: {
    home: "Startseite",
    breadcrumb: "Navigationspfad",
    openCalculator: "Rechner öffnen",
    calculatorCount: "{count} Rechner",
    calculatorCountPlural: "{count} Rechner",
    relatedHeading: "Verwandte Rechner",
    faqHeading: "Häufige Fragen",
  },

  calcPage: {
    aboutHeading: "Über diesen Rechner",
    formulaHeading: "Die Formel",
    useCasesHeading: "Typische Anwendungsfälle",
    freeNoSignup: "Kostenlos, ohne Anmeldung",
    privacyNote:
      "Dieser Rechner läuft in Ihrem Browser. Ihre Eingaben verlassen Ihr Gerät nie. Die Ergebnisse sind Schätzwerte, siehe unseren",
    disclaimerLink: "Haftungsausschluss",
    alsoKnownAs: "Auch bekannt als",
  },

  home: {
    heroEyebrow: "{count} kostenlose Speicherplatz-Rechner",
    heroTitleLead: "Speicherberechnungen,",
    heroTitleAccent: "sofort gelöst",
    heroSubtitle:
      "Präzise Rechner für RAID, NAS, Videoüberwachung und Cloud-Speicher, basierend auf den veröffentlichten Herstellerangaben. Ohne Anmeldung, ohne Füllmaterial, ohne übertriebene Versprechen.",
    heroCtaPrimary: "Mit RAID beginnen",
    heroCtaSecondary: "Alle Rechner ansehen",
    statCalculators: "Rechner",
    statCategories: "Kategorien",
    statFreeValue: "0 €",
    statFree: "Immer",
    statNoSignupValue: "Kein Konto",
    statNoSignup: "Erforderlich",
    previewCaption: "nutzbare Kapazität · übersteht 2 Laufwerksausfälle",
    previewReadSpeed: "Lesegeschwindigkeit",
    previewWriteSpeed: "Schreibgeschwindigkeit",
    previewEfficiency: "Effizienz",
    previewUsable: "Nutzbar 75 %",
    previewParity: "Parität 25 %",
    trustStrip: "Berechnungen aus den öffentlichen Unterlagen von",
    categoriesEyebrow: "Kategorie wählen",
    categoriesTitle: "Sechs Bereiche, zwanzig Rechner",
    categoriesSubtitle:
      "Jeder Rechner ist auf eine konkrete Suchanfrage und Zielgruppe zugeschnitten. Wählen Sie die Kategorie, die zu Ihrer Dimensionierung passt.",
    featuredEyebrow: "Am nützlichsten",
    featuredTitle: "Ausgewählte Rechner",
    featuredSeeAll: "Alle ansehen",
    whyEyebrow: "Warum diese Rechner",
    whyTitle: "Sauber gebaut, dauerhaft kostenlos",
    whySubtitle:
      "Hersteller-Rechner verschweigen die Formel und wollen Ihnen etwas verkaufen. Diese hier nicht.",
    feature1Title: "Branchenübliche Formeln",
    feature1Body:
      "Berechnungen aus den öffentlichen Herstellerunterlagen von Hikvision, Hanwha, Axis, AWS, Azure und GCP. Abgeglichen mit den veröffentlichten Planungswerten.",
    feature2Title: "Herstellerspezifische Voreinstellungen",
    feature2Body:
      "Die Hikvision-Seite nutzt standardmäßig H.265+. UniFi startet mit einer G4 Pro bei 4 MP. Azure beginnt bei Hot. Echte Standardwerte statt Laborbeispiele.",
    feature3Title: "Sofort, ohne Anmeldung",
    feature3Body:
      "Die Berechnung läuft während der Eingabe in Ihrem Browser. Keine Konten, keine E-Mail-Schranken, keine Vertriebsanrufe.",
    feature4Title: "Datenschutz zuerst",
    feature4Body:
      "Statische Website, kein Backend, keine Analyse bis zu Ihrer Zustimmung. Ihre Eingaben verlassen Ihr Gerät nie.",
    feature5Title: "Visuelle Vergleiche",
    feature5Body:
      "Kapazitätsaufteilung, Diagramme zur Codec-Ersparnis, Kostenbalken je Speicherklasse. Den Kompromiss sehen statt nachlesen.",
    feature6Title: "Für Mobilgeräte geeignet",
    feature6Body:
      "Alle Rechner funktionieren auf dem Smartphone. Praktisch, wenn Sie ohnehin schon im Serverraum oder vor Ort sind.",
    allEyebrow: "Die vollständige Sammlung",
    allTitle: "Alle Rechner",
    allSubtitle:
      "Nach Kategorien geordnet. Wählen Sie den Rechner, der Ihrem Anwendungsfall am nächsten kommt.",
    allEmpty: "Noch keine Rechner vorhanden",
    ctaTitle: "Finden Sie den passenden Rechner für Ihren Speicherbedarf.",
    ctaBody:
      "Vom Heim-NAS mit vier Laufwerken über Überwachungsanlagen mit 64 Kameras bis zu Cloud-Archiven im Petabyte-Bereich: Oben finden Sie den passenden Rechner.",
    ctaPrimary: "RAID-Rechner öffnen",
    ctaSecondary: "Sammlung durchsuchen",
  },

  footer: {
    blurb:
      "Kostenlose Rechner für RAID, Videoüberwachung, NAS und Cloud-Speicher. Korrekte Berechnungen, ohne Anmeldung und ohne Tracking bis zu Ihrer Zustimmung.",
    madeFor:
      "Gemacht für Systemadministratoren, Errichter und alle, die genug von Hersteller-Rechnern haben, die die Formel verschweigen.",
    categories: "Kategorien",
    popular: "Beliebt",
    legal: "Rechtliches",
    about: "Über uns",
    disclaimer: "Haftungsausschluss",
    privacy: "Datenschutzerklärung",
    cookies: "Cookie-Richtlinie",
    terms: "Nutzungsbedingungen",
    sitemap: "Sitemap",
    copyright:
      "© {year} StorageCalc. Alle Rechner kostenlos nutzbar. Ergebnisse sind Schätzwerte. Siehe",
    builtWith:
      "Erstellt mit Astro + Tailwind. Statisch, schnell und datenschutzfreundlich.",
  },

  cookies: {
    title: "Cookies & Analyse",
    body: "Wir nutzen Google Analytics, um zu verstehen, welche Rechner nützlich sind, und blenden möglicherweise Google-Anzeigen ein, damit dieses Angebot kostenlos bleibt. Personenbezogene Daten werden nicht erhoben. Siehe",
    policyLink: "Cookie-Richtlinie",
    accept: "Akzeptieren",
    reject: "Ablehnen",
    dismiss: "Schließen",
  },

  feedback: {
    heading: "Fehler entdeckt? Anregungen?",
    subheading:
      "Sagen Sie uns, was an der Berechnung nicht stimmt, was fehlt oder was diesen Rechner besser machen würde. Wir lesen alles.",
    openForm: "Formular öffnen",
    close: "Schließen",
    notConfiguredStrong: "Formular noch nicht eingerichtet.",
    notConfiguredBody:
      "Der Betreiber muss einen Web3Forms-Zugangsschlüssel in {env} als {key} hinterlegen.",
    typeLabel: "Art der Rückmeldung",
    typePlaceholder: "Bitte auswählen",
    typeMath: "Fehler in Berechnung oder Formel",
    typeMissing: "Fehlende Funktion oder Eingabe",
    typeVendor: "Veraltete Herstellerangabe oder Preis",
    typeSuggestion: "Vorschlag oder Verbesserung",
    typeBug: "Oberflächenfehler oder fehlerhaftes Verhalten",
    typeOther: "Sonstiges",
    emailLabel: "Ihre E-Mail-Adresse",
    emailOptional: "(optional)",
    emailPlaceholder: "sie@beispiel.de",
    messageLabel: "Ihre Nachricht",
    messagePlaceholder:
      "Was haben Sie festgestellt? Bitte möglichst konkret, damit wir es schnell beheben können.",
    messageHint:
      "Wir speichern nichts davon. Die Nachricht landet einfach in unserem Postfach.",
    submit: "Rückmeldung senden",
    submitting: "Wird gesendet …",
    successStrong: "Vielen Dank!",
    successBody:
      "Ihre Rückmeldung ist in unserem Postfach angekommen. Wir lesen jede Nachricht.",
    errorBody:
      "Etwas ist schiefgelaufen. Bitte versuchen Sie es gleich noch einmal.",
  },

  widget: {
    inputs: "Eingaben",
    results: "Ergebnisse",
    calculate: "Berechnen",
    reset: "Zurücksetzen",
    liveHint: "Die Ergebnisse aktualisieren sich während der Eingabe.",
    resultsRegion: "Berechnungsergebnisse",
    minimum: "Minimum: {n}",

    raidLevel: "RAID-Level",
    driveCount: "Anzahl der Laufwerke",
    driveSize: "Laufwerksgröße",
    driveSizeUnit: "Einheit der Laufwerksgröße",
    hotSpares: "Hot Spares",
    hotSparesHelp:
      "Untätige Laufwerke, die für den automatischen Rebuild reserviert sind.",
    stripeGroups: "Stripe-Gruppen",
    stripeGroupsHelp: "RAID {level} verteilt die Daten über mehrere Gruppen.",
    usableCapacity: "Nutzbare Kapazität",
    usableOfRaw: "{percent} der Rohkapazität",
    rawCapacity: "Rohkapazität",
    faultTolerance: "Fehlertoleranz",
    faultToleranceRange: "{min} bis {max} Laufwerke",
    driveFailures: "{n} Laufwerk",
    driveFailuresPlural: "{n} Laufwerke",
    faultToleranceHint:
      "Verkraftbare Laufwerksausfälle, vom schlechtesten bis zum besten Fall.",
    readSpeed: "Lesegeschwindigkeit",
    writeSpeed: "Schreibgeschwindigkeit",
    vsOneDrive: "im Vergleich zu einem Laufwerk",
    hotSpareReserve: "Hot-Spare-Reserve",
    arrayLayout: "Array-Aufbau",
    arrayLayoutValue: "{groups} × {perGroup} Laufwerke",
    capacityBreakdown: "Kapazitätsaufteilung",
    capacityRaw: "{tb} TB roh",
    capacityEmpty:
      "Geben Sie gültige Werte ein, um die Kapazitätsaufteilung zu sehen.",
    segUsable: "Nutzbar",
    segParity: "Parität",
    segMirror: "Spiegel",
    segHotSpare: "Hot Spare",
    capacityBreakdownAria: "Kapazitätsaufteilung: {segments}",

    cameraCount: "Anzahl der Kameras",
    retention: "Aufbewahrung",
    retentionHelp: "Wie viele Tage an Aufnahmen aufbewahrt werden sollen.",
    days: "Tage",
    resolution: "Auflösung",
    frameRate: "Bildrate",
    frameRateHelp:
      "Mehr Bilder pro Sekunde = flüssigere Bewegung, aber mehr Speicherbedarf.",
    fps: "{n} fps",
    codec: "Codec",
    codecHelp: "Moderne Codecs senken die Bitrate um 50 bis 75 %.",
    recordingMode: "Aufzeichnungsmodus",
    hoursPerDay: "Stunden pro Tag",
    hoursHelpMotion:
      "Aktives Zeitfenster; die Bewegungserkennung verkürzt die tatsächliche Aufzeichnungszeit zusätzlich.",
    hoursHelpScheduled: "Stunden pro Tag, in denen der Zeitplan aktiv ist.",
    hoursHelpContinuous: "24 für durchgehende Aufzeichnung rund um die Uhr.",
    vendorPresetApplied: "Hersteller-Voreinstellung angewendet:",
    totalStorage: "Benötigter Gesamtspeicher",
    totalStorageHint: "{cameras} × {days} Tage",
    cameraSingular: "{n} Kamera",
    cameraPlural: "{n} Kameras",
    perCameraTotal: "Pro Kamera, gesamt",
    allCamerasPerDay: "Alle Kameras, pro Tag",
    bitratePerCamera: "Bitrate pro Kamera",
    bitrateHint: "{resolution} bei {fps} fps, {codec}",
    recommendedDrive: "Empfohlene Festplatte",
    recommendedDriveHint:
      "Festplatte für Videoüberwachung (z. B. WD Purple, Seagate SkyHawk).",
    savedVsH264: "Ersparnis gegenüber H.264",
    savedVsH264Hint: "Durch die Wahl eines effizienteren Codecs.",
    codecComparison: "Codec-Vergleich",
    codecComparisonHint:
      "Gleiche Kameras, gleiche Aufbewahrung, anderer Codec.",

    cloudProvider: "Cloud-Anbieter",
    storageTier: "Speicherklasse",
    storageAmount: "Speichermenge",
    storageUnit: "Einheit der Speichermenge",
    monthlyEgress: "Monatlicher Datenabfluss",
    monthlyEgressHelp: "Daten, die pro Monat aus der Cloud heruntergeladen werden.",
    writeRequests: "Schreibanfragen",
    writeRequestsHelp: "PUT, COPY, POST, LIST, je 1.000 Anfragen.",
    readRequests: "Leseanfragen",
    readRequestsHelp: "GET, SELECT, je 1.000 Anfragen.",
    dataRetrieved: "Diesen Monat abgerufene Daten",
    dataRetrievedHelp:
      "Archivklassen berechnen jedes wiederhergestellte GB.",
    estimatedCost: "Geschätzte Kosten",
    estimatedCostRegion: "Geschätzte monatliche und jährliche Kosten",
    monthlyCost: "Monatliche Kosten",
    annualCost: "Jährliche Kosten",
    storageLine: "Speicher",
    egressLine: "Datenabfluss",
    writeOps: "Schreibvorgänge",
    readOps: "Lesevorgänge",
    retrievalLine: "Abruf",
    tierComparison: "Vergleich der Speicherklassen",
    tierComparisonHint:
      "Monatliche Kosten derselben Daten in jeder Speicherklasse.",
    cheapest: "Am günstigsten",
    selected: "Ausgewählt",
    freeTierNote: "Kostenloses Kontingent berücksichtigt",

    gb: "GB",
    timesThousand: "× 1.000",
    tierOption: "{label} ({price} $/GB/Monat)",
    egressHelp: "Die ersten {gb} GB pro Monat ins Internet sind kostenlos.",
    egressHint: "Über dem kostenlosen Kontingent von {gb} GB.",
    retrievalHelp:
      "{tier} berechnet {price} $/GB für den Abruf von Daten aus dem Kaltspeicher.",
    retrievalHint: "{price} $/GB aus {tier}",
    monthlyCostHint: "{gb} GB in {tier}",
    priceNoteStrong: "Hinweis:",
    priceNoteBody:
      "Die Preise sind Listenpreise der gängigsten US-Region mit Stand Anfang 2025. Die tatsächlichen Kosten hängen von Region, Rabatten bei Nutzungszusagen und Preisänderungen der Anbieter ab. Zur Schätzung geeignet, nicht zur Abrechnung.",

    codecChartAria: "Speichervergleich zwischen Video-Codecs",
    codecChartBody:
      "Moderne intelligente Codecs (H.265+ / WiseStream II / Zipstream) senken den Speicherbedarf bei typischen Szenen um rund 75 %, ohne sichtbaren Qualitätsverlust.",
    codecBaseline: "Referenz",
    codecSaving: "~{percent} % gegenüber H.264",
    tierChartAria: "Vergleich der monatlichen Kosten je Speicherklasse",
    tierChartBody:
      "Selten genutzte Daten in kältere Klassen zu verschieben senkt die Speicherkosten um 75 bis 95 %, im Gegenzug für längere Abrufzeiten und Lesegebühren pro GB.",
    perMonth: "/Monat",
    perGb: "/GB",
  },

  raidLevels: {
    "0": "RAID 0 (Striping)",
    "1": "RAID 1 (Spiegelung)",
    "5": "RAID 5 (Striping + Parität)",
    "6": "RAID 6 (Striping + doppelte Parität)",
    "10": "RAID 10 (Spiegelung + Striping)",
    "50": "RAID 50 (gestripte RAID-5-Gruppen)",
    "60": "RAID 60 (gestripte RAID-6-Gruppen)",
  },

  raidWarning: {
    minDrives: "RAID {level} benötigt mindestens {min} Laufwerke.",
    afterSpares:
      "Nach {spares} Hot Spare(s) bleiben nur {active} aktive Laufwerk(e) übrig; RAID {level} benötigt mindestens {min}.",
    driveSize: "Geben Sie eine Laufwerksgröße größer als 0 ein.",
    evenDrives:
      "RAID 10 benötigt eine gerade Anzahl aktiver Laufwerke; {lost} Laufwerk(e) bleiben ungenutzt.",
    groupsUneven:
      "RAID {level} benötigt {groups} gleich große Gruppen mit jeweils mindestens {min} Laufwerken. {active} aktive Laufwerke lassen sich nicht gleichmäßig auf {groups} RAID-{level}-Gruppen aufteilen.",
  },

  resolutions: {
    "480p": "480p (D1 / 0,4 MP)",
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
    "h265+": "H.265+ / intelligenter Codec (Zipstream, WiseStream II)",
  },

  recordingModes: {
    continuous: "Durchgehend rund um die Uhr",
    motion: "Nur bei Bewegungserkennung",
    scheduled: "Nach Zeitplan",
  },

  vendorNotes: {
    hikvision:
      "Hikvision-Kameras der Serie DS-2CD werden meist mit aktiviertem H.265+ ausgeliefert, was den Speicherbedarf gegenüber reinem H.265 noch einmal halbiert.",
    hanwha:
      "Hanwha-Kameras (Samsung) der Reihe Wisenet nutzen WiseStream II, einen intelligenten Codec, der bei statischen Szenen ähnlich gut abschneidet wie H.265+.",
    axis: "Axis-Kameras mit Zipstream erreichen je nach Aktivität in der Szene rund 50 bis 80 % weniger Bitrate. Die Voreinstellung „H.265+“ bildet das näherungsweise ab.",
    genetec:
      "Genetec-Security-Center-Archiver bündeln typischerweise viele Kameras über lange Aufbewahrungszeiträume; die Standardwerte spiegeln diese Größenordnung wider.",
    unifi:
      "UniFi-Protect-Kameras der Reihen G4 und G5 nutzen H.265 in nativer Auflösung. UniFi Protect löscht ältere Aufnahmen automatisch, sobald die Festplatte voll ist.",
  },

  tierNotes: {
    "aws:standard":
      "Standardklasse. Häufiger Zugriff, Latenz im Millisekundenbereich, Beständigkeit von elf Neunen.",
    "aws:standard-ia":
      "Seltener Zugriff. Mindestens 30 Tage Speicherung; Abrufgebühr pro GB.",
    "aws:one-zone-ia":
      "Seltener Zugriff in nur einer Availability Zone. Rund 20 % günstiger als Standard-IA.",
    "aws:glacier-ir":
      "Abruf in Millisekunden, mindestens 90 Tage, 0,03 $/GB Abrufgebühr.",
    "aws:glacier-flex":
      "Abruf innerhalb von Minuten bis Stunden, mindestens 90 Tage.",
    "aws:glacier-deep":
      "Günstigste Klasse. Abruf ab 12 Stunden, mindestens 180 Tage.",
    "azure:hot":
      "Häufiger Zugriff. Standardklasse für die meisten Anwendungsfälle.",
    "azure:cool":
      "Seltener Zugriff (ab 30 Tagen). Höhere Kosten pro Vorgang, Abrufgebühr fällt an.",
    "azure:cold":
      "Sehr seltener Zugriff (ab 90 Tagen). Günstiger als Cool, dafür langsameres SLA.",
    "azure:archive":
      "Am günstigsten. Rehydrierung dauert Stunden bis zu einem Tag. Die Lesekosten sind enorm.",
    "gcp:standard": "Häufiger Zugriff. Standardklasse.",
    "gcp:nearline":
      "Monatlicher Zugriff. Mindestens 30 Tage, 0,01 $/GB Abruf.",
    "gcp:coldline":
      "Vierteljährlicher Zugriff. Mindestens 90 Tage, 0,02 $/GB Abruf.",
    "gcp:archive":
      "Jährlicher Zugriff. Mindestens 365 Tage, 0,05 $/GB Abruf.",
    "firebase:standard":
      "Firebase setzt auf GCS Standard auf. Der Spark-Tarif enthält 5 GB kostenlos; Blaze wird nach Verbrauch abgerechnet.",
  },
};

export default de;
