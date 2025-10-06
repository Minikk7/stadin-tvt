import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { BackToHome } from "@/components/back-to-home"

export default function FrontEndOhjelmointiPage() {
  return (
    <>
      <PageHeader
        title="Front end -ohjelmointi"
        description="Valinnainen tutkinnon osa, 15 osp - Luo moderneja käyttöliittymiä"
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <BackToHome />

        <ContentSection title="Kuvaus">
          <p className="leading-relaxed mb-4">
            Front end -ohjelmoinnissa opit luomaan moderneja, responsiivisia ja käyttäjäystävällisiä
            web-käyttöliittymiä. Opit käyttämään HTML:ää, CSS:ää ja JavaScriptiä sekä moderneja JavaScript-kehyksiä.
          </p>
        </ContentSection>

        <ContentSection title="Ammattitaitovaatimukset">
          <p className="leading-relaxed mb-4">Opiskelija osaa:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Toteuttaa responsiivisia web-käyttöliittymiä HTML:llä ja CSS:llä</li>
            <li>Käyttää JavaScriptiä käyttöliittymän toiminnallisuuksien toteuttamiseen</li>
            <li>Hyödyntää JavaScript-kehyksiä (React, Vue tai Angular)</li>
            <li>Integroida käyttöliittymä backend-palveluihin API:en kautta</li>
            <li>Testata ja debugata käyttöliittymäkoodia</li>
            <li>Käyttää versionhallintaa ja työkaluja</li>
            <li>Ottaa huomioon käytettävyyden ja saavutettavuuden</li>
          </ul>
        </ContentSection>

        <ContentSection title="Sisältö">
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">HTML ja CSS</h3>
              <p className="text-muted-foreground">
                Semanttinen HTML, CSS-layout (Flexbox, Grid), responsiivinen suunnittelu, CSS-preprocessorit
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">JavaScript</h3>
              <p className="text-muted-foreground">
                ES6+ -syntaksi, DOM-manipulointi, asynkroninen ohjelmointi, API-kutsut
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">JavaScript-kehykset</h3>
              <p className="text-muted-foreground">
                React, Vue tai Angular -kehyksen perusteet, komponenttipohjainen kehitys, state management
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Työkalut</h3>
              <p className="text-muted-foreground">Git-versionhallinta, npm/yarn, build-työkalut, kehitysympäristöt</p>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Arviointi">
          <p className="leading-relaxed">
            Tutkinnon osa arvioidaan asteikolla Kiitettävä (K3), Hyvä (H2) ja Tyydyttävä (T1). Arviointi perustuu
            käytännön projekteihin ja näyttöihin, joissa opiskelija osoittaa osaamisensa.
          </p>
        </ContentSection>
      </div>
    </>
  )
}
