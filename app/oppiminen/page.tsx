import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { InfoCard } from "@/components/info-card"
import { CardGrid } from "@/components/card-grid"
import { BookOpen, Video, FileText, Globe } from "lucide-react"

export default function OppiminenPage() {
  return (
    <>
      <PageHeader
        title="Oppiminen"
        description="Digitaalisen oppimisen materiaalit ja ohjeet opiskeluun. Tutustu monipuolisiin oppimisresursseihin ja kehitä digitaalisia taitojasi."
      />

      <ContentSection title="Opiskelumateriaalit">
        <CardGrid columns={2}>
          <InfoCard
            icon={BookOpen}
            title="Digitaaliset oppimateriaalit"
            description="Kattava kokoelma digitaalisia oppimateriaaleja eri aihealueilta. Materiaalit on suunniteltu tukemaan itsenäistä opiskelua ja oppimista."
          />

          <InfoCard
            icon={Video}
            title="Video-oppaat"
            description="Selkeät video-ohjeet ja tutoriaalit, jotka auttavat sinua oppimaan uusia taitoja ja käyttämään erilaisia työkaluja tehokkaasti."
          />

          <InfoCard
            icon={FileText}
            title="Ohjeet ja dokumentaatio"
            description="Yksityiskohtaiset kirjalliset ohjeet ja dokumentaatio eri järjestelmien ja ohjelmistojen käyttöön."
          />

          <InfoCard
            icon={Globe}
            title="Verkko-oppimisympäristöt"
            description="Pääsy erilaisiin verkko-oppimisympäristöihin ja -alustoihin, jotka tukevat opiskeluasi."
          />
        </CardGrid>
      </ContentSection>

      <ContentSection className="bg-muted">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Oppimisen tuki</h2>
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              Tarjoamme monipuolista tukea digitaaliseen oppimiseen. Voit hyödyntää materiaalejamme itsenäisesti tai
              pyytää apua tukipalveluistamme.
            </p>
            <p className="leading-relaxed">
              Oppimismateriaalit päivitetään säännöllisesti vastaamaan uusimpia teknologioita ja opetusmenetelmiä. Jos
              et löydä etsimääsi materiaalia, ota yhteyttä tukikeskukseemme.
            </p>
          </div>

          <div className="mt-8 p-6 bg-secondary/10 border border-secondary/20 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-foreground">Tarvitsetko apua?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Jos tarvitset apua oppimismateriaalien käytössä tai sinulla on kysyttävää, älä epäröi ottaa yhteyttä.
              Olemme täällä auttamassa sinua onnistumaan opinnoissasi.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Oppimispolut</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-secondary pl-6">
              <h3 className="text-xl font-bold mb-2">Perustaidot</h3>
              <p className="text-muted-foreground leading-relaxed">
                Aloita tästä, jos olet uusi digitaalisten työkalujen käyttäjä. Opettele perusteet tietokoneen, tabletin
                ja älypuhelimen käytöstä.
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h3 className="text-xl font-bold mb-2">Edistyneet taidot</h3>
              <p className="text-muted-foreground leading-relaxed">
                Kehitä taitojasi edelleen ja opi käyttämään erikoistuneempia ohjelmistoja ja työkaluja. Syventävät
                kurssit ja materiaalit.
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h3 className="text-xl font-bold mb-2">Erikoisosaaminen</h3>
              <p className="text-muted-foreground leading-relaxed">
                Erikoistu tiettyyn osa-alueeseen, kuten ohjelmointiin, graafiseen suunnitteluun tai tietoturvaan.
                Ammattitason materiaalit ja projektit.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
