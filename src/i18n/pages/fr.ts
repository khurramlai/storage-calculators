import type { StaticPages } from "~/i18n/types";

/**
 * French versions of the about + legal pages. Internal links point at the
 * French URLs so a visitor never falls back into the English tree mid-policy.
 */
const pages: StaticPages = {
  about: {
    slug: "a-propos",
    title: "À propos",
    description:
      "À propos de StorageCalc : pourquoi ce site indépendant de calculateurs existe, qui l'anime, d'où viennent les calculs et comment nous contacter.",
    heading: "À propos de StorageCalc",
    subtitle:
      "Une collection indépendante et gratuite de calculateurs de stockage, née du constat que les calculateurs des constructeurs masquent les formules.",
    body: `
      <h2>Pourquoi ce site existe</h2>
      <p>Tous les fabricants de solutions de stockage (Hikvision, Synology, AWS, Azure) proposent un calculateur sur leur site. Ils sont tous <em>corrects</em>. Mais ils posent trois problèmes :</p>
      <ul>
        <li>Ils vous enferment dans l'offre d'un seul constructeur. Vous voulez comparer AWS S3 et Azure Blob ? Vous jonglez entre trois onglets en essayant de retenir les tarifs de sortie de données.</li>
        <li>Ils masquent la formule. Vous saisissez des valeurs, un chiffre s'affiche, et vous n'avez aucune idée de son origine.</li>
        <li>Ils sont conçus comme des tunnels de vente. Appel à l'action commercial sur chaque écran, invitation à créer un compte, « contactez notre équipe commerciale ».</li>
      </ul>
      <p>StorageCalc corrige ces trois défauts. Chaque calculateur affiche sa formule. Chaque page est gratuite, sans inscription, et pensée pour vous donner un chiffre fiable rapidement.</p>

      <h2>D'où viennent les calculs</h2>
      <p>La formule de chaque calculateur provient de standards du secteur documentés publiquement :</p>
      <ul>
        <li><strong>RAID</strong> : définitions RAID de la SNIA et formules standards de capacité, de parité et de tolérance de panne.</li>
        <li><strong>Vidéosurveillance</strong> : tableaux de dimensionnement publiés par Hikvision, Hanwha (Wisenet) et Axis. Débits de référence à 25 ips par résolution, ajustés selon l'efficacité du codec.</li>
        <li><strong>Cloud</strong> : tarifs publics d'AWS S3, Azure Blob, Google Cloud Storage et Firebase Cloud Storage, région américaine.</li>
      </ul>
      <p>Lorsque les constructeurs ne publient pas de chiffres exacts, nous retenons des valeurs médianes prudentes, cohérentes avec les déploiements réels. La section « À propos de ce calculateur » de chaque page précise la source utilisée.</p>

      <h2>Ce que vous trouverez ici</h2>
      <p>Une bibliothèque de calculateurs couvrant le RAID, la vidéosurveillance, le NAS, le stockage cloud et quelques domaines spécialisés. La liste complète se trouve sur la <a href="/fr/">page d'accueil</a>. De nouveaux calculateurs sont ajoutés au fil des besoins mal couverts que nous identifions.</p>

      <h2>Ce que vous n'y trouverez PAS</h2>
      <ul>
        <li>Aucun compte. Il n'y a rien à créer.</li>
        <li>Aucun suivi tant que vous n'avez pas accepté la bannière de cookies. Voir la <a href="/fr/politique-de-confidentialite/">politique de confidentialité</a>.</li>
        <li>Aucun placement payant. Les calculateurs ne sont pas classés selon qui paie, mais par ordre alphabétique ou par catégorie.</li>
        <li>Aucun sponsoring de constructeur. Si des publicités apparaissent à l'avenir, il s'agira de Google AdSense, clairement identifiées.</li>
      </ul>

      <h2>Comment ce site reste gratuit</h2>
      <p>Le site est hébergé en statique sur Cloudflare Pages (offre gratuite) et pourra afficher des annonces Google pour couvrir le renouvellement du nom de domaine. Les calculs, eux, resteront toujours gratuits et sans inscription.</p>

      <h2>Contributions et corrections</h2>
      <p>Si vous repérez un bug, une spécification constructeur erronée, ou si vous souhaitez qu'un calculateur soit ajouté :</p>
      <ul>
        <li>Ouvrez un ticket ou une pull request sur le dépôt du projet (lien à venir).</li>
        <li>Ou écrivez à l'éditeur du site (lien à venir).</li>
      </ul>
      <p>Les signalements d'erreurs de calcul sont traités en priorité : l'exactitude est la raison d'être de ce site.</p>

      <h2>Mentions légales</h2>
      <ul>
        <li><a href="/fr/politique-de-confidentialite/">Politique de confidentialité</a></li>
        <li><a href="/fr/politique-cookies/">Politique relative aux cookies</a></li>
        <li><a href="/fr/conditions-utilisation/">Conditions d'utilisation</a></li>
        <li><a href="/fr/avertissement/">Avertissement</a>, le plus important. À lire avant de fonder une décision réelle sur l'un de ces chiffres.</li>
      </ul>
    `,
  },

  disclaimer: {
    slug: "avertissement",
    title: "Avertissement",
    description:
      "Avertissement StorageCalc : les calculateurs fournissent des estimations, les tarifs constructeurs évoluent, le RAID n'est pas une sauvegarde, et autres points à connaître avant de s'appuyer sur un résultat.",
    subtitle:
      "Ce que ces calculateurs peuvent et ne peuvent pas vous dire. À lire avant de fonder une décision réelle sur un chiffre.",
    updated: "Dernière mise à jour : 18/05/2026",
    body: `
      <h2>Généralités</h2>
      <p>Les calculateurs de StorageCalc sont des <strong>outils d'estimation destinés à la planification uniquement</strong>. Ils s'appuient sur des formules standards du secteur et sur des spécifications constructeurs publiques, mais les résultats réels varient. Vérifiez toujours auprès de la documentation constructeur à jour avant d'acheter du matériel, de signer un contrat cloud ou de prendre une décision critique pour la sécurité.</p>

      <h2>Calculateurs RAID</h2>
      <ul>
        <li><strong>Le RAID n'est pas une sauvegarde.</strong> Le RAID protège de la panne d'un disque, pas de la corruption de fichiers, d'un rançongiciel, d'une suppression accidentelle, d'un incendie ou d'un vol. Conservez toujours des sauvegardes hors grappe pour tout ce que vous ne pouvez pas vous permettre de perdre.</li>
        <li>Les multiplicateurs de vitesse supposent des E/S parallèles idéales et l'absence de goulot d'étranglement au niveau du contrôleur. Le débit réel dépend du contrôleur RAID, de la vitesse du bus, du type de disque (HDD, SSD ou NVMe), de la taille des bandes et de la charge de travail simultanée.</li>
        <li>Les chiffres de tolérance de panne correspondent au meilleur des cas en régime stable. Les fenêtres de reconstruction et les taux d'erreurs de lecture irrécupérables (URE) peuvent modifier le calcul en pratique, en particulier sur les grandes grappes de disques de plusieurs téraoctets.</li>
        <li>La surcharge du système de fichiers (ext4, XFS, ZFS, NTFS) consomme généralement 1 à 10 % de la capacité brute. Les instantanés, la déduplication et les blocs réservés la réduisent encore.</li>
      </ul>

      <h2>Calculateurs de vidéosurveillance</h2>
      <ul>
        <li>Les estimations de débit reposent sur les tableaux de dimensionnement publiés par les constructeurs (Hikvision, Hanwha, Axis, etc.). Le débit réel varie de ±20 % selon la complexité de la scène : les scènes animées consomment davantage, les scènes statiques moins.</li>
        <li>Les économies des codecs intelligents (H.265+, WiseStream II, Zipstream) vont de 50 à 80 % selon l'activité de la scène. Nous retenons 75 %, ce qui correspond à une scène urbaine typique.</li>
        <li>L'hypothèse d'un cycle d'activité de 40 % pour l'enregistrement sur détection de mouvement est prudente. Avec une détection d'événements bien réglée (classification personne/véhicule), la durée réellement enregistrée peut descendre sous 10 % de la plage active.</li>
        <li>L'enregistrement audio, les archives en double flux et les séquences marquées ajoutent 5 à 15 % à l'estimation vidéo seule du calculateur.</li>
        <li>Les disques recommandés sont exclusivement des modèles conçus pour la vidéosurveillance (WD Purple, Seagate SkyHawk, Toshiba S300). Les disques grand public fonctionneront un temps, puis tomberont prématurément en panne sous une charge d'écriture continue.</li>
      </ul>

      <h2>Calculateurs de stockage cloud</h2>
      <ul>
        <li><strong>Les prix changent souvent.</strong> Les chiffres de ce calculateur sont les tarifs publics de la région américaine la plus courante, début 2025. Le coût réel dépend de la région, des remises pour engagement, des accords entreprise et des évolutions tarifaires depuis la publication.</li>
        <li>Les paliers gratuits ne sont que partiellement modélisés. Les paliers gratuits de sortie de données (100 Go/mois chez AWS, Azure et GCP) sont déduits. Les paliers gratuits de stockage (Firebase Spark 5 Go, offre gratuite AWS de 5 Go pendant 12 mois) ne le sont pas, car ils ne concernent que les nouveaux comptes et comportent des conditions d'éligibilité.</li>
        <li>Le tarif des opérations varie selon la classe de stockage : nous utilisons le prix public par catégorie d'opération. Les capacités réservées, les Savings Plans et les remises pour engagement peuvent réduire le coût réel de 20 à 50 %.</li>
        <li>Les transferts inter-régions, les surcoûts liés aux pics de requêtes et les frais de transition de cycle de vie peuvent générer des lignes de facturation non modélisées ici.</li>
        <li><strong>N'utilisez pas ce calculateur pour établir une facture ou un engagement budgétaire sans vérifier auprès du calculateur officiel de chaque fournisseur et des tarifs réels de votre compte.</strong></li>
      </ul>

      <h2>Calculateurs de garde-meuble et de stockage physique</h2>
      <ul>
        <li>Les estimations de capacité supposent une densité de rangement raisonnable. Les objets encombrants (matelas, canapés, appareils de sport) et les espaces de protection réduisent le volume utile de 20 à 40 %.</li>
        <li>Les tarifs des box de stockage varient fortement selon la localisation, la saison et la demande. Utilisez la taille recommandée par le calculateur, mais faites établir des devis locaux.</li>
      </ul>

      <h2>Marques des constructeurs</h2>
      <p>StorageCalc cite plusieurs constructeurs (Hikvision, Hanwha, Axis, Genetec, Ubiquiti, Synology, Amazon, Microsoft, Google, Firebase, WD, Seagate, Toshiba) par leurs noms de produits. Ces marques appartiennent à leurs propriétaires respectifs. Leur mention est purement descriptive et n'implique ni recommandation, ni partenariat, ni affiliation, ni parrainage.</p>

      <h2>Ceci n'est pas un conseil professionnel</h2>
      <p>Ce site est édité par un éditeur indépendant, et non par un architecte stockage certifié, un installateur de vidéosurveillance ou un cabinet de conseil cloud. Pour toute décision de stockage critique pour votre activité, pour la sécurité ou pour la conformité, consultez un professionnel qualifié.</p>

      <h2>Absence de garantie</h2>
      <p>Le service est fourni « en l'état », sans garantie d'aucune sorte. Consultez nos <a href="/fr/conditions-utilisation/">conditions d'utilisation</a> pour l'avertissement complet et la limitation de responsabilité.</p>
    `,
  },

  "privacy-policy": {
    slug: "politique-de-confidentialite",
    title: "Politique de confidentialité",
    description:
      "Ce que StorageCalc collecte, pourquoi, et comment refuser. En résumé : presque aucune donnée personnelle, mais nous utilisons Google Analytics et pouvons afficher des annonces Google.",
    subtitle:
      "Ce que nous collectons, pourquoi, et comment refuser. En résumé : presque aucune donnée personnelle, mais nous utilisons Google Analytics et pouvons afficher des annonces Google.",
    updated: "Dernière mise à jour : 18/05/2026",
    body: `
      <h2>En résumé</h2>
      <p>StorageCalc est un site statique. Il n'y a ni inscription, ni base de données conservant vos saisies, ni formulaire de contact, ni collecte d'adresses e-mail. Chaque calculateur s'exécute entièrement dans votre navigateur.</p>
      <p>Les seules données collectées sont des statistiques d'usage anonymes via <strong>Google Analytics</strong>, et nous pouvons diffuser des publicités via <strong>Google Ads</strong>. Vous pouvez refuser les deux depuis la bannière de cookies.</p>

      <h2>1. Qui nous sommes</h2>
      <p>Ce site, StorageCalc, est édité par un éditeur indépendant qui propose des calculateurs de stockage gratuits. Nous ne sommes pas une société, nous ne sommes pas financés par des investisseurs et nous ne vendons aucune donnée. Vous pouvez nous joindre via les coordonnées indiquées sur la page <a href="/fr/a-propos/">À propos</a>.</p>

      <h2>2. Informations que nous collectons</h2>
      <h3>2.1 Ce que nous collectons</h3>
      <ul>
        <li><strong>Données statistiques</strong> via Google Analytics 4 : pages vues anonymisées, pays/ville approximatifs, type d'appareil, URL de provenance, temps passé sur la page. Cela nous permet de savoir quels calculateurs sont utiles et lesquels améliorer.</li>
        <li><strong>Données publicitaires</strong> via Google Ads / AdSense (le cas échéant) : cookies utilisés pour la personnalisation des annonces et la limitation de leur fréquence.</li>
      </ul>

      <h3>2.2 Ce que nous ne collectons PAS</h3>
      <ul>
        <li>Noms, adresses e-mail, numéros de téléphone ou toute information permettant de vous identifier.</li>
        <li>Vos saisies dans les calculateurs (nombre de disques, débits de caméras, volumes cloud) : elles restent uniquement dans votre navigateur.</li>
        <li>Identifiants de connexion : il n'y a pas de comptes.</li>
        <li>Informations de paiement : le site est gratuit, rien n'est vendu.</li>
      </ul>

      <h2>3. Cookies</h2>
      <p>Consultez la <a href="/fr/politique-cookies/">politique relative aux cookies</a> dédiée pour le détail complet. En résumé :</p>
      <ul>
        <li>Aucun cookie n'est déposé tant que vous n'avez pas accepté via la bannière.</li>
        <li>Si vous acceptez : des cookies Google Analytics et Google Ads sont déposés.</li>
        <li>Si vous refusez : rien n'est déposé, et vous pouvez continuer à utiliser tous les calculateurs.</li>
        <li>Votre choix est conservé dans le <code>localStorage</code> de votre appareil.</li>
      </ul>

      <h2>4. Google Analytics</h2>
      <p>Nous utilisons Google Analytics 4 pour mesurer le trafic global. Google peut exploiter ces données conformément à sa propre <a href="https://policies.google.com/privacy" rel="noopener" target="_blank">politique de confidentialité</a>. Vous pouvez installer le <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener" target="_blank">module de désactivation de Google Analytics</a> pour bloquer GA sur tous les sites, ou simplement refuser les cookies sur celui-ci.</p>
      <p>Nous n'activons ni Google Signals, ni les rapports démographiques, ni les fonctionnalités publicitaires sur notre propriété GA.</p>

      <h2>5. Google Ads / AdSense</h2>
      <p>Ce site peut afficher des annonces diffusées par Google AdSense ou d'autres régies. Ces régies peuvent utiliser des cookies pour afficher des annonces pertinentes. Vous pouvez gérer la personnalisation des annonces sur <a href="https://adssettings.google.com" rel="noopener" target="_blank">les paramètres des annonces Google</a>.</p>

      <h2>6. Services tiers</h2>
      <ul>
        <li><strong>Cloudflare</strong> (hébergement / CDN) : voit les adresses IP pour acheminer le trafic. La politique de confidentialité de Cloudflare s'applique.</li>
        <li><strong>Google Fonts</strong> : la police Inter est chargée depuis le CDN de Google, qui peut journaliser la requête.</li>
        <li><strong>Google Analytics</strong> : voir la section 4.</li>
        <li><strong>Google Ads</strong> : voir la section 5.</li>
      </ul>

      <h2>7. Vos droits (RGPD / CCPA)</h2>
      <p>Comme nous ne collectons pas de données personnelles, la plupart des droits des personnes concernées ne s'appliquent pas. Pour le traitement de vos données par Google Analytics, exercez vos droits directement auprès de Google via les liens ci-dessus. Vous pouvez également :</p>
      <ul>
        <li>Refuser tous les cookies via notre bannière.</li>
        <li>Effacer à tout moment les cookies et le <code>localStorage</code> de votre navigateur.</li>
        <li>Utiliser la navigation privée pour ne conserver aucune trace.</li>
      </ul>

      <h2>8. Enfants</h2>
      <p>Ce site ne s'adresse pas aux enfants de moins de 13 ans. Nous ne collectons sciemment les données de personne.</p>

      <h2>9. Modifications de cette politique</h2>
      <p>En cas de modification substantielle, nous mettrons à jour la date de dernière mise à jour en haut de cette page. Poursuivre l'utilisation du site après une modification vaut acceptation de la version révisée.</p>

      <h2>10. Contact</h2>
      <p>Des questions sur cette politique ? Les coordonnées figurent sur la page <a href="/fr/a-propos/">À propos</a>.</p>
    `,
  },

  "cookie-policy": {
    slug: "politique-cookies",
    title: "Politique relative aux cookies",
    description:
      "Quels cookies StorageCalc utilise, pourquoi, et comment les contrôler.",
    subtitle:
      "Quels cookies StorageCalc utilise, pourquoi, et comment les contrôler.",
    updated: "Dernière mise à jour : 18/05/2026",
    body: `
      <h2>En résumé</h2>
      <p>Nous ne déposons aucun cookie tant que vous n'avez pas cliqué sur <strong>Accepter</strong> dans la bannière. Si vous cliquez sur <strong>Refuser</strong>, aucun cookie n'est déposé et tous les calculateurs continuent de fonctionner normalement. Votre choix est conservé dans le <code>localStorage</code>, et non dans un cookie.</p>

      <h2>1. Qu'est-ce qu'un cookie ?</h2>
      <p>Les cookies sont de petits fichiers texte que les sites déposent sur votre appareil. Ils peuvent mémoriser des préférences, suivre votre navigation d'une page à l'autre ou activer certaines fonctionnalités. Leurs finalités varient : certains sont indispensables, d'autres facultatifs.</p>

      <h2>2. Les cookies que nous utilisons</h2>

      <h3>Cookies indispensables</h3>
      <p>Aucun. Le site est pleinement fonctionnel sans le moindre cookie.</p>

      <h3>Cookies de mesure d'audience (uniquement si vous acceptez)</h3>
      <table class="my-4 w-full border-collapse text-sm">
        <thead>
          <tr class="border-b border-slate-300 text-left">
            <th class="py-2 pr-3 font-semibold text-slate-900">Cookie</th>
            <th class="py-2 pr-3 font-semibold text-slate-900">Fournisseur</th>
            <th class="py-2 pr-3 font-semibold text-slate-900">Finalité</th>
            <th class="py-2 font-semibold text-slate-900">Durée</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-200">
            <td class="py-2 pr-3 font-mono text-xs">_ga</td>
            <td class="py-2 pr-3">Google Analytics</td>
            <td class="py-2 pr-3">Distingue les visiteurs uniques.</td>
            <td class="py-2">2 ans</td>
          </tr>
          <tr class="border-b border-slate-200">
            <td class="py-2 pr-3 font-mono text-xs">_ga_*</td>
            <td class="py-2 pr-3">Google Analytics</td>
            <td class="py-2 pr-3">Conserve l'état de la session.</td>
            <td class="py-2">2 ans</td>
          </tr>
        </tbody>
      </table>

      <h3>Cookies publicitaires (uniquement si vous acceptez et si des annonces sont diffusées)</h3>
      <table class="my-4 w-full border-collapse text-sm">
        <thead>
          <tr class="border-b border-slate-300 text-left">
            <th class="py-2 pr-3 font-semibold text-slate-900">Cookie</th>
            <th class="py-2 pr-3 font-semibold text-slate-900">Fournisseur</th>
            <th class="py-2 pr-3 font-semibold text-slate-900">Finalité</th>
            <th class="py-2 font-semibold text-slate-900">Durée</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-200">
            <td class="py-2 pr-3 font-mono text-xs">__gads / __gpi</td>
            <td class="py-2 pr-3">Google AdSense</td>
            <td class="py-2 pr-3">Diffusion des annonces, limitation de fréquence, prévention de la fraude.</td>
            <td class="py-2">13 mois</td>
          </tr>
          <tr class="border-b border-slate-200">
            <td class="py-2 pr-3 font-mono text-xs">IDE / NID</td>
            <td class="py-2 pr-3">Google Ads</td>
            <td class="py-2 pr-3">Personnalisation des annonces sur les services Google.</td>
            <td class="py-2">13 mois</td>
          </tr>
        </tbody>
      </table>

      <h2>3. localStorage</h2>
      <p>Nous enregistrons un seul élément dans le <code>localStorage</code> de votre navigateur :</p>
      <ul>
        <li><code>consent</code> : conserve votre choix dans la bannière de cookies (<code>accepted</code>, <code>rejected</code> ou <code>dismissed</code>) pour ne plus vous solliciter.</li>
      </ul>
      <p>Il ne s'agit pas d'un cookie et cette valeur n'est transmise à aucun serveur. Vous pouvez l'effacer via les outils de développement de votre navigateur ou en supprimant les données du site.</p>

      <h2>4. Comment gérer les cookies</h2>
      <ul>
        <li><strong>Sur ce site :</strong> utilisez la bannière pour accepter ou refuser. Pour changer d'avis ensuite, effacez les données du site et rechargez la page.</li>
        <li><strong>Google Analytics :</strong> installez le <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener" target="_blank">module de désactivation</a>.</li>
        <li><strong>Google Ads :</strong> rendez-vous sur <a href="https://adssettings.google.com" rel="noopener" target="_blank">les paramètres des annonces Google</a> pour gérer la personnalisation.</li>
        <li><strong>Tous les cookies :</strong> utilisez les réglages de votre navigateur (généralement dans Paramètres → Confidentialité).</li>
      </ul>

      <h2>5. Signal « Do Not Track »</h2>
      <p>Ce site ne répond pas actuellement aux signaux « Do Not Track », faute de consensus dans le secteur sur leur interprétation. Utilisez plutôt la bannière de cookies pour refuser : ce choix est, lui, réellement appliqué.</p>

      <h2>6. Modifications de cette politique</h2>
      <p>Toute modification substantielle sera reflétée dans la date de dernière mise à jour. Si une nouvelle catégorie de cookies est introduite, la bannière redemandera votre consentement.</p>
    `,
  },

  "terms-of-service": {
    slug: "conditions-utilisation",
    title: "Conditions d'utilisation",
    description:
      "En utilisant StorageCalc, vous acceptez ces conditions. Elles sont courtes, prenez le temps de les lire.",
    subtitle:
      "En utilisant StorageCalc, vous acceptez ces conditions. Elles sont courtes, prenez le temps de les lire.",
    updated: "Dernière mise à jour : 18/05/2026",
    body: `
      <h2>1. Acceptation</h2>
      <p>En accédant à StorageCalc (le « Service ») ou en l'utilisant, vous acceptez d'être lié par les présentes conditions d'utilisation. Si vous n'y consentez pas, n'utilisez pas le Service. Celui-ci est fourni gratuitement et sans création de compte.</p>

      <h2>2. Le Service</h2>
      <p>StorageCalc propose des calculateurs interactifs permettant d'estimer la capacité, le coût et la configuration de stockage pour diverses technologies (RAID, vidéosurveillance, NAS, stockage cloud, etc.). Tous les calculs s'exécutent dans votre navigateur ; aucune donnée n'est envoyée à un serveur.</p>

      <h2>3. Licence d'utilisation</h2>
      <p>Nous vous accordons une licence personnelle, non exclusive et non transférable d'utilisation du Service à des fins licites. Vous pouvez :</p>
      <ul>
        <li>Utiliser les calculateurs à des fins personnelles, pédagogiques ou de planification commerciale.</li>
        <li>Partager des liens vers des pages de calculateurs précises.</li>
        <li>Citer les calculateurs dans des articles, présentations ou cahiers des charges (merci d'ajouter un lien).</li>
      </ul>
      <p>Vous ne pouvez pas :</p>
      <ul>
        <li>Extraire, copier ou réhéberger les calculateurs ou leurs formules sans autorisation.</li>
        <li>Procéder à de l'ingénierie inverse, modifier ou tenter d'extraire les structures de données sous-jacentes.</li>
        <li>Utiliser le Service d'une manière contraire à la loi applicable ou portant atteinte aux droits de tiers.</li>
      </ul>

      <h2>4. Absence de garantie : les calculateurs fournissent des estimations</h2>
      <p><strong>Le Service est fourni « EN L'ÉTAT », sans garantie d'aucune sorte.</strong> Les calculateurs sont des outils d'estimation fondés sur des spécifications publiques et des formules standards du secteur. Nous ne garantissons ni leur exactitude, ni leur exhaustivité, ni leur adéquation à un usage particulier.</p>
      <ul>
        <li>Les spécifications constructeurs évoluent. Les formules RAID comportent des cas limites. Les tarifs cloud changent chaque mois. Les débits de vidéosurveillance varient selon la complexité de la scène.</li>
        <li>Vérifiez toujours les chiffres critiques auprès de la documentation constructeur à jour avant tout achat, déploiement ou engagement contractuel.</li>
        <li>Consultez notre <a href="/fr/avertissement/">avertissement</a> pour les réserves propres à chaque catégorie.</li>
      </ul>

      <h2>5. Ceci n'est pas un conseil professionnel</h2>
      <p>Le Service ne remplace pas l'avis d'un architecte stockage qualifié, d'un installateur de vidéosurveillance, d'un architecte cloud ou de tout autre expert. Les décisions engageant un budget, la sécurité, la conformité réglementaire ou des infrastructures critiques doivent être validées par un professionnel qualifié.</p>

      <h2>6. Limitation de responsabilité</h2>
      <p>Dans toute la mesure permise par la loi, StorageCalc, son éditeur et ses contributeurs ne sauraient être tenus responsables de dommages indirects, accessoires, spéciaux, consécutifs ou punitifs (y compris perte de bénéfices, de données, de clientèle ou autres pertes immatérielles) résultant de votre utilisation du Service, même s'ils ont été avertis de cette éventualité.</p>
      <p>Notre responsabilité cumulée totale au titre de toute réclamation liée au Service est limitée à <strong>0 USD</strong> (zéro), le Service étant fourni gratuitement.</p>

      <h2>7. Liens tiers et publicités</h2>
      <p>Le Service peut contenir des liens vers des sites tiers (documentation constructeur, outils connexes) et afficher des annonces diffusées par Google. Nous ne contrôlons ni ces sites ni ces annonces et ne sommes pas responsables de leur contenu, de leurs pratiques en matière de confidentialité ou de leur exactitude.</p>

      <h2>8. Propriété intellectuelle</h2>
      <p>Le Service, y compris sa conception, son code et l'implémentation de ses calculateurs, est la propriété intellectuelle de son éditeur. Les marques citées (Hikvision, AWS, Azure, Synology, etc.) appartiennent à leurs propriétaires respectifs. Leur mention est purement descriptive et n'implique ni recommandation, ni partenariat, ni affiliation.</p>

      <h2>9. Confidentialité</h2>
      <p>Votre utilisation est également régie par notre <a href="/fr/politique-de-confidentialite/">politique de confidentialité</a> et notre <a href="/fr/politique-cookies/">politique relative aux cookies</a>.</p>

      <h2>10. Modifications</h2>
      <p>Nous pouvons faire évoluer ces conditions. Toute modification substantielle sera reflétée dans la date de dernière mise à jour. Poursuivre l'utilisation du site après une modification vaut acceptation.</p>

      <h2>11. Résiliation</h2>
      <p>Nous pouvons suspendre ou retirer le Service à tout moment et sans préavis. Vous pouvez cesser de l'utiliser quand vous le souhaitez.</p>

      <h2>12. Droit applicable</h2>
      <p>Les présentes conditions sont régies par le droit de la juridiction de résidence de l'éditeur, sans égard aux règles de conflit de lois. Tout litige relèvera des tribunaux de cette juridiction.</p>

      <h2>13. Contact</h2>
      <p>Des questions ? Consultez la page <a href="/fr/a-propos/">À propos</a>.</p>
    `,
  },
};

export default pages;
