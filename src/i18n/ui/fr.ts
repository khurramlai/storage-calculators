import type { UIStrings } from "./en";

/**
 * French UI strings. Technical terms that French IT professionals use in
 * English (RAID, NAS, codec, hot spare, egress) are kept in English on
 * purpose; translating them would make the pages harder to search for, not
 * easier to read.
 */
const fr: UIStrings = {
  site: {
    name: "Calculateurs de Stockage",
    tagline:
      "Calculateurs gratuits pour RAID, NAS, vidéosurveillance et stockage cloud.",
  },

  nav: {
    calculators: "Calculateurs",
    about: "À propos",
    tryRaid: "Essayer le calculateur RAID",
    openMenu: "Ouvrir le menu",
    language: "Langue",
    chooseLanguage: "Choisir une langue",
  },

  category: {
    raid: "RAID",
    surveillance: "Vidéosurveillance",
    nas: "NAS",
    cloud: "Stockage cloud",
    "self-storage": "Garde-meuble",
    specialty: "Spécialisés",
  },

  common: {
    home: "Accueil",
    breadcrumb: "Fil d'Ariane",
    openCalculator: "Ouvrir le calculateur",
    calculatorCount: "{count} calculateur",
    calculatorCountPlural: "{count} calculateurs",
    relatedHeading: "Calculateurs associés",
    faqHeading: "Questions fréquentes",
  },

  calcPage: {
    aboutHeading: "À propos de ce calculateur",
    formulaHeading: "La formule",
    useCasesHeading: "Cas d'usage courants",
    freeNoSignup: "Gratuit, sans inscription",
    privacyNote:
      "Ce calculateur fonctionne dans votre navigateur. Vos données ne quittent jamais votre appareil. Les résultats sont des estimations, voir notre",
    disclaimerLink: "avertissement",
    alsoKnownAs: "Également appelé",
  },

  home: {
    heroEyebrow: "{count} calculateurs de stockage gratuits",
    heroTitleLead: "Vos calculs de stockage,",
    heroTitleAccent: "résolus en un instant",
    heroSubtitle:
      "Des calculateurs précis pour le RAID, le NAS, la vidéosurveillance et le stockage cloud, basés sur les spécifications publiées par les constructeurs. Sans inscription, sans superflu, sans promesses excessives.",
    heroCtaPrimary: "Commencer par le RAID",
    heroCtaSecondary: "Voir tous les calculateurs",
    statCalculators: "Calculateurs",
    statCategories: "Catégories",
    statFreeValue: "0 €",
    statFree: "Toujours",
    statNoSignupValue: "Sans compte",
    statNoSignup: "Requis",
    previewCaption: "capacité utile · résiste à 2 pannes de disque",
    previewReadSpeed: "Vitesse de lecture",
    previewWriteSpeed: "Vitesse d'écriture",
    previewEfficiency: "Efficacité",
    previewUsable: "Utile 75 %",
    previewParity: "Parité 25 %",
    trustStrip: "Calculs issus de la documentation publique de",
    categoriesEyebrow: "Choisissez une catégorie",
    categoriesTitle: "Six familles, vingt calculateurs",
    categoriesSubtitle:
      "Chaque calculateur répond à un besoin et à un public précis. Choisissez la catégorie qui correspond à ce que vous dimensionnez.",
    featuredEyebrow: "Les plus utiles",
    featuredTitle: "Calculateurs à la une",
    featuredSeeAll: "Voir tout",
    whyEyebrow: "Pourquoi ces calculateurs",
    whyTitle: "Bien conçus, et gratuits",
    whySubtitle:
      "Les calculateurs des constructeurs cachent la formule et cherchent à vous vendre quelque chose. Pas ceux-ci.",
    feature1Title: "Formules standards du secteur",
    feature1Body:
      "Calculs issus de la documentation publique des constructeurs : Hikvision, Hanwha, Axis, AWS, Azure, GCP. Vérifiés face aux chiffres de dimensionnement publiés.",
    feature2Title: "Préréglages par constructeur",
    feature2Body:
      "La page Hikvision utilise le H.265+ par défaut. UniFi part sur une G4 Pro en 4 MP. Azure démarre sur Hot. De vraies valeurs par défaut, pas des exemples théoriques.",
    feature3Title: "Instantané, sans inscription",
    feature3Body:
      "Les calculs s'exécutent dans votre navigateur au fil de la saisie. Aucun compte, aucun e-mail à fournir, aucune relance commerciale.",
    feature4Title: "Respect de la vie privée",
    feature4Body:
      "Site statique, aucun serveur, aucune analyse avant votre consentement. Vos données ne quittent jamais votre appareil.",
    feature5Title: "Comparaisons visuelles",
    feature5Body:
      "Répartition des capacités, graphiques d'économies par codec, barres de coût par classe de stockage. Le compromis se voit, il ne se lit pas.",
    feature6Title: "Adapté au mobile",
    feature6Body:
      "Tous les calculateurs fonctionnent sur téléphone. Pratique quand vous êtes déjà dans la salle serveurs ou sur le site d'installation.",
    allEyebrow: "La bibliothèque complète",
    allTitle: "Tous les calculateurs",
    allSubtitle:
      "Classés par catégorie. Choisissez celui qui se rapproche le plus de votre besoin.",
    allEmpty: "Aucun calculateur pour l'instant",
    ctaTitle: "Trouvez le calculateur adapté à votre besoin de stockage.",
    ctaBody:
      "Du NAS domestique à 4 disques aux baies de vidéosurveillance à 64 caméras en passant par les archives cloud de plusieurs pétaoctets, il y a un calculateur pour ça ci-dessus.",
    ctaPrimary: "Ouvrir le calculateur RAID",
    ctaSecondary: "Parcourir la bibliothèque",
  },

  footer: {
    blurb:
      "Calculateurs gratuits pour le RAID, la vidéosurveillance, le NAS et le stockage cloud. Des calculs justes, sans inscription et sans suivi tant que vous n'avez pas accepté.",
    madeFor:
      "Conçu pour les administrateurs système, les intégrateurs et tous ceux qui en ont assez des calculateurs constructeurs qui masquent la formule.",
    categories: "Catégories",
    popular: "Populaires",
    legal: "Mentions légales",
    about: "À propos",
    disclaimer: "Avertissement",
    privacy: "Politique de confidentialité",
    cookies: "Politique relative aux cookies",
    terms: "Conditions d'utilisation",
    sitemap: "Plan du site",
    copyright:
      "© {year} StorageCalc. Tous les calculateurs sont gratuits. Les résultats sont des estimations. Voir",
    builtWith: "Réalisé avec Astro + Tailwind. Statique, rapide, respectueux de la vie privée.",
  },

  cookies: {
    title: "Cookies et mesure d'audience",
    body: "Nous utilisons Google Analytics pour savoir quels calculateurs sont utiles, et pouvons afficher des annonces Google pour garder ce site gratuit. Aucune donnée personnelle n'est collectée. Voir la",
    policyLink: "politique relative aux cookies",
    accept: "Accepter",
    reject: "Refuser",
    dismiss: "Fermer",
  },

  feedback: {
    heading: "Une erreur ? Une remarque ?",
    subheading:
      "Dites-nous ce qui cloche dans le calcul, ce qui manque, ou ce qui rendrait ce calculateur meilleur. Nous lisons tout.",
    openForm: "Ouvrir le formulaire",
    close: "Fermer",
    notConfiguredStrong: "Formulaire pas encore configuré.",
    notConfiguredBody:
      "Le propriétaire du site doit ajouter une clé d'accès Web3Forms dans {env} sous {key}.",
    typeLabel: "Type de retour",
    typePlaceholder: "Choisissez une option",
    typeMath: "Erreur de calcul ou de formule",
    typeMissing: "Fonction ou champ manquant",
    typeVendor: "Spécification ou tarif constructeur obsolète",
    typeSuggestion: "Suggestion ou amélioration",
    typeBug: "Bug d'interface ou comportement anormal",
    typeOther: "Autre",
    emailLabel: "Votre e-mail",
    emailOptional: "(facultatif)",
    emailPlaceholder: "vous@exemple.com",
    messageLabel: "Votre message",
    messagePlaceholder:
      "Qu'avez-vous constaté ? Soyez précis pour que nous puissions corriger vite.",
    messageHint:
      "Nous ne stockons rien. Votre message arrive simplement dans notre boîte mail.",
    submit: "Envoyer",
    submitting: "Envoi…",
    successStrong: "Merci !",
    successBody:
      "Votre message est bien arrivé dans notre boîte mail. Nous lisons chaque retour.",
    errorBody: "Une erreur est survenue. Merci de réessayer dans un instant.",
  },

  widget: {
    inputs: "Paramètres",
    results: "Résultats",
    calculate: "Calculer",
    reset: "Réinitialiser",
    liveHint: "Les résultats se mettent à jour au fil de la saisie.",
    resultsRegion: "Résultats du calcul",
    minimum: "Minimum : {n}",

    raidLevel: "Niveau RAID",
    driveCount: "Nombre de disques",
    driveSize: "Taille des disques",
    driveSizeUnit: "Unité de taille de disque",
    hotSpares: "Disques de secours (hot spares)",
    hotSparesHelp:
      "Disques inactifs réservés à la reconstruction automatique.",
    stripeGroups: "Groupes d'agrégation",
    stripeGroupsHelp:
      "Le RAID {level} répartit les données sur plusieurs groupes.",
    usableCapacity: "Capacité utile",
    usableOfRaw: "{percent} de la capacité brute",
    rawCapacity: "Capacité brute",
    faultTolerance: "Tolérance de panne",
    faultToleranceRange: "{min} à {max} disques",
    driveFailures: "{n} disque",
    driveFailuresPlural: "{n} disques",
    faultToleranceHint:
      "Nombre de pannes de disques supportées, du pire au meilleur des cas.",
    readSpeed: "Vitesse de lecture",
    writeSpeed: "Vitesse d'écriture",
    vsOneDrive: "par rapport à un seul disque",
    hotSpareReserve: "Réserve de secours",
    arrayLayout: "Organisation de la grappe",
    arrayLayoutValue: "{groups} × {perGroup} disques",
    capacityBreakdown: "Répartition de la capacité",
    capacityRaw: "{tb} To bruts",
    capacityEmpty:
      "Saisissez des valeurs valides pour voir la répartition de la capacité.",
    segUsable: "Utile",
    segParity: "Parité",
    segMirror: "Miroir",
    segHotSpare: "Disque de secours",
    capacityBreakdownAria: "Répartition de la capacité : {segments}",

    cameraCount: "Nombre de caméras",
    retention: "Rétention",
    retentionHelp: "Nombre de jours d'enregistrement à conserver.",
    days: "jours",
    resolution: "Résolution",
    frameRate: "Fréquence d'images",
    frameRateHelp:
      "Plus d'images par seconde = mouvement plus fluide, mais plus de stockage.",
    fps: "{n} ips",
    codec: "Codec",
    codecHelp: "Les codecs récents réduisent le débit de 50 à 75 %.",
    recordingMode: "Mode d'enregistrement",
    hoursPerDay: "Heures par jour",
    hoursHelpMotion:
      "Plage active ; la détection de mouvement réduit encore la durée réellement enregistrée.",
    hoursHelpScheduled: "Heures par jour où la planification est active.",
    hoursHelpContinuous: "24 pour un enregistrement 24 h/24, 7 j/7.",
    vendorPresetApplied: "Préréglage constructeur appliqué :",
    totalStorage: "Stockage total nécessaire",
    totalStorageHint: "{cameras} × {days} jours",
    cameraSingular: "{n} caméra",
    cameraPlural: "{n} caméras",
    perCameraTotal: "Par caméra, au total",
    allCamerasPerDay: "Toutes caméras, par jour",
    bitratePerCamera: "Débit par caméra",
    bitrateHint: "{resolution} à {fps} ips, {codec}",
    recommendedDrive: "Disque recommandé",
    recommendedDriveHint:
      "Disque dur spécial vidéosurveillance (WD Purple, Seagate SkyHawk, etc.).",
    savedVsH264: "Économie face au H.264",
    savedVsH264Hint: "Grâce au choix d'un codec plus efficace.",
    codecComparison: "Comparaison des codecs",
    codecComparisonHint: "Mêmes caméras, même rétention, codec différent.",

    cloudProvider: "Fournisseur cloud",
    storageTier: "Classe de stockage",
    storageAmount: "Volume stocké",
    storageUnit: "Unité de volume",
    monthlyEgress: "Sortie de données mensuelle",
    monthlyEgressHelp: "Données téléchargées hors du cloud chaque mois.",
    writeRequests: "Requêtes en écriture",
    writeRequestsHelp: "PUT, COPY, POST, LIST, par tranche de 1 000 requêtes.",
    readRequests: "Requêtes en lecture",
    readRequestsHelp: "GET, SELECT, par tranche de 1 000 requêtes.",
    dataRetrieved: "Données restaurées ce mois-ci",
    dataRetrievedHelp:
      "Les classes d'archivage facturent chaque Go restauré.",
    estimatedCost: "Coût estimé",
    estimatedCostRegion: "Coût mensuel et annuel estimé",
    monthlyCost: "Coût mensuel",
    annualCost: "Coût annuel",
    storageLine: "Stockage",
    egressLine: "Sortie de données",
    writeOps: "Opérations d'écriture",
    readOps: "Opérations de lecture",
    retrievalLine: "Restauration",
    tierComparison: "Comparaison des classes",
    tierComparisonHint:
      "Coût mensuel des mêmes données dans chaque classe de stockage.",
    cheapest: "Le moins cher",
    selected: "Sélectionné",
    freeTierNote: "Palier gratuit appliqué",

    gb: "Go",
    timesThousand: "× 1 000",
    tierOption: "{label} ({price} $/Go/mois)",
    egressHelp: "Les {gb} premiers Go/mois vers Internet sont gratuits.",
    egressHint: "Au-delà du palier gratuit de {gb} Go.",
    retrievalHelp:
      "{tier} facture {price} $/Go pour restaurer des données depuis le stockage froid.",
    retrievalHint: "{price} $/Go depuis {tier}",
    monthlyCostHint: "{gb} Go en {tier}",
    priceNoteStrong: "Remarque :",
    priceNoteBody:
      "Les prix affichés sont les tarifs publics de la région américaine la plus courante, début 2025. Le coût réel varie selon la région, les engagements de consommation et les mises à jour des fournisseurs. À utiliser pour estimer, pas pour facturer.",

    codecChartAria: "Comparaison du stockage selon le codec vidéo",
    codecChartBody:
      "Les codecs intelligents récents (H.265+ / WiseStream II / Zipstream) réduisent le stockage d'environ 75 % sur des scènes classiques, sans perte de qualité visible.",
    codecBaseline: "Référence",
    codecSaving: "~{percent} % face au H.264",
    tierChartAria: "Comparaison du coût mensuel selon la classe de stockage",
    tierChartBody:
      "Déplacer les données rarement consultées vers des classes plus froides réduit le coût de stockage de 75 à 95 %, au prix d'une latence de restauration et de frais de lecture au Go.",
    perMonth: "/mois",
    perGb: "/Go",
  },

  raidLevels: {
    "0": "RAID 0 (agrégation par bandes)",
    "1": "RAID 1 (miroir)",
    "5": "RAID 5 (bandes + parité)",
    "6": "RAID 6 (bandes + double parité)",
    "10": "RAID 10 (miroir + bandes)",
    "50": "RAID 50 (groupes RAID 5 agrégés)",
    "60": "RAID 60 (groupes RAID 6 agrégés)",
  },

  raidWarning: {
    minDrives: "Le RAID {level} exige au moins {min} disques.",
    afterSpares:
      "Après {spares} disque(s) de secours, il ne reste que {active} disque(s) actif(s) : le RAID {level} en exige au moins {min}.",
    driveSize: "Saisissez une taille de disque supérieure à 0.",
    evenDrives:
      "Le RAID 10 exige un nombre pair de disques actifs ; {lost} disque(s) inutilisé(s).",
    groupsUneven:
      "Le RAID {level} exige {groups} groupes égaux d'au moins {min} disques. {active} disques actifs répartis en {groups} groupes ne donnent pas des ensembles RAID {level} équilibrés.",
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
    "h265+": "H.265+ / codec intelligent (Zipstream, WiseStream II)",
  },

  recordingModes: {
    continuous: "Continu 24 h/24, 7 j/7",
    motion: "Sur détection de mouvement uniquement",
    scheduled: "Plages horaires planifiées",
  },

  vendorNotes: {
    hikvision:
      "Les caméras Hikvision de la série DS-2CD sont généralement livrées avec le H.265+ activé, ce qui divise encore par deux le stockage par rapport au H.265 classique.",
    hanwha:
      "Les caméras Hanwha (Samsung) Wisenet utilisent WiseStream II, un codec intelligent dont les performances sont proches du H.265+ sur les scènes fixes.",
    axis: "Les caméras Axis équipées de Zipstream réduisent le débit d'environ 50 à 80 % selon l'activité de la scène. Le préréglage « H.265+ » s'en approche.",
    genetec:
      "Les Archivers Genetec Security Center regroupent souvent de nombreuses caméras sur de longues durées de rétention ; les valeurs par défaut reflètent cette échelle.",
    unifi:
      "Les caméras UniFi Protect G4 et G5 utilisent le H.265 à leur résolution native. UniFi Protect efface automatiquement les enregistrements les plus anciens quand le disque se remplit.",
  },

  tierNotes: {
    "aws:standard":
      "Classe par défaut. Accès fréquent, latence de l'ordre de la milliseconde, durabilité de 11 « 9 ».",
    "aws:standard-ia":
      "Accès peu fréquent. Stockage minimum de 30 jours ; frais de restauration au Go.",
    "aws:one-zone-ia":
      "Accès peu fréquent sur une seule zone de disponibilité. Environ 20 % moins cher que Standard-IA.",
    "aws:glacier-ir":
      "Restauration en quelques millisecondes, minimum 90 jours, 0,03 $/Go de frais de restauration.",
    "aws:glacier-flex":
      "Restauration en quelques minutes à quelques heures, minimum 90 jours.",
    "aws:glacier-deep":
      "La classe la moins chère. Restauration en 12 h ou plus, minimum 180 jours.",
    "azure:hot":
      "Accès fréquent. Classe par défaut pour la plupart des charges de travail.",
    "azure:cool":
      "Accès peu fréquent (≥ 30 jours). Opérations plus chères, frais de restauration applicables.",
    "azure:cold":
      "Accès rare (≥ 90 jours). Moins cher que Cool, avec un SLA plus lent.",
    "azure:archive":
      "La moins chère. Réhydratation de quelques heures à un jour. Les coûts de lecture sont très élevés.",
    "gcp:standard": "Accès fréquent. Classe par défaut.",
    "gcp:nearline":
      "Accès mensuel. Minimum 30 jours, 0,01 $/Go de restauration.",
    "gcp:coldline":
      "Accès trimestriel. Minimum 90 jours, 0,02 $/Go de restauration.",
    "gcp:archive":
      "Accès annuel. Minimum 365 jours, 0,05 $/Go de restauration.",
    "firebase:standard":
      "Firebase s'appuie sur GCS Standard. Le forfait Spark inclut 5 Go gratuits ; Blaze est facturé à l'usage.",
  },
};

export default fr;
