import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import ContactLink from '../components/shared/ContactLink.jsx'
import ConsultationForm from '../components/ConsultationForm.jsx'
import LocationMap from '../components/LocationMap.jsx'
import WhatHappensNext from '../components/WhatHappensNext.jsx'
import WeChatCard from '../components/WeChatCard.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import { BriefcaseIcon, ArrowIcon, PinIcon } from '../components/shared/Icons.jsx'
import useDocumentTitle from '../lib/useDocumentTitle.js'
import useStructuredData from '../lib/useStructuredData.js'
import { legalServiceSchema, breadcrumbSchema } from '../lib/structuredData.js'
import { contact, offices, attorney, hours } from '../data/firm.js'
import { disclaimerZh } from '../data/firmZh.js'
import headshot from '../assets/li-weng-headshot.jpg'
import './Contact.css'

const BREADCRUMB_ITEMS = [
  { name: '首页', path: '/zh' },
  { name: '联系我们', path: '/zh/contact' },
]

export default function ContactZh() {
  useDocumentTitle(
    '联系我们 | Rockville Law Group 纽约法拉盛办公室',
    '联系 Rockville Law Group 纽约法拉盛办公室：电话、邮件或面谈预约咨询，可直接以中文沟通。',
    { lang: 'zh-Hans', alternatePath: '/contact' },
  )
  useStructuredData([legalServiceSchema(), breadcrumbSchema(BREADCRUMB_ITEMS)])

  return (
    <>
      <Breadcrumbs items={BREADCRUMB_ITEMS} />
      <section className="section section--tight contact-hero">
        <div className="container container--narrow">
          <span className="eyebrow">联系我们</span>
          <h1 className="contact-hero__title">联系 Rockville Law Group</h1>
          <p className="lede contact-hero__lede">
            如需预约咨询、讨论您的移民、家庭法、遗产规划或商业法律事务，请与我们联系。如果您是需要出庭代理协助的律师，可直接前往{' '}
            <Button to="/zh/attorney-hearing-coverage" variant="quiet">
              律师专区页面
            </Button>
            。
          </p>
        </div>
      </section>

      <section className="section contact-main">
        <div className="container contact-main__grid">
          <Reveal className="contact-info">
            <div className="contact-info__attorney">
              <img
                src={headshot}
                alt={`${attorney.name}，Rockville Law Group 创始合伙人`}
                className="photo-frame photo-frame--md contact-info__attorney-photo"
              />
              <div>
                <p className="contact-info__attorney-name">{attorney.name}</p>
                <p className="contact-info__attorney-title">Rockville Law Group 创始合伙人</p>
                <div className="contact-info__attorney-links">
                  <a href={attorney.profiles.justia} target="_blank" rel="noreferrer">
                    Justia 律师档案 ↗
                  </a>
                  <a href={attorney.profiles.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>

            <h2 className="contact-info__heading">联系方式</h2>
            <ul className="contact-info__list">
              <li>
                <ContactLink type="phone" value={contact.phone} source="contact_page" />
              </li>
              <li>
                <ContactLink type="phone" value={contact.phoneSecondary} source="contact_page" />
              </li>
              <li>
                <ContactLink type="email" value={contact.email} source="contact_page" />
              </li>
              <li>
                <ContactLink type="address" value={offices[0].address} source="contact_page" />
              </li>
            </ul>

            <h3 className="contact-info__subheading">办公时间</h3>
            <p className="contact-info__hours">{hours.labelZh}</p>

            <h3 className="contact-info__subheading">咨询方式</h3>
            <ul className="contact-info__tags">
              <li>面谈</li>
              <li>电话</li>
            </ul>

            <div className="contact-info__attorney-card">
              <BriefcaseIcon />
              <div>
                <h3>您是律师吗？</h3>
                <p>如需出庭代理或专业合作咨询，请前往律师专区页面。</p>
                <Button to="/zh/attorney-hearing-coverage" variant="quiet">
                  前往律师专区页面 <ArrowIcon width={16} height={16} />
                </Button>
              </div>
            </div>

            <WeChatCard />

            <p className="contact-info__disclaimer">{disclaimerZh}</p>
          </Reveal>

          <Reveal delay={0.1} id="consultation" className="contact-form-wrap">
            <SectionHeading eyebrow="咨询" title="预约咨询" />
            <ConsultationForm />
          </Reveal>
        </div>
      </section>

      <WhatHappensNext />

      <section className="section section--deep">
        <div className="container">
          <SectionHeading eyebrow="办公地点" title="我们的办公室" icon={PinIcon} />
          <LocationMap />
        </div>
      </section>
    </>
  )
}
