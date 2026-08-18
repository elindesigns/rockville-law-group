// ============================================================
// STRUCTURED DATA BUILDERS
// Every field here is sourced directly from data/firm.js — the
// single verified source of truth. Do not add ratings, review
// counts, awards, or credentials that aren't already established
// elsewhere on the site.
// ============================================================

import { firm, attorney, contact, offices } from '../data/firm.js'

const office = offices[0]

function origin() {
  return typeof window !== 'undefined' ? window.location.origin : ''
}

// Stable identifiers so the same entity is recognizable across every
// page it appears on, even though each page's JSON-LD block is
// otherwise independent (see useStructuredData.js).
export function organizationId() {
  return `${origin()}/#organization`
}

export function personId() {
  return `${origin()}/about#person`
}

// Verified practice areas, for schema.org's knowsAbout — reused on
// both the firm-level and person-level schemas so structured data
// reflects the firm's actual multi-practice scope, not immigration
// alone.
const knownPracticeAreas = attorney.practiceAreas

export function legalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LegalService', 'Attorney'],
    '@id': organizationId(),
    name: firm.legalName,
    alternateName: firm.shortName,
    description: `${firm.legalName} is a New York law firm serving individuals, families, and businesses across ${knownPracticeAreas.join(', ')}.`,
    url: origin(),
    telephone: contact.phone,
    email: contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: office.street,
      addressLocality: office.city,
      addressRegion: office.state,
      postalCode: office.zip,
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'New York City' },
      { '@type': 'State', name: 'New York' },
    ],
    knowsAbout: knownPracticeAreas,
    knowsLanguage: ['English', 'Mandarin Chinese'],
    founder: { '@type': 'Person', '@id': personId(), name: attorney.name },
    sameAs: [attorney.profiles.justia, attorney.profiles.linkedin],
  }
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId(),
    name: attorney.name,
    jobTitle: attorney.title,
    url: `${origin()}/about`,
    worksFor: { '@type': ['LegalService', 'Attorney'], '@id': organizationId(), name: firm.legalName, url: origin() },
    alumniOf: attorney.education.map((e) => ({ '@type': 'CollegeOrUniversity', name: e.school })),
    knowsAbout: knownPracticeAreas,
    knowsLanguage: attorney.languages,
    hasCredential: attorney.bar.map((b) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Bar Admission',
      name: `Admitted to the Bar, ${b.jurisdiction}`,
    })),
    sameAs: [attorney.profiles.justia, attorney.profiles.linkedin],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${origin()}/#website`,
    name: firm.legalName,
    url: origin(),
    inLanguage: ['en-US', 'zh-Hans'],
    publisher: { '@id': organizationId() },
  }
}

export function articleSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: { '@type': 'Organization', name: article.author || firm.legalName },
    publisher: { '@type': 'Organization', name: firm.legalName, url: origin() },
    ...(article.reviewedBy
      ? { reviewedBy: { '@type': 'Person', name: article.reviewedBy } }
      : {}),
    mainEntityOfPage: `${origin()}/resources/${article.slug}`,
  }
}

/** items: [{ name, path }] in breadcrumb order, path is site-relative ("/asylum"). */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${origin()}${item.path}`,
    })),
  }
}

/**
 * items: the page's own FAQS array, [{ q, a }, ...] — same objects
 * already passed to <FAQAccordion>, reused as-is so the schema can
 * never drift from what's actually visible on the page. Only emit
 * this on pages whose FAQ answers are short, self-contained text (the
 * `a` field) — not the multi-paragraph `paragraphs` variant, which
 * FAQPage's single-string acceptedAnswer isn't a good fit for.
 */
export function faqPageSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}
