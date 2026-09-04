import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculateur-cout-stockage-cloud",
  title: "Calculateur de coût du stockage cloud",
  description:
    "Calculateur de coût du stockage cloud pour AWS S3, Azure Blob, GCS et Firebase. Comparez côte à côte les frais de stockage, de sortie de données, de requêtes et de restauration, aux tarifs publics.",
  tagline:
    "Un seul calculateur, les quatre grands clouds : comparez les tarifs publics en quelques secondes.",
  keywords: [
    "calculateur coût stockage cloud",
    "calculateur prix stockage cloud",
    "comparateur prix stockage cloud",
    "calculateur stockage cloud",
  ],

  content: {
    intro:
      "La tarification du stockage cloud comporte bien plus de variables que ne le laisse penser le prix affiché au Go. Sortie de données, nombre de requêtes, frais de restauration, durée minimale de stockage : tout s'additionne. Ce calculateur modélise les quatre grands fournisseurs (AWS S3, Azure Blob, Google Cloud Storage et Firebase) aux tarifs publics de leur région américaine courante, afin que la comparaison soit réellement possible. Changer de fournisseur peut faire économiser 20 à 50 % sur une même charge de travail ; changer de classe (chaude, tiède, froide, archive) peut faire économiser 80 % ou plus sur des données que vous ne touchez presque jamais.",
    formula:
      "<p><strong>Coût mensuel</strong> = stockage + sortie de données + opérations d'écriture + opérations de lecture + restauration</p>" +
      "<ul>" +
      "<li><strong>Stockage</strong> : <code>Go × prix/Go/mois</code> de la classe choisie</li>" +
      "<li><strong>Sortie de données</strong> : <code>max(0 ; Go sortis − palier gratuit) × prix/Go</code></li>" +
      "<li><strong>Opérations d'écriture</strong> : <code>(PUT / 1000) × prix pour 1 000</code></li>" +
      "<li><strong>Opérations de lecture</strong> : <code>(GET / 1000) × prix pour 1 000</code></li>" +
      "<li><strong>Restauration</strong> : <code>Go restaurés × prix/Go</code>, uniquement sur les classes froides et d'archivage</li>" +
      "</ul>" +
      "<p>Le graphique de comparaison en bas de page montre ce que donnerait votre facture dans chaque classe du fournisseur sélectionné. Pratique pour repérer que vous êtes sur la mauvaise classe au regard de vos habitudes d'accès.</p>",
    useCases: [
      "Comparer AWS S3, Azure Blob et GCS pour un nouveau projet",
      "Estimer l'économie d'un transfert de données froides de S3 Standard vers Glacier Deep Archive",
      "Modéliser les coûts de sortie pour des applications très consommatrices de bande passante (CDN, vidéo, entraînement d'IA)",
      "Budgéter des dépenses cloud avant le lancement d'un nouveau produit",
    ],
  },

  faqs: [
    {
      question: "Quel cloud propose le stockage objet le moins cher ?",
      answer:
        "Pour du stockage chaud ou standard : Azure Blob Hot (0,0184 $/Go) est le moins cher, devant GCP Standard (0,020 $), AWS S3 Standard (0,023 $) puis Firebase (0,026 $). Mais le stockage chaud constitue rarement le poste principal : la sortie de données (AWS : 0,09 $/Go ; Azure : 0,087 $ ; GCP : 0,12 $) et le volume de requêtes pèsent souvent davantage. La vraie réponse dépend de vos habitudes d'accès.",
    },
    {
      question:
        "Pourquoi la sortie de données est-elle si chère chez les fournisseurs cloud ?",
      answer:
        "La sortie de données constitue le principal mécanisme de verrouillage du marché du stockage cloud : faire sortir 100 To de n'importe quel grand cloud coûte environ 9 000 $. Le trafic entrant et intra-région est gratuit, l'inter-région se situe entre les deux. Si votre charge de travail lit beaucoup de données, intégrez la sortie au coût total : pour certains usages vidéo, IA ou CDN, elle peut dépasser le stockage d'un facteur 10.",
    },
    {
      question: "Quelle est la classe la moins chère pour des sauvegardes ?",
      answer:
        "S3 Glacier Deep Archive (0,00099 $/Go/mois) et Azure Archive (0,00099 $/Go/mois) sont à égalité, soit environ 1 $ par To et par mois. GCP Archive est légèrement au-dessus, à 0,0012 $/Go. Toutes imposent un engagement minimal de 90 à 180 jours et des frais de restauration (0,02 à 0,05 $/Go). Parfait pour des sauvegardes que vous ne toucherez presque jamais ; si vous envisagez une restauration mensuelle, calculez d'abord le coût de récupération.",
    },
    {
      question: "Ce calculateur prend-il en compte les paliers gratuits ?",
      answer:
        "Partiellement : les paliers gratuits de sortie de données sont modélisés (100 premiers Go par mois offerts chez AWS, Azure et GCP). Les paliers gratuits de stockage (5 Go Firebase Spark, 5 Go AWS pendant 12 mois, 5 Go GCS Always Free) ne sont pas déduits, car ils ne concernent que les nouveaux comptes et comportent des conditions d'éligibilité. À l'échelle de la production, ces paliers sont négligeables.",
    },
    {
      question: "Ces prix correspondent-ils à ce que je paierai réellement ?",
      answer:
        "Ce sont les tarifs publics de la région américaine la plus courante (us-east-1 chez AWS, East US chez Azure, us-central1 chez GCP). Le coût réel dépend de la région (certaines coûtent 10 à 30 % de plus), des remises pour engagement (Azure Reserved Capacity, CUD de GCP, Savings Plans d'AWS offrent 20 à 50 % de réduction) et de vos éventuelles conditions négociées. Utilisez ce calculateur pour comparer, pas pour facturer.",
    },
    {
      question: "Et Cloudflare R2 ou Backblaze B2 ?",
      answer:
        "Les deux proposent un stockage nettement moins cher (0,015 $ pour R2, 0,006 $ pour B2 en 2025) et aucun frais de sortie, ce qui change tout pour les charges très consommatrices de bande passante. Ils ne figurent pas dans ce calculateur car leurs fonctionnalités (cohérence, régions, conformité) diffèrent de celles des grands fournisseurs. Si le coût est votre priorité et que vous n'avez pas besoin des services spécifiques d'AWS, Azure ou GCP, ils méritent une évaluation à part.",
    },
  ],
};

export default translation;
