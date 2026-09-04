import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculadora-almacenamiento-s3",
  title: "Calculadora de almacenamiento AWS S3",
  description:
    "Calculadora de almacenamiento S3 que cubre las seis clases de AWS: Standard, Standard-IA, One Zone-IA y Glacier Instant, Flexible y Deep Archive. Incluye salida de datos y operaciones.",
  tagline:
    "Estima los costes de S3 en todas las clases de almacenamiento, con las tarifas de solicitudes y de salida de datos incluidas.",
  keywords: [
    "calculadora almacenamiento s3",
    "calculadora costo aws s3",
    "calculadora precio s3",
    "calcular costo almacenamiento aws",
  ],

  content: {
    intro:
      "Amazon S3 ofrece seis clases de almacenamiento que intercambian velocidad de acceso, garantías de durabilidad y compromisos mínimos por un coste por GB mucho más bajo. Esta calculadora las cubre todas: Standard, Standard-IA, One Zone-IA, Glacier Instant Retrieval, Glacier Flexible Retrieval y Glacier Deep Archive, con las tarifas públicas de us-east-1. Ahora bien, el almacenamiento rara vez es toda la factura: las solicitudes PUT y GET, la salida de datos a internet y las tarifas de recuperación de Glacier suelen pesar más, sobre todo en cargas de trabajo activas.",
    formula:
      "<p><strong>Factura de S3</strong> = almacenamiento + operaciones + salida de datos + recuperación</p>" +
      "<p>S3 Standard: <code>0,023 $/GB/mes</code>. Standard-IA: <code>0,0125 $/GB/mes</code> con 0,01 $/GB de tarifa de recuperación. Deep Archive: <code>0,00099 $/GB/mes</code>, alrededor de 1 $ por TB y mes, con un mínimo de 180 días y 0,02 $/GB de recuperación. El precio de las solicitudes va de 0,005 $ por cada 1000 PUT en Standard a 0,05 $ por cada 1000 PUT en Deep Archive.</p>" +
      "<p>Salida de datos a internet: los primeros 100 GB al mes son gratuitos, después <code>0,09 $/GB</code> para los siguientes 10 TB, bajando hasta 0,05 $/GB por encima de 150 TB.</p>",
    useCases: [
      "Dimensionar el almacenamiento de un bucket de S3 nuevo antes de desplegarlo",
      "Comparar S3 Standard con Standard-IA en un bucket existente",
      "Estimar el coste de mover datos fríos a Glacier Deep Archive",
      "Modelar los costes de salida de datos de una aplicación que sirve descargas desde S3",
    ],
  },

  faqs: [
    {
      question: "¿Cuál es la clase de almacenamiento de S3 más barata?",
      answer:
        "Para almacenamiento frío a largo plazo con acceso esporádico, Glacier Deep Archive a 0,00099 $/GB/mes (alrededor de 1 $/TB/mes) es la más barata, pero conlleva un cargo mínimo de 180 días de almacenamiento, 0,02 $/GB de recuperación y más de 12 horas de espera. Para datos de acceso frecuente: S3 Standard a 0,023 $/GB. Para acceso mensual: Standard-IA a 0,0125 $/GB, con un mínimo de 30 días y 0,01 $/GB de recuperación.",
    },
    {
      question: "¿Cómo reduzco los costes de S3 sin tocar mi aplicación?",
      answer:
        "Tres mejoras rápidas: (1) activa reglas de ciclo de vida de S3 para mover automáticamente los objetos a Standard-IA a los 30 días y a Glacier a los 90; (2) activa Intelligent-Tiering para patrones de acceso impredecibles, ya que S3 mueve los objetos según su uso; (3) pon CloudFront u otra CDN delante de S3 para cachear las lecturas frecuentes, porque la salida de datos vía CDN sale más barata que la de S3 con volúmenes altos.",
    },
    {
      question: "¿Esta calculadora incluye S3 Intelligent-Tiering?",
      answer:
        "No directamente: el precio de Intelligent-Tiering depende de cómo mueva S3 tus objetos, algo que varía según la carga de trabajo. Como regla general, esta clase se sitúa entre los costes de Standard y Standard-IA (0,012-0,023 $/GB) más una pequeña tarifa de monitorización (0,0025 $ por cada 1000 objetos). Con patrones de acceso predecibles, las reglas de ciclo de vida entre Standard y Standard-IA suelen salir más baratas.",
    },
    {
      question: "¿De verdad cuesta 0,09 $ por GB la salida de datos?",
      answer:
        "Sí en la región estándar us-east-1, por encima de los primeros 100 GB gratuitos al mes. El precio baja con el volumen: 0,085 $ para los siguientes 40 TB, 0,07 $ para los siguientes 100 TB y 0,05 $ por encima de 150 TB. La replicación entre regiones y S3 Transfer Acceleration se facturan aparte. Si sirves grandes volúmenes de descargas, CloudFront (0,085 $ bajando hasta 0,02 $ a gran escala) suele salir más barato que S3 directo.",
    },
    {
      question: "¿Qué diferencia hay entre las clases de Glacier?",
      answer:
        "Glacier Instant Retrieval (0,004 $/GB) recupera en milisegundos como S3 Standard, con un mínimo de 90 días y 0,03 $/GB de tarifa de recuperación. Glacier Flexible Retrieval (0,0036 $/GB) tarda de minutos a horas. Glacier Deep Archive (0,00099 $/GB) es la más barata, pero necesita más de 12 horas y exige un mínimo de 180 días. Elige según la paciencia que tengas en el momento de restaurar.",
    },
    {
      question: "¿S3 cobra las solicitudes fallidas o interrumpidas?",
      answer:
        "Sí: los cargos por solicitud se aplican a todas las llamadas a la API, incluidos los errores 4xx provocados por fallos del cliente. Las cargas multiparte interrumpidas dejan fragmentos en disco que se facturan como almacenamiento hasta que se limpian. Crea una regla de ciclo de vida que aborte las cargas multiparte incompletas a los 7 días: es una sorpresa frecuente en las facturas de AWS.",
    },
  ],
};

export default translation;
