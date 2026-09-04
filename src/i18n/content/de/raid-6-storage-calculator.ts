import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "raid-6-rechner",
  title: "RAID-6-Rechner",
  description:
    "RAID-6-Rechner mit Berechnung der doppelten Parität. Nutzbare Kapazität, Fehlertoleranz gegenüber zwei Laufwerksausfällen sowie Lese- und Schreibgeschwindigkeit bei beliebiger Laufwerksanzahl. Kostenlos und ohne Anmeldung.",
  tagline:
    "Striping mit doppelter Parität: übersteht den gleichzeitigen Ausfall von zwei Laufwerken.",
  keywords: [
    "raid 6 rechner",
    "raid 6 kapazität berechnen",
    "raid 6 speicherplatz",
    "raid 6 kalkulator",
  ],

  content: {
    intro:
      "RAID 6 ist RAID 5 mit doppeltem Boden. Es nutzt einen zweiten Paritätsblock, sodass das Array den gleichzeitigen Ausfall von zwei statt nur einem Laufwerk übersteht. Der Preis dafür ist ein weiteres Laufwerk an Kapazität, es bleiben also (N − 2) × Laufwerksgröße nutzbar. Bei großen Arrays ab acht Laufwerken ist RAID 6 die Standardwahl. Wenn der Rebuild eines Laufwerks mit mehreren Terabyte einen ganzen Tag dauert, ist die Wahrscheinlichkeit eines zweiten Ausfalls in dieser Zeit nicht mehr zu vernachlässigen. RAID 6 macht dieses Szenario überstehbar.",
    formula:
      "<p><strong>Nutzbare Kapazität</strong> = <code>(N − 2) × Laufwerksgröße</code></p>" +
      "<p><strong>Paritäts-Overhead</strong> = <code>2 × Laufwerksgröße</code></p>" +
      "<p><strong>Kapazitätseffizienz</strong> = <code>(N − 2) / N</code></p>" +
      "<p><strong>Fehlertoleranz</strong> = 2 Laufwerke (beliebige zwei)</p>" +
      "<p><strong>Lesegeschwindigkeit</strong> ≈ <code>N − 2</code>× (nur Datenlaufwerke)</p>" +
      "<p><strong>Schreibgeschwindigkeit</strong> ≈ <code>(N − 2) / 6</code>×. Bei jedem Schreibvorgang müssen zwei Paritätsblöcke neu berechnet werden.</p>",
    useCases: [
      "Große Unternehmens-Arrays mit 8 bis 24 Laufwerken im Terabyte-Bereich",
      "Archive und Sicherungsziele, bei denen Datenverlust nicht hinnehmbar ist",
      "Ablösung alternder RAID-5-Arrays, deren Laufwerke die Grenze für sichere Rebuilds überschritten haben",
      "Die Kosten eines zusätzlichen Paritätslaufwerks gegen die 50-%-Effizienz von RAID 10 abwägen",
    ],
  },

  faqs: [
    {
      question: "Wann sollte ich RAID 6 statt RAID 5 wählen?",
      answer:
        "Jedes Array ab acht Laufwerken oder mit Laufwerken über etwa 4 TB profitiert deutlich von RAID 6. Der zweite Paritätsblock schützt vor jenem zweiten Laufwerksausfall, der während eines langen Rebuilds in einem großen Array statistisch wahrscheinlich wird. Die Kapazitätskosten von einem zusätzlichen Laufwerk sind gering im Verhältnis zum ausgeschalteten Risiko.",
    },
    {
      question: "Wie viele Laufwerke benötigt RAID 6 mindestens?",
      answer:
        "Vier. Zwei Laufwerke speichern Daten, die Kapazität von zwei Laufwerken entfällt auf die Parität. Unter vier Laufwerken ergibt die Rechnung keinen Sinn mehr, dann wären RAID 1 oder RAID 10 die bessere Wahl.",
    },
    {
      question:
        "Warum ist die Schreibleistung von RAID 6 geringer als die von RAID 5?",
      answer:
        "RAID 5 benötigt vier Laufwerksoperationen pro Schreibvorgang (alte Daten lesen, alte Parität lesen, neue Daten schreiben, neue Parität schreiben). RAID 6 benötigt rund sechs, da beide Paritätsblöcke gelesen und neu geschrieben werden müssen. Bei schreiblastigen Anwendungen passt RAID 10 meist besser; RAID 6 spielt seine Stärken bei leselastigem Archivspeicher aus.",
    },
    {
      question:
        "Übersteht RAID 6 wirklich den gleichzeitigen Ausfall von zwei Laufwerken?",
      answer:
        "Ja, und zwar bei beliebigen zwei Laufwerken. Beide Paritätsblöcke zusammen enthalten genug Informationen, um die fehlenden Daten bei jeder Kombination aus zwei Ausfällen zu rekonstruieren. Genau das ist der Sinn von RAID 6 und der Grund, warum es bei großen oder kritischen Arrays bevorzugt wird.",
    },
    {
      question: "Braucht man bei RAID 6 trotzdem Hot Spares?",
      answer:
        "Häufig ja. RAID 6 verschafft Ihnen Zeit, doch ein Hot Spare lässt den Rebuild sofort beginnen, statt auf einen menschlichen Eingriff zu warten. Bei Arrays ab zwölf Laufwerken ist das eine günstige Absicherung; der Rechner zeigt die Auswirkung auf die nutzbare Kapazität.",
    },
  ],
};

export default translation;
