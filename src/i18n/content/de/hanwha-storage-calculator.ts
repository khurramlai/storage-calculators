import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "hanwha-speicherplatz-rechner",
  title: "Hanwha-Speicherplatz-Rechner",
  description:
    "Hanwha-Speicherplatz-Rechner für Wisenet-Kameras mit abgebildeter Ersparnis durch den Codec WiseStream II. Die Standardwerte entsprechen den Serien P und Q an XRN-, SRN- oder WRN-NVRs.",
  tagline:
    "Speicherplanung für Hanwha-Wisenet-Kameras mit abgebildeter WiseStream-II-Komprimierung.",
  keywords: [
    "hanwha speicherplatz rechner",
    "wisenet speicherbedarf",
    "hanwha wisenet festplatte berechnen",
    "samsung wisenet speicher",
  ],

  content: {
    intro:
      "Hanwha-Wisenet-IP-Kameras (früher Samsung Techwin) nutzen WiseStream II, einen szenenbewussten intelligenten Codec auf H.265-Basis, der bei typischen Überwachungsszenen rund 75 % gegenüber H.264 einspart. Dieser Rechner ist auf die üblichen Einstellungen der Wisenet-Serien P und Q voreingestellt: 1080p, 30 fps und aktivierter intelligenter Codec. Er deckt außerdem Mehrkamera-Anlagen an XRN-, SRN- oder WRN-NVRs ab, und die Festplattenempfehlungen passen zu den Einschubkonfigurationen dieser Gehäuse.",
    formula:
      "<p><strong>Hanwha-Speicherbedarf</strong> = <code>(Bitrate × 3600 / 8) × Kameras × Stunden × Tage</code></p>" +
      "<p>WiseStream II ist Hanwhas intelligente Erweiterung von H.265. Bei Szenen mit vorhersehbarer Bewegung (Parkplätze, Gebäudefassaden) kann sie Hikvisions H.265+ übertreffen; bei sehr dynamischen Szenen (Verkaufsflächen, belebte Kreuzungen) verringert sich der Abstand. Der Rechner bildet WiseStream II mit demselben Reduktionsfaktor von 75 % ab wie H.265+, was den von Hanwha veröffentlichten Planungsbitraten entspricht.</p>",
    useCases: [
      "Hanwha-Wisenet-NVRs der Serien XRN, SRN und WRN dimensionieren",
      "Speicher für panoramische Wisenet-PNM-Kameras mit mehreren Sensoren planen, bei denen jeder Sensor einen eigenen Stream liefert",
      "Die Ersparnis durch WiseStream II prüfen, bevor Sie es an vorhandenen Kameras aktivieren",
      "Kapazitätsplanung für Installationen mit dem VMS SSM (Smart Security Manager)",
    ],
  },

  faqs: [
    {
      question: "Was ist WiseStream II und wie unterscheidet es sich von H.265?",
      answer:
        "WiseStream II ist Hanwhas intelligenter Codec, der auf H.265 aufsetzt. Er nutzt eine dynamische GOP-Steuerung (Group of Pictures) und passt die Bitrate bereichsweise an: Unbewegte Bildbereiche werden erkannt und mit geringerer Bitrate codiert, während bewegte Objekte in voller Qualität erhalten bleiben. Das Ergebnis entspricht in etwa Hikvisions H.265+ und liefert bei gleicher Szene rund 50 % kleinere Dateien als reines H.265.",
    },
    {
      question:
        "Funktioniert WiseStream II mit NVRs und VMS anderer Hersteller?",
      answer:
        "Ja. WiseStream II erzeugt einen vollständig kompatiblen H.265-Stream, den jeder H.265-fähige NVR oder jedes VMS dekodieren kann. Die intelligente Komprimierung findet vollständig in der Kamera statt; der Rekorder sieht lediglich eine kleinere H.265-Datei. Damit eignet sich die Technik auch für Installationen mit Geräten mehrerer Hersteller.",
    },
    {
      question:
        "Welche Bitrate sollte ich für die Speicherplanung einer Wisenet-Kamera ansetzen?",
      answer:
        "Für Wisenet-Kameras mit 1080p und aktiviertem WiseStream II: 2 Mbit/s als Höchstbitrate im VBR-Modus. Für 4 MP: 3 bis 4 Mbit/s. Für 4K: 6 bis 8 Mbit/s. Das sind Praxiswerte; bei ruhigen Szenen fallen die Dateien kleiner aus. Gehen Sie von den Voreinstellungen des Rechners aus und passen Sie sie an, wenn das Datenblatt Ihrer Kamera andere Werte nennt.",
    },
    {
      question: "Welche Festplatten sind mit Hanwha-Wisenet-NVRs kompatibel?",
      answer:
        "Hanwha veröffentlicht je NVR-Modell eine Kompatibilitätsliste; WD Purple, Seagate SkyHawk und Toshiba S300 sind über die gesamte Reihe hinweg freigegeben. Die maximal unterstützte Kapazität hängt von Modell und Firmwarestand ab; aktuelle Wisenet-NVRs nehmen 16 bis 20 TB je Einschub auf. Prüfen Sie das offizielle Kompatibilitätsdokument für Ihr konkretes Modell.",
    },
    {
      question:
        "Warum nutzt meine Wisenet-Kamera eine höhere Bitrate als erwartet?",
      answer:
        "Mögliche Ursachen: (1) WiseStream II ist in den Kameraeinstellungen deaktiviert; (2) die Szene ist ungewöhnlich dynamisch, was den Nutzen des intelligenten Codecs verringert; (3) die Bitrate ist auf CBR (konstant) statt auf VBR eingestellt; (4) die Kamera läuft in einem Modus, der Qualität über Komprimierung stellt (etwa beweissichere Aufzeichnung). Prüfen Sie in der Weboberfläche der Kamera unter Einrichtung → Video und Audio → Videoprofil.",
    },
    {
      question: "Unterstützt dieser Rechner panoramische Wisenet-Kameras?",
      answer:
        "Panoramische Wisenet-Kameras (PNM-9085RQZ, PNM-9322VQP) arbeiten mit mehreren Sensoren und erscheinen als mehrere getrennte Streams. Tragen Sie als Kameraanzahl die Gesamtzahl der Sensoren ein (üblicherweise 2 oder 4), den Rest übernimmt der Rechner. Jeder Sensor zeichnet eigenständig auf und belegt seinen eigenen Speicher.",
    },
  ],
};

export default translation;
