import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "raid-10-rechner",
  title: "RAID-10-Rechner",
  description:
    "RAID-10-Rechner für gestripte Spiegel-Arrays. Nutzbare Kapazität, Spiegel-Overhead, Fehlertoleranz und schreibfreundlicher Durchsatz bei beliebiger Anzahl von Paaren.",
  tagline:
    "Gestripte Spiegel: das schnellste RAID beim Schreiben, übersteht ein Laufwerk je Spiegelpaar.",
  keywords: [
    "raid 10 rechner",
    "raid 10 kapazität berechnen",
    "raid 1+0 rechner",
    "raid 10 kalkulator",
  ],

  content: {
    intro:
      "RAID 10 (manchmal auch RAID 1+0 geschrieben) fasst Laufwerke zu Spiegelpaaren zusammen und verteilt die Daten anschließend per Striping über diese Paare. Sie geben die Hälfte der Rohkapazität auf, was durchaus schmerzt, doch die Schreibleistung spielt in einer anderen Liga als bei den paritätsbasierten RAID 5 oder 6. Auch Rebuilds sind schnell, da nur die Daten eines einzigen Laufwerks kopiert werden müssen. RAID 10 ist die Standardwahl für Datenbanken, Virtualisierungs-Hosts und alles mit hohem Schreibaufkommen oder engen Latenzvorgaben.",
    formula:
      "<p><strong>Nutzbare Kapazität</strong> = <code>(N / 2) × Laufwerksgröße</code></p>" +
      "<p><strong>Spiegel-Overhead</strong> = <code>(N / 2) × Laufwerksgröße</code>. Die Hälfte des Arrays.</p>" +
      "<p><strong>Kapazitätseffizienz</strong> = <code>50 %</code>, unabhängig von der Laufwerksanzahl konstant</p>" +
      "<p><strong>Fehlertoleranz</strong> = 1 Laufwerk im schlechtesten Fall, bis zu N/2 im besten Fall (eines je Spiegelpaar)</p>" +
      "<p><strong>Lesegeschwindigkeit</strong> ≈ <code>N</code>×. Lesevorgänge können jedes der beiden Laufwerke eines Spiegels bedienen.</p>" +
      "<p><strong>Schreibgeschwindigkeit</strong> ≈ <code>N / 2</code>×. Jeder Schreibvorgang trifft zwei Laufwerke.</p>",
    useCases: [
      "Datenbankserver (MySQL, PostgreSQL, SQL Server) mit Anforderungen an geringe Schreiblatenz",
      "Virtualisierungs-Hosts (VMware, Hyper-V, Proxmox) mit vielen gleichzeitigen virtuellen Maschinen",
      "Mail- und Transaktionsserver mit dauerhaft zufälligen Zugriffen",
      "Alle Anwendungen, bei denen die Rebuild-Geschwindigkeit wichtiger ist als die Kapazitätseffizienz",
    ],
  },

  faqs: [
    {
      question: "Wie viele Laufwerke benötigt RAID 10 mindestens?",
      answer:
        "Vier, also zwei per Striping verbundene Spiegelpaare. Die Laufwerksanzahl muss gerade sein, da es sich um Paare handelt. Der Rechner weist Sie auf eine ungerade Anzahl hin und zeigt, wie viele Laufwerke ungenutzt blieben.",
    },
    {
      question: "Warum ist RAID 10 schneller als RAID 5 oder RAID 6?",
      answer:
        "Es gibt keine Paritätsberechnung. Ein Schreibvorgang trifft einfach beide Laufwerke eines Spiegelpaars gleichzeitig, ohne Read-Modify-Write-Zyklus. Bei zufälligen Zugriffen (Datenbanken, virtuelle Maschinen) kann der Unterschied beim Durchsatz das Drei- bis Fünffache betragen und bei der Latenz eine Größenordnung ausmachen.",
    },
    {
      question: "Wie viele Laufwerke dürfen bei RAID 10 ausfallen?",
      answer:
        "Im schlechtesten Fall eines: Fallen beide Laufwerke desselben Spiegelpaars aus, ist das Array verloren. Im besten Fall die Hälfte aller Laufwerke (N/2), sofern in jedem Spiegelpaar genau ein Laufwerk ausfällt. Der Rechner zeigt die Fehlertoleranz für beide Fälle an.",
    },
    {
      question: "Ist RAID 10 dasselbe wie RAID 0+1?",
      answer:
        "Nein. Die Namen ähneln sich, doch RAID 0+1 stript zuerst und spiegelt anschließend das gesamte Stripe-Set. Seine Fehlertoleranz ist schlechter: Fällt ein Laufwerk in einem der Stripe-Sets aus, ist diese komplette Seite nicht mehr verfügbar und jeder einzelne Ausfall auf der anderen Seite wird kritisch. RAID 10 (erst spiegeln, dann stripen) ist fast immer die richtige Wahl.",
    },
    {
      question: "Warum kostet RAID 10 mehr als RAID 5 oder RAID 6?",
      answer:
        "Sie bezahlen für 100 % Redundanz: Jedes Byte wird zweimal gespeichert. RAID 5 und 6 reservieren nur ein oder zwei Laufwerke für die Parität, ihre Kapazitätseffizienz steigt also mit der Laufwerksanzahl. Bei einem Array aus zehn 4-TB-Laufwerken liefert RAID 10 20 TB nutzbar, RAID 5 dagegen 36 TB und RAID 6 32 TB. Der Aufpreis erkauft Leistung und schnelle Rebuilds.",
    },
  ],
};

export default translation;
