import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculateur-raid-5",
  title: "Calculateur RAID 5",
  description:
    "Calculateur RAID 5 : capacité utile, surcharge de parité, tolérance de panne et débit pour n'importe quel nombre et taille de disques. Gratuit, instantané, sans inscription.",
  tagline:
    "Parité simple répartie par bandes, forte efficacité, résiste à la panne d'un disque.",
  keywords: [
    "calculateur raid 5",
    "calcul raid 5",
    "calculateur capacité raid 5",
    "calculer stockage raid 5",
  ],

  content: {
    intro:
      "Le RAID 5 répartit vos données par bandes sur tous les disques de la grappe et réserve l'équivalent d'un disque à la parité. Si un disque tombe en panne, la grappe le reconstruit à partir des blocs de parité présents sur les survivants. La capacité utile vaut simplement (N − 1) × taille du disque. Le RAID 5 reste très répandu sur les petits serveurs et les NAS domestiques parce que le calcul est avantageux : vous conservez l'essentiel de la capacité tout en supportant la panne d'un disque. C'est le choix évident quand un seul disque de redondance suffit.",
    formula:
      "<p><strong>Capacité utile</strong> = <code>(N − 1) × taille du disque</code></p>" +
      "<p><strong>Surcharge de parité</strong> = <code>taille du disque</code> (l'équivalent d'un disque)</p>" +
      "<p><strong>Efficacité de capacité</strong> = <code>(N − 1) / N</code>. Se rapproche de 100 % à mesure que l'on ajoute des disques.</p>" +
      "<p><strong>Tolérance de panne</strong> = 1 disque</p>" +
      "<p><strong>Vitesse de lecture</strong> ≈ <code>N − 1</code>× (lectures parallèles sur les disques de données)</p>" +
      "<p><strong>Vitesse d'écriture</strong> ≈ <code>(N − 1) / 4</code>×. Chaque écriture impose de lire l'ancienne donnée et l'ancienne parité, puis d'écrire la nouvelle donnée et la nouvelle parité.</p>",
    useCases: [
      "NAS de PME de 4 à 6 disques où la capacité prime",
      "Serveurs multimédias domestiques où un seul disque de redondance suffit",
      "Cibles de sauvegarde lorsque la grappe n'est pas la copie principale",
      "Comparer l'efficacité face au RAID 6 avant d'acheter les disques",
    ],
  },

  faqs: [
    {
      question: "Pourquoi le RAID 5 est-il risqué avec de gros disques ?",
      answer:
        "À mesure que la capacité des disques atteint plusieurs téraoctets, les temps de reconstruction s'étirent sur de nombreuses heures, voire des jours. Pendant toute cette fenêtre, la grappe n'est plus protégée : si un second disque lâche (ou si une erreur de lecture irrécupérable survient sur les disques restants), toutes les données sont perdues. Pour les grappes de 8 disques et plus ou des disques de plus de 4 To environ, beaucoup d'administrateurs préfèrent le RAID 6 ou le RAID 10.",
    },
    {
      question: "Quel est le nombre minimal de disques pour un RAID 5 ?",
      answer:
        "Trois. Deux disques stockent les données et l'équivalent d'un disque est consacré à la parité. Avec seulement deux disques, il n'y aurait rien à répartir par bandes : le RAID 1 serait alors plus adapté.",
    },
    {
      question: "Le RAID 5 utilise-t-il un disque de parité dédié ?",
      answer:
        "Non. La parité est répartie sur tous les disques, contrairement au RAID 4 qui utilise un disque de parité dédié. Cela évite que ce disque devienne un goulot d'étranglement en écriture et permet à n'importe quel disque de tomber en panne sans faire disparaître toute la parité.",
    },
    {
      question: "Combien de temps dure une reconstruction RAID 5 ?",
      answer:
        "Les reconstructions se déroulent généralement entre 50 et 150 Mo/s selon le contrôleur, le type de disque et la charge de travail simultanée. La reconstruction d'un disque de 4 To prend souvent de 8 à 24 heures. Les grappes SSD se reconstruisent beaucoup plus vite. Pendant la reconstruction, la grappe est en mode dégradé et la panne d'un autre disque entraîne la perte totale des données.",
    },
    {
      question: "Puis-je ajouter un disque de secours à un RAID 5 ?",
      answer:
        "Oui, et c'est recommandé dès 6 disques. Le disque de secours démarre automatiquement la reconstruction dès qu'un disque tombe en panne, ce qui raccourcit la période d'exposition. Renseignez le nombre de disques de secours dans le calculateur pour voir son effet sur la capacité utile.",
    },
  ],
};

export default translation;
