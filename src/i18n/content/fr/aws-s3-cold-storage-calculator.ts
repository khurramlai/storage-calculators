import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculateur-stockage-froid-aws-s3",
  title: "Calculateur de stockage froid AWS S3",
  description:
    "Calculateur de stockage froid AWS S3 pour les trois classes Glacier. Modélise les frais de restauration, les minimums de 90 et 180 jours et le coût mensuel réel en une seule vue.",
  tagline:
    "Le vrai calcul du stockage froid : le prix au Go paraît dérisoire, mais c'est dans les frais de restauration que Glacier cache son coût.",
  keywords: [
    "calculateur stockage froid aws s3",
    "calculateur s3 glacier",
    "calculateur glacier deep archive",
    "prix stockage froid aws",
  ],

  content: {
    intro:
      "Les classes S3 Glacier constituent le stockage objet le moins cher d'AWS. Deep Archive revient à environ 1 $ par To et par mois, soit près de 25 fois moins que S3 Standard. Mais le prix au Go affiché ne dit pas tout. Chaque classe Glacier facture des frais de restauration dès que vous récupérez réellement vos données, impose un engagement minimal de 90 ou 180 jours assorti de pénalités de suppression anticipée, et applique des coûts par requête plus élevés. Ce calculateur part d'un scénario d'archivage froid réaliste : 10 To stockés, 100 Go restaurés chaque mois. Le coût de restauration apparaît ainsi à côté du coût de stockage, là où il doit être.",
    formula:
      "<p><strong>Coût Glacier total</strong> = stockage + opérations d'écriture + restauration + sortie de données (si elles quittent AWS)</p>" +
      "<p><strong>Glacier Instant Retrieval</strong> : 0,004 $/Go/mois de stockage, 0,03 $/Go de restauration, minimum 90 jours. Accès en quelques millisecondes. Adapté aux archives que vous pourriez devoir restaurer rapidement.</p>" +
      "<p><strong>Glacier Flexible Retrieval</strong> : 0,0036 $/Go/mois de stockage, 0,01 $/Go de restauration, minimum 90 jours. Restauration en quelques minutes à quelques heures.</p>" +
      "<p><strong>Glacier Deep Archive</strong> : 0,00099 $/Go/mois de stockage, 0,02 $/Go de restauration, minimum 180 jours. Restauration en 12 heures ou plus. La moins chère, et aussi la plus lente.</p>",
    useCases: [
      "Comparer les classes Glacier pour remplacer une bandothèque",
      "Modéliser les coûts de restauration dans un scénario de conservation réglementaire",
      "Calculer le seuil de rentabilité de Deep Archive face à une bandothèque sur site",
      "Estimer le coût d'une migration ponctuelle en masse vers le stockage froid",
    ],
  },

  faqs: [
    {
      question: "Quelle est la classe de stockage froid S3 la moins chère ?",
      answer:
        "Glacier Deep Archive, à 0,00099 $/Go/mois, soit environ 1 $ par To et par mois. Le revers : une facturation minimale de 180 jours (supprimez plus tôt et vous payez quand même les 180 jours), 0,02 $/Go de frais de restauration et un délai de restauration de plus de 12 heures. Pour une archive de 100 To laissée intacte pendant un an, Deep Archive coûte environ 1 200 $ au total, contre près de 28 000 $ en S3 Standard.",
    },
    {
      question: "Comment fonctionne le minimum de 180 jours de Deep Archive ?",
      answer:
        "Si vous supprimez un objet avant 180 jours, AWS facture malgré tout comme s'il avait été conservé la totalité de cette période. Exemple : vous téléversez 1 To le premier jour et le supprimez au trentième, les 150 jours restants vous seront quand même facturés (0,50 $). Pour des données susceptibles d'être modifiées ou supprimées, Glacier Flexible Retrieval (minimum 90 jours) est plus sûr. Pour des archives réellement immuables (sauvegardes, conformité), cette pénalité n'a aucune importance.",
    },
    {
      question:
        "Combien de temps prend réellement une restauration depuis Glacier Deep Archive ?",
      answer:
        "Restauration standard : 12 heures en général, jusqu'à 48 heures garanties. Restauration groupée (à l'échelle du pétaoctet) : jusqu'à 48 heures, mais moins chère au Go. Il n'existe pas d'option accélérée pour Deep Archive, contrairement à Glacier Flexible. Prévoyez en conséquence : si vous avez besoin d'un accès le jour même, Glacier Instant Retrieval (0,004 $/Go) est préférable, malgré un coût quatre fois supérieur.",
    },
    {
      question:
        "Paie-t-on à la fois la restauration ET la sortie de données lors d'un téléchargement depuis Glacier ?",
      answer:
        "Oui. La restauration rétablit les données dans S3 Standard, où elles restent pendant la durée configurée, puis les frais de sortie s'appliquent lorsqu'elles quittent AWS. Coût total pour restaurer et télécharger 1 To depuis Deep Archive : 20 $ de restauration + 90 $ de sortie = 110 $. Programmez une expiration rapide des copies restaurées (S3 les supprime automatiquement) pour éviter une double facturation.",
    },
    {
      question:
        "Dans quels cas Glacier Instant Retrieval est-il plus avantageux que Standard-IA ?",
      answer:
        "Glacier Instant (0,004 $/Go) coûte moins cher que Standard-IA (0,0125 $/Go) en stockage, mais trois fois plus en restauration (0,03 $/Go contre 0,01 $). Le point de bascule : si vous restaurez moins d'environ 3 % de vos données par mois, Glacier Instant l'emporte. Au-delà, Standard-IA revient moins cher. Les deux imposent un minimum comparable de 90 jours.",
    },
    {
      question:
        "Puis-je utiliser le cycle de vie S3 pour basculer automatiquement vers Glacier ?",
      answer:
        "Oui. Les règles de cycle de vie S3 permettent d'enchaîner les transitions : Standard → Standard-IA après 30 jours → Glacier Instant après 60 → Deep Archive après 365. C'est le schéma classique pour les archives de journaux et les anciennes sauvegardes. Les transitions elles-mêmes sont facturées (0,05 $ pour 1 000 requêtes vers Deep Archive), ce qui les rend surtout rentables pour des objets d'au moins 128 Ko.",
    },
  ],
};

export default translation;
