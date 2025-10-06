import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { BackToHome } from "@/components/back-to-home"
import { ExternalLink } from "lucide-react"

export default function WilmaPage() {
  return (
    <>
      <PageHeader
        title="Wilma-perusteita"
        description="Ohjeet Wilma-järjestelmän käyttöön - opintojen seuranta ja viestintä"
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <BackToHome />

        <ContentSection title="Mikä on Wilma?">
          <p className="leading-relaxed mb-4">
            Wilma on Stadin ammatti- ja aikuisopiston käyttämä sähköinen oppimisen hallintajärjestelmä. Wilman kautta
            voit seurata opintojasi, tarkistaa aikataulusi, lukea viestejä ja pitää yhteyttä opettajiin.
          </p>
        </ContentSection>

        <ContentSection title="Kirjautuminen">
          <p className="leading-relaxed mb-4">
            Kirjaudu Wilmaan käyttämällä Helsingin kaupungin käyttäjätunnustasi ja salasanaasi. Saat tunnukset opintojen
            alussa.
          </p>
          <a
            href="https://wilma.edu.hel.fi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
          >
            Avaa Wilma
            <ExternalLink size={20} />
          </a>
        </ContentSection>

        <ContentSection title="Wilman päätoiminnot">
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Etusivu</h3>
              <p className="text-muted-foreground">
                Etusivulla näet tärkeimmät tiedot: tulevat tunnit, viestit, poissaolot ja arvosanat.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Lukujärjestys</h3>
              <p className="text-muted-foreground">
                Lukujärjestyksestä näet kaikki tunnit, niiden ajankohdat ja luokat. Voit tulostaa lukujärjestyksen tai
                viedä sen kalenteriin.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Viestit</h3>
              <p className="text-muted-foreground">
                Viestit-osiossa voit lähettää ja vastaanottaa viestejä opettajilta ja muilta henkilökunnan jäseniltä.
                Tarkista viestit säännöllisesti!
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Arvosanat</h3>
              <p className="text-muted-foreground">
                Arvosanat-sivulta näet kaikki saamasi arvosanat ja suoritetut opintojaksot. Voit myös seurata opintojen
                etenemistä.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Poissaolot</h3>
              <p className="text-muted-foreground">
                Poissaolot-sivulla näet kaikki poissaolosi. Muista ilmoittaa poissaoloista ajoissa!
              </p>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Vinkkejä Wilman käyttöön">
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Tarkista Wilma päivittäin - tärkeät tiedotteet tulevat Wilman kautta</li>
            <li>Pidä yhteystietosi ajan tasalla</li>
            <li>Vastaa viesteihin kohtuullisessa ajassa</li>
            <li>Ilmoita poissaoloista etukäteen kun mahdollista</li>
            <li>Seuraa opintojen etenemistä säännöllisesti</li>
          </ul>
        </ContentSection>
      </div>
    </>
  )
}
