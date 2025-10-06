import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { BackToHome } from "@/components/back-to-home"

export default function ITTukihenkiloPage() {
  return (
    <>
      <PageHeader
        title="IT-tukihenkilö"
        description="Tutkintonimike: IT-tukihenkilö - Asiakaspalvelua ja teknistä tukea"
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <BackToHome />

        <ContentSection title="Yleiskuvaus">
          <p className="leading-relaxed mb-4">
            IT-tukihenkilö auttaa käyttäjiä tietotekniikan ongelmissa ja vastaa laitteiden ja ohjelmistojen
            asennuksesta, ylläpidosta ja käyttötuesta. Työ on asiakaslähtöistä ja vaatii hyviä vuorovaikutustaitoja sekä
            teknistä osaamista.
          </p>
        </ContentSection>

        <ContentSection title="Työtehtävät">
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Käyttäjätuki ja ongelmanratkaisu</li>
            <li>Tietokoneiden ja oheislaitteiden asennus ja konfigurointi</li>
            <li>Ohjelmistojen asennus ja päivitys</li>
            <li>Verkkoyhteyksien vianmääritys</li>
            <li>Käyttäjätilien hallinta</li>
            <li>Tietoturvan ylläpito</li>
            <li>Dokumentointi ja ohjeistus</li>
            <li>Etätuki ja asiakaspalvelu</li>
          </ul>
        </ContentSection>

        <ContentSection title="Osaaminen">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-3">Tekniset taidot</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Windows- ja Linux-käyttöjärjestelmät</li>
                <li>Office-ohjelmistot ja yleisimmät sovellukset</li>
                <li>Verkkojen perusteet ja vianmääritys</li>
                <li>Tietoturva ja tietosuoja</li>
                <li>Laitteiston asennus ja huolto</li>
                <li>Etätukityökalut</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3">Vuorovaikutustaidot</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Asiakaspalvelu ja kommunikointi</li>
                <li>Ongelmanratkaisutaidot</li>
                <li>Kärsivällisyys ja empatia</li>
                <li>Selkeä ohjeistus ja dokumentointi</li>
                <li>Tiimityöskentely</li>
              </ul>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Työpaikat">
          <p className="leading-relaxed mb-4">IT-tukihenkilöitä työllistävät mm:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Yritykset ja organisaatiot (sisäinen IT-tuki)</li>
            <li>IT-palveluyritykset</li>
            <li>Tietotekniikan jälleenmyyjät</li>
            <li>Oppilaitokset ja julkinen sektori</li>
            <li>Etätukipalvelut</li>
          </ul>
        </ContentSection>

        <ContentSection title="Jatko-opinnot ja urapolku">
          <p className="leading-relaxed mb-4">IT-tukihenkilön tutkinnon jälkeen voit erikoistua esimerkiksi:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Järjestelmäasiantuntija</li>
            <li>Verkkoasiantuntija</li>
            <li>Tietoturva-asiantuntija</li>
            <li>IT-palvelupäällikkö</li>
            <li>Jatkaa opintoja ammattikorkeakoulussa</li>
          </ul>
        </ContentSection>
      </div>
    </>
  )
}
