import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculadora-almacenamiento-nvr",
  title: "Calculadora de almacenamiento NVR",
  description:
    "Calculadora de almacenamiento NVR que dimensiona los discos duros según el número de cámaras, la resolución, el códec y la retención. Modela el ahorro del códec inteligente H.265+ y los discos para videovigilancia.",
  tagline:
    "Dimensiona los discos de tu NVR antes de comprarlos: cámaras IP, códecs modernos y cálculos exactos.",
  keywords: [
    "calculadora almacenamiento nvr",
    "calculadora disco duro nvr",
    "calculadora nvr",
    "almacenamiento grabador de vídeo en red",
  ],

  content: {
    intro:
      "Un NVR recibe los flujos de las cámaras IP por Ethernet y los escribe en sus discos duros internos. Sus límites de hardware son el número de canales (cuántas cámaras), el número de bahías (cuántos discos) y la capacidad máxima que acepta su firmware. Pero el almacenamiento que realmente necesitas depende de la resolución, los fotogramas por segundo, el códec y cuánto tiempo quieras conservar las grabaciones. Esta calculadora te da la respuesta en unos segundos, junto con un disco recomendado compatible con los chasis de NVR habituales: de 1, 2, 4 u 8 bahías.",
    formula:
      "<p><strong>Almacenamiento NVR</strong> = <code>(tasa_bits_bps × 3600 / 8) × cámaras × horas × días</code></p>" +
      "<p>Los NVR modernos admiten H.265 de forma nativa. Los modelos de gama alta admiten además códecs inteligentes (H.265+, WiseStream II, Zipstream) que adaptan la tasa de bits a la complejidad de la escena. Pasar de H.264 a H.265 suele reducir el almacenamiento a la mitad, y los códecs inteligentes H.265+ lo vuelven a reducir a la mitad.</p>" +
      "<p>Los <strong>discos recomendados</strong> tienen en cuenta las configuraciones de bahías habituales. La calculadora propone la menor capacidad en un solo disco que encaje, y pasa a varios discos cuando el requisito supera los 20 TB.</p>",
    useCases: [
      "Elegir un NVR antes de comprarlo, ajustando el número de canales y la capacidad de disco a tus necesidades",
      "Sustituir los discos antiguos de un NVR existente por otros de mayor capacidad",
      "Planificar el almacenamiento de un NVR con RAID (combínalo con la calculadora RAID)",
      "Dimensionar el almacenamiento al migrar del vídeo en la nube a un NVR local",
    ],
  },

  faqs: [
    {
      question: "¿Qué capacidad de disco duro necesita mi NVR?",
      answer:
        "Depende de tres factores: el número de cámaras, la tasa de bits total por cámara y el periodo de retención. Usa esta calculadora con tu configuración real: las respuestas genéricas del tipo «8 TB para 8 cámaras» inducen a error porque dan por hecha una resolución y un códec concretos. Para la mayoría de instalaciones en 1080p o 4 MP con H.265 y 30 días de retención, cuenta con entre 4 y 12 TB por NVR.",
    },
    {
      question: "¿Un NVR admite cualquier disco duro?",
      answer:
        "Técnicamente sí, pero conviene usar discos para videovigilancia. Los fabricantes de NVR (Hikvision, Dahua, UniFi, Synology) publican listas de compatibilidad; un disco que no figure en ellas puede funcionar, pero sin soporte. Los WD Purple, Seagate SkyHawk y Toshiba S300 son opciones seguras. Algunos NVR profesionales exigen discos certificados para funcionamiento 24/7 en chasis NAS.",
    },
    {
      question:
        "¿Por qué mi NVR consume más almacenamiento del que indica la calculadora?",
      answer:
        "Las causas habituales: (1) la grabación en doble flujo (principal y secundario) duplica el almacenamiento si se guardan ambos; (2) unos intervalos entre fotogramas clave demasiado altos reducen la eficacia de los códecs inteligentes; (3) el supuesto de una escena poco compleja no se cumple en entornos con mucha actividad; (4) el NVR también graba clips de eventos además del flujo continuo. Revisa la configuración: casi todos los NVR permiten desactivar la grabación del flujo secundario o el archivo de eventos de movimiento.",
    },
    {
      question: "¿Cuántas cámaras admite un NVR?",
      answer:
        "El número de canales depende del modelo: los tamaños habituales son 4, 8, 16, 32 y 64 canales. El almacenamiento crece de forma lineal con los canales, pero la capacidad del switch PoE integrado, la potencia de decodificación del procesador (para la visualización en directo) y el total de bahías pueden convertirse en el límite antes que el número de canales. Esta calculadora cubre la parte de almacenamiento; consulta la ficha técnica del NVR para el resto de límites.",
    },
    {
      question: "¿Conviene usar RAID dentro de un NVR?",
      answer:
        "Sí en cualquier instalación profesional a partir de 4 discos. Un NVR de un solo disco pierde todas las grabaciones si este falla. El RAID 5 o el RAID 6 permiten seguir funcionando pese a uno o dos fallos de disco, con una pérdida de capacidad reducida. Consulta nuestra calculadora RAID para dimensionar la capa RAID sobre esta estimación de almacenamiento.",
    },
    {
      question: "¿La calculadora tiene en cuenta la sobrecarga del firmware del NVR?",
      answer:
        "Da por hecho que prácticamente toda la capacidad del disco está disponible para vídeo. En la práctica, el firmware del NVR reserva alrededor de un 1-2 % para datos del sistema, y la sobrecarga de los sistemas de archivos ext4 o btrfs añade otro 3-5 %. Prevé un margen de un 5 % sobre la cifra indicada: un requisito de 10 TB necesita en realidad unos 10,5 TB de disco.",
    },
  ],
};

export default translation;
