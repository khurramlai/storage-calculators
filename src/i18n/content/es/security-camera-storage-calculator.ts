import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculadora-almacenamiento-camaras-seguridad",
  title: "Calculadora de almacenamiento para cámaras de seguridad",
  description:
    "Calculadora de almacenamiento para cámaras de seguridad domésticas y de pequeños negocios. Dimensiona discos para Ring, Reolink, Wyze, Nest e instalaciones NVR multicámara en segundos.",
  tagline:
    "¿Cuántos días de grabación caben realmente en ese disco con tus cámaras de seguridad?",
  keywords: [
    "calculadora almacenamiento camaras seguridad",
    "calculadora camara de seguridad",
    "calcular almacenamiento camaras vigilancia",
    "almacenamiento camaras seguridad casa",
  ],

  content: {
    intro:
      "La mayoría de las cámaras de seguridad domésticas y de pequeños negocios solo graban cuando detectan movimiento, así que el almacenamiento necesario es una fracción del de una grabación continua. Aun así hay que dimensionar bien el disco, porque uno pequeño sobrescribe las grabaciones antiguas justo cuando necesitarías consultarlas. Esta calculadora parte de valores típicos de una instalación doméstica: 4 cámaras en 1080p, grabación por movimiento y 14 días de retención. A partir de ahí, ajusta.",
    formula:
      "<p>Con cámaras activadas por movimiento, el <strong>tiempo de grabación efectivo</strong> ronda el 40 % de la franja activa: en casi todas las escenas hay actividad menos de la mitad del tiempo. La calculadora aplica un ciclo de actividad del 40 % cuando eliges «Solo por detección de movimiento».</p>" +
      "<p><strong>Almacenamiento</strong> = <code>(tasa de bits × 3600 / 8) × cámaras × horas_efectivas × días</code></p>",
    useCases: [
      "Elegir entre un disco de 1 TB y uno de 4 TB para un NVR o NAS doméstico",
      "Comprobar si sale más barato el almacenamiento en la nube o el local para tu retención",
      "Estimar la capacidad de tarjeta SD en cámaras con almacenamiento integrado (Reolink, Wyze, Eufy)",
      "Planificar el almacenamiento de una instalación multicámara antes de comprar el grabador",
    ],
  },

  faqs: [
    {
      question:
        "¿Cuánto dura un disco de 1 TB con cámaras de seguridad domésticas?",
      answer:
        "En una instalación típica de 4 cámaras 1080p en H.265 con grabación por movimiento (en torno al 40 % del tiempo): aproximadamente entre 60 y 90 días. Con grabación continua, ese mismo disco dura unos 25 días. La calculadora da la respuesta exacta para tu configuración: las promesas comerciales del tipo «60 días en 1 TB» dan por hechos unos ajustes concretos, a menudo optimistas.",
    },
    {
      question: "¿Necesito un grabador o me bastan las tarjetas SD?",
      answer:
        "Las cámaras con ranura para tarjeta SD (Reolink, Wyze, Eufy, Amcrest) pueden grabar en local sin un NVR aparte. Las tarjetas SD se quedan en 256-512 GB en la mayoría de los modelos, lo que da unos 7 a 30 días de grabación 1080p por movimiento y cámara. Usa esta calculadora con una sola cámara y tu retención para ver si basta con una tarjeta SD o necesitas un grabador centralizado.",
    },
    {
      question: "¿Es mejor usar la nube en lugar de un disco local?",
      answer:
        "La nube es cómoda (sin hardware que instalar y con copia fuera de casa), pero cara a largo plazo. Una suscripción Ring Protect Plus cuesta entre 40 y 100 € al año por ubicación, y Nest Aware está en cifras parecidas. Un disco de 4 TB para un NVR local cuesta unos 80 € una sola vez y dura entre 3 y 5 años. A partir de 4 cámaras y con retenciones largas, el almacenamiento local sale mucho más barato. La contrapartida: la nube es más difícil de neutralizar para un ladrón, que tendría que cortar tu conexión a internet en el momento exacto.",
    },
    {
      question: "¿Qué códec usan las cámaras de seguridad domésticas?",
      answer:
        "Las cámaras recientes (a partir de 2022) admiten H.265 / HEVC de fábrica. Los modelos más antiguos o económicos pueden quedarse en H.264. Algunas cámaras wifi siguen usando H.264 por defecto aunque admitan H.265, por compatibilidad de decodificación en las aplicaciones móviles. Revisa los ajustes y activa el H.265 si está disponible: reduce el almacenamiento a la mitad sin pérdida de calidad.",
    },
    {
      question: "¿Cuánto almacenamiento necesitan las cámaras de seguridad 4K?",
      answer:
        "Entre 2 y 3 veces el del 1080p con la misma retención. Con grabación por movimiento y códec H.265, una cámara 4K consume de media entre 5 y 15 GB al día en uso doméstico habitual. La calculadora da la cifra exacta según la actividad de tu escena y la retención que quieras.",
    },
    {
      question: "¿Por qué mi Ring o mi Nest solo conserva 60 días?",
      answer:
        "Las cámaras de seguridad basadas en la nube (Ring, Nest, Arlo, Blink) suelen limitar la retención a 30 o 60 días según la suscripción. La limitación no es de almacenamiento, sino de las condiciones del plan. Si necesitas más retención, un NVR o NAS local es la respuesta, y esta calculadora te ayuda a dimensionar el disco.",
    },
  ],
};

export default translation;
