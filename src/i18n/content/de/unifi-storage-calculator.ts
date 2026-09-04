import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "unifi-speicherplatz-rechner",
  title: "UniFi-Speicherplatz-Rechner",
  description:
    "UniFi-Speicherplatz-Rechner für Protect-Installationen mit G3-, G4- und G5-Kameras. Dimensioniert die Festplatten von UNVR, UNVR Pro und Cloud Key Gen2 Plus mit H.265 als Standard.",
  tagline:
    "Speicherdimensionierung für UniFi Protect mit beliebiger Mischung aus G3-, G4- und G5-Kameras und beliebiger Aufbewahrungsdauer.",
  keywords: [
    "unifi speicherplatz rechner",
    "unifi protect speicherbedarf",
    "ubiquiti festplatte berechnen",
    "unifi nvr speicher",
  ],

  content: {
    intro:
      "UniFi Protect läuft auf Ubiquitis UNVR, UNVR Pro oder Cloud Key Gen2 Plus. Die Kameras der Serien G4 und G5 nutzen standardmäßig H.265. Eine eigene Einstellung für einen „intelligenten Codec“ gibt es nicht: Die Protect-Firmware steuert die Bitrate von sich aus adaptiv. Dieser Rechner geht von Einstellungen im Stil der G4 Pro aus: 4 MP, 30 fps, H.265 und 14 Tage Aufbewahrung. Wichtig zu wissen: Ist die Platte voll, löscht Protect die ältesten Aufnahmen automatisch. Der hier ermittelte Wert ist also das, was Sie kaufen sollten, um die gewünschte Aufbewahrungsdauer vollständig zu behalten.",
    formula:
      "<p><strong>Speicherbedarf von UniFi Protect</strong> = <code>(Bitrate × 3600 / 8) × Kameras × Stunden × Tage</code></p>" +
      "<p>UniFi-G4-Pro-Kameras schreiben bei 4 MP, 30 fps und H.265 typischerweise 8 bis 12 Mbit/s je Kamera. Die Modelle der G5-Serie arbeiten etwas effizienter. Die ältere G3-Serie endet bei 1080p und unterstützt mit älterer Firmware unter Umständen kein H.265; diese Kameras codieren dann in H.264 mit höheren Bitraten.</p>",
    useCases: [
      "Zwischen UNVR, UNVR Pro und Cloud Key Gen2 Plus anhand des Speicherbedarfs entscheiden",
      "Die passende Festplatte für die vier Einschübe des UNVR auswählen",
      "Den Ausbau der Kameraanzahl innerhalb der Kapazität eines vorhandenen UNVR planen",
      "Abwägen, ob das Cloud-Archiv von UniFi Protect (Ubiquiti Cloud Storage) aktiviert werden soll",
    ],
  },

  faqs: [
    {
      question: "Wie viel Speicher benötigt eine UniFi-G4-Pro-Kamera?",
      answer:
        "Mit den Standardeinstellungen (4 MP, 30 fps, H.265, Daueraufzeichnung) schreibt eine G4 Pro rund 80 bis 100 GB pro Tag. Bei Aufzeichnung nur bei Bewegung (typisch für Privathaushalte und kleine Betriebe) sinkt der Wert auf 30 bis 40 GB täglich. Die UniFi-Voreinstellung des Rechners entspricht der Daueraufzeichnung; wechseln Sie zu „nur bei Bewegungserkennung“, wenn Ihre Anlage die intelligente Erkennung nutzt.",
    },
    {
      question: "Wie lange reicht die Festplatte im UNVR?",
      answer:
        "Das hängt von Plattengröße, Kameraanzahl und eingestellter Aufbewahrung ab. UniFi Protect löscht die ältesten Aufnahmen automatisch, sobald die Platte voll ist: Es kommt zu keinem Fehler, das tatsächliche Aufbewahrungsfenster wird lediglich kürzer. Um die gewünschte Aufbewahrung ohne automatisches Löschen zu erreichen, nutzen Sie diesen Rechner mit Ihrer Konfiguration und wählen eine passende Kapazität. Das UNVR unterstützt bis zu 16 TB je Einschub bei insgesamt vier Einschüben.",
    },
    {
      question: "Unterstützt UniFi Protect H.265?",
      answer:
        "Ja. G4 Bullet, G4 Pro, G4 Dome, G4 Instant und alle G5-Kameras unterstützen H.265 und nutzen es standardmäßig. Kameras der G3-Serie bleiben je nach Firmware unter Umständen bei H.264 (manche G3-Modelle beherrschen H.265 in neueren Versionen). H.264- und H.265-Kameras lassen sich in einer UniFi-Protect-Installation problemlos mischen; die H.265-Annahme des Rechners ist für gemischte Bestände konservativ.",
    },
    {
      question: "Welche Festplatten sind mit dem UNVR kompatibel?",
      answer:
        "Ubiquiti unterstützt im UNVR offiziell WD Purple, Seagate SkyHawk sowie eine Reihe weiterer Überwachungs- und NAS-Platten. Die maximale Kapazität je Einschub beträgt beim UNVR Pro 16 TB. Verzichten Sie auf SMR-Platten (Shingled Magnetic Recording), die mit dem durchgehenden Schreiben der Videoüberwachung schlecht zurechtkommen. Das UNVR arbeitet standardmäßig ohne RAID, das UNVR Pro unterstützt RAID 1, 5 und 10.",
    },
    {
      question: "Zeichnet UniFi Protect in die Cloud auf?",
      answer:
        "Ja. Ubiquiti Cloud Storage ist als Abonnement erhältlich (je nach Tarif rund 2 bis 4 € je Kamera und Monat) und sichert die Protect-Aufnahmen in Ubiquitis Cloud. Es ergänzt den lokalen Speicher, ersetzt ihn aber nicht. Nutzen Sie diesen Rechner für die lokale Dimensionierung; die Cloud-Kosten kommen separat hinzu.",
    },
    {
      question:
        "Kann ich den Speicher von UniFi Protect erweitern, ohne Aufnahmen zu verlieren?",
      answer:
        "Bei einem UNVR Pro mit konfiguriertem RAID lassen sich die Platten einzeln tauschen und neu aufbauen. Bei einem UNVR mit nur einer Platte können Sie diese zwar wechseln, verlieren dabei aber die bisherigen Aufnahmen: Exportieren Sie wichtige Sequenzen vorher über die Exportfunktion von Protect. UniFi Protect kann Daten derzeit nicht über mehrere externe Platten verteilen; eine Erweiterung bedeutet also den Austausch gegen eine größere Platte.",
    },
  ],
};

export default translation;
