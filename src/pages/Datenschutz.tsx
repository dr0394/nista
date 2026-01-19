import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Zurück zur Startseite
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Allgemeine Hinweise</h3>
              <p className="leading-relaxed mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
                Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Datenerfassung auf dieser Website</h3>
              <p className="leading-relaxed mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>

              <p className="leading-relaxed mb-4">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
                es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                <br /><br />
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
                durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
                Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
                Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>

              <p className="leading-relaxed">
                <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hosting und Content Delivery Networks (CDN)</h2>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Externes Hosting</h3>
              <p className="leading-relaxed">
                Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die
                personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern
                des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen,
                Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe
                und sonstige Daten, die über eine Website generiert werden, handeln.
                <br /><br />
                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
                potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer
                sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen
                professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Datenschutz</h3>
              <p className="leading-relaxed mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                <br /><br />
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
                Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
                sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p className="leading-relaxed mb-4">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
                Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
                der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
              <p className="leading-relaxed">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
                einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
                Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das
                Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                gerichtlicher Rechtsbehelfe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Datenerfassung auf dieser Website</h2>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Cookies</h3>
              <p className="leading-relaxed mb-4">
                Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien
                und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für
                die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
                Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch
                gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese
                selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
                <br /><br />
                Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert
                werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns oder
                Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Server-Log-Dateien</h3>
              <p className="leading-relaxed mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="leading-relaxed">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die
                Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
                Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files
                erfasst werden.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Kontaktformular</h3>
              <p className="leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
                wir nicht ohne Ihre Einwilligung weiter.
                <br /><br />
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
                gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6
                Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Ihre Rechte</h2>
              <p className="leading-relaxed mb-4">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
                Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
                die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
                Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft
                widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung
                der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                <br /><br />
                Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter
                der im Impressum angegebenen Adresse an uns wenden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Google Maps</h2>
              <p className="leading-relaxed">
                Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited
                („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                <br /><br />
                Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu
                speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA
                übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese
                Datenübertragung.
                <br /><br />
                Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer
                Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website
                angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit.
                f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
                Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
