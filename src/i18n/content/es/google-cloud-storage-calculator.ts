import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculadora-google-cloud-storage",
  title: "Calculadora de Google Cloud Storage",
  description:
    "Calculadora de costes de Google Cloud Storage para las clases Standard, Nearline, Coldline y Archive. Incluye operaciones de clase A y B, salida de datos y tarifas de recuperación.",
  tagline:
    "Precios de GCS para Standard, Nearline, Coldline y Archive: una estimación de coste inmediata.",
  keywords: [
    "calculadora costo google cloud storage",
    "calculadora precio google cloud storage",
    "calculadora google cloud storage",
    "calculadora gcs",
    "tarifas google cloud storage",
  ],

  content: {
    intro:
      "Google Cloud Storage ofrece cuatro clases de almacenamiento: Standard, Nearline, Coldline y Archive. Comparten API y modelo de consistencia, pero sus precios de almacenamiento, operaciones y recuperación son muy distintos. Esta calculadora estima el coste mensual de las cuatro con las tarifas públicas de us-central1. El esquema de precios de GCS es en realidad más simple que el de AWS, con menos subcategorías de transacciones. En cambio, su salida de datos es la más cara de las tres grandes nubes, a 0,12 $ por GB: si vas a sacar datos, modela esa línea con cuidado.",
    formula:
      "<p><strong>Factura de GCS</strong> = almacenamiento + operaciones de clase A + operaciones de clase B + salida de datos + recuperación</p>" +
      "<ul>" +
      "<li><strong>Standard</strong>: 0,020 $/GB/mes. Sin mínimo. Opción por defecto para datos activos.</li>" +
      "<li><strong>Nearline</strong>: 0,010 $/GB/mes, mínimo de 30 días y 0,01 $/GB de recuperación.</li>" +
      "<li><strong>Coldline</strong>: 0,004 $/GB/mes, mínimo de 90 días y 0,02 $/GB de recuperación.</li>" +
      "<li><strong>Archive</strong>: 0,0012 $/GB/mes, mínimo de 365 días y 0,05 $/GB de recuperación.</li>" +
      "</ul>" +
      "<p>Operaciones de clase A (escrituras y listados): 0,05 $ por cada 10 000 en Standard, más caras en las clases frías. Operaciones de clase B (lecturas): 0,004 $ por cada 10 000 en Standard. Salida a internet: los primeros 100 GB al mes son gratuitos, después 0,12 $/GB.</p>",
    useCases: [
      "Comparar las clases de GCS antes de crear un bucket nuevo",
      "Estimar el ahorro de mover los datos antiguos a Coldline o Archive",
      "Modelar el coste de salida para BigQuery, datos de entrenamiento de IA o exportaciones analíticas",
      "Comparar GCS con S3 o Azure para la misma carga de trabajo",
    ],
  },

  faqs: [
    {
      question: "¿Cuál es la clase de Google Cloud Storage más barata?",
      answer:
        "Archive, a 0,0012 $/GB/mes (alrededor de 1,20 $/TB/mes), es la más barata, pero exige un compromiso de almacenamiento de 365 días y 0,05 $/GB de tarifa de recuperación. Para datos a los que puedas acceder dentro del año, Coldline (0,004 $/GB, mínimo de 90 días y 0,02 $/GB de recuperación) es el mejor equilibrio. Para acceso mensual: Nearline. Para datos activos: Standard.",
    },
    {
      question:
        "¿Por qué la salida de datos de GCS es más cara que la de AWS o Azure?",
      answer:
        "La salida a internet de GCS cuesta 0,12 $/GB por encima de los 100 GB gratuitos, en torno a un 30 % más que AWS (0,09 $) y un 40 % más que Azure (0,087 $). Google lo atribuye a la calidad de su red y a su infraestructura global. En cargas con mucha salida de datos, eso puede hacer que GCS resulte bastante más caro en conjunto aunque su almacenamiento sea más barato. La red Premium Tier se aplica por defecto; el Standard Tier es más barato, pero implica concesiones de rendimiento.",
    },
    {
      question:
        "¿Qué diferencia hay entre las operaciones de clase A y las de clase B?",
      answer:
        "Las operaciones de clase A son escrituras y listados: insert, patch, list. Las de clase B son lecturas: get, getIamPolicy. GCS las factura a tarifas distintas (0,05 $ por cada 10 000 de clase A en Standard, frente a 0,004 $ las de clase B) porque las lecturas escalan más barato que las escrituras. En cargas dominadas por la escritura (registros, telemetría), la clase A domina la línea de operaciones; en cargas de lectura (servir contenido), lo hace la clase B.",
    },
    {
      question: "¿Hay descuentos por nivel gratuito?",
      answer:
        "Sí. El nivel Always Free de GCS incluye 5 GB de almacenamiento Standard, 5000 operaciones de clase A, 50 000 de clase B y 100 GB de salida (a la mayoría de destinos) al mes, en las regiones us-east1, us-west1 y us-central1. Es útil para aplicaciones pequeñas e irrelevante a escala de producción. Esta calculadora descuenta el nivel gratuito de 100 GB de salida, pero no los 5 GB de almacenamiento Always Free, porque solo se aplican en determinadas regiones.",
    },
    {
      question: "¿Conviene usar buckets Multi-Region o Dual-Region?",
      answer:
        "Los precios de esta calculadora corresponden a buckets de una sola región. El Multi-Region (por ejemplo, «us») añade en torno a un 30 % al almacenamiento y reduce la latencia para usuarios globales, lo que resulta útil para distribuir contenido. El Dual-Region (por ejemplo, nam4) añade alrededor de un 50 % por la replicación entre regiones. Una configuración de región única con Cloud CDN por delante suele salir más barata que el almacenamiento Multi-Region en cargas dominadas por la lectura.",
    },
    {
      question: "¿Cómo funciona GCS Autoclass?",
      answer:
        "Autoclass es la función de transición automática de GCS: mueve los objetos entre Standard, Nearline, Coldline y Archive según sus patrones de acceso, sin tarifas por borrado anticipado. El seguimiento cuesta unos 0,0025 $ por cada 1000 objetos y mes. Resulta útil con accesos impredecibles; con patrones predecibles, las reglas de ciclo de vida definidas a mano salen más baratas.",
    },
  ],
};

export default translation;
