import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { BackToHome } from "@/components/back-to-home"

export default function HyvinvointiteknologiaAsentajaPage() {
  return (
    <>
      <PageHeader
        title="Hyvinvointiteknologia-asentaja"
        description="Tutkintonimike: Hyvinvointiteknologia-asentaja - Teknologiaa ihmisten hyvinvoinnin tueksi"
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <BackToHome />

        <ContentSection title="Yleiskuvaus">
          <p className="leading-relaxed mb-4">
            Hyvinvointiteknologia-asentaja asentaa, huoltaa ja opastaa hyvinvointiteknologian laitteiden ja
            järjestelmien käytössä. Työ yhdistää teknisen osaamisen ja asiakaspalvelun erityisesti ikääntyneiden ja
            erityisryhmien parissa.
          </p>
        </ContentSection>

        <ContentSection title="Työtehtävät">
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Turvalaitteiden ja -järjestelmien asennus</li>
            <li>Etähoitoteknologian käyttöönotto</li>
            <li>Asiakkaiden koulutus ja opastus</li>
            <li>Laitteiden huolto ja ylläpito</li>
            <li>Vianmääritys ja korjaus</li>
            <li>Dokumentointi</li>
          </ul>
        </ContentSection>

        <ContentSection title="Työpaikat">
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Terveydenhuolto ja hoivapalvelut</li>
            <li>Hyvinvointiteknologiayritykset</li>
            <li>Kuntien sosiaali- ja terveyspalvelut</li>
          </ul>
        </ContentSection>
      </div>
    </>
  )
}
