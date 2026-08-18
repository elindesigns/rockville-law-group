// ============================================================
// CHINESE-SITE STRUCTURAL DATA
// Facts (contact info, admissions, courts, hearing types, office)
// are never re-typed here — they're re-exported directly from
// firm.js, the single verified source of truth, so the Chinese and
// English sites can never drift apart on a legal fact. Only
// structural UI strings that are genuinely part of the Chinese site's
// own voice (nav, CTAs, disclaimer) are authored here.
// ============================================================

export { attorney, contact, offices, appearanceCourts, hearingCoverage, priorityServices, mainPracticeAreas } from './firm.js'

export const firmZh = {
  legalName: 'Rockville Law Group LLC',
  shortNameZh: 'Rockville 律师事务所',
  taglineZh: '为个人、家庭及企业提供专业法律服务',
}

export const navZh = [
  { label: '首页', to: '/zh' },
  { label: '业务领域', to: '/zh/practice-areas' },
  { label: '关于律师', to: '/zh/about' },
  { label: '律师专区', to: '/zh/attorney-hearing-coverage' },
  { label: '联系我们', to: '/zh/contact' },
]

export const ctasZh = {
  consultation: { label: '预约咨询', to: '/zh/contact#consultation' },
  attorneyCoverage: { label: '律师专区', to: '/zh/attorney-hearing-coverage' },
  requestCoverage: { label: '咨询出庭代理', to: '/zh/attorney-hearing-coverage#request-coverage' },
}

// Maps every English route to its Chinese counterpart (and back) for
// the language switcher and hreflang tags. Routes with no Chinese
// counterpart (Resources, articles) are intentionally absent — the
// switcher falls back to each language's homepage for those.
export const PAGE_PAIRS = [
  { en: '/', zh: '/zh' },
  { en: '/practice-areas', zh: '/zh/practice-areas' },
  { en: '/immigration-services', zh: '/zh/immigration-services' },
  { en: '/family-based-green-cards', zh: '/zh/family-based-green-cards' },
  { en: '/asylum', zh: '/zh/asylum' },
  { en: '/eb1a', zh: '/zh/eb1a' },
  { en: '/employment-based-green-cards', zh: '/zh/employment-based-green-cards' },
  { en: '/immigration-court', zh: '/zh/immigration-court' },
  { en: '/family-law', zh: '/zh/family-law' },
  { en: '/estate-planning', zh: '/zh/estate-planning' },
  { en: '/business-law', zh: '/zh/business-law' },
  { en: '/ipo-securities', zh: '/zh/ipo-securities' },
  { en: '/escrow-services', zh: '/zh/escrow-services' },
  { en: '/for-attorneys', zh: '/zh/attorney-hearing-coverage' },
  { en: '/about', zh: '/zh/about' },
  { en: '/contact', zh: '/zh/contact' },
  { en: '/privacy', zh: '/zh/privacy' },
  { en: '/terms', zh: '/zh/terms' },
]

export function getZhEquivalent(enPath) {
  return PAGE_PAIRS.find((p) => p.en === enPath)?.zh || '/zh'
}

export function getEnEquivalent(zhPath) {
  return PAGE_PAIRS.find((p) => p.zh === zhPath)?.en || '/'
}

// Chinese display names for the exact English values already
// verified in firm.js — never a new fact, only a localized label for
// an existing one. Keep in sync if firm.js wording ever changes.
export const JURISDICTION_ZH = {
  'New York': '纽约州',
  'District of Columbia': '哥伦比亚特区',
}

export const COURT_ZH = {
  'U.S. District Court, Southern District of New York (SDNY)': '美国纽约南区联邦地区法院（SDNY）',
  'U.S. District Court, Eastern District of New York (EDNY)': '美国纽约东区联邦地区法院（EDNY）',
  'Maryland Federal Court': '马里兰州联邦法院',
  'New York State Court': '纽约州法院',
  'D.C. State Court': '哥伦比亚特区法院',
}

export const remoteCaveatZh = '远程出庭服务适用于符合条件的案件，具体须遵循相关法院的规则及授权。'

export const disclaimerZh =
  '本网站内容仅供一般性参考，不构成法律意见。浏览本网站或与 Rockville Law Group 联系，并不建立委托代理（律师-客户）关系。每个案件的具体情况不同，如需了解您自身的情况，请直接咨询律师。'

export const confidentialityNoticeZh = '请不要通过网站表单提交涉及保密或敏感内容的具体案情，我们会在联系您后，通过适当、安全的方式进一步沟通细节。'
