import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculateur-stockage-cctv",
  title: "Calculateur de stockage CCTV",
  description:
    "Calculateur de stockage CCTV pour systèmes DVR et NVR. Compatible avec les caméras analogiques HD-TVI, HD-CVI, AHD et les caméras IP, quelle que soit la résolution, le codec ou la durée de rétention.",
  tagline:
    "Dimensionnement du stockage pour les systèmes CCTV analogiques comme IP : DVR, NVR ou enregistreurs hybrides.",
  keywords: [
    "calculateur stockage cctv",
    "calculateur cctv",
    "calcul stockage vidéosurveillance",
    "calculateur disque dur cctv",
  ],

  content: {
    intro:
      "Le terme CCTV recouvre aujourd'hui des réalités très différentes. Il englobe les systèmes analogiques historiques sur câble coaxial (HD-TVI, HD-CVI ou AHD reliés à un DVR) et les systèmes IP modernes sur Ethernet (caméras IP reliées à un NVR). Ce calculateur gère les deux. Les systèmes analogiques HD plafonnent généralement à 1080p, 15 ips et H.264 : partez de là. Les systèmes IP peuvent monter jusqu'à la 4K avec des codecs intelligents H.265+. La formule, elle, ne fait pas la différence : seul le plafond de débit change.",
    formula:
      "<p><strong>Stockage CCTV</strong> = <code>(débit_bps × 3600 / 8) × caméras × heures × jours</code></p>" +
      "<p>Pour les systèmes analogiques HD-TVI, HD-CVI ou AHD, attendez-vous à du H.264 uniquement : ces DVR sont antérieurs à l'adoption généralisée du H.265. Les caméras analogiques 1080p encodent généralement entre 2 et 4 Mbit/s. Pour le CCTV sur IP (caméras reliées à un NVR), les systèmes récents prennent en charge le H.265 et les codecs intelligents, qui réduisent le stockage de 50 à 75 %.</p>",
    useCases: [
      "Choisir la bonne capacité de disque dur pour un DVR ou un NVR avant l'achat",
      "Passer d'un CCTV analogique à l'IP et comparer les besoins de stockage",
      "Dimensionner des enregistreurs hybrides mêlant voies analogiques et IP",
      "Vérifier les promesses commerciales du type « 30 jours sur 2 To » face à votre configuration réelle",
    ],
  },

  faqs: [
    {
      question: "Quelle est la différence entre un DVR et un NVR ?",
      answer:
        "Un DVR (enregistreur vidéo numérique) reçoit des signaux vidéo analogiques sur câble coaxial (HD-TVI, HD-CVI, AHD ou CVBS d'ancienne génération) et les numérise. Un NVR (enregistreur vidéo en réseau) reçoit des flux déjà numériques provenant de caméras réseau, via Ethernet ou Wi-Fi. Les NVR prennent en charge des résolutions plus élevées et des codecs récents ; les DVR coûtent moins cher et réutilisent le câblage coaxial existant. Les enregistreurs hybrides acceptent les deux.",
    },
    {
      question: "Les caméras CCTV analogiques peuvent-elles enregistrer en 4K ?",
      answer:
        "La plupart des standards analogiques HD (HD-TVI, HD-CVI, AHD) plafonnent aujourd'hui à 8 MP / 4K, mais les installations réelles se limitent le plus souvent au 1080p ou au 4 MP. La longueur du câble coaxial et la dégradation du signal cantonnent la 4K analogique aux courtes distances. Pour de la 4K à grande échelle, les caméras IP sont la norme.",
    },
    {
      question:
        "Pourquoi mon système CCTV consomme-t-il plus de stockage que ce qu'indique le calculateur ?",
      answer:
        "Trois causes fréquentes : (1) vos caméras utilisent un débit supérieur à celui de leur fiche technique, beaucoup de modèles bon marché restant bloqués sur un débit maximal fixe quelle que soit la scène ; (2) votre DVR ou NVR enregistre en double flux (flux principal et flux secondaire) sans que vous le sachiez ; (3) l'enregistrement audio est activé, ce qui ajoute environ 10 à 20 %. Le calculateur fournit des estimations vidéo seule, sur le flux principal.",
    },
    {
      question: "Quel disque dur installer dans un DVR CCTV ?",
      answer:
        "Utilisez un disque conçu pour la vidéosurveillance : les Western Digital Purple et Seagate SkyHawk sont les références du secteur. Les disques bureautiques (WD Blue, Barracuda) fonctionneront, mais ne tiendront pas longtemps sous une charge d'écriture continue, et la garantie sera refusée en usage vidéosurveillance. Les disques de vidéosurveillance sont optimisés pour l'écriture séquentielle permanente et leur micrologiciel gère les commandes de streaming ATA utilisées par les DVR.",
    },
    {
      question: "Combien de temps puis-je enregistrer sur un disque CCTV de 2 To ?",
      answer:
        "Tout dépend du nombre de caméras, de la résolution et du codec. Quelques exemples en enregistrement continu sur un disque de 2 To : 4 caméras en 1080p H.264 ≈ 11 jours ; 4 caméras en 1080p H.265 ≈ 22 jours ; 8 caméras en 4K H.265 ≈ 3 jours ; 1 caméra en 720p H.264 ≈ 90 jours. Utilisez le calculateur avec votre configuration exacte : le marketing des fabricants de DVR annonce souvent les meilleurs cas, à faible cadence et faible débit.",
    },
    {
      question: "Le calculateur prend-il en compte l'enregistrement audio ?",
      answer:
        "Non. L'audio ajoute environ 64 à 128 kbit/s par canal, ce qui reste négligeable face aux 4 Mbit/s et plus de la vidéo sur les caméras actuelles. Pour la plupart des projets, vous pouvez l'ignorer. Avec 16 canaux audio ou plus, prévoyez une marge d'environ 5 %.",
    },
  ],
};

export default translation;
