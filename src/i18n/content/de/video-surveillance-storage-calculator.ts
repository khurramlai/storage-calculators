import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "videoueberwachung-speicherplatz-rechner",
  title: "Speicherplatz-Rechner für Videoüberwachung",
  description:
    "Speicherplatz-Rechner für Videoüberwachung mit IP-Kameras, NVRs und DVRs. Unterstützt H.264, H.265, intelligente Codecs, bewegungsgesteuerte Aufzeichnung sowie beliebige Kameraanzahl und Aufbewahrungsdauer.",
  tagline:
    "Speicherbedarf für Aufnahmen dimensionieren: jede Kamera, jeder Codec, jede Aufbewahrungsdauer.",
  keywords: [
    "videoüberwachung speicherplatz rechner",
    "videoüberwachung speicherbedarf berechnen",
    "speicherbedarf überwachungsanlage",
    "videoüberwachung festplatte rechner",
  ],

  content: {
    intro:
      "Die Speicherplanung für Videoüberwachung lässt sich auf eine Formel bringen: Bitrate × Kameras × Stunden × Tage. Nicht die Rechnung ist schwierig, sondern die Wahl der richtigen Bitrate. Sie hängt von Auflösung, Bildrate, Codec und davon ab, wie viel in der Szene passiert. Dieser Rechner schätzt eine sinnvolle Bitrate aus den Daten Ihrer Kameras und berücksichtigt die Ersparnis intelligenter Codecs (H.265+, WiseStream II, Zipstream), sofern zutreffend. Sie erhalten den Speicherbedarf und eine passende Überwachungsfestplatte.",
    formula:
      "<p><strong>Gesamtspeicher</strong> = <code>(Bitrate × 3600 / 8) × Kameras × Stunden_pro_Tag × Aufbewahrungstage</code></p>" +
      "<p>Die Bitrate wird in Bit pro Sekunde angegeben. Der Rechner leitet sie aus Auflösung, Bildrate und Codec ab und stützt sich dabei auf die veröffentlichten Tabellen von Hikvision, Hanwha und Axis. Wählen Sie einen intelligenten Codec, um die Ersparnis von H.265+, WiseStream II oder Zipstream abzubilden (rund 75 % weniger als H.264).</p>" +
      "<p>Die <strong>bewegungsgesteuerte Aufzeichnung</strong> setzt ein Tastverhältnis von 40 % auf die Aufzeichnungsstunden an, ein typischer Wert für gut eingestellte Bewegungserkennung bei Außenkameras.</p>",
    useCases: [
      "Einen NVR vor dem Kauf so dimensionieren, dass die Festplattengröße wirklich zur gewünschten Aufbewahrung passt",
      "Codecs vergleichen, um den Wechsel zu H.265 oder H.265+ zu begründen",
      "Videoüberwachung über mehrere Standorte mit unterschiedlicher Kameraanzahl planen",
      "Überwachungsfestplatten wie WD Purple oder Seagate SkyHawk budgetieren",
    ],
  },

  faqs: [
    {
      question: "Wie viel Speicher benötigt eine einzelne Kamera?",
      answer:
        "Eine 1080p-Kamera in H.265 bei 25 fps erzeugt im Dauerbetrieb rund 22 GB pro Tag, also etwa 660 GB im Monat. Dieselbe Kamera mit H.265+ (intelligenter Codec) kommt auf rund 5 GB pro Tag. In 4K mit H.264 sind bis zu 170 GB pro Tag und Kamera möglich: Die Codec-Wahl wiegt schwerer als alles andere.",
    },
    {
      question: "Was ist der Unterschied zwischen H.264, H.265 und H.265+?",
      answer:
        "H.264 ist der klassische Ausgangspunkt. H.265 (HEVC) erreicht etwa dieselbe Bildqualität bei halber Bitrate. H.265+ (Hikvision), WiseStream II (Hanwha) und Zipstream (Axis) sind „intelligente“ Varianten, die bewegte Bereiche erkennen und die Bitrate in statischen Bereichen weiter senken, typischerweise um weitere 50 % gegenüber H.265. Das ergibt rund 75 % kleinere Dateien als bei H.264.",
    },
    {
      question: "Sollte ich spezielle Überwachungsfestplatten verwenden?",
      answer:
        "Ja. Desktop-Festplatten sind auf etwa acht Betriebsstunden täglich ausgelegt und verschleißen unter Dauerschreiblast schnell. Überwachungsfestplatten (WD Purple, Seagate SkyHawk) sind für durchgehendes Schreiben freigegeben, vibrationsfest für Gehäuse mit mehreren Laufwerken und auf Streaming-Lasten mit niedriger Rotationslatenz ausgelegt.",
    },
    {
      question: "Spart bewegungsgesteuerte Aufzeichnung wirklich so viel?",
      answer:
        "Ja: In den meisten Umgebungen entfallen nur 10 bis 40 % eines Tages auf tatsächliche Bewegung. Die Voreinstellung des Rechners setzt 40 % an und ist damit konservativ. Aufzeichnung nach intelligenten Ereignissen (nur bei erkannten Personen oder Fahrzeugen statt bei jeder Bewegung) kann den Wert unter 10 % drücken.",
    },
    {
      question: "Wie berechnet dieses Werkzeug die Bitrate?",
      answer:
        "Der Rechner geht von einer H.264-Referenztabelle bei 25 fps je Auflösung aus (aus den öffentlichen Planungsunterlagen von Hikvision, Hanwha und Axis), skaliert linear mit der Bildrate und wendet anschließend den Effizienzfaktor des Codecs an. Die resultierende Bitrate wird in den Ergebnissen angezeigt, damit Sie sie mit dem Datenblatt Ihrer Kamera abgleichen können.",
    },
    {
      question: "Welche Aufbewahrungsdauer ist üblich?",
      answer:
        "30 Tage sind die häufigste Anforderung bei gewerblichen Installationen. Manche Vorschriften verlangen mehr (60 oder 90 Tage). Banken, Spielbetriebe und kritische Infrastruktur bewahren oft über ein Jahr auf. Im Privatbereich genügen mitunter 7 Tage. Der Rechner ist auf 30 Tage voreingestellt.",
    },
  ],
};

export default translation;
