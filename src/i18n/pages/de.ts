import type { StaticPages } from "~/i18n/types";

/**
 * German versions of the about + legal pages. Internal links point at the
 * German URLs so a visitor never falls back into the English tree mid-policy.
 * Slugs avoid umlauts (ue/oe/ae) as is conventional for German URLs.
 */
const pages: StaticPages = {
  about: {
    slug: "ueber-uns",
    title: "Über uns",
    description:
      "Über StorageCalc: warum es diese unabhängige Rechner-Website gibt, wer dahintersteckt, woher die Berechnungen stammen und wie Sie uns erreichen.",
    heading: "Über StorageCalc",
    subtitle:
      "Eine unabhängige, kostenlose Sammlung von Speicherplatz-Rechnern, entstanden aus dem Ärger über Hersteller-Rechner, die ihre Formeln verschweigen.",
    body: `
      <h2>Warum es diese Website gibt</h2>
      <p>Jeder Speicherhersteller (Hikvision, Synology, AWS, Azure) stellt einen Rechner auf seine Website. Alle sind <em>in Ordnung</em>, haben aber drei Probleme:</p>
      <ul>
        <li>Sie binden Sie an das Sortiment eines einzigen Herstellers. Sie wollen AWS S3 mit Azure Blob vergleichen? Dann springen Sie zwischen drei Browser-Tabs hin und her und versuchen, sich die Egress-Tarife zu merken.</li>
        <li>Sie verschweigen die Formel. Sie geben Werte ein, sehen eine Zahl und wissen nicht, wie sie zustande kommt.</li>
        <li>Sie sind als Verkaufstrichter gebaut. Auf jedem Bildschirm ein Handlungsaufruf, Aufforderungen zur Kontoerstellung und „Sprechen Sie mit dem Vertrieb“.</li>
      </ul>
      <p>StorageCalc behebt alle drei Punkte. Jeder Rechner zeigt seine Formel. Jede Seite ist kostenlos, ohne Anmeldung und darauf ausgelegt, Ihnen schnell eine belastbare Zahl zu liefern.</p>

      <h2>Woher die Berechnungen stammen</h2>
      <p>Die Formel jedes Rechners beruht auf öffentlich dokumentierten Branchenstandards:</p>
      <ul>
        <li><strong>RAID</strong>: RAID-Definitionen der SNIA sowie die Standardformeln für Kapazität, Parität und Fehlertoleranz.</li>
        <li><strong>Videoüberwachung</strong>: veröffentlichte Planungstabellen von Hikvision, Hanwha (Wisenet) und Axis. Referenzbitraten bei 25 fps je Auflösung, skaliert nach Codec-Effizienz.</li>
        <li><strong>Cloud</strong>: Listenpreise von AWS S3, Azure Blob, Google Cloud Storage und Firebase Cloud Storage, US-Region.</li>
      </ul>
      <p>Wo Hersteller keine genauen Zahlen veröffentlichen, verwenden wir konservative Mittelwerte, die zu realen Installationen passen. Der Abschnitt „Über diesen Rechner“ nennt auf jeder Seite die konkrete Quelle.</p>

      <h2>Was Sie hier finden</h2>
      <p>Eine Sammlung von Rechnern zu RAID, Videoüberwachung, NAS, Cloud-Speicher und einigen Spezialbereichen. Die vollständige Liste finden Sie auf der <a href="/de/">Startseite</a>. Weitere kommen hinzu, sobald wir schlecht abgedeckte Suchanfragen entdecken.</p>

      <h2>Was Sie hier NICHT finden</h2>
      <ul>
        <li>Benutzerkonten. Es gibt nichts zu registrieren.</li>
        <li>Tracking, bevor Sie dem Cookie-Hinweis zugestimmt haben. Siehe <a href="/de/datenschutzerklaerung/">Datenschutzerklärung</a>.</li>
        <li>Bezahlte Platzierungen. Die Rechner sind nicht danach sortiert, wer zahlt, sondern alphabetisch oder nach Kategorie.</li>
        <li>Herstellersponsoring. Sollten künftig Anzeigen erscheinen, stammen sie von Google AdSense und sind klar gekennzeichnet.</li>
      </ul>

      <h2>Wie diese Website kostenlos bleibt</h2>
      <p>Die Website wird statisch auf Cloudflare Pages (kostenloser Tarif) gehostet und blendet möglicherweise irgendwann Google-Anzeigen ein, um die Domainverlängerung zu decken. Die Berechnungen selbst bleiben dauerhaft kostenlos und ohne Anmeldung.</p>

      <h2>Mitwirken und Korrekturen</h2>
      <p>Wenn Sie einen Fehler, eine falsche Herstellerangabe finden oder sich einen weiteren Rechner wünschen:</p>
      <ul>
        <li>Öffnen Sie ein Issue oder einen Pull Request im Projekt-Repository (Link folgt).</li>
        <li>Oder schreiben Sie dem Betreiber (Link folgt).</li>
      </ul>
      <p>Meldungen zu Rechenfehlern haben höchste Priorität: Genauigkeit ist der Sinn dieser Website.</p>

      <h2>Rechtliches</h2>
      <ul>
        <li><a href="/de/datenschutzerklaerung/">Datenschutzerklärung</a></li>
        <li><a href="/de/cookie-richtlinie/">Cookie-Richtlinie</a></li>
        <li><a href="/de/nutzungsbedingungen/">Nutzungsbedingungen</a></li>
        <li><a href="/de/haftungsausschluss/">Haftungsausschluss</a>, der wichtigste Punkt. Lesen Sie ihn, bevor Sie eine reale Entscheidung auf eine dieser Zahlen stützen.</li>
      </ul>
    `,
  },

  disclaimer: {
    slug: "haftungsausschluss",
    title: "Haftungsausschluss",
    description:
      "Haftungsausschluss von StorageCalc: Die Rechner liefern Schätzwerte, Herstellerpreise ändern sich, RAID ist keine Sicherung, und weitere Punkte, die Sie kennen sollten, bevor Sie sich auf ein Ergebnis verlassen.",
    subtitle:
      "Was diese Rechner leisten können und was nicht. Bitte lesen, bevor Sie eine reale Entscheidung auf eine Zahl stützen.",
    updated: "Zuletzt aktualisiert: 18.05.2026",
    body: `
      <h2>Allgemeines</h2>
      <p>Die Rechner auf StorageCalc sind <strong>Schätzwerkzeuge, die ausschließlich der Planung dienen</strong>. Sie verwenden branchenübliche Formeln und öffentlich dokumentierte Herstellerangaben, die realen Ergebnisse weichen jedoch ab. Prüfen Sie stets die aktuelle Herstellerdokumentation, bevor Sie Hardware kaufen, Cloud-Verträge abschließen oder sicherheitskritische Entscheidungen treffen.</p>

      <h2>RAID-Rechner</h2>
      <ul>
        <li><strong>RAID ist keine Sicherung.</strong> RAID schützt vor dem Ausfall eines Laufwerks, nicht vor beschädigten Dateien, Ransomware, versehentlichem Löschen, Feuer oder Diebstahl. Bewahren Sie von allem, dessen Verlust Sie sich nicht leisten können, stets Sicherungen außerhalb des Arrays auf.</li>
        <li>Die Geschwindigkeitsfaktoren setzen ideale parallele Ein-/Ausgabe und einen Controller ohne Engpass voraus. Der reale Durchsatz hängt vom RAID-Controller, der Busgeschwindigkeit, dem Laufwerkstyp (HDD, SSD oder NVMe), der Stripe-Größe und der gleichzeitigen Last ab.</li>
        <li>Die Angaben zur Fehlertoleranz gelten für den eingeschwungenen Betrieb im besten Fall. Rebuild-Zeitfenster und die Rate nicht behebbarer Lesefehler (URE) können die Rechnung in der Praxis verändern, besonders bei großen Arrays mit Laufwerken im Terabyte-Bereich.</li>
        <li>Der Overhead des Dateisystems (ext4, XFS, ZFS, NTFS) beansprucht üblicherweise 1 bis 10 % der Rohkapazität. Snapshots, Deduplizierung und reservierte Blöcke verringern sie weiter.</li>
      </ul>

      <h2>Rechner für Videoüberwachung und CCTV</h2>
      <ul>
        <li>Die Bitratenschätzungen beruhen auf den veröffentlichten Planungstabellen der Hersteller (Hikvision, Hanwha, Axis usw.). Die reale Bitrate schwankt je nach Komplexität der Szene um ±20 %: belebte Szenen brauchen mehr, statische weniger.</li>
        <li>Die Ersparnis intelligenter Codecs (H.265+, WiseStream II, Zipstream) liegt je nach Aktivität in der Szene zwischen 50 und 80 %. Wir rechnen mit 75 %, was einer typischen städtischen Szene entspricht.</li>
        <li>Die Annahme eines Tastverhältnisses von 40 % bei bewegungsgesteuerter Aufzeichnung ist konservativ. Mit gut eingestellter Ereigniserkennung (Klassifizierung von Personen und Fahrzeugen) kann die tatsächliche Aufzeichnungszeit unter 10 % des aktiven Zeitfensters liegen.</li>
        <li>Tonaufzeichnung, Archive mit zwei Streams sowie markierte Vorfälle erhöhen den reinen Videowert des Rechners um weitere 5 bis 15 %.</li>
        <li>Empfohlen werden ausschließlich Festplatten für die Videoüberwachung (WD Purple, Seagate SkyHawk, Toshiba S300). Consumer-Festplatten laufen zwar eine Weile, fallen unter Dauerschreiblast aber früh aus.</li>
      </ul>

      <h2>Rechner für Cloud-Speicher</h2>
      <ul>
        <li><strong>Preise ändern sich häufig.</strong> Die Zahlen in diesem Rechner sind Listenpreise der gängigsten US-Region mit Stand Anfang 2025. Die realen Kosten hängen von der Region, Rabatten bei Nutzungszusagen, Unternehmensverträgen und zwischenzeitlichen Preisänderungen ab.</li>
        <li>Kostenlose Kontingente sind nur teilweise berücksichtigt. Die kostenlosen Egress-Kontingente (100 GB/Monat bei AWS, Azure und GCP) werden abgezogen. Die kostenlosen Speicherkontingente (5 GB bei Firebase Spark, 5 GB im AWS-Gratiskontingent für 12 Monate) werden nicht abgezogen, da sie nur für neue Konten gelten und an Bedingungen geknüpft sind.</li>
        <li>Die Preise für Vorgänge unterscheiden sich je Klasse; wir verwenden den veröffentlichten Listenpreis je Vorgangskategorie. Reservierte Kapazität, Savings Plans und Rabatte bei Nutzungszusagen können die realen Kosten um 20 bis 50 % senken.</li>
        <li>Regionsübergreifende Übertragungen, Zuschläge bei Anfragespitzen und Gebühren für Lifecycle-Übergänge können Rechnungsposten erzeugen, die hier nicht abgebildet sind.</li>
        <li><strong>Nutzen Sie diesen Rechner nicht für Abrechnungen oder Budgetzusagen, ohne die Zahlen mit dem offiziellen Rechner des jeweiligen Anbieters und den tatsächlichen Konditionen Ihres Kontos abzugleichen.</strong></li>
      </ul>

      <h2>Rechner für Selfstorage und physische Lagerung</h2>
      <ul>
        <li>Die Kapazitätsschätzungen setzen eine sinnvolle Packdichte voraus. Sperrige Gegenstände (Matratzen, Sofas, Sportgeräte) und Schutzabstände verringern das nutzbare Volumen um 20 bis 40 %.</li>
        <li>Die Preise für Lagerräume schwanken stark nach Standort, Jahreszeit und Nachfrage. Nutzen Sie die empfohlene Größe aus dem Rechner, holen Sie die Preise aber vor Ort ein.</li>
      </ul>

      <h2>Marken der Hersteller</h2>
      <p>StorageCalc nennt mehrere Hersteller (Hikvision, Hanwha, Axis, Genetec, Ubiquiti, Synology, Amazon, Microsoft, Google, Firebase, WD, Seagate, Toshiba) bei ihren Produktnamen. Diese Marken gehören ihren jeweiligen Inhabern. Ihre Nennung erfolgt rein beschreibend und bedeutet keine Empfehlung, Partnerschaft, Verbindung oder Förderung.</p>

      <h2>Keine fachliche Beratung</h2>
      <p>Diese Website wird von einem unabhängigen Herausgeber betrieben, nicht von einem zertifizierten Speicherarchitekten, Errichter von Videoüberwachungsanlagen oder Cloud-Beratungshaus. Bei geschäftskritischen, sicherheitsrelevanten oder compliance-getriebenen Speicherentscheidungen ziehen Sie bitte eine qualifizierte Fachkraft hinzu.</p>

      <h2>Keine Gewährleistung</h2>
      <p>Der Dienst wird „wie besehen“ und ohne jede Gewährleistung bereitgestellt. Den vollständigen Haftungsausschluss und die Haftungsbeschränkung finden Sie in unseren <a href="/de/nutzungsbedingungen/">Nutzungsbedingungen</a>.</p>
    `,
  },

  "privacy-policy": {
    slug: "datenschutzerklaerung",
    title: "Datenschutzerklärung",
    description:
      "Was StorageCalc erhebt, warum und wie Sie widersprechen. Kurz gesagt: fast keine personenbezogenen Daten, aber wir nutzen Google Analytics und blenden möglicherweise Google-Anzeigen ein.",
    subtitle:
      "Was wir erheben, warum und wie Sie widersprechen. Kurz gesagt: fast keine personenbezogenen Daten, aber wir nutzen Google Analytics und blenden möglicherweise Google-Anzeigen ein.",
    updated: "Zuletzt aktualisiert: 18.05.2026",
    body: `
      <h2>Kurzfassung</h2>
      <p>StorageCalc ist eine statische Website. Es gibt keine Registrierung, keine Datenbank, die Ihre Eingaben speichert, kein Kontaktformular und keine Erfassung von E-Mail-Adressen. Alle Rechner laufen vollständig in Ihrem Browser.</p>
      <p>Die einzigen Daten, die wir erheben, sind anonyme Nutzungsstatistiken über <strong>Google Analytics</strong>; außerdem blenden wir möglicherweise Werbung über <strong>Google Ads</strong> ein. Beides können Sie über den Cookie-Hinweis ablehnen.</p>

      <h2>1. Wer wir sind</h2>
      <p>Diese Website, StorageCalc, wird von einem unabhängigen Herausgeber betrieben, der kostenlose Speicherplatz-Rechner bereitstellt. Wir sind kein Unternehmen, haben keine Investoren im Rücken und verkaufen keine Daten. Sie erreichen uns über die Kontaktangaben auf der Seite <a href="/de/ueber-uns/">Über uns</a>.</p>

      <h2>2. Welche Daten wir erheben</h2>
      <h3>2.1 Was wir erheben</h3>
      <ul>
        <li><strong>Analysedaten</strong> über Google Analytics 4: anonymisierte Seitenaufrufe, ungefähres Land bzw. ungefähre Stadt, Gerätetyp, verweisende URL und Verweildauer. So erkennen wir, welche Rechner nützlich sind und welche wir verbessern sollten.</li>
        <li><strong>Werbebezogene Daten</strong> über Google Ads / AdSense (sofern aktiviert): Cookies zur Personalisierung von Anzeigen und zur Begrenzung ihrer Häufigkeit.</li>
      </ul>

      <h3>2.2 Was wir NICHT erheben</h3>
      <ul>
        <li>Namen, E-Mail-Adressen, Telefonnummern oder sonstige Daten, die Sie identifizierbar machen.</li>
        <li>Ihre Eingaben in den Rechnern (Laufwerksanzahl, Kamerabitraten, Cloud-Speichermengen): Sie verbleiben ausschließlich in Ihrem Browser.</li>
        <li>Zugangsdaten, denn es gibt keine Benutzerkonten.</li>
        <li>Zahlungsdaten, denn die Website ist kostenlos und es wird nichts verkauft.</li>
      </ul>

      <h2>3. Cookies</h2>
      <p>Alle Einzelheiten finden Sie in der eigenen <a href="/de/cookie-richtlinie/">Cookie-Richtlinie</a>. Kurz gefasst:</p>
      <ul>
        <li>Es werden keine Cookies gesetzt, bevor Sie im Hinweisbanner zugestimmt haben.</li>
        <li>Wenn Sie zustimmen: Es werden Cookies von Google Analytics und Google Ads gesetzt.</li>
        <li>Wenn Sie ablehnen: Es wird nichts gesetzt, und Sie können alle Rechner weiterhin nutzen.</li>
        <li>Ihre Entscheidung wird im <code>localStorage</code> Ihres Geräts gespeichert.</li>
      </ul>

      <h2>4. Google Analytics</h2>
      <p>Wir nutzen Google Analytics 4, um den Gesamtverkehr zu messen. Google kann die Daten gemäß seiner eigenen <a href="https://policies.google.com/privacy" rel="noopener" target="_blank">Datenschutzerklärung</a> verarbeiten. Sie können das <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener" target="_blank">Deaktivierungs-Add-on für Google Analytics</a> installieren, um GA auf allen Websites zu blockieren, oder die Cookies hier einfach ablehnen.</p>
      <p>Google Signals, demografische Berichte und Werbefunktionen sind in unserer GA-Property nicht aktiviert.</p>

      <h2>5. Google Ads / AdSense</h2>
      <p>Auf dieser Website können Anzeigen von Google AdSense oder anderen Werbenetzwerken erscheinen. Diese Netzwerke können Cookies einsetzen, um passende Anzeigen auszuspielen. Die Personalisierung von Anzeigen verwalten Sie in den <a href="https://adssettings.google.com" rel="noopener" target="_blank">Google-Anzeigeneinstellungen</a>.</p>

      <h2>6. Dienste Dritter</h2>
      <ul>
        <li><strong>Cloudflare</strong> (Hosting und CDN): sieht IP-Adressen zur Weiterleitung des Datenverkehrs. Es gilt die Datenschutzerklärung von Cloudflare.</li>
        <li><strong>Google Fonts</strong>: Die Schriftart Inter wird vom CDN von Google geladen, das die Anfrage protokollieren kann.</li>
        <li><strong>Google Analytics</strong>: siehe Abschnitt 4.</li>
        <li><strong>Google Ads</strong>: siehe Abschnitt 5.</li>
      </ul>

      <h2>7. Ihre Rechte (DSGVO / CCPA)</h2>
      <p>Da wir keine personenbezogenen Daten erheben, greifen die meisten Betroffenenrechte nicht. Für die Verarbeitung durch Google Analytics wenden Sie sich über die oben genannten Links direkt an Google. Außerdem können Sie:</p>
      <ul>
        <li>über unser Banner alle Cookies ablehnen,</li>
        <li>Cookies und <code>localStorage</code> Ihres Browsers jederzeit löschen,</li>
        <li>den privaten Modus nutzen, damit nichts gespeichert wird.</li>
      </ul>

      <h2>8. Kinder</h2>
      <p>Diese Website richtet sich nicht an Kinder unter 13 Jahren. Wir erheben wissentlich von niemandem Daten.</p>

      <h2>9. Änderungen dieser Erklärung</h2>
      <p>Bei wesentlichen Änderungen aktualisieren wir das Datum der letzten Aktualisierung am Anfang dieser Seite. Die weitere Nutzung der Website nach einer Änderung gilt als Zustimmung zur überarbeiteten Fassung.</p>

      <h2>10. Kontakt</h2>
      <p>Fragen zu dieser Erklärung? Die Kontaktangaben finden Sie auf der Seite <a href="/de/ueber-uns/">Über uns</a>.</p>
    `,
  },

  "cookie-policy": {
    slug: "cookie-richtlinie",
    title: "Cookie-Richtlinie",
    description:
      "Welche Cookies StorageCalc verwendet, wozu sie dienen und wie Sie sie steuern.",
    subtitle:
      "Welche Cookies StorageCalc verwendet, wozu sie dienen und wie Sie sie steuern.",
    updated: "Zuletzt aktualisiert: 18.05.2026",
    body: `
      <h2>Kurzfassung</h2>
      <p>Wir setzen keine Cookies, bevor Sie im Hinweisbanner auf <strong>Akzeptieren</strong> geklickt haben. Klicken Sie auf <strong>Ablehnen</strong>, wird kein Cookie gesetzt und alle Rechner funktionieren weiterhin normal. Ihre Entscheidung wird im <code>localStorage</code> gespeichert, nicht in einem Cookie.</p>

      <h2>1. Was sind Cookies?</h2>
      <p>Cookies sind kleine Textdateien, die Websites auf Ihrem Gerät ablegen. Sie können Einstellungen speichern, Ihr Verhalten über mehrere Seiten hinweg nachverfolgen oder Funktionen ermöglichen. Ihre Zwecke unterscheiden sich: Manche sind notwendig, andere optional.</p>

      <h2>2. Von uns verwendete Cookies</h2>

      <h3>Notwendige Cookies</h3>
      <p>Keine. Die Website funktioniert vollständig ohne Cookies.</p>

      <h3>Analyse-Cookies (nur bei Ihrer Zustimmung)</h3>
      <table class="my-4 w-full border-collapse text-sm">
        <thead>
          <tr class="border-b border-slate-300 text-left">
            <th class="py-2 pr-3 font-semibold text-slate-900">Cookie</th>
            <th class="py-2 pr-3 font-semibold text-slate-900">Anbieter</th>
            <th class="py-2 pr-3 font-semibold text-slate-900">Zweck</th>
            <th class="py-2 font-semibold text-slate-900">Laufzeit</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-200">
            <td class="py-2 pr-3 font-mono text-xs">_ga</td>
            <td class="py-2 pr-3">Google Analytics</td>
            <td class="py-2 pr-3">Unterscheidet einzelne Nutzer.</td>
            <td class="py-2">2 Jahre</td>
          </tr>
          <tr class="border-b border-slate-200">
            <td class="py-2 pr-3 font-mono text-xs">_ga_*</td>
            <td class="py-2 pr-3">Google Analytics</td>
            <td class="py-2 pr-3">Speichert den Sitzungsstatus.</td>
            <td class="py-2">2 Jahre</td>
          </tr>
        </tbody>
      </table>

      <h3>Werbe-Cookies (nur bei Zustimmung und wenn Anzeigen ausgespielt werden)</h3>
      <table class="my-4 w-full border-collapse text-sm">
        <thead>
          <tr class="border-b border-slate-300 text-left">
            <th class="py-2 pr-3 font-semibold text-slate-900">Cookie</th>
            <th class="py-2 pr-3 font-semibold text-slate-900">Anbieter</th>
            <th class="py-2 pr-3 font-semibold text-slate-900">Zweck</th>
            <th class="py-2 font-semibold text-slate-900">Laufzeit</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-200">
            <td class="py-2 pr-3 font-mono text-xs">__gads / __gpi</td>
            <td class="py-2 pr-3">Google AdSense</td>
            <td class="py-2 pr-3">Anzeigenauslieferung, Häufigkeitsbegrenzung und Betrugsprävention.</td>
            <td class="py-2">13 Monate</td>
          </tr>
          <tr class="border-b border-slate-200">
            <td class="py-2 pr-3 font-mono text-xs">IDE / NID</td>
            <td class="py-2 pr-3">Google Ads</td>
            <td class="py-2 pr-3">Personalisierung von Anzeigen über Google-Dienste hinweg.</td>
            <td class="py-2">13 Monate</td>
          </tr>
        </tbody>
      </table>

      <h2>3. localStorage</h2>
      <p>Wir speichern genau einen Eintrag im <code>localStorage</code> Ihres Browsers:</p>
      <ul>
        <li><code>consent</code>: speichert Ihre Entscheidung im Cookie-Banner (<code>accepted</code>, <code>rejected</code> oder <code>dismissed</code>), damit wir nicht erneut nachfragen.</li>
      </ul>
      <p>Das ist kein Cookie und wird an keinen Server übertragen. Sie können den Eintrag über die Entwicklerwerkzeuge Ihres Browsers oder durch Löschen der Websitedaten entfernen.</p>

      <h2>4. Cookies verwalten</h2>
      <ul>
        <li><strong>Auf dieser Website:</strong> Nutzen Sie das Banner zum Akzeptieren oder Ablehnen. Um Ihre Entscheidung später zu ändern, löschen Sie die Websitedaten und laden Sie die Seite neu.</li>
        <li><strong>Google Analytics:</strong> Installieren Sie das <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener" target="_blank">Deaktivierungs-Add-on</a>.</li>
        <li><strong>Google Ads:</strong> Verwalten Sie die Personalisierung in den <a href="https://adssettings.google.com" rel="noopener" target="_blank">Google-Anzeigeneinstellungen</a>.</li>
        <li><strong>Alle Cookies:</strong> Nutzen Sie die Cookie-Einstellungen Ihres Browsers (meist unter Einstellungen → Datenschutz).</li>
      </ul>

      <h2>5. „Do Not Track“</h2>
      <p>Diese Website wertet „Do Not Track“-Signale derzeit nicht aus, da es branchenweit keinen Konsens zu ihrer Auslegung gibt. Nutzen Sie stattdessen den Cookie-Hinweis zum Ablehnen: Diese Entscheidung wird tatsächlich umgesetzt.</p>

      <h2>6. Änderungen dieser Richtlinie</h2>
      <p>Wesentliche Änderungen werden im Datum der letzten Aktualisierung vermerkt. Kommt eine neue Cookie-Kategorie hinzu, fragt das Banner erneut nach Ihrer Zustimmung.</p>
    `,
  },

  "terms-of-service": {
    slug: "nutzungsbedingungen",
    title: "Nutzungsbedingungen",
    description:
      "Mit der Nutzung von StorageCalc stimmen Sie diesen Bedingungen zu. Sie sind kurz, lesen Sie sie bitte trotzdem.",
    subtitle:
      "Mit der Nutzung von StorageCalc stimmen Sie diesen Bedingungen zu. Sie sind kurz, lesen Sie sie bitte trotzdem.",
    updated: "Zuletzt aktualisiert: 18.05.2026",
    body: `
      <h2>1. Zustimmung</h2>
      <p>Mit dem Zugriff auf StorageCalc (den „Dienst“) oder dessen Nutzung erklären Sie sich mit diesen Nutzungsbedingungen einverstanden. Sind Sie damit nicht einverstanden, nutzen Sie den Dienst bitte nicht. Der Dienst wird kostenlos und ohne Benutzerkonto bereitgestellt.</p>

      <h2>2. Der Dienst</h2>
      <p>StorageCalc stellt interaktive Rechner bereit, mit denen sich Kapazität, Kosten und Konfiguration von Speicher für verschiedene Technologien (RAID, Videoüberwachung, NAS, Cloud-Speicher usw.) abschätzen lassen. Alle Berechnungen laufen in Ihrem Browser; es werden keine Daten an einen Server gesendet.</p>

      <h2>3. Nutzungslizenz</h2>
      <p>Wir gewähren Ihnen eine persönliche, nicht ausschließliche und nicht übertragbare Lizenz zur Nutzung des Dienstes für rechtmäßige Zwecke. Sie dürfen:</p>
      <ul>
        <li>die Rechner privat, zu Ausbildungszwecken oder für die betriebliche Planung nutzen,</li>
        <li>Links zu einzelnen Rechnerseiten teilen,</li>
        <li>die Rechner in Artikeln, Präsentationen oder Leistungsverzeichnissen zitieren (bitte mit Link).</li>
      </ul>
      <p>Sie dürfen nicht:</p>
      <ul>
        <li>die Rechner oder ihre Berechnungen ohne Erlaubnis auslesen, spiegeln oder anderweitig hosten,</li>
        <li>den Dienst zurückentwickeln, verändern oder versuchen, die zugrunde liegenden Datenstrukturen zu extrahieren,</li>
        <li>den Dienst in einer Weise nutzen, die geltendes Recht verletzt oder Rechte Dritter beeinträchtigt.</li>
      </ul>

      <h2>4. Keine Gewährleistung: Die Rechner liefern Schätzwerte</h2>
      <p><strong>Der Dienst wird „WIE BESEHEN“ und ohne jede Gewährleistung bereitgestellt.</strong> Die Rechner sind Schätzwerkzeuge auf Basis öffentlich verfügbarer Angaben und branchenüblicher Formeln. Wir übernehmen keine Gewähr für Richtigkeit, Vollständigkeit oder Eignung für einen bestimmten Zweck.</p>
      <ul>
        <li>Herstellerangaben ändern sich. RAID-Formeln haben Randfälle. Cloud-Preise ändern sich monatlich. Bitraten in der Videoüberwachung schwanken mit der Komplexität der Szene.</li>
        <li>Prüfen Sie kritische Zahlen stets anhand der aktuellen Herstellerdokumentation, bevor Sie kaufen, ausrollen oder vertragliche Zusagen machen.</li>
        <li>Die Einschränkungen je Kategorie finden Sie in unserem <a href="/de/haftungsausschluss/">Haftungsausschluss</a>.</li>
      </ul>

      <h2>5. Keine fachliche Beratung</h2>
      <p>Der Dienst ersetzt nicht die Beratung durch einen qualifizierten Speicherarchitekten, Errichter von Videoüberwachungsanlagen, Cloud-Architekten oder andere Fachleute. Entscheidungen mit Budget-, Sicherheits-, Compliance- oder Infrastrukturrelevanz sollten von einer qualifizierten Fachkraft geprüft werden.</p>

      <h2>6. Haftungsbeschränkung</h2>
      <p>Soweit gesetzlich zulässig, haften weder StorageCalc noch der Betreiber oder Mitwirkende für indirekte, beiläufige, besondere, Folge- oder Strafschäden (einschließlich entgangener Gewinne sowie des Verlusts von Daten, Geschäftswert oder anderen immateriellen Werten), die sich aus der Nutzung des Dienstes ergeben, selbst wenn auf die Möglichkeit solcher Schäden hingewiesen wurde.</p>
      <p>Unsere kumulierte Gesamthaftung für Ansprüche im Zusammenhang mit dem Dienst ist auf <strong>0 USD</strong> (null) begrenzt, da der Dienst kostenlos bereitgestellt wird.</p>

      <h2>7. Links Dritter und Anzeigen</h2>
      <p>Der Dienst kann Links zu Websites Dritter (Herstellerdokumentation, verwandte Werkzeuge) enthalten und Anzeigen von Google ausspielen. Wir haben keinen Einfluss auf diese Websites und Anzeigen und übernehmen keine Verantwortung für deren Inhalte, Datenschutzpraktiken oder Richtigkeit.</p>

      <h2>8. Geistiges Eigentum</h2>
      <p>Der Dienst einschließlich Gestaltung, Quellcode und Umsetzung der Rechner ist geistiges Eigentum des Betreibers. Genannte Marken (Hikvision, AWS, Azure, Synology usw.) gehören ihren jeweiligen Inhabern. Ihre Nennung erfolgt rein beschreibend und bedeutet keine Empfehlung, Partnerschaft oder Verbindung.</p>

      <h2>9. Datenschutz</h2>
      <p>Für Ihre Nutzung gelten außerdem unsere <a href="/de/datenschutzerklaerung/">Datenschutzerklärung</a> und unsere <a href="/de/cookie-richtlinie/">Cookie-Richtlinie</a>.</p>

      <h2>10. Änderungen</h2>
      <p>Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Wesentliche Änderungen werden im Datum der letzten Aktualisierung vermerkt. Die weitere Nutzung nach einer Änderung gilt als Zustimmung.</p>

      <h2>11. Beendigung</h2>
      <p>Wir können den Dienst jederzeit und ohne Vorankündigung aussetzen oder einstellen. Sie können die Nutzung jederzeit beenden.</p>

      <h2>12. Anwendbares Recht</h2>
      <p>Diese Bedingungen unterliegen dem Recht der Gerichtsbarkeit, in der der Betreiber ansässig ist, unter Ausschluss der Kollisionsnormen. Streitigkeiten werden vor den Gerichten dieser Gerichtsbarkeit ausgetragen.</p>

      <h2>13. Kontakt</h2>
      <p>Noch Fragen? Siehe die Seite <a href="/de/ueber-uns/">Über uns</a>.</p>
    `,
  },
};

export default pages;
