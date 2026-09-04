import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "hikvision-speicherplatz-rechner",
  title: "Hikvision-Speicherplatz-Rechner",
  description:
    "Hikvision-Speicherplatz-Rechner, abgestimmt auf den intelligenten Codec H.265+ und die Standardwerte der DS-2CD-Kameras. Dimensioniert die Festplatten von DS-76xx-, DS-77xx- oder DS-96xx-NVRs in Sekunden.",
  tagline:
    "Dimensionierung abgestimmt auf Hikvisions intelligenten Codec H.265+ und die Standardwerte der DS-2CD-Kameras.",
  keywords: [
    "hikvision speicherplatz rechner",
    "hikvision festplatte berechnen",
    "hikvision nvr speicherbedarf",
    "hikvision h265+ speicher",
  ],

  content: {
    intro:
      "Hikvisions intelligenter Codec H.265+ gehört zu den effizientesten am Markt für Videoüberwachung: Er verkleinert die Dateien bei gleicher Szene um rund 75 % gegenüber H.264. Dieser Rechner ist auf die typischen Einstellungen der Hikvision-DS-2CD-Kameras voreingestellt: 1080p, 25 fps, H.265+ und Daueraufzeichnung rund um die Uhr. Die Berechnung folgt den veröffentlichten Planungsangaben von Hikvision. Wenn Sie die Festplatten eines DS-76xx-, DS-77xx- oder DS-96xx-NVR dimensionieren, passt die empfohlene Kapazität zu den üblichen Einschubkonfigurationen dieser Gehäuse.",
    formula:
      "<p><strong>Hikvision-Speicherbedarf</strong> = <code>(Bitrate × 3600 / 8) × Kameras × Stunden × Tage</code></p>" +
      "<p>Der H.265+-Encoder von Hikvision analysiert jedes Einzelbild und senkt die Bitrate in statischen Bereichen wie Hintergrund, Himmel und Wänden, während bewegte Objekte in voller Qualität erhalten bleiben. Das Ergebnis sind bei typischen Szenen rund 75 % weniger Bitrate als bei H.264 und 50 % weniger als bei normalem H.265. Genau das bildet die H.265+-Option des Rechners ab.</p>",
    useCases: [
      "Festplatten für Hikvision-NVRs der Serien DS-76xx, DS-77xx und DS-96xx dimensionieren",
      "Eine reine Hikvision-Installation mit verschiedenen DS-2CD-Kameramodellen planen",
      "Die Ersparnis durch H.265+ berechnen, um den Austausch älterer H.264-Kameras zu begründen",
      "Die Speicherschätzung eines Hikvision-Errichters gegen die tatsächliche Rechnung prüfen",
    ],
  },

  faqs: [
    {
      question:
        "Was ist der Unterschied zwischen H.265 und H.265+ bei Hikvision-Kameras?",
      answer:
        "H.265 (HEVC) ist der internationale Videocodec und rund 50 % effizienter als H.264. H.265+ ist Hikvisions herstellereigene Erweiterung mit intelligenter Bitratensteuerung: Der Encoder senkt die Bitrate in unbewegten Bildbereichen und erreicht damit rund 50 % zusätzliche Einsparung gegenüber normalem H.265. Gegenüber H.264 ergibt das insgesamt etwa 75 %. Die Qualität bewegter Objekte bleibt erhalten; nur statische Hintergründe werden stärker komprimiert.",
    },
    {
      question: "Funktioniert H.265+ mit allen NVRs?",
      answer:
        "H.265+ muss sowohl von der Kamera als auch vom NVR unterstützt werden. Alle aktuellen Hikvision-NVRs (Serien DS-76xx/77xx/96xx, I- und K-Reihe) dekodieren H.265+ für Live-Ansicht und Aufzeichnung. NVRs und VMS anderer Hersteller empfangen den Stream unter Umständen als normales H.265: kleiner als H.264, aber nicht so klein, wie die Kamera könnte. Kombinieren Sie Hikvision-Kameras daher mit NVRs von Hikvision oder deren OEM-Partnern, um H.265+ voll zu nutzen.",
    },
    {
      question: "Welche Festplatten empfiehlt Hikvision für seine NVRs?",
      answer:
        "Hikvisions Kompatibilitätsliste setzt auf Überwachungsfestplatten, vor allem WD Purple, Seagate SkyHawk und Toshiba S300. Die maximal unterstützte Kapazität hängt vom NVR-Modell ab; aktuelle Geräte (ab 2022) nehmen bis zu 20 TB je Einschub auf. Die NVR-Firmware ist auf das sequenzielle Schreiben dieser Platten abgestimmt; Consumer-Modelle führen zu geringerer Leistung und früheren Ausfällen.",
    },
    {
      question:
        "Warum verbraucht mein Hikvision-NVR mehr Speicher, als der Rechner angibt?",
      answer:
        "Typische Hikvision-spezifische Ursachen: (1) Die Kamera zeichnet Haupt- und Substream gleichzeitig auf, was den Bedarf verdoppelt, wenn die Substream-Aufzeichnung im NVR aktiviert ist; (2) die Aufzeichnung intelligenter Ereignisse legt zusätzlich zum Dauerstream eigene Archive an; (3) die Kamera arbeitet mit fester Bitrate (CBR) statt mit VBR. Prüfen Sie die Encoder-Einstellungen der Kamera und den Aufzeichnungsplan des NVR.",
    },
    {
      question: "Wie aktiviere ich H.265+ an einer Hikvision-Kamera?",
      answer:
        "Über die Weboberfläche der Kamera (oder via iVMS-4200 / Hik-Connect): Konfiguration → Video/Audio → Video → Videocodierung → „H.265+“ auswählen. Dieselbe Einstellung findet sich auch im NVR unter der Konfiguration des jeweiligen Kanals. Ist H.265+ ausgegraut, muss möglicherweise die Firmware aktualisiert werden, oder das Modell unterstützt es nicht (einige ältere DS-2CD2xxx-W- und -G-Kameras beherrschen nur H.264).",
    },
    {
      question:
        "Sind das die offiziellen Bitraten-Angaben von Hikvision?",
      answer:
        "Die Schätzungen orientieren sich an Hikvisions veröffentlichten Planungsempfehlungen (verfügbar im offiziellen iVMS-Speicherrechner und in den Produkthandbüchern). Die reale Bitrate schwankt je nach Komplexität der Szene um ±20 %. Der Rechner liefert einen Wert auf Planungsniveau; bei knapp kalkulierten Projekten sollten Sie 10 bis 20 % Sicherheitsreserve einplanen.",
    },
  ],
};

export default translation;
