import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "raid-5-rechner",
  title: "RAID-5-Rechner",
  description:
    "RAID-5-Rechner: nutzbare Kapazität, Paritäts-Overhead, Fehlertoleranz und Durchsatz für beliebige Laufwerksanzahl und -größe. Kostenlos, sofort und ohne Anmeldung.",
  tagline:
    "Striping mit einfacher Parität: hohe Effizienz, übersteht den Ausfall eines Laufwerks.",
  keywords: [
    "raid 5 rechner",
    "raid 5 kapazität berechnen",
    "raid 5 speicherplatz",
    "raid 5 kalkulator",
  ],

  content: {
    intro:
      "RAID 5 verteilt Ihre Daten per Striping über alle Laufwerke des Arrays und reserviert die Kapazität eines Laufwerks für die Parität. Fällt ein Laufwerk aus, rekonstruiert das Array es aus den Paritätsblöcken der verbleibenden Laufwerke. Die nutzbare Kapazität beträgt schlicht (N − 1) × Laufwerksgröße. RAID 5 ist auf kleinen Servern und Heim-NAS nach wie vor beliebt, weil die Rechnung aufgeht: Sie behalten den Großteil der Kapazität und sind gegen den Ausfall eines Laufwerks abgesichert. Wenn ein Laufwerk Redundanz genügt, ist es die naheliegende Wahl.",
    formula:
      "<p><strong>Nutzbare Kapazität</strong> = <code>(N − 1) × Laufwerksgröße</code></p>" +
      "<p><strong>Paritäts-Overhead</strong> = <code>Laufwerksgröße</code> (die Kapazität eines Laufwerks)</p>" +
      "<p><strong>Kapazitätseffizienz</strong> = <code>(N − 1) / N</code>. Nähert sich mit jedem zusätzlichen Laufwerk 100 % an.</p>" +
      "<p><strong>Fehlertoleranz</strong> = 1 Laufwerk</p>" +
      "<p><strong>Lesegeschwindigkeit</strong> ≈ <code>N − 1</code>× (paralleles Lesen über die Datenlaufwerke)</p>" +
      "<p><strong>Schreibgeschwindigkeit</strong> ≈ <code>(N − 1) / 4</code>×. Jeder Schreibvorgang erfordert das Lesen der alten Daten und der alten Parität sowie das Schreiben der neuen Daten und der neuen Parität.</p>",
    useCases: [
      "NAS-Systeme kleiner Unternehmen mit vier bis sechs Laufwerken, bei denen die Kapazität im Vordergrund steht",
      "Heim-Medienserver, bei denen ein Laufwerk Redundanz ausreicht",
      "Sicherungsziele, wenn das Array nicht die primäre Kopie ist",
      "Die Effizienz vor dem Laufwerkskauf mit RAID 6 vergleichen",
    ],
  },

  faqs: [
    {
      question: "Warum ist RAID 5 bei großen Laufwerken riskant?",
      answer:
        "Je größer die Laufwerke im Terabyte-Bereich werden, desto länger dauern Rebuilds, oft viele Stunden oder Tage. In diesem gesamten Zeitfenster läuft das Array ungeschützt: Fällt ein zweites Laufwerk aus oder tritt auf den verbleibenden Laufwerken ein nicht behebbarer Lesefehler auf, sind alle Daten verloren. Bei Arrays ab acht Laufwerken oder Laufwerksgrößen über etwa 4 TB bevorzugen viele Administratoren RAID 6 oder RAID 10.",
    },
    {
      question: "Wie viele Laufwerke benötigt RAID 5 mindestens?",
      answer:
        "Drei. Zwei Laufwerke speichern Daten, die Kapazität eines Laufwerks entfällt auf die Parität. Bei nur zwei Laufwerken gäbe es nichts zu stripen, dann wäre RAID 1 die passende Wahl.",
    },
    {
      question: "Nutzt RAID 5 ein dediziertes Paritätslaufwerk?",
      answer:
        "Nein. Die Parität wird über alle Laufwerke verteilt, anders als bei RAID 4, das ein eigenes Paritätslaufwerk verwendet. So wird verhindert, dass dieses Laufwerk zum Schreib-Engpass wird, und jedes beliebige Laufwerk kann ausfallen, ohne dass die gesamte Parität verloren geht.",
    },
    {
      question: "Wie lange dauert ein RAID-5-Rebuild?",
      answer:
        "Rebuilds laufen je nach Controller, Laufwerkstyp und paralleler Last üblicherweise mit 50 bis 150 MB/s. Der Rebuild eines 4-TB-Laufwerks dauert häufig 8 bis 24 Stunden. SSD-Arrays sind deutlich schneller. Während des Rebuilds ist das Array im Zustand „degraded“, und der Ausfall eines weiteren Laufwerks bedeutet den Totalverlust der Daten.",
    },
    {
      question: "Kann ich einem RAID 5 ein Hot Spare hinzufügen?",
      answer:
        "Ja, und ab sechs Laufwerken sollten Sie das auch tun. Das Hot Spare startet den Rebuild automatisch, sobald ein Laufwerk ausfällt, und verkürzt so das Risikofenster. Tragen Sie die Anzahl der Hot Spares im Rechner ein, um die Auswirkung auf die nutzbare Kapazität zu sehen.",
    },
  ],
};

export default translation;
