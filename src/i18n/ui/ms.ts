import type { UIStrings } from "./en";

/**
 * Malay (Bahasa Melayu) UI strings, Malaysian usage. Addresses the reader as
 * "anda" throughout.
 *
 * Technical terms that Malaysian IT professionals use in English (RAID, NAS,
 * codec, hot spare, egress, bitrate) are kept in English on purpose; the
 * coined Malay equivalents would make the pages harder to search for, not
 * easier to read.
 */
const ms: UIStrings = {
  site: {
    name: "Kalkulator Storan",
    tagline:
      "Kalkulator percuma untuk RAID, NAS, CCTV dan storan awan.",
  },

  nav: {
    calculators: "Kalkulator",
    about: "Tentang Kami",
    tryRaid: "Cuba kalkulator RAID",
    openMenu: "Buka menu",
    language: "Bahasa",
    chooseLanguage: "Pilih bahasa",
  },

  category: {
    raid: "RAID",
    surveillance: "Pengawasan & CCTV",
    nas: "NAS",
    cloud: "Storan Awan",
    "self-storage": "Storan Sendiri",
    specialty: "Khusus",
  },

  common: {
    home: "Laman Utama",
    breadcrumb: "Laluan navigasi",
    openCalculator: "Buka kalkulator",
    calculatorCount: "{count} kalkulator",
    calculatorCountPlural: "{count} kalkulator",
    relatedHeading: "Kalkulator Berkaitan",
    faqHeading: "Soalan Lazim",
  },

  calcPage: {
    aboutHeading: "Tentang kalkulator ini",
    formulaHeading: "Formulanya",
    useCasesHeading: "Kegunaan biasa",
    freeNoSignup: "Percuma, tanpa pendaftaran",
    privacyNote:
      "Kalkulator ini berjalan dalam pelayar anda. Data anda tidak pernah meninggalkan peranti anda. Keputusan adalah anggaran, sila rujuk",
    disclaimerLink: "penafian kami",
    alsoKnownAs: "Juga dikenali sebagai",
  },

  home: {
    heroEyebrow: "{count} kalkulator storan percuma",
    heroTitleLead: "Pengiraan storan,",
    heroTitleAccent: "selesai serta-merta",
    heroSubtitle:
      "Kalkulator tepat untuk RAID, NAS, pengawasan dan storan awan, berdasarkan spesifikasi rasmi yang diterbitkan pengeluar. Tanpa pendaftaran, tanpa isi kosong, tanpa janji berlebihan.",
    heroCtaPrimary: "Mulakan dengan RAID",
    heroCtaSecondary: "Lihat semua kalkulator",
    statCalculators: "Kalkulator",
    statCategories: "Kategori",
    statFreeValue: "RM0",
    statFree: "Selamanya",
    statNoSignupValue: "Tanpa akaun",
    statNoSignup: "Diperlukan",
    previewCaption: "kapasiti boleh guna · tahan 2 kegagalan cakera",
    previewReadSpeed: "Kelajuan baca",
    previewWriteSpeed: "Kelajuan tulis",
    previewEfficiency: "Kecekapan",
    previewUsable: "Boleh guna 75%",
    previewParity: "Pariti 25%",
    trustStrip: "Pengiraan berdasarkan dokumentasi awam daripada",
    categoriesEyebrow: "Pilih kategori",
    categoriesTitle: "Enam kelompok, dua puluh kalkulator",
    categoriesSubtitle:
      "Setiap kalkulator disasarkan kepada keperluan dan pengguna tertentu. Pilih kategori yang sepadan dengan apa yang anda ukur.",
    featuredEyebrow: "Paling berguna",
    featuredTitle: "Kalkulator pilihan",
    featuredSeeAll: "Lihat semua",
    whyEyebrow: "Kenapa kalkulator ini",
    whyTitle: "Dibina betul, kekal percuma",
    whySubtitle:
      "Kalkulator pengeluar menyembunyikan formula dan cuba menjual sesuatu kepada anda. Yang ini tidak.",
    feature1Title: "Formula piawai industri",
    feature1Body:
      "Pengiraan diambil daripada dokumentasi awam pengeluar: Hikvision, Hanwha, Axis, AWS, Azure dan GCP. Disahkan dengan angka perancangan yang diterbitkan.",
    feature2Title: "Tetapan mengikut pengeluar",
    feature2Body:
      "Halaman Hikvision guna H.265+ secara lalai. UniFi bermula dengan G4 Pro pada 4 MP. Azure bermula pada Hot. Nilai sebenar, bukan contoh makmal.",
    feature3Title: "Serta-merta, tanpa pendaftaran",
    feature3Body:
      "Pengiraan berjalan dalam pelayar anda sambil anda menaip. Tiada akaun, tiada permintaan e-mel, tiada susulan pemasaran.",
    feature4Title: "Privasi didahulukan",
    feature4Body:
      "Laman statik, tiada pelayan belakang, tiada analitik sehingga anda bersetuju. Data anda tidak pernah meninggalkan peranti anda.",
    feature5Title: "Perbandingan visual",
    feature5Body:
      "Pecahan kapasiti, carta penjimatan codec dan bar kos bagi setiap kelas storan. Anda nampak pertukarannya, bukan sekadar membacanya.",
    feature6Title: "Mesra telefon",
    feature6Body:
      "Semua kalkulator berfungsi pada telefon. Berguna apabila anda sudah berada di bilik pelayan atau di tapak pemasangan.",
    allEyebrow: "Koleksi penuh",
    allTitle: "Semua kalkulator",
    allSubtitle:
      "Disusun mengikut kategori. Pilih yang paling hampir dengan keperluan anda.",
    allEmpty: "Belum ada kalkulator",
    ctaTitle: "Cari kalkulator yang sesuai untuk keperluan storan anda.",
    ctaBody:
      "Daripada NAS rumah empat cakera hingga rak pengawasan 64 kamera dan arkib awan berskala petabait, ada kalkulator untuknya di atas.",
    ctaPrimary: "Buka kalkulator RAID",
    ctaSecondary: "Layari koleksi",
  },

  footer: {
    blurb:
      "Kalkulator percuma untuk RAID, pengawasan, NAS dan storan awan. Pengiraan tepat, tanpa pendaftaran dan tanpa penjejakan sehingga anda bersetuju.",
    madeFor:
      "Dibina untuk pentadbir sistem, pemasang dan sesiapa yang jemu dengan kalkulator pengeluar yang menyembunyikan formula.",
    categories: "Kategori",
    popular: "Popular",
    legal: "Perundangan",
    about: "Tentang Kami",
    disclaimer: "Penafian",
    privacy: "Dasar Privasi",
    cookies: "Dasar Kuki",
    terms: "Terma Perkhidmatan",
    sitemap: "Peta Laman",
    copyright:
      "© {year} StorageCalc. Semua kalkulator percuma digunakan. Keputusan adalah anggaran. Rujuk",
    builtWith:
      "Dibina dengan Astro + Tailwind. Statik, pantas dan mengutamakan privasi.",
  },

  cookies: {
    title: "Kuki & analitik",
    body: "Kami menggunakan Google Analytics untuk mengetahui kalkulator mana yang berguna, dan mungkin memaparkan iklan Google supaya laman ini kekal percuma. Tiada data peribadi dikumpul. Rujuk",
    policyLink: "Dasar Kuki",
    accept: "Terima",
    reject: "Tolak",
    dismiss: "Tutup",
  },

  feedback: {
    heading: "Jumpa ralat? Ada cadangan?",
    subheading:
      "Beritahu kami apa yang salah pada pengiraan, apa yang kurang, atau apa yang boleh menjadikan kalkulator ini lebih baik. Kami membaca semuanya.",
    openForm: "Buka borang",
    close: "Tutup",
    notConfiguredStrong: "Borang belum ditetapkan.",
    notConfiguredBody:
      "Pemilik laman perlu menambah kunci akses Web3Forms dalam {env} sebagai {key}.",
    typeLabel: "Jenis maklum balas",
    typePlaceholder: "Pilih satu",
    typeMath: "Ralat pengiraan atau formula",
    typeMissing: "Ciri atau medan yang tiada",
    typeVendor: "Spesifikasi atau harga pengeluar sudah lapuk",
    typeSuggestion: "Cadangan atau penambahbaikan",
    typeBug: "Pepijat antara muka atau kelakuan tidak betul",
    typeOther: "Lain-lain",
    emailLabel: "E-mel anda",
    emailOptional: "(pilihan)",
    emailPlaceholder: "anda@contoh.com",
    messageLabel: "Mesej anda",
    messagePlaceholder:
      "Apa yang anda jumpa? Nyatakan dengan jelas supaya kami boleh membaikinya dengan cepat.",
    messageHint:
      "Kami tidak menyimpannya di mana-mana. Mesej ini terus sampai ke peti masuk kami.",
    submit: "Hantar maklum balas",
    submitting: "Menghantar…",
    successStrong: "Terima kasih!",
    successBody:
      "Maklum balas anda telah sampai ke peti masuk kami. Kami membaca setiap mesej.",
    errorBody: "Ada masalah berlaku. Sila cuba lagi sebentar nanti.",
  },

  widget: {
    inputs: "Input",
    results: "Keputusan",
    calculate: "Kira",
    reset: "Set semula",
    liveHint: "Keputusan dikemas kini secara langsung sambil anda menaip.",
    resultsRegion: "Keputusan pengiraan",
    minimum: "Minimum: {n}",

    raidLevel: "Tahap RAID",
    driveCount: "Bilangan cakera",
    driveSize: "Saiz cakera",
    driveSizeUnit: "Unit saiz cakera",
    hotSpares: "Cakera ganti (hot spare)",
    hotSparesHelp:
      "Cakera yang tidak digunakan dan dikhaskan untuk pembinaan semula automatik.",
    stripeGroups: "Kumpulan stripe",
    stripeGroupsHelp:
      "RAID {level} mengagihkan data merentas beberapa kumpulan.",
    usableCapacity: "Kapasiti boleh guna",
    usableOfRaw: "{percent} daripada kapasiti mentah",
    rawCapacity: "Kapasiti mentah",
    faultTolerance: "Toleransi kegagalan",
    faultToleranceRange: "{min} hingga {max} cakera",
    driveFailures: "{n} cakera",
    driveFailuresPlural: "{n} cakera",
    faultToleranceHint:
      "Bilangan kegagalan cakera yang mampu ditampung, daripada kes terburuk hingga terbaik.",
    readSpeed: "Kelajuan baca",
    writeSpeed: "Kelajuan tulis",
    vsOneDrive: "berbanding satu cakera",
    hotSpareReserve: "Simpanan cakera ganti",
    arrayLayout: "Susun atur tatasusunan",
    arrayLayoutValue: "{groups} × {perGroup} cakera",
    capacityBreakdown: "Pecahan kapasiti",
    capacityRaw: "{tb} TB mentah",
    capacityEmpty: "Masukkan nilai yang sah untuk melihat pecahan kapasiti.",
    segUsable: "Boleh guna",
    segParity: "Pariti",
    segMirror: "Cermin",
    segHotSpare: "Cakera ganti",
    capacityBreakdownAria: "Pecahan kapasiti: {segments}",

    cameraCount: "Bilangan kamera",
    retention: "Tempoh simpanan",
    retentionHelp: "Berapa hari rakaman yang hendak disimpan.",
    days: "hari",
    resolution: "Resolusi",
    frameRate: "Kadar bingkai",
    frameRateHelp:
      "Fps lebih tinggi bermakna pergerakan lebih lancar tetapi storan lebih besar.",
    fps: "{n} fps",
    codec: "Codec",
    codecHelp: "Codec moden mengurangkan bitrate sebanyak 50 hingga 75%.",
    recordingMode: "Mod rakaman",
    hoursPerDay: "Jam sehari",
    hoursHelpMotion:
      "Tempoh aktif; rakaman berdasarkan gerakan mengurangkan lagi masa rakaman sebenar.",
    hoursHelpScheduled: "Jam sehari ketika jadual aktif.",
    hoursHelpContinuous: "Masukkan 24 untuk rakaman berterusan sepanjang masa.",
    vendorPresetApplied: "Tetapan pengeluar digunakan:",
    totalStorage: "Jumlah storan diperlukan",
    totalStorageHint: "{cameras} × {days} hari",
    cameraSingular: "{n} kamera",
    cameraPlural: "{n} kamera",
    perCameraTotal: "Setiap kamera, keseluruhan",
    allCamerasPerDay: "Semua kamera, sehari",
    bitratePerCamera: "Bitrate setiap kamera",
    bitrateHint: "{resolution} pada {fps} fps, {codec}",
    recommendedDrive: "Cakera disyorkan",
    recommendedDriveHint:
      "Cakera keras gred pengawasan (contohnya WD Purple, Seagate SkyHawk).",
    savedVsH264: "Penjimatan berbanding H.264",
    savedVsH264Hint: "Hasil daripada memilih codec yang lebih cekap.",
    codecComparison: "Perbandingan codec",
    codecComparisonHint: "Kamera sama, tempoh simpanan sama, codec berbeza.",

    cloudProvider: "Penyedia awan",
    storageTier: "Kelas storan",
    storageAmount: "Jumlah storan",
    storageUnit: "Unit saiz storan",
    monthlyEgress: "Data keluar bulanan",
    monthlyEgressHelp: "Data yang dimuat turun keluar dari awan setiap bulan.",
    writeRequests: "Permintaan tulis",
    writeRequestsHelp: "PUT, COPY, POST, LIST, bagi setiap 1,000 permintaan.",
    readRequests: "Permintaan baca",
    readRequestsHelp: "GET, SELECT, bagi setiap 1,000 permintaan.",
    dataRetrieved: "Data diambil semula bulan ini",
    dataRetrievedHelp:
      "Kelas arkib mengenakan caj bagi setiap GB yang dipulihkan.",
    estimatedCost: "Anggaran kos",
    estimatedCostRegion: "Anggaran kos bulanan dan tahunan",
    monthlyCost: "Kos bulanan",
    annualCost: "Kos tahunan",
    storageLine: "Storan",
    egressLine: "Data keluar",
    writeOps: "Operasi tulis",
    readOps: "Operasi baca",
    retrievalLine: "Pengambilan semula",
    tierComparison: "Perbandingan kelas storan",
    tierComparisonHint:
      "Kos bulanan bagi data yang sama dalam setiap kelas storan.",
    cheapest: "Paling murah",
    selected: "Dipilih",
    freeTierNote: "Kuota percuma digunakan",

    gb: "GB",
    timesThousand: "× 1,000",
    tierOption: "{label} ({price} $/GB/bulan)",
    egressHelp: "{gb} GB pertama sebulan ke internet adalah percuma.",
    egressHint: "Selepas kuota percuma {gb} GB.",
    retrievalHelp:
      "{tier} mengenakan {price} $/GB untuk mengambil semula data daripada storan sejuk.",
    retrievalHint: "{price} $/GB daripada {tier}",
    monthlyCostHint: "{gb} GB dalam {tier}",
    priceNoteStrong: "Nota:",
    priceNoteBody:
      "Harga ini ialah harga senarai bagi wilayah AS yang paling lazim setakat awal 2025. Kos sebenar berbeza mengikut wilayah, diskaun komitmen penggunaan dan kemas kini penyedia. Gunakan untuk anggaran, bukan untuk pengebilan.",

    codecChartAria: "Perbandingan storan antara codec video",
    codecChartBody:
      "Codec pintar moden (H.265+ / WiseStream II / Zipstream) mengurangkan storan kira-kira 75% pada adegan biasa tanpa kehilangan kualiti yang ketara.",
    codecBaseline: "Rujukan",
    codecSaving: "~{percent}% berbanding H.264",
    tierChartAria: "Perbandingan kos bulanan antara kelas storan",
    tierChartBody:
      "Memindahkan data yang jarang diakses ke kelas lebih sejuk boleh mengurangkan kos storan sebanyak 75 hingga 95%, dengan pertukaran berupa masa pengambilan semula yang lebih lama dan caj bacaan setiap GB.",
    perMonth: "/bulan",
    perGb: "/GB",
  },

  raidLevels: {
    "0": "RAID 0 (Striping)",
    "1": "RAID 1 (Cerminan)",
    "5": "RAID 5 (Striping + Pariti)",
    "6": "RAID 6 (Striping + Pariti Berganda)",
    "10": "RAID 10 (Cerminan + Striping)",
    "50": "RAID 50 (Kumpulan RAID 5 bertindan)",
    "60": "RAID 60 (Kumpulan RAID 6 bertindan)",
  },

  raidWarning: {
    minDrives: "RAID {level} memerlukan sekurang-kurangnya {min} cakera.",
    afterSpares:
      "Selepas {spares} cakera ganti, hanya {active} cakera aktif tinggal, sedangkan RAID {level} memerlukan sekurang-kurangnya {min}.",
    driveSize: "Masukkan saiz cakera yang lebih besar daripada 0.",
    evenDrives:
      "RAID 10 memerlukan bilangan cakera aktif yang genap, {lost} cakera tidak digunakan.",
    groupsUneven:
      "RAID {level} memerlukan {groups} kumpulan sama besar dengan sekurang-kurangnya {min} cakera setiap satu. {active} cakera aktif tidak dapat dibahagikan sama rata kepada {groups} kumpulan RAID {level}.",
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
    "h265+": "H.265+ / codec pintar (Zipstream, WiseStream II)",
  },

  recordingModes: {
    continuous: "Berterusan 24/7",
    motion: "Hanya apabila gerakan dikesan",
    scheduled: "Mengikut jadual",
  },

  vendorNotes: {
    hikvision:
      "Kamera Hikvision siri DS-2CD biasanya dihantar dengan H.265+ dihidupkan, yang sekali lagi memisahkan dua storan berbanding H.265 biasa.",
    hanwha:
      "Kamera Hanwha (Samsung) Wisenet menggunakan WiseStream II, codec pintar yang prestasinya hampir sama dengan H.265+ pada adegan statik.",
    axis: "Kamera Axis dengan Zipstream mencapai pengurangan bitrate kira-kira 50 hingga 80% bergantung pada aktiviti adegan. Tetapan “H.265+” menghampiri kelakuan ini.",
    genetec:
      "Genetec Security Center Archiver lazimnya mengumpulkan banyak kamera dengan tempoh simpanan yang panjang; nilai lalai mencerminkan skala tersebut.",
    unifi:
      "Kamera UniFi Protect G4 dan G5 menggunakan H.265 pada resolusi asal. UniFi Protect memadamkan rakaman lama secara automatik apabila cakera penuh.",
  },

  tierNotes: {
    "aws:standard":
      "Kelas lalai. Akses kerap, kependaman milisaat, ketahanan sebelas sembilan.",
    "aws:standard-ia":
      "Akses jarang. Storan minimum 30 hari; caj pengambilan semula setiap GB.",
    "aws:one-zone-ia":
      "Akses jarang dalam satu zon ketersediaan sahaja. Kira-kira 20% lebih murah daripada Standard-IA.",
    "aws:glacier-ir":
      "Pengambilan semula dalam milisaat, minimum 90 hari, caj 0.03 $ setiap GB.",
    "aws:glacier-flex":
      "Pengambilan semula dalam beberapa minit hingga jam, minimum 90 hari.",
    "aws:glacier-deep":
      "Kelas paling murah. Pengambilan semula 12 jam ke atas, minimum 180 hari.",
    "azure:hot":
      "Akses kerap. Kelas lalai untuk kebanyakan beban kerja.",
    "azure:cool":
      "Akses jarang (30 hari ke atas). Kos operasi lebih tinggi dan caj pengambilan semula dikenakan.",
    "azure:cold":
      "Akses sangat jarang (90 hari ke atas). Lebih murah daripada Cool dengan SLA lebih perlahan.",
    "azure:archive":
      "Paling murah. Penghidratan semula mengambil masa beberapa jam hingga sehari. Kos bacaan sangat tinggi.",
    "gcp:standard": "Akses kerap. Kelas lalai.",
    "gcp:nearline":
      "Akses bulanan. Minimum 30 hari, 0.01 $ setiap GB untuk pengambilan semula.",
    "gcp:coldline":
      "Akses suku tahunan. Minimum 90 hari, 0.02 $ setiap GB untuk pengambilan semula.",
    "gcp:archive":
      "Akses tahunan. Minimum 365 hari, 0.05 $ setiap GB untuk pengambilan semula.",
    "firebase:standard":
      "Firebase dibina atas GCS Standard. Pelan Spark termasuk 5 GB percuma; Blaze dikenakan bayaran mengikut penggunaan.",
  },
};

export default ms;
