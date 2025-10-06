import { BookOpen, Users, FileText, Calendar, Phone, LinkIcon, GraduationCap, Settings } from "lucide-react"
import { InfoCard } from "@/components/info-card"
import { CardGrid } from "@/components/card-grid"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Tervetuloa Stadin TVT-sivustolle</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 text-pretty leading-relaxed">
              Tieto- ja viestintätekniikan koulutuksen tietopankki Stadin ammatti- ja aikuisopistossa
            </p>
          </div>
        </div>
      </section>

      {/* Main Navigation Cards */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pääsivut</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Löydä tarvitsemasi tiedot koulutuksesta, tutkinnoista ja tukipalveluista
            </p>
          </div>

          <CardGrid columns={3}>
            <InfoCard
              icon={GraduationCap}
              title="Orientaatio"
              description="Aloita tästä - perustiedot koulutuksesta ja opinnoista"
              href="/orientaatio"
            />

            <InfoCard
              icon={FileText}
              title="Pakollinen tutkinnon osa"
              description="Tiedot pakollisista tutkinnon osista ja vaatimuksista"
              href="/pakollinen"
            />

            <InfoCard
              icon={BookOpen}
              title="Tutkintonimikkeet"
              description="Tutustu eri tutkintonimikkeisiin ja niiden sisältöihin"
              href="/tutkintonimikkeet/it-tukihenkilo"
            />

            <InfoCard
              icon={Settings}
              title="Valinnaiset tutkinnon osat"
              description="Valinnaiset opinnot ja erikoistumismahdollisuudet"
              href="/valinnaiset/front-end-ohjelmointi"
            />

            <InfoCard
              icon={Users}
              title="Yhteiset tutkinnon osat"
              description="Kaikille yhteiset opinnot ja taidot"
              href="/yhteiset/viestinta-vuorovaikutus"
            />

            <InfoCard
              icon={BookOpen}
              title="Wilma-perusteita"
              description="Ohjeet Wilma-järjestelmän käyttöön"
              href="/wilma"
            />

            <InfoCard
              icon={Calendar}
              title="Työ- ja loma-ajat"
              description="Lukuvuoden aikataulu ja loma-ajat"
              href="/tyo-ja-loma-ajat"
            />

            <InfoCard icon={Users} title="Henkilöstöä" description="Tutustu henkilökuntaamme" href="/henkilosto" />

            <InfoCard
              icon={Phone}
              title="Yhteystietoja"
              description="Ota yhteyttä - löydä oikeat yhteystiedot"
              href="/yhteystiedot"
            />

            <InfoCard
              icon={LinkIcon}
              title="Linkkejä"
              description="Hyödyllisiä linkkejä ja resursseja"
              href="/linkit"
            />
          </CardGrid>
        </div>
      </section>
    </>
  )
}
