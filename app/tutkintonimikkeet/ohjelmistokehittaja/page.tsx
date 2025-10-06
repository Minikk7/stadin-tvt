import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { BackToHome } from "@/components/back-to-home"

export default function OhjelmistokehittajaPage() {
  return (
    <>
      <PageHeader
        title="Ohjelmistokehittäjä"
        description="Tutkintonimike: Ohjelmistokehittäjä - Luo digitaalisia ratkaisuja koodaamalla"
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <BackToHome />

        <ContentSection title="Yleiskuvaus">
          <p className="leading-relaxed mb-4">
            Ohjelmistokehittäjä suunnittelee, toteuttaa ja ylläpitää ohjelmistoja ja sovelluksia. Työ vaatii loogista
            ajattelua, ongelmanratkaisukykyä ja jatkuvaa oppimista uusien teknologioiden parissa.
          </p>
        </ContentSection>

        <ContentSection title="Työtehtävät">
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Ohjelmistojen suunnittelu ja toteutus</li>
            <li>Koodin kirjoittaminen ja testaaminen</li>
            <li>Ohjelmistojen ylläpito ja päivitys</li>
            <li>Versionhallinta ja dokumentointi</li>
            <li>Tietokantojen suunnittelu ja toteutus</li>
            <li>API-rajapintojen kehittäminen</li>
            <li>Käyttöliittymien suunnittelu ja toteutus</li>
            <li>Tiimityöskentely ja koodikatselmoinnit</li>
          </ul>
        </ContentSection>

        <ContentSection title="Osaaminen">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-3">Ohjelmointikielet ja teknologiat</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>JavaScript/TypeScript, Python, Java, C#</li>
                <li>HTML, CSS ja web-kehitys</li>
                <li>React, Vue tai Angular -kehykset</li>
                <li>Node.js ja backend-kehitys</li>
                <li>SQL ja tietokannat</li>
                <li>Git-versionhallinta</li>
                <li>REST API ja GraphQL</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3">Työelämätaidot</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Ongelmanratkaisukyky</li>
                <li>Looginen ajattelu</li>
                <li>Tiimityöskentely</li>
                <li>Projektinhallinta</li>
                <li>Jatkuva oppiminen</li>
                <li>Kommunikointi asiakkaiden kanssa</li>
              </ul>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Työpaikat">
          <p className="leading-relaxed mb-4">Ohjelmistokehittäjiä työllistävät mm:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Ohjelmistotalot ja IT-yritykset</li>
            <li>Digitaaliset palveluyritykset</li>
            <li>Pelialan yritykset</li>
            <li>Startup-yritykset</li>
            <li>Suuret yritykset ja konsernit</li>
            <li>Freelance-kehittäjänä</li>
          </ul>
        </ContentSection>

        <ContentSection title="Jatko-opinnot ja urapolku">
          <p className="leading-relaxed mb-4">Ohjelmistokehittäjän tutkinnon jälkeen voit erikoistua esimerkiksi:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Full Stack -kehittäjä</li>
            <li>Frontend- tai Backend-spesialisti</li>
            <li>Mobile-kehittäjä</li>
            <li>DevOps-insinööri</li>
            <li>Ohjelmistoarkkitehti</li>
            <li>Jatkaa opintoja ammattikorkeakoulussa tai yliopistossa</li>
          </ul>
        </ContentSection>
      </div>
    </>
  )
}
