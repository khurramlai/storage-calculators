import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculadora-raid-6",
  title: "Calculadora RAID 6",
  description:
    "Calculadora RAID 6 con cálculo de doble paridad. Capacidad útil, tolerancia a dos fallos de disco y velocidades de lectura y escritura con cualquier número de discos. Gratis y sin registro.",
  tagline:
    "Doble paridad distribuida por bandas: resiste el fallo simultáneo de dos discos.",
  keywords: [
    "calculadora raid 6",
    "calcular raid 6",
    "calculadora capacidad raid 6",
    "calculadora almacenamiento raid 6",
  ],

  content: {
    intro:
      "El RAID 6 es un RAID 5 con red de seguridad. Usa un segundo bloque de paridad, de modo que el arreglo sobrevive al fallo simultáneo de dos discos en lugar de uno solo. El precio es un disco más de capacidad, lo que deja (N − 2) × tamaño del disco de espacio útil. El RAID 6 es la opción estándar en arreglos grandes de 8 discos o más. Cuando reconstruir un disco de varios terabytes lleva un día entero, la probabilidad de que un segundo disco falle por el camino deja de ser despreciable. El RAID 6 hace que ese escenario sea superable.",
    formula:
      "<p><strong>Capacidad útil</strong> = <code>(N − 2) × tamaño del disco</code></p>" +
      "<p><strong>Sobrecarga de paridad</strong> = <code>2 × tamaño del disco</code></p>" +
      "<p><strong>Eficiencia de capacidad</strong> = <code>(N − 2) / N</code></p>" +
      "<p><strong>Tolerancia a fallos</strong> = 2 discos (cualesquiera)</p>" +
      "<p><strong>Velocidad de lectura</strong> ≈ <code>N − 2</code>× (solo discos de datos)</p>" +
      "<p><strong>Velocidad de escritura</strong> ≈ <code>(N − 2) / 6</code>×. Hay que recalcular dos bloques de paridad en cada escritura.</p>",
    useCases: [
      "Arreglos empresariales grandes, de 8 a 24 discos de varios terabytes",
      "Archivos y destinos de copia de seguridad donde la pérdida de datos es inaceptable",
      "Sustituir arreglos RAID 5 antiguos cuyos discos superan el umbral de reconstrucción segura",
      "Comparar el coste de un disco de paridad adicional con la eficiencia del 50 % del RAID 10",
    ],
  },

  faqs: [
    {
      question: "¿Cuándo conviene elegir RAID 6 en lugar de RAID 5?",
      answer:
        "Cualquier arreglo de 8 discos o más, o que use discos de más de unos 4 TB, gana bastante al pasar a RAID 6. El segundo bloque de paridad protege frente a ese segundo fallo que resulta estadísticamente probable durante una reconstrucción larga en un arreglo grande. El coste en capacidad (un disco adicional) es pequeño comparado con el riesgo que elimina.",
    },
    {
      question: "¿Cuál es el número mínimo de discos para un RAID 6?",
      answer:
        "Cuatro. Dos discos almacenan datos y el equivalente a dos se dedica a la paridad. Por debajo de cuatro discos el cálculo deja de tener sentido: sería preferible un RAID 1 o un RAID 10.",
    },
    {
      question:
        "¿Por qué el rendimiento de escritura del RAID 6 es inferior al del RAID 5?",
      answer:
        "El RAID 5 necesita 4 operaciones de disco por escritura (leer el dato antiguo, leer la paridad antigua, escribir el dato nuevo y escribir la paridad nueva). El RAID 6 necesita unas 6, porque hay que leer y reescribir los dos bloques de paridad. En cargas dominadas por la escritura, el RAID 10 suele encajar mejor; el RAID 6 brilla en almacenamiento de archivo con predominio de lecturas.",
    },
    {
      question: "¿El RAID 6 sobrevive de verdad a dos fallos simultáneos?",
      answer:
        "Sí, sean cuales sean los dos discos afectados. Los dos bloques de paridad codifican en conjunto información suficiente para reconstruir los datos que faltan ante cualquier combinación de dos fallos. Ese es todo el sentido del RAID 6 y el motivo de que se prefiera en arreglos grandes o críticos.",
    },
    {
      question: "¿Siguen haciendo falta discos de reserva en RAID 6?",
      answer:
        "A menudo sí. El RAID 6 te da margen, pero un disco de reserva permite que la reconstrucción empiece de inmediato en lugar de esperar a una intervención humana. En arreglos de 12 discos o más es un seguro barato: la calculadora muestra su efecto sobre la capacidad útil.",
    },
  ],
};

export default translation;
