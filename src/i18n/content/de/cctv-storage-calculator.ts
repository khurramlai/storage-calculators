import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "cctv-speicherplatz-rechner",
  title: "CCTV-Speicherplatz-Rechner",
  description:
    "CCTV-Speicherplatz-Rechner für DVR- und NVR-Systeme. Geeignet für analoge HD-TVI-, HD-CVI- und AHD-Kameras sowie IP-Kameras, bei beliebiger Auflösung, Codec oder Aufbewahrungsdauer.",
  tagline:
    "Speicherdimensionierung für analoge wie IP-basierte CCTV-Anlagen: DVR, NVR oder Hybridrekorder.",
  keywords: [
    "cctv speicherplatz rechner",
    "cctv festplatte berechnen",
    "überwachungsanlage speicherbedarf",
    "cctv speicher kalkulator",
  ],

  content: {
    intro:
      "„CCTV“ umfasst heute sehr unterschiedliche Anlagen: klassische analoge Systeme über Koaxialkabel (HD-TVI, HD-CVI oder AHD an einem DVR) ebenso wie moderne IP-Systeme über Ethernet (IP-Kameras an einem NVR). Dieser Rechner deckt beide ab. Analoge HD-Anlagen enden meist bei 1080p, 15 fps und H.264 – damit sollten Sie starten. IP-Anlagen erreichen 4K mit intelligenten H.265+-Codecs. Der Formel ist es gleich, welche Variante Sie einsetzen: Es ändert sich nur die Obergrenze der Bitrate.",
    formula:
      "<p><strong>CCTV-Speicherbedarf</strong> = <code>(Bitrate_bps × 3600 / 8) × Kameras × Stunden × Tage</code></p>" +
      "<p>Bei analogen HD-TVI-, HD-CVI- oder AHD-Anlagen ist mit reinem H.264 zu rechnen: Diese DVRs stammen aus der Zeit vor der breiten H.265-Einführung. Analoge 1080p-Kameras codieren typischerweise mit 2 bis 4 Mbit/s. Bei CCTV über IP (Kameras an einem NVR) unterstützen aktuelle Systeme H.265 und intelligente Codecs, die den Speicherbedarf um 50 bis 75 % senken.</p>",
    useCases: [
      "Vor dem Kauf die passende Festplattengröße für einen DVR oder NVR wählen",
      "Von analogem CCTV auf IP umsteigen und die Speicheranforderungen vergleichen",
      "Hybridrekorder mit analogen und IP-Kanälen dimensionieren",
      "Werbeaussagen wie „30 Tage auf 2 TB“ mit der eigenen Konfiguration abgleichen",
    ],
  },

  faqs: [
    {
      question: "Was ist der Unterschied zwischen einem DVR und einem NVR?",
      answer:
        "Ein DVR (digitaler Videorekorder) nimmt analoge Videosignale über Koaxialkabel entgegen (HD-TVI, HD-CVI, AHD oder älteres CVBS) und digitalisiert sie. Ein NVR (Netzwerk-Videorekorder) empfängt bereits digitale Streams von Netzwerkkameras über Ethernet oder WLAN. NVRs unterstützen höhere Auflösungen und moderne Codecs; DVRs sind günstiger und nutzen die vorhandene Koaxialverkabelung weiter. Hybridrekorder beherrschen beides.",
    },
    {
      question: "Können analoge CCTV-Kameras in 4K aufzeichnen?",
      answer:
        "Die meisten analogen HD-Standards (HD-TVI, HD-CVI, AHD) reichen inzwischen bis 8 MP bzw. 4K, in der Praxis kommen jedoch meist 1080p oder 4 MP zum Einsatz. Kabellänge und Signalabfall begrenzen analoges 4K auf kurze Strecken. Für 4K in größerem Umfang sind IP-Kameras der Standard.",
    },
    {
      question:
        "Warum verbraucht meine CCTV-Anlage mehr Speicher, als der Rechner angibt?",
      answer:
        "Drei häufige Gründe: (1) Ihre Kameras nutzen eine höhere Bitrate als im Datenblatt angegeben, da viele günstige Modelle unabhängig von der Szene auf eine feste Höchstbitrate eingestellt sind; (2) Ihr DVR oder NVR zeichnet unbemerkt zwei Streams auf (Haupt- und Substream); (3) die Tonaufzeichnung ist aktiviert und schlägt mit 10 bis 20 % zu Buche. Der Rechner liefert reine Videowerte für den Hauptstream.",
    },
    {
      question: "Welche Festplatte gehört in einen CCTV-DVR?",
      answer:
        "Eine Festplatte für die Videoüberwachung: Western Digital Purple und Seagate SkyHawk sind die Branchenstandards. Desktop-Platten (WD Blue, Barracuda) laufen zwar, halten unter Dauerschreiblast aber nicht lange, und Garantieansprüche werden bei Überwachungseinsatz abgelehnt. Überwachungsplatten sind auf durchgehendes sequenzielles Schreiben ausgelegt und beherrschen die ATA-Streaming-Befehle, die DVRs verwenden.",
    },
    {
      question: "Wie lange kann ich auf einer 2-TB-CCTV-Festplatte aufzeichnen?",
      answer:
        "Das hängt vollständig von Kameraanzahl, Auflösung und Codec ab. Einige Beispiele für durchgehende Aufzeichnung auf einer 2-TB-Platte: 4 Kameras in 1080p H.264 ≈ 11 Tage; 4 Kameras in 1080p H.265 ≈ 22 Tage; 8 Kameras in 4K H.265 ≈ 3 Tage; 1 Kamera in 720p H.264 ≈ 90 Tage. Nutzen Sie den Rechner mit Ihrer konkreten Konfiguration: Die Werbung der DVR-Hersteller nennt oft den Bestfall mit niedriger Bildrate und Bitrate.",
    },
    {
      question: "Berücksichtigt der Rechner die Tonaufzeichnung?",
      answer:
        "Nein. Ton schlägt mit rund 64 bis 128 kbit/s je Kanal zu Buche und ist gegenüber 4 Mbit/s und mehr an Video bei aktuellen Kameras vernachlässigbar. Für die meisten Planungen können Sie ihn ignorieren. Ab 16 Tonkanälen sollten Sie etwa 5 % Puffer einplanen.",
    },
  ],
};

export default translation;
