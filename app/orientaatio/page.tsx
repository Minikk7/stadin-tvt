import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { BackToHome } from "@/components/back-to-home"

export default function OrientaatioPage() {
  return (
    <>
      <PageHeader
        title="Orientaatio"
        description="Tervetuloa Stadin TVT-koulutukseen! Täältä löydät tärkeää tietoa opintojen aloittamisesta."
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <BackToHome />

        <ContentSection title="Opintojen aloittaminen">
          <p className="leading-relaxed mb-4">
            Tieto- ja viestintätekniikan perustutkinto on monipuolinen koulutus, joka antaa sinulle valmiudet
            työskennellä IT-alan eri tehtävissä. Koulutus kestää noin 3 vuotta ja sen laajuus on 180 osaamispistettä.
          </p>
          <p className="leading-relaxed">
            Opintojen alussa käyt läpi orientaatiojakson, jossa tutustut koulun toimintatapoihin, opiskeluympäristöön ja
            muihin opiskelijoihin. Orientaatio auttaa sinua pääsemään hyvin alkuun opinnoissasi.
          </p>
        </ContentSection>

        <ContentSection title="Tutkinnon rakenne">
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Ammatilliset tutkinnon osat (145 osp)</li>
            <li>Yhteiset tutkinnon osat (35 osp)</li>
            <li>Vapaasti valittavat tutkinnon osat (10 osp)</li>
          </ul>
        </ContentSection>

        <ContentSection title="Opiskelutavat">
          <p className="leading-relaxed mb-4">
            Opiskelu tapahtuu monipuolisesti eri oppimisympäristöissä. Käytössäsi on modernit tietotekniikkatilat,
            laboratoriot ja verkko-oppimisympäristöt.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Lähiopetus ja etäopiskelu</li>
            <li>Projektityöskentely</li>
            <li>Työpaikalla oppiminen</li>
            <li>Itsenäinen opiskelu</li>
          </ul>
        </ContentSection>

        <ContentSection title="Tärkeät järjestelmät">
          <p className="leading-relaxed mb-4">
            Opinnoissasi käytät useita eri järjestelmiä. Tutustu niihin heti opintojen alussa:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <strong>Wilma</strong> - opintojen seuranta ja viestintä
            </li>
            <li>
              <strong>Moodle</strong> - oppimisalusta ja materiaalit
            </li>
            <li>
              <strong>Office 365</strong> - sähköposti ja työkalut
            </li>
            <li>
              <strong>Teams</strong> - etäopetus ja yhteistyö
            </li>
          </ul>
        </ContentSection>
      </div>
    </>
  )
}
