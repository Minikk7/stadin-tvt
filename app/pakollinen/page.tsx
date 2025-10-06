import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { BackToHome } from "@/components/back-to-home"

export default function PakollinenPage() {
  return (
    <>
      <PageHeader
        title="Pakollinen tutkinnon osa"
        description="Kaikille yhteiset pakolliset opinnot, jotka jokaisen opiskelijan tulee suorittaa."
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <BackToHome />

        <ContentSection title="Yleistä">
          <p className="leading-relaxed mb-4">
            Pakollinen tutkinnon osa muodostaa perustan kaikille TVT-alan opinnoille. Nämä opinnot antavat sinulle
            tarvittavat perustaidot ja -tiedot, joita tarvitset riippumatta siitä, minkä tutkintonimikkeen valitset.
          </p>
        </ContentSection>

        <ContentSection title="Pakolliset ammatilliset tutkinnon osat">
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Tietotekniikan perustehtävät</h3>
              <p className="text-muted-foreground mb-2">
                <strong>Laajuus:</strong> 45 osaamispistettä
              </p>
              <p className="leading-relaxed text-muted-foreground mb-4">
                Tässä tutkinnon osassa opit tietotekniikan perusteet, laitteiston ja ohjelmistojen käytön sekä
                perusongelmien ratkaisun.
              </p>
              <h4 className="font-bold mb-2">Ammattitaitovaatimukset:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Käyttää tietoteknisiä laitteita ja ohjelmistoja</li>
                <li>Asentaa ja konfiguroida tietokoneita</li>
                <li>Ratkaista perustason teknisiä ongelmia</li>
                <li>Toimia asiakaspalvelutilanteissa</li>
                <li>Noudattaa tietoturvakäytäntöjä</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Ohjelmoinnin perusteet</h3>
              <p className="text-muted-foreground mb-2">
                <strong>Laajuus:</strong> 45 osaamispistettä
              </p>
              <p className="leading-relaxed text-muted-foreground mb-4">
                Opit ohjelmointikielen perusteet ja ymmärrät ohjelmistojen toimintalogiikan.
              </p>
              <h4 className="font-bold mb-2">Ammattitaitovaatimukset:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Käyttää ohjelmointikieltä</li>
                <li>Ymmärtää ohjelmointilogiikkaa</li>
                <li>Testata ja debugata koodia</li>
                <li>Käyttää versionhallintaa</li>
                <li>Dokumentoida koodia</li>
              </ul>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Arviointi">
          <p className="leading-relaxed mb-4">
            Pakolliset tutkinnon osat arvioidaan asteikolla Kiitettävä (K3), Hyvä (H2) ja Tyydyttävä (T1). Arviointi
            perustuu ammattitaidon osoittamiseen käytännön työtehtävissä ja näyttöihin.
          </p>
        </ContentSection>
      </div>
    </>
  )
}
