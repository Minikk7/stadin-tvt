import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { InfoCard } from "@/components/info-card"
import { CardGrid } from "@/components/card-grid"
import { Mail, Phone, MessageCircle, Clock, MapPin } from "lucide-react"

export default function TukipalvelutPage() {
  return (
    <>
      <PageHeader
        title="Tukipalvelut"
        description="IT-tuki ja tekninen apu opiskelijoille ja henkilökunnalle. Olemme täällä auttamassa sinua kaikissa teknologiaan liittyvissä kysymyksissä."
      />

      <ContentSection title="Ota yhteyttä">
        <CardGrid columns={3}>
          <InfoCard
            icon={Mail}
            title="Sähköposti"
            description="Lähetä meille sähköpostia ja vastaamme mahdollisimman pian."
          />

          <InfoCard icon={Phone} title="Puhelin" description="Soita tukipalveluumme arkisin klo 8-16." />

          <InfoCard icon={MessageCircle} title="Chat-tuki" description="Pikatuki chat-palvelun kautta arkisin." />
        </CardGrid>
      </ContentSection>

      <ContentSection className="bg-muted">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Tukipalvelun aukioloajat</h2>

          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Aukioloajat</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-foreground">Maanantai - Perjantai:</span> 8:00 - 16:00
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-foreground">Lauantai - Sunnuntai:</span> Suljettu
                  </p>
                  <p className="text-sm mt-4 leading-relaxed">
                    Kiireellisissä tapauksissa voit jättää viestin sähköpostiin, ja vastaamme seuraavana arkipäivänä.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Sijainti</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tukipalvelumme sijaitsee koulun päärakennuksessa. Voit tulla paikan päälle aukioloaikoina, jos
                  tarvitset henkilökohtaista apua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Miten voimme auttaa?</h2>

          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Tekniset ongelmat</h3>
              <p className="text-muted-foreground leading-relaxed">
                Autamme kaikissa teknisiin laitteisiin ja ohjelmistoihin liittyvissä ongelmissa. Kirjautumisongelmat,
                verkko-ongelmat, ohjelmistojen asennus ja käyttö.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Käyttäjätunnukset</h3>
              <p className="text-muted-foreground leading-relaxed">
                Apu käyttäjätunnusten ja salasanojen kanssa. Salasanan nollaus, tunnusten aktivointi ja käyttöoikeuksien
                hallinta.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Ohjelmistot ja sovellukset</h3>
              <p className="text-muted-foreground leading-relaxed">
                Neuvonta erilaisten ohjelmistojen ja sovellusten käytössä. Asennus, päivitykset ja käyttöohjeet.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Verkko-oppimisympäristöt</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tuki verkko-oppimisympäristöjen käytössä. Materiaalien lataaminen, tehtävien palauttaminen ja yleinen
                käyttö.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-secondary/10 border border-secondary/20 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-foreground">Ennen yhteydenottoa</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Voit nopeuttaa asian käsittelyä valmistautumalla etukäteen:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold mt-1">•</span>
                <span className="leading-relaxed">Kerro tarkasti, mikä ongelma on ja milloin se ilmenee</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold mt-1">•</span>
                <span className="leading-relaxed">Mainitse käyttämäsi laite ja ohjelmisto</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold mt-1">•</span>
                <span className="leading-relaxed">Kerro, mitä olet jo yrittänyt tehdä ongelman ratkaisemiseksi</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
