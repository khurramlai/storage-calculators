import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculateur-stockage-nvr",
  title: "Calculateur de stockage NVR",
  description:
    "Calculateur de stockage NVR qui dimensionne les disques durs selon le nombre de caméras, la résolution, le codec et la rétention. Modélise les économies du codec intelligent H.265+ et les disques spécial vidéosurveillance.",
  tagline:
    "Dimensionnez les disques de votre NVR avant l'achat : caméras IP, codecs récents, calculs exacts.",
  keywords: [
    "calculateur stockage nvr",
    "calculateur disque dur nvr",
    "calculateur nvr",
    "stockage enregistreur vidéo réseau",
  ],

  content: {
    intro:
      "Un NVR reçoit les flux des caméras IP via Ethernet et les écrit sur ses disques durs internes. Ses limites matérielles tiennent au nombre de voies (donc de caméras), au nombre de baies (donc de disques) et à la capacité maximale acceptée par son micrologiciel. Mais le stockage réellement nécessaire dépend, lui, de la résolution, de la cadence, du codec et de la durée de conservation des enregistrements. Ce calculateur vous donne la réponse en quelques secondes, ainsi qu'un disque recommandé compatible avec les châssis NVR courants : 1, 2, 4 ou 8 baies.",
    formula:
      "<p><strong>Stockage NVR</strong> = <code>(débit_bps × 3600 / 8) × caméras × heures × jours</code></p>" +
      "<p>Les NVR récents prennent en charge le H.265 nativement. Les modèles haut de gamme gèrent aussi les codecs intelligents (H.265+, WiseStream II, Zipstream) qui adaptent le débit à la complexité de la scène. Passer du H.264 au H.265 divise généralement le stockage par deux. Les codecs intelligents H.265+ le divisent encore par deux.</p>" +
      "<p>Les <strong>disques recommandés</strong> tiennent compte des configurations de baies habituelles. Le calculateur propose la plus petite capacité en disque unique qui convient, et passe à plusieurs disques au-delà de 20 To.</p>",
    useCases: [
      "Choisir un NVR avant l'achat en accordant nombre de voies et capacité disque à vos besoins",
      "Remplacer les disques vieillissants d'un NVR existant par des modèles plus capacitaires",
      "Planifier le stockage d'un NVR équipé en RAID (à combiner avec le calculateur RAID)",
      "Dimensionner le stockage lors d'une migration du cloud vidéo vers un NVR sur site",
    ],
  },

  faqs: [
    {
      question: "Quelle capacité de disque dur faut-il pour mon NVR ?",
      answer:
        "La capacité dépend de trois facteurs : le nombre de caméras, le débit total par caméra et la durée de rétention. Utilisez ce calculateur avec votre configuration réelle : les réponses génériques du type « 8 To pour 8 caméras » sont trompeuses car elles supposent une résolution et un codec précis. Pour la plupart des installations en 1080p ou 4 MP H.265 avec 30 jours de rétention, comptez 4 à 12 To par NVR.",
    },
    {
      question: "Un NVR accepte-t-il n'importe quel disque dur ?",
      answer:
        "Techniquement oui, mais il faut privilégier les disques conçus pour la vidéosurveillance. Les fabricants de NVR (Hikvision, Dahua, UniFi, Synology) publient des listes de compatibilité ; un disque absent de la liste peut fonctionner sans être pris en charge. Les WD Purple, Seagate SkyHawk et Toshiba S300 sont des choix sûrs. Certains NVR professionnels exigent des disques certifiés pour un fonctionnement 24 h/24 en châssis NAS.",
    },
    {
      question:
        "Pourquoi mon NVR consomme-t-il plus de stockage que ce qu'annonce le calculateur ?",
      answer:
        "Les causes habituelles : (1) l'enregistrement en double flux (principal + secondaire) double le stockage si les deux sont conservés ; (2) des intervalles entre images clés trop élevés réduisent l'efficacité des codecs intelligents ; (3) l'hypothèse d'une scène peu complexe ne tient pas dans un environnement animé ; (4) le NVR enregistre aussi des séquences d'événements en plus du flux continu. Vérifiez les réglages : la plupart des NVR permettent de désactiver l'enregistrement du flux secondaire ou l'archivage des événements de mouvement.",
    },
    {
      question: "Combien de caméras un NVR peut-il gérer ?",
      answer:
        "Le nombre de voies dépend du modèle : les tailles courantes sont 4, 8, 16, 32 et 64 voies. Le stockage augmente linéairement avec le nombre de voies, mais la capacité du switch PoE intégré, la puissance de décodage du processeur (pour la visualisation en direct) et le nombre total de baies peuvent devenir limitants avant le nombre de voies. Ce calculateur traite la partie stockage ; consultez la fiche technique du NVR pour les autres limites.",
    },
    {
      question: "Faut-il utiliser du RAID dans un NVR ?",
      answer:
        "Oui pour toute installation professionnelle à partir de 4 disques. Un NVR à disque unique perd tous ses enregistrements en cas de panne. Le RAID 5 ou le RAID 6 permettent de continuer à fonctionner malgré une ou deux pannes de disques, pour une perte de capacité limitée. Consultez notre calculateur RAID pour dimensionner la couche RAID par-dessus cette estimation de stockage.",
    },
    {
      question: "Le calculateur tient-il compte de la surcharge du micrologiciel du NVR ?",
      answer:
        "Il part du principe que la quasi-totalité de la capacité disque est disponible pour la vidéo. En pratique, le micrologiciel du NVR réserve environ 1 à 2 % pour ses données système, et la surcharge des systèmes de fichiers ext4 ou btrfs ajoute 3 à 5 %. Prévoyez environ 5 % de marge au-delà du chiffre annoncé : un besoin de 10 To demande donc en réalité près de 10,5 To de disque.",
    },
  ],
};

export default translation;
