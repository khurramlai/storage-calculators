import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculadora-almacenamiento-hikvision",
  title: "Calculadora de almacenamiento Hikvision",
  description:
    "Calculadora de almacenamiento Hikvision ajustada al códec inteligente H.265+ y a los valores por defecto de las cámaras DS-2CD. Dimensiona los discos de los NVR DS-76xx, DS-77xx o DS-96xx en segundos.",
  tagline:
    "Dimensionamiento ajustado al códec inteligente H.265+ de Hikvision y a los valores por defecto de las cámaras DS-2CD.",
  keywords: [
    "calculadora almacenamiento hikvision",
    "calculadora hikvision",
    "calculadora nvr hikvision",
    "calcular almacenamiento hikvision h265+",
  ],

  content: {
    intro:
      "El códec inteligente H.265+ de Hikvision es uno de los más eficientes del mercado de la videovigilancia: recorta cerca de un 75 % el tamaño de los archivos frente al H.264 en la misma escena. Esta calculadora parte de los ajustes habituales de las cámaras Hikvision DS-2CD: 1080p, 25 fps, H.265+ y grabación continua 24/7. Los cálculos siguen las especificaciones de dimensionamiento publicadas por Hikvision. Si estás dimensionando los discos de un NVR DS-76xx, DS-77xx o DS-96xx, la capacidad recomendada encaja con las configuraciones de bahías habituales de esos chasis.",
    formula:
      "<p><strong>Almacenamiento Hikvision</strong> = <code>(tasa de bits × 3600 / 8) × cámaras × horas × días</code></p>" +
      "<p>El codificador H.265+ de Hikvision analiza cada fotograma y reduce la tasa de bits en las zonas estáticas (fondos, cielo, paredes) conservando la calidad en todo lo que se mueve. El resultado es alrededor de un 75 % menos de tasa que en H.264 y un 50 % menos que en H.265 estándar en escenas habituales. Eso es lo que modela la opción H.265+ de la calculadora.</p>",
    useCases: [
      "Dimensionar los discos de los NVR Hikvision de las series DS-76xx, DS-77xx y DS-96xx",
      "Planificar una instalación íntegramente Hikvision con varios modelos de cámaras DS-2CD",
      "Comparar el ahorro del H.265+ para justificar la sustitución de cámaras H.264 antiguas",
      "Contrastar la estimación de almacenamiento de un instalador Hikvision con el cálculo real",
    ],
  },

  faqs: [
    {
      question:
        "¿Qué diferencia hay entre H.265 y H.265+ en las cámaras Hikvision?",
      answer:
        "El H.265 (HEVC) es el códec de vídeo internacional, en torno a un 50 % más eficiente que el H.264. El H.265+ es la extensión propietaria de Hikvision que añade un control inteligente de la tasa de bits: el codificador la reduce en las zonas fijas de la escena, lo que aporta alrededor de un 50 % adicional frente al H.265 estándar. El ahorro neto respecto al H.264 ronda el 75 %. La calidad sobre los objetos en movimiento se mantiene; solo se comprimen más los fondos estáticos.",
    },
    {
      question: "¿Funciona el H.265+ con todos los NVR?",
      answer:
        "El H.265+ requiere que lo admitan tanto la cámara como el NVR. Todos los NVR Hikvision recientes (series DS-76xx/77xx/96xx I y K) decodifican H.265+ para visualización en directo y grabación. Los NVR y VMS de terceros pueden recibir el flujo como H.265 estándar: más ligero que H.264, pero no tanto como podría llegar a ser. Combina siempre cámaras Hikvision con NVR Hikvision u OEM de Hikvision para aprovechar el H.265+ por completo.",
    },
    {
      question: "¿Qué discos recomienda Hikvision para sus NVR?",
      answer:
        "La lista de compatibilidad de Hikvision prioriza los discos para videovigilancia, sobre todo WD Purple, Seagate SkyHawk y Toshiba S300. La capacidad máxima admitida depende del modelo de NVR: los recientes (de 2022 en adelante) aceptan hasta 20 TB por bahía. El firmware de los NVR Hikvision está optimizado para la escritura secuencial de esos discos, y usar modelos de consumo se traduce en menor rendimiento y fallos más tempranos.",
    },
    {
      question:
        "¿Por qué mi NVR Hikvision consume más almacenamiento del que indica la calculadora?",
      answer:
        "Causas propias de las instalaciones Hikvision: (1) la cámara graba a la vez el flujo principal y el secundario, lo que duplica el almacenamiento si la grabación del secundario está activada en el NVR; (2) la grabación de eventos inteligentes crea archivos aparte además del flujo continuo; (3) la cámara usa tasa de bits fija (CBR) en lugar de VBR. Revisa los ajustes de codificación de la cámara y la programación de grabación del NVR.",
    },
    {
      question: "¿Cómo se activa el H.265+ en una cámara Hikvision?",
      answer:
        "Desde la interfaz web de la cámara (o mediante iVMS-4200 / Hik-Connect): Configuración → Vídeo/Audio → Vídeo → Codificación de vídeo → selecciona «H.265+». El ajuste también existe en el NVR, dentro de la configuración del canal correspondiente. Si el H.265+ aparece atenuado, puede que haya que actualizar el firmware o que el modelo no lo admita (algunas cámaras DS-2CD2xxx-W y -G antiguas se quedan en H.264).",
    },
    {
      question:
        "¿Estas tasas de bits son las especificaciones oficiales de Hikvision?",
      answer:
        "Las estimaciones se aproximan a las recomendaciones de dimensionamiento publicadas por Hikvision (disponibles en su calculadora oficial de almacenamiento iVMS y en los manuales de producto). La tasa real varía un ±20 % según la complejidad de la escena. La calculadora ofrece una estimación de nivel de planificación: en proyectos con presupuesto ajustado, añade un margen de seguridad del 10 al 20 %.",
    },
  ],
};

export default translation;
