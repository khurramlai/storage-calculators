import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculadora-almacenamiento-frio-aws-s3",
  title: "Calculadora de almacenamiento frío de AWS S3",
  description:
    "Calculadora de almacenamiento frío de AWS S3 para las tres clases de Glacier. Modela las tarifas de recuperación, los mínimos de 90 y 180 días y el coste mensual real en una sola vista.",
  tagline:
    "El cálculo real del almacenamiento frío: el precio por GB parece irrisorio, pero Glacier esconde el coste en las tarifas de recuperación.",
  keywords: [
    "calculadora almacenamiento frio aws s3",
    "calculadora s3 glacier",
    "calculadora glacier deep archive",
    "precio almacenamiento frio aws",
  ],

  content: {
    intro:
      "Las clases S3 Glacier son el almacenamiento de objetos más barato de AWS. Deep Archive ronda 1 $ por TB y mes, unas 25 veces menos que S3 Standard. Pero el precio por GB no lo cuenta todo. Todas las clases de Glacier cobran una tarifa de recuperación cuando realmente recuperas los datos, imponen un compromiso mínimo de 90 o 180 días con penalización por borrado anticipado y aplican costes por solicitud más altos. Esta calculadora parte de un escenario de archivo frío realista: 10 TB almacenados y 100 GB recuperados cada mes, para que el coste de recuperación aparezca junto al de almacenamiento, que es donde debe estar.",
    formula:
      "<p><strong>Coste total de Glacier</strong> = almacenamiento + operaciones de escritura + recuperación + salida de datos (si salen de AWS)</p>" +
      "<p><strong>Glacier Instant Retrieval</strong>: 0,004 $/GB/mes de almacenamiento, 0,03 $/GB de recuperación y mínimo de 90 días. Acceso en milisegundos. Adecuado para archivos que quizá necesites restaurar rápido.</p>" +
      "<p><strong>Glacier Flexible Retrieval</strong>: 0,0036 $/GB/mes de almacenamiento, 0,01 $/GB de recuperación y mínimo de 90 días. Restauración de minutos a horas.</p>" +
      "<p><strong>Glacier Deep Archive</strong>: 0,00099 $/GB/mes de almacenamiento, 0,02 $/GB de recuperación y mínimo de 180 días. Restauración en más de 12 horas. La más barata y también la más lenta.</p>",
    useCases: [
      "Comparar las clases de Glacier para sustituir una biblioteca de cintas",
      "Modelar los costes de restauración en un escenario de conservación normativa",
      "Calcular el punto de equilibrio de Deep Archive frente a una cintoteca local",
      "Estimar el coste de una migración masiva puntual a almacenamiento frío",
    ],
  },

  faqs: [
    {
      question: "¿Cuál es la clase de almacenamiento frío de S3 más barata?",
      answer:
        "Glacier Deep Archive, a 0,00099 $/GB/mes, alrededor de 1 $ por TB y mes. El inconveniente: un cargo mínimo de 180 días de almacenamiento (si borras antes, pagas igualmente los 180 días), 0,02 $/GB de tarifa de recuperación y más de 12 horas de espera. Para un archivo de 100 TB intacto durante un año, Deep Archive cuesta unos 1200 $ en total, frente a los cerca de 28 000 $ de S3 Standard.",
    },
    {
      question: "¿Cómo funciona el mínimo de 180 días de Deep Archive?",
      answer:
        "Si borras un objeto antes de los 180 días, AWS lo factura igualmente como si se hubiera almacenado ese periodo completo. Ejemplo: subes 1 TB el día 1 y lo borras el día 30; se te seguirán facturando los 150 días restantes (0,50 $). Para datos que puedan modificarse o borrarse, Glacier Flexible Retrieval (mínimo de 90 días) es más seguro. Para archivos realmente inmutables (copias de seguridad, cumplimiento normativo), esa penalización es irrelevante.",
    },
    {
      question:
        "¿Cuánto tarda realmente una restauración desde Glacier Deep Archive?",
      answer:
        "Restauración estándar: 12 horas de media, con un máximo garantizado de 48. Restauración masiva (a escala de petabytes): hasta 48 horas, pero más barata por GB. No existe opción acelerada para Deep Archive, a diferencia de Glacier Flexible. Planifícalo: si necesitas acceso el mismo día, Glacier Instant Retrieval (0,004 $/GB) es mejor opción pese a costar cuatro veces más.",
    },
    {
      question:
        "¿Se paga la recuperación Y la salida de datos al descargar desde Glacier?",
      answer:
        "Sí. La recuperación devuelve los datos a S3 Standard, donde permanecen durante el tiempo configurado, y después se aplican los cargos de salida cuando abandonan AWS. Coste total de restaurar y descargar 1 TB desde Deep Archive: 20 $ de recuperación + 90 $ de salida = 110 $. Programa una caducidad corta para las copias restauradas (S3 las borra automáticamente) y evita pagar dos veces.",
    },
    {
      question:
        "¿Cuándo conviene Glacier Instant Retrieval frente a Standard-IA?",
      answer:
        "Glacier Instant (0,004 $/GB) es más barato que Standard-IA (0,0125 $/GB) en almacenamiento, pero cuesta el triple por recuperación (0,03 $/GB frente a 0,01 $). El punto de cruce: si recuperas menos de un 3 % de los datos almacenados al mes, gana Glacier Instant; por encima de esa cifra, sale mejor Standard-IA. Ambos tienen mínimos similares de 90 días.",
    },
    {
      question:
        "¿Puedo usar el ciclo de vida de S3 para pasar automáticamente a Glacier?",
      answer:
        "Sí. Las reglas de ciclo de vida de S3 permiten encadenar transiciones: Standard → Standard-IA a los 30 días → Glacier Instant a los 60 → Deep Archive a los 365. Es el patrón habitual para archivos de registros y copias de seguridad antiguas. Las propias transiciones se facturan (0,05 $ por cada 1000 solicitudes hacia Deep Archive), así que resultan más rentables con objetos de al menos 128 KB.",
    },
  ],
};

export default translation;
