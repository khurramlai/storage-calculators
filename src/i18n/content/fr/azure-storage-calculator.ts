import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculateur-stockage-azure",
  title: "Calculateur de stockage Azure",
  description:
    "Calculateur de stockage Azure pour les niveaux Blob Storage Hot, Cool, Cold et Archive. Modélise les transactions, les sorties de données et les frais de restauration en une seule estimation mensuelle.",
  tagline:
    "La tarification d'Azure Blob Storage sans le labyrinthe habituel : les quatre niveaux comparés.",
  keywords: [
    "calculateur stockage azure",
    "calculateur coût stockage azure",
    "calculateur prix azure",
    "calculateur azure blob storage",
  ],

  content: {
    intro:
      "Azure Blob Storage propose quatre niveaux d'accès : Hot, Cool, Cold et Archive. Ils partagent une même API, mais leur tarification diffère radicalement. Ce calculateur les couvre tous les quatre, aux tarifs publics de la région East US en LRS (stockage localement redondant). Le calculateur officiel de Microsoft est complet mais écrasant ; celui-ci va à l'essentiel : choisissez un niveau, saisissez vos volumes, et la facture mensuelle des quatre niveaux s'affiche côte à côte.",
    formula:
      "<p><strong>Facture Azure</strong> = stockage + transactions + sortie de données + restauration</p>" +
      "<ul>" +
      "<li><strong>Hot</strong> : 0,0184 $/Go/mois de stockage, 0,0065 $ pour 10 000 opérations d'écriture. Accès fréquent.</li>" +
      "<li><strong>Cool</strong> : 0,01 $/Go/mois, minimum 30 jours, 0,01 $/Go de restauration. Accès mensuel.</li>" +
      "<li><strong>Cold</strong> : 0,0036 $/Go/mois, minimum 90 jours, 0,02 $/Go de restauration. Accès rare.</li>" +
      "<li><strong>Archive</strong> : 0,00099 $/Go/mois, minimum 180 jours, 0,022 $/Go de restauration plus un délai de réhydratation. Le moins cher.</li>" +
      "</ul>" +
      "<p>Sortie de données : les 100 premiers Go par mois sont gratuits, puis 0,087 $/Go.</p>",
    useCases: [
      "Chiffrer le stockage Azure Blob d'un nouveau projet avant son déploiement",
      "Comparer les niveaux Hot, Cool et Cold pour une médiathèque",
      "Estimer le coût du niveau Archive pour une conservation réglementaire",
      "Modéliser la réplication inter-régions et le doublement de coûts qu'elle entraîne",
    ],
  },

  faqs: [
    {
      question: "Quelle différence entre les niveaux Cool et Cold ?",
      answer:
        "Les deux visent les accès peu fréquents, mais le niveau Cold (introduit en 2023) coûte environ trois fois moins cher que Cool en stockage (0,0036 $ contre 0,01 $/Go) tout en imposant un minimum plus long, 90 jours contre 30. Utilisez Cool pour des données consultées chaque mois, et Cold pour des données consultées trimestriellement ou moins. Les deux ont des coûts de transaction supérieurs à Hot : sur des charges à dominante écriture, les économies peuvent s'évaporer.",
    },
    {
      question: "Pourquoi la lecture depuis Azure Archive coûte-t-elle si cher ?",
      answer:
        "Le niveau Archive facture 5,50 $ pour 10 000 opérations de lecture, soit 1 000 fois plus que le niveau Hot. S'y ajoutent 0,022 $/Go de frais de restauration et un délai de réhydratation pouvant atteindre 15 heures en priorité standard (ou 1 heure en priorité élevée, plus coûteuse). Archive s'adresse réellement aux scénarios « écrire une fois, lire rarement » : sauvegardes longue durée, conformité réglementaire, archives de données brutes. Si vous comptez réellement les relire, modélisez soigneusement le coût de restauration.",
    },
    {
      question: "Quel est l'impact du choix entre LRS, ZRS et GRS sur le coût ?",
      answer:
        "Ce calculateur utilise les tarifs LRS (stockage localement redondant), les moins chers. Le ZRS (redondant inter-zones) ajoute environ 25 %. Le GRS (géo-redondant, réplication asynchrone inter-régions) ajoute environ 100 %. Le RA-GRS (GRS avec accès en lecture) ajoute environ 125 %. Pour des données non critiques, le LRS suffit ; pour des données de production nécessitant un plan de reprise, ZRS ou GRS s'imposent. Multipliez la ligne « stockage » du calculateur en conséquence.",
    },
    {
      question: "Azure facture-t-il les transactions sur le niveau Archive ?",
      answer:
        "Oui, et lourdement. Écritures vers Archive : 0,13 $ pour 10 000 opérations, contre 0,0065 $ en Hot. Lectures sur Archive : 5,50 $ pour 10 000 opérations, contre 0,00052 $ en Hot. Archive est optimisé pour des écritures groupées occasionnelles (dépôt d'une sauvegarde) et des restaurations rares (audit de conformité), pas pour des opérations courantes.",
    },
    {
      question:
        "Comment la tarification de sortie d'Azure se compare-t-elle à AWS et GCP ?",
      answer:
        "La sortie de données Azure (0,087 $/Go au-delà des 100 Go gratuits) est la moins chère des trois grands fournisseurs, légèrement sous AWS (0,09 $) et nettement sous GCP (0,12 $). Pour des charges à forte sortie de données (origine de CDN, données d'entraînement d'IA, diffusion vidéo), cela peut rendre Azure 15 à 25 % moins cher que GCP sur la facture totale, à prix de stockage comparable.",
    },
    {
      question: "Puis-je déplacer automatiquement les données entre niveaux ?",
      answer:
        "Oui. Les règles Azure Blob Lifecycle Management déplacent automatiquement les objets selon leur date de dernière modification ou de dernier accès. Par exemple : passage en Cool après 30 jours sans accès, en Cold après 90, en Archive après 365. L'exécution de ces règles est facturée comme des transactions : avec un grand nombre d'objets, la note grimpe. Intégrez ce coût de transition au calcul des économies de la migration.",
    },
  ],
};

export default translation;
