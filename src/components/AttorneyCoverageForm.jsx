import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CheckIcon } from './shared/Icons.jsx'
import { confidentialityNotice, contact } from '../data/firm.js'
import { confidentialityNoticeZh } from '../data/firmZh.js'
import { trackEvent } from '../lib/analytics.js'
import { submitAttorneyCoverage, attorneyFormConfigured } from '../lib/formspree.js'
import './Forms.css'

const HEARING_TYPES = ['Individual hearing', 'Master hearing', 'BIA hearing', 'Other qualifying appearance']
const HEARING_TYPES_ZH = ['主审听证', '主日历听证', 'BIA 听证', '其他符合条件的出庭']
const APPEARANCE_MODES = ['Remote', 'In person', 'Either / no preference']
const APPEARANCE_MODES_ZH = ['远程', '现场', '均可 / 无特别要求']
const CONTACT_METHODS = ['Phone', 'Email']
const CONTACT_METHODS_ZH = ['电话', '邮件']

/**
 * Submits to Formspree when VITE_FORMSPREE_ATTORNEY_ID is set;
 * otherwise falls back to opening a pre-filled mailto: email that the
 * attorney sends themselves. Bilingual: detects /zh routes and swaps
 * labels/copy, but always sends the language matching the visible
 * form.
 */
