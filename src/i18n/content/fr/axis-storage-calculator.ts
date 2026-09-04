import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculateur-stockage-axis",
  title: "Calculateur de stockage Axis",
  description:
    "Calculateur de stockage Axis avec modélisation des économies de compression Zipstream. Les valeurs par défaut correspondent aux caméras IP des séries P, Q et M en installation réelle.",
  tagline:
    "Dimensionnement du stockage des caméras Axis avec les économies de débit dynamique Zipstream.",
  keywords: [
    "calculateur stockage axis",
    "calculateur caméra axis",
    "stockage axis zipstream",
    "calcul stockage axis communications",
  ],

  content: {
    intro:
      "Axis a été le premier constructeur à proposer un codec intelligent (Zipstream, dès 2015), aujourd'hui omniprésent dans les installations d'entreprise et du secteur public. Zipstream retire 50 à 80 % du débit selon l'animation de la scène, les scènes extérieures calmes se compressant le plus fortement. Ce calculateur modélise Zipstream comme un équivalent du H.265+ et part des réglages habituels des caméras Axis série P en 1080p à 25 ips. Utilisez-le pour dimensionner des serveurs Axis Camera Station ou tout NVR tiers dans une installation à dominante Axis.",
    formula:
      "<p><strong>Stockage Axis</strong> = <code>(débit × 3600 / 8) × caméras × heures × jours</code></p>" +
      "<p>Zipstream est le contrôleur de débit propriétaire d'Axis, sensible au contenu de la scène et bâti sur le H.264 comme sur le H.265. Il identifie les zones importantes d'un point de vue judiciaire (visages, plaques d'immatriculation, mouvements) et en préserve le détail tout en compressant fortement les arrière-plans statiques. L'économie nette face au H.264 va de 50 à 80 %. Les scènes extérieures calmes (parkings la nuit) en profitent le plus ; les surfaces de vente ou les pôles de transport animés, moins.</p>",
    useCases: [
      "Dimensionner le stockage d'un serveur d'enregistrement Axis Camera Station (ACS)",
      "Planifier le stockage d'enregistreurs Axis série S ou de NVR tiers compatibles Axis",
      "Comparer les économies de Zipstream à celles du H.265 seul avant activation sur des caméras existantes",
      "Dimensionner la capacité des solutions AXIS Camera Station Edge et des appliances S22",
    ],
  },

  faqs: [
    {
      question: "Qu'est-ce qu'Axis Zipstream ?",
      answer:
        "Zipstream est la technologie de codec intelligent d'Axis, disponible sur la plupart des caméras actuelles des séries P, Q et M. Elle superpose un contrôleur de débit sensible à la scène au H.264 ou au H.265 : elle identifie les zones d'intérêt (visages, plaques d'immatriculation, objets en mouvement) et les conserve en haute qualité tout en réduisant le détail des arrière-plans statiques. Le flux obtenu reste totalement conforme au H.264 / H.265, si bien que n'importe quel enregistreur compatible peut le relire.",
    },
    {
      question: "Combien de stockage Zipstream permet-il d'économiser ?",
      answer:
        "Axis annonce des économies de 50 à 80 % par rapport au H.264 ou au H.265 standard, selon l'activité de la scène. Le préréglage « H.265+ / codec intelligent » du calculateur modélise une réduction de 75 %, ce qui correspond à une scène urbaine de vidéosurveillance typique. Sur des vues essentiellement statiques (cours industrielles, bureaux en dehors des heures ouvrées), Zipstream peut faire mieux. Sur des scènes dynamiques (magasins, gares), comptez plutôt 50 à 60 %.",
    },
    {
      question: "Zipstream nécessite-t-il un équipement d'enregistrement particulier ?",
      answer:
        "Non. Les flux encodés avec Zipstream sont du H.264 ou du H.265 standard, lisibles par n'importe quel NVR, VMS ou lecteur compatible. La compression intelligente a lieu entièrement dans la caméra. Cela fait des caméras Axis un bon choix pour les installations multi-marques où vous souhaitez conserver des systèmes d'enregistrement tiers.",
    },
    {
      question:
        "Quel est l'impact des caméras multi-capteurs Axis sur le stockage ?",
      answer:
        "Les caméras multi-capteurs Axis (Q3819-PVE, Q6010-E, P3727-PLE) apparaissent comme plusieurs flux indépendants, généralement 2 ou 4 capteurs par caméra. Indiquez comme nombre de caméras le nombre total de capteurs, et non le nombre de boîtiers physiques. Chaque capteur enregistre à sa propre résolution et consomme sa propre bande passante et son propre stockage.",
    },
    {
      question: "Comment activer Zipstream sur les caméras Axis ?",
      answer:
        "Depuis l'interface web de la caméra (ou via AXIS Device Manager) : Vidéo → Profil de flux → Zipstream → choisissez l'intensité (faible, moyenne, élevée, supérieure, extrême). « Moyenne » est le réglage courant pour de la surveillance générale ; « élevée » ou « supérieure » conviennent aux zones à activité prévisible. À noter : Zipstream est activé par défaut sur la plupart des micrologiciels Axis récents, vérifiez avant de supposer le contraire.",
    },
    {
      question:
        "Quel disque recommander pour un serveur AXIS Camera Station ?",
      answer:
        "AXIS Camera Station accepte tout disque conçu pour la vidéosurveillance : WD Purple, Seagate SkyHawk, ou des disques NAS professionnels (WD Red Pro, Seagate IronWolf Pro). Pour les déploiements ACS multi-serveurs comptant beaucoup de caméras (50 et plus), un stockage NAS ou SAN d'entreprise est recommandé pour sa fiabilité et ses IOPS supplémentaires. Le calculateur fournit le besoin en capacité brute ; consultez la documentation ACS pour le dimensionnement en IOPS.",
    },
  ],
};

export default translation;
