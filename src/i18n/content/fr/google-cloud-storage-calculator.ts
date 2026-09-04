import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculateur-google-cloud-storage",
  title: "Calculateur Google Cloud Storage",
  description:
    "Calculateur de coût Google Cloud Storage pour les classes Standard, Nearline, Coldline et Archive. Inclut les opérations de classe A et B, la sortie de données et les frais de restauration.",
  tagline:
    "Tarification GCS pour Standard, Nearline, Coldline et Archive : une estimation de coût immédiate.",
  keywords: [
    "calculateur coût google cloud storage",
    "calculateur prix google cloud storage",
    "calculateur google cloud storage",
    "calculateur gcs",
    "tarif google cloud storage",
  ],

  content: {
    intro:
      "Google Cloud Storage propose quatre classes de stockage : Standard, Nearline, Coldline et Archive. Même API, même modèle de cohérence, mais des tarifs très différents pour le stockage, les opérations et la restauration. Ce calculateur estime le coût mensuel des quatre classes aux tarifs publics de la région us-central1. La tarification GCS est en réalité plus simple que celle d'AWS, avec moins de sous-catégories de transactions. En revanche, la sortie de données y est la plus chère des trois grands clouds, à 0,12 $ par Go : si vous faites sortir des données, modélisez cette ligne avec soin.",
    formula:
      "<p><strong>Facture GCS</strong> = stockage + opérations de classe A + opérations de classe B + sortie de données + restauration</p>" +
      "<ul>" +
      "<li><strong>Standard</strong> : 0,020 $/Go/mois. Aucun minimum. Choix par défaut pour les données actives.</li>" +
      "<li><strong>Nearline</strong> : 0,010 $/Go/mois, minimum 30 jours, 0,01 $/Go de restauration.</li>" +
      "<li><strong>Coldline</strong> : 0,004 $/Go/mois, minimum 90 jours, 0,02 $/Go de restauration.</li>" +
      "<li><strong>Archive</strong> : 0,0012 $/Go/mois, minimum 365 jours, 0,05 $/Go de restauration.</li>" +
      "</ul>" +
      "<p>Opérations de classe A (écritures, listages) : 0,05 $ pour 10 000 en Standard, davantage sur les classes froides. Opérations de classe B (lectures) : 0,004 $ pour 10 000 en Standard. Sortie vers Internet : les 100 premiers Go par mois sont gratuits, puis 0,12 $/Go.</p>",
    useCases: [
      "Comparer les classes GCS avant de créer un nouveau bucket",
      "Estimer les économies d'un déplacement des données anciennes vers Coldline ou Archive",
      "Modéliser le coût de sortie pour BigQuery, des données d'entraînement d'IA ou des exports analytiques",
      "Comparer GCS à S3 ou Azure pour une même charge de travail",
    ],
  },

  faqs: [
    {
      question: "Quelle est la classe Google Cloud Storage la moins chère ?",
      answer:
        "Archive, à 0,0012 $/Go/mois (environ 1,20 $/To/mois), est la moins chère, mais impose un engagement de stockage de 365 jours et 0,05 $/Go de frais de restauration. Pour des données auxquelles vous pourriez accéder dans l'année, Coldline (0,004 $/Go, minimum 90 jours, 0,02 $/Go de restauration) constitue le meilleur compromis. Pour un accès mensuel : Nearline. Pour des données actives : Standard.",
    },
    {
      question:
        "Pourquoi la sortie de données GCS est-elle plus chère que chez AWS ou Azure ?",
      answer:
        "La sortie Internet de GCS coûte 0,12 $/Go au-delà des 100 Go gratuits, soit environ 30 % de plus qu'AWS (0,09 $) et 40 % de plus qu'Azure (0,087 $). Google l'attribue à la qualité de son réseau et à son infrastructure mondiale. Pour les charges à forte sortie de données, cela peut rendre GCS sensiblement plus cher au global, même quand son stockage est moins cher. Le réseau Premium Tier est appliqué par défaut ; le Standard Tier revient moins cher mais implique des compromis de performance.",
    },
    {
      question:
        "Quelle différence entre les opérations de classe A et de classe B ?",
      answer:
        "Les opérations de classe A sont les écritures et les listages : insert, patch, list. Celles de classe B sont les lectures : get, getIamPolicy. GCS les facture à des tarifs différents (0,05 $ pour 10 000 opérations de classe A en Standard, contre 0,004 $ pour la classe B), les lectures coûtant moins cher à grande échelle. Sur des charges à dominante écriture (journaux, télémétrie), la classe A pèse le plus dans la ligne « opérations » ; sur des charges à dominante lecture (diffusion de contenu), c'est la classe B.",
    },
    {
      question: "Existe-t-il des réductions au titre du palier gratuit ?",
      answer:
        "Oui. L'offre Always Free de GCS comprend 5 Go de stockage Standard, 5 000 opérations de classe A, 50 000 opérations de classe B et 100 Go de sortie (vers la plupart des destinations) par mois, dans les régions us-east1, us-west1 et us-central1. Utile pour de petites applications, négligeable à l'échelle de la production. Ce calculateur déduit le palier gratuit de 100 Go de sortie, mais pas les 5 Go de stockage Always Free, qui ne s'appliquent qu'à certaines régions.",
    },
    {
      question: "Faut-il utiliser des buckets Multi-Region ou Dual-Region ?",
      answer:
        "Les tarifs de ce calculateur correspondent à des buckets mono-région. Le Multi-Region (« us » par exemple) ajoute environ 30 % au stockage et réduit la latence pour un public mondial, ce qui est utile pour la diffusion de contenu. Le Dual-Region (nam4 par exemple) ajoute environ 50 % pour la réplication inter-régions. Une configuration mono-région avec Cloud CDN en frontal revient souvent moins cher qu'un stockage Multi-Region pour les charges à dominante lecture.",
    },
    {
      question: "Comment fonctionne GCS Autoclass ?",
      answer:
        "Autoclass est la fonction de transition automatique de GCS : elle déplace les objets entre Standard, Nearline, Coldline et Archive selon leurs profils d'accès, sans frais de suppression anticipée. Le suivi coûte environ 0,0025 $ pour 1 000 objets et par mois. C'est utile pour des accès imprévisibles ; pour des profils prévisibles, des règles de cycle de vie définies manuellement reviennent moins cher.",
    },
  ],
};

export default translation;
