import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculadora-raid-10",
  title: "Calculadora RAID 10",
  description:
    "Calculadora RAID 10 para arreglos de espejos distribuidos por bandas. Capacidad útil, sobrecarga de espejo, tolerancia a fallos y rendimiento de escritura con cualquier número de parejas.",
  tagline:
    "Espejos distribuidos por bandas: el RAID más rápido en escritura, resiste un disco por pareja en espejo.",
  keywords: [
    "calculadora raid 10",
    "calcular raid 10",
    "calculadora raid 1+0",
    "calculadora capacidad raid 10",
  ],

  content: {
    intro:
      "El RAID 10 (a veces escrito RAID 1+0) empareja los discos en espejos y luego distribuye los datos por bandas entre esas parejas. Pierdes la mitad de la capacidad bruta, lo cual duele, pero el rendimiento de escritura juega en otra liga frente a los RAID 5 o 6 basados en paridad. Las reconstrucciones también son rápidas, porque solo hay que copiar los datos de un disco. El RAID 10 es la opción por defecto para bases de datos, hosts de virtualización y cualquier carga con mucho tráfico de escritura o requisitos estrictos de latencia.",
    formula:
      "<p><strong>Capacidad útil</strong> = <code>(N / 2) × tamaño del disco</code></p>" +
      "<p><strong>Sobrecarga de espejo</strong> = <code>(N / 2) × tamaño del disco</code>. La mitad del arreglo.</p>" +
      "<p><strong>Eficiencia de capacidad</strong> = <code>50 %</code>, constante sea cual sea el número de discos</p>" +
      "<p><strong>Tolerancia a fallos</strong> = 1 disco en el peor de los casos, hasta N/2 en el mejor (uno por pareja en espejo)</p>" +
      "<p><strong>Velocidad de lectura</strong> ≈ <code>N</code>×. Las lecturas pueden atender desde cualquiera de los dos discos de cada espejo.</p>" +
      "<p><strong>Velocidad de escritura</strong> ≈ <code>N / 2</code>×. Cada escritura afecta a dos discos.</p>",
    useCases: [
      "Servidores de bases de datos (MySQL, PostgreSQL, SQL Server) que exigen baja latencia de escritura",
      "Hosts de virtualización (VMware, Hyper-V, Proxmox) con muchas máquinas virtuales simultáneas",
      "Servidores de correo y transaccionales con E/S aleatoria sostenida",
      "Cualquier carga en la que la velocidad de reconstrucción importe más que la eficiencia de capacidad",
    ],
  },

  faqs: [
    {
      question: "¿Cuál es el número mínimo de discos para un RAID 10?",
      answer:
        "Cuatro, es decir, dos parejas en espejo distribuidas por bandas. El número de discos debe ser par (parejas de espejos). La calculadora avisa si introduces un número impar e indica cuántos discos quedarían sin usar.",
    },
    {
      question: "¿Por qué el RAID 10 es más rápido que el RAID 5 o el 6?",
      answer:
        "No hay cálculo de paridad. Una escritura simplemente llega a los dos discos de una pareja en espejo a la vez, sin ciclo de lectura-modificación-escritura. En cargas de E/S aleatoria (bases de datos, máquinas virtuales) la diferencia puede ser de 3 a 5 veces en rendimiento y de un orden de magnitud en latencia.",
    },
    {
      question: "¿Cuántos discos pueden fallar en un RAID 10?",
      answer:
        "En el peor de los casos, uno solo: si fallan los dos discos de la misma pareja en espejo, el arreglo se pierde. En el mejor de los casos, la mitad de los discos (N/2), siempre que falle exactamente uno de cada pareja. La calculadora muestra la tolerancia a fallos en ambos supuestos.",
    },
    {
      question: "¿El RAID 10 es lo mismo que el RAID 0+1?",
      answer:
        "No. Suenan parecido, pero el RAID 0+1 primero distribuye por bandas y luego pone en espejo todo el conjunto. Su tolerancia a fallos es peor: perder un disco en cualquiera de los conjuntos deja ese lado entero fuera de servicio y te expone a cualquier fallo del otro lado. El RAID 10 (primero espejo y luego bandas) es casi siempre la elección correcta.",
    },
    {
      question: "¿Por qué el RAID 10 sale más caro que el RAID 5 o el 6?",
      answer:
        "Pagas una redundancia del 100 %: cada byte se guarda dos veces. Los RAID 5 y 6 solo reservan el equivalente a uno o dos discos para la paridad, de modo que su eficiencia de capacidad mejora al añadir discos. En un arreglo de 10 discos de 4 TB, el RAID 10 ofrece 20 TB útiles, frente a 36 TB del RAID 5 y 32 TB del RAID 6. Ese sobrecoste compra rendimiento y reconstrucciones rápidas.",
    },
  ],
};

export default translation;
