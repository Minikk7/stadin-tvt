import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { BackToHome } from "@/components/back-to-home"

export default function ElektroniikkaAsentajaPage() {
  return (
    <>
      <PageHeader
        title="Elektroniikka-asentaja"
        description="Tutkintonimike: Elektroniikka-asentaja - Asenna ja huolla elektroniikkalaitteita"
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <BackToHome />

        <ContentSection title="Yleiskuvaus">
          <p className="leading-relaxed mb-4">
            Elektroniikka-asentaja asentaa, huoltaa ja korjaa elektroniikkalaitteita ja -järjestelmiä. Työ vaatii
            tarkkuutta, teknistä ymmärrystä ja käytännön taitoja.
          </p>
        </ContentSection>

        <ContentSection title="Työtehtävät">
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Elektroniikkalaitteiden asennus ja käyttöönotto</li>
            <li>Laitteiden huolto ja korjaus</li>
            <li>Vianmääritys ja testaus</li>
            <li>Piirikorttien juottaminen ja korjaus</li>
            <li>Kaapelointityöt</li>
            <li>Dokumentointi ja raportointi</li>
            <li>Asiakasneuvonta</li>
          </ul>
        </ContentSection>

        <ContentSection title="Osaaminen">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-3">Tekniset taidot</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Elektroniikan perusteet ja komponentit</li>
                <li>Piirikaavioiden lukeminen</li>
                <li>Mittalaitteiden käyttö (yleismittari, oskilloskooppi)</li>
                <li>Juottaminen ja komponenttien vaihto</li>
                <li>Mikrokontrollerit ja sulautetut järjestelmät</li>
                <li>Tietoturva ja turvallisuusmääräykset</li>
              </ul>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Työpaikat">
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Elektroniikkavalmistajat</li>
            <li>Huolto- ja korjaamot</li>
            <li>Teollisuusyritykset</li>
            <li>Automaatioyritykset</li>
          </ul>
        </ContentSection>
      </div>
    </>
  )
}
