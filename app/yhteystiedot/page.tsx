import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { BackToHome } from "@/components/back-to-home"
import { Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react"

export default function YhteystiedotPage() {
  return (
    <>
      <PageHeader
        title="Yhteystiedot"
        description="Ota yhteyttä Stadin TVT-tukikeskukseen. Olemme täällä auttamassa sinua kaikissa teknologiaan liittyvissä kysymyksissä."
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <BackToHome />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sähköposti</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Lähetä meille sähköpostia ja vastaamme mahdollisimman pian.
                  </p>
                  <a href="mailto:tvt@stadin.fi" className="text-secondary hover:underline font-medium">
                    tvt@stadin.fi
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Puhelin</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">Soita meille arkisin klo 8-16.</p>
                  <a href="tel:+358931087000" className="text-secondary hover:underline font-medium">
                    +358 9 310 87000
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sijainti</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Stadin ammatti- ja aikuisopisto
                    <br />
                    Helsinki, Suomi
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Aukioloajat</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Maanantai - Perjantai: 8:00 - 16:00
                    <br />
                    Lauantai - Sunnuntai: Suljettu
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Hyödyllisiä linkkejä</h2>
            <div className="space-y-3">
              <a
                href="https://www.hel.fi/stadin-ammattiopisto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary hover:underline font-medium"
              >
                Stadin ammatti- ja aikuisopisto
                <ExternalLink size={16} />
              </a>
              <a
                href="https://www.hel.fi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary hover:underline font-medium"
              >
                Helsingin kaupunki
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-secondary/10 border border-secondary/20 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-foreground">Tarvitsetko kiireellistä apua?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Jos sinulla on kiireellinen tekninen ongelma, joka estää opiskelusi, ota yhteyttä puhelimitse tai
              sähköpostitse. Pyrimme vastaamaan kaikkiin yhteydenottoihin mahdollisimman nopeasti.
            </p>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