export default function AttorneyCoverageForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const location = useLocation()
  const isZh = location.pathname === '/zh' || location.pathname.startsWith('/zh/')

  async function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const hearingType = data.get('hearingType') || (isZh ? '未注明' : 'Not specified')
    const court = data.get('court') || ''
    const subject = isZh
      ? `出庭代理申请: ${hearingType}${court ? `（${court}）` : ''}`
      : `Hearing Coverage Request: ${hearingType}${court ? ` (${court})` : ''}`

    trackEvent('attorney_form_submit', { hearingType })

    if (attorneyFormConfigured) {
      setSubmitting(true)
      data.set('_subject', subject)
      const ok = await submitAttorneyCoverage(data)
      setSubmitting(false)
      setSubmitted(ok ? 'formspree' : 'error')
      return
    }

    const bodyLines = isZh
      ? [
          `律师姓名：${data.get('attorneyName') || ''}`,
          `律师事务所：${data.get('lawFirm') || ''}`,
          `邮箱：${data.get('email') || ''}`,
          `电话：${data.get('phone') || ''}`,
          `州：${data.get('state') || ''}`,
          `移民法院：${court}`,
          `听证日期：${data.get('hearingDate') || ''}`,
          `听证类型：${hearingType}`,
          `远程或现场：${data.get('appearanceMode') || ''}`,
          `偏好联系方式：${data.get('contactMethod') || ''}`,
          '',
          '基本后勤信息：',
          data.get('logistics') || '（未提供）',
        ]
      : [
          `Attorney name: ${data.get('attorneyName') || ''}`,
          `Law firm: ${data.get('lawFirm') || ''}`,
          `Email: ${data.get('email') || ''}`,
          `Phone: ${data.get('phone') || ''}`,
          `State: ${data.get('state') || ''}`,
          `Immigration court: ${court}`,
          `Hearing date: ${data.get('hearingDate') || ''}`,
          `Hearing type: ${hearingType}`,
          `Remote or in person: ${data.get('appearanceMode') || ''}`,
          `Preferred contact method: ${data.get('contactMethod') || ''}`,
          '',
          'Basic logistical information:',
          data.get('logistics') || '(none provided)',
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
            <h3>您的申请已收到</h3>
            <p>
              感谢您的出庭代理申请，我们会尽快与您联系确认具体安排。提交并不代表代理请求已被接受，具体安排须逐案确认。如需更快联系，也可以直接致电：
              <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>{contact.phone}</a>。
            </p>
          </>
        ) : (
          <>
            <h3>Your request has been received</h3>
            <p>
              Thank you for the request. We'll follow up to confirm availability and scope. Submitting does not
              confirm coverage. For a faster response, you can also call us directly at{' '}
              <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>{contact.phone}</a>.
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
              您的申请未能成功发送，请直接联系我们：<a href={`mailto:${contact.email}`}>{contact.email}</a> 或{' '}
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
              此表格会为您准备一封已填好申请内容的邮件，请从邮件应用程序中发送，以便我们直接收到您的请求。提交并不代表代理请求已被接受，具体安排须逐案确认。若没有自动打开邮件应用程序，也可以直接联系我们：
              <a href={`mailto:${contact.email}`}>{contact.email}</a> 或{' '}
              <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>{contact.phone}</a>。
            </p>
          </>
        ) : (
          <>
            <h3>Your email app should now be open</h3>
            <p>
              This form prepares an email addressed to us with the request details already filled in. Send it from
              there to reach us directly. Submitting does not confirm coverage; availability is confirmed only once
              discussed directly. If nothing opened, you can reach us at{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a> or{' '}
              <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>{contact.phone}</a>.
            </p>
          </>
        )}
      </div>
    )
  }

  return (
    <form className="rlg-form" onSubmit={handleSubmit}>
      <div className="rlg-form__grid">
        <div className="field">
          <label htmlFor="a-name">{isZh ? '律师姓名' : 'Attorney name'}</label>
          <input id="a-name" name="attorneyName" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="a-firm">{isZh ? '律师事务所' : 'Law firm'}</label>
          <input id="a-firm" name="lawFirm" type="text" autoComplete="organization" required />
        </div>
        <div className="field">
          <label htmlFor="a-email">{isZh ? '邮箱' : 'Email'}</label>
          <input id="a-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="a-phone">{isZh ? '电话' : 'Phone'}</label>
          <input id="a-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="a-state">{isZh ? '州' : 'State'}</label>
          <input id="a-state" name="state" type="text" placeholder={isZh ? '例如：纽约州' : 'e.g. New York'} required />
        </div>
        <div className="field">
          <label htmlFor="a-court">{isZh ? '移民法院' : 'Immigration court'}</label>
          <input id="a-court" name="court" type="text" placeholder={isZh ? '例如：纽约市移民法院' : 'e.g. New York City Immigration Court'} required />
        </div>
        <div className="field">
          <label htmlFor="a-date">{isZh ? '听证日期' : 'Hearing date'}</label>
          <input id="a-date" name="hearingDate" type="date" />
        </div>
        <div className="field">
          <label htmlFor="a-type">{isZh ? '听证类型' : 'Hearing type'}</label>
          <select id="a-type" name="hearingType" defaultValue="">
            <option value="" disabled>
              {isZh ? '请选择' : 'Select one'}
            </option>
            {(isZh ? HEARING_TYPES_ZH : HEARING_TYPES).map((t, i) => (
              <option key={t} value={isZh ? HEARING_TYPES[i] : t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="a-mode">{isZh ? '远程或现场' : 'Remote or in person'}</label>
          <select id="a-mode" name="appearanceMode" defaultValue="">
            <option value="" disabled>
              {isZh ? '请选择' : 'Select one'}
            </option>
            {(isZh ? APPEARANCE_MODES_ZH : APPEARANCE_MODES).map((m, i) => (
              <option key={m} value={isZh ? APPEARANCE_MODES[i] : m}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="a-contact-method">{isZh ? '偏好联系方式' : 'Preferred contact method'}</label>
          <select id="a-contact-method" name="contactMethod" defaultValue="">
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
        <label htmlFor="a-logistics">{isZh ? '基本后勤信息' : 'Basic logistical information'}</label>
        <textarea
          id="a-logistics"
          name="logistics"
          placeholder={isZh ? '任何有助于评估请求的信息，例如当事人使用的语言、排庭时间、预计听证时长等。' : "Anything helpful for scoping the request, e.g. respondent's language, docket time, expected length."}
        />
      </div>

      <p className="field-note">{isZh ? confidentialityNoticeZh : confidentialityNotice}</p>

      <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="rlg-form__hp" aria-hidden="true" />

      <button type="submit" className="btn btn-primary rlg-form__submit" disabled={submitting}>
        {submitting ? (isZh ? '提交中…' : 'Sending…') : isZh ? '提交出庭代理申请' : 'Submit Coverage Request'}
      </button>
    </form>
  )
}
