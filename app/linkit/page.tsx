import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { BackToHome } from "@/components/back-to-home"
import { ExternalLink } from "lucide-react"

export default function LinkitPage() {
  return (
    <>
      <PageHeader title="Linkkejä" description="Hyödyllisiä linkkejä ja resursseja TVT-alan opiskeluun ja työhön" />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <BackToHome />

        <ContentSection title="Oppilaitoksen sivut">
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
              href="https://wilma.edu.hel.fi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:underline font-medium"
            >
              Wilma - opintojen seuranta
              <ExternalLink size={16} />
            </a>
            <a
              href="https://moodle.edu.hel.fi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:underline font-medium"
            >
              Moodle - oppimisalusta
              <ExternalLink size={16} />
            </a>
          </div>
        </ContentSection>

        <ContentSection title="Ohjelmointi ja kehitystyökalut">
          <div className="space-y-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:underline font-medium"
            >
              GitHub - versionhallinta
              <ExternalLink size={16} />
            </a>
            <a
              href="https://code.visualstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:underline font-medium"
            >
              Visual Studio Code - koodieditori
              <ExternalLink size={16} />
            </a>
            <a
              href="https://stackoverflow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:underline font-medium"
            >
              Stack Overflow - ohjelmoijan Q&A
              <ExternalLink size={16} />
            </a>
            <a
              href="https://developer.mozilla.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:underline font-medium"
            >
              MDN Web Docs - web-kehityksen dokumentaatio
              <ExternalLink size={16} />
            </a>
          </div>
        </ContentSection>

        <ContentSection title="Oppimisresurssit">
          <div className="space-y-3">
            <a
              href="https://www.codecademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:underline font-medium"
            >
              Codecademy - interaktiivinen ohjelmoinnin opiskelu
              <ExternalLink size={16} />
            </a>
            <a
              href="https://www.freecodecamp.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:underline font-medium"
            >
              freeCodeCamp - ilmainen ohjelmoinnin opiskelu
              <ExternalLink size={16} />
            </a>
            <a
              href="https://www.youtube.com/c/TraversyMedia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:underline font-medium"
            >
              Traversy Media - ohjelmoinnin videotutoriaalit
              <ExternalLink size={16} />
            </a>
            <a
              href="https://www.w3schools.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:underline font-medium"
            >
              W3Schools - web-teknologioiden oppiminen
              <ExternalLink size={16} />
            </a>
          </div>
        </ContentSection>

        <ContentSection title="IT-tuki ja tietoturva">
          <div className="space-y-3">
            <a
              href="https://www.kyberturvallisuuskeskus.fi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:underline font-medium"
            >
              Kyberturvallisuuskeskus
              <ExternalLink size={16} />
            </a>
            <a
              href="https://www.tietosuoja.fi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:underline font-medium"
            >
              Tietosuojavaltuutetun toimisto
              <ExternalLink size={16} />
            </a>
          </div>
        </ContentSection>

        <ContentSection title="Työelämä ja ura">
          <div className="space-y-3">
            <a
              href="https://www.te-palvelut.fi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:underline font-medium"
            >
              TE-palvelut - työnhaku ja urasuunnittelu
              <ExternalLink size={16} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:underline font-medium"
            >
              LinkedIn - ammatillinen verkostoituminen
              <ExternalLink size={16} />
            </a>
            <a
              href="https://www.duunitori.fi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:underline font-medium"
            >
              Duunitori - työpaikkailmoitukset
              <ExternalLink size={16} />
            </a>
          </div>
        </ContentSection>
      </div>
    </>
  )
}
