import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "ip-kamera-speicherplatz-rechner",
  title: "IP-Kamera-Speicherplatz-Rechner",
  description:
    "IP-Kamera-Speicherplatz-Rechner mit Bitratenberechnung je Kamera für H.264, H.265 und intelligente Codecs. Auflösung und Bildrate wählen und den genauen Speicherbedarf je Gerät erhalten.",
  tagline:
    "Speicherplanung Kamera für Kamera, mit realistischen Codec- und Auflösungswerten.",
  keywords: [
    "ip kamera speicherplatz rechner",
    "ip kamera speicherbedarf",
    "netzwerkkamera speicher berechnen",
    "ip kamera bitrate rechner",
  ],

  content: {
    intro:
      "IP-Kameras übertragen digitales Video über das Netzwerk, üblicherweise per ONVIF, RTSP oder einem herstellereigenen Protokoll, und speisen einen NVR, ein VMS oder einen Rekorder auf einem NAS. Ihr Speicherbedarf ergibt sich aus den Encoder-Einstellungen der Kamera selbst, nicht aus dem Rekorder. Deshalb ist es sinnvoll, zunächst eine einzelne Kamera zu betrachten und danach hochzurechnen. Voreingestellt ist hier eine Kamera, damit Sie Auflösungen und Codecs für dieselbe Szene vergleichen können, bevor Sie die Gesamtsumme bilden.",
    formula:
      "<p><strong>Speicherbedarf je Kamera</strong> = <code>(Bitrate × 3600 / 8) × Stunden × Tage</code></p>" +
      "<p>Die Bitrate einer IP-Kamera stellen Sie in deren Encoder-Konfiguration ein. Bei VBR (variabler Bitrate) liegt der Mittelwert typischerweise nahe der eingestellten Obergrenze, bei CBR (konstanter Bitrate) bleibt er stabil. Intelligente Codecs (H.265+ bei Hikvision, WiseStream II bei Hanwha, Zipstream bei Axis) passen die Bitrate dynamisch an die Bewegung in der Szene an und senken den Speicherbedarf gegenüber normalem H.265 häufig um 50 bis 75 %.</p>",
    useCases: [
      "Auflösungssprünge vergleichen (braucht 4K wirklich das Vierfache von 1080p?)",
      "Die Codec-Effizienz eines konkreten Kameramodells vor dem Kauf prüfen",
      "Den Speicher auf Kameras mit SD-Karten-Steckplatz dimensionieren",
      "Auch die Netzwerklast planen (Bitrate × Kameras = benötigter Durchsatz)",
    ],
  },

  faqs: [
    {
      question: "Welche Bitrate sollte ich an meiner IP-Kamera einstellen?",
      answer:
        "Für 1080p in H.264 bei 25 fps sind 4 Mbit/s ein guter Ausgangswert für allgemeine Überwachungsszenen. Bei statischen Szenen (Parkplätze) genügen 2 Mbit/s, bei detailkritischen Bereichen (Kennzeichenerfassung, Kassenzonen) sollten es 6 bis 8 Mbit/s sein. Für H.265 halbieren Sie diese Werte. Intelligente Codecs (H.265+) regeln selbst: Sie geben eine Höchstbitrate vor, die Kamera nutzt nur das Nötige.",
    },
    {
      question: "VBR oder CBR – was verbraucht mehr Speicher?",
      answer:
        "CBR (konstante Bitrate) verbraucht planbar und etwas mehr Speicher, was hilfreich ist, wenn die Netzlast für die Dimensionierung gleichmäßig bleiben soll. VBR (variable Bitrate) verbraucht bei ruhigen Szenen weniger und bei belebten mehr, bei gleicher Obergrenze. Für die Planung können Sie annehmen, dass ein VBR-Stream im Mittel bei 60 bis 70 % seiner Obergrenze liegt. Die Bitratenschätzungen des Rechners entsprechen VBR.",
    },
    {
      question: "Wie verhält sich 4K-Speicherbedarf zu 1080p?",
      answer:
        "4K (3840 × 2160, 8 MP) hat viermal so viele Pixel wie 1080p (2 MP), die codierte Bitrate steigt jedoch nur um das Drei- bis Vierfache, da die Komprimierung bei höheren Auflösungen effizienter arbeitet. Mit H.265+ schrumpft der Abstand weiter: Bei derselben Szene kann ein 4K-Stream in H.265+ kleiner ausfallen als ein 1080p-Stream in H.264. Der Rechner bildet das korrekt ab.",
    },
    {
      question: "Komprimieren IP-Kameras selbst oder erst der NVR?",
      answer:
        "Die Kamera. IP-Kameras besitzen einen eingebauten Encoder (meist ein SoC von Hi3516, GK7202 oder Ambarella), der vor der Übertragung komprimiert. Der NVR oder das VMS empfängt einen bereits komprimierten Stream und schreibt ihn unverändert auf die Platte. Eine Änderung der Codec-Einstellungen an der Kamera verändert daher Netzlast und Speicherbedarf gleichzeitig.",
    },
    {
      question: "Was ist der Unterschied zwischen Hauptstream und Substream?",
      answer:
        "Die meisten IP-Kameras liefern zwei Streams: einen Hauptstream (volle Auflösung, für die Aufzeichnung) und einen Substream (geringere Auflösung, für die Live-Ansicht in Apps und Kameraübersichten, um Bandbreite zu sparen). Der Rechner berücksichtigt nur den Hauptstream. Zeichnet Ihr NVR zusätzlich den Substream auf – üblich, aber optional –, rechnen Sie 5 bis 15 % hinzu.",
    },
    {
      question:
        "Lässt sich der Speicherbedarf einer IP-Kamera per Bewegungserkennung senken?",
      answer:
        "Ja: Bewegungsgesteuerte Aufzeichnung senkt den Bedarf je nach Aktivität in der Szene typischerweise um 60 bis 90 %. Der Modus „nur bei Bewegungserkennung“ im Rechner setzt eine effektive Aufzeichnungszeit von 40 % an, was konservativ ist. Aufzeichnung nach intelligenten Ereignissen (nur bei erkannten Personen oder Fahrzeugen) kann mit aktuellen KI-Kameras unter 10 % liegen.",
    },
  ],
};

export default translation;
