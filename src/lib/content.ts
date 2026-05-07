/**
 * Inhaltsdaten für Reif und Partner Rechtsanwälte Demo
 * Übernommen 1:1 aus rechtsanwaelte-villach.at (Wix-Original) für Demo-Zwecke
 */

export const company = {
  name: 'Reif und Partner Rechtsanwälte OG',
  shortName: 'Reif und Partner',
  partnerName: 'Mag. Herbert Steinwandter',
  street: 'Peraustraße 9',
  zip: '9500',
  city: 'Villach',
  country: 'Österreich',
  phone: '04242 28122',
  phoneIntl: '+4342422812222',
  fax: '+4342422812222',
  email: 'villach@reifundpartner.at',
  website: 'https://www.reifundpartner.at',
  copyright: '© 2025 Reif und Partner Rechtsanwälte OG',
}

export const navigation = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Schadenersatz', href: '/schadenersatz' },
  { label: 'Strafrecht', href: '/strafrecht' },
  { label: 'Erbrecht', href: '/erbrecht' },
  { label: 'Baurecht', href: '/baurecht' },
  { label: 'Hass im Netz', href: '/hass-im-netz' },
  { label: 'Vertragsrecht', href: '/vertragsrecht' },
  { label: 'Ehe, Scheidung, Unterhalt', href: '/scheidungsrecht' },
  { label: 'Gewährleistung', href: '/gewaehrleistung' },
  { label: 'BTVG', href: '/btvg' },
  { label: 'Unternehmensrecht', href: '/unternehmensrecht' },
  { label: 'Anfahrt', href: '/anfahrt' },
]

export const motto = {
  pre: 'In Rechtsangelegenheiten gilt:',
  main: 'Wissen ist Macht, der Bessere gewinnt.',
  text: 'Jahrelange Erfahrung, Kampfgeist, ständige Weiterbildung und die Freude besser zu sein machen uns erfolgreich.',
  closing: 'Wir erringen Siege für unsere Klienten. Gerne auch für Sie!',
}

export const aboutHerbert = {
  intro: 'Herbert Steinwandter ist seit über 20 Jahren als Anwalt tätig und geschäftsführender Gesellschafter der Reif und Partner Rechtsanwälte OG. Er vereint umfangreiche juristische Expertise mit einem tiefen Verständnis für die Anliegen seiner Klienten.',
  paragraphs: [
    'Seine Leidenschaft für das Recht und sein unermüdlicher Einsatz zeichnen ihn aus. Ob in komplexen rechtlichen Fragestellungen oder in alltäglichen juristischen Belangen – er nimmt sich die Zeit, die Bedürfnisse seiner Klienten zu verstehen und maßgeschneiderte Lösungen zu entwickeln.',
    'Seine offene und zugängliche Art schafft Vertrauen, während seine Fachkompetenz für Klarheit sorgt. Mit seiner Erfahrung und seinem Engagement ist er ein verlässlicher Partner, der nicht nur rechtlich, sondern auch menschlich überzeugt.',
  ],
}

