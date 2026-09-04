import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "ueberwachungskamera-speicher-rechner",
  title: "Speicher-Rechner für Überwachungskameras",
  description:
    "Speicher-Rechner für Überwachungskameras im privaten und gewerblichen Kleinbereich. Dimensioniert Festplatten für Ring, Reolink, Wyze, Nest und NVR-Anlagen mit mehreren Kameras in Sekunden.",
  tagline:
    "Wie viele Tage an Aufnahmen passen mit Ihren Überwachungskameras wirklich auf diese Festplatte?",
  keywords: [
    "überwachungskamera speicher rechner",
    "überwachungskamera speicherbedarf",
    "sicherheitskamera festplatte berechnen",
    "kamera speicherplatz rechner",
  ],

  content: {
    intro:
      "Die meisten Überwachungskameras in Privathaushalten und kleinen Betrieben zeichnen nur bei Bewegung auf. Der Speicherbedarf beträgt dadurch nur einen Bruchteil dessen einer Daueraufzeichnung. Trotzdem muss die Festplatte richtig dimensioniert sein, denn eine zu kleine überschreibt alte Aufnahmen genau dann, wenn Sie sie brauchen. Dieser Rechner startet mit typischen Werten einer Privatinstallation: 4 Kameras in 1080p, Aufzeichnung bei Bewegung, 14 Tage Aufbewahrung. Passen Sie die Werte anschließend an.",
    formula:
      "<p>Bei bewegungsgesteuerten Kameras liegt die <strong>effektive Aufzeichnungszeit</strong> bei etwa 40 % des aktiven Zeitfensters: In den meisten Szenen herrscht weniger als die halbe Zeit über Aktivität. Der Rechner setzt ein Tastverhältnis von 40 % an, wenn Sie „Nur bei Bewegungserkennung“ wählen.</p>" +
      "<p><strong>Speicherbedarf</strong> = <code>(Bitrate × 3600 / 8) × Kameras × effektive_Stunden × Tage</code></p>",
    useCases: [
      "Zwischen einer 1-TB- und einer 4-TB-Festplatte für ein Heim-NVR oder -NAS entscheiden",
      "Prüfen, ob Cloud- oder lokaler Speicher für Ihre Aufbewahrungsdauer günstiger ist",
      "Die SD-Kartengröße für Kameras mit internem Speicher abschätzen (Reolink, Wyze, Eufy)",
      "Den Speicher einer Mehrkamera-Anlage vor dem Kauf des Rekorders planen",
    ],
  },

  faqs: [
    {
      question:
        "Wie lange reicht eine 1-TB-Festplatte bei Überwachungskameras im Privathaushalt?",
      answer:
        "Bei einer typischen Anlage mit vier 1080p-Kameras in H.265 und Aufzeichnung nur bei Bewegung (rund 40 % der Zeit): etwa 60 bis 90 Tage. Bei Daueraufzeichnung hält dieselbe Platte rund 25 Tage. Der Rechner liefert den genauen Wert für Ihre Konfiguration; Werbeaussagen wie „60 Tage auf 1 TB“ setzen bestimmte, oft optimistische Einstellungen voraus.",
    },
    {
      question: "Brauche ich einen Rekorder oder genügen SD-Karten?",
      answer:
        "Kameras mit SD-Karten-Steckplatz (Reolink, Wyze, Eufy, Amcrest) können lokal aufzeichnen, ganz ohne separaten NVR. SD-Karten enden bei den meisten Modellen bei 256 bis 512 GB, was je Kamera etwa 7 bis 30 Tage bewegungsgesteuerte 1080p-Aufnahmen ergibt. Nutzen Sie den Rechner mit einer Kamera und Ihrer Wunschaufbewahrung, um zu sehen, ob eine SD-Karte reicht oder ein zentraler Rekorder nötig ist.",
    },
    {
      question: "Sollte ich Cloud-Speicher statt einer lokalen Festplatte nutzen?",
      answer:
        "Die Cloud ist bequem (keine Hardware, Sicherung außer Haus), auf Dauer aber teuer. Ring Protect Plus kostet je Standort 40 bis 100 € pro Jahr, Nest Aware liegt ähnlich. Eine 4-TB-Festplatte für ein lokales NVR kostet einmalig rund 80 € und hält drei bis fünf Jahre. Ab vier Kameras und längerer Aufbewahrung ist lokaler Speicher deutlich günstiger. Der Vorteil der Cloud: Ein Einbrecher kann sie schwerer ausschalten, er müsste Ihre Internetverbindung genau im richtigen Moment kappen.",
    },
    {
      question: "Welchen Codec nutzen Überwachungskameras für zu Hause?",
      answer:
        "Neuere Kameras (ab 2022) beherrschen H.265 / HEVC ab Werk. Ältere oder günstige Modelle beschränken sich mitunter auf H.264. Manche WLAN-Kameras bleiben standardmäßig bei H.264, obwohl sie H.265 könnten, weil die Dekodierung in Mobil-Apps kompatibler ist. Prüfen Sie die Einstellungen und aktivieren Sie H.265, falls verfügbar: Das halbiert den Speicherbedarf ohne Qualitätsverlust.",
    },
    {
      question: "Wie viel Speicher benötigen 4K-Überwachungskameras?",
      answer:
        "Etwa das Zwei- bis Dreifache von 1080p bei gleicher Aufbewahrungsdauer. Mit Aufzeichnung bei Bewegung und H.265 kommt eine 4K-Kamera im üblichen Privateinsatz auf durchschnittlich 5 bis 15 GB pro Tag. Der Rechner liefert den genauen Wert für Ihre Szenenaktivität und Aufbewahrungsdauer.",
    },
    {
      question: "Warum speichert mein Ring oder Nest nur 60 Tage?",
      answer:
        "Cloudbasierte Überwachungskameras (Ring, Nest, Arlo, Blink) begrenzen die Aufbewahrung je nach Abonnement meist auf 30 oder 60 Tage. Nicht der Speicherplatz ist die Grenze, sondern die Abo-Bedingungen. Wenn Sie länger aufbewahren möchten, ist ein lokales NVR oder NAS die richtige Antwort, und dieser Rechner hilft bei der Dimensionierung der Festplatte.",
    },
  ],
};

export default translation;
