import SectionHeading from '../SectionHeading.jsx'
import Reveal from '../Reveal.jsx'
import Button from '../Button.jsx'
import { ArrowIcon } from '../shared/Icons.jsx'
import { mainPracticeAreas } from '../../data/firm.js'
import './PriorityServices.css'

// The firm's top-level practice areas — reuses PriorityServices.css's
// editorial list treatment (same numbered-row pattern already proven
// for the immigration sub-services list further down this page) so
// this section doesn't introduce a new visual language.
export default function MainPracticeAreas() {
  return (
    <section className="section priority-services">
      <div className="container">
        <SectionHeading
          eyebrow="Practice Areas"
          title="How Rockville Law Group Can Help"
          zh="业务领域"
          lede="Rockville Law Group is a New York law firm representing individuals, families, and businesses across the following practice areas."
        />

        <ol className="priority-services__list">
          {mainPracticeAreas.map((area, i) => (
            <Reveal as="li" key={area.id} delay={i * 0.06} className="priority-services__row">
              <span className="priority-services__index">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="priority-services__name">
                {area.name}
                {area.nameZh && <span className="zh-label priority-services__name-zh">{area.nameZh}</span>}
              </h3>
              <p className="priority-services__desc">{area.short}</p>
              <Button to={area.to} variant="quiet" className="priority-services__cta">
                {area.cta} <ArrowIcon width={16} height={16} />
              </Button>
            </Reveal>
          ))}
        </ol>

        <Button to="/practice-areas" variant="quiet" className="priority-services__all">
          View All Practice Areas <ArrowIcon width={16} height={16} />
        </Button>
      </div>
    </section>
  )
}
