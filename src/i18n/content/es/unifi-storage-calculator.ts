import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculadora-almacenamiento-unifi",
  title: "Calculadora de almacenamiento UniFi",
  description:
    "Calculadora de almacenamiento UniFi para instalaciones Protect con cámaras G3, G4 y G5. Dimensiona los discos de UNVR, UNVR Pro y Cloud Key Gen2 Plus con H.265 por defecto.",
  tagline:
    "Dimensionamiento de almacenamiento de UniFi Protect para cualquier combinación de cámaras G3/G4/G5 y cualquier retención.",
  keywords: [
    "calculadora almacenamiento unifi",
    "calculadora unifi protect",
    "calculadora ubiquiti",
    "almacenamiento nvr unifi",
  ],

  content: {
    intro:
      "UniFi Protect funciona sobre los UNVR, UNVR Pro o Cloud Key Gen2 Plus de Ubiquiti. Las cámaras G4 y G5 usan H.265 por defecto. No existe un ajuste aparte de «códec inteligente»: el firmware de Protect gestiona la tasa de bits de forma adaptativa. Esta calculadora parte de ajustes tipo G4 Pro: 4 MP, 30 fps, H.265 y 14 días de retención. Un detalle importante de Protect: cuando el disco se llena, las grabaciones más antiguas se borran automáticamente, así que la cifra que obtengas aquí es lo que deberías comprar para conservar toda la ventana de retención que quieres.",
    formula:
      "<p><strong>Almacenamiento de UniFi Protect</strong> = <code>(tasa de bits × 3600 / 8) × cámaras × horas × días</code></p>" +
      "<p>Las cámaras UniFi G4 Pro en 4 MP, 30 fps y H.265 suelen escribir entre 8 y 12 Mbps por cámara. Las de la serie G5 son algo más eficientes. La serie G3, más antigua, se queda en 1080p y puede no admitir H.265 con firmwares antiguos: esas cámaras codifican en H.264 con tasas más altas.</p>",
    useCases: [
      "Elegir entre UNVR, UNVR Pro y Cloud Key Gen2 Plus según tus necesidades de almacenamiento",
      "Seleccionar el disco adecuado para las cuatro bahías del UNVR",
      "Prever la ampliación de cámaras dentro de la capacidad de un UNVR existente",
      "Decidir si conviene activar el archivo en la nube de UniFi Protect (Ubiquiti Cloud Storage)",
    ],
  },

  faqs: [
    {
      question: "¿Cuánto almacenamiento consume una cámara UniFi G4 Pro?",
      answer:
        "Con los ajustes por defecto (4 MP, 30 fps, H.265 y grabación continua), una G4 Pro escribe entre 80 y 100 GB al día. Con grabación por movimiento (uso doméstico o de pequeño negocio), la cifra baja a 30-40 GB diarios. El preajuste UniFi de la calculadora corresponde a grabación continua: cambia a «solo por detección de movimiento» si tu instalación usa detección inteligente.",
    },
    {
      question: "¿Cuánto durará el disco del UNVR?",
      answer:
        "Depende de la capacidad del disco, del número de cámaras y de la retención configurada. UniFi Protect borra automáticamente las grabaciones más antiguas cuando el disco se llena: no hay fallo, simplemente la ventana real de retención se acorta. Para conseguir la retención que quieres sin borrado automático, usa esta calculadora con tu configuración y elige una capacidad acorde. El UNVR admite hasta 16 TB por bahía, con 4 bahías en total.",
    },
    {
      question: "¿UniFi Protect admite H.265?",
      answer:
        "Sí. Las G4 Bullet, G4 Pro, G4 Dome, G4 Instant y todas las cámaras G5 admiten H.265 y lo usan por defecto. Las cámaras de la serie G3 pueden seguir en H.264 según el firmware (algunos modelos G3 admiten H.265 en versiones recientes). Mezclar cámaras H.264 y H.265 en una misma instalación de UniFi Protect funciona sin problemas; el supuesto de H.265 de la calculadora es conservador para parques mixtos.",
    },
    {
      question: "¿Qué discos duros son compatibles con el UNVR?",
      answer:
        "Ubiquiti admite oficialmente los WD Purple, Seagate SkyHawk y una lista de discos para videovigilancia y NAS en el UNVR. La capacidad máxima por bahía es de 16 TB en el UNVR Pro. Evita los discos SMR (grabación magnética por solapamiento), que rinden mal con la escritura continua de la videovigilancia. El UNVR no usa RAID por defecto, pero el UNVR Pro admite RAID 1, 5 y 10.",
    },
    {
      question: "¿UniFi Protect graba en la nube?",
      answer:
        "Sí. Ubiquiti Cloud Storage se ofrece por suscripción (entre 2 y 4 € por cámara y mes según el plan) y respalda las grabaciones de Protect en la nube de Ubiquiti. Es un complemento del almacenamiento local, no un sustituto. Usa esta calculadora para el dimensionamiento local; el coste de la nube va aparte.",
    },
    {
      question:
        "¿Puedo ampliar el almacenamiento de UniFi Protect sin perder las grabaciones?",
      answer:
        "En un UNVR Pro con RAID configurado, los discos pueden sustituirse de uno en uno y reconstruirse. En un UNVR de disco único puedes cambiar el disco, pero se pierde el histórico: exporta antes las secuencias importantes con la función de exportación de Protect. UniFi Protect no permite por ahora repartir los datos entre varios discos externos, así que ampliar significa sustituir el disco por uno mayor.",
    },
  ],
};

export default translation;
