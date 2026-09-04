import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculadora-costo-almacenamiento-nube",
  title: "Calculadora de costes de almacenamiento en la nube",
  description:
    "Calculadora de costes de almacenamiento en la nube para AWS S3, Azure Blob, GCS y Firebase. Compara en paralelo las tarifas de almacenamiento, salida de datos, solicitudes y recuperación a precio público.",
  tagline:
    "Una sola calculadora y las cuatro grandes nubes: compara precios públicos en segundos.",
  keywords: [
    "calculadora costo almacenamiento nube",
    "calculadora precio almacenamiento nube",
    "comparador precios almacenamiento nube",
    "calculadora almacenamiento cloud",
  ],

  content: {
    intro:
      "El precio del almacenamiento en la nube tiene muchas más piezas de las que sugiere la cifra por GB. La salida de datos, el número de solicitudes, las tarifas de recuperación y la duración mínima de almacenamiento van sumando. Esta calculadora modela los cuatro grandes proveedores (AWS S3, Azure Blob, Google Cloud Storage y Firebase) a precio público en su región habitual de EE. UU., para que la comparación sea realmente posible. Cambiar de proveedor puede ahorrar entre un 20 y un 50 % en la misma carga de trabajo, y cambiar de clase (caliente, templada, fría, archivo) puede ahorrar un 80 % o más en datos que apenas tocas.",
    formula:
      "<p><strong>Coste mensual</strong> = almacenamiento + salida de datos + operaciones de escritura + operaciones de lectura + recuperación</p>" +
      "<ul>" +
      "<li><strong>Almacenamiento</strong>: <code>GB × precio/GB/mes</code> de la clase elegida</li>" +
      "<li><strong>Salida de datos</strong>: <code>máx(0; GB salidos − nivel gratuito) × precio/GB</code></li>" +
      "<li><strong>Operaciones de escritura</strong>: <code>(PUT / 1000) × precio por 1000</code></li>" +
      "<li><strong>Operaciones de lectura</strong>: <code>(GET / 1000) × precio por 1000</code></li>" +
      "<li><strong>Recuperación</strong>: <code>GB recuperados × precio/GB</code>, solo en las clases frías y de archivo</li>" +
      "</ul>" +
      "<p>El gráfico comparativo del final muestra cómo quedaría tu factura en cada clase del proveedor seleccionado. Útil para detectar que estás en la clase equivocada para tu patrón de acceso.</p>",
    useCases: [
      "Comparar AWS S3, Azure Blob y GCS para un proyecto nuevo",
      "Estimar el ahorro de mover datos fríos de S3 Standard a Glacier Deep Archive",
      "Modelar los costes de salida en aplicaciones con mucho ancho de banda (CDN, vídeo, entrenamiento de IA)",
      "Presupuestar el gasto en la nube antes de lanzar un producto",
    ],
  },

  faqs: [
    {
      question: "¿Qué nube tiene el almacenamiento de objetos más barato?",
      answer:
        "Para almacenamiento caliente o estándar: Azure Blob Hot (0,0184 $/GB) es el más barato, seguido de GCP Standard (0,020 $), AWS S3 Standard (0,023 $) y Firebase (0,026 $). Pero el almacenamiento caliente rara vez es la partida principal: la salida de datos (AWS: 0,09 $/GB; Azure: 0,087 $; GCP: 0,12 $) y el volumen de solicitudes suelen pesar más. La respuesta real depende de tu patrón de acceso.",
    },
    {
      question:
        "¿Por qué la salida de datos es tan cara en los proveedores de nube?",
      answer:
        "La salida de datos es el principal mecanismo de retención del mercado del almacenamiento en la nube: sacar 100 TB de cualquier gran nube cuesta unos 9000 $. El tráfico de entrada y el interno de una misma región son gratuitos, y el de entre regiones está a medio camino. Si tu carga de trabajo lee muchos datos, incluye la salida en el coste total: en algunos casos de vídeo, IA o CDN puede superar al almacenamiento en un factor de 10.",
    },
    {
      question: "¿Cuál es la clase más barata para copias de seguridad?",
      answer:
        "S3 Glacier Deep Archive (0,00099 $/GB/mes) y Azure Archive (0,00099 $/GB/mes) empatan como las más baratas, en torno a 1 $ por TB y mes. GCP Archive queda algo por encima, en 0,0012 $/GB. Todas exigen compromisos mínimos de 90 a 180 días y tarifas de recuperación (0,02-0,05 $/GB). Perfectas para copias que casi nunca tocarás; si prevés restaurar cada mes, calcula antes el coste de recuperación.",
    },
    {
      question: "¿Esta calculadora tiene en cuenta los niveles gratuitos?",
      answer:
        "En parte: se modelan los niveles gratuitos de salida de datos (los primeros 100 GB al mes en AWS, Azure y GCP). No se descuentan los de almacenamiento (5 GB de Firebase Spark, 5 GB del nivel gratuito de AWS durante 12 meses, 5 GB de GCS Always Free) porque solo se aplican a cuentas nuevas y tienen condiciones de elegibilidad. A escala de producción, esos niveles son irrelevantes.",
    },
    {
      question: "¿Son estos los precios que voy a pagar realmente?",
      answer:
        "Son precios públicos de la región de EE. UU. más habitual (us-east-1 en AWS, East US en Azure, us-central1 en GCP). El coste real depende de la región (algunas cuestan entre un 10 y un 30 % más), de los descuentos por compromiso de uso (Azure Reserved Capacity, CUD de GCP y Savings Plans de AWS ofrecen entre un 20 y un 50 % de rebaja) y de cualquier descuento corporativo negociado. Usa esta calculadora para comparar, no para facturar.",
    },
    {
      question: "¿Y Cloudflare R2 o Backblaze B2?",
      answer:
        "Ambos ofrecen almacenamiento bastante más barato (0,015 $ en R2 y 0,006 $ en B2 en 2025) y sin tarifas de salida, algo determinante en cargas con mucho tráfico de descarga. No se incluyen en esta calculadora porque sus prestaciones (consistencia, regiones, cumplimiento normativo) difieren de las de los grandes proveedores. Si el coste es tu prioridad y no necesitas servicios específicos de AWS, Azure o GCP, merece la pena evaluarlos por separado.",
    },
  ],
};

export default translation;