export type PracticeArea = {
  slug: string
  title: string
  short: string
  metaDescription: string
  hero: string
  body: string[]
  closing: string
  image: string
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'schadenersatz',
    title: 'Schadenersatz',
    short: 'Schadenersatz ist wie ein Balanceakt: Nur mit Präzision und Klarheit erreichen Sie Ihr Ziel.',
    metaDescription: 'Schadenersatzrecht in Villach. Wir setzen Ihre Ansprüche durch — kompetent, schnell und mit Augenmaß.',
    hero: 'Schadenersatz: Klarheit, wenn es darauf ankommt',
    body: [
      'Ob Verkehrsunfall, Behandlungsfehler oder mangelhafte Werkleistung — Schadenersatz-Verfahren erfordern Präzision in der Sachverhaltsdarstellung und ein klares juristisches Konzept.',
      'Wir analysieren Ihre Situation umfassend, sichern Beweise, dokumentieren Schäden und führen die Verhandlungen mit Versicherern oder Schädigern.',
      'Wenn keine außergerichtliche Einigung möglich ist, vertreten wir Sie konsequent vor Gericht — mit der Erfahrung aus über zwei Jahrzehnten Anwaltspraxis.',
    ],
    closing: 'Lassen Sie sich nicht abspeisen. Sichern Sie Ihre Ansprüche.',
    image: '/images/schadenersatz.jpg',
  },
  {
    slug: 'strafrecht',
    title: 'Strafrecht',
    short: 'Strafbare Handlungen gegen Leib und Leben, Vermögensdelikte, Suchtmittel — eine erfolgreiche Verteidigung beginnt bereits im Ermittlungsverfahren.',
    metaDescription: 'Strafverteidigung in Villach: Verteidigung, die Ihre Rechte sichert und schützt. Mag. Herbert Steinwandter.',
    hero: 'Verteidigung, die Ihre Rechte sichert und schützt',
    body: [
      'Eine Medaille hat immer zwei Seiten — Unfälle und Straftaten auch. Es geht in der Verteidigung darum, das Gesamtbild zu zeichnen, den Menschen und die Umstände aufzuzeigen, um so zu einem gerechten Urteil zu kommen.',
      'Unfälle ziehen mehr als nur Schaden nach sich — die rechtlichen Konsequenzen sind für Laien nicht abschätzbar. Entscheidend ist es, einen Anwalt zu haben, der weiß, was Ihr Recht ist.',
      'Bei Unfällen ist Ihr Anwalt Ihr Vorteil, denn dann wissen Sie bereits vor der Verhandlung, wie Ihre Chancen stehen.',
      'Strafbare Handlungen gegen Leib und Leben oder gegen die sexuelle Integrität, Vermögensdelikte, Suchmitteldelikte etc. — eine erfolgreiche Strafverteidigung beginnt bereits im Ermittlungsverfahren.',
    ],
    closing: 'Rechtssicher durch schwierige Zeiten — wir verhelfen Ihnen zu Ihrem Recht.',
    image: '/images/strafrecht.jpg',
  },
  {
    slug: 'erbrecht',
    title: 'Erbrecht',
    short: 'Pflichtteil, Testament, Erbanteile, Pflichtteilsforderungen — beim Erben geht es oft um hohe Vermögenswerte und komplexe Rechtsprechung.',
    metaDescription: 'Erbrecht in Villach: Wir schützen Ihre Rechte als Erbe oder Pflichtteilsberechtigter. Klare Beratung, konsequente Durchsetzung.',
    hero: 'Erbrecht: Klarheit für die wichtigen Dinge',
    body: [
      'Ihnen steht ein Pflichtteil zu, oder das Testament ist möglicherweise ungültig? Sie sind Erbe oder Geschenknehmer und sind mit einer Pflichtteilsforderung konfrontiert?',
      'Beim Erben geht es oft um hohe Vermögenswerte. Die Rechtsprechung ist komplex und im ständigen Wandel. Wir kennen die aktuelle Judikatur und vertreten Ihre Interessen mit der nötigen Präzision.',
      'Wir prüfen Testamente und Erbverträge, errechnen Pflichtteile, führen Verlassenschaftsverfahren und wehren ungerechtfertigte Forderungen ab.',
    ],
    closing: 'Wir schützen Ihre Rechte — auch wenn es um hohe Werte geht.',
    image: '/images/erbrecht.jpg',
  },
  {
    slug: 'baurecht',
    title: 'Baurecht',
    short: 'Baumängel? Kein Professionist fühlt sich verantwortlich. Der Werkunternehmer meldet sich nicht mehr. Der Alptraum jedes Bauherrn.',
    metaDescription: 'Baurecht in Villach: Wir regeln Ihr Bauvorhaben rechtlich ab. Bauverträge, Mängel, Gewährleistung, Nachbarschaftsstreit.',
    hero: 'Bauen Sie auf Sicherheit — wir regeln Ihre Bauvorhaben rechtlich ab',
    body: [
      'Ob Neubau, Sanierung oder Umbau — das Baurecht ist ein komplexes Feld mit zahlreichen rechtlichen Anforderungen und Vorschriften.',
      'Wir unterstützen Sie bei der Planung und Umsetzung Ihres Bauprojekts und sorgen dafür, dass alle gesetzlichen Regelungen eingehalten werden — von der Baugenehmigung bis hin zur Prüfung und Durchsetzung von Verträgen.',
      'Egal, ob es um Bauverträge, Gewährleistung, Mängelansprüche oder Konflikte mit Nachbarn geht — wir stehen Ihnen als kompetenter Partner zur Seite.',
      'Mit unserer Erfahrung und Expertise sorgen wir dafür, dass Ihr Projekt sicher und rechtlich abgesichert durchgeführt wird.',
    ],
    closing: 'Ihr Partner für rechtssichere Bauprojekte.',
    image: '/images/baurecht.jpg',
  },
  {
    slug: 'hass-im-netz',
    title: 'Hass im Netz',
    short: 'Bedroht? Beleidigt? Ruf gefährdet? Wir kämpfen für Ihre Rechte und setzen uns gegen digitale Angriffe ein.',
    metaDescription: 'Hass im Netz: Anwalt in Villach gegen digitale Beleidigung, Hetze und Rufschädigung. Schnelle Hilfe, klare Strategie.',
    hero: 'Hass im Netz: Wir holen Ihre digitale Würde zurück',
    body: [
      'Bedrohungen, Beleidigungen, falsche Behauptungen oder Hetze im Netz richten realen Schaden an — beruflich, privat, gesundheitlich.',
      'Wir setzen uns mit allen rechtlichen Mitteln dagegen ein: Unterlassung, Widerruf, Schadenersatz und gegebenenfalls strafrechtliche Verfolgung.',
      'Wir kennen die Mechanismen sozialer Netzwerke, kennen die Verantwortlichen und wissen, wie man auch gegen anonyme Täter vorgeht.',
    ],
    closing: 'Lassen Sie sich nicht zum Opfer machen. Wir handeln.',
    image: '/images/hass-im-netz.jpg',
  },
  {
    slug: 'vertragsrecht',
    title: 'Vertragsrecht',
    short: 'Kaufvertrag. Mietvertrag. Arbeitsvertrag. Wir erstellen rechtssichere Vereinbarungen, die Ihre Interessen schützen.',
    metaDescription: 'Vertragsrecht Villach: Wir erstellen, prüfen und durchsetzen Verträge — privat und geschäftlich.',
    hero: 'Vertragsrecht: Klare Regeln, klare Vorteile',
    body: [
      'Ein guter Vertrag bewahrt Sie vor jahrelangen Auseinandersetzungen. Wir formulieren Verträge so, dass Ihre Interessen abgesichert und Ihre Pflichten klar definiert sind.',
      'Ob Kaufvertrag, Mietvertrag, Werkvertrag, Arbeitsvertrag oder Gesellschaftsvertrag — wir kennen die typischen Fallstricke und schließen sie aus.',
      'Bei bestehenden Verträgen prüfen wir auf Wirksamkeit, beraten zu Kündigungs- und Anpassungsmöglichkeiten und führen die Auseinandersetzung, wenn der Vertragspartner sich nicht an Vereinbarungen hält.',
    ],
    closing: 'Wir erstellen Verträge, die halten — vor und im Streit.',
    image: '/images/business.jpg',
  },
  {
    slug: 'scheidungsrecht',
    title: 'Ehe, Scheidung, Unterhalt',
    short: 'Was sollten Sie vor der Eheschließung beachten? Was sind Ihre Ansprüche im Scheidungsfall? Welcher Weg ist der Beste?',
    metaDescription: 'Scheidung, Unterhalt, Eheverträge in Villach. Diskrete und klare Beratung in einer schwierigen Phase.',
    hero: 'Ehe, Scheidung, Unterhalt: Sie sind nicht allein',
    body: [
      'Eine Scheidung ist ein einschneidender Lebenseinschnitt — emotional und finanziell. Wir begleiten Sie diskret und konsequent durch alle Phasen.',
      'Bei einvernehmlichen Scheidungen erarbeiten wir faire Vereinbarungen zu Vermögensaufteilung, Unterhalt und Obsorge. Bei strittigen Verfahren vertreten wir Ihre Interessen mit Nachdruck.',
      'Wir beraten auch vor der Eheschließung zu Ehepakten und Vermögensregelungen. Klare Regelungen heute ersparen lange Auseinandersetzungen morgen.',
    ],
    closing: 'Diskret. Klar. An Ihrer Seite.',
    image: '/images/scheidungsrecht.jpg',
  },
  {
    slug: 'gewaehrleistung',
    title: 'Gewährleistung',
    short: 'Produkt gekauft? Mängel entdeckt? Rechte sichern? Wir unterstützen Sie bei jedem Schritt, um Ihre Ansprüche durchzusetzen.',
    metaDescription: 'Gewährleistung in Villach: Anwalt für Mängelansprüche, Werkverträge, Konsumentenrecht.',
    hero: 'Gewährleistung: Wir setzen Ihre Rechte durch',
    body: [
      'Ein neues Produkt erweist sich als mangelhaft? Eine Werkleistung wurde nicht ordnungsgemäß erbracht? Sie haben in Österreich umfassende Gewährleistungsansprüche — und wir helfen Ihnen, sie durchzusetzen.',
      'Wir prüfen die Gewährleistungsfristen, formulieren die korrekten Mängelrügen, fordern Verbesserung, Austausch oder Preisminderung — und gehen vor Gericht, wenn der Verkäufer nicht reagiert.',
      'Auch im B2B-Bereich beraten wir zu Gewährleistungsklauseln, Garantien und Schadenersatzansprüchen.',
    ],
    closing: 'Lassen Sie sich nicht abwimmeln. Wir setzen durch.',
    image: '/images/gewaehrleistung.jpg',
  },
  {
    slug: 'btvg',
    title: 'BTVG / Bauträgervertragsgesetz',
    short: 'Bauträgerverträge sind komplex und sowohl für Verkäufer als auch Käufer mit hohen wirtschaftlichen Risiken verbunden.',
    metaDescription: 'BTVG-Anwalt in Villach: Bauträgervertragsrecht, Sicherungsformen, Mängelhaftung. Beratung für Käufer und Verkäufer.',
    hero: 'Bauträgervertragsgesetz: Sicherheit auf beiden Seiten',
    body: [
      'Bauträgerverträge sind hochkomplex. Das Bauträgervertragsgesetz schützt Käufer, schreibt aber auch dem Verkäufer Pflichten vor — die Einhaltung ist entscheidend.',
      'Wir prüfen Bauträgerverträge auf rechtliche Wirksamkeit, beraten zu Sicherungsformen (Grundbuchsicherung, Pfandrecht, Bankgarantie) und begleiten den gesamten Bauprozess.',
      'Bei Streitigkeiten zu Mängeln, Verzug oder Vertragsänderungen vertreten wir Ihre Interessen — egal ob als Käufer oder als Bauträger.',
    ],
    closing: 'Wir kennen das BTVG. Vertrauen Sie auf Erfahrung.',
    image: '/images/business.jpg',
  },
  {
    slug: 'unternehmensrecht',
    title: 'Unternehmensrecht',
    short: 'Bei Gesellschaftsgründung sind viele Punkte zu beachten — sie haben gravierende wirtschaftliche Auswirkungen in der Zukunft.',
    metaDescription: 'Unternehmensrecht in Villach: Gesellschaftsverträge, Gründung, Unternehmensführung, Streit unter Gesellschaftern.',
    hero: 'Unternehmensrecht: Vom Anfang bis zum Übergang',
    body: [
      'Wenn Sie eine Gesellschaft gründen, müssen viele Punkte beachtet werden, die in Zukunft gravierende wirtschaftliche Auswirkungen haben können.',
      'Wie soll der Wert des Gesellschaftsanteils eines Gesellschafters bei dessen Ausscheiden berechnet werden? Was passiert, wenn ein Gesellschafter stirbt? Wie wird man einen unbequemen Gesellschafter los? Was sind die Folgen einer Fehlerhaftigkeit bei der Einberufung der Generalversammlung?',
      'Wir beraten Sie bei Gründung, laufendem Geschäftsbetrieb, Umstrukturierungen, Anteilsübertragungen und Konflikten unter Gesellschaftern. Mit dem Blick fürs Detail und für die langfristigen Folgen.',
    ],
    closing: 'Lassen Sie sich beraten — bevor es teuer wird.',
    image: '/images/business.jpg',
  },
]
