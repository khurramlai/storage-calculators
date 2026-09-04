import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "google-cloud-storage-rechner",
  title: "Google-Cloud-Storage-Rechner",
  description:
    "Kostenrechner für Google Cloud Storage mit den Klassen Standard, Nearline, Coldline und Archive. Inklusive Vorgängen der Klassen A und B, Datenabfluss und Abrufgebühren.",
  tagline:
    "GCS-Preise für Standard, Nearline, Coldline und Archive: sofortige Kostenschätzung.",
  keywords: [
    "google cloud storage rechner",
    "google cloud storage kosten",
    "gcs preisrechner",
    "google cloud speicher berechnen",
  ],

  content: {
    intro:
      "Google Cloud Storage bietet vier Speicherklassen: Standard, Nearline, Coldline und Archive. Sie teilen sich API und Konsistenzmodell, unterscheiden sich bei Speicher, Vorgängen und Abruf preislich jedoch erheblich. Dieser Rechner schätzt die Monatskosten aller vier zu den Listenpreisen von us-central1. Die Preisstruktur von GCS ist tatsächlich einfacher als die von AWS und kennt weniger Unterkategorien bei den Transaktionen. Dafür ist der Datenabfluss mit 0,12 $ je GB der teuerste der drei großen Clouds: Wenn Sie Daten herausziehen, kalkulieren Sie diese Position sorgfältig.",
    formula:
      "<p><strong>GCS-Rechnung</strong> = Speicher + Vorgänge der Klasse A + Vorgänge der Klasse B + Datenabfluss + Abruf</p>" +
      "<ul>" +
      "<li><strong>Standard</strong>: 0,020 $/GB/Monat. Keine Mindestlaufzeit. Standardwahl für aktive Daten.</li>" +
      "<li><strong>Nearline</strong>: 0,010 $/GB/Monat, 30 Tage Mindestlaufzeit, 0,01 $/GB Abruf.</li>" +
      "<li><strong>Coldline</strong>: 0,004 $/GB/Monat, 90 Tage Mindestlaufzeit, 0,02 $/GB Abruf.</li>" +
      "<li><strong>Archive</strong>: 0,0012 $/GB/Monat, 365 Tage Mindestlaufzeit, 0,05 $/GB Abruf.</li>" +
      "</ul>" +
      "<p>Vorgänge der Klasse A (Schreiben, Auflisten): 0,05 $ je 10.000 bei Standard, in den kälteren Klassen mehr. Vorgänge der Klasse B (Lesen): 0,004 $ je 10.000 bei Standard. Abfluss ins Internet: Die ersten 100 GB pro Monat sind kostenlos, danach 0,12 $/GB.</p>",
    useCases: [
      "GCS-Klassen vor dem Anlegen eines neuen Buckets vergleichen",
      "Die Ersparnis durch das Verschieben älterer Daten nach Coldline oder Archive abschätzen",
      "Abflusskosten für BigQuery, KI-Trainingsdaten oder Analyse-Exporte modellieren",
      "GCS mit S3 oder Azure für dieselbe Anwendung vergleichen",
    ],
  },

  faqs: [
    {
      question: "Welche Google-Cloud-Storage-Klasse ist am günstigsten?",
      answer:
        "Archive mit 0,0012 $/GB/Monat (rund 1,20 $/TB/Monat) ist am günstigsten, verlangt aber 365 Tage Mindestspeicherdauer und 0,05 $/GB Abrufgebühr. Für Daten, auf die Sie innerhalb eines Jahres zugreifen könnten, ist Coldline (0,004 $/GB, 90 Tage Mindestlaufzeit, 0,02 $/GB Abruf) der beste Kompromiss. Für monatlichen Zugriff: Nearline. Für aktive Daten: Standard.",
    },
    {
      question:
        "Warum ist der Datenabfluss bei GCS teurer als bei AWS oder Azure?",
      answer:
        "Der Internet-Abfluss von GCS kostet oberhalb des kostenlosen Kontingents von 100 GB 0,12 $/GB, rund 30 % mehr als bei AWS (0,09 $) und 40 % mehr als bei Azure (0,087 $). Google verweist auf die Qualität seines Netzes und die globale Infrastruktur. Bei abflussintensiven Anwendungen kann GCS dadurch unterm Strich spürbar teurer sein, selbst wenn der Speicher günstiger ist. Das Premium-Tier-Netz ist Standard; das Standard-Tier ist günstiger, geht aber mit Leistungseinbußen einher.",
    },
    {
      question:
        "Was ist der Unterschied zwischen Vorgängen der Klasse A und der Klasse B?",
      answer:
        "Vorgänge der Klasse A sind Schreib- und Auflistungsoperationen: insert, patch, list. Klasse B umfasst Lesevorgänge: get, getIamPolicy. GCS berechnet sie unterschiedlich (0,05 $ je 10.000 Vorgänge der Klasse A bei Standard gegenüber 0,004 $ bei Klasse B), da Lesevorgänge im großen Maßstab günstiger skalieren. Bei schreiblastigen Anwendungen (Logs, Telemetrie) dominiert Klasse A die Vorgangsposition, bei leselastigen (Auslieferung von Inhalten) Klasse B.",
    },
    {
      question: "Gibt es Rabatte über ein kostenloses Kontingent?",
      answer:
        "Ja. Das Always-Free-Kontingent von GCS umfasst monatlich 5 GB Standard-Speicher, 5.000 Vorgänge der Klasse A, 50.000 der Klasse B und 100 GB Abfluss (zu den meisten Zielen), begrenzt auf die Regionen us-east1, us-west1 und us-central1. Für kleine Anwendungen nützlich, im Produktivmaßstab vernachlässigbar. Dieser Rechner zieht das kostenlose Abflusskontingent von 100 GB ab, nicht aber die 5 GB Always-Free-Speicher, da diese nur in bestimmten Regionen gelten.",
    },
    {
      question: "Sollte ich Multi-Region- oder Dual-Region-Buckets nutzen?",
      answer:
        "Die Preise in diesem Rechner gelten für Buckets in einer einzelnen Region. Multi-Region (etwa „us“) verteuert den Speicher um rund 30 % und senkt die Latenz für weltweite Nutzer, was bei der Auslieferung von Inhalten hilft. Dual-Region (etwa nam4) kostet rund 50 % mehr für die regionsübergreifende Replikation. Eine einzelne Region mit vorgeschaltetem Cloud CDN ist bei leselastigen Anwendungen oft günstiger als Multi-Region-Speicher.",
    },
    {
      question: "Wie funktioniert GCS Autoclass?",
      answer:
        "Autoclass ist die automatische Umstufung von GCS: Objekte wandern anhand ihrer Zugriffsmuster zwischen Standard, Nearline, Coldline und Archive, ohne Gebühren für vorzeitiges Löschen. Die Nachverfolgung kostet rund 0,0025 $ je 1.000 Objekte und Monat. Bei unvorhersehbaren Zugriffen ist das sinnvoll; bei vorhersehbaren Mustern sind manuell gesetzte Lifecycle-Regeln günstiger.",
    },
  ],
};

export default translation;
