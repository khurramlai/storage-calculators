import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculateur-raid-6",
  title: "Calculateur RAID 6",
  description:
    "Calculateur RAID 6 avec calcul de la double parité. Capacité utile, tolérance à deux pannes de disques et vitesses de lecture/écriture pour tout nombre de disques. Gratuit, sans inscription.",
  tagline:
    "Double parité répartie par bandes, résiste à deux pannes de disques simultanées.",
  keywords: [
    "calculateur raid 6",
    "calcul raid 6",
    "calculateur capacité raid 6",
    "calculer stockage raid 6",
  ],

  content: {
    intro:
      "Le RAID 6, c'est le RAID 5 avec un filet de sécurité. Il utilise un second bloc de parité, de sorte que la grappe survit à la panne simultanée de deux disques au lieu d'un seul. Le prix à payer est un disque de capacité supplémentaire, ce qui laisse (N − 2) × taille du disque d'espace utile. Le RAID 6 est le choix standard pour les grandes grappes de 8 disques ou plus. Quand la reconstruction d'un disque de plusieurs téraoctets prend une journée entière, la probabilité qu'un second disque lâche entre-temps cesse d'être négligeable. Le RAID 6 rend ce scénario survivable.",
    formula:
      "<p><strong>Capacité utile</strong> = <code>(N − 2) × taille du disque</code></p>" +
      "<p><strong>Surcharge de parité</strong> = <code>2 × taille du disque</code></p>" +
      "<p><strong>Efficacité de capacité</strong> = <code>(N − 2) / N</code></p>" +
      "<p><strong>Tolérance de panne</strong> = 2 disques (n'importe lesquels)</p>" +
      "<p><strong>Vitesse de lecture</strong> ≈ <code>N − 2</code>× (disques de données uniquement)</p>" +
      "<p><strong>Vitesse d'écriture</strong> ≈ <code>(N − 2) / 6</code>×. Deux blocs de parité doivent être recalculés à chaque écriture.</p>",
    useCases: [
      "Grandes grappes d'entreprise de 8 à 24 disques de plusieurs téraoctets",
      "Archives et cibles de sauvegarde où la perte de données est inacceptable",
      "Remplacement de grappes RAID 5 vieillissantes dont les disques dépassent le seuil de reconstruction sûr",
      "Comparer le coût d'un disque de parité supplémentaire à l'efficacité de 50 % du RAID 10",
    ],
  },

  faqs: [
    {
      question: "Quand faut-il préférer le RAID 6 au RAID 5 ?",
      answer:
        "Toute grappe de 8 disques ou plus, ou utilisant des disques de plus de 4 To environ, gagne nettement à passer en RAID 6. Le second bloc de parité protège contre cette seconde panne de disque qui devient statistiquement probable pendant une longue reconstruction sur une grande grappe. Le coût en capacité (un disque de plus) est faible au regard du risque supprimé.",
    },
    {
      question: "Quel est le nombre minimal de disques pour un RAID 6 ?",
      answer:
        "Quatre. Deux disques stockent les données et l'équivalent de deux disques est consacré à la parité. En dessous de quatre disques, le calcul n'a plus de sens : le RAID 1 ou le RAID 10 serait préférable.",
    },
    {
      question:
        "Pourquoi les performances en écriture du RAID 6 sont-elles inférieures à celles du RAID 5 ?",
      answer:
        "Le RAID 5 demande 4 opérations disque par écriture (lire l'ancienne donnée, lire l'ancienne parité, écrire la nouvelle donnée, écrire la nouvelle parité). Le RAID 6 en demande environ 6, car les deux blocs de parité doivent être lus puis réécrits. Pour les charges de travail dominées par l'écriture, le RAID 10 convient généralement mieux ; le RAID 6 excelle sur le stockage d'archives à dominante lecture.",
    },
    {
      question: "Le RAID 6 survit-il vraiment à deux pannes simultanées ?",
      answer:
        "Oui, quels que soient les deux disques concernés. Les deux blocs de parité encodent ensemble assez d'informations pour reconstruire les données manquantes, quelle que soit la combinaison de deux pannes. C'est tout l'intérêt du RAID 6 et la raison pour laquelle il est privilégié sur les grappes grandes ou critiques.",
    },
    {
      question: "Faut-il quand même des disques de secours en RAID 6 ?",
      answer:
        "Souvent, oui. Le RAID 6 vous fait gagner du temps, mais un disque de secours permet à la reconstruction de démarrer immédiatement au lieu d'attendre une intervention humaine. Pour les grappes de 12 disques et plus, c'est une assurance peu coûteuse : le calculateur affiche l'effet sur la capacité utile.",
    },
  ],
};

export default translation;
