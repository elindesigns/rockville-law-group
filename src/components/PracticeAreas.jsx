import { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import FAQAccordion from './FAQAccordion.jsx'
import { ChevronIcon } from './shared/Icons.jsx'
import { practiceAreasIntro, practiceAreaCategories, citizenshipPracticeArea } from '../data/practiceAreas.js'
import './PracticeAreas.css'

const ALL_CATEGORIES = [...practiceAreaCategories, citizenshipPracticeArea]

function CategoryBox({ category, delay }) {
  const [expanded, setExpanded] = useState(false)
  const hasItems = category.items && category.items.length > 0

  return (
    <Reveal
      as="article"
      delay={delay}
      id={category.id}
      className={`practice-category${expanded ? ' is-open' : ''}`}
    >
      <h3 className="practice-category__name">
        {category.name}
        {category.zh && <span className="zh-label practice-category__zh">{category.zh}</span>}
      </h3>
      <p className="practice-category__desc">{category.description}</p>

      {hasItems && (
        <>
          <button
            type="button"
            className="practice-category__toggle"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? 'Show Less' : `Learn More — ${category.items.length} Visa Types`}
            <ChevronIcon className="practice-category__toggle-icon" aria-hidden="true" />
          </button>
          <div className="practice-category__items-panel">
            <div className="practice-category__items-inner">
              <FAQAccordion
                items={category.items.map((item) => ({ q: item.name, paragraphs: item.paragraphs }))}
                headingLevel="h4"
              />
            </div>
          </div>
        </>
      )}
    </Reveal>
  )
}

export default function PracticeAreas() {
  return (
    <section className="section section--deep practice-areas" id="practice-areas">
      <div className="container">
        <SectionHeading eyebrow="Full Practice Directory" title="Practice Areas" zh="业务范围" align="center" />
        <p className="lede lede--wide practice-areas__intro">{practiceAreasIntro}</p>

        <div className="practice-areas__grid">
          {ALL_CATEGORIES.map((cat, i) => (
            <CategoryBox key={cat.id} category={cat} delay={(i % 3) * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}
