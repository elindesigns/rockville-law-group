import Reveal from '../Reveal.jsx'
import Button from '../Button.jsx'
import { ArrowIcon } from '../shared/Icons.jsx'
import { attorney } from '../../data/firm.js'
import headshot from '../../assets/li-weng-headshot.jpg'
import './AttorneyTeaser.css'

export default function AttorneyTeaser() {
  return (
    <section className="section attorney-teaser">
      <div className="container attorney-teaser__inner">
        <Reveal>
          <img
            src={headshot}
            alt={`${attorney.name}, ${attorney.title}`}
            className="photo-frame photo-frame--lg attorney-teaser__photo"
          />
        </Reveal>
        <Reveal delay={0.1} className="attorney-teaser__content">
          <span className="eyebrow">Founding Attorney</span>
          <h2 className="attorney-teaser__name">{attorney.name}</h2>
          <p className="zh-label attorney-teaser__zh">创始律师</p>
          <p className="attorney-teaser__desc">{attorney.bio[0]}</p>
          <ul className="attorney-teaser__facts">
            <li>{attorney.yearsExperience} years of experience</li>
            <li>Admitted: {attorney.bar.map((b) => b.jurisdiction).join(' · ')}</li>
            <li>{attorney.languages.join(' · ')}</li>
          </ul>
          <div className="attorney-teaser__actions">
            <Button to="/about" variant="quiet">
              Read Li Weng's Full Profile <ArrowIcon width={16} height={16} />
            </Button>
            <div className="attorney-teaser__profiles">
              <a href={attorney.profiles.justia} target="_blank" rel="noreferrer">
                Justia ↗
              </a>
              <a href={attorney.profiles.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
