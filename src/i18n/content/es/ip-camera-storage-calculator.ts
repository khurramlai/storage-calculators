import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculadora-almacenamiento-camara-ip",
  title: "Calculadora de almacenamiento para cámaras IP",
  description:
    "Calculadora de almacenamiento para cámaras IP con cálculo de tasa de bits por cámara en H.264, H.265 y códecs inteligentes. Elige resolución y fotogramas y obtén el almacenamiento exacto por equipo.",
  tagline:
    "Planificación del almacenamiento cámara a cámara, con cálculos realistas de códec y resolución.",
  keywords: [
    "calculadora almacenamiento camara ip",
    "calculadora camara ip",
    "calcular tasa de bits camara ip",
    "almacenamiento camara de red",
  ],

  content: {
    intro:
      "Las cámaras IP transmiten vídeo digital por la red, normalmente mediante ONVIF, RTSP o algún protocolo propietario, y alimentan un NVR, un VMS o un grabador sobre NAS. Sus necesidades de almacenamiento las marca la configuración del codificador de la propia cámara, no el grabador. Por eso tiene sentido modelar primero una sola cámara y después multiplicar. Aquí el valor por defecto es una cámara, para que puedas comparar resoluciones y códecs sobre la misma escena antes de calcular el total.",
    formula:
      "<p><strong>Almacenamiento por cámara</strong> = <code>(tasa de bits × 3600 / 8) × horas × días</code></p>" +
      "<p>La tasa de bits de una cámara IP se ajusta en su configuración de codificación. En VBR (tasa variable) la media se sitúa cerca del techo configurado; en CBR (tasa constante) se mantiene estable. Los códecs inteligentes (H.265+ en Hikvision, WiseStream II en Hanwha, Zipstream en Axis) ajustan la tasa de forma dinámica según el movimiento de la escena y suelen recortar el almacenamiento entre un 50 y un 75 % frente al H.265 estándar.</p>",
    useCases: [
      "Comparar saltos de resolución (¿de verdad el 4K necesita 4 veces el almacenamiento del 1080p?)",
      "Comprobar la eficiencia del códec de un modelo concreto antes de comprarlo",
      "Dimensionar el almacenamiento local de cámaras con ranura para tarjeta SD",
      "Planificar también el ancho de banda (tasa de bits × cámaras = tráfico de red necesario)",
    ],
  },

  faqs: [
    {
      question: "¿Qué tasa de bits debo configurar en mi cámara IP?",
      answer:
        "Para 1080p en H.264 a 25 fps, 4 Mbps es una buena base en escenas de vigilancia generales. Baja a 2 Mbps en escenas estáticas (aparcamientos) y sube a 6-8 Mbps en zonas que exijan detalle (lectura de matrículas, cajas de comercios). En H.265, reduce esas cifras a la mitad. Los códecs inteligentes (H.265+) se ajustan solos: tú fijas una tasa máxima y la cámara usa la necesaria.",
    },
    {
      question: "VBR o CBR, ¿cuál consume más almacenamiento?",
      answer:
        "El CBR (tasa constante) consume un almacenamiento predecible y algo mayor, útil cuando el ancho de banda debe mantenerse estable para dimensionar la red. El VBR (tasa variable) consume menos en escenas tranquilas y más en las movidas, con el mismo techo. Para planificar, considera que un flujo VBR promedia entre el 60 y el 70 % de su techo. Las estimaciones de la calculadora equivalen a VBR.",
    },
    {
      question: "¿Cómo se compara el almacenamiento en 4K con el de 1080p?",
      answer:
        "El 4K (3840×2160, 8 MP) tiene 4 veces más píxeles que el 1080p (2 MP), pero la tasa de bits codificada solo sube entre 3 y 4 veces, porque la compresión gana eficiencia a resoluciones altas. Con H.265+ la diferencia se estrecha aún más: sobre la misma escena, un flujo 4K en H.265+ puede ser más ligero que uno 1080p en H.264. La calculadora lo tiene en cuenta correctamente.",
    },
    {
      question: "¿La compresión ocurre en la cámara o en el NVR?",
      answer:
        "En la cámara. Las cámaras IP llevan un codificador integrado (normalmente un SoC Hi3516, GK7202 o Ambarella) que comprime antes de transmitir. El NVR o el VMS recibe un flujo ya comprimido y lo escribe tal cual en disco. Por eso, cambiar los ajustes de códec en la cámara modifica a la vez el ancho de banda y el almacenamiento.",
    },
    {
      question: "¿Qué diferencia hay entre flujo principal y flujo secundario?",
      answer:
        "La mayoría de las cámaras IP emiten dos flujos: uno principal (resolución completa, para grabar) y uno secundario (resolución reducida, para la visualización en directo en el móvil y en mosaicos multicámara, ahorrando ancho de banda). La calculadora estima solo el principal. Si tu NVR también graba el secundario, algo frecuente pero opcional, añade entre un 5 y un 15 % al total.",
    },
    {
      question:
        "¿La detección de movimiento sirve para reducir el almacenamiento de una cámara IP?",
      answer:
        "Sí: grabar solo con detección suele reducir el almacenamiento entre un 60 y un 90 %, según la actividad de la escena. El modo «solo por detección de movimiento» de la calculadora asume un tiempo de grabación efectivo del 40 %, algo prudente. La grabación por eventos inteligentes (solo con clasificación de persona o vehículo) puede bajar del 10 % con las cámaras con IA actuales.",
    },
  ],
};

export default translation;
