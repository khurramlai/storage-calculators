import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculadora-almacenamiento-cctv",
  title: "Calculadora de almacenamiento CCTV",
  description:
    "Calculadora de almacenamiento CCTV para sistemas DVR y NVR. Compatible con cámaras analógicas HD-TVI, HD-CVI y AHD y con cámaras IP, en cualquier resolución, códec o periodo de retención.",
  tagline:
    "Dimensionamiento de almacenamiento para sistemas CCTV analógicos e IP: DVR, NVR o grabadores híbridos.",
  keywords: [
    "calculadora almacenamiento cctv",
    "calculadora cctv",
    "calcular almacenamiento cctv",
    "calculadora disco duro cctv",
  ],

  content: {
    intro:
      "Hoy en día «CCTV» abarca realidades muy distintas. Incluye los sistemas analógicos de siempre sobre cable coaxial (HD-TVI, HD-CVI o AHD conectados a un DVR) y los sistemas IP modernos sobre Ethernet (cámaras IP conectadas a un NVR). Esta calculadora sirve para ambos. Los sistemas analógicos HD suelen quedarse en 1080p, 15 fps y H.264: empieza por ahí. Los sistemas IP pueden llegar a 4K con códecs inteligentes H.265+. A la fórmula le da igual cuál tengas: lo único que cambia es el techo de tasa de bits.",
    formula:
      "<p><strong>Almacenamiento CCTV</strong> = <code>(tasa_bits_bps × 3600 / 8) × cámaras × horas × días</code></p>" +
      "<p>En sistemas analógicos HD-TVI, HD-CVI o AHD cuenta solo con H.264: esos DVR son anteriores a la adopción generalizada del H.265. Las cámaras analógicas de 1080p suelen codificar entre 2 y 4 Mbps. En CCTV sobre IP (cámaras conectadas a un NVR), los sistemas recientes admiten H.265 y códecs inteligentes, que reducen el almacenamiento entre un 50 y un 75 %.</p>",
    useCases: [
      "Elegir la capacidad de disco duro adecuada para un DVR o NVR antes de comprarlo",
      "Pasar de un CCTV analógico a IP y comparar las necesidades de almacenamiento",
      "Dimensionar grabadores híbridos que combinan canales analógicos e IP",
      "Contrastar promesas comerciales del tipo «30 días en 2 TB» con tu configuración real",
    ],
  },

  faqs: [
    {
      question: "¿Cuál es la diferencia entre un DVR y un NVR?",
      answer:
        "Un DVR (grabador de vídeo digital) recibe señales de vídeo analógicas por cable coaxial (HD-TVI, HD-CVI, AHD o CVBS antiguo) y las digitaliza. Un NVR (grabador de vídeo en red) recibe flujos ya digitales de cámaras de red, por Ethernet o wifi. Los NVR admiten resoluciones más altas y códecs modernos; los DVR son más baratos y reutilizan el cableado coaxial existente. Los grabadores híbridos aceptan ambos.",
    },
    {
      question: "¿Pueden grabar en 4K las cámaras CCTV analógicas?",
      answer:
        "La mayoría de los estándares analógicos HD (HD-TVI, HD-CVI, AHD) llegan hoy hasta 8 MP / 4K, pero las instalaciones reales suelen quedarse en 1080p o 4 MP. La longitud del cable coaxial y la degradación de la señal limitan el 4K analógico a tiradas cortas. Para 4K a gran escala, las cámaras IP son el estándar.",
    },
    {
      question:
        "¿Por qué mi sistema CCTV consume más almacenamiento del que indica la calculadora?",
      answer:
        "Tres motivos habituales: (1) tus cámaras usan una tasa de bits superior a la de su ficha técnica, ya que muchos modelos baratos se fijan en una tasa máxima constante sin importar la escena; (2) tu DVR o NVR está grabando doble flujo (principal y secundario) sin que lo sepas; (3) la grabación de audio está activada, lo que añade un 10-20 %. La calculadora ofrece estimaciones solo de vídeo y del flujo principal.",
    },
    {
      question: "¿Qué disco duro conviene poner en un DVR de CCTV?",
      answer:
        "Uno diseñado para videovigilancia: los Western Digital Purple y Seagate SkyHawk son los estándares del sector. Los discos de escritorio (WD Blue, Barracuda) funcionarán, pero no durarán bajo cargas de escritura continua, y la garantía se denegará por uso en videovigilancia. Los discos de videovigilancia están optimizados para escritura secuencial permanente y su firmware gestiona los comandos de streaming ATA que usan los DVR.",
    },
    {
      question: "¿Cuánto tiempo puedo grabar en un disco CCTV de 2 TB?",
      answer:
        "Depende por completo del número de cámaras, la resolución y el códec. Algunos ejemplos con grabación continua en un disco de 2 TB: 4 cámaras en 1080p H.264 ≈ 11 días; 4 cámaras en 1080p H.265 ≈ 22 días; 8 cámaras en 4K H.265 ≈ 3 días; 1 cámara en 720p H.264 ≈ 90 días. Usa la calculadora con tu configuración concreta: el marketing de los fabricantes de DVR suele citar el mejor caso, con pocos fps y baja tasa de bits.",
    },
    {
      question: "¿La calculadora tiene en cuenta la grabación de audio?",
      answer:
        "No. El audio añade en torno a 64-128 kbps por canal, algo insignificante frente a los 4 Mbps o más del vídeo en las cámaras actuales. Para la mayoría de los proyectos puedes ignorarlo. Con 16 canales de audio o más, añade un margen de alrededor del 5 %.",
    },
  ],
};

export default translation;
