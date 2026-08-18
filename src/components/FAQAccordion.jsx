import { useId, useState } from 'react'
import { ChevronIcon } from './shared/Icons.jsx'
import './FAQAccordion.css'

function FAQItem({ q, a, qZh, paragraphs, headingLevel: Heading = 'h3' }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const bodyParagraphs = paragraphs || (a ? [a] : [])

  return (
    <div className={`faq-item${open ? ' is-open' : ''}`}>
      <Heading className="faq-item__heading">
        <button
          type="button"
          className="faq-item__trigger"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
        >
          <span>
            {q}
            {qZh && <span className="zh-label faq-item__q-zh">{qZh}</span>}
          </span>
          <ChevronIcon className="faq-item__chevron" aria-hidden="true" />
        </button>
      </Heading>
      <div className="faq-item__panel" id={id} role="region">
        <div className="faq-item__panel-inner">
          {bodyParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function FAQAccordion({ items, headingLevel }) {
  return (
    <div className="faq-accordion">
      {items.map((item) => (
        <FAQItem key={item.q} {...item} headingLevel={headingLevel} />
      ))}
    </div>
  )
}
