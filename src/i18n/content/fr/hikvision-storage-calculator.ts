import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculateur-stockage-hikvision",
  title: "Calculateur de stockage Hikvision",
  description:
    "Calculateur de stockage Hikvision calibré sur le codec intelligent H.265+ et les réglages par défaut des caméras DS-2CD. Dimensionnez les disques des NVR DS-76xx, DS-77xx ou DS-96xx en quelques secondes.",
  tagline:
    "Dimensionnement calibré sur le codec intelligent H.265+ de Hikvision et les réglages par défaut des caméras DS-2CD.",
  keywords: [
    "calculateur stockage hikvision",
    "calculateur hikvision",
    "calculateur stockage nvr hikvision",
    "calcul stockage hikvision h265+",
  ],

  content: {
    intro:
      "Le codec intelligent H.265+ de Hikvision est l'un des plus efficaces du marché de la vidéosurveillance : il réduit d'environ 75 % la taille des fichiers par rapport au H.264 sur une même scène. Ce calculateur part des réglages courants des caméras Hikvision DS-2CD : 1080p, 25 ips, H.265+, enregistrement continu 24 h/24. Les calculs suivent les spécifications de dimensionnement publiées par Hikvision. Si vous dimensionnez les disques d'un NVR DS-76xx, DS-77xx ou DS-96xx, la capacité recommandée correspond aux configurations de baies habituelles de ces châssis.",
    formula:
      "<p><strong>Stockage Hikvision</strong> = <code>(débit × 3600 / 8) × caméras × heures × jours</code></p>" +
      "<p>L'encodeur H.265+ de Hikvision analyse chaque image et réduit le débit sur les zones statiques (arrière-plans, ciel, murs) tout en préservant la qualité sur les éléments en mouvement. Le résultat : environ 75 % de débit en moins qu'en H.264 et 50 % de moins qu'en H.265 classique sur des scènes courantes. C'est ce que modélise l'option H.265+ du calculateur.</p>",
    useCases: [
      "Dimensionner les disques des NVR Hikvision des séries DS-76xx, DS-77xx et DS-96xx",
      "Planifier une installation 100 % Hikvision mêlant plusieurs modèles de caméras DS-2CD",
      "Comparer les économies du H.265+ pour justifier le remplacement de caméras H.264 anciennes",
      "Vérifier l'estimation de stockage d'un installateur Hikvision face au calcul réel",
    ],
  },

  faqs: [
    {
      question:
        "Quelle est la différence entre H.265 et H.265+ sur les caméras Hikvision ?",
      answer:
        "Le H.265 (HEVC) est le codec vidéo international, environ 50 % plus efficace que le H.264. Le H.265+ est l'extension propriétaire de Hikvision qui y ajoute un contrôle intelligent du débit : l'encodeur réduit le débit sur les zones fixes de la scène, ce qui apporte environ 50 % de réduction supplémentaire par rapport au H.265 standard. L'économie nette face au H.264 atteint donc environ 75 %. La qualité sur les sujets en mouvement est préservée ; seuls les arrière-plans statiques sont compressés plus fortement.",
    },
    {
      question: "Le H.265+ fonctionne-t-il avec tous les NVR ?",
      answer:
        "Le H.265+ exige une prise en charge par la caméra et par le NVR. Tous les NVR Hikvision récents (séries DS-76xx/77xx/96xx I et K) décodent le H.265+ pour la visualisation en direct et l'enregistrement. Les NVR et VMS tiers peuvent recevoir le flux comme du H.265 standard : plus léger que du H.264, mais pas autant que ce dont la caméra est capable. Associez toujours des caméras Hikvision à des NVR Hikvision ou OEM Hikvision pour bénéficier pleinement du H.265+.",
    },
    {
      question: "Quels disques Hikvision recommande-t-il pour ses NVR ?",
      answer:
        "La liste de compatibilité de Hikvision privilégie les disques de vidéosurveillance, principalement les WD Purple, Seagate SkyHawk et Toshiba S300. La capacité maximale prise en charge dépend du modèle de NVR : les modèles récents (2022 et après) acceptent jusqu'à 20 To par baie. Le micrologiciel des NVR Hikvision est optimisé pour les écritures séquentielles de ces disques ; utiliser des modèles grand public entraîne des performances moindres et des pannes plus précoces.",
    },
    {
      question:
        "Pourquoi mon NVR Hikvision consomme-t-il plus de stockage que ce qu'indique le calculateur ?",
      answer:
        "Les causes propres aux installations Hikvision : (1) la caméra enregistre à la fois le flux principal et le flux secondaire, ce qui double le stockage si l'enregistrement du flux secondaire est activé dans le NVR ; (2) l'enregistrement d'événements intelligents crée des archives séparées en plus du flux continu ; (3) la caméra utilise un débit fixe (CBR) plutôt que du VBR. Vérifiez les réglages d'encodage de la caméra et le calendrier d'enregistrement du NVR.",
    },
    {
      question: "Comment activer le H.265+ sur une caméra Hikvision ?",
      answer:
        "Depuis l'interface web de la caméra (ou via iVMS-4200 / Hik-Connect) : Configuration → Vidéo/Audio → Vidéo → Encodage vidéo → sélectionnez « H.265+ ». Le réglage existe aussi au niveau du NVR, dans la configuration de la voie concernée. Si le H.265+ est grisé, le micrologiciel doit peut-être être mis à jour, ou le modèle ne le prend pas en charge (certaines caméras DS-2CD2xxx-W et -G anciennes se limitent au H.264).",
    },
    {
      question: "Ces débits correspondent-ils aux spécifications officielles de Hikvision ?",
      answer:
        "Les estimations de débit approchent les recommandations de dimensionnement publiées par Hikvision (disponibles dans son calculateur de stockage iVMS officiel et dans les manuels produits). Le débit réel varie de ±20 % selon la complexité de la scène. Le calculateur fournit une estimation de niveau planification : pour un projet au budget serré, ajoutez une marge de sécurité de 10 à 20 %.",
    },
  ],
};

export default translation;
