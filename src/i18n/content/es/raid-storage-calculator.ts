import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculadora-raid",
  title: "Calculadora RAID",
  description:
    "Calculadora RAID gratuita para los niveles 0, 1, 5, 6, 10, 50 y 60. Obtén la capacidad útil, la tolerancia a fallos y las velocidades de lectura y escritura en segundos.",
  tagline:
    "Elige un nivel RAID, indica el número y el tamaño de los discos y comprueba exactamente cuánto almacenamiento útil obtienes.",
  keywords: [
    "calculadora raid",
    "calculadora de raid",
    "calcular capacidad raid",
    "calculadora almacenamiento raid",
    "calculadora capacidad raid",
  ],

  content: {
    intro:
      "El RAID agrupa varios discos en un único volumen lógico. Cada nivel plantea su propio equilibrio: capacidad, rendimiento y cuántos fallos de disco puede soportar el arreglo antes de perderlo todo. La parte difícil es elegir el equilibrio que encaja con tu hardware y con tu tolerancia al riesgo. Para eso sirve esta herramienta. Indica el número de discos, su tamaño, el nivel RAID y los discos de reserva que tengas previstos, y obtendrás la capacidad útil, la tolerancia a fallos y una estimación de las velocidades de lectura y escritura frente a un solo disco.",
    formula:
      "<p>La capacidad útil depende del nivel RAID:</p>" +
      "<ul>" +
      "<li><strong>RAID 0</strong>: <code>N × tamaño</code>. Sin redundancia.</li>" +
      "<li><strong>RAID 1</strong>: <code>tamaño</code>. Cada disco es una copia de los demás.</li>" +
      "<li><strong>RAID 5</strong>: <code>(N − 1) × tamaño</code>. El equivalente a un disco de paridad distribuida.</li>" +
      "<li><strong>RAID 6</strong>: <code>(N − 2) × tamaño</code>. Doble paridad.</li>" +
      "<li><strong>RAID 10</strong>: <code>(N / 2) × tamaño</code>. Espejos distribuidos por bandas.</li>" +
      "<li><strong>RAID 50</strong>: <code>grupos × (discos_por_grupo − 1) × tamaño</code>.</li>" +
      "<li><strong>RAID 60</strong>: <code>grupos × (discos_por_grupo − 2) × tamaño</code>.</li>" +
      "</ul>" +
      "<p>Los discos de reserva se restan del conjunto activo antes de aplicar el cálculo RAID.</p>",
    useCases: [
      "Dimensionar un NAS o servidor nuevo antes de comprar los discos",
      "Comparar los compromisos de RAID 5, RAID 6 y RAID 10 con el mismo número de discos",
      "Planificar una reserva de discos de repuesto sin sacrificar demasiada capacidad útil",
      "Estimar la mejora de rendimiento al ampliar un conjunto distribuido por bandas",
    ],
  },

  faqs: [
    {
      question: "¿Cuál es la diferencia entre RAID 5 y RAID 6?",
      answer:
        "El RAID 5 reserva el equivalente a un disco para la paridad y sobrevive al fallo de un solo disco. El RAID 6 reserva dos y sobrevive a dos fallos simultáneos, algo importante en arreglos grandes donde las reconstrucciones son largas y un segundo disco puede fallar mientras tanto. El RAID 6 sacrifica un disco más de capacidad a cambio de ese margen de seguridad.",
    },
    {
      question: "¿Cómo se calcula la capacidad útil en RAID 10?",
      answer:
        "El RAID 10 empareja los discos en espejos y luego distribuye los datos por bandas entre esas parejas. La capacidad útil equivale a (N / 2) × tamaño del disco: un RAID 10 de 4 discos de 4 TB ofrece 8 TB útiles. Soporta un fallo por pareja en espejo, es decir, 1 disco en el peor de los casos y la mitad de los discos en el mejor.",
    },
    {
      question: "¿Conviene usar discos de reserva?",
      answer:
        "Un disco de reserva sustituye automáticamente al que falla sin intervención humana, lo que acorta la ventana de reconstrucción durante la cual un segundo fallo sería catastrófico. Cada disco de reserva resta una unidad de capacidad útil, pero en arreglos de 8 discos o más, sobre todo en RAID 5, son muy recomendables.",
    },
    {
      question: "¿La calculadora tiene en cuenta la sobrecarga del sistema de archivos?",
      answer:
        "No; los resultados corresponden a la capacidad bruta a nivel de bloque. Los sistemas de archivos (ext4, XFS, ZFS, NTFS) suelen reservar entre un 1 y un 10 % para sus metadatos. Las instantáneas, la deduplicación, la compresión y los bloques reservados para root reducen aún más la cifra. Calcula alrededor de un 5 % de sobrecarga del sistema de archivos además de la sobrecarga RAID que se muestra aquí.",
    },
    {
      question:
        "¿Por qué la escritura en RAID 5 y RAID 6 es más lenta que la lectura?",
      answer:
        "Cada escritura obliga a recalcular la paridad de toda la banda. El RAID 5 necesita unas 4 operaciones de disco por escritura (leer el dato antiguo, leer la paridad antigua, escribir el dato nuevo y escribir la paridad nueva); el RAID 6 necesita unas 6. Las lecturas, en cambio, se paralelizan entre todos los discos de datos. Los multiplicadores mostrados son máximos teóricos: las cifras reales dependen de la caché de la controladora, del tamaño de banda y de la carga de trabajo.",
    },
    {
      question: "¿Qué es el RAID 50 y cuándo conviene usarlo?",
      answer:
        "El RAID 50 distribuye los datos por bandas entre dos o más subgrupos RAID 5. Se reconstruye más rápido que un RAID 5 grande (solo hay que reconstruir un grupo) y soporta un fallo por grupo. Es una buena opción en arreglos de 8 discos o más, donde los tiempos de reconstrucción de un RAID 5 puro se vuelven arriesgados. El RAID 60 aplica el mismo principio con subgrupos RAID 6, para una resiliencia aún mayor.",
    },
  ],
};

export default translation;
