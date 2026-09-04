import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculadora-almacenamiento-firebase",
  title: "Calculadora de precios del almacenamiento de Firebase",
  description:
    "Calculadora de precios del almacenamiento de Firebase para el plan Blaze de pago por uso. Modela los costes de almacenamiento, descarga, subida y operaciones para aplicaciones de cualquier tamaño.",
  tagline:
    "Precios de Firebase Cloud Storage: almacenamiento, descargas y operaciones en el plan Blaze.",
  keywords: [
    "calculadora precio almacenamiento firebase",
    "calculadora firebase storage",
    "costo firebase cloud storage",
    "precios firebase blaze",
  ],

  content: {
    intro:
      "Firebase Cloud Storage es, en la práctica, una capa fina sobre Google Cloud Storage: misma infraestructura, SDK más sencillo e integración con Firebase Auth y las reglas de seguridad. Sus precios siguen los de GCS Standard con un pequeño recargo, más el plan Spark (gratuito) que ofrece 5 GB de almacenamiento y 1 GB de descargas al día. Esta calculadora modela el plan Blaze, de pago por uso, al que acaba llegando toda aplicación Firebase en producción. Si estás calculando a gran escala, compara también con la calculadora de GCS para la misma carga de trabajo.",
    formula:
      "<p><strong>Firebase Storage en el plan Blaze:</strong></p>" +
      "<ul>" +
      "<li><strong>Almacenamiento</strong>: 0,026 $/GB/mes</li>" +
      "<li><strong>Descarga</strong> (salida a internet): 0,12 $/GB</li>" +
      "<li><strong>Subida</strong>: gratuita</li>" +
      "<li><strong>Operaciones</strong>: 0,05 $ por cada 10 000 escrituras y 0,004 $ por cada 10 000 lecturas</li>" +
      "</ul>" +
      "<p>El plan Spark ofrece gratis 5 GB de almacenamiento, 1 GB de descargas al día, 20 000 subidas diarias y 50 000 descargas diarias. La mayoría de las aplicaciones se quedan primero sin cupo de descargas.</p>",
    useCases: [
      "Estimar el coste de Firebase Storage para una aplicación móvil en crecimiento",
      "Decidir cuándo pasar del plan Spark (gratuito) al Blaze (de pago por uso)",
      "Comparar Firebase Storage con GCS puro para la misma carga de trabajo",
      "Modelar el coste del contenido subido por los usuarios (fotos de perfil, vídeos)",
    ],
  },

  faqs: [
    {
      question: "¿Cuándo conviene pasar de Firebase Spark a Blaze?",
      answer:
        "Los límites de Spark se alcanzan normalmente en este orden: las descargas diarias (tope de 1 GB al día), después el número de operaciones diarias y por último el almacenamiento (tope de 5 GB). En aplicaciones de consumo, el punto de inflexión suele estar entre 100 y 500 usuarios activos diarios. Blaze es de pago por uso y sin mínimo: para una aplicación pequeña con 10 GB almacenados y 50 GB de descargas al mes, cuenta con unos 6-7 $ mensuales en total.",
    },
    {
      question:
        "¿Firebase Storage es más caro que Google Cloud Storage puro?",
      answer:
        "Algo más. Firebase Storage cuesta 0,026 $/GB/mes frente a los 0,020 $/GB de GCS Standard. Ese recargo paga el SDK simplificado, la integración de la autenticación, las reglas de seguridad y la consola de Firebase. Por debajo de 1 TB almacenado la diferencia es insignificante y el tiempo de desarrollo ahorrado lo compensa. A partir de 10 TB, ir directamente a GCS empieza a merecer el trabajo de integración.",
    },
    {
      question: "¿Cuánto cuesta alojar la foto de perfil de un usuario?",
      answer:
        "Una foto de perfil comprimida pesa alrededor de 500 KB, así que en 1 GB caben unas 2000. A 0,026 $/GB/mes, 2000 fotos de perfil cuestan unos 0,026 $ al mes, es decir, 0,31 $ al año. Añade unos 0,06 $ por 100 descargas de cada una (lo típico del primer mes de uso). Para una aplicación con 100 000 usuarios: unos 13 $ mensuales de almacenamiento más un coste de descargas muy variable.",
    },
    {
      question: "¿Las reglas de seguridad de Firebase tienen coste adicional?",
      answer:
        "No, forman parte de la plataforma. Pero cada operación de almacenamiento se evalúa contra esas reglas, lo que consume cupo de operaciones. Las reglas complejas con consultas a la base de datos pueden ser lentas y añadir latencia; en casos extremos, un tiempo de espera agotado provoca el fallo de la operación, que se factura igualmente. Mantén las reglas simples y limitadas al propio almacenamiento siempre que puedas.",
    },
    {
      question: "¿Puedo usar Firebase Cloud Storage con Cloud Functions?",
      answer:
        "Sí. Los desencadenadores de Cloud Storage (onFinalize, onDelete, onMetadataUpdate) se usan a menudo para procesar los archivos subidos: redimensionar imágenes, analizar virus o convertir formatos. Cada ejecución se factura aparte en la línea de Cloud Functions (unos 0,40 $ por millón de invocaciones, más el tiempo de CPU y memoria). Tenlo en cuenta además del coste de almacenamiento.",
    },
    {
      question:
        "¿Cuál es la forma más barata de almacenar 1 TB de archivos de usuarios?",
      answer:
        "Solo por almacenamiento en Firebase Blaze: 1 TB sale por unos 26 $ al mes. Pero en la mayoría de las aplicaciones mandan las descargas: 1 TB de descargas mensuales añade 122 $ al mes. Para esos casos, considera: (1) Firebase Storage con la caché de Firebase Hosting, (2) Firebase Storage con Cloud CDN, o (3) un proveedor con transferencia barata como Cloudflare R2 (0,015 $/GB de almacenamiento y sin tarifas de salida).",
    },
  ],
};

export default translation;
