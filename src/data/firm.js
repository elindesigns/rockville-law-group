// ============================================================
// CENTRAL BUSINESS DATA
// Single source of truth for firm, attorney, and contact info.
// Update values here — every page and component reads from this file.
// Anything wrapped in [BRACKETS] is a placeholder awaiting verification
// with Li before publishing live. `zh` fields are short Chinese labels
// shown alongside headings/nav/CTAs only — not full translations.
// ============================================================

/** True if a value is still an unverified placeholder string. */
export const isPlaceholder = (value) => typeof value === 'string' && /^\[.*\]$/.test(value.trim())

export const firm = {
  legalName: 'Rockville Law Group LLC',
  shortName: 'Rockville Law Group',
  initials: 'RLG',
  tagline: 'A New York Law Firm Serving Individuals, Families & Businesses',
  taglineZh: '为个人、家庭及企业提供专业法律服务',
  heroTitleZh: '纽约律师事务所',
}

export const attorney = {
  name: 'Li Weng',
  title: 'Founding Attorney',
  formalTitle: 'Founding Partner, Rockville Law Group LLC',
  credential: 'Attorney at Law',
  yearsExperience: '14+',
  bio: [
    'Li Weng is the founding partner of Rockville Law Group LLC, a New York firm representing individuals, families, and businesses across immigration, family law, estate planning, and business and securities matters. She has practiced law for more than 14 years, including experience advising on cross-border and international matters.',
    'Before relocating to the United States, Li practiced law in Wuhan, China, advising individuals and businesses on cross-border legal and financial planning. She went on to earn her LL.M. from the University of Texas at Austin and has since built a practice grounded in that international perspective, representing clients across immigration, family law, estate planning, and business matters. For clients with ties to China, that background means working with an attorney who understands both legal systems firsthand — not just the language.',
    'Li is fluent in both English and Mandarin Chinese and offers consultations in person and by phone.',
  ],
  // Bar / federal court ADMISSIONS ONLY. Do not add a jurisdiction here
  // unless admission is verified — see appearanceCourts below for the
  // separate (and larger) list of courts where Li can appear.
  bar: [
    { jurisdiction: 'New York', since: '2012' },
    { jurisdiction: 'District of Columbia', since: '2017' },
  ],
  federalCourts: [
    'U.S. District Court, Southern District of New York (SDNY)',
    'U.S. District Court, Eastern District of New York (EDNY)',
  ],
  education: [
    { degree: 'LL.M.', school: 'University of Texas at Austin', year: '2010' },
    { degree: 'LL.B.', school: 'Soochow University', location: 'Suzhou, China', year: '2006' },
  ],
  languages: ['English', 'Mandarin Chinese'],
  // Flat and unordered by design — the firm's practice areas get
  // comparable weight in how they're presented, not a primary/
  // secondary split. See mainPracticeAreas below for the same list
  // with descriptions.
  practiceAreas: ['Immigration Law', 'Estate Planning', 'Business Law', 'Securities Law', 'Family Law', 'Escrow Services'],
  consultationMethods: ['In person', 'Phone call'],
  profiles: {
    justia: 'https://lawyers.justia.com/lawyer/li-weng-1524192',
    linkedin: 'https://www.linkedin.com/in/li-weng-36278629/',
  },
}

export const contact = {
  phone: '516-846-2242',
  phoneSecondary: '929-708-2307',
  email: 'wengli625@gmail.com',
}

// Structured for multiple locations later.
export const offices = [
  {
    label: 'Office',
    street: '36-16 Main St, Suite 803',
    city: 'Flushing',
    state: 'NY',
    zip: '11354',
    address: '36-16 Main St, Suite 803, Flushing, NY 11354',
    description:
      "In the heart of downtown Flushing, Queens — one of New York City's most vibrant Asian-American communities — with convenient access to the Flushing–Main Street subway and LIRR station.",
    descriptionZh: '位于皇后区法拉盛市中心，纽约市最具活力的亚裔社区之一，交通便利，靠近法拉盛地铁站及长岛铁路车站。',
    mapQuery: '36-16 Main St, Suite 803, Flushing, NY 11354',
  },
]

// Courts where Li can appear. This is deliberately separate from
// attorney.bar / attorney.federalCourts (admissions) — appearance in a
// court does not necessarily mean bar admission there (e.g. admission
// to a federal court's bar, or appearance authorized another way).
// Never merge this into the admissions list, and never describe any
// entry here as "licensed in ___."
export const appearanceCourts = [
  'U.S. District Court, Southern District of New York (SDNY)',
  'U.S. District Court, Eastern District of New York (EDNY)',
  'Maryland Federal Court',
  'New York State Court',
  'D.C. State Court',
]

// For Attorneys — hearing coverage page.
export const hearingCoverage = {
  remoteHearingTypes: ['Individual Hearings', 'Master Hearings', 'BIA Hearings'],
  remoteCaveat: 'Remote appearance services are available for qualifying matters, subject to court rules and authorization.',
  process: [
    {
      step: '01',
      title: 'Submit a coverage request',
      description: 'Share basic hearing details through the request form or by phone/email.',
    },
    {
      step: '02',
      title: 'Provide hearing information',
      description: 'Court, hearing type, date, and any logistical details needed to evaluate the request.',
    },
    {
      step: '03',
      title: 'Rockville Law Group reviews',
      description: 'We confirm availability and whether the matter is one we can cover.',
    },
    {
      step: '04',
      title: 'Discuss scope & availability',
      description: 'We talk through logistics, scope of appearance, and any open questions before confirming.',
    },
    {
      step: '05',
      title: 'Confirm the arrangement',
      description: 'Once terms are agreed, we confirm in writing and prepare for the hearing.',
    },
  ],
}

