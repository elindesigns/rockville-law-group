import SectionHeading from '../SectionHeading.jsx'
import Reveal from '../Reveal.jsx'
import { CheckIcon } from '../shared/Icons.jsx'
import './WhyRockville.css'

// Every point here traces to a specific, verifiable fact in data/firm.js
// (bio, bar admissions, appearanceCourts, offices, hearingCoverage) and
// states why it matters to a prospective client — not a generic trust
// claim. See ForAttorneys.jsx's "Why Attorneys Work With Rockville Law
// Group" for the separate, credentials-verification version aimed at
// attorneys; this section is written for clients and deliberately
// doesn't repeat that framing.
const POINTS = [
  {
    kicker: 'Cross-Border Background',
    zh: '中国执业背景',
    title: 'Practiced Law in China Before Immigration Law',
    description:
      'Before earning her LL.M. and building her U.S. practice, Li Weng was a practicing attorney in Wuhan, China, advising on cross-border legal and financial matters. Clients get an attorney who understands both legal systems firsthand, not just the language.',
  },
  {
    kicker: 'Direct Communication',
    zh: '双语直接代理',
    title: 'Bilingual Representation, Not Interpreted',
    description:
      'Consultations and representation are conducted directly in English or Mandarin Chinese. Case details reach the attorney handling your matter without translation loss.',
  },
  {
    kicker: 'One Firm, Related Needs',
    zh: '移民家庭遗产商法一体化',
    title: 'Immigration, Family, Estate & Business Law Together',
    description:
      'Related needs (a will alongside a green card case, a business matter alongside a family petition) can be handled together, instead of starting over elsewhere.',
  },
  {
    kicker: 'An Appearing Practice',
    zh: '实际出庭经验',
    title: 'Regular Courtroom Experience',
    description:
      'Li Weng appears in immigration court, in federal court in New York and Maryland, and in New York and D.C. state courts, and also covers immigration hearings for other attorneys.',
  },
  {
    kicker: 'Built for Access',
    zh: '法拉盛办公室',
    title: 'A Flushing Office Near Transit',
    description:
      'The office sits in downtown Flushing, steps from the Flushing–Main St subway and LIRR station, with consultations available in person or by phone.',
  },
]

export default function WhyRockville() {
  return (
    <section className="section section--deep why-rlg">
      <div className="container">
        <SectionHeading
          eyebrow="Why Rockville Law Group"
          title="How This Firm Is Different"
          zh="律所的不同之处"
          align="center"
          icon={CheckIcon}
        />
        <div className="why-rlg__grid">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="why-rlg__item">
              <span className="why-rlg__stat">{p.kicker}</span>
              <h3 className="why-rlg__title">
                {p.title}
                <span className="zh-label why-rlg__title-zh">{p.zh}</span>
              </h3>
              <p className="why-rlg__desc">{p.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
