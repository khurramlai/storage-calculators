import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculadora-almacenamiento-hanwha",
  title: "Calculadora de almacenamiento Hanwha",
  description:
    "Calculadora de almacenamiento Hanwha para cámaras Wisenet, con el ahorro del códec WiseStream II modelado. Los valores por defecto corresponden a las series P y Q conectadas a NVR XRN, SRN o WRN.",
  tagline:
    "Planificación del almacenamiento de cámaras Hanwha Wisenet con la compresión WiseStream II modelada.",
  keywords: [
    "calculadora almacenamiento hanwha",
    "calculadora wisenet",
    "calculadora hanwha wisenet",
    "almacenamiento samsung wisenet",
  ],

  content: {
    intro:
      "Las cámaras IP Hanwha Wisenet (antes Samsung Techwin) usan WiseStream II, un códec inteligente sensible al contenido de la escena y construido sobre H.265 que, en escenas de vigilancia habituales, recorta cerca de un 75 % frente al H.264. Esta calculadora parte de los ajustes comunes de las series Wisenet P y Q: 1080p, 30 fps y códec inteligente activado. También cubre instalaciones multicámara conectadas a NVR XRN, SRN o WRN, y los discos recomendados encajan con las configuraciones de bahías de esos chasis.",
    formula:
      "<p><strong>Almacenamiento Hanwha</strong> = <code>(tasa de bits × 3600 / 8) × cámaras × horas × días</code></p>" +
      "<p>WiseStream II es la extensión inteligente del H.265 de Hanwha. En escenas con movimiento previsible (aparcamientos, fachadas de edificios) puede superar al H.265+ de Hikvision; en escenas muy dinámicas (superficies comerciales, cruces con tráfico) la diferencia se reduce. La calculadora modela WiseStream II con el mismo factor de reducción del 75 % que el H.265+, que es lo que reflejan las tasas de dimensionamiento publicadas por Hanwha.</p>",
    useCases: [
      "Dimensionar NVR Hanwha Wisenet de las series XRN, SRN y WRN",
      "Planificar el almacenamiento de cámaras panorámicas multisensor Wisenet PNM, donde cada sensor es un flujo independiente",
      "Comparar el ahorro de WiseStream II antes de activarlo en cámaras ya instaladas",
      "Dimensionar la capacidad de una instalación con el VMS SSM (Smart Security Manager)",
    ],
  },

  faqs: [
    {
      question: "¿Qué es WiseStream II y en qué se diferencia del H.265?",
      answer:
        "WiseStream II es el códec inteligente de Hanwha superpuesto al H.265. Aplica control dinámico del GOP (grupo de imágenes) y adaptación de la tasa de bits por zonas: identifica las partes fijas de la escena y reduce su tasa mientras conserva la calidad completa en los objetos en movimiento. El resultado es comparable al H.265+ de Hikvision, con archivos alrededor de un 50 % más pequeños que en H.265 estándar sobre la misma escena.",
    },
    {
      question: "¿Funciona WiseStream II con NVR y VMS de terceros?",
      answer:
        "Sí. WiseStream II genera un flujo H.265 totalmente compatible que puede decodificar cualquier NVR o VMS con soporte H.265. La compresión inteligente ocurre por completo en la cámara; el grabador solo ve un archivo H.265 más ligero. Por eso se puede usar en instalaciones con equipos de varias marcas.",
    },
    {
      question:
        "¿Qué tasa de bits conviene usar para dimensionar una cámara Wisenet?",
      answer:
        "Para cámaras Wisenet de 1080p con WiseStream II activado, apunta a 2 Mbps de tasa máxima en modo VBR. Para 4 MP: entre 3 y 4 Mbps. Para 4K: entre 6 y 8 Mbps. Son medias reales; el tamaño efectivo de los archivos será menor en escenas tranquilas. Parte de los valores por defecto de la calculadora y ajústalos si la ficha técnica de tu cámara indica otras cifras.",
    },
    {
      question: "¿Qué discos son compatibles con los NVR Hanwha Wisenet?",
      answer:
        "Hanwha publica una lista de compatibilidad por modelo de NVR: los WD Purple, Seagate SkyHawk y Toshiba S300 están validados en toda la gama. La capacidad máxima admitida depende del modelo y de la versión de firmware; los NVR Wisenet recientes aceptan entre 16 y 20 TB por bahía. Consulta el documento oficial de compatibilidad de discos para tu modelo concreto.",
    },
    {
      question: "¿Por qué mi cámara Wisenet usa más tasa de bits de la prevista?",
      answer:
        "Posibles causas: (1) WiseStream II está desactivado en los ajustes de la cámara; (2) la escena es especialmente dinámica, lo que reduce el beneficio del códec inteligente; (3) la tasa está fijada en CBR (constante) en lugar de VBR; (4) la cámara funciona en un modo que prioriza la calidad sobre la compresión (por ejemplo, grabación con valor probatorio). Revisa Configuración → Vídeo y audio → Perfil de vídeo en la interfaz web de la cámara.",
    },
    {
      question: "¿Esta calculadora sirve para las cámaras panorámicas Wisenet?",
      answer:
        "Las cámaras panorámicas Wisenet (PNM-9085RQZ, PNM-9322VQP) son multisensor y se presentan como varios flujos independientes. Indica como número de cámaras el total de sensores (normalmente 2 o 4) y la calculadora hace el resto. Cada sensor graba de forma independiente y consume su propio almacenamiento.",
    },
  ],
};

export default translation;
