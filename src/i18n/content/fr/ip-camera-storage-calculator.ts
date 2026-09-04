import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculateur-stockage-camera-ip",
  title: "Calculateur de stockage pour caméra IP",
  description:
    "Calculateur de stockage pour caméras IP avec calcul du débit par caméra en H.264, H.265 et codecs intelligents. Choisissez résolution et cadence, obtenez le stockage exact par appareil.",
  tagline:
    "Planification du stockage caméra par caméra, avec des calculs réalistes de codec et de résolution.",
  keywords: [
    "calculateur stockage caméra ip",
    "calculateur stockage caméra réseau",
    "calcul débit caméra ip",
    "stockage caméra ip",
  ],

  content: {
    intro:
      "Les caméras IP diffusent de la vidéo numérique sur le réseau, généralement via ONVIF, RTSP ou un protocole propriétaire. Elles alimentent un NVR, un VMS ou un enregistreur sur NAS. Leurs besoins de stockage sont déterminés par les réglages d'encodage de la caméra elle-même, pas par l'enregistreur. Il est donc logique de modéliser d'abord une seule caméra, puis de multiplier. La valeur par défaut est ici fixée à une caméra afin que vous puissiez comparer résolutions et codecs sur une même scène avant de calculer le total.",
    formula:
      "<p><strong>Stockage par caméra</strong> = <code>(débit × 3600 / 8) × heures × jours</code></p>" +
      "<p>Le débit d'une caméra IP se règle dans sa configuration d'encodage. En VBR (débit variable), la moyenne se situe généralement autour du plafond configuré. En CBR (débit constant), il reste stable. Les codecs intelligents (H.265+ chez Hikvision, WiseStream II chez Hanwha, Zipstream chez Axis) ajustent dynamiquement le débit selon le mouvement dans la scène, réduisant souvent le stockage de 50 à 75 % par rapport au H.265 classique.</p>",
    useCases: [
      "Comparer des montées en résolution (la 4K exige-t-elle vraiment 4 fois le stockage du 1080p ?)",
      "Vérifier l'efficacité du codec d'un modèle de caméra précis avant l'achat",
      "Dimensionner le stockage embarqué des caméras équipées d'un emplacement pour carte SD",
      "Prévoir aussi la bande passante de diffusion (débit × caméras = débit réseau nécessaire)",
    ],
  },

  faqs: [
    {
      question: "Quel débit régler sur ma caméra IP ?",
      answer:
        "Pour du 1080p H.264 à 25 ips, 4 Mbit/s constituent une bonne base pour des scènes de surveillance courantes. Descendez à 2 Mbit/s pour des scènes statiques (parkings), montez à 6-8 Mbit/s pour les zones exigeant du détail (lecture de plaques, caisses en magasin). En H.265, divisez ces valeurs par deux. Les codecs intelligents (H.265+) s'ajustent automatiquement : vous fixez un débit maximal et la caméra n'utilise que ce qui est nécessaire.",
    },
    {
      question: "VBR ou CBR : lequel consomme le plus de stockage ?",
      answer:
        "Le CBR (débit constant) consomme un stockage prévisible et légèrement supérieur, ce qui est utile quand la bande passante doit rester stable pour le dimensionnement réseau. Le VBR (débit variable) consomme moins sur les scènes calmes et davantage sur les scènes animées, pour un même plafond. Pour la planification, considérez qu'un flux VBR se situe en moyenne à 60-70 % de son plafond. Les estimations de débit du calculateur correspondent à du VBR.",
    },
    {
      question: "Comment le stockage en 4K se compare-t-il au 1080p ?",
      answer:
        "La 4K (3840×2160, 8 MP) représente 4 fois plus de pixels que le 1080p (2 MP), mais le débit encodé n'est supérieur que d'un facteur 3 à 4, la compression gagnant en efficacité aux hautes résolutions. Avec le H.265+, l'écart se réduit encore : sur une même scène, un flux 4K H.265+ peut être plus léger qu'un flux 1080p H.264. Le calculateur en tient compte correctement.",
    },
    {
      question: "La compression a-t-elle lieu dans la caméra ou dans le NVR ?",
      answer:
        "Dans la caméra. Les caméras IP embarquent un encodeur (généralement un SoC Hi3516, GK7202 ou Ambarella) qui compresse avant transmission. Le NVR ou le VMS reçoit un flux déjà compressé et l'écrit tel quel sur le disque. Modifier les réglages de codec sur la caméra change donc simultanément la bande passante et le stockage.",
    },
    {
      question: "Quelle différence entre flux principal et flux secondaire ?",
      answer:
        "La plupart des caméras IP produisent deux flux : un flux principal (pleine résolution, utilisé pour l'enregistrement) et un flux secondaire (résolution réduite, utilisé pour la visualisation en direct sur mobile et les mosaïques multi-caméras, afin d'économiser la bande passante). Le calculateur n'estime que le flux principal. Si votre NVR enregistre aussi le flux secondaire, ce qui est fréquent mais facultatif, ajoutez 5 à 15 % au total.",
    },
    {
      question:
        "La détection de mouvement permet-elle de réduire le stockage d'une caméra IP ?",
      answer:
        "Oui : l'enregistrement sur détection réduit généralement le stockage de 60 à 90 % par rapport à un enregistrement continu, selon l'activité de la scène. Le mode « sur détection de mouvement » du calculateur retient une durée d'enregistrement effective de 40 %, ce qui est prudent. L'enregistrement sur événements intelligents (classification personne/véhicule uniquement) peut descendre sous 10 % avec les caméras dotées d'IA récentes.",
    },
  ],
};

export default translation;
