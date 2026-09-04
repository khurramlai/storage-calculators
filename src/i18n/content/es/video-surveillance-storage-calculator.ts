import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculadora-almacenamiento-videovigilancia",
  title: "Calculadora de almacenamiento para videovigilancia",
  description:
    "Calculadora de almacenamiento para videovigilancia con cámaras IP, NVR y DVR. Admite H.264, H.265, códecs inteligentes, grabación por movimiento y cualquier número de cámaras o retención.",
  tagline:
    "Dimensiona el almacenamiento de tus grabaciones: cualquier cámara, cualquier códec, cualquier retención.",
  keywords: [
    "calculadora almacenamiento videovigilancia",
    "calcular almacenamiento videovigilancia",
    "calculadora videovigilancia",
    "dimensionar almacenamiento videovigilancia",
  ],

  content: {
    intro:
      "Planificar el almacenamiento de un sistema de videovigilancia se reduce a una fórmula: tasa de bits × cámaras × horas × días. Lo difícil no es el cálculo, sino acertar con la tasa de bits, que depende de la resolución, los fotogramas por segundo, el códec y la actividad de la escena. Esta calculadora estima una tasa razonable a partir de las características de tus cámaras y aplica el ahorro de los códecs inteligentes (H.265+, WiseStream II, Zipstream) cuando corresponde. Obtendrás una cifra de almacenamiento y un disco para videovigilancia recomendado.",
    formula:
      "<p><strong>Almacenamiento total</strong> = <code>(tasa de bits × 3600 / 8) × cámaras × horas_al_día × días_de_retención</code></p>" +
      "<p>La tasa de bits se expresa en bits por segundo. La calculadora la estima a partir de la resolución, los fotogramas y el códec, usando las tablas publicadas por Hikvision, Hanwha y Axis. Elige un códec inteligente para modelar el ahorro de H.265+, WiseStream II o Zipstream (en torno a un 75 % menos que H.264).</p>" +
      "<p>La <strong>grabación por movimiento</strong> aplica un ciclo de actividad del 40 % a las horas de grabación, un valor típico de una detección bien ajustada en cámaras de exterior.</p>",
    useCases: [
      "Dimensionar un NVR antes de comprarlo para que la capacidad se ajuste de verdad a la retención deseada",
      "Comparar códecs para justificar el paso a H.265 o H.265+",
      "Planificar videovigilancia multisede con distinto número de cámaras por emplazamiento",
      "Presupuestar discos para videovigilancia como los WD Purple o Seagate SkyHawk",
    ],
  },

  faqs: [
    {
      question: "¿Cuánto almacenamiento necesita una sola cámara?",
      answer:
        "Una cámara 1080p en H.265 a 25 fps grabando de forma continua genera unos 22 GB al día, cerca de 660 GB al mes. Esa misma cámara con H.265+ (códec inteligente) baja a unos 5 GB diarios. En 4K con H.264 se pueden alcanzar 170 GB al día por cámara: la elección del códec pesa más que cualquier otro factor.",
    },
    {
      question: "¿Qué diferencia hay entre H.264, H.265 y H.265+?",
      answer:
        "El H.264 es la referencia clásica. El H.265 (HEVC) logra una calidad visual equivalente con la mitad de tasa de bits. El H.265+ (Hikvision), WiseStream II (Hanwha) y Zipstream (Axis) son variantes «inteligentes» que detectan las zonas con movimiento y reducen aún más la tasa en las partes estáticas, alrededor de un 50 % adicional sobre el H.265, lo que se traduce en archivos un 75 % más pequeños que en H.264.",
    },
    {
      question: "¿Conviene usar discos duros específicos para videovigilancia?",
      answer:
        "Sí. Los discos de escritorio están pensados para unas 8 horas de uso diario y se desgastan rápido bajo cargas de escritura continua. Los discos de videovigilancia (WD Purple, Seagate SkyHawk) están certificados para escritura permanente, resisten las vibraciones de las bahías con varios discos y están optimizados para flujos continuos con baja latencia de rotación.",
    },
    {
      question: "¿De verdad ahorra tanto la grabación por movimiento?",
      answer:
        "Sí: en la mayoría de los entornos la actividad real ocupa entre un 10 y un 40 % de las 24 horas. El preajuste de movimiento de la calculadora asume un ciclo del 40 %, algo prudente. La grabación por eventos inteligentes (solo al detectar personas o vehículos, y no cualquier movimiento) puede reducirlo por debajo del 10 %.",
    },
    {
      question: "¿Cómo calcula la tasa de bits esta herramienta?",
      answer:
        "La calculadora parte de una tabla de tasas de bits H.264 de referencia a 25 fps para cada resolución (tomada de la documentación pública de dimensionamiento de Hikvision, Hanwha y Axis), la escala de forma lineal según los fotogramas por segundo y aplica el multiplicador de eficiencia del códec. La tasa resultante se muestra entre los resultados para que puedas contrastarla con la ficha técnica de tu cámara.",
    },
    {
      question: "¿Qué periodo de retención es el habitual?",
      answer:
        "30 días es el requisito más común en instalaciones comerciales. Algunas normativas exigen más (60 o 90 días). La banca, el juego y las infraestructuras críticas suelen conservar más de un año. Una instalación doméstica puede quedarse en 7 días. La calculadora usa 30 días por defecto.",
    },
  ],
};

export default translation;
