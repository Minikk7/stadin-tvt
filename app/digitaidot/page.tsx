import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { InfoCard } from "@/components/info-card"
import { CardGrid } from "@/components/card-grid"
import { Code, Shield, Cloud, Database, Palette, TrendingUp } from "lucide-react"

export default function DigitaidotPage() {
  return (
    <>
      <PageHeader
        title="Digitaidot"
        description="Kehitä tieto- ja viestintäteknologian taitojasi. Opettele uusia taitoja ja pysy ajan tasalla digitaalisen maailman kehityksestä."
      />

      <ContentSection title="Taitoalueet">
        <CardGrid columns={3}>
          <InfoCard
            icon={Code}
            title="Ohjelmointi"
            description="Opi ohjelmoimaan ja ymmärrä, miten digitaaliset palvelut toimivat. Perusteet edistyneempiin tekniikoihin."
          />

          <InfoCard
            icon={Shield}
            title="Tietoturva"
            description="Opettele suojaamaan tietosi ja toimimaan turvallisesti verkossa. Yksityisyys ja tietoturva."
          />

          <InfoCard
            icon={Cloud}
            title="Pilvipalvelut"
            description="Hyödynnä pilvipalveluita tehokkaasti opiskelussa ja työssä. Tiedostojen jakaminen ja yhteistyö."
          />

          <InfoCard
            icon={Database}
            title="Tiedonhallinta"
            description="Hallitse ja organisoi tietoa tehokkaasti. Tietokannat, taulukkolaskenta ja data-analyysi."
          />

          <InfoCard
            icon={Palette}
            title="Digitaalinen sisällöntuotanto"
            description="Luo ammattimaista digitaalista sisältöä. Kuvankäsittely, videoeditiointi ja graafinen suunnittelu."
          />

          <InfoCard
            icon={TrendingUp}
            title="Digitaalinen markkinointi"
            description="Ymmärrä digitaalisen markkinoinnin perusteet. Sosiaalinen media ja verkkonäkyvyys."
          />
        </CardGrid>
      </ContentSection>

      <ContentSection className="bg-muted">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Miksi digitaidot ovat tärkeitä?</h2>

          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              Digitaaliset taidot ovat nykyään välttämättömiä lähes kaikilla aloilla. Ne auttavat sinua opiskelussa,
              työssä ja arjessa. Vahvat digitaidot parantavat työllistymismahdollisuuksiasi ja tekevät sinusta
              tehokkaamman monissa tehtävissä.
            </p>
            <p className="leading-relaxed">
              Digitaalinen osaaminen ei ole vain teknisten taitojen hallintaa, vaan myös kykyä ajatella kriittisesti,
              ratkaista ongelmia ja oppia jatkuvasti uutta. Digitaalinen maailma kehittyy nopeasti, ja on tärkeää pysyä
              mukana muutoksessa.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Oppimispolkusi</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-secondary pl-6">
              <h3 className="text-xl font-bold mb-2">1. Perustaidot</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Aloita perustaidoista ja rakenna vahva pohja digitaaliselle osaamisellesi.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="leading-relaxed">Tietokoneen ja mobiililaitteiden käyttö</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="leading-relaxed">Internetin ja sähköpostin käyttö</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="leading-relaxed">Tekstinkäsittely ja esitysgrafiikka</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h3 className="text-xl font-bold mb-2">2. Keskitason taidot</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Syventävät taidot, jotka tekevät sinusta tehokkaamman digitaalisten työkalujen käyttäjän.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="leading-relaxed">Taulukkolaskenta ja data-analyysi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="leading-relaxed">Pilvipalveluiden hyödyntäminen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="leading-relaxed">Digitaalinen yhteistyö ja kommunikaatio</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h3 className="text-xl font-bold mb-2">3. Edistyneet taidot</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Erikoisosaaminen, joka erottaa sinut muista ja avaa uusia mahdollisuuksia.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="leading-relaxed">Ohjelmointi ja web-kehitys</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="leading-relaxed">Tietoturva ja yksityisyys</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="leading-relaxed">Digitaalinen sisällöntuotanto</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-foreground">Aloita oppiminen tänään</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Digitaalisten taitojen oppiminen on jatkuva prosessi. Aloita omalta tasoltasi ja etene omaan tahtiisi.
              Tarjoamme tukea ja ohjausta koko oppimispolullasi.
            </p>
            <a href="/oppiminen" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
              Tutustu oppimismateriaaleihin →
            </a>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
