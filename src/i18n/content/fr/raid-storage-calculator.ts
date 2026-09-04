import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculateur-raid",
  title: "Calculateur RAID",
  description:
    "Calculateur RAID gratuit pour les niveaux 0, 1, 5, 6, 10, 50 et 60. Obtenez la capacité utile, la tolérance de panne et les vitesses de lecture/écriture en quelques secondes.",
  tagline:
    "Choisissez un niveau RAID, indiquez le nombre et la taille des disques, et voyez exactement la capacité utile obtenue.",
  keywords: [
    "calculateur raid",
    "calculateur raid capacité",
    "calcul raid",
    "calculateur stockage raid",
    "calculer capacité raid",
  ],

  content: {
    intro:
      "Le RAID regroupe plusieurs disques en un seul volume logique. Chaque niveau propose son propre compromis : capacité, performances et nombre de pannes de disques que la grappe peut encaisser avant de tout perdre. La difficulté consiste à choisir le compromis adapté à votre matériel et à votre tolérance au risque. C'est précisément l'objet de cet outil. Indiquez le nombre de disques, leur taille, le niveau RAID et les éventuels disques de secours. Vous obtenez la capacité utile, la tolérance de panne et un ordre de grandeur des vitesses de lecture et d'écriture par rapport à un disque seul.",
    formula:
      "<p>La capacité utile dépend du niveau RAID :</p>" +
      "<ul>" +
      "<li><strong>RAID 0</strong> : <code>N × taille</code>. Aucune redondance.</li>" +
      "<li><strong>RAID 1</strong> : <code>taille</code>. Chaque disque est une copie des autres.</li>" +
      "<li><strong>RAID 5</strong> : <code>(N − 1) × taille</code>. L'équivalent d'un disque de parité répartie.</li>" +
      "<li><strong>RAID 6</strong> : <code>(N − 2) × taille</code>. Double parité.</li>" +
      "<li><strong>RAID 10</strong> : <code>(N / 2) × taille</code>. Miroirs agrégés par bandes.</li>" +
      "<li><strong>RAID 50</strong> : <code>groupes × (disques_par_groupe − 1) × taille</code>.</li>" +
      "<li><strong>RAID 60</strong> : <code>groupes × (disques_par_groupe − 2) × taille</code>.</li>" +
      "</ul>" +
      "<p>Les disques de secours sont retirés du pool actif avant le calcul RAID.</p>",
    useCases: [
      "Dimensionner un nouveau NAS ou serveur avant d'acheter les disques",
      "Comparer les compromis RAID 5, RAID 6 et RAID 10 à nombre de disques égal",
      "Prévoir une réserve de disques de secours sans sacrifier trop de capacité utile",
      "Estimer le gain de débit lors de l'extension d'un ensemble agrégé par bandes",
    ],
  },

  faqs: [
    {
      question: "Quelle est la différence entre le RAID 5 et le RAID 6 ?",
      answer:
        "Le RAID 5 réserve l'équivalent d'un disque à la parité et survit à la panne d'un seul disque. Le RAID 6 en réserve deux et survit à deux pannes simultanées, ce qui compte sur les grandes grappes où les reconstructions sont longues et où un second disque peut lâcher en cours de route. Le RAID 6 sacrifie un disque de capacité supplémentaire en échange de cette marge de sécurité.",
    },
    {
      question: "Comment la capacité utile est-elle calculée en RAID 10 ?",
      answer:
        "Le RAID 10 associe les disques par paires en miroir, puis répartit les données par bandes sur ces paires. La capacité utile vaut (N / 2) × taille du disque : une grappe RAID 10 de 4 disques de 4 To offre donc 8 To utiles. Elle survit à une panne par paire en miroir, soit 1 disque dans le pire des cas et la moitié des disques dans le meilleur.",
    },
    {
      question: "Faut-il prévoir des disques de secours ?",
      answer:
        "Un disque de secours remplace automatiquement un disque défaillant sans intervention humaine, ce qui raccourcit la fenêtre de reconstruction pendant laquelle une seconde panne serait catastrophique. Chaque disque de secours retire une unité de capacité utile, mais pour les grappes de 8 disques et plus, en particulier en RAID 5, ils sont vivement recommandés.",
    },
    {
      question: "Ce calculateur prend-il en compte la surcharge du système de fichiers ?",
      answer:
        "Non, les résultats correspondent à la capacité brute au niveau bloc. Les systèmes de fichiers (ext4, XFS, ZFS, NTFS) réservent généralement 1 à 10 % pour leurs métadonnées. Les instantanés, la déduplication, la compression et les blocs réservés à root réduisent encore ce chiffre. Comptez environ 5 % de surcharge de système de fichiers en plus de la surcharge RAID affichée ici.",
    },
    {
      question:
        "Pourquoi les vitesses d'écriture en RAID 5 et 6 sont-elles plus faibles qu'en lecture ?",
      answer:
        "Chaque écriture impose de recalculer la parité sur toute la bande. Le RAID 5 demande environ 4 opérations disque par écriture (lire l'ancienne donnée, lire l'ancienne parité, écrire la nouvelle donnée, écrire la nouvelle parité) ; le RAID 6 en demande environ 6. Les lectures, à l'inverse, se parallélisent sur tous les disques de données. Les multiplicateurs affichés sont des maximums théoriques : les valeurs réelles dépendent du cache du contrôleur, de la taille des bandes et de la charge de travail.",
    },
    {
      question: "Qu'est-ce que le RAID 50 et quand l'utiliser ?",
      answer:
        "Le RAID 50 répartit les données par bandes sur deux groupes RAID 5 ou plus. Il se reconstruit plus vite qu'un grand RAID 5 (un seul groupe doit être reconstruit) et survit à une panne par groupe. C'est un bon choix pour les grappes de 8 disques et plus, où les temps de reconstruction d'un RAID 5 pur deviennent risqués. Le RAID 60 applique le même principe avec des sous-groupes RAID 6, pour une résilience encore supérieure.",
    },
  ],
};

export default translation;
