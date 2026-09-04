import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculateur-stockage-s3",
  title: "Calculateur de stockage AWS S3",
  description:
    "Calculateur de stockage S3 couvrant les six classes AWS : Standard, Standard-IA, One Zone-IA, ainsi que Glacier Instant, Flexible et Deep Archive. Sorties de données et opérations comprises.",
  tagline:
    "Estimez les coûts S3 pour toutes les classes de stockage, frais de requêtes et de sortie de données inclus.",
  keywords: [
    "calculateur stockage s3",
    "calculateur coût aws s3",
    "calculateur prix s3",
    "calculateur coût stockage aws",
  ],

  content: {
    intro:
      "Amazon S3 propose six classes de stockage qui échangent rapidité d'accès, garanties de durabilité et engagements minimaux contre un coût au Go nettement plus bas. Ce calculateur les couvre toutes : Standard, Standard-IA, One Zone-IA, Glacier Instant Retrieval, Glacier Flexible Retrieval et Glacier Deep Archive, aux tarifs publics de la région us-east-1. Le stockage ne représente cependant que rarement la totalité de la facture : les requêtes PUT et GET, la sortie de données vers Internet et les frais de restauration Glacier pèsent souvent davantage, en particulier sur les charges de travail actives.",
    formula:
      "<p><strong>Facture S3</strong> = stockage + opérations + sortie de données + restauration</p>" +
      "<p>S3 Standard : <code>0,023 $/Go/mois</code>. Standard-IA : <code>0,0125 $/Go/mois</code> avec 0,01 $/Go de frais de restauration. Deep Archive : <code>0,00099 $/Go/mois</code>, soit environ 1 $ par To et par mois, avec un minimum de 180 jours et 0,02 $/Go de restauration. Le tarif des requêtes va de 0,005 $ pour 1 000 PUT en Standard à 0,05 $ pour 1 000 PUT en Deep Archive.</p>" +
      "<p>Sortie de données vers Internet : les 100 premiers Go par mois sont gratuits, puis <code>0,09 $/Go</code> pour les 10 To suivants, jusqu'à 0,05 $/Go au-delà de 150 To.</p>",
    useCases: [
      "Dimensionner le stockage d'un nouveau bucket S3 avant sa mise en service",
      "Comparer S3 Standard et Standard-IA pour un bucket existant",
      "Estimer le coût d'un déplacement de données froides vers Glacier Deep Archive",
      "Modéliser les coûts de sortie de données d'une application distribuant des téléchargements depuis S3",
    ],
  },

  faqs: [
    {
      question: "Quelle classe de stockage S3 est la moins chère ?",
      answer:
        "Pour de l'archivage longue durée rarement consulté, Glacier Deep Archive à 0,00099 $/Go/mois (environ 1 $/To/mois) est la moins chère, mais impose une facturation minimale de 180 jours, 0,02 $/Go de frais de restauration et un délai de restauration de 12 heures ou plus. Pour des données fréquemment consultées : S3 Standard à 0,023 $/Go. Pour un accès mensuel : Standard-IA à 0,0125 $/Go, avec un minimum de 30 jours et 0,01 $/Go de restauration.",
    },
    {
      question: "Comment réduire mes coûts S3 sans modifier mon application ?",
      answer:
        "Trois gains rapides : (1) activez des règles de cycle de vie S3 pour basculer automatiquement les objets vers Standard-IA après 30 jours, puis vers Glacier après 90 ; (2) activez Intelligent-Tiering pour les profils d'accès imprévisibles, S3 déplaçant alors les objets selon leur usage ; (3) placez CloudFront ou un autre CDN devant S3 pour mettre en cache les lectures fréquentes, la sortie de données via CDN revenant moins cher que celle de S3 sur de gros volumes.",
    },
    {
      question: "Ce calculateur prend-il en compte S3 Intelligent-Tiering ?",
      answer:
        "Pas directement : la tarification d'Intelligent-Tiering dépend de la façon dont S3 déplace vos objets, ce qui varie selon la charge de travail. En règle générale, cette classe se situe entre les coûts Standard et Standard-IA (0,012 à 0,023 $/Go), avec de légers frais de surveillance (0,0025 $ par tranche de 1 000 objets). Pour des profils d'accès prévisibles, des règles de cycle de vie entre Standard et Standard-IA reviennent généralement moins cher.",
    },
    {
      question: "La sortie de données coûte-t-elle vraiment 0,09 $ par Go ?",
      answer:
        "Oui pour la région standard us-east-1, au-delà des 100 premiers Go gratuits chaque mois. Le tarif baisse avec le volume : 0,085 $ pour les 40 To suivants, 0,07 $ pour les 100 To suivants, 0,05 $ au-delà de 150 To. La réplication inter-régions et S3 Transfer Acceleration sont facturées en supplément. Si vous distribuez de gros volumes en téléchargement, CloudFront (0,085 $ descendant jusqu'à 0,02 $ à grande échelle) revient généralement moins cher que S3 en direct.",
    },
    {
      question: "Quelle différence entre les classes Glacier ?",
      answer:
        "Glacier Instant Retrieval (0,004 $/Go) offre une restauration en quelques millisecondes comme S3 Standard, avec un minimum de 90 jours et 0,03 $/Go de frais de restauration. Glacier Flexible Retrieval (0,0036 $/Go) demande de quelques minutes à quelques heures. Glacier Deep Archive (0,00099 $/Go) est la moins chère mais exige plus de 12 heures et impose un minimum de 180 jours. Choisissez selon votre patience au moment de la restauration.",
    },
    {
      question: "S3 facture-t-il les requêtes échouées ou interrompues ?",
      answer:
        "Oui : les frais de requêtes s'appliquent à tous les appels d'API, y compris les erreurs 4xx dues à des erreurs côté client. Les téléversements multipart interrompus laissent des fragments sur le disque, facturés comme du stockage tant qu'ils ne sont pas nettoyés. Créez une règle de cycle de vie qui interrompt les téléversements multipart incomplets au bout de 7 jours : c'est une surprise fréquente sur les factures AWS.",
    },
  ],
};

export default translation;
