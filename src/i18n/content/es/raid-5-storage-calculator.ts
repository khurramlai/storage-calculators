import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculadora-raid-5",
  title: "Calculadora RAID 5",
  description:
    "Calculadora RAID 5: capacidad útil, sobrecarga de paridad, tolerancia a fallos y rendimiento para cualquier número y tamaño de discos. Gratis, al instante y sin registro.",
  tagline:
    "Paridad simple distribuida por bandas: alta eficiencia y resistencia al fallo de un disco.",
  keywords: [
    "calculadora raid 5",
    "calcular raid 5",
    "calculadora capacidad raid 5",
    "calculadora almacenamiento raid 5",
  ],

  content: {
    intro:
      "El RAID 5 distribuye los datos por bandas entre todos los discos del arreglo y reserva el equivalente a un disco para la paridad. Si un disco falla, el arreglo lo reconstruye a partir de los bloques de paridad de los supervivientes. La capacidad útil es simplemente (N − 1) × tamaño del disco. El RAID 5 sigue siendo muy popular en servidores pequeños y NAS domésticos porque las cuentas salen a favor: conservas casi toda la capacidad y aguantas el fallo de un disco. Es la opción evidente cuando basta con un disco de redundancia.",
    formula:
      "<p><strong>Capacidad útil</strong> = <code>(N − 1) × tamaño del disco</code></p>" +
      "<p><strong>Sobrecarga de paridad</strong> = <code>tamaño del disco</code> (el equivalente a un disco)</p>" +
      "<p><strong>Eficiencia de capacidad</strong> = <code>(N − 1) / N</code>. Se acerca al 100 % a medida que se añaden discos.</p>" +
      "<p><strong>Tolerancia a fallos</strong> = 1 disco</p>" +
      "<p><strong>Velocidad de lectura</strong> ≈ <code>N − 1</code>× (lecturas en paralelo entre los discos de datos)</p>" +
      "<p><strong>Velocidad de escritura</strong> ≈ <code>(N − 1) / 4</code>×. Cada escritura obliga a leer el dato y la paridad antiguos y a escribir los nuevos.</p>",
    useCases: [
      "NAS de pequeñas empresas con 4 a 6 discos donde prima la capacidad",
      "Servidores multimedia domésticos donde basta con un disco de redundancia",
      "Destinos de copia de seguridad cuando el arreglo no es la copia principal",
      "Comparar la eficiencia frente al RAID 6 antes de comprar los discos",
    ],
  },

  faqs: [
    {
      question: "¿Por qué el RAID 5 es arriesgado con discos grandes?",
      answer:
        "A medida que los discos alcanzan varios terabytes, los tiempos de reconstrucción se alargan a muchas horas o incluso días. Durante toda esa ventana el arreglo queda sin protección: si falla un segundo disco (o aparece un error de lectura irrecuperable en los restantes), se pierden todos los datos. En arreglos de 8 discos o más, o con discos de más de unos 4 TB, muchos administradores prefieren RAID 6 o RAID 10.",
    },
    {
      question: "¿Cuál es el número mínimo de discos para un RAID 5?",
      answer:
        "Tres. Dos discos almacenan datos y el equivalente a un disco se dedica a la paridad. Con solo dos discos no habría nada que distribuir por bandas: en ese caso convendría un RAID 1.",
    },
    {
      question: "¿El RAID 5 usa un disco de paridad dedicado?",
      answer:
        "No. La paridad se reparte entre todos los discos, a diferencia del RAID 4, que sí usa un disco de paridad dedicado. Así se evita que ese disco se convierta en un cuello de botella de escritura y se consigue que cualquier disco pueda fallar sin que desaparezca toda la paridad.",
    },
    {
      question: "¿Cuánto tarda una reconstrucción de RAID 5?",
      answer:
        "Las reconstrucciones suelen ir a entre 50 y 150 MB/s según la controladora, el tipo de disco y la carga de trabajo simultánea. Reconstruir un disco de 4 TB lleva a menudo entre 8 y 24 horas. Los arreglos de SSD se reconstruyen mucho más rápido. Durante la reconstrucción el arreglo está degradado y el fallo de otro disco supondría la pérdida total de los datos.",
    },
    {
      question: "¿Puedo añadir un disco de reserva a un RAID 5?",
      answer:
        "Sí, y es recomendable a partir de 6 discos. El disco de reserva inicia la reconstrucción en cuanto falla un disco, lo que acorta el periodo de exposición. Indica el número de discos de reserva en la calculadora para ver cómo afecta a la capacidad útil.",
    },
  ],
};

export default translation;
