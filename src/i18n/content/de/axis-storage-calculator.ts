import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "axis-speicherplatz-rechner",
  title: "Axis-Speicherplatz-Rechner",
  description:
    "Axis-Speicherplatz-Rechner mit abgebildeter Ersparnis durch die Zipstream-Komprimierung. Die Standardwerte entsprechen IP-Kameras der Serien P, Q und M in realen Installationen.",
  tagline:
    "Speicherdimensionierung für Axis-Kameras mit der dynamischen Bitratenersparnis von Zipstream.",
  keywords: [
    "axis speicherplatz rechner",
    "axis kamera speicherbedarf",
    "axis zipstream speicher",
    "axis communications festplatte berechnen",
  ],

  content: {
    intro:
      "Axis war 2015 der erste Hersteller mit einem intelligenten Codec (Zipstream) und ist damit in Unternehmen und Behörden weit verbreitet. Zipstream senkt die Bitrate je nach Aktivität in der Szene um 50 bis 80 %, am stärksten bei ruhigen Außenszenen. Dieser Rechner bildet Zipstream als Äquivalent zu H.265+ ab und geht von den typischen Einstellungen der Axis-P-Serie mit 1080p bei 25 fps aus. Nutzen Sie ihn, um Server für Axis Camera Station oder beliebige NVRs anderer Hersteller in einer Axis-lastigen Installation zu dimensionieren.",
    formula:
      "<p><strong>Axis-Speicherbedarf</strong> = <code>(Bitrate × 3600 / 8) × Kameras × Stunden × Tage</code></p>" +
      "<p>Zipstream ist Axis' herstellereigene, szenenbewusste Bitratensteuerung auf Basis von H.264 und H.265. Sie erkennt forensisch relevante Bildbereiche (Gesichter, Kennzeichen, Bewegung) und erhält deren Details, während statische Hintergründe stark komprimiert werden. Die Ersparnis gegenüber H.264 liegt zwischen 50 und 80 %: Ruhige Außenszenen (Parkplätze bei Nacht) profitieren am meisten, belebte Verkaufs- oder Verkehrsflächen am wenigsten.</p>",
    useCases: [
      "Den Speicher eines Aufzeichnungsservers für Axis Camera Station (ACS) dimensionieren",
      "Speicher für Axis-Rekorder der S-Serie oder Axis-kompatible NVRs anderer Hersteller planen",
      "Die Ersparnis von Zipstream gegenüber reinem H.265 prüfen, bevor Sie es an vorhandenen Kameras aktivieren",
      "Kapazitätsplanung für AXIS Camera Station Edge und S22-Appliances",
    ],
  },

  faqs: [
    {
      question: "Was ist Axis Zipstream?",
      answer:
        "Zipstream ist Axis' Technologie für intelligente Codecs, verfügbar in den meisten aktuellen Kameras der Serien P, Q und M. Sie legt eine szenenbewusste Bitratensteuerung über H.264 oder H.265: Relevante Bereiche (Gesichter, Kennzeichen, bewegte Objekte) werden in hoher Qualität erhalten, während der Detailgrad statischer Hintergründe reduziert wird. Der resultierende Stream entspricht vollständig H.264 bzw. H.265 und lässt sich von jedem kompatiblen Rekorder wiedergeben.",
    },
    {
      question: "Wie viel Speicher spart Zipstream?",
      answer:
        "Axis nennt je nach Aktivität in der Szene 50 bis 80 % Ersparnis gegenüber normalem H.264 bzw. H.265. Die Voreinstellung „H.265+ / intelligenter Codec“ des Rechners bildet 75 % ab, was einer typischen städtischen Überwachungsszene entspricht. Bei überwiegend statischen Ansichten (Industriehöfe, Büros außerhalb der Arbeitszeit) kann Zipstream mehr sparen; bei dynamischen Szenen (Verkaufsflächen, Verkehrsknoten) sind 50 bis 60 % realistisch.",
    },
    {
      question: "Benötigt Zipstream besondere Aufzeichnungstechnik?",
      answer:
        "Nein. Mit Zipstream codierte Streams sind normales H.264 oder H.265 und lassen sich mit jedem kompatiblen NVR, VMS oder Player wiedergeben. Die intelligente Komprimierung erfolgt vollständig in der Kamera. Damit sind Axis-Kameras eine gute Wahl für Installationen mit Geräten mehrerer Hersteller, in denen Sie vorhandene Aufzeichnungssysteme weiternutzen möchten.",
    },
    {
      question:
        "Was bedeuten Axis-Kameras mit mehreren Sensoren für den Speicherbedarf?",
      answer:
        "Axis-Kameras mit mehreren Sensoren (Q3819-PVE, Q6010-E, P3727-PLE) erscheinen als mehrere unabhängige Streams, typischerweise zwei oder vier Sensoren je Kamera. Tragen Sie als Kameraanzahl die Gesamtzahl der Sensoren ein, nicht die Anzahl der Gehäuse. Jeder Sensor zeichnet in eigener Auflösung auf und belegt eigene Bandbreite und eigenen Speicher.",
    },
    {
      question: "Wie aktiviere ich Zipstream an Axis-Kameras?",
      answer:
        "Über die Weboberfläche der Kamera (oder via AXIS Device Manager): Video → Stream-Profil → Zipstream → Stärke wählen (niedrig, mittel, hoch, höher, extrem). „Mittel“ ist der übliche Wert für allgemeine Überwachung; „hoch“ oder „höher“ eignen sich für Bereiche mit vorhersehbarem Aktivitätsmuster. Beachten Sie: In den meisten aktuellen Axis-Firmwareversionen ist Zipstream bereits standardmäßig aktiv, prüfen Sie das also vorher.",
    },
    {
      question:
        "Welche Festplatte wird für AXIS-Camera-Station-Server empfohlen?",
      answer:
        "AXIS Camera Station unterstützt alle Überwachungsfestplatten: WD Purple, Seagate SkyHawk oder NAS-Platten für den professionellen Einsatz (WD Red Pro, Seagate IronWolf Pro). Bei ACS-Installationen mit mehreren Servern und großer Kameraanzahl (ab 50) empfiehlt sich NAS- oder SAN-Speicher für Unternehmen wegen der höheren Zuverlässigkeit und der zusätzlichen IOPS. Der Rechner liefert den Rohkapazitätsbedarf; zur IOPS-Planung ziehen Sie die ACS-Dokumentation heran.",
    },
  ],
};

export default translation;
