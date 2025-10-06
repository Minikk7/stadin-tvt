import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { BackToHome } from "@/components/back-to-home"

export default function TyoJaLomaAjatPage() {
  return (
    <>
      <PageHeader title="Työ- ja loma-ajat" description="Lukuvuoden aikataulu, loma-ajat ja tärkeät päivämäärät" />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <BackToHome />

        <ContentSection title="Lukuvuosi 2024-2025">
          <p className="leading-relaxed mb-6">
            Lukuvuosi noudattaa Helsingin kaupungin koulujen yhteistä aikataulua. Alla on tärkeimmät päivämäärät ja
            loma-ajat.
          </p>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Syyslukukausi 2024</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong>Opetus alkaa:</strong> 12.8.2024
                </li>
                <li>
                  <strong>Syysloma:</strong> 21.10. - 25.10.2024
                </li>
                <li>
                  <strong>Joululoma:</strong> 23.12.2024 - 6.1.2025
                </li>
                <li>
                  <strong>Opetus päättyy:</strong> 20.12.2024
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Kevätlukukausi 2025</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong>Opetus alkaa:</strong> 7.1.2025
                </li>
                <li>
                  <strong>Talviloma:</strong> 24.2. - 28.2.2025
                </li>
                <li>
                  <strong>Pääsiäisloma:</strong> 17.4. - 22.4.2025
                </li>
                <li>
                  <strong>Opetus päättyy:</strong> 30.5.2025
                </li>
              </ul>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Arkipyhät ja vapaapäivät">
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Itsenäisyyspäivä 6.12.2024</li>
            <li>Laskiainen 4.3.2025</li>
            <li>Pitkäperjantai 18.4.2025</li>
            <li>Toinen pääsiäispäivä 21.4.2025</li>
            <li>Vappu 1.5.2025</li>
            <li>Helatorstai 29.5.2025</li>
          </ul>
        </ContentSection>

        <ContentSection title="Työpaikalla oppiminen">
          <p className="leading-relaxed mb-4">
            Työpaikalla oppimisen jaksot sovitaan yksilöllisesti opettajan kanssa. Tyypillisesti työpaikalla oppimisen
            jaksot sijoittuvat:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Syyslukukausi: marras-joulukuu</li>
            <li>Kevätlukukausi: maalis-toukokuu</li>
          </ul>
        </ContentSection>

        <ContentSection title="Huomioitavaa">
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Tarkista aina ajantasaiset aikataulut Wilmasta</li>
            <li>Poikkeukset aikatauluihin ilmoitetaan Wilman kautta</li>
            <li>Työpaikalla oppimisen ajat voivat poiketa yleisestä aikataulusta</li>
            <li>Etäopetuspäivät merkitään lukujärjestykseen erikseen</li>
          </ul>
        </ContentSection>
      </div>
    </>
  )
}
