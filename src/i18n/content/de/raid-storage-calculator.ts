import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "raid-rechner",
  title: "RAID-Rechner",
  description:
    "Kostenloser RAID-Rechner für die Level 0, 1, 5, 6, 10, 50 und 60. Ermittelt nutzbare Kapazität, Fehlertoleranz sowie Lese- und Schreibgeschwindigkeit in Sekunden.",
  tagline:
    "RAID-Level wählen, Anzahl und Größe der Laufwerke eintragen und genau sehen, wie viel nutzbarer Speicher übrig bleibt.",
  keywords: [
    "raid rechner",
    "raid kapazität berechnen",
    "raid speicherplatz rechner",
    "raid größe berechnen",
    "raid kalkulator",
  ],

  content: {
    intro:
      "RAID fasst mehrere Laufwerke zu einem logischen Volume zusammen. Jedes Level geht dabei seinen eigenen Kompromiss ein: Kapazität, Leistung und wie viele Laufwerksausfälle das Array verkraftet, bevor alles verloren ist. Schwierig ist nicht die Rechnung, sondern die Wahl des Kompromisses, der zu Ihrer Hardware und Ihrer Risikobereitschaft passt. Genau dafür ist dieses Werkzeug gedacht. Tragen Sie Laufwerksanzahl, Laufwerksgröße, RAID-Level und eventuelle Hot Spares ein, und Sie erhalten die nutzbare Kapazität, die Fehlertoleranz sowie grobe Faktoren für Lese- und Schreibgeschwindigkeit im Vergleich zu einem einzelnen Laufwerk.",
    formula:
      "<p>Die nutzbare Kapazität hängt vom RAID-Level ab:</p>" +
      "<ul>" +
      "<li><strong>RAID 0</strong>: <code>N × Größe</code>. Keine Redundanz.</li>" +
      "<li><strong>RAID 1</strong>: <code>Größe</code>. Jedes Laufwerk spiegelt dieselben Daten.</li>" +
      "<li><strong>RAID 5</strong>: <code>(N − 1) × Größe</code>. Ein Laufwerk verteilte Parität.</li>" +
      "<li><strong>RAID 6</strong>: <code>(N − 2) × Größe</code>. Doppelte Parität.</li>" +
      "<li><strong>RAID 10</strong>: <code>(N / 2) × Größe</code>. Gestripte Spiegel.</li>" +
      "<li><strong>RAID 50</strong>: <code>Gruppen × (Laufwerke_pro_Gruppe − 1) × Größe</code>.</li>" +
      "<li><strong>RAID 60</strong>: <code>Gruppen × (Laufwerke_pro_Gruppe − 2) × Größe</code>.</li>" +
      "</ul>" +
      "<p>Hot Spares werden vor der RAID-Berechnung vom aktiven Pool abgezogen.</p>",
    useCases: [
      "Ein neues NAS oder einen Server dimensionieren, bevor die Laufwerke gekauft werden",
      "Die Kompromisse von RAID 5, RAID 6 und RAID 10 bei gleicher Laufwerksanzahl vergleichen",
      "Eine Hot-Spare-Reserve einplanen, ohne zu viel nutzbare Kapazität zu opfern",
      "Den Durchsatzgewinn beim Erweitern eines Stripe-Sets abschätzen",
    ],
  },

  faqs: [
    {
      question: "Was ist der Unterschied zwischen RAID 5 und RAID 6?",
      answer:
        "RAID 5 reserviert die Kapazität eines Laufwerks für die Parität und übersteht den Ausfall eines einzelnen Laufwerks. RAID 6 reserviert zwei und übersteht zwei gleichzeitige Ausfälle, was bei großen Arrays wichtig ist, in denen Rebuilds lange dauern und ein zweites Laufwerk mitten im Rebuild ausfallen kann. RAID 6 opfert dafür ein weiteres Laufwerk an Kapazität.",
    },
    {
      question: "Wie wird die nutzbare Kapazität bei RAID 10 berechnet?",
      answer:
        "RAID 10 fasst Laufwerke zu Spiegelpaaren zusammen und verteilt die Daten anschließend per Striping über diese Paare. Die nutzbare Kapazität entspricht (N / 2) × Laufwerksgröße: Ein RAID 10 aus vier 4-TB-Laufwerken liefert also 8 TB. Es übersteht einen Ausfall je Spiegelpaar, im schlechtesten Fall also ein Laufwerk, im besten Fall die Hälfte aller Laufwerke.",
    },
    {
      question: "Sollte ich Hot Spares einsetzen?",
      answer:
        "Ein Hot Spare ersetzt ein ausgefallenes Laufwerk automatisch und ohne manuelles Eingreifen. Das verkürzt das Rebuild-Zeitfenster, in dem ein zweiter Ausfall katastrophal wäre. Jedes Hot Spare kostet ein Laufwerk an nutzbarer Kapazität, ist bei Arrays ab acht Laufwerken und besonders bei RAID 5 aber dringend zu empfehlen.",
    },
    {
      question: "Berücksichtigt der Rechner den Overhead des Dateisystems?",
      answer:
        "Nein, die Ergebnisse entsprechen der Rohkapazität auf Blockebene. Dateisysteme (ext4, XFS, ZFS, NTFS) reservieren üblicherweise 1 bis 10 % für ihre Metadaten. Snapshots, Deduplizierung, Komprimierung und für root reservierte Blöcke verringern den Wert weiter. Rechnen Sie mit etwa 5 % Dateisystem-Overhead zusätzlich zum hier gezeigten RAID-Overhead.",
    },
    {
      question:
        "Warum sind die Schreibgeschwindigkeiten bei RAID 5 und RAID 6 niedriger als die Lesegeschwindigkeiten?",
      answer:
        "Jeder Schreibvorgang erfordert eine Neuberechnung der Parität über den gesamten Stripe. RAID 5 benötigt dafür rund vier Laufwerksoperationen (alte Daten lesen, alte Parität lesen, neue Daten schreiben, neue Parität schreiben), RAID 6 etwa sechs. Lesevorgänge lassen sich dagegen über alle Datenlaufwerke parallelisieren. Die angezeigten Faktoren sind theoretische Höchstwerte; die realen Zahlen hängen vom Controller-Cache, der Stripe-Größe und der Last ab.",
    },
    {
      question: "Was ist RAID 50 und wann sollte ich es einsetzen?",
      answer:
        "RAID 50 verteilt die Daten per Striping über zwei oder mehr RAID-5-Untergruppen. Es baut sich schneller wieder auf als ein großes RAID 5 (nur eine Gruppe muss neu aufgebaut werden) und übersteht einen Ausfall je Gruppe. Sinnvoll ist es bei Arrays ab acht Laufwerken, bei denen die Rebuild-Zeiten eines reinen RAID 5 riskant werden. RAID 60 arbeitet nach demselben Prinzip mit RAID-6-Untergruppen und ist noch widerstandsfähiger.",
    },
  ],
};

export default translation;
