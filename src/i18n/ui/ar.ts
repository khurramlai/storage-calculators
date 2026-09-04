import type { UIStrings } from "./en";

/**
 * Arabic UI strings. This is the first RTL locale: the layout flips via
 * dir="rtl" on <html> (see LOCALE_META), and global.css names a system Arabic
 * font stack plus bidi isolation for code and measured values.
 *
 * Latin technical terms and product names (RAID, NAS, NVR, H.265, WD Purple,
 * S3) are kept in Latin script on purpose. That is how they are written in
 * Arabic technical writing and how they are typed into search.
 */
const ar: UIStrings = {
  site: {
    name: "حاسبات التخزين",
    tagline:
      "حاسبات مجانية لأنظمة RAID وNAS وكاميرات المراقبة والتخزين السحابي.",
  },

  nav: {
    calculators: "الحاسبات",
    about: "من نحن",
    tryRaid: "جرّب حاسبة RAID",
    openMenu: "فتح القائمة",
    language: "اللغة",
    chooseLanguage: "اختر اللغة",
  },

  category: {
    raid: "RAID",
    surveillance: "المراقبة وCCTV",
    nas: "NAS",
    cloud: "التخزين السحابي",
    "self-storage": "مستودعات التخزين",
    specialty: "حاسبات متخصصة",
  },

  common: {
    home: "الرئيسية",
    breadcrumb: "مسار التصفح",
    openCalculator: "فتح الحاسبة",
    calculatorCount: "حاسبة واحدة",
    calculatorCountPlural: "{count} حاسبة",
    relatedHeading: "حاسبات ذات صلة",
    faqHeading: "الأسئلة الشائعة",
  },

  calcPage: {
    aboutHeading: "عن هذه الحاسبة",
    formulaHeading: "المعادلة",
    useCasesHeading: "حالات الاستخدام الشائعة",
    freeNoSignup: "مجانية وبدون تسجيل",
    privacyNote:
      "تعمل هذه الحاسبة داخل متصفحك، ولا تغادر بياناتك جهازك إطلاقًا. النتائج تقديرية، راجع",
    disclaimerLink: "إخلاء المسؤولية",
    alsoKnownAs: "تُعرف أيضًا باسم",
  },

  home: {
    heroEyebrow: "{count} حاسبة تخزين مجانية",
    heroTitleLead: "حسابات التخزين،",
    heroTitleAccent: "بنتيجة فورية",
    heroSubtitle:
      "حاسبات دقيقة لأنظمة RAID وNAS وكاميرات المراقبة والتخزين السحابي، مبنية على المواصفات المنشورة من الشركات المصنّعة. بلا تسجيل وبلا حشو وبلا وعود مبالغ فيها.",
    heroCtaPrimary: "ابدأ بحاسبة RAID",
    heroCtaSecondary: "تصفّح جميع الحاسبات",
    statCalculators: "حاسبة",
    statCategories: "فئات",
    statFreeValue: "0 $",
    statFree: "دائمًا",
    statNoSignupValue: "بلا حساب",
    statNoSignup: "مطلوب",
    previewCaption: "السعة القابلة للاستخدام · يتحمّل عطل قرصين",
    previewReadSpeed: "سرعة القراءة",
    previewWriteSpeed: "سرعة الكتابة",
    previewEfficiency: "الكفاءة",
    previewUsable: "قابل للاستخدام 75%",
    previewParity: "تكافؤ 25%",
    trustStrip: "حسابات مستندة إلى الوثائق العامة لـ",
    categoriesEyebrow: "اختر فئة",
    categoriesTitle: "ست مجموعات، عشرون حاسبة",
    categoriesSubtitle:
      "كل حاسبة موجّهة لغرض وجمهور محدّدين. اختر الفئة التي تناسب ما تقوم بحسابه.",
    featuredEyebrow: "الأكثر فائدة",
    featuredTitle: "حاسبات مختارة",
    featuredSeeAll: "عرض الكل",
    whyEyebrow: "لماذا هذه الحاسبات",
    whyTitle: "مصنوعة بإتقان ومجانية دائمًا",
    whySubtitle:
      "حاسبات الشركات المصنّعة تخفي المعادلة وتحاول بيعك شيئًا. هذه الحاسبات لا تفعل ذلك.",
    feature1Title: "معادلات معتمدة في القطاع",
    feature1Body:
      "حسابات مستمدة من الوثائق العامة للشركات المصنّعة: Hikvision وHanwha وAxis وAWS وAzure وGCP، ومقارنة بأرقام التخطيط المنشورة.",
    feature2Title: "إعدادات مسبقة حسب الشركة المصنّعة",
    feature2Body:
      "صفحة Hikvision تعتمد H.265+ افتراضيًا، وUniFi تبدأ من G4 Pro بدقة 4 ميغابكسل، وAzure تبدأ من فئة Hot. قيم واقعية لا أمثلة نظرية.",
    feature3Title: "نتائج فورية بلا تسجيل",
    feature3Body:
      "تُنفَّذ الحسابات داخل متصفحك أثناء الكتابة. بلا حسابات وبلا طلب بريد إلكتروني وبلا متابعة تسويقية.",
    feature4Title: "الخصوصية أولًا",
    feature4Body:
      "موقع ثابت بلا خادم خلفي وبلا تحليلات قبل موافقتك. بياناتك لا تغادر جهازك.",
    feature5Title: "مقارنات مرئية",
    feature5Body:
      "توزيع السعة ورسوم توفير الترميز وأعمدة التكلفة لكل فئة تخزين. ترى المفاضلة بدل أن تقرأ عنها.",
    feature6Title: "متوافقة مع الهاتف",
    feature6Body:
      "جميع الحاسبات تعمل على الهاتف، وهو أمر عملي حين تكون أصلًا في غرفة الخوادم أو في موقع التركيب.",
    allEyebrow: "المكتبة الكاملة",
    allTitle: "جميع الحاسبات",
    allSubtitle: "مرتّبة حسب الفئة. اختر الأقرب إلى حالتك.",
    allEmpty: "لا توجد حاسبات بعد",
    ctaTitle: "اعثر على الحاسبة المناسبة لاحتياجك من التخزين.",
    ctaBody:
      "من جهاز NAS منزلي بأربعة أقراص إلى أنظمة مراقبة بـ64 كاميرا وصولًا إلى أرشيفات سحابية بحجم عدة بيتابايت، ستجد أعلاه حاسبة تناسب ذلك.",
    ctaPrimary: "فتح حاسبة RAID",
    ctaSecondary: "تصفّح المكتبة",
  },

  footer: {
    blurb:
      "حاسبات مجانية لأنظمة RAID والمراقبة وNAS والتخزين السحابي. حسابات دقيقة، بلا تسجيل وبلا تتبّع قبل موافقتك.",
    madeFor:
      "صُمّمت لمديري الأنظمة وفنيي التركيب ولكل من سئم حاسبات الشركات المصنّعة التي تخفي المعادلة.",
    categories: "الفئات",
    popular: "الأكثر استخدامًا",
    legal: "الشؤون القانونية",
    about: "من نحن",
    disclaimer: "إخلاء المسؤولية",
    privacy: "سياسة الخصوصية",
    cookies: "سياسة ملفات تعريف الارتباط",
    terms: "شروط الاستخدام",
    sitemap: "خريطة الموقع",
    copyright:
      "© {year} StorageCalc. جميع الحاسبات مجانية والنتائج تقديرية. راجع",
    builtWith:
      "مبني باستخدام Astro وTailwind. موقع ثابت وسريع ويحترم الخصوصية.",
  },

  cookies: {
    title: "ملفات تعريف الارتباط والتحليلات",
    body: "نستخدم Google Analytics لمعرفة الحاسبات المفيدة، وقد نعرض إعلانات Google للإبقاء على الموقع مجانيًا. لا نجمع أي بيانات شخصية. راجع",
    policyLink: "سياسة ملفات تعريف الارتباط",
    accept: "أوافق",
    reject: "أرفض",
    dismiss: "إغلاق",
  },

  feedback: {
    heading: "وجدت خطأ؟ لديك ملاحظة؟",
    subheading:
      "أخبرنا بما هو خطأ في الحساب أو بما ينقص أو بما يجعل هذه الحاسبة أفضل. نقرأ كل الرسائل.",
    openForm: "فتح النموذج",
    close: "إغلاق",
    notConfiguredStrong: "لم يُضبط النموذج بعد.",
    notConfiguredBody:
      "على مالك الموقع إضافة مفتاح وصول Web3Forms في {env} باسم {key}.",
    typeLabel: "نوع الملاحظة",
    typePlaceholder: "اختر خيارًا",
    typeMath: "خطأ في الحساب أو المعادلة",
    typeMissing: "خاصية أو حقل ناقص",
    typeVendor: "مواصفة أو سعر قديم من الشركة المصنّعة",
    typeSuggestion: "اقتراح أو تحسين",
    typeBug: "خلل في الواجهة أو سلوك غير صحيح",
    typeOther: "أخرى",
    emailLabel: "بريدك الإلكتروني",
    emailOptional: "(اختياري)",
    emailPlaceholder: "you@example.com",
    messageLabel: "رسالتك",
    messagePlaceholder: "ماذا وجدت؟ كن دقيقًا حتى نتمكّن من إصلاحه بسرعة.",
    messageHint: "لا نخزّن هذه الرسالة في أي مكان، بل تصل مباشرة إلى بريدنا.",
    submit: "إرسال الملاحظة",
    submitting: "جارٍ الإرسال…",
    successStrong: "شكرًا لك!",
    successBody: "وصلت ملاحظتك إلى بريدنا، ونحن نقرأ كل رسالة.",
    errorBody: "حدث خطأ ما. يُرجى المحاولة مجددًا بعد قليل.",
  },

  widget: {
    inputs: "المدخلات",
    results: "النتائج",
    calculate: "احسب",
    reset: "إعادة تعيين",
    liveHint: "تتحدّث النتائج تلقائيًا أثناء الكتابة.",
    resultsRegion: "نتائج الحساب",
    minimum: "الحد الأدنى: {n}",

    raidLevel: "مستوى RAID",
    driveCount: "عدد الأقراص",
    driveSize: "سعة القرص",
    driveSizeUnit: "وحدة سعة القرص",
    hotSpares: "أقراص احتياطية (Hot Spares)",
    hotSparesHelp: "أقراص خاملة مخصّصة لإعادة البناء التلقائي.",
    stripeGroups: "مجموعات التوزيع",
    stripeGroupsHelp: "يوزّع RAID {level} البيانات على عدة مجموعات.",
    usableCapacity: "السعة القابلة للاستخدام",
    usableOfRaw: "{percent} من السعة الخام",
    rawCapacity: "السعة الخام",
    faultTolerance: "تحمّل الأعطال",
    faultToleranceRange: "من {min} إلى {max} أقراص",
    driveFailures: "قرص واحد",
    driveFailuresPlural: "{n} أقراص",
    faultToleranceHint:
      "عدد أعطال الأقراص التي يتحمّلها النظام، من أسوأ الحالات إلى أفضلها.",
    readSpeed: "سرعة القراءة",
    writeSpeed: "سرعة الكتابة",
    vsOneDrive: "مقارنة بقرص واحد",
    hotSpareReserve: "احتياطي الأقراص البديلة",
    arrayLayout: "بنية المصفوفة",
    arrayLayoutValue: "{groups} × {perGroup} أقراص",
    capacityBreakdown: "توزيع السعة",
    capacityRaw: "{tb} TB خام",
    capacityEmpty: "أدخل قيمًا صحيحة لعرض توزيع السعة.",
    segUsable: "قابل للاستخدام",
    segParity: "تكافؤ",
    segMirror: "نسخ مطابق",
    segHotSpare: "قرص احتياطي",
    capacityBreakdownAria: "توزيع السعة: {segments}",

    cameraCount: "عدد الكاميرات",
    retention: "مدة الاحتفاظ",
    retentionHelp: "عدد أيام التسجيل التي تريد الاحتفاظ بها.",
    days: "يومًا",
    resolution: "الدقة",
    frameRate: "معدل الإطارات",
    frameRateHelp: "معدل إطارات أعلى يعني حركة أنعم ومساحة تخزين أكبر.",
    fps: "{n} إطار/ث",
    codec: "الترميز",
    codecHelp: "تقلّل أنظمة الترميز الحديثة معدل البت بنسبة 50 إلى 75%.",
    recordingMode: "وضع التسجيل",
    hoursPerDay: "ساعات التسجيل يوميًا",
    hoursHelpMotion:
      "فترة التشغيل النشطة؛ التسجيل عند الحركة يقلّل زمن التسجيل الفعلي أكثر.",
    hoursHelpScheduled: "عدد الساعات اليومية التي يعمل فيها الجدول الزمني.",
    hoursHelpContinuous: "أدخل 24 للتسجيل المتواصل على مدار الساعة.",
    vendorPresetApplied: "تم تطبيق إعداد الشركة المصنّعة:",
    totalStorage: "إجمالي التخزين المطلوب",
    totalStorageHint: "{cameras} × {days} يومًا",
    cameraSingular: "كاميرا واحدة",
    cameraPlural: "{n} كاميرا",
    perCameraTotal: "لكل كاميرا، الإجمالي",
    allCamerasPerDay: "جميع الكاميرات، يوميًا",
    bitratePerCamera: "معدل البت لكل كاميرا",
    bitrateHint: "{resolution} عند {fps} إطار/ث، {codec}",
    recommendedDrive: "القرص الموصى به",
    recommendedDriveHint:
      "قرص صلب مخصّص للمراقبة (مثل WD Purple أو Seagate SkyHawk).",
    savedVsH264: "التوفير مقارنة بـ H.264",
    savedVsH264Hint: "نتيجة اختيار ترميز أكثر كفاءة.",
    codecComparison: "مقارنة أنظمة الترميز",
    codecComparisonHint: "الكاميرات نفسها ومدة الاحتفاظ نفسها بترميز مختلف.",

    cloudProvider: "مزوّد الخدمة السحابية",
    storageTier: "فئة التخزين",
    storageAmount: "حجم التخزين",
    storageUnit: "وحدة حجم التخزين",
    monthlyEgress: "بيانات صادرة شهريًا",
    monthlyEgressHelp: "البيانات التي تُنزَّل من السحابة كل شهر.",
    writeRequests: "طلبات الكتابة",
    writeRequestsHelp: "PUT وCOPY وPOST وLIST، لكل 1000 طلب.",
    readRequests: "طلبات القراءة",
    readRequestsHelp: "GET وSELECT، لكل 1000 طلب.",
    dataRetrieved: "البيانات المستعادة هذا الشهر",
    dataRetrievedHelp: "فئات الأرشفة تحتسب رسومًا عن كل غيغابايت مستعاد.",
    estimatedCost: "التكلفة التقديرية",
    estimatedCostRegion: "التكلفة الشهرية والسنوية التقديرية",
    monthlyCost: "التكلفة الشهرية",
    annualCost: "التكلفة السنوية",
    storageLine: "التخزين",
    egressLine: "البيانات الصادرة",
    writeOps: "عمليات الكتابة",
    readOps: "عمليات القراءة",
    retrievalLine: "الاستعادة",
    tierComparison: "مقارنة فئات التخزين",
    tierComparisonHint: "التكلفة الشهرية للبيانات نفسها في كل فئة تخزين.",
    cheapest: "الأقل تكلفة",
    selected: "المحدّدة",
    freeTierNote: "طُبّقت الحصة المجانية",

    gb: "GB",
    timesThousand: "× 1000",
    tierOption: "{label} ({price} $/GB/شهر)",
    egressHelp: "أول {gb} غيغابايت شهريًا إلى الإنترنت مجانية.",
    egressHint: "بعد الحصة المجانية البالغة {gb} غيغابايت.",
    retrievalHelp:
      "تحتسب {tier} مبلغ {price} $ لكل غيغابايت لاستعادة البيانات من التخزين البارد.",
    retrievalHint: "{price} $/GB من {tier}",
    monthlyCostHint: "{gb} غيغابايت في {tier}",
    priceNoteStrong: "ملاحظة:",
    priceNoteBody:
      "الأسعار المذكورة هي الأسعار المعلنة لأكثر مناطق الولايات المتحدة استخدامًا في مطلع 2025. تختلف التكلفة الفعلية حسب المنطقة وخصومات الالتزام وتحديثات المزوّدين. استخدمها للتقدير لا للفوترة.",

    codecChartAria: "مقارنة التخزين بين أنظمة ترميز الفيديو",
    codecChartBody:
      "تقلّل أنظمة الترميز الذكية الحديثة (H.265+ وWiseStream II وZipstream) حجم التخزين بنحو 75% في المشاهد الاعتيادية دون فقد ملحوظ في الجودة.",
    codecBaseline: "المرجع",
    codecSaving: "~{percent}% مقارنة بـ H.264",
    tierChartAria: "مقارنة التكلفة الشهرية بين فئات التخزين",
    tierChartBody:
      "نقل البيانات نادرة الاستخدام إلى فئات أبرد يخفض تكلفة التخزين بنسبة 75 إلى 95%، مقابل زمن استعادة أطول ورسوم قراءة لكل غيغابايت.",
    perMonth: "/شهر",
    perGb: "/GB",
  },

  raidLevels: {
    "0": "RAID 0 (توزيع بالشرائح)",
    "1": "RAID 1 (نسخ مطابق)",
    "5": "RAID 5 (شرائح مع تكافؤ)",
    "6": "RAID 6 (شرائح مع تكافؤ مزدوج)",
    "10": "RAID 10 (نسخ مطابق مع شرائح)",
    "50": "RAID 50 (مجموعات RAID 5 موزّعة)",
    "60": "RAID 60 (مجموعات RAID 6 موزّعة)",
  },

  raidWarning: {
    minDrives: "يتطلّب RAID {level} ما لا يقل عن {min} أقراص.",
    afterSpares:
      "بعد تخصيص {spares} قرصًا احتياطيًا، يتبقّى {active} قرصًا نشطًا فقط، بينما يتطلّب RAID {level} ما لا يقل عن {min}.",
    driveSize: "أدخل سعة قرص أكبر من صفر.",
    evenDrives:
      "يتطلّب RAID 10 عددًا زوجيًا من الأقراص النشطة، وسيبقى {lost} قرصًا دون استخدام.",
    groupsUneven:
      "يتطلّب RAID {level} عدد {groups} مجموعات متساوية لا تقل كل منها عن {min} أقراص. لا يمكن توزيع {active} قرصًا نشطًا على {groups} مجموعات بالتساوي ضمن مجموعات RAID {level}.",
  },

  resolutions: {
    "480p": "480p (D1 / 0.4 ميغابكسل)",
    "720p": "720p (1 ميغابكسل)",
    "1080p": "1080p (2 ميغابكسل)",
    "3MP": "3 ميغابكسل",
    "4MP": "4 ميغابكسل",
    "5MP": "5 ميغابكسل",
    "4K": "4K (8 ميغابكسل)",
  },

  codecs: {
    h264: "H.264",
    h265: "H.265 / HEVC",
    "h265+": "H.265+ / ترميز ذكي (Zipstream وWiseStream II)",
  },

  recordingModes: {
    continuous: "تسجيل متواصل على مدار الساعة",
    motion: "عند اكتشاف الحركة فقط",
    scheduled: "وفق جدول زمني",
  },

  vendorNotes: {
    hikvision:
      "تأتي كاميرات Hikvision من سلسلة DS-2CD عادةً مع تفعيل H.265+، ما يخفض مساحة التخزين إلى النصف مجددًا مقارنة بـ H.265 العادي.",
    hanwha:
      "تستخدم كاميرات Hanwha (Samsung) من سلسلة Wisenet تقنية WiseStream II، وهي ترميز ذكي أداؤه قريب من H.265+ في المشاهد الثابتة.",
    axis: "تحقّق كاميرات Axis المزوّدة بتقنية Zipstream خفضًا في معدل البت يتراوح بين 50 و80% تبعًا لحركة المشهد، والإعداد المسبق «H.265+» يقارب هذا السلوك.",
    genetec:
      "تجمع أنظمة Genetec Security Center Archiver عادةً عددًا كبيرًا من الكاميرات مع مدد احتفاظ طويلة، والقيم الافتراضية تعكس هذا الحجم.",
    unifi:
      "تستخدم كاميرات UniFi Protect من سلسلتي G4 وG5 ترميز H.265 بالدقة الأصلية، ويحذف UniFi Protect التسجيلات الأقدم تلقائيًا عند امتلاء القرص.",
  },

  tierNotes: {
    "aws:standard":
      "الفئة الافتراضية. وصول متكرّر وزمن استجابة بالمللي ثانية ومتانة بأحد عشر تسعة.",
    "aws:standard-ia":
      "وصول غير متكرّر. حد أدنى للتخزين 30 يومًا، مع رسوم استعادة لكل غيغابايت.",
    "aws:one-zone-ia":
      "وصول غير متكرّر ضمن منطقة توفّر واحدة. أرخص بنحو 20% من Standard-IA.",
    "aws:glacier-ir":
      "استعادة بالمللي ثانية، بحد أدنى 90 يومًا ورسوم استعادة 0.03 $ لكل غيغابايت.",
    "aws:glacier-flex":
      "استعادة خلال دقائق إلى ساعات، بحد أدنى 90 يومًا.",
    "aws:glacier-deep":
      "الفئة الأقل تكلفة. استعادة خلال 12 ساعة أو أكثر، بحد أدنى 180 يومًا.",
    "azure:hot":
      "وصول متكرّر. الفئة الافتراضية لمعظم أحمال العمل.",
    "azure:cool":
      "وصول غير متكرّر (30 يومًا فأكثر). تكاليف عمليات أعلى مع رسوم استعادة.",
    "azure:cold":
      "وصول نادر (90 يومًا فأكثر). أرخص من Cool مع اتفاقية مستوى خدمة أبطأ.",
    "azure:archive":
      "الأقل تكلفة. إعادة التهيئة تستغرق ساعات إلى يوم، وتكاليف القراءة مرتفعة جدًا.",
    "gcp:standard": "وصول متكرّر. الفئة الافتراضية.",
    "gcp:nearline":
      "وصول شهري. حد أدنى 30 يومًا ورسوم استعادة 0.01 $ لكل غيغابايت.",
    "gcp:coldline":
      "وصول ربع سنوي. حد أدنى 90 يومًا ورسوم استعادة 0.02 $ لكل غيغابايت.",
    "gcp:archive":
      "وصول سنوي. حد أدنى 365 يومًا ورسوم استعادة 0.05 $ لكل غيغابايت.",
    "firebase:standard":
      "يعتمد Firebase على GCS Standard. خطة Spark تشمل 5 غيغابايت مجانًا، بينما تُحتسب خطة Blaze حسب الاستخدام.",
  },
};

export default ar;
