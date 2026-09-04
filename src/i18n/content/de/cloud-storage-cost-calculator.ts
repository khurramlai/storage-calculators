import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "cloud-speicher-kosten-rechner",
  title: "Kostenrechner für Cloud-Speicher",
  description:
    "Kostenrechner für Cloud-Speicher bei AWS S3, Azure Blob, GCS und Firebase. Vergleicht Gebühren für Speicher, Datenabfluss, Anfragen und Abruf nebeneinander zu Listenpreisen.",
  tagline:
    "Ein Rechner, alle vier großen Clouds: Listenpreise in Sekunden vergleichen.",
  keywords: [
    "cloud speicher kosten rechner",
    "cloud storage preisvergleich",
    "cloud speicher preisrechner",
    "cloud speicherkosten berechnen",
  ],

  content: {
    intro:
      "Die Preisgestaltung für Cloud-Speicher hat deutlich mehr Stellschrauben, als der Preis je GB vermuten lässt. Datenabfluss, Anzahl der Anfragen, Abrufgebühren und Mindestspeicherdauer summieren sich. Dieser Rechner bildet die vier großen Anbieter (AWS S3, Azure Blob, Google Cloud Storage und Firebase) zu Listenpreisen ihrer üblichen US-Region ab, sodass ein echter Vergleich möglich wird. Ein Anbieterwechsel kann bei gleicher Anwendung 20 bis 50 % sparen; ein Wechsel der Klasse (heiß, warm, kalt, Archiv) bei kaum genutzten Daten sogar 80 % und mehr.",
    formula:
      "<p><strong>Monatliche Kosten</strong> = Speicher + Datenabfluss + Schreibvorgänge + Lesevorgänge + Abruf</p>" +
      "<ul>" +
      "<li><strong>Speicher</strong>: <code>GB × Preis/GB/Monat</code> der gewählten Klasse</li>" +
      "<li><strong>Datenabfluss</strong>: <code>max(0; abgeflossene GB − kostenloses Kontingent) × Preis/GB</code></li>" +
      "<li><strong>Schreibvorgänge</strong>: <code>(PUT / 1000) × Preis je 1.000</code></li>" +
      "<li><strong>Lesevorgänge</strong>: <code>(GET / 1000) × Preis je 1.000</code></li>" +
      "<li><strong>Abruf</strong>: <code>abgerufene GB × Preis/GB</code>, nur bei kalten und Archivklassen</li>" +
      "</ul>" +
      "<p>Das Vergleichsdiagramm am Seitenende zeigt, wie Ihre Rechnung in jeder Klasse des gewählten Anbieters aussähe. Praktisch, um zu erkennen, dass Sie für Ihr Zugriffsmuster in der falschen Klasse liegen.</p>",
    useCases: [
      "AWS S3, Azure Blob und GCS für ein neues Projekt vergleichen",
      "Die Ersparnis beim Verschieben kalter Daten von S3 Standard nach Glacier Deep Archive abschätzen",
      "Abflusskosten für bandbreitenintensive Anwendungen modellieren (CDN, Video, KI-Training)",
      "Cloud-Ausgaben vor einem Produktstart budgetieren",
    ],
  },

  faqs: [
    {
      question: "Welche Cloud bietet den günstigsten Objektspeicher?",
      answer:
        "Für heißen bzw. Standard-Speicher: Azure Blob Hot (0,0184 $/GB) ist am günstigsten, gefolgt von GCP Standard (0,020 $), AWS S3 Standard (0,023 $) und Firebase (0,026 $). Heißer Speicher ist jedoch selten der größte Posten: Datenabfluss (AWS: 0,09 $/GB, Azure: 0,087 $, GCP: 0,12 $) und Anfragevolumen wiegen oft schwerer. Die tatsächliche Antwort hängt von Ihrem Zugriffsmuster ab.",
    },
    {
      question: "Warum ist der Datenabfluss bei Cloud-Anbietern so teuer?",
      answer:
        "Der Datenabfluss ist das zentrale Bindungsinstrument im Markt für Cloud-Speicher: 100 TB aus einer der großen Clouds herauszuziehen kostet rund 9.000 $. Eingehender Verkehr und Verkehr innerhalb einer Region sind kostenlos, regionsübergreifender liegt dazwischen. Wenn Ihre Anwendung viel liest, rechnen Sie den Abfluss in die Gesamtkosten ein: Bei manchen Video-, KI- oder CDN-Anwendungen kann er den Speicher um das Zehnfache übersteigen.",
    },
    {
      question: "Welche Klasse ist für Sicherungen am günstigsten?",
      answer:
        "S3 Glacier Deep Archive (0,00099 $/GB/Monat) und Azure Archive (0,00099 $/GB/Monat) liegen gleichauf an der Spitze, jeweils bei rund 1 $ je TB und Monat. GCP Archive liegt mit 0,0012 $/GB leicht darüber. Alle verlangen Mindestspeicherzeiten von 90 bis 180 Tagen und Abrufgebühren (0,02 bis 0,05 $/GB). Für Sicherungen, die Sie kaum je anfassen, ideal; falls Sie monatlich wiederherstellen könnten, kalkulieren Sie zuerst die Abrufkosten.",
    },
    {
      question: "Berücksichtigt dieser Rechner kostenlose Kontingente?",
      answer:
        "Teilweise: Die kostenlosen Abflusskontingente sind abgebildet (die ersten 100 GB pro Monat bei AWS, Azure und GCP). Die kostenlosen Speicherkontingente (5 GB bei Firebase Spark, 5 GB im AWS-Gratiskontingent für 12 Monate, 5 GB bei GCS Always Free) werden nicht abgezogen, da sie nur für neue Konten gelten und an Bedingungen geknüpft sind. Im Produktivmaßstab fallen sie ohnehin nicht ins Gewicht.",
    },
    {
      question: "Sind das die Preise, die ich tatsächlich zahlen werde?",
      answer:
        "Es sind Listenpreise der gängigsten US-Region (us-east-1 bei AWS, East US bei Azure, us-central1 bei GCP). Die realen Kosten hängen von der Region ab (manche sind 10 bis 30 % teurer), von Rabatten bei Nutzungszusagen (Azure Reserved Capacity, GCP CUDs und AWS Savings Plans bringen 20 bis 50 %) sowie von individuell verhandelten Konditionen. Nutzen Sie diesen Rechner zum Vergleich, nicht zur Abrechnung.",
    },
    {
      question: "Was ist mit Cloudflare R2 oder Backblaze B2?",
      answer:
        "Beide bieten deutlich günstigeren Speicher (0,015 $ bei R2, 0,006 $ bei B2 im Jahr 2025) und verzichten auf Abflussgebühren, was bei abflussintensiven Anwendungen den Ausschlag geben kann. Sie sind hier nicht enthalten, weil sich ihr Funktionsumfang (Konsistenz, Regionen, Compliance) von dem der großen Anbieter unterscheidet. Wenn die Kosten im Vordergrund stehen und Sie keine spezifischen Dienste von AWS, Azure oder GCP brauchen, lohnt sich eine gesonderte Prüfung.",
    },
  ],
};

export default translation;
