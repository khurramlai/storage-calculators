import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculadora-almacenamiento-azure",
  title: "Calculadora de almacenamiento Azure",
  description:
    "Calculadora de almacenamiento Azure para los niveles Hot, Cool, Cold y Archive de Blob Storage. Modela transacciones, salida de datos y tarifas de recuperación en una única estimación mensual.",
  tagline:
    "El precio de Azure Blob Storage sin el laberinto habitual: los cuatro niveles comparados.",
  keywords: [
    "calculadora almacenamiento azure",
    "calculadora costo azure storage",
    "calculadora precio azure",
    "calculadora azure blob storage",
  ],

  content: {
    intro:
      "Azure Blob Storage ofrece cuatro niveles de acceso: Hot, Cool, Cold y Archive. Comparten la misma API, pero su precio cambia radicalmente. Esta calculadora los cubre los cuatro con las tarifas públicas de la región East US en LRS (almacenamiento con redundancia local). La calculadora oficial de Microsoft es completa pero abrumadora; esta va al grano: elige un nivel, introduce tus volúmenes y verás la factura mensual de los cuatro niveles en paralelo.",
    formula:
      "<p><strong>Factura de Azure</strong> = almacenamiento + transacciones + salida de datos + recuperación</p>" +
      "<ul>" +
      "<li><strong>Hot</strong>: 0,0184 $/GB/mes de almacenamiento y 0,0065 $ por cada 10 000 operaciones de escritura. Acceso frecuente.</li>" +
      "<li><strong>Cool</strong>: 0,01 $/GB/mes, mínimo de 30 días y 0,01 $/GB de recuperación. Acceso mensual.</li>" +
      "<li><strong>Cold</strong>: 0,0036 $/GB/mes, mínimo de 90 días y 0,02 $/GB de recuperación. Acceso esporádico.</li>" +
      "<li><strong>Archive</strong>: 0,00099 $/GB/mes, mínimo de 180 días y 0,022 $/GB de recuperación, más el tiempo de rehidratación. El más barato.</li>" +
      "</ul>" +
      "<p>Salida de datos: los primeros 100 GB al mes son gratuitos, después 0,087 $/GB.</p>",
    useCases: [
      "Presupuestar Azure Blob Storage para un proyecto nuevo antes de desplegarlo",
      "Comparar los niveles Hot, Cool y Cold para una biblioteca multimedia",
      "Estimar el coste del nivel Archive para una conservación normativa",
      "Modelar la replicación entre regiones y el sobrecoste que supone",
    ],
  },

  faqs: [
    {
      question: "¿Qué diferencia hay entre los niveles Cool y Cold?",
      answer:
        "Ambos apuntan al acceso poco frecuente, pero el nivel Cold (introducido en 2023) es unas tres veces más barato que Cool en almacenamiento (0,0036 $ frente a 0,01 $/GB) e impone un mínimo más largo, 90 días frente a 30. Usa Cool para datos que consultes cada mes y Cold para los que consultes trimestralmente o menos. Ambos tienen costes de transacción superiores a Hot: en cargas dominadas por la escritura, el ahorro puede desaparecer.",
    },
    {
      question: "¿Por qué es tan caro leer desde Azure Archive?",
      answer:
        "El nivel Archive cobra 5,50 $ por cada 10 000 operaciones de lectura, mil veces más que el nivel Hot. A eso se suman 0,022 $/GB de tarifa de recuperación y una rehidratación que puede tardar hasta 15 horas en prioridad estándar (o 1 hora en prioridad alta, más cara). Archive está pensado de verdad para escenarios de «escribir una vez y leer casi nunca»: copias de seguridad a largo plazo, cumplimiento normativo y archivos de datos en bruto. Si prevés leerlos, modela con cuidado el coste de recuperación.",
    },
    {
      question: "¿Cómo afecta al coste elegir LRS, ZRS o GRS?",
      answer:
        "Esta calculadora usa las tarifas de LRS (redundancia local), las más baratas. El ZRS (redundancia entre zonas) añade en torno a un 25 %. El GRS (georredundante, con replicación asíncrona entre regiones) añade cerca de un 100 %. El RA-GRS (GRS con acceso de lectura) añade alrededor de un 125 %. Para datos no críticos basta con LRS; para datos de producción con plan de recuperación ante desastres, la opción es ZRS o GRS. Multiplica la línea de almacenamiento en consecuencia.",
    },
    {
      question: "¿Azure cobra las transacciones en el nivel Archive?",
      answer:
        "Sí, y de forma notable. Escrituras en Archive: 0,13 $ por cada 10 000 operaciones, frente a 0,0065 $ en Hot. Lecturas en Archive: 5,50 $ por cada 10 000, frente a 0,00052 $ en Hot. Archive está optimizado para escrituras masivas ocasionales (subir una copia de seguridad) y recuperaciones esporádicas (una auditoría), no para operaciones habituales.",
    },
    {
      question:
        "¿Cómo se compara el precio de salida de datos de Azure con el de AWS y GCP?",
      answer:
        "La salida de datos de Azure (0,087 $/GB por encima de los 100 GB gratuitos) es la más barata de los tres grandes proveedores, algo por debajo de AWS (0,09 $) y bastante por debajo de GCP (0,12 $). En cargas con mucha salida de datos (origen de CDN, datos de entrenamiento de IA, streaming de vídeo), esto puede hacer que Azure resulte entre un 15 y un 25 % más barato que GCP en la factura total, incluso con precios de almacenamiento parecidos.",
    },
    {
      question: "¿Puedo mover datos entre niveles automáticamente?",
      answer:
        "Sí. Las reglas de Azure Blob Lifecycle Management mueven automáticamente los objetos según su fecha de última modificación o de último acceso. Por ejemplo: pasar a Cool tras 30 días sin acceso, a Cold tras 90 y a Archive tras 365. La ejecución de esas reglas se factura como transacciones: con muchos objetos, la cifra sube. Incluye ese coste de transición al calcular el ahorro de la migración.",
    },
  ],
};

export default translation;
