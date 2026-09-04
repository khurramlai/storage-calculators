import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "s3-speicher-rechner",
  title: "AWS-S3-Speicher-Rechner",
  description:
    "S3-Speicher-Rechner für alle sechs AWS-Klassen: Standard, Standard-IA, One Zone-IA sowie Glacier Instant, Flexible und Deep Archive. Inklusive Datenabfluss und Vorgängen.",
  tagline:
    "S3-Kosten über alle Speicherklassen hinweg abschätzen, samt Gebühren für Anfragen und Datenabfluss.",
  keywords: [
    "s3 speicher rechner",
    "aws s3 kosten rechner",
    "s3 preisrechner",
    "aws speicherkosten berechnen",
  ],

  content: {
    intro:
      "Amazon S3 bietet sechs Speicherklassen, die Zugriffsgeschwindigkeit, Beständigkeitszusagen und Mindestlaufzeiten gegen einen deutlich niedrigeren Preis je GB eintauschen. Dieser Rechner deckt alle ab: Standard, Standard-IA, One Zone-IA, Glacier Instant Retrieval, Glacier Flexible Retrieval und Glacier Deep Archive, jeweils zu den Listenpreisen von us-east-1. Der Speicher allein macht allerdings selten die ganze Rechnung aus: PUT- und GET-Anfragen, der Datenabfluss ins Internet und die Abrufgebühren von Glacier überwiegen häufig, besonders bei aktiv genutzten Anwendungen.",
    formula:
      "<p><strong>S3-Rechnung</strong> = Speicher + Vorgänge + Datenabfluss + Abruf</p>" +
      "<p>S3 Standard: <code>0,023 $/GB/Monat</code>. Standard-IA: <code>0,0125 $/GB/Monat</code> zuzüglich 0,01 $/GB Abrufgebühr. Deep Archive: <code>0,00099 $/GB/Monat</code>, also rund 1 $ je TB und Monat, bei 180 Tagen Mindestlaufzeit und 0,02 $/GB Abruf. Die Anfragepreise reichen von 0,005 $ je 1.000 PUT bei Standard bis 0,05 $ je 1.000 PUT bei Deep Archive.</p>" +
      "<p>Datenabfluss ins Internet: Die ersten 100 GB pro Monat sind kostenlos, danach <code>0,09 $/GB</code> für die nächsten 10 TB, absteigend bis 0,05 $/GB oberhalb von 150 TB.</p>",
    useCases: [
      "Den Speicher für einen neuen S3-Bucket vor dem Rollout dimensionieren",
      "S3 Standard und Standard-IA für einen bestehenden Bucket vergleichen",
      "Die Kosten für die Verlagerung kalter Daten nach Glacier Deep Archive abschätzen",
      "Die Abflusskosten einer Anwendung modellieren, die Downloads aus S3 ausliefert",
    ],
  },

  faqs: [
    {
      question: "Welche S3-Speicherklasse ist am günstigsten?",
      answer:
        "Für langfristige Kaltdaten mit seltenem Zugriff ist Glacier Deep Archive mit 0,00099 $/GB/Monat (rund 1 $/TB/Monat) am günstigsten, allerdings mit 180 Tagen Mindestabrechnung, 0,02 $/GB Abrufgebühr und mehr als 12 Stunden Wartezeit. Für häufig genutzte Daten: S3 Standard mit 0,023 $/GB. Für monatlichen Zugriff: Standard-IA mit 0,0125 $/GB, 30 Tagen Mindestlaufzeit und 0,01 $/GB Abrufgebühr.",
    },
    {
      question: "Wie senke ich S3-Kosten, ohne meine Anwendung zu ändern?",
      answer:
        "Drei schnelle Hebel: (1) S3-Lifecycle-Regeln aktivieren, die Objekte nach 30 Tagen automatisch nach Standard-IA und nach 90 Tagen nach Glacier verschieben; (2) Intelligent-Tiering für unvorhersehbare Zugriffsmuster einschalten, da S3 die Objekte dann nutzungsabhängig umlagert; (3) CloudFront oder ein anderes CDN vor S3 schalten, um häufige Lesezugriffe zu cachen, da der Abfluss über ein CDN bei hohen Volumina günstiger ist als direkt aus S3.",
    },
    {
      question: "Berücksichtigt dieser Rechner S3 Intelligent-Tiering?",
      answer:
        "Nicht unmittelbar: Der Preis von Intelligent-Tiering hängt davon ab, wie S3 Ihre Objekte umlagert, und das ist anwendungsabhängig. Als Faustregel liegt diese Klasse zwischen den Kosten von Standard und Standard-IA (0,012 bis 0,023 $/GB), zuzüglich einer kleinen Überwachungsgebühr (0,0025 $ je 1.000 Objekte). Bei vorhersehbaren Zugriffsmustern sind Lifecycle-Regeln zwischen Standard und Standard-IA meist günstiger.",
    },
    {
      question: "Kostet der Datenabfluss wirklich 0,09 $ pro GB?",
      answer:
        "Ja, in der Standardregion us-east-1 und oberhalb der ersten 100 kostenlosen GB pro Monat. Mit dem Volumen sinkt der Preis: 0,085 $ für die nächsten 40 TB, 0,07 $ für die nächsten 100 TB und 0,05 $ oberhalb von 150 TB. Regionsübergreifende Replikation und S3 Transfer Acceleration werden zusätzlich berechnet. Wenn Sie große Downloadmengen ausliefern, ist CloudFront (0,085 $, im großen Maßstab bis 0,02 $) meist günstiger als S3 direkt.",
    },
    {
      question: "Was unterscheidet die Glacier-Klassen?",
      answer:
        "Glacier Instant Retrieval (0,004 $/GB) liefert Daten in Millisekunden wie S3 Standard, bei 90 Tagen Mindestlaufzeit und 0,03 $/GB Abrufgebühr. Glacier Flexible Retrieval (0,0036 $/GB) braucht Minuten bis Stunden. Glacier Deep Archive (0,00099 $/GB) ist am günstigsten, benötigt aber über 12 Stunden und 180 Tage Mindestlaufzeit. Entscheiden Sie danach, wie viel Geduld Sie im Abruffall haben.",
    },
    {
      question: "Berechnet S3 auch fehlgeschlagene oder abgebrochene Anfragen?",
      answer:
        "Ja: Anfragegebühren fallen für sämtliche API-Aufrufe an, auch für 4xx-Fehler durch Client-Fehler. Abgebrochene mehrteilige Uploads hinterlassen Teilstücke auf der Platte, die als Speicher berechnet werden, bis sie aufgeräumt sind. Legen Sie eine Lifecycle-Regel an, die unvollständige mehrteilige Uploads nach sieben Tagen abbricht: eine häufige Überraschung auf AWS-Rechnungen.",
    },
  ],
};

export default translation;
