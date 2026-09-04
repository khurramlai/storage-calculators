import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "azure-speicher-rechner",
  title: "Azure-Speicher-Rechner",
  description:
    "Azure-Speicher-Rechner für die Blob-Storage-Stufen Hot, Cool, Cold und Archive. Bildet Transaktionen, Datenabfluss und Abrufgebühren in einer monatlichen Schätzung ab.",
  tagline:
    "Die Preise von Azure Blob Storage ohne das übliche Labyrinth: alle vier Stufen im Vergleich.",
  keywords: [
    "azure speicher rechner",
    "azure storage kosten rechner",
    "azure blob storage preisrechner",
    "azure speicherkosten berechnen",
  ],

  content: {
    intro:
      "Azure Blob Storage kennt vier Zugriffsstufen: Hot, Cool, Cold und Archive. Sie teilen sich eine API, unterscheiden sich preislich aber erheblich. Dieser Rechner deckt alle vier zu den Listenpreisen der Region East US mit LRS (lokal redundanter Speicher) ab. Microsofts eigener Preisrechner ist vollständig, aber überwältigend; dieser hier bleibt fokussiert: Stufe wählen, Werte eintragen, und Sie sehen die Monatsrechnung aller vier Stufen nebeneinander.",
    formula:
      "<p><strong>Azure-Rechnung</strong> = Speicher + Transaktionen + Datenabfluss + Abruf</p>" +
      "<ul>" +
      "<li><strong>Hot</strong>: 0,0184 $/GB/Monat Speicher, 0,0065 $ je 10.000 Schreibvorgänge. Häufiger Zugriff.</li>" +
      "<li><strong>Cool</strong>: 0,01 $/GB/Monat, 30 Tage Mindestlaufzeit, 0,01 $/GB Abruf. Monatlicher Zugriff.</li>" +
      "<li><strong>Cold</strong>: 0,0036 $/GB/Monat, 90 Tage Mindestlaufzeit, 0,02 $/GB Abruf. Seltener Zugriff.</li>" +
      "<li><strong>Archive</strong>: 0,00099 $/GB/Monat, 180 Tage Mindestlaufzeit, 0,022 $/GB Abruf zuzüglich Rehydrierungszeit. Am günstigsten.</li>" +
      "</ul>" +
      "<p>Datenabfluss: Die ersten 100 GB pro Monat sind kostenlos, danach 0,087 $/GB.</p>",
    useCases: [
      "Azure Blob Storage für ein neues Projekt vor dem Rollout kalkulieren",
      "Hot gegen Cool und Cold für eine Mediathek vergleichen",
      "Die Kosten der Archive-Stufe für gesetzliche Aufbewahrung abschätzen",
      "Regionsübergreifende Replikation und die dadurch verdoppelten Kosten modellieren",
    ],
  },

  faqs: [
    {
      question: "Was ist der Unterschied zwischen den Stufen Cool und Cold?",
      answer:
        "Beide zielen auf seltenen Zugriff, doch Cold (2023 eingeführt) ist beim Speicher rund dreimal günstiger als Cool (0,0036 $ gegenüber 0,01 $/GB) und verlangt mit 90 statt 30 Tagen eine längere Mindestlaufzeit. Nutzen Sie Cool für Daten mit monatlichem Zugriff und Cold für Daten, auf die Sie vierteljährlich oder seltener zugreifen. Beide haben höhere Transaktionskosten als Hot: Bei schreiblastigen Anwendungen kann die Ersparnis dadurch verpuffen.",
    },
    {
      question: "Warum ist das Lesen aus Azure Archive so teuer?",
      answer:
        "Die Archive-Stufe berechnet 5,50 $ je 10.000 Lesevorgänge, das Tausendfache der Hot-Stufe. Hinzu kommen 0,022 $/GB Abrufgebühr sowie eine Rehydrierung, die bei Standardpriorität bis zu 15 Stunden dauert (oder eine Stunde bei hoher Priorität, dann teurer). Archive ist wirklich für „einmal schreiben, selten lesen“ gedacht: langfristige Sicherungen, gesetzliche Aufbewahrung, Rohdatenarchive. Wenn Sie tatsächlich lesen werden, kalkulieren Sie die Abrufkosten sorgfältig.",
    },
    {
      question: "Wie wirken sich LRS, ZRS und GRS auf die Kosten aus?",
      answer:
        "Dieser Rechner nutzt die Listenpreise von LRS (lokal redundanter Speicher), der günstigsten Variante. ZRS (zonenredundant) schlägt mit rund 25 % Aufschlag zu Buche, GRS (georedundant mit asynchroner regionsübergreifender Replikation) mit rund 100 % und RA-GRS (GRS mit Lesezugriff) mit rund 125 %. Für unkritische Daten genügt LRS; für Produktivdaten mit Notfallvorsorge sind ZRS oder GRS angebracht. Multiplizieren Sie die Speicherzeile des Rechners entsprechend.",
    },
    {
      question: "Berechnet Azure Transaktionen in der Archive-Stufe?",
      answer:
        "Ja, und zwar deutlich. Schreibvorgänge in Archive: 0,13 $ je 10.000 gegenüber 0,0065 $ bei Hot. Lesevorgänge in Archive: 5,50 $ je 10.000 gegenüber 0,00052 $ bei Hot. Archive ist auf gelegentliche Massenschreibvorgänge (Hochladen einer Sicherung) und seltene Abrufe (eine Prüfung) ausgelegt, nicht auf laufenden Betrieb.",
    },
    {
      question:
        "Wie schneidet Azures Abflusspreis gegenüber AWS und GCP ab?",
      answer:
        "Azures Datenabfluss (0,087 $/GB oberhalb der 100 kostenlosen GB) ist der günstigste der drei großen Anbieter, knapp unter AWS (0,09 $) und deutlich unter GCP (0,12 $). Bei abflussintensiven Anwendungen (CDN-Ursprung, KI-Trainingsdaten, Videostreaming) kann Azure dadurch in der Gesamtrechnung 15 bis 25 % günstiger sein als GCP, selbst bei ähnlichen Speicherpreisen.",
    },
    {
      question: "Kann ich Daten automatisch zwischen den Stufen verschieben?",
      answer:
        "Ja. Regeln des Azure Blob Lifecycle Management verschieben Objekte automatisch anhand des Datums der letzten Änderung oder des letzten Zugriffs. Beispiel: nach 30 Tagen ohne Zugriff nach Cool, nach 90 nach Cold, nach 365 nach Archive. Die Ausführung dieser Regeln wird als Transaktion berechnet; bei sehr vielen Objekten summiert sich das. Rechnen Sie diese Übergangskosten in die Einsparung der Migration ein.",
    },
  ],
};

export default translation;
