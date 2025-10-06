import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { InfoCard } from "@/components/info-card"
import { CardGrid } from "@/components/card-grid"
import { Laptop, Tablet, Smartphone, Monitor, Printer, Wifi } from "lucide-react"

export default function LaitteetPage() {
  return (
    <>
      <PageHeader
        title="Laitteet"
        description="Ohjeet koulun laitteiden ja järjestelmien käyttöön. Löydä tarvitsemasi tiedot eri laitteiden käytöstä ja ongelmien ratkaisusta."
      />

      <ContentSection title="Laitteiden käyttöohjeet">
        <CardGrid columns={3}>
          <InfoCard
            icon={Laptop}
            title="Tietokoneet"
            description="Ohjeet koulun tietokoneiden käyttöön, kirjautumiseen ja yleisimpien ohjelmistojen käyttöön."
          />

          <InfoCard
            icon={Tablet}
            title="Tabletit"
            description="Tablettien käyttöohjeet, sovellusten asentaminen ja peruskäyttö oppimisessa."
          />

          <InfoCard
            icon={Smartphone}
            title="Älypuhelimet"
            description="Ohjeet älypuhelimien käyttöön opiskelussa ja koulun palveluiden käyttämiseen."
          />

          <InfoCard
            icon={Monitor}
            title="Näytöt ja projektorit"
            description="Ulkoisten näyttöjen ja projektorien liittäminen ja käyttö esityksissä."
          />

          <InfoCard
            icon={Printer}
            title="Tulostimet"
            description="Tulostaminen koulun tulostimilla, skannaus ja kopiointi."
          />

          <InfoCard
            icon={Wifi}
            title="Verkko ja yhteydet"
            description="Yhteyden muodostaminen koulun verkkoon ja yleisimmät verkko-ongelmat."
          />
        </CardGrid>
      </ContentSection>

      <ContentSection className="bg-muted">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Yleisiä ohjeita</h2>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Kirjautuminen</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="leading-relaxed">Käytä koulun antamia käyttäjätunnuksia ja salasanaa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="leading-relaxed">Vaihda salasanasi säännöllisesti tietoturvan vuoksi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="leading-relaxed">Älä jaa tunnuksiasi muille opiskelijoille</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Laitteiden käyttö</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="leading-relaxed">Käsittele laitteita huolellisesti ja vastuullisesti</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="leading-relaxed">Ilmoita vioista ja ongelmista välittömästi tukipalveluun</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="leading-relaxed">
                    Tallenna työsi säännöllisesti ja varmuuskopioi tärkeät tiedostot
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Verkkoyhteys</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="leading-relaxed">
                    Yhdistä koulun langattomaan verkkoon käyttäen koulun tunnuksia
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="leading-relaxed">
                    Jos yhteys ei toimi, tarkista että olet valinnut oikean verkon
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="leading-relaxed">Ongelmatilanteissa ota yhteyttä IT-tukeen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-3xl">
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-foreground">Tarvitsetko lisäapua?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Jos et löydä tarvitsemaasi ohjetta tai sinulla on ongelmia laitteiden kanssa, ota yhteyttä
              tukipalveluumme. Autamme mielellämme!
            </p>
            <a
              href="/tukipalvelut"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              Siirry tukipalveluihin →
            </a>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
