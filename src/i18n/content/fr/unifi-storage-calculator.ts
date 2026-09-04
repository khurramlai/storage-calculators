import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculateur-stockage-unifi",
  title: "Calculateur de stockage UniFi",
  description:
    "Calculateur de stockage UniFi pour les installations Protect avec caméras G3, G4 et G5. Dimensionne les disques des UNVR, UNVR Pro et Cloud Key Gen2 Plus avec le H.265 par défaut.",
  tagline:
    "Dimensionnement du stockage UniFi Protect pour toute combinaison de caméras G3/G4/G5 et toute durée de rétention.",
  keywords: [
    "calculateur stockage unifi",
    "calculateur stockage unifi protect",
    "calculateur ubiquiti",
    "stockage nvr unifi",
  ],

  content: {
    intro:
      "UniFi Protect fonctionne sur les UNVR, UNVR Pro ou Cloud Key Gen2 Plus d'Ubiquiti. Les caméras G4 et G5 utilisent le H.265 par défaut. Il n'existe pas de réglage « codec intelligent » distinct : le micrologiciel de Protect gère simplement le débit de manière adaptative. Ce calculateur part de réglages de type G4 Pro : 4 MP, 30 ips, H.265, 14 jours de rétention. Un point important à connaître sur Protect : lorsque le disque est plein, les enregistrements les plus anciens sont automatiquement supprimés. Le chiffre obtenu ici correspond donc à ce qu'il faut acheter pour conserver l'intégralité de la fenêtre de rétention souhaitée.",
    formula:
      "<p><strong>Stockage UniFi Protect</strong> = <code>(débit × 3600 / 8) × caméras × heures × jours</code></p>" +
      "<p>Les caméras UniFi G4 Pro en 4 MP, 30 ips et H.265 écrivent généralement entre 8 et 12 Mbit/s par caméra. Les modèles de la série G5 sont légèrement plus efficaces. La série G3, plus ancienne, plafonne en 1080p et peut ne pas gérer le H.265 sur les anciens micrologiciels : ces caméras encodent alors en H.264 avec des débits plus élevés.</p>",
    useCases: [
      "Choisir entre UNVR, UNVR Pro et Cloud Key Gen2 Plus selon vos besoins de stockage",
      "Sélectionner le bon disque pour les quatre baies de l'UNVR",
      "Prévoir l'ajout de caméras dans les limites de capacité d'un UNVR existant",
      "Déterminer s'il faut activer l'archivage cloud d'UniFi Protect (Ubiquiti Cloud Storage)",
    ],
  },

  faqs: [
    {
      question: "Quel stockage consomme une caméra UniFi G4 Pro ?",
      answer:
        "Avec les réglages par défaut (4 MP, 30 ips, H.265, enregistrement continu), une G4 Pro écrit environ 80 à 100 Go par jour. Avec un enregistrement sur détection (usage domestique ou petite entreprise), ce chiffre tombe à 30-40 Go par jour. Le préréglage UniFi du calculateur correspond à l'enregistrement continu : basculez sur « sur détection de mouvement » si votre installation utilise la détection intelligente.",
    },
    {
      question: "Combien de temps le disque de l'UNVR va-t-il tenir ?",
      answer:
        "Cela dépend de la capacité du disque, du nombre de caméras et de la rétention configurée. UniFi Protect supprime automatiquement les enregistrements les plus anciens lorsque le disque est plein : il n'y a pas de panne, seulement une fenêtre de rétention réelle plus courte. Pour obtenir la rétention voulue sans suppression automatique, utilisez ce calculateur avec votre configuration et choisissez une capacité adaptée. L'UNVR accepte jusqu'à 16 To par baie, pour un total de 4 baies.",
    },
    {
      question: "UniFi Protect prend-il en charge le H.265 ?",
      answer:
        "Oui. Les G4 Bullet, G4 Pro, G4 Dome, G4 Instant et toutes les caméras G5 prennent en charge le H.265 et l'utilisent par défaut. Les caméras de la série G3 peuvent rester en H.264 selon le micrologiciel (certains modèles G3 gèrent le H.265 dans les versions récentes). Mélanger des caméras H.264 et H.265 dans une même installation UniFi Protect ne pose aucun problème ; l'hypothèse H.265 du calculateur reste prudente pour les parcs mixtes.",
    },
    {
      question: "Quels disques durs sont compatibles avec l'UNVR ?",
      answer:
        "Ubiquiti prend officiellement en charge les WD Purple, Seagate SkyHawk et une liste de disques vidéosurveillance ou NAS dans l'UNVR. La capacité maximale par baie atteint 16 To sur l'UNVR Pro. Évitez les disques SMR (enregistrement magnétique par bardeaux), mal adaptés aux écritures continues de la vidéosurveillance. L'UNVR ne fonctionne pas en RAID par défaut, mais l'UNVR Pro prend en charge les RAID 1, 5 et 10.",
    },
    {
      question: "UniFi Protect enregistre-t-il dans le cloud ?",
      answer:
        "Oui. Ubiquiti Cloud Storage est proposé sous forme d'abonnement (environ 2 à 4 € par caméra et par mois selon la formule) et sauvegarde les enregistrements de Protect dans le cloud d'Ubiquiti. Il s'agit d'un complément au stockage local, non d'un remplacement. Utilisez ce calculateur pour le dimensionnement local ; le coût du cloud est distinct.",
    },
    {
      question:
        "Puis-je augmenter le stockage d'UniFi Protect sans perdre mes enregistrements ?",
      answer:
        "Sur un UNVR Pro configuré en RAID, les disques peuvent être remplacés un par un puis reconstruits. Sur un UNVR à disque unique, le disque peut être changé mais l'historique est perdu : exportez les séquences importantes via la fonction d'export de Protect avant l'opération. UniFi Protect ne permet pas actuellement de répartir les données sur plusieurs disques externes ; augmenter la capacité signifie donc remplacer le disque par un modèle plus grand.",
    },
  ],
};

export default translation;
