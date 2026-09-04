import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculateur-stockage-firebase",
  title: "Calculateur de prix du stockage Firebase",
  description:
    "Calculateur de prix du stockage Firebase pour la formule Blaze à l'usage. Modélise les coûts de stockage, de téléchargement, d'envoi et d'opérations, quelle que soit la taille de l'application.",
  tagline:
    "Tarification de Firebase Cloud Storage : stockage, téléchargements et opérations sur la formule Blaze.",
  keywords: [
    "calculateur prix stockage firebase",
    "calculateur stockage firebase",
    "coût firebase cloud storage",
    "tarif firebase blaze",
  ],

  content: {
    intro:
      "Firebase Cloud Storage n'est en pratique qu'une couche fine posée sur Google Cloud Storage : même infrastructure, SDK plus simple, intégration avec Firebase Auth et les règles de sécurité. La tarification suit celle de GCS Standard avec une légère majoration, à laquelle s'ajoute la formule Spark (gratuite) offrant 5 Go de stockage et 1 Go de téléchargements par jour. Ce calculateur modélise la formule Blaze, facturée à l'usage, vers laquelle toute application Firebase en production finit par migrer. Si vous raisonnez à grande échelle, comparez aussi avec le calculateur GCS classique pour la même charge de travail.",
    formula:
      "<p><strong>Firebase Storage sur la formule Blaze :</strong></p>" +
      "<ul>" +
      "<li><strong>Stockage</strong> : 0,026 $/Go/mois</li>" +
      "<li><strong>Téléchargement</strong> (sortie vers Internet) : 0,12 $/Go</li>" +
      "<li><strong>Envoi</strong> : gratuit</li>" +
      "<li><strong>Opérations</strong> : 0,05 $ pour 10 000 écritures, 0,004 $ pour 10 000 lectures</li>" +
      "</ul>" +
      "<p>La formule Spark offre gratuitement 5 Go de stockage, 1 Go de téléchargements par jour, 20 000 envois par jour et 50 000 téléchargements par jour. La plupart des applications dépassent d'abord la limite de téléchargements.</p>",
    useCases: [
      "Estimer le coût de Firebase Storage pour une application mobile en croissance",
      "Déterminer à quel moment passer de la formule Spark (gratuite) à Blaze (à l'usage)",
      "Comparer Firebase Storage à GCS brut pour une même charge de travail",
      "Modéliser le coût des médias envoyés par les utilisateurs (photos de profil, vidéos)",
    ],
  },

  faqs: [
    {
      question: "Quand faut-il passer de Firebase Spark à Blaze ?",
      answer:
        "Les limites de Spark sont généralement atteintes dans cet ordre : les téléchargements quotidiens (plafond de 1 Go par jour), puis le nombre d'opérations quotidiennes, puis le stockage (plafond de 5 Go). Pour une application grand public, le point de bascule se situe souvent entre 100 et 500 utilisateurs actifs par jour. Blaze est facturé à l'usage sans minimum : pour une petite application stockant 10 Go et générant 50 Go de téléchargements par mois, comptez environ 6 à 7 $ par mois au total.",
    },
    {
      question:
        "Firebase Storage est-il plus cher que Google Cloud Storage brut ?",
      answer:
        "Légèrement. Firebase Storage revient à 0,026 $/Go/mois contre 0,020 $/Go pour GCS Standard. Cette majoration paie le SDK simplifié, l'intégration de l'authentification, les règles de sécurité et la console Firebase. En dessous d'environ 1 To stocké, l'écart est négligeable et le temps de développement économisé le justifie. À partir de 10 To, passer directement par GCS devient rentable malgré le travail d'intégration.",
    },
    {
      question:
        "Combien coûte l'hébergement de la photo de profil d'un utilisateur ?",
      answer:
        "Une photo de profil compressée pèse en général environ 500 Ko : 1 Go en contient donc à peu près 2 000. À 0,026 $/Go/mois, 2 000 photos de profil coûtent environ 0,026 $ par mois, soit 0,31 $ par an. Ajoutez environ 0,06 $ pour 100 téléchargements de chacune (usage typique du premier mois). Pour une application de 100 000 utilisateurs : environ 13 $ par mois de stockage, plus un coût de téléchargement très variable.",
    },
    {
      question: "Les règles de sécurité Firebase sont-elles facturées ?",
      answer:
        "Non, elles font partie de la plateforme. Mais chaque opération de stockage est évaluée par ces règles, ce qui la décompte du quota d'opérations. Des règles complexes comportant des consultations de base de données peuvent être lentes et ajouter de la latence ; dans les cas extrêmes, un dépassement de délai provoque l'échec de l'opération, qui reste facturée. Gardez des règles simples et limitées au stockage autant que possible.",
    },
    {
      question:
        "Puis-je utiliser Firebase Cloud Storage avec Cloud Functions ?",
      answer:
        "Oui. Les déclencheurs Cloud Storage (onFinalize, onDelete, onMetadataUpdate) servent couramment à traiter les fichiers envoyés : redimensionnement d'images, analyse antivirus, conversion de format. Chaque exécution de fonction est facturée séparément sur la ligne Cloud Functions (environ 0,40 $ par million d'invocations, plus le temps processeur et mémoire). Prévoyez ce coût en plus de celui du stockage.",
    },
    {
      question:
        "Quelle est la solution la moins chère pour stocker 1 To de fichiers utilisateurs ?",
      answer:
        "Pour le seul coût de stockage sur Firebase Blaze : 1 To stocké revient à environ 26 $ par mois. Mais ce sont les téléchargements qui dominent pour la plupart des applications : 1 To de téléchargements mensuels ajoute 122 $ par mois. Pour ces usages, envisagez : (1) Firebase Storage associé au cache de Firebase Hosting, (2) Firebase Storage avec Cloud CDN, ou (3) un fournisseur au transfert bon marché comme Cloudflare R2 (0,015 $/Go de stockage et aucun frais de sortie).",
    },
  ],
};

export default translation;
