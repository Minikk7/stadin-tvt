import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { BackToHome } from "@/components/back-to-home"

export default function KyberturvallisuusPage() {
  return (
    <>
      <PageHeader
        title="Kyberturvallisuuden ylläpitäminen"
        description="Valinnainen tutkinnon osa, 30 osp - Suojaa järjestelmiä ja tietoja"
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <BackToHome />

        <ContentSection title="Kuvaus">
          <p className="leading-relaxed mb-4">
            Kyberturvallisuuden ylläpitämisessä opit tunnistamaan tietoturvauhkia, suojaamaan järjestelmiä ja reagoimaan
            tietoturvapoikkeamiin. Opinnot antavat valmiudet toimia tietoturva-alan tehtävissä.
          </p>
        </ContentSection>

        <ContentSection title="Ammattitaitovaatimukset">
          <p className="leading-relaxed mb-4">Opiskelija osaa:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Tunnistaa ja arvioida tietoturvauhkia</li>
            <li>Toteuttaa tietoturvakäytäntöjä ja -politiikkoja</li>
            <li>Suojata verkkoja ja järjestelmiä</li>
            <li>Käyttää tietoturvatyökaluja ja -teknologioita</li>
            <li>Reagoida tietoturvapoikkeamiin</li>
            <li>Dokumentoida tietoturvatoimenpiteitä</li>
            <li>Kouluttaa käyttäjiä tietoturvasta</li>
          </ul>
        </ContentSection>

        <ContentSection title="Sisältö">
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Tietoturvan perusteet</h3>
              <p className="text-muted-foreground">
                CIA-triad (luottamuksellisuus, eheys, saatavuus), uhkamallit, riskienhallinta
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Verkkoturvallisuus</h3>
              <p className="text-muted-foreground">
                Palomuurit, VPN, IDS/IPS, verkkomonitorointi, turvallinen konfigurointi
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Järjestelmäturvallisuus</h3>
              <p className="text-muted-foreground">
                Käyttöjärjestelmien suojaus, päivitykset, käyttäjähallinta, salaus
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Tietoturvapoikkeamat</h3>
              <p className="text-muted-foreground">Poikkeamien tunnistaminen, reagointi, forensiikka, raportointi</p>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Uramahdollisuudet">
          <p className="leading-relaxed mb-4">Kyberturvallisuuden osaaminen avaa ovia monenlaisiin tehtäviin:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Tietoturva-asiantuntija</li>
            <li>SOC-analyytikko (Security Operations Center)</li>
            <li>Penetraatiotestaaja</li>
            <li>Tietoturvavalvoja</li>
            <li>IT-turvallisuuspäällikkö</li>
          </ul>
        </ContentSection>
      </div>
    </>
  )
}
