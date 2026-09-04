import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculateur-stockage-videosurveillance",
  title: "Calculateur de stockage vidéosurveillance",
  description:
    "Calculateur de stockage vidéosurveillance pour caméras IP, NVR et DVR. Gère le H.264, le H.265, les codecs intelligents, l'enregistrement sur détection et n'importe quel nombre de caméras ou durée de rétention.",
  tagline:
    "Dimensionnez le stockage de vos enregistrements : toutes caméras, tous codecs, toutes durées de rétention.",
  keywords: [
    "calculateur stockage vidéosurveillance",
    "calcul stockage vidéosurveillance",
    "calculateur vidéosurveillance",
    "dimensionnement stockage vidéosurveillance",
  ],

  content: {
    intro:
      "La planification du stockage en vidéosurveillance tient dans une seule formule : débit × caméras × heures × jours. Le calcul n'est pas la difficulté ; le choix du bon débit, si. Celui-ci dépend de la résolution, de la cadence, du codec et de l'animation de la scène. Ce calculateur estime un débit cohérent à partir des caractéristiques de vos caméras et applique les économies des codecs intelligents (H.265+, WiseStream II, Zipstream) lorsqu'elles s'appliquent. Vous obtenez un volume de stockage et un disque de vidéosurveillance recommandé.",
    formula:
      "<p><strong>Stockage total</strong> = <code>(débit × 3600 / 8) × caméras × heures_par_jour × jours_de_rétention</code></p>" +
      "<p>Le débit s'exprime en bits par seconde. Le calculateur l'estime à partir de la résolution, de la cadence et du codec, en s'appuyant sur les tableaux publiés par Hikvision, Hanwha et Axis. Choisissez un codec intelligent pour modéliser les économies du H.265+, de WiseStream II ou de Zipstream (environ 75 % de réduction face au H.264).</p>" +
      "<p>L'<strong>enregistrement sur détection</strong> applique un cycle d'activité de 40 % aux heures d'enregistrement, valeur typique d'une détection de mouvement bien réglée sur des caméras extérieures.</p>",
    useCases: [
      "Dimensionner un NVR avant l'achat pour que la capacité disque corresponde vraiment à la rétention voulue",
      "Comparer les codecs afin de justifier un passage au H.265 ou au H.265+",
      "Planifier une vidéosurveillance multi-sites avec un nombre de caméras différent par site",
      "Budgéter des disques de vidéosurveillance comme les WD Purple ou Seagate SkyHawk",
    ],
  },

  faqs: [
    {
      question: "Quel stockage faut-il pour une seule caméra ?",
      answer:
        "Une caméra 1080p en H.265 à 25 ips enregistrant en continu génère environ 22 Go par jour, soit près de 660 Go par mois. La même caméra en H.265+ (codec intelligent) tombe à environ 5 Go par jour. En 4K H.264, on peut atteindre 170 Go par jour et par caméra : le choix du codec pèse plus que tout le reste.",
    },
    {
      question: "Quelle différence entre H.264, H.265 et H.265+ ?",
      answer:
        "Le H.264 est la référence historique. Le H.265 (HEVC) atteint une qualité visuelle comparable pour un débit deux fois moindre. Le H.265+ (Hikvision), WiseStream II (Hanwha) et Zipstream (Axis) sont des variantes « intelligentes » qui détectent les zones en mouvement et réduisent encore le débit sur les parties statiques, soit environ 50 % de plus que le H.265, ce qui donne des fichiers environ 75 % plus légers qu'en H.264.",
    },
    {
      question: "Faut-il utiliser des disques dédiés à la vidéosurveillance ?",
      answer:
        "Oui. Les disques bureautiques sont conçus pour un usage d'environ 8 heures par jour et s'usent vite sous une charge d'écriture continue. Les disques de vidéosurveillance (WD Purple, Seagate SkyHawk) sont certifiés pour l'écriture permanente, résistent aux vibrations des baies multi-disques et sont optimisés pour les flux continus avec une faible latence de rotation.",
    },
    {
      question: "L'enregistrement sur détection fait-il vraiment économiser autant ?",
      answer:
        "Oui : dans la plupart des environnements, l'activité réelle représente 10 à 40 % d'une journée. Le préréglage « détection de mouvement » du calculateur retient un cycle d'activité de 40 %, ce qui est prudent. L'enregistrement sur événements intelligents (uniquement à la détection d'une personne ou d'un véhicule plutôt qu'à tout mouvement) peut faire descendre ce chiffre sous 10 %.",
    },
    {
      question: "Comment le débit est-il calculé dans cet outil ?",
      answer:
        "Le calculateur part d'un tableau de débits H.264 de référence à 25 ips pour chaque résolution (issu des documents publics de dimensionnement de Hikvision, Hanwha et Axis), l'ajuste linéairement selon la cadence, puis applique le coefficient d'efficacité du codec. Le débit obtenu est affiché dans les résultats pour que vous puissiez le comparer à la fiche technique de votre caméra.",
    },
    {
      question: "Quelle durée de rétention est la norme ?",
      answer:
        "30 jours est l'exigence la plus courante pour les installations professionnelles. Certaines réglementations imposent des durées plus longues (60 ou 90 jours). Les banques, les casinos et les infrastructures critiques conservent souvent plus d'un an. Une installation domestique peut se contenter de 7 jours. Le calculateur retient 30 jours par défaut.",
    },
  ],
};

export default translation;
