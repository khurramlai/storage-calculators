import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "genetec-speicherplatz-rechner",
  title: "Genetec-Speicherplatz-Rechner",
  description:
    "Genetec-Speicherplatz-Rechner zur Kapazitätsplanung der Archiver von Security Center. Ausgelegt auf Unternehmensinstallationen mit Kameras mehrerer Hersteller und langen Aufbewahrungszeiträumen.",
  tagline:
    "Kapazitätsplanung der Archiver für großflächige Genetec-Security-Center-Installationen.",
  keywords: [
    "genetec speicherplatz rechner",
    "genetec security center speicher",
    "genetec archiver dimensionierung",
    "genetec speicherbedarf berechnen",
  ],

  content: {
    intro:
      "Genetec Security Center gehört in den Bereich der Unternehmens-VMS. Seine Archiver-Rolle nimmt Video von sehr vielen Kameras entgegen, oft von Hunderten, und das über lange Aufbewahrungszeiträume. Speicher für Genetec zu dimensionieren ist etwas anderes, als einen einzelnen NVR auszulegen: Hier geht es um dauerhafte Schreib-IOPS, wochenlange Aufbewahrung und mitunter um gestuften Speicher mit schnellen Platten für aktuelle Aufnahmen und günstigeren Platten für ältere. Die Standardwerte entsprechen einer mittleren Unternehmensgröße: 16 Kameras und 60 Tage Aufbewahrung. Die ermittelte Rohkapazität übersetzen die Dimensionierungswerkzeuge von Genetec anschließend in die Anzahl der Archiver und den Aufbau der Plattenverbünde.",
    formula:
      "<p><strong>Speicherbedarf des Genetec-Archivers</strong> = <code>(Bitrate × 3600 / 8) × Kameras × Stunden × Tage</code></p>" +
      "<p>Security Center speichert Video im Format <em>G64x</em>, einem herstellereigenen, gemultiplexten Container um den zugrunde liegenden H.264- oder H.265-Stream. G64x erzeugt nur minimalen Overhead von unter 2 %, die berechnete Rohkapazität gilt also unmittelbar. Bei gestuften Installationen, in denen ein Teil der Aufnahmen auf langsameren Archivspeicher wandert, teilen Sie die Aufbewahrung in einen „heißen“ und einen „kalten“ Abschnitt und lassen den Rechner zweimal laufen.</p>",
    useCases: [
      "Den Speicher der Archiver-Server für eine neue Security-Center-Installation dimensionieren",
      "Die Speicherschätzung eines Genetec-Partners gegen die tatsächliche Rechnung prüfen",
      "Die Erweiterung eines Archivers beim Hinzufügen von Kamerakanälen planen",
      "Gestuften Speicher planen: die Aufteilung der Platten auf heißes und kaltes Archiv",
    ],
  },

  faqs: [
    {
      question: "Was ist ein Genetec-Archiver?",
      answer:
        "Der Archiver ist die Rolle in Security Center, die das Video der Kameras entgegennimmt und auf die Platte schreibt. Ein Archiver bedient je nach Bitrate und Gesamtdurchsatz üblicherweise 50 bis 200 Kameras. Installationen mit mehreren Archivern sind bei Standorten mit Tausenden Kameras die Regel. Dieser Rechner liefert den Speicherbedarf je Archiver; multiplizieren Sie ihn mit der Anzahl der Archiver für die Gesamtinstallation.",
    },
    {
      question:
        "Unterstützt Security Center H.265 und intelligente Codecs?",
      answer:
        "Ja. Security Center unterstützt H.265 seit Version 5.7 und nimmt die intelligenten Varianten (H.265+ von Hikvision, WiseStream II von Hanwha, Zipstream von Axis) als normale H.265-Streams entgegen. Die Speicherersparnis kommt damit beim Archiver an. Die Option „H.265+“ des Rechners bildet diese Codecs mit der veröffentlichten Einsparquote ab.",
    },
    {
      question:
        "Wie groß ist der Speicherunterschied zwischen Dauer- und Bewegungsaufzeichnung in Security Center?",
      answer:
        "Security Center erlaubt Aufzeichnungsregeln je Kamera und je Zeitplan. Bewegungsbasierte Aufzeichnung senkt den Speicherbedarf in gut eingestellten Umgebungen typischerweise um 60 bis 90 %, doch Unternehmensinstallationen verlangen aus Compliance-Gründen häufig Daueraufzeichnung (Banken, Spielbetriebe, Verkehr). Der Rechner unterstützt beide Modi: Wählen Sie „nur bei Bewegungserkennung“ für die Schätzung mit 40 % Tastverhältnis oder „durchgehend“ für den Betrieb rund um die Uhr.",
    },
    {
      question: "Erfordert Genetec besondere Speicherhardware?",
      answer:
        "Security Center unterstützt jeden Blockspeicher: direkt angebundene Platten im Archiver-Server, SAN oder NAS über iSCSI oder SMB. Unternehmensinstallationen nutzen üblicherweise interne RAID-Verbünde in 2-HE- oder 4-HE-Servern oder gemeinsam genutzten SAN-Speicher für mehrere Archiver. Überwachungsfestplatten (WD Purple Pro, Seagate Exos) sind Consumer-Modellen vorzuziehen. Der Rechner liefert die Rohkapazität; die IOPS-Planung ist ein eigenes Thema und in den Hardware-Leitfäden von Genetec beschrieben.",
    },
    {
      question:
        "Kann Genetec ältere Aufnahmen automatisch auf günstigeren Speicher verschieben?",
      answer:
        "Ja. Security Center bringt eine Archivübertragung mit, die Aufnahmen nach einer einstellbaren Zeit vom primären (heißen) auf einen sekundären (kalten) Speicher verschiebt. Der kalte Speicher kann aus günstigen Platten hoher Kapazität oder aus Objektspeicher bestehen. Für eine gestufte Planung lassen Sie diesen Rechner zweimal laufen: einmal für die heiße Aufbewahrung (etwa 14 Tage) und einmal für die kalte (60 Tage minus 14). Anschließend addieren Sie die Ergebnisse.",
    },
    {
      question:
        "Warum füllt sich die Platte meines Archivers schneller als berechnet?",
      answer:
        "Am häufigsten: (1) Die Kameras nutzen eine höhere Bitrate als im Datenblatt angegeben (prüfen Sie stets die Statistik der eingehenden Streams am Archiver); (2) die Tonaufzeichnung ist auf vielen Kanälen aktiv; (3) auch die Wiedergabe kameraseitig gespeicherter Aufnahmen wird archiviert; (4) Lesezeichen und Vorfälle erzeugen zusätzlichen Overhead. Die Stream-Statistik in Security Center zeigt die tatsächliche Schreibrate je Kamera.",
    },
  ],
};

export default translation;
