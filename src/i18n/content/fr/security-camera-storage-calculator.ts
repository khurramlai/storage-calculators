import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculateur-stockage-camera-surveillance",
  title: "Calculateur de stockage pour caméras de surveillance",
  description:
    "Calculateur de stockage pour caméras de surveillance à usage résidentiel ou professionnel. Dimensionne les disques pour Ring, Reolink, Wyze, Nest et les installations NVR multi-caméras en quelques secondes.",
  tagline:
    "Combien de jours d'enregistrement vos caméras de surveillance tiendront-elles réellement sur ce disque ?",
  keywords: [
    "calculateur stockage caméra surveillance",
    "calculateur stockage caméra sécurité",
    "calcul stockage caméra",
    "stockage caméra surveillance maison",
  ],

  content: {
    intro:
      "La plupart des caméras de surveillance résidentielles et de petites entreprises n'enregistrent qu'en cas de mouvement. Le stockage nécessaire n'est donc qu'une fraction de celui d'un enregistrement continu. Il faut malgré tout dimensionner correctement le disque : un disque sous-dimensionné écrase les anciennes séquences précisément au moment où vous auriez besoin de les consulter. Ce calculateur part de valeurs typiques d'une installation domestique : 4 caméras en 1080p, enregistrement sur détection, 14 jours de rétention. À vous d'ajuster.",
    formula:
      "<p>Avec des caméras déclenchées par le mouvement, la <strong>durée d'enregistrement effective</strong> représente environ 40 % de la plage active. La plupart des scènes connaissent de l'activité moins de la moitié du temps. Le calculateur applique un cycle d'activité de 40 % lorsque vous sélectionnez « Sur détection de mouvement uniquement ».</p>" +
      "<p><strong>Stockage</strong> = <code>(débit × 3600 / 8) × caméras × heures_effectives × jours</code></p>",
    useCases: [
      "Choisir entre un disque de 1 To et de 4 To pour un NVR ou un NAS domestique",
      "Déterminer si le stockage cloud ou local revient moins cher pour votre durée de rétention",
      "Estimer la capacité de carte SD des caméras à stockage embarqué (Reolink, Wyze, Eufy)",
      "Prévoir le stockage d'une installation multi-caméras avant d'acheter l'enregistreur",
    ],
  },

  faqs: [
    {
      question:
        "Combien de temps tient un disque de 1 To pour des caméras de surveillance domestiques ?",
      answer:
        "Pour une installation type de 4 caméras 1080p en H.265 avec enregistrement sur détection (environ 40 % du temps) : à peu près 60 à 90 jours. En enregistrement continu, le même disque tient environ 25 jours. Le calculateur donne la réponse précise pour votre configuration exacte : les promesses commerciales du type « 60 jours sur 1 To » supposent des réglages précis, souvent optimistes.",
    },
    {
      question: "Ai-je besoin d'un enregistreur, ou des cartes SD suffisent-elles ?",
      answer:
        "Les caméras équipées d'un emplacement pour carte SD (Reolink, Wyze, Eufy, Amcrest) peuvent enregistrer localement sans NVR séparé. Les cartes SD plafonnent autour de 256 à 512 Go sur la plupart des modèles, soit environ 7 à 30 jours d'enregistrement 1080p sur détection par caméra. Utilisez ce calculateur avec une seule caméra et votre durée de rétention pour savoir si une carte SD suffit ou s'il vous faut un enregistreur centralisé.",
    },
    {
      question: "Vaut-il mieux utiliser le cloud plutôt qu'un disque local ?",
      answer:
        "Le cloud est pratique (aucun matériel à installer, sauvegarde hors site) mais coûteux à la longue. Un abonnement Ring Protect Plus revient à 40-100 € par an et par site, Nest Aware à des tarifs comparables. Un disque de 4 To pour NVR local coûte environ 80 € une seule fois et dure 3 à 5 ans. À partir de 4 caméras et pour des rétentions longues, le stockage local est nettement moins cher. La contrepartie : le cloud est plus difficile à neutraliser pour un cambrioleur, qui devrait couper votre connexion Internet au moment précis de l'intrusion.",
    },
    {
      question: "Quel codec utilisent les caméras de surveillance domestiques ?",
      answer:
        "Les caméras récentes (à partir de 2022) prennent en charge le H.265 / HEVC d'origine. Les modèles plus anciens ou d'entrée de gamme peuvent se limiter au H.264. Certaines caméras Wi-Fi restent réglées sur H.264 par défaut, même quand le H.265 est disponible, pour une meilleure compatibilité de décodage dans les applications mobiles. Vérifiez les réglages et activez le H.265 s'il est proposé : cela divise le stockage par deux sans perte de qualité.",
    },
    {
      question: "Quel stockage faut-il pour des caméras de surveillance 4K ?",
      answer:
        "Environ 2 à 3 fois le stockage du 1080p à durée de rétention égale. Avec un enregistrement sur détection et le codec H.265, une caméra 4K consomme en moyenne 5 à 15 Go par jour en usage domestique courant. Le calculateur donne le chiffre exact selon l'activité de votre scène et la rétention souhaitée.",
    },
    {
      question: "Pourquoi mon système Ring ou Nest ne conserve-t-il que 60 jours ?",
      answer:
        "Les caméras de surveillance dépendant du cloud (Ring, Nest, Arlo, Blink) plafonnent généralement la rétention à 30 ou 60 jours selon l'abonnement. Ce n'est pas le stockage qui contraint, mais les conditions de l'abonnement. Si vous avez besoin d'une rétention plus longue, un NVR ou un NAS local est la bonne réponse, et ce calculateur vous aide à en dimensionner le disque.",
    },
  ],
};

export default translation;
