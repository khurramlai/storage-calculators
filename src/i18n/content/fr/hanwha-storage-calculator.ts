import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculateur-stockage-hanwha",
  title: "Calculateur de stockage Hanwha",
  description:
    "Calculateur de stockage Hanwha pour caméras Wisenet, avec modélisation des économies du codec WiseStream II. Les valeurs par défaut correspondent aux séries P et Q reliées à des NVR XRN, SRN ou WRN.",
  tagline:
    "Planification du stockage des caméras Hanwha Wisenet, avec modélisation de la compression WiseStream II.",
  keywords: [
    "calculateur stockage hanwha",
    "calculateur stockage wisenet",
    "calculateur hanwha wisenet",
    "stockage samsung wisenet",
  ],

  content: {
    intro:
      "Les caméras IP Hanwha Wisenet (anciennement Samsung Techwin) utilisent WiseStream II, un codec intelligent sensible au contenu de la scène, bâti sur le H.265, qui réduit d'environ 75 % le débit par rapport au H.264 sur des scènes de vidéosurveillance courantes. Ce calculateur part des réglages habituels des séries Wisenet P et Q : 1080p, 30 ips, codec intelligent activé. Il gère aussi les installations multi-caméras reliées à des NVR XRN, SRN ou WRN, et les disques recommandés correspondent aux configurations de baies de ces châssis.",
    formula:
      "<p><strong>Stockage Hanwha</strong> = <code>(débit × 3600 / 8) × caméras × heures × jours</code></p>" +
      "<p>WiseStream II est l'extension intelligente du H.265 signée Hanwha. Sur des scènes au mouvement prévisible (parkings, façades de bâtiments), elle peut faire mieux que le H.265+ de Hikvision. Sur des scènes très animées (surfaces de vente, carrefours passants), l'écart se resserre. Le calculateur modélise WiseStream II avec le même facteur de réduction de 75 % que le H.265+, ce qui correspond aux débits de dimensionnement publiés par Hanwha.</p>",
    useCases: [
      "Dimensionner les NVR Hanwha Wisenet des séries XRN, SRN et WRN",
      "Planifier le stockage des caméras panoramiques multi-capteurs Wisenet PNM, où chaque capteur constitue un flux distinct",
      "Comparer les économies de WiseStream II avant de l'activer sur des caméras existantes",
      "Dimensionner la capacité d'une installation VMS SSM (Smart Security Manager)",
    ],
  },

  faqs: [
    {
      question: "Qu'est-ce que WiseStream II et en quoi diffère-t-il du H.265 ?",
      answer:
        "WiseStream II est le codec intelligent de Hanwha, superposé au H.265. Il applique un contrôle dynamique du GOP (groupe d'images) et une adaptation du débit par zone : il identifie les parties fixes de la scène et en réduit le débit tout en conservant la pleine qualité sur les sujets en mouvement. Le résultat est comparable au H.265+ de Hikvision, soit des fichiers environ 50 % plus légers que le H.265 classique sur une même scène.",
    },
    {
      question:
        "WiseStream II fonctionne-t-il avec des NVR et des VMS tiers ?",
      answer:
        "Oui. WiseStream II produit un flux H.265 parfaitement conforme, que tout NVR ou VMS compatible H.265 sait décoder. La compression intelligente s'effectue entièrement dans la caméra ; l'enregistreur ne voit qu'un fichier H.265 plus léger. Cette technologie est donc utilisable dans des installations multi-marques.",
    },
    {
      question:
        "Quel réglage de débit retenir pour dimensionner le stockage d'une caméra Wisenet ?",
      answer:
        "Pour des caméras Wisenet 1080p avec WiseStream II activé : visez 2 Mbit/s de débit maximal en mode VBR. Pour du 4 MP : 3 à 4 Mbit/s. Pour de la 4K : 6 à 8 Mbit/s. Ce sont des moyennes constatées ; la taille réelle des fichiers sera inférieure sur les scènes calmes. Partez des valeurs par défaut du calculateur et ajustez si la fiche technique de votre caméra indique d'autres chiffres.",
    },
    {
      question: "Quels disques sont compatibles avec les NVR Hanwha Wisenet ?",
      answer:
        "Hanwha publie une liste de compatibilité par modèle de NVR : les WD Purple, Seagate SkyHawk et Toshiba S300 sont généralement validés sur toute la gamme. La capacité maximale prise en charge dépend du modèle et de la version du micrologiciel ; les NVR Wisenet récents acceptent jusqu'à 16 à 20 To par baie. Consultez le document officiel de compatibilité des disques pour votre modèle précis.",
    },
    {
      question: "Pourquoi ma caméra Wisenet consomme-t-elle plus de débit que prévu ?",
      answer:
        "Causes possibles : (1) WiseStream II est désactivé dans les réglages de la caméra ; (2) la scène est particulièrement animée, ce qui réduit l'apport du codec intelligent ; (3) le débit est réglé en CBR (constant) au lieu du VBR ; (4) la caméra fonctionne dans un mode privilégiant la qualité sur la compression (enregistrement à valeur de preuve, par exemple). Vérifiez Configuration → Vidéo et audio → Profil vidéo dans l'interface web de la caméra.",
    },
    {
      question: "Ce calculateur gère-t-il les caméras panoramiques Wisenet ?",
      answer:
        "Les caméras panoramiques Wisenet (PNM-9085RQZ, PNM-9322VQP) sont multi-capteurs et se présentent comme plusieurs flux distincts. Indiquez comme nombre de caméras le nombre total de capteurs (généralement 2 ou 4) et le calculateur fait le reste. Chaque capteur enregistre indépendamment et consomme son propre stockage.",
    },
  ],
};

export default translation;
