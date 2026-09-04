import type { UIStrings } from "./en";

/**
 * Spanish UI strings. Technical terms that Spanish-speaking IT professionals
 * use in English (RAID, NAS, codec, hot spare, egress) are kept in English on
 * purpose; translating them would make the pages harder to search for, not
 * easier to read. Neutral Latin American / peninsular wording throughout.
 */
const es: UIStrings = {
  site: {
    name: "Calculadoras de Almacenamiento",
    tagline:
      "Calculadoras gratuitas de RAID, NAS, CCTV y almacenamiento en la nube.",
  },

  nav: {
    calculators: "Calculadoras",
    about: "Acerca de",
    tryRaid: "Probar la calculadora RAID",
    openMenu: "Abrir el menú",
    language: "Idioma",
    chooseLanguage: "Elegir idioma",
  },

  category: {
    raid: "RAID",
    surveillance: "Videovigilancia y CCTV",
    nas: "NAS",
    cloud: "Almacenamiento en la nube",
    "self-storage": "Trasteros",
    specialty: "Especializadas",
  },

  common: {
    home: "Inicio",
    breadcrumb: "Ruta de navegación",
    openCalculator: "Abrir calculadora",
    calculatorCount: "{count} calculadora",
    calculatorCountPlural: "{count} calculadoras",
    relatedHeading: "Calculadoras relacionadas",
    faqHeading: "Preguntas frecuentes",
  },

  calcPage: {
    aboutHeading: "Sobre esta calculadora",
    formulaHeading: "La fórmula",
    useCasesHeading: "Casos de uso habituales",
    freeNoSignup: "Gratis, sin registro",
    privacyNote:
      "Esta calculadora funciona en tu navegador. Tus datos nunca salen de tu dispositivo. Los resultados son estimaciones; consulta nuestro",
    disclaimerLink: "descargo de responsabilidad",
    alsoKnownAs: "También conocida como",
  },

  home: {
    heroEyebrow: "{count} calculadoras de almacenamiento gratuitas",
    heroTitleLead: "Cálculos de almacenamiento,",
    heroTitleAccent: "resueltos al instante",
    heroSubtitle:
      "Calculadoras precisas de RAID, NAS, videovigilancia y almacenamiento en la nube, basadas en las especificaciones publicadas por los fabricantes. Sin registro, sin relleno y sin promesas exageradas.",
    heroCtaPrimary: "Empezar por RAID",
    heroCtaSecondary: "Ver todas las calculadoras",
    statCalculators: "Calculadoras",
    statCategories: "Categorías",
    statFreeValue: "0 €",
    statFree: "Siempre",
    statNoSignupValue: "Sin cuenta",
    statNoSignup: "Necesaria",
    previewCaption: "capacidad útil · resiste 2 fallos de disco",
    previewReadSpeed: "Velocidad de lectura",
    previewWriteSpeed: "Velocidad de escritura",
    previewEfficiency: "Eficiencia",
    previewUsable: "Útil 75 %",
    previewParity: "Paridad 25 %",
    trustStrip: "Cálculos basados en la documentación pública de",
    categoriesEyebrow: "Elige una categoría",
    categoriesTitle: "Seis familias, veinte calculadoras",
    categoriesSubtitle:
      "Cada calculadora responde a una búsqueda y a un público concretos. Elige la categoría que corresponda a lo que estás dimensionando.",
    featuredEyebrow: "Las más útiles",
    featuredTitle: "Calculadoras destacadas",
    featuredSeeAll: "Ver todas",
    whyEyebrow: "Por qué estas calculadoras",
    whyTitle: "Bien hechas y gratuitas",
    whySubtitle:
      "Las calculadoras de los fabricantes ocultan la fórmula e intentan venderte algo. Estas no.",
    feature1Title: "Fórmulas estándar del sector",
    feature1Body:
      "Cálculos tomados de la documentación pública de los fabricantes: Hikvision, Hanwha, Axis, AWS, Azure y GCP. Verificados con las cifras de dimensionamiento publicadas.",
    feature2Title: "Ajustes por fabricante",
    feature2Body:
      "La página de Hikvision usa H.265+ por defecto. UniFi parte de una G4 Pro a 4 MP. Azure arranca en Hot. Valores reales, no ejemplos de laboratorio.",
    feature3Title: "Instantáneas, sin registro",
    feature3Body:
      "Los cálculos se ejecutan en tu navegador mientras escribes. Sin cuentas, sin pedir el correo, sin seguimiento comercial.",
    feature4Title: "Privacidad primero",
    feature4Body:
      "Sitio estático, sin servidor y sin analítica hasta que la aceptes. Tus datos nunca salen de tu dispositivo.",
    feature5Title: "Comparaciones visuales",
    feature5Body:
      "Desglose de capacidad, gráficos de ahorro por códec y barras de coste por clase de almacenamiento. El compromiso se ve, no se lee.",
    feature6Title: "Adaptadas al móvil",
    feature6Body:
      "Todas las calculadoras funcionan en el teléfono. Útil cuando ya estás en la sala de servidores o en la instalación.",
    allEyebrow: "La biblioteca completa",
    allTitle: "Todas las calculadoras",
    allSubtitle:
      "Organizadas por categoría. Elige la que más se acerque a tu caso.",
    allEmpty: "Todavía no hay calculadoras",
    ctaTitle: "Encuentra la calculadora adecuada para tu necesidad de almacenamiento.",
    ctaBody:
      "Desde un NAS doméstico de 4 discos hasta racks de videovigilancia con 64 cámaras o archivos en la nube de varios petabytes, arriba hay una calculadora para ello.",
    ctaPrimary: "Abrir la calculadora RAID",
    ctaSecondary: "Explorar la biblioteca",
  },

  footer: {
    blurb:
      "Calculadoras gratuitas de RAID, videovigilancia, NAS y almacenamiento en la nube. Cálculos exactos, sin registro y sin seguimiento hasta que lo aceptes.",
    madeFor:
      "Hecho para administradores de sistemas, instaladores y cualquiera harto de las calculadoras de fabricante que esconden la fórmula.",
    categories: "Categorías",
    popular: "Populares",
    legal: "Legal",
    about: "Acerca de",
    disclaimer: "Descargo de responsabilidad",
    privacy: "Política de privacidad",
    cookies: "Política de cookies",
    terms: "Términos del servicio",
    sitemap: "Mapa del sitio",
    copyright:
      "© {year} StorageCalc. Todas las calculadoras son gratuitas. Los resultados son estimaciones. Consulta el",
    builtWith:
      "Hecho con Astro + Tailwind. Estático, rápido y respetuoso con la privacidad.",
  },

  cookies: {
    title: "Cookies y analítica",
    body: "Usamos Google Analytics para saber qué calculadoras resultan útiles y podemos mostrar anuncios de Google para mantener el sitio gratuito. No se recopila ningún dato personal. Consulta la",
    policyLink: "política de cookies",
    accept: "Aceptar",
    reject: "Rechazar",
    dismiss: "Cerrar",
  },

  feedback: {
    heading: "¿Has visto un error? ¿Tienes sugerencias?",
    subheading:
      "Cuéntanos qué falla en el cálculo, qué falta o qué mejoraría esta calculadora. Lo leemos todo.",
    openForm: "Abrir el formulario",
    close: "Cerrar",
    notConfiguredStrong: "El formulario aún no está configurado.",
    notConfiguredBody:
      "El propietario del sitio debe añadir una clave de acceso de Web3Forms en {env} como {key}.",
    typeLabel: "Tipo de comentario",
    typePlaceholder: "Elige una opción",
    typeMath: "Error de cálculo o de fórmula",
    typeMissing: "Función o campo que falta",
    typeVendor: "Especificación o precio de fabricante desactualizado",
    typeSuggestion: "Sugerencia o mejora",
    typeBug: "Fallo de interfaz o comportamiento incorrecto",
    typeOther: "Otro",
    emailLabel: "Tu correo electrónico",
    emailOptional: "(opcional)",
    emailPlaceholder: "tu@ejemplo.com",
    messageLabel: "Tu mensaje",
    messagePlaceholder:
      "¿Qué has encontrado? Sé concreto para que podamos corregirlo rápido.",
    messageHint:
      "No guardamos nada. El mensaje llega directamente a nuestro buzón.",
    submit: "Enviar comentario",
    submitting: "Enviando…",
    successStrong: "¡Gracias!",
    successBody:
      "Tu comentario ha llegado a nuestro buzón. Leemos todos los mensajes.",
    errorBody: "Algo ha fallado. Inténtalo de nuevo en un momento.",
  },

  widget: {
    inputs: "Parámetros",
    results: "Resultados",
    calculate: "Calcular",
    reset: "Restablecer",
    liveHint: "Los resultados se actualizan mientras escribes.",
    resultsRegion: "Resultados del cálculo",
    minimum: "Mínimo: {n}",

    raidLevel: "Nivel RAID",
    driveCount: "Número de discos",
    driveSize: "Tamaño de disco",
    driveSizeUnit: "Unidad de tamaño de disco",
    hotSpares: "Discos de reserva (hot spares)",
    hotSparesHelp:
      "Discos inactivos reservados para la reconstrucción automática.",
    stripeGroups: "Grupos de distribución",
    stripeGroupsHelp: "El RAID {level} distribuye los datos entre varios grupos.",
    usableCapacity: "Capacidad útil",
    usableOfRaw: "{percent} de la capacidad bruta",
    rawCapacity: "Capacidad bruta",
    faultTolerance: "Tolerancia a fallos",
    faultToleranceRange: "{min} a {max} discos",
    driveFailures: "{n} disco",
    driveFailuresPlural: "{n} discos",
    faultToleranceHint:
      "Fallos de disco que se pueden soportar, del peor al mejor de los casos.",
    readSpeed: "Velocidad de lectura",
    writeSpeed: "Velocidad de escritura",
    vsOneDrive: "frente a un solo disco",
    hotSpareReserve: "Reserva de discos de repuesto",
    arrayLayout: "Distribución del arreglo",
    arrayLayoutValue: "{groups} × {perGroup} discos",
    capacityBreakdown: "Desglose de la capacidad",
    capacityRaw: "{tb} TB brutos",
    capacityEmpty:
      "Introduce valores válidos para ver el desglose de la capacidad.",
    segUsable: "Útil",
    segParity: "Paridad",
    segMirror: "Espejo",
    segHotSpare: "Disco de reserva",
    capacityBreakdownAria: "Desglose de la capacidad: {segments}",

    cameraCount: "Número de cámaras",
    retention: "Retención",
    retentionHelp: "Cuántos días de grabación quieres conservar.",
    days: "días",
    resolution: "Resolución",
    frameRate: "Fotogramas por segundo",
    frameRateHelp:
      "Más fps = movimiento más fluido, pero más almacenamiento.",
    fps: "{n} fps",
    codec: "Códec",
    codecHelp: "Los códecs modernos reducen la tasa de bits entre un 50 y un 75 %.",
    recordingMode: "Modo de grabación",
    hoursPerDay: "Horas al día",
    hoursHelpMotion:
      "Franja activa; la detección de movimiento reduce aún más el tiempo grabado real.",
    hoursHelpScheduled: "Horas al día en que la programación está activa.",
    hoursHelpContinuous: "24 para grabación ininterrumpida.",
    vendorPresetApplied: "Ajuste de fabricante aplicado:",
    totalStorage: "Almacenamiento total necesario",
    totalStorageHint: "{cameras} × {days} días",
    cameraSingular: "{n} cámara",
    cameraPlural: "{n} cámaras",
    perCameraTotal: "Por cámara, en total",
    allCamerasPerDay: "Todas las cámaras, por día",
    bitratePerCamera: "Tasa de bits por cámara",
    bitrateHint: "{resolution} a {fps} fps, {codec}",
    recommendedDrive: "Disco recomendado",
    recommendedDriveHint:
      "Disco duro para videovigilancia (WD Purple, Seagate SkyHawk, etc.).",
    savedVsH264: "Ahorro frente a H.264",
    savedVsH264Hint: "Por elegir un códec más eficiente.",
    codecComparison: "Comparación de códecs",
    codecComparisonHint: "Mismas cámaras, misma retención, códec distinto.",

    cloudProvider: "Proveedor de nube",
    storageTier: "Clase de almacenamiento",
    storageAmount: "Volumen almacenado",
    storageUnit: "Unidad de volumen",
    monthlyEgress: "Salida de datos mensual",
    monthlyEgressHelp: "Datos descargados fuera de la nube cada mes.",
    writeRequests: "Solicitudes de escritura",
    writeRequestsHelp: "PUT, COPY, POST, LIST, por cada 1000 solicitudes.",
    readRequests: "Solicitudes de lectura",
    readRequestsHelp: "GET, SELECT, por cada 1000 solicitudes.",
    dataRetrieved: "Datos recuperados este mes",
    dataRetrievedHelp:
      "Las clases de archivo cobran por cada GB restaurado.",
    estimatedCost: "Coste estimado",
    estimatedCostRegion: "Coste mensual y anual estimado",
    monthlyCost: "Coste mensual",
    annualCost: "Coste anual",
    storageLine: "Almacenamiento",
    egressLine: "Salida de datos",
    writeOps: "Operaciones de escritura",
    readOps: "Operaciones de lectura",
    retrievalLine: "Recuperación",
    tierComparison: "Comparación de clases",
    tierComparisonHint:
      "Coste mensual de los mismos datos en cada clase de almacenamiento.",
    cheapest: "La más barata",
    selected: "Seleccionada",
    freeTierNote: "Nivel gratuito aplicado",

    gb: "GB",
    timesThousand: "× 1000",
    tierOption: "{label} ({price} $/GB/mes)",
    egressHelp: "Los primeros {gb} GB/mes hacia internet son gratuitos.",
    egressHint: "Por encima del nivel gratuito de {gb} GB.",
    retrievalHelp:
      "{tier} cobra {price} $/GB por recuperar datos del almacenamiento frío.",
    retrievalHint: "{price} $/GB desde {tier}",
    monthlyCostHint: "{gb} GB en {tier}",
    priceNoteStrong: "Nota:",
    priceNoteBody:
      "Los precios son las tarifas públicas de la región de EE. UU. más común a principios de 2025. El coste real varía según la región, los descuentos por compromiso de uso y las actualizaciones de los proveedores. Úsalo para estimar, no para facturar.",

    codecChartAria: "Comparación de almacenamiento entre códecs de vídeo",
    codecChartBody:
      "Los códecs inteligentes modernos (H.265+ / WiseStream II / Zipstream) reducen el almacenamiento en torno a un 75 % en escenas habituales, sin pérdida de calidad apreciable.",
    codecBaseline: "Referencia",
    codecSaving: "~{percent} % frente a H.264",
    tierChartAria:
      "Comparación del coste mensual entre clases de almacenamiento",
    tierChartBody:
      "Mover los datos de acceso poco frecuente a clases más frías puede reducir el coste de almacenamiento entre un 75 y un 95 %, a cambio de latencia de recuperación y tarifas de lectura por GB.",
    perMonth: "/mes",
    perGb: "/GB",
  },

  raidLevels: {
    "0": "RAID 0 (distribución por bandas)",
    "1": "RAID 1 (espejo)",
    "5": "RAID 5 (bandas + paridad)",
    "6": "RAID 6 (bandas + doble paridad)",
    "10": "RAID 10 (espejo + bandas)",
    "50": "RAID 50 (grupos RAID 5 distribuidos)",
    "60": "RAID 60 (grupos RAID 6 distribuidos)",
  },

  raidWarning: {
    minDrives: "El RAID {level} necesita al menos {min} discos.",
    afterSpares:
      "Tras {spares} disco(s) de reserva solo quedan {active} disco(s) activo(s); el RAID {level} necesita al menos {min}.",
    driveSize: "Introduce un tamaño de disco mayor que 0.",
    evenDrives:
      "El RAID 10 necesita un número par de discos activos; {lost} disco(s) sin usar.",
    groupsUneven:
      "El RAID {level} necesita {groups} grupos iguales de al menos {min} discos. {active} discos activos repartidos en {groups} grupos no forman conjuntos RAID {level} equilibrados.",
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
    "h265+": "H.265+ / códec inteligente (Zipstream, WiseStream II)",
  },

  recordingModes: {
    continuous: "Continua 24/7",
    motion: "Solo por detección de movimiento",
    scheduled: "Horario programado",
  },

  vendorNotes: {
    hikvision:
      "Las cámaras Hikvision de la serie DS-2CD suelen venir con H.265+ activado, lo que vuelve a reducir a la mitad el almacenamiento frente al H.265 normal.",
    hanwha:
      "Las cámaras Hanwha (Samsung) Wisenet usan WiseStream II, un códec inteligente con un rendimiento similar al H.265+ en escenas estáticas.",
    axis: "Las cámaras Axis con Zipstream logran una reducción de tasa de bits de entre el 50 y el 80 % según la actividad de la escena. El ajuste «H.265+» se aproxima a ese comportamiento.",
    genetec:
      "Los Archivers de Genetec Security Center suelen agrupar muchas cámaras con periodos de retención largos; los valores por defecto reflejan esa escala.",
    unifi:
      "Las cámaras UniFi Protect G4 y G5 usan H.265 a su resolución nativa. UniFi Protect borra automáticamente las grabaciones más antiguas cuando el disco se llena.",
  },

  tierNotes: {
    "aws:standard":
      "Clase por defecto. Acceso frecuente, latencia de milisegundos y durabilidad de once nueves.",
    "aws:standard-ia":
      "Acceso poco frecuente. Mínimo de 30 días de almacenamiento; tarifa de recuperación por GB.",
    "aws:one-zone-ia":
      "Acceso poco frecuente en una sola zona de disponibilidad. Un 20 % más barata que Standard-IA.",
    "aws:glacier-ir":
      "Recuperación en milisegundos, mínimo de 90 días y 0,03 $/GB de tarifa de recuperación.",
    "aws:glacier-flex":
      "Recuperación de minutos a horas, mínimo de 90 días.",
    "aws:glacier-deep":
      "La clase más barata. Recuperación en 12 horas o más, mínimo de 180 días.",
    "azure:hot":
      "Acceso frecuente. Clase por defecto para la mayoría de cargas de trabajo.",
    "azure:cool":
      "Acceso poco frecuente (≥ 30 días). Operaciones más caras y con tarifa de recuperación.",
    "azure:cold":
      "Acceso esporádico (≥ 90 días). Más barata que Cool, con un SLA más lento.",
    "azure:archive":
      "La más barata. Rehidratación de horas a un día. Los costes de lectura son elevadísimos.",
    "gcp:standard": "Acceso frecuente. Clase por defecto.",
    "gcp:nearline":
      "Acceso mensual. Mínimo de 30 días y 0,01 $/GB de recuperación.",
    "gcp:coldline":
      "Acceso trimestral. Mínimo de 90 días y 0,02 $/GB de recuperación.",
    "gcp:archive":
      "Acceso anual. Mínimo de 365 días y 0,05 $/GB de recuperación.",
    "firebase:standard":
      "Firebase se apoya en GCS Standard. El plan Spark incluye 5 GB gratis; Blaze se paga por uso.",
  },
};

export default es;
