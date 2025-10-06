import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { BackToHome } from "@/components/back-to-home"

export default function ViestintaVuorovaikutusPage() {
  return (
    <>
      <PageHeader
        title="Viestintä- ja vuorovaikutusosaaminen"
        description="Yhteinen tutkinnon osa - Kommunikoi tehokkaasti työelämässä"
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <BackToHome />

        <ContentSection title="Kuvaus">
          <p className="leading-relaxed mb-4">
            Viestintä- ja vuorovaikutusosaaminen on kaikille yhteinen tutkinnon osa, joka kehittää opiskelijan
            kommunikaatiotaitoja työelämää varten. Opit ilmaisemaan itseäsi selkeästi, toimimaan erilaisissa
            vuorovaikutustilanteissa ja käyttämään erilaisia viestintäkanavia.
          </p>
        </ContentSection>

        <ContentSection title="Ammattitaitovaatimukset">
          <p className="leading-relaxed mb-4">Opiskelija osaa:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Viestiä suullisesti ja kirjallisesti työelämän tilanteissa</li>
            <li>Toimia vuorovaikutustilanteissa</li>
            <li>Käyttää erilaisia viestintäkanavia ja -välineitä</li>
            <li>Etsiä, arvioida ja käyttää tietoa</li>
            <li>Toimia monikulttuurisissa ympäristöissä</li>
            <li>Käyttää vierasta kieltä työelämän tilanteissa</li>
          </ul>
        </ContentSection>

        <ContentSection title="Sisältö">
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Suullinen viestintä</h3>
              <p className="text-muted-foreground">
                Esitykset, palaverit, asiakaspalvelu, puheviestintä, kuunteleminen
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Kirjallinen viestintä</h3>
              <p className="text-muted-foreground">
                Raportit, sähköpostit, dokumentointi, asiakirjat, tekstin tuottaminen
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Digitaalinen viestintä</h3>
              <p className="text-muted-foreground">
                Sosiaalinen media, videoneuvottelut, yhteistyötyökalut, verkkoviestintä
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Tiedonhankinta</h3>
              <p className="text-muted-foreground">
                Tietolähteiden arviointi, lähdekritiikki, tiedon käyttö, tekijänoikeudet
              </p>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Arviointi">
          <p className="leading-relaxed">
            Tutkinnon osa arvioidaan asteikolla Kiitettävä (K3), Hyvä (H2) ja Tyydyttävä (T1). Arviointi perustuu
            erilaisiin viestintätehtäviin ja näyttöihin työelämän tilanteissa.
          </p>
        </ContentSection>
      </div>
    </>
  )
}
