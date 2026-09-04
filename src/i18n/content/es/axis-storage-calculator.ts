import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculadora-almacenamiento-axis",
  title: "Calculadora de almacenamiento Axis",
  description:
    "Calculadora de almacenamiento Axis con el ahorro de compresión Zipstream modelado. Los valores por defecto corresponden a las cámaras IP de las series P, Q y M en instalaciones reales.",
  tagline:
    "Dimensionamiento del almacenamiento de cámaras Axis con el ahorro de tasa de bits dinámica de Zipstream.",
  keywords: [
    "calculadora almacenamiento axis",
    "calculadora camara axis",
    "almacenamiento axis zipstream",
    "calcular almacenamiento axis communications",
  ],

  content: {
    intro:
      "Axis fue el primer fabricante en lanzar un códec inteligente (Zipstream, en 2015) y hoy está por todas partes en instalaciones corporativas y del sector público. Zipstream recorta entre un 50 y un 80 % de la tasa de bits según lo movida que sea la escena, y las escenas exteriores tranquilas son las que más se comprimen. Esta calculadora modela Zipstream como equivalente al H.265+ y parte de los ajustes habituales de las cámaras Axis serie P en 1080p a 25 fps. Úsala para dimensionar servidores de Axis Camera Station o cualquier NVR de terceros en una instalación con predominio de Axis.",
    formula:
      "<p><strong>Almacenamiento Axis</strong> = <code>(tasa de bits × 3600 / 8) × cámaras × horas × días</code></p>" +
      "<p>Zipstream es el controlador de tasa de bits propietario de Axis, sensible al contenido de la escena y construido tanto sobre H.264 como sobre H.265. Identifica las zonas relevantes desde el punto de vista forense (rostros, matrículas, movimiento) y conserva su detalle mientras comprime con fuerza los fondos estáticos. El ahorro neto frente al H.264 va del 50 al 80 %: las escenas exteriores tranquilas (aparcamientos de noche) son las más beneficiadas y las comerciales o de transporte, las que menos.</p>",
    useCases: [
      "Dimensionar el almacenamiento de un servidor de grabación Axis Camera Station (ACS)",
      "Planificar el almacenamiento de grabadores Axis serie S o de NVR de terceros compatibles con Axis",
      "Comparar el ahorro de Zipstream frente al H.265 solo antes de activarlo en cámaras existentes",
      "Dimensionar la capacidad de AXIS Camera Station Edge y de los equipos S22",
    ],
  },

  faqs: [
    {
      question: "¿Qué es Axis Zipstream?",
      answer:
        "Zipstream es la tecnología de códec inteligente de Axis, disponible en la mayoría de las cámaras actuales de las series P, Q y M. Superpone un controlador de tasa de bits sensible a la escena sobre H.264 o H.265: identifica las zonas de interés (rostros, matrículas, objetos en movimiento) y las mantiene en alta calidad mientras reduce el detalle de los fondos estáticos. El flujo resultante cumple por completo con H.264/H.265, así que cualquier grabador compatible puede reproducirlo.",
    },
    {
      question: "¿Cuánto almacenamiento ahorra Zipstream?",
      answer:
        "Axis publica ahorros de entre el 50 y el 80 % frente al H.264 o H.265 estándar, según la actividad de la escena. El preajuste «H.265+ / códec inteligente» de la calculadora modela una reducción del 75 %, que se aproxima a una escena urbana de vigilancia típica. En vistas mayoritariamente estáticas (patios industriales, oficinas fuera de horario), Zipstream puede rendir más; en escenas dinámicas (superficies comerciales, estaciones), cuenta con un 50-60 %.",
    },
    {
      question: "¿Zipstream necesita equipos de grabación especiales?",
      answer:
        "No. Los flujos codificados con Zipstream son H.264 o H.265 estándar y se reproducen en cualquier NVR, VMS o reproductor compatible. La compresión inteligente ocurre íntegramente en la cámara, lo que convierte a las cámaras Axis en una buena opción para instalaciones con equipos de varias marcas en las que quieras conservar sistemas de grabación de terceros.",
    },
    {
      question:
        "¿Qué implicación tienen las cámaras multisensor de Axis en el almacenamiento?",
      answer:
        "Las cámaras multisensor de Axis (Q3819-PVE, Q6010-E, P3727-PLE) aparecen como varios flujos independientes, normalmente 2 o 4 sensores por cámara. Indica como número de cámaras el total de sensores, no el de carcasas físicas. Cada sensor graba a su propia resolución y consume su propio ancho de banda y almacenamiento.",
    },
    {
      question: "¿Cómo se activa Zipstream en las cámaras Axis?",
      answer:
        "Desde la interfaz web de la cámara (o mediante AXIS Device Manager): Vídeo → Perfil de flujo → Zipstream → elige la intensidad (baja, media, alta, superior o extrema). «Media» es lo habitual para vigilancia general; «alta» o «superior» encajan en zonas con patrones de actividad predecibles. Ten en cuenta que Zipstream viene activado por defecto en la mayoría de los firmwares recientes de Axis, así que compruébalo antes de dar por hecho lo contrario.",
    },
    {
      question:
        "¿Qué disco se recomienda para un servidor de AXIS Camera Station?",
      answer:
        "AXIS Camera Station admite cualquier disco para videovigilancia: WD Purple, Seagate SkyHawk o discos NAS profesionales (WD Red Pro, Seagate IronWolf Pro). En instalaciones ACS con varios servidores y muchas cámaras (más de 50) se recomienda almacenamiento NAS o SAN empresarial por su fiabilidad y sus IOPS adicionales. La calculadora ofrece el requisito de capacidad bruta; para el dimensionamiento en IOPS, consulta la documentación de ACS.",
    },
  ],
};

export default translation;
