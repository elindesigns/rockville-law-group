import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CheckIcon } from './shared/Icons.jsx'
import { confidentialityNotice, contact } from '../data/firm.js'
import { confidentialityNoticeZh } from '../data/firmZh.js'
import { trackEvent } from '../lib/analytics.js'
import { submitConsultation, consultationFormConfigured } from '../lib/formspree.js'
import './Forms.css'

const MATTER_TYPES = [
  'Family-based green card',
  'Asylum',
  'EB-1A extraordinary ability',
  'Employment-based green card',
  'Removal / deportation defense',
  'Citizenship / naturalization',
  'Immigration appeals',
  'Family law',
  'Estate planning',
  'Business / corporate law',
  'Securities law',
  'Other / not sure',
]
const MATTER_TYPES_ZH = [
  '亲属移民绿卡',
  '庇护',
  'EB-1A 杰出人才移民',
  '职业移民绿卡',
  '遣返辩护',
  '入籍归化',
  '移民上诉',
  '家庭法',
  '遗产规划',
  '商业与公司法',
  '证券法',
  '其他 / 尚不确定',
]

const LANGUAGES = ['English', 'Mandarin Chinese', 'Other']
const LANGUAGES_ZH = ['英文', '普通话', '其他']
const CONTACT_METHODS = ['Phone', 'Email']
const CONTACT_METHODS_ZH = ['电话', '邮件']

/**
 * Submits to Formspree when VITE_FORMSPREE_CONSULTATION_ID is set;
 * otherwise falls back to opening a pre-filled mailto: email that the
 * visitor sends themselves. Bilingual: detects /zh routes and swaps
 * labels/copy, but always sends the language matching the visible
 * form.
 */
export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const location = useLocation()
  const isZh = location.pathname === '/zh' || location.pathname.startsWith('/zh/')

  async function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = data.get('name') || ''
    const matter = data.get('matter') || (isZh ? '未注明' : 'Not specified')
    const subject = isZh ? `咨询预约请求, ${matter}` : `Consultation Request, ${matter}`

    trackEvent('consumer_form_submit', { matter })

    if (consultationFormConfigured) {
      setSubmitting(true)
      data.set('_subject', subject)
      const ok = await submitConsultation(data)
      setSubmitting(false)
      setSubmitted(ok ? 'formspree' : 'error')
      return
    }

    const bodyLines = isZh
      ? [
          `姓名：${name}`,
          `邮箱：${data.get('email') || ''}`,
          `电话：${data.get('phone') || ''}`,
          `偏好语言：${data.get('language') || ''}`,
          `事务类型：${matter}`,
          `偏好联系方式：${data.get('contactMethod') || ''}`,
          '',
          '简要说明：',
          data.get('description') || '（未提供）',
        ]
      : [
          `Name: ${name}`,
          `Email: ${data.get('email') || ''}`,
          `Phone: ${data.get('phone') || ''}`,
          `Preferred language: ${data.get('language') || ''}`,
          `Matter type: ${matter}`,
          `Preferred contact method: ${data.get('contactMethod') || ''}`,
          '',
          'Brief description:',
          data.get('description') || '(none provided)',
        ]
    const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`
    window.location.href = mailtoUrl
    setSubmitted('mailto')
  }

  if (submitted === 'formspree') {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <CheckIcon className="form-success__icon" />
        {isZh ? (
          <>
            <h3>您的请求已收到</h3>
            <p>感谢您的咨询请求，我们会尽快与您联系。如需更快联系，也可以直接致电：<a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>{contact.phone}</a>。</p>
          </>
        ) : (
          <>
            <h3>Your request has been received</h3>
            <p>
              Thank you for reaching out. We'll be in touch soon. For a faster response, you can also call us
              directly at <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>{contact.phone}</a>.
            </p>
          </>
        )}
      </div>
    )
  }

  if (submitted === 'error') {
    return (
      <div className="form-success" role="status" aria-live="polite">
        {isZh ? (
          <>
            <h3>提交时出现问题</h3>
            <p>
              您的请求未能成功发送，请直接联系我们：<a href={`mailto:${contact.email}`}>{contact.email}</a> 或{' '}
              <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>{contact.phone}</a>。
            </p>
          </>
        ) : (
          <>
            <h3>Something went wrong</h3>
            <p>
              Your request didn't go through. Please reach us directly at{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a> or{' '}
              <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>{contact.phone}</a>.
            </p>
          </>
        )}
      </div>
    )
  }

  if (submitted === 'mailto') {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <CheckIcon className="form-success__icon" />
        {isZh ? (
          <>
            <h3>您的邮件应用程序应已打开</h3>
            <p>
              此表格会为您准备一封已填好内容的邮件，请从邮件应用程序中发送，以便我们直接收到您的请求。若没有自动打开邮件应用程序，也可以直接联系我们：
              <a href={`mailto:${contact.email}`}>{contact.email}</a> 或{' '}
              <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>{contact.phone}</a>。
            </p>
          </>
        ) : (
          <>
            <h3>Your email app should now be open</h3>
            <p>
              This form prepares an email addressed to us with your details already filled in. Send it from there to
              reach us directly. If nothing opened, you can reach us directly at{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a> or{' '}
              <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>{contact.phone}</a>.
            </p>
          </>
        )}
      </div>
    )
  }

  return (
    <form className="rlg-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="rlg-form__grid">
        <div className="field">
          <label htmlFor="c-name">{isZh ? '姓名' : 'Full name'}</label>
          <input id="c-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="c-email">{isZh ? '邮箱' : 'Email'}</label>
          <input id="c-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="c-phone">{isZh ? '电话' : 'Phone'}</label>
          <input id="c-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="c-language">{isZh ? '偏好语言' : 'Preferred language'}</label>
          <select id="c-language" name="language" defaultValue="">
            <option value="" disabled>
              {isZh ? '请选择' : 'Select one'}
            </option>
            {(isZh ? LANGUAGES_ZH : LANGUAGES).map((l, i) => (
              <option key={l} value={isZh ? LANGUAGES[i] : l}>
                {l}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="c-matter">{isZh ? '事务类型' : 'General matter type'}</label>
          <select id="c-matter" name="matter" defaultValue="">
            <option value="" disabled>
              {isZh ? '请选择' : 'Select one'}
            </option>
            {(isZh ? MATTER_TYPES_ZH : MATTER_TYPES).map((m, i) => (
              <option key={m} value={isZh ? MATTER_TYPES[i] : m}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="c-contact-method">{isZh ? '偏好联系方式' : 'Preferred contact method'}</label>
          <select id="c-contact-method" name="contactMethod" defaultValue="">
            <option value="" disabled>
              {isZh ? '请选择' : 'Select one'}
            </option>
            {(isZh ? CONTACT_METHODS_ZH : CONTACT_METHODS).map((m, i) => (
              <option key={m} value={isZh ? CONTACT_METHODS[i] : m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="c-description">{isZh ? '简要说明' : 'Brief description'}</label>
        <textarea
          id="c-description"
          name="description"
          placeholder={isZh ? '简单描述一两句即可，暂时不需要详细内容。' : 'A sentence or two is fine. No need for details yet.'}
        />
      </div>

      <p className="field-note">{isZh ? confidentialityNoticeZh : confidentialityNotice}</p>

      <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="rlg-form__hp" aria-hidden="true" />

      <button type="submit" className="btn btn-primary rlg-form__submit" disabled={submitting}>
        {submitting ? (isZh ? '提交中…' : 'Sending…') : isZh ? '预约咨询' : 'Request a Consultation'}
      </button>
    </form>
  )
}