// The firm's top-level practice areas — used on the /practice-areas
// hub and the homepage. Immigration Law is itself a hub covering the
// four priorityServices below plus immigration court. Sub-service
// lists per area (below, and on each dedicated page) are verified
// against the firm's own attorney listing — not invented.
export const mainPracticeAreas = [
  {
    id: 'immigration',
    name: 'Immigration Law',
    nameZh: '移民法',
    to: '/immigration-services',
    short: 'Family-based green cards, asylum, EB-1A, employment-based immigration, and representation in immigration court.',
    cta: 'Explore Immigration Law',
  },
  {
    id: 'family-law',
    name: 'Family Law',
    nameZh: '家庭法',
    to: '/family-law',
    short: 'Adoption, child custody and support, paternity, prenuptial agreements, guardianship, and related family matters.',
    cta: 'Explore Family Law',
  },
  {
    id: 'estate-planning',
    name: 'Estate Planning',
    nameZh: '遗产规划',
    to: '/estate-planning',
    short: 'Wills, trusts, health care directives, guardianship and conservatorship, and estate administration.',
    cta: 'Explore Estate Planning',
  },
  {
    id: 'business-law',
    name: 'Business & Corporate Law',
    nameZh: '商业与公司法',
    to: '/business-law',
    short: 'Business formation, contracts, mergers and acquisitions, and partnership and shareholder matters.',
    cta: 'Explore Business Law',
  },
  {
    id: 'ipo-securities',
    name: 'Securities Law',
    nameZh: '证券法',
    to: '/ipo-securities',
    short: 'Securities law counsel for closely-held companies, including matters that arise in capital-raising and corporate transactions.',
    cta: 'Explore Securities Law',
  },
  {
    id: 'escrow-services',
    name: 'Escrow Services',
    nameZh: '托管服务',
    to: '/escrow-services',
    short: 'Serving as escrow agent for business and real estate transactions, holding funds or documents until closing conditions are met.',
    cta: 'Explore Escrow Services',
  },
]

// The four consumer-facing services the firm wants to lead with.
// Each has its own dedicated page at `to` — `id` is kept only for
// same-page anchors (e.g. FAQ items) within that page.
export const priorityServices = [
  {
    id: 'family-based-green-cards',
    to: '/family-based-green-cards',
    name: 'Family-Based Green Cards',
    nameZh: '亲属移民',
    short: 'Family-Based Immigration',
    description:
      'Guidance for eligible family members seeking permanent residence in the United States through family-based immigration.',
    cta: 'Explore Family-Based Immigration',
  },
  {
    id: 'asylum',
    to: '/asylum',
    name: 'Asylum',
    nameZh: '庇护申请',
    short: 'Asylum',
    description: 'Legal representation and guidance for individuals seeking protection in the United States through asylum.',
    cta: 'Learn About Asylum',
  },
  {
    id: 'eb1a',
    to: '/eb1a',
    name: 'EB-1A Extraordinary Ability',
    nameZh: 'EB-1A 杰出人才移民',
    short: 'EB-1A',
    description:
      'An employment-based immigrant classification for individuals who can demonstrate extraordinary ability in their field.',
    cta: 'Explore EB-1A',
  },
  {
    id: 'employment-based-green-cards',
    to: '/employment-based-green-cards',
    name: 'Employment-Based Green Cards',
    nameZh: '职业移民绿卡',
    short: 'Employment-Based Immigration',
    description: 'Assistance for qualifying individuals with employment-based permanent immigration matters.',
    cta: 'Explore Employment-Based Immigration',
  },
]

export const nav = [
  { label: 'Home', zh: '首页', to: '/' },
  { label: 'Practice Areas', zh: '业务领域', to: '/practice-areas' },
  { label: 'About', zh: '关于律师', to: '/about' },
  { label: 'For Attorneys', zh: '律师专区', to: '/for-attorneys' },
  // Resources is EN-only in the nav: there is no Chinese article
  // content, and navZh must not link Chinese visitors into English
  // pages. Same reasoning as Footer's practiceLinks/practiceLinksZh.
  { label: 'Resources', zh: '资源与指南', to: '/resources' },
  { label: 'Contact', zh: '联系我们', to: '/contact' },
]

// Every route the "Practice Areas" nav item should read as active
// for, since it's a flat link (no dropdown) to a hub whose children
// live at sibling URLs, not nested under /practice-areas.
export const practiceAreaActivePaths = [
  '/practice-areas',
  '/immigration-services',
  '/family-based-green-cards',
  '/asylum',
  '/eb1a',
  '/employment-based-green-cards',
  '/immigration-court',
  '/family-law',
  '/estate-planning',
  '/business-law',
  '/ipo-securities',
  '/escrow-services',
]

export const ctas = {
  consultation: { label: 'Schedule a Consultation', zh: '预约咨询', to: '/contact#consultation' },
  attorneyCoverage: { label: 'For Attorneys', zh: '律师专区', to: '/for-attorneys' },
  requestCoverage: { label: 'Request Hearing Coverage', zh: '申请出庭代理', to: '/for-attorneys#request-coverage' },
  discussCourtMatter: { label: 'Discuss Your Immigration Court Matter', zh: '咨询移民法庭事务', to: '/contact#consultation' },
}

export const disclaimer =
  'Information on this website is provided for general informational purposes only and does not constitute legal advice. Visiting this website or contacting Rockville Law Group does not create an attorney-client relationship.'

export const confidentialityNotice =
  'Please do not submit confidential, privileged, or sensitive information through this form. We will discuss case-specific details through an appropriate, secure communication channel.'
