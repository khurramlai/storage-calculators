import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "aws-s3-cold-storage-rechner",
  title: "AWS-S3-Cold-Storage-Rechner",
  description:
    "AWS-S3-Cold-Storage-Rechner für alle drei Glacier-Klassen. Bildet Abrufgebühren, die Mindestlaufzeiten von 90 und 180 Tagen sowie die realen Monatskosten in einer Ansicht ab.",
  tagline:
    "Die ehrliche Rechnung für Kaltspeicher: Der Preis je GB wirkt lächerlich niedrig, doch Glacier versteckt die Kosten in den Abrufgebühren.",
  keywords: [
    "aws s3 cold storage rechner",
    "s3 glacier rechner",
    "glacier deep archive kosten",
    "aws kaltspeicher preise",
  ],

  content: {
    intro:
      "Die S3-Glacier-Klassen sind der günstigste Objektspeicher von AWS. Deep Archive kostet rund 1 $ je TB und Monat, etwa 25-mal weniger als S3 Standard. Der Preis je GB erzählt aber nicht die ganze Geschichte. Jede Glacier-Klasse berechnet eine Abrufgebühr, sobald Sie Daten tatsächlich zurückholen, verlangt eine Mindestlaufzeit von 90 oder 180 Tagen mit Strafgebühr bei vorzeitigem Löschen und setzt höhere Preise je Anfrage an. Dieser Rechner geht von einem realistischen Kaltarchiv aus: 10 TB gespeichert, 100 GB monatlich zurückgeholt. So steht die Abrufgebühr direkt neben den Speicherkosten, wo sie hingehört.",
    formula:
      "<p><strong>Glacier-Gesamtkosten</strong> = Speicher + Schreibvorgänge + Abruf + Datenabfluss (sofern die Daten AWS verlassen)</p>" +
      "<p><strong>Glacier Instant Retrieval</strong>: 0,004 $/GB/Monat Speicher, 0,03 $/GB Abruf, 90 Tage Mindestlaufzeit. Zugriff in Millisekunden. Geeignet für Archive, die Sie möglicherweise schnell wiederherstellen müssen.</p>" +
      "<p><strong>Glacier Flexible Retrieval</strong>: 0,0036 $/GB/Monat Speicher, 0,01 $/GB Abruf, 90 Tage Mindestlaufzeit. Wiederherstellung in Minuten bis Stunden.</p>" +
      "<p><strong>Glacier Deep Archive</strong>: 0,00099 $/GB/Monat Speicher, 0,02 $/GB Abruf, 180 Tage Mindestlaufzeit. Wiederherstellung ab 12 Stunden. Die günstigste und zugleich langsamste Klasse.</p>",
    useCases: [
      "Glacier-Klassen für ein Archiv als Bandersatz vergleichen",
      "Wiederherstellungskosten für ein Szenario mit gesetzlicher Aufbewahrungspflicht modellieren",
      "Den Break-even von Deep Archive gegenüber einer lokalen Bandbibliothek berechnen",
      "Die Kosten einer einmaligen Massenmigration in den Kaltspeicher abschätzen",
    ],
  },

  faqs: [
    {
      question: "Welche S3-Kaltspeicherklasse ist am günstigsten?",
      answer:
        "Glacier Deep Archive mit 0,00099 $/GB/Monat, also rund 1 $ je TB und Monat. Der Haken: 180 Tage Mindestabrechnung (löschen Sie früher, zahlen Sie trotzdem für 180 Tage), 0,02 $/GB Abrufgebühr und über 12 Stunden Wiederherstellungszeit. Ein Archiv mit 100 TB, das ein Jahr lang unangetastet bleibt, kostet in Deep Archive insgesamt etwa 1.200 $ statt rund 28.000 $ in S3 Standard.",
    },
    {
      question: "Wie funktioniert die Mindestlaufzeit von 180 Tagen bei Deep Archive?",
      answer:
        "Löschen Sie ein Objekt vor Ablauf von 180 Tagen, berechnet AWS trotzdem die volle Speicherdauer von 180 Tagen. Beispiel: Sie laden am ersten Tag 1 TB hoch und löschen es am 30. Tag; die verbleibenden 150 Tage werden dennoch berechnet (0,50 $). Für Daten, die geändert oder gelöscht werden könnten, ist Glacier Flexible Retrieval mit 90 Tagen Mindestlaufzeit die sicherere Wahl. Für wirklich unveränderliche Archive (Sicherungen, Compliance) spielt diese Strafgebühr keine Rolle.",
    },
    {
      question:
        "Wie lange dauert eine Wiederherstellung aus Glacier Deep Archive tatsächlich?",
      answer:
        "Standardwiederherstellung: typischerweise 12 Stunden, garantiert bis zu 48 Stunden. Massenwiederherstellung (im Petabyte-Bereich): bis zu 48 Stunden, dafür günstiger je GB. Eine beschleunigte Option gibt es bei Deep Archive nicht, anders als bei Glacier Flexible. Planen Sie entsprechend: Wenn Sie taggleichen Zugriff brauchen, ist Glacier Instant Retrieval (0,004 $/GB) die bessere Wahl, obwohl es viermal so viel kostet.",
    },
    {
      question:
        "Zahle ich beim Download aus Glacier sowohl Abruf ALS AUCH Datenabfluss?",
      answer:
        "Ja. Der Abruf stellt die Daten in S3 Standard wieder her, wo sie für die konfigurierte Dauer liegen, und beim Verlassen von AWS kommen die Abflussgebühren hinzu. Gesamtkosten für Wiederherstellung und Download von 1 TB aus Deep Archive: 20 $ Abruf + 90 $ Abfluss = 110 $. Setzen Sie eine kurze Ablaufzeit für die wiederhergestellten Kopien (S3 löscht sie dann automatisch), um doppelte Kosten zu vermeiden.",
    },
    {
      question:
        "Wann ist Glacier Instant Retrieval günstiger als Standard-IA?",
      answer:
        "Glacier Instant (0,004 $/GB) ist beim Speicher günstiger als Standard-IA (0,0125 $/GB), kostet beim Abruf aber das Dreifache (0,03 $/GB statt 0,01 $). Der Umschlagpunkt: Rufen Sie monatlich weniger als etwa 3 % der gespeicherten Daten ab, gewinnt Glacier Instant. Darüber ist Standard-IA günstiger. Beide haben eine vergleichbare Mindestlaufzeit von 90 Tagen.",
    },
    {
      question:
        "Kann ich mit S3-Lifecycle automatisch nach Glacier verschieben?",
      answer:
        "Ja. S3-Lifecycle-Regeln können Übergänge verketten: Standard → Standard-IA nach 30 Tagen → Glacier Instant nach 60 → Deep Archive nach 365. Das ist das übliche Muster für Log-Archive und alte Sicherungen. Die Übergänge selbst werden berechnet (0,05 $ je 1.000 Anfragen nach Deep Archive), sie lohnen sich also vor allem bei Objekten ab 128 KB.",
    },
  ],
};

export default translation;
