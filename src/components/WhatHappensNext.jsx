import { useLocation } from 'react-router-dom'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import './WhatHappensNext.css'

// Sets expectations for someone deciding whether to make contact —
// uncertainty about what "contacting a lawyer" commits you to is a
// common reason people don't.
//
// Every step here describes only what the site already supports: the
// contact channels on this page, the consultation formats listed in
// firm.js (attorney.consultationMethods), and the case-by-case scoping
// stated throughout. Deliberately absent: response-time promises, fee
// or free-consultation claims, and anything about outcomes — none of
// those are established anywhere, and inventing them here would be
// both unverifiable and a promise the firm never made.
const STEPS = [
  {
    title: 'You get in touch',
    desc: 'Use the form, call, or email — whichever you prefer. A short summary of the situation is enough to start; there is no need for documents or detail yet.',
  },
  {
    title: 'We follow up',
    desc: 'Rockville Law Group responds to arrange a consultation, using the contact method you indicated.',
  },
  {
    title: 'You discuss the matter',
    desc: 'Consultations are available in person at the Flushing office or by phone, in English or Mandarin Chinese, and cover your situation and the options that may be open to you.',
  },
  {
    title: 'You decide how to proceed',
    desc: 'If the firm is able to assist and you choose to move forward, scope and next steps are agreed before any work begins.',
  },
]

const STEPS_ZH = [
  {
    title: '与我们联系',
    desc: '可通过表格、电话或邮件联系我们，选择您方便的方式。初步只需简单说明情况即可，暂时无需准备文件或详细材料。',
  },
  {
    title: '我们回复您',
    desc: 'Rockville Law Group 会按照您指定的联系方式与您联系，安排咨询时间。',
  },
  {
    title: '沟通您的具体情况',
    desc: '咨询可在法拉盛办公室面谈或通过电话进行，可使用英文或普通话，了解您的情况及可能的处理方式。',
  },
  {
    title: '由您决定是否继续',
    desc: '如果本所能够提供协助，且您决定继续委托，我们会在开始工作前先明确服务范围及后续安排。',
  },
]

export default function WhatHappensNext() {
  const location = useLocation()
  const isZh = location.pathname === '/zh' || location.pathname.startsWith('/zh/')
  const steps = isZh ? STEPS_ZH : STEPS

  return (
    <section className="section what-next">
      <div className="container">
        {isZh ? (
          <SectionHeading eyebrow="流程说明" title="联系我们之后会发生什么" />
        ) : (
          <SectionHeading eyebrow="What to Expect" title="What Happens After You Get in Touch" zh="联系之后的流程" />
        )}

        <ol className="what-next__list">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.06} className="what-next__step">
              <h3 className="what-next__title">{step.title}</h3>
              <p className="what-next__desc">{step.desc}</p>
            </Reveal>
          ))}
        </ol>

        <p className="what-next__note">
          {isZh
            ? '是否能够承接某一事务，需视具体情况确认。'
            : 'Whether the firm can take on a particular matter is confirmed case by case.'}
        </p>
      </div>
    </section>
  )
}
