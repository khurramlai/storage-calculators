import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "calculateur-stockage-genetec",
  title: "Calculateur de stockage Genetec",
  description:
    "Calculateur de stockage Genetec pour dimensionner la capacité des Archivers de Security Center. Adapté aux déploiements d'entreprise multi-marques avec de longues durées de rétention.",
  tagline:
    "Dimensionnement de la capacité des Archivers pour les déploiements Genetec Security Center à grande échelle.",
  keywords: [
    "calculateur stockage genetec",
    "stockage genetec security center",
    "calculateur archiver genetec",
    "dimensionnement stockage genetec",
  ],

  content: {
    intro:
      "Genetec Security Center appartient à l'univers des VMS d'entreprise. Son rôle Archiver collecte la vidéo de nombreuses caméras, souvent plusieurs centaines, sur de longues durées de rétention. Dimensionner le stockage pour Genetec n'a rien à voir avec le dimensionnement d'un simple NVR : il faut raisonner en IOPS d'écriture soutenues, en rétention de plusieurs semaines et parfois en stockage hiérarchisé, avec des disques rapides pour les enregistrements récents et des disques moins coûteux pour les plus anciens. Les valeurs par défaut correspondent ici à une échelle d'entreprise moyenne : 16 caméras, 60 jours de rétention. La capacité brute obtenue est ce que les outils de dimensionnement de Genetec traduisent ensuite en nombre d'Archivers et en organisation des baies de disques.",
    formula:
      "<p><strong>Stockage Archiver Genetec</strong> = <code>(débit × 3600 / 8) × caméras × heures × jours</code></p>" +
      "<p>Security Center enregistre la vidéo au format <em>G64x</em>, un conteneur multiplexé propriétaire encapsulant le flux H.264 ou H.265 sous-jacent. Le G64x n'ajoute qu'une surcharge minime, inférieure à 2 %, si bien que la capacité brute calculée s'applique directement. Pour les déploiements hiérarchisés où une partie des enregistrements bascule vers un stockage d'archive plus lent, découpez votre rétention en segments « chaud » et « froid » et lancez le calculateur deux fois.</p>",
    useCases: [
      "Dimensionner le stockage des serveurs Archiver pour un nouveau déploiement Security Center",
      "Vérifier l'estimation de stockage d'un partenaire Genetec face au calcul réel",
      "Planifier l'extension d'un Archiver lors de l'ajout de nouvelles voies caméra",
      "Organiser un stockage hiérarchisé : comment répartir les disques entre archive chaude et froide",
    ],
  },

  faqs: [
    {
      question: "Qu'est-ce qu'un Archiver Genetec ?",
      answer:
        "L'Archiver est le rôle de Security Center chargé de recevoir la vidéo des caméras et de l'écrire sur disque. Un Archiver gère généralement 50 à 200 caméras selon le débit et le trafic total. Les déploiements multi-Archivers sont courants sur les sites comptant des milliers de caméras. Ce calculateur donne le besoin de stockage par Archiver : multipliez par le nombre d'Archivers pour l'ensemble du déploiement.",
    },
    {
      question:
        "Security Center prend-il en charge le H.265 et les codecs intelligents ?",
      answer:
        "Oui. Security Center prend en charge le H.265 depuis la version 5.7 et accepte les variantes intelligentes (H.265+ de Hikvision, WiseStream II de Hanwha, Zipstream d'Axis) comme des flux H.265 standards. Les économies de stockage se répercutent donc sur l'Archiver. L'option « H.265+ » du calculateur modélise ces codecs intelligents avec le taux d'économie publié.",
    },
    {
      question:
        "Quelle différence de stockage entre enregistrement continu et sur détection dans Security Center ?",
      answer:
        "Security Center autorise des règles d'enregistrement par caméra et par planning. L'enregistrement sur détection de mouvement réduit généralement le stockage de 60 à 90 % dans les environnements bien réglés, mais les déploiements d'entreprise imposent souvent un enregistrement continu pour des raisons de conformité (banque, jeux, transports). Le calculateur gère les deux modes : choisissez « sur détection de mouvement » pour l'estimation à 40 % de cycle d'activité, ou « continu » pour du 24 h/24.",
    },
    {
      question: "Genetec exige-t-il un matériel de stockage particulier ?",
      answer:
        "Security Center accepte tout stockage en mode bloc : disques directement attachés au serveur Archiver, SAN, ou NAS via iSCSI ou SMB. Les déploiements d'entreprise utilisent généralement des grappes RAID internes dans des serveurs 2U/4U, ou un stockage SAN partagé entre plusieurs Archivers. Les disques de vidéosurveillance (WD Purple Pro, Seagate Exos) sont préférables aux modèles grand public. Le calculateur fournit la capacité brute ; le dimensionnement en IOPS fait l'objet des guides matériels de Genetec.",
    },
    {
      question:
        "Genetec peut-il déplacer automatiquement les anciens enregistrements vers un stockage moins coûteux ?",
      answer:
        "Oui. Security Center intègre un transfert d'archives qui déplace les enregistrements du stockage principal (chaud) vers un stockage secondaire (froid) après une durée configurable. Le stockage froid peut reposer sur des disques de grande capacité peu coûteux ou sur du stockage objet. Pour planifier un déploiement hiérarchisé, lancez ce calculateur deux fois : une fois pour la rétention chaude (14 jours par exemple) et une fois pour la rétention froide (60 jours moins 14). Additionnez ensuite les résultats.",
    },
    {
      question:
        "Pourquoi le disque de mon Archiver se remplit-il plus vite que prévu ?",
      answer:
        "Les causes les plus fréquentes : (1) les caméras utilisent un débit supérieur à celui de leur fiche technique (vérifiez toujours les statistiques de flux entrants de l'Archiver) ; (2) l'enregistrement audio est activé sur de nombreuses voies ; (3) la relecture des enregistrements embarqués est également archivée ; (4) les signets et incidents ajoutent une légère surcharge. La vue Statistiques de flux de Security Center affiche le débit d'écriture réel par caméra.",
    },
  ],
};

export default translation;
