import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { BackToHome } from "@/components/back-to-home"

export default function TietoverkkoasentajaPage() {
  return (
    <>
      <PageHeader
        title="Tietoverkkoasentaja"
        description="Tutkintonimike: Tietoverkkoasentaja - Rakenna ja ylläpidä tietoliikenneverkkoja"
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <BackToHome />

        <ContentSection title="Yleiskuvaus">
          <p className="leading-relaxed mb-4">
            Tietoverkkoasentaja asentaa, konfiguroi ja ylläpitää tietoverkkoja ja niiden laitteita. Työ on
            käytännönläheistä ja vaatii sekä teknistä osaamista että ongelmanratkaisukykyä.
          </p>
        </ContentSection>

        <ContentSection title="Työtehtävät">
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Verkkokaapelointien asennus ja testaus</li>
            <li>Verkkolaitteiden asennus ja konfigurointi</li>
            <li>Langattomien verkkojen suunnittelu ja toteutus</li>
            <li>Verkon vianmääritys ja korjaus</li>
            <li>Verkkoturvallisuuden ylläpito</li>
            <li>Dokumentointi ja kaavioiden piirtäminen</li>
            <li>Asiakasneuvonta ja koulutus</li>
          </ul>
        </ContentSection>

        <ContentSection title="Osaaminen">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-3">Tekniset taidot</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>TCP/IP-protokollat ja verkkoarkkitehtuurit</li>
                <li>Kytkimet, reitittimet ja palomuurit</li>
                <li>VLAN ja verkkojen segmentointi</li>
                <li>Langattoman verkon teknologiat (Wi-Fi)</li>
                <li>Kaapelointi ja strukturoitu kaapelointi</li>
                <li>Verkkomonitorointi ja vianmääritystyökalut</li>
                <li>Cisco, Juniper tai vastaavat laitteet</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3">Käytännön taidot</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Kaapeleiden päättäminen ja testaus</li>
                <li>Laitteiden asennus ja kiinnitys</li>
                <li>Mittalaitteiden käyttö</li>
                <li>Turvallisuusmääräysten noudattaminen</li>
                <li>Dokumentointi ja raportointi</li>
              </ul>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Työpaikat">
          <p className="leading-relaxed mb-4">Tietoverkkoasentajia työllistävät mm:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Tietoliikenneoperaattorit</li>
            <li>IT-palveluyritykset</li>
            <li>Sähköasennus- ja teletoimialat</li>
            <li>Yritykset ja organisaatiot (sisäinen IT)</li>
            <li>Datakeskukset</li>
          </ul>
        </ContentSection>

        <ContentSection title="Sertifikaatit ja jatko-opinnot">
          <p className="leading-relaxed mb-4">
            Tietoverkkoasentajan tutkinnon jälkeen voit hankkia ammattisertifikaatteja:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Cisco CCNA (Certified Network Associate)</li>
            <li>CompTIA Network+</li>
            <li>Erikoistua verkkoturvallisuuteen</li>
            <li>Verkkosuunnittelija tai -arkkitehti</li>
            <li>Jatkaa opintoja ammattikorkeakoulussa</li>
          </ul>
        </ContentSection>
      </div>
    </>
  )
}
