import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculadora-almacenamiento-genetec",
  title: "Calculadora de almacenamiento Genetec",
  description:
    "Calculadora de almacenamiento Genetec para dimensionar la capacidad de los Archiver de Security Center. Pensada para instalaciones corporativas multimarca con periodos de retención largos.",
  tagline:
    "Dimensionamiento de la capacidad de los Archiver en instalaciones de Genetec Security Center a gran escala.",
  keywords: [
    "calculadora almacenamiento genetec",
    "almacenamiento genetec security center",
    "calculadora archiver genetec",
    "dimensionar almacenamiento genetec",
  ],

  content: {
    intro:
      "Genetec Security Center pertenece al terreno de los VMS corporativos. Su rol Archiver recoge vídeo de muchísimas cámaras, a menudo cientos, con periodos de retención largos. Dimensionar el almacenamiento para Genetec no se parece a dimensionar un NVR: hay que pensar en IOPS de escritura sostenidas, retenciones de varias semanas y, a veces, almacenamiento por niveles, con discos rápidos para las grabaciones recientes y discos más baratos para las antiguas. Los valores por defecto reflejan una escala corporativa media: 16 cámaras y 60 días de retención. La capacidad bruta resultante es lo que las herramientas de dimensionamiento de Genetec traducen después en número de Archivers y disposición de las cabinas de discos.",
    formula:
      "<p><strong>Almacenamiento del Archiver de Genetec</strong> = <code>(tasa de bits × 3600 / 8) × cámaras × horas × días</code></p>" +
      "<p>Security Center guarda el vídeo en formato <em>G64x</em>, un contenedor multiplexado propietario que envuelve el flujo H.264 o H.265 subyacente. El G64x añade una sobrecarga mínima, por debajo del 2 %, así que la capacidad bruta calculada se aplica directamente. En instalaciones por niveles, donde parte de las grabaciones pasa a un almacenamiento de archivo más lento, divide la retención en tramos «caliente» y «frío» y ejecuta la calculadora dos veces.</p>",
    useCases: [
      "Dimensionar el almacenamiento de los servidores Archiver en una nueva instalación de Security Center",
      "Contrastar la estimación de almacenamiento de un socio de Genetec con el cálculo real",
      "Planificar la ampliación de un Archiver al añadir canales de cámara",
      "Organizar el almacenamiento por niveles: cómo repartir los discos entre archivo caliente y frío",
    ],
  },

  faqs: [
    {
      question: "¿Qué es un Archiver de Genetec?",
      answer:
        "El Archiver es el rol de Security Center encargado de recibir el vídeo de las cámaras y escribirlo en disco. Un Archiver suele gestionar entre 50 y 200 cámaras según la tasa de bits y el caudal total. Las instalaciones con varios Archivers son habituales en emplazamientos con miles de cámaras. Esta calculadora da el requisito de almacenamiento por Archiver: multiplícalo por el número de Archivers para toda la instalación.",
    },
    {
      question: "¿Security Center admite H.265 y códecs inteligentes?",
      answer:
        "Sí. Security Center admite H.265 desde la versión 5.7 y acepta las variantes inteligentes (H.265+ de Hikvision, WiseStream II de Hanwha, Zipstream de Axis) como flujos H.265 estándar, de modo que el ahorro de almacenamiento llega al Archiver. La opción «H.265+» de la calculadora modela esos códecs con el porcentaje de ahorro publicado.",
    },
    {
      question:
        "¿Cuánta diferencia de almacenamiento hay entre grabación continua y por movimiento en Security Center?",
      answer:
        "Security Center permite reglas de grabación por cámara y por horario. La grabación por movimiento suele reducir el almacenamiento entre un 60 y un 90 % en entornos bien ajustados, pero las instalaciones corporativas a menudo exigen grabación continua por motivos de cumplimiento (banca, juego, transporte). La calculadora admite ambos modos: elige «solo por detección de movimiento» para la estimación con ciclo del 40 %, o «continua» para 24/7.",
    },
    {
      question: "¿Genetec exige hardware de almacenamiento específico?",
      answer:
        "Security Center admite cualquier almacenamiento en bloque: discos conectados directamente al servidor Archiver, SAN o NAS mediante iSCSI o SMB. Las instalaciones corporativas suelen usar cabinas RAID internas en servidores de 2U o 4U, o almacenamiento SAN compartido entre varios Archivers. Los discos para videovigilancia (WD Purple Pro, Seagate Exos) son preferibles a los de consumo. La calculadora ofrece la capacidad bruta; el dimensionamiento en IOPS es otro asunto, documentado en las guías de hardware de Genetec.",
    },
    {
      question:
        "¿Puede Genetec mover automáticamente las grabaciones antiguas a un almacenamiento más barato?",
      answer:
        "Sí. Security Center incorpora una transferencia de archivo que mueve las grabaciones del almacenamiento principal (caliente) a uno secundario (frío) transcurrido un tiempo configurable. El almacenamiento frío puede basarse en discos de gran capacidad y bajo coste o en almacenamiento de objetos. Para planificar una instalación por niveles, ejecuta la calculadora dos veces: una para la retención caliente (por ejemplo, 14 días) y otra para la fría (60 días menos 14). Después suma los resultados.",
    },
    {
      question: "¿Por qué el disco de mi Archiver se llena más rápido de lo previsto?",
      answer:
        "Lo más habitual: (1) las cámaras usan una tasa de bits superior a la de su ficha técnica (comprueba siempre las estadísticas de flujo entrante del Archiver); (2) la grabación de audio está activada en muchos canales; (3) también se archiva la reproducción de las grabaciones locales de las cámaras; (4) los marcadores e incidencias añaden una pequeña sobrecarga. La vista de estadísticas de flujo de Security Center muestra la tasa de escritura real por cámara.",
    },
  ],
};

export default translation;
