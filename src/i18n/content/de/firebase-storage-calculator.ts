import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "firebase-speicher-rechner",
  title: "Firebase-Speicher-Preisrechner",
  description:
    "Preisrechner für Firebase Storage im nutzungsabhängigen Blaze-Tarif. Bildet die Kosten für Speicher, Downloads, Uploads und Vorgänge für Apps jeder Größe ab.",
  tagline:
    "Preise für Firebase Cloud Storage: Speicher, Downloads und Vorgänge im Blaze-Tarif.",
  keywords: [
    "firebase speicher preisrechner",
    "firebase storage kosten",
    "firebase cloud storage rechner",
    "firebase blaze preise",
  ],

  content: {
    intro:
      "Firebase Cloud Storage ist im Kern eine dünne Schicht über Google Cloud Storage: dieselbe Infrastruktur, ein einfacheres SDK und die Integration mit Firebase Auth und den Sicherheitsregeln. Die Preise folgen GCS Standard mit einem kleinen Aufschlag, ergänzt um den kostenlosen Spark-Tarif mit 5 GB Speicher und 1 GB Downloads pro Tag. Dieser Rechner bildet den nutzungsabhängigen Blaze-Tarif ab, bei dem jede produktiv genutzte Firebase-App landet. Wenn Sie im großen Maßstab rechnen, vergleichen Sie zusätzlich mit dem regulären GCS-Rechner für dieselbe Anwendung.",
    formula:
      "<p><strong>Firebase Storage im Blaze-Tarif:</strong></p>" +
      "<ul>" +
      "<li><strong>Speicher</strong>: 0,026 $/GB/Monat</li>" +
      "<li><strong>Download</strong> (Abfluss ins Internet): 0,12 $/GB</li>" +
      "<li><strong>Upload</strong>: kostenlos</li>" +
      "<li><strong>Vorgänge</strong>: 0,05 $ je 10.000 Schreib- und 0,004 $ je 10.000 Lesevorgänge</li>" +
      "</ul>" +
      "<p>Der Spark-Tarif enthält kostenlos 5 GB Speicher, 1 GB Downloads pro Tag, 20.000 Uploads und 50.000 Downloads täglich. Die meisten Apps stoßen zuerst an die Download-Grenze.</p>",
    useCases: [
      "Die Kosten von Firebase Storage für eine wachsende mobile App abschätzen",
      "Bestimmen, wann der Wechsel vom kostenlosen Spark- zum nutzungsabhängigen Blaze-Tarif ansteht",
      "Firebase Storage mit reinem GCS für dieselbe Anwendung vergleichen",
      "Die Kosten nutzergenerierter Medien modellieren (Profilbilder, hochgeladene Videos)",
    ],
  },

  faqs: [
    {
      question: "Wann sollte ich von Firebase Spark auf Blaze wechseln?",
      answer:
        "Die Spark-Grenzen fallen üblicherweise in dieser Reihenfolge: tägliche Downloads (Obergrenze 1 GB pro Tag), dann die tägliche Anzahl der Vorgänge, dann der Speicher (Obergrenze 5 GB). Bei Consumer-Apps liegt der Umschlagpunkt meist zwischen 100 und 500 täglich aktiven Nutzern. Blaze rechnet ohne Mindestumsatz nach Verbrauch ab: Für eine kleine App mit 10 GB Speicher und 50 GB Downloads im Monat sind rund 6 bis 7 $ monatlich zu erwarten.",
    },
    {
      question:
        "Ist Firebase Storage teurer als reines Google Cloud Storage?",
      answer:
        "Etwas. Firebase Storage kostet 0,026 $/GB/Monat gegenüber 0,020 $/GB bei GCS Standard. Der Aufschlag bezahlt das vereinfachte SDK, die Anbindung der Authentifizierung, die Sicherheitsregeln und die Firebase-Konsole. Unterhalb von rund 1 TB Speicher fällt der Unterschied kaum ins Gewicht, und die gesparte Entwicklungszeit wiegt ihn auf. Ab 10 TB lohnt sich der direkte Weg über GCS trotz des Integrationsaufwands.",
    },
    {
      question: "Was kostet es, ein Profilbild je Nutzer zu speichern?",
      answer:
        "Ein typisches komprimiertes Profilbild ist rund 500 KB groß, in 1 GB passen also etwa 2.000 Bilder. Bei 0,026 $/GB/Monat kosten 2.000 Profilbilder etwa 0,026 $ im Monat oder 0,31 $ im Jahr. Rechnen Sie rund 0,06 $ für je 100 Abrufe pro Bild hinzu (typisch im ersten Nutzungsmonat). Für eine App mit 100.000 Nutzern: rund 13 $ Speicher im Monat plus stark schwankende Downloadkosten.",
    },
    {
      question: "Kosten die Firebase-Sicherheitsregeln extra?",
      answer:
        "Nein, sie gehören zur Plattform. Allerdings wird jeder Speichervorgang gegen die Regeln geprüft, was auf das Vorgangskontingent angerechnet wird. Komplexe Regeln mit Datenbankabfragen können langsam sein und Latenz erzeugen; im Extremfall führt eine Zeitüberschreitung zum Fehlschlag des Vorgangs, der dennoch berechnet wird. Halten Sie die Regeln einfach und möglichst auf den Speicher beschränkt.",
    },
    {
      question:
        "Kann ich Firebase Cloud Storage mit Cloud Functions nutzen?",
      answer:
        "Ja. Cloud-Storage-Trigger (onFinalize, onDelete, onMetadataUpdate) werden häufig zur Verarbeitung von Uploads eingesetzt: Bilder verkleinern, Virenprüfung, Formatkonvertierung. Jeder Funktionsaufruf wird separat über Cloud Functions abgerechnet (rund 0,40 $ je Million Aufrufe zuzüglich Rechen- und Speicherzeit). Kalkulieren Sie das zusätzlich zu den Speicherkosten ein.",
    },
    {
      question:
        "Wie speichere ich 1 TB an Nutzer-Uploads am günstigsten?",
      answer:
        "Rein für den Speicher im Firebase-Blaze-Tarif: 1 TB kostet rund 26 $ im Monat. Bei den meisten Apps dominieren jedoch die Downloads: 1 TB Downloads im Monat schlägt mit 122 $ zu Buche. Für solche Fälle bieten sich an: (1) Firebase Storage mit dem Cache von Firebase Hosting, (2) Firebase Storage mit Cloud CDN oder (3) ein Anbieter mit günstigem Transfer wie Cloudflare R2 (0,015 $/GB Speicher, keine Abflussgebühren).",
    },
  ],
};

export default translation;
