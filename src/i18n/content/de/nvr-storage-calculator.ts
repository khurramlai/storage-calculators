import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "nvr-speicherplatz-rechner",
  title: "NVR-Speicherplatz-Rechner",
  description:
    "NVR-Speicherplatz-Rechner, der Festplatten nach Kameraanzahl, Auflösung, Codec und Aufbewahrungsdauer dimensioniert. Bildet die Ersparnis des intelligenten Codecs H.265+ und Überwachungsfestplatten ab.",
  tagline:
    "Dimensionieren Sie die Festplatten Ihres NVR vor dem Kauf: IP-Kameras, moderne Codecs, korrekte Berechnung.",
  keywords: [
    "nvr speicherplatz rechner",
    "nvr festplatte berechnen",
    "nvr speicherbedarf",
    "netzwerk videorekorder speicher",
  ],

  content: {
    intro:
      "Ein NVR nimmt die Streams von IP-Kameras über Ethernet entgegen und schreibt sie auf seine internen Festplatten. Die Hardwaregrenzen ergeben sich aus der Kanalanzahl (wie viele Kameras), der Anzahl der Einschübe (wie viele Festplatten) und der größten Kapazität, die die Firmware akzeptiert. Wie viel Speicher Sie tatsächlich brauchen, hängt dagegen von Auflösung, Bildrate, Codec und der gewünschten Aufbewahrungsdauer ab. Dieser Rechner liefert die Antwort in wenigen Sekunden, dazu eine Festplattenempfehlung, die zu den gängigen NVR-Gehäusen mit 1, 2, 4 oder 8 Einschüben passt.",
    formula:
      "<p><strong>NVR-Speicherbedarf</strong> = <code>(Bitrate_bps × 3600 / 8) × Kameras × Stunden × Tage</code></p>" +
      "<p>Aktuelle NVRs unterstützen H.265 nativ. Höherwertige Modelle beherrschen zusätzlich intelligente Codecs (H.265+, WiseStream II, Zipstream), die die Bitrate an die Komplexität der Szene anpassen. Der Wechsel von H.264 auf H.265 halbiert den Speicherbedarf üblicherweise; intelligente H.265+-Codecs halbieren ihn noch einmal.</p>" +
      "<p>Die <strong>Festplattenempfehlungen</strong> berücksichtigen die üblichen Einschubkonfigurationen. Der Rechner schlägt die kleinste passende Einzelkapazität vor und wechselt oberhalb von 20 TB zu mehreren Laufwerken.</p>",
    useCases: [
      "Vor dem Kauf einen NVR auswählen und Kanalanzahl sowie Festplattenkapazität am Bedarf ausrichten",
      "Alternde Festplatten in einem vorhandenen NVR durch größere ersetzen",
      "Speicher für einen NVR mit RAID planen (kombiniert mit dem RAID-Rechner)",
      "Speicher dimensionieren beim Wechsel von Cloud-Video zu einem lokalen NVR",
    ],
  },

  faqs: [
    {
      question: "Welche Festplattengröße braucht mein NVR?",
      answer:
        "Das hängt von drei Faktoren ab: Kameraanzahl, Gesamtbitrate je Kamera und Aufbewahrungsdauer. Nutzen Sie diesen Rechner mit Ihrer tatsächlichen Konfiguration; pauschale Antworten wie „8 TB für 8 Kameras“ führen in die Irre, weil sie eine bestimmte Auflösung und einen bestimmten Codec voraussetzen. Für die meisten Installationen mit 1080p oder 4 MP in H.265 und 30 Tagen Aufbewahrung sind 4 bis 12 TB je NVR realistisch.",
    },
    {
      question: "Akzeptiert ein NVR jede beliebige Festplatte?",
      answer:
        "Technisch ja, Sie sollten aber Überwachungsfestplatten verwenden. Die NVR-Hersteller (Hikvision, Dahua, UniFi, Synology) veröffentlichen Kompatibilitätslisten; nicht gelistete Platten können funktionieren, werden aber nicht unterstützt. WD Purple, Seagate SkyHawk und Toshiba S300 sind die sichere Wahl. Manche professionellen NVRs verlangen Platten, die für den Dauerbetrieb im NAS-Gehäuse freigegeben sind.",
    },
    {
      question:
        "Warum verbraucht mein NVR mehr Speicher, als der Rechner angibt?",
      answer:
        "Typische Ursachen: (1) Die Aufzeichnung mit zwei Streams (Haupt- und Substream) verdoppelt den Bedarf, wenn beide gespeichert werden; (2) zu große Abstände zwischen den Keyframes verringern die Wirkung intelligenter Codecs; (3) die Annahme einer wenig komplexen Szene trifft in belebten Umgebungen nicht zu; (4) der NVR zeichnet zusätzlich Ereignisclips neben dem Dauerstream auf. Prüfen Sie die Einstellungen: Die meisten NVRs erlauben es, die Substream-Aufzeichnung oder das Ereignisarchiv zu deaktivieren.",
    },
    {
      question: "Wie viele Kameras unterstützt ein NVR?",
      answer:
        "Die Kanalanzahl hängt vom Modell ab; üblich sind 4, 8, 16, 32 und 64 Kanäle. Der Speicherbedarf wächst linear mit der Kanalzahl, doch die Kapazität des integrierten PoE-Switches, die Dekodierleistung des Prozessors (für die Live-Ansicht) und die Gesamtzahl der Einschübe können früher zum Engpass werden als die Kanalzahl. Dieser Rechner deckt die Speicherseite ab; die übrigen Grenzen entnehmen Sie dem Datenblatt.",
    },
    {
      question: "Sollte man in einem NVR RAID einsetzen?",
      answer:
        "Bei jeder gewerblichen Installation ab vier Festplatten: ja. Ein NVR mit nur einer Platte verliert bei deren Ausfall sämtliche Aufzeichnungen. RAID 5 oder RAID 6 halten den Betrieb trotz eines oder zweier Ausfälle aufrecht, bei überschaubarem Kapazitätsverlust. Nutzen Sie unseren RAID-Rechner, um die RAID-Ebene auf Basis dieser Speicherschätzung zu planen.",
    },
    {
      question:
        "Berücksichtigt der Rechner den Overhead der NVR-Firmware?",
      answer:
        "Er geht davon aus, dass nahezu die gesamte Festplattenkapazität für Video zur Verfügung steht. In der Praxis reserviert die NVR-Firmware etwa 1 bis 2 % für Systemdaten, und der Overhead der Dateisysteme ext4 oder btrfs kommt mit 3 bis 5 % hinzu. Planen Sie rund 5 % Aufschlag auf den angezeigten Wert ein: Ein Bedarf von 10 TB erfordert realistisch etwa 10,5 TB an Plattenkapazität.",
    },
  ],
};

export default translation;
