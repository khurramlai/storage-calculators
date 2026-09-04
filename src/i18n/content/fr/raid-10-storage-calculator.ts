import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculateur-raid-10",
  title: "Calculateur RAID 10",
  description:
    "Calculateur RAID 10 pour les grappes de miroirs agrégés par bandes. Capacité utile, surcharge de mise en miroir, tolérance de panne et débit en écriture, quel que soit le nombre de paires.",
  tagline:
    "Miroirs agrégés par bandes : le RAID le plus rapide en écriture, résiste à un disque par paire en miroir.",
  keywords: [
    "calculateur raid 10",
    "calcul raid 10",
    "calculateur raid 1+0",
    "calculateur capacité raid 10",
  ],

  content: {
    intro:
      "Le RAID 10 (parfois noté RAID 1+0) associe les disques par paires en miroir, puis répartit les données par bandes sur ces paires. Vous perdez la moitié de votre capacité brute, ce qui fait mal, mais les performances en écriture n'ont rien à voir avec celles des RAID 5 ou 6 basés sur la parité. Les reconstructions sont également rapides, puisqu'il suffit de recopier les données d'un seul disque. Le RAID 10 est le choix par défaut pour les bases de données, les hyperviseurs et tout ce qui génère un trafic d'écriture soutenu ou exige une latence serrée.",
    formula:
      "<p><strong>Capacité utile</strong> = <code>(N / 2) × taille du disque</code></p>" +
      "<p><strong>Surcharge de mise en miroir</strong> = <code>(N / 2) × taille du disque</code>. La moitié de la grappe.</p>" +
      "<p><strong>Efficacité de capacité</strong> = <code>50 %</code>, constante quel que soit le nombre de disques</p>" +
      "<p><strong>Tolérance de panne</strong> = 1 disque dans le pire des cas, jusqu'à N/2 dans le meilleur (un par paire en miroir)</p>" +
      "<p><strong>Vitesse de lecture</strong> ≈ <code>N</code>×. Les lectures peuvent viser l'un ou l'autre disque de chaque miroir.</p>" +
      "<p><strong>Vitesse d'écriture</strong> ≈ <code>N / 2</code>×. Chaque écriture touche deux disques.</p>",
    useCases: [
      "Serveurs de bases de données (MySQL, PostgreSQL, SQL Server) exigeant une faible latence en écriture",
      "Hyperviseurs (VMware, Hyper-V, Proxmox) hébergeant de nombreuses machines virtuelles simultanées",
      "Serveurs de messagerie et transactionnels soumis à des E/S aléatoires soutenues",
      "Toute charge de travail où la vitesse de reconstruction prime sur l'efficacité de capacité",
    ],
  },

  faqs: [
    {
      question: "Quel est le nombre minimal de disques pour un RAID 10 ?",
      answer:
        "Quatre, soit deux paires en miroir agrégées par bandes. Le nombre de disques doit être pair (des paires de miroirs). Le calculateur vous avertit si vous saisissez un nombre impair et indique combien de disques resteraient inutilisés.",
    },
    {
      question: "Pourquoi le RAID 10 est-il plus rapide que le RAID 5 ou 6 ?",
      answer:
        "Il n'y a aucun calcul de parité. Une écriture touche simplement les deux disques d'une paire en miroir en même temps, sans cycle lecture-modification-écriture. Pour les charges d'E/S aléatoires (bases de données, machines virtuelles), l'écart peut atteindre un facteur 3 à 5 en débit et un ordre de grandeur en latence.",
    },
    {
      question: "Combien de disques peuvent tomber en panne en RAID 10 ?",
      answer:
        "Dans le pire des cas : un seul. Si les deux disques d'une même paire en miroir lâchent, la grappe est perdue. Dans le meilleur des cas : la moitié des disques (N/2), à condition qu'un seul disque tombe en panne dans chaque paire. Le calculateur affiche la tolérance de panne dans les deux cas.",
    },
    {
      question: "Le RAID 10 est-il la même chose que le RAID 0+1 ?",
      answer:
        "Non. Les noms se ressemblent, mais le RAID 0+1 agrège d'abord par bandes, puis met en miroir l'ensemble agrégé. Sa tolérance de panne est moins bonne : la perte d'un disque dans l'un des ensembles agrégés rend tout ce côté indisponible et vous laisse exposé à la moindre panne de l'autre côté. Le RAID 10 (miroir d'abord, puis agrégation) est presque toujours le bon choix.",
    },
    {
      question: "Pourquoi le RAID 10 coûte-t-il plus cher que le RAID 5 ou 6 ?",
      answer:
        "Vous payez une redondance de 100 % : chaque octet de données est stocké deux fois. Les RAID 5 et 6 ne réservent que l'équivalent d'un ou deux disques à la parité, si bien que leur efficacité de capacité augmente avec le nombre de disques. Sur une grappe de 10 disques de 4 To, le RAID 10 offre 20 To utiles, contre 36 To en RAID 5 et 32 To en RAID 6. Ce surcoût achète des performances et des reconstructions rapides.",
    },
  ],
};

export default translation;
