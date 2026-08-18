// ============================================================
// RESOURCES / ARTICLES
// Supporting content that feeds the pillar service pages — not a
// general news blog. Each entry renders through the single
// <Article> page template via a small set of content block types:
//   { type: 'text', heading?, paragraphs: string[] }
//   { type: 'steps', heading, items: [{ title, desc }] }
//   { type: 'comparison', heading, columns: [string, string], rows: [{ label, a, b }] }
//   { type: 'checklist', heading, items: string[] }
//   { type: 'callout', heading, body: string }
//
// `author` is always the firm, never an individual, unless that
// individual actually wrote it. `reviewedBy` / `reviewDate` must stay
// null until Li Weng has actually reviewed the piece — the byline
// component only renders a review line when both are set.
// ============================================================

const NOT_YET_REVIEWED = { reviewedBy: null, reviewDate: null }

export const articles = [
  {
    slug: 'green-card-through-marriage',
    title: 'Can You Get a Green Card Through Marriage?',
    metaTitle: 'Can You Get a Green Card Through Marriage? | Rockville Law Group',
    metaDescription:
      'How marriage-based green cards work — immediate relative vs. preference category, the conditional two-year card, and what the process generally involves.',
    dek: 'Marriage to a U.S. citizen or green card holder can open a path to permanent residence — but the process, timeline, and paperwork depend on details that are easy to overlook.',
    category: 'Family-Based Immigration',
    categoryZh: '家庭移民',
    datePublished: '2026-08-17',
    dateModified: '2026-08-17',
    author: 'Rockville Law Group',
    ...NOT_YET_REVIEWED,
    relatedService: { label: 'Family-Based Green Cards', to: '/family-based-green-cards' },
    quickAnswer:
      'In general, yes — marriage to a U.S. citizen can make a foreign national spouse eligible to apply for a green card, provided the marriage is genuine and the couple meets the other legal requirements. The process and timeline differ depending on whether the U.S. spouse is a citizen or a green card holder, and whether the foreign spouse is already living in the United States.',
    sections: [
      {
        type: 'text',
        heading: 'Citizen Spouse vs. Green Card Holder Spouse',
        paragraphs: [
          "The single biggest factor in a marriage-based case is the sponsoring spouse's own status. Spouses of U.S. citizens are classified as immediate relatives — a category with no annual numerical cap, which generally makes it the faster route. Spouses of lawful permanent residents fall into the F2A preference category instead, which is subject to a per-country quota and can involve a waiting period before a visa becomes available, even after the petition itself is approved.",
        ],
      },
      {
        type: 'text',
        heading: 'The Conditional Two-Year Green Card',
        paragraphs: [
          "A detail that catches many couples off guard: if the marriage is less than two years old at the time the green card is approved, the foreign spouse generally receives conditional permanent residence — a green card valid for two years rather than ten. Within the 90 days before that card expires, the couple must file Form I-751 to remove the conditions, generally jointly, providing updated evidence that the marriage remains genuine.",
          'Missing that filing window can put a person’s status at risk, so it’s worth marking the date as soon as a conditional card is issued — not waiting until it’s close to expiring.',
        ],
      },
      {
        type: 'text',
        heading: 'Proving a Genuine Marriage',
        paragraphs: [
          'USCIS reviews marriage-based cases for bona fides — evidence that the marriage was entered into to build a life together, not primarily to obtain an immigration benefit. There is no single required document; officers generally look at the overall picture a couple’s evidence paints, which commonly includes things like joint financial accounts, shared leases or mortgages, insurance policies naming each other, and photos or documentation of time spent together over the relationship.',
        ],
      },
      {
        type: 'steps',
        heading: 'How the Process Generally Works',
        items: [
          {
            title: 'File the Petition',
            desc: 'The U.S. citizen or permanent resident spouse files Form I-130 to establish the marital relationship.',
          },
          {
            title: 'Adjustment or Consular Processing',
            desc: 'A spouse already in the U.S. may be able to apply concurrently for adjustment of status. A spouse abroad generally completes the process through a U.S. consulate instead.',
          },
          {
            title: 'Interview',
            desc: 'Most cases include an interview, where an officer reviews the petition and evidence, including bona fides.',
          },
          {
            title: 'Decision — Conditional or Ten-Year Card',
            desc: 'Depending on how long the couple has been married at approval, the green card issued is either conditional (two years) or a standard ten-year card.',
          },
        ],
      },
      {
        type: 'checklist',
        heading: 'Documents Commonly Requested',
        items: [
          'Marriage certificate and, if applicable, proof that any prior marriages were legally terminated',
          'Evidence of a shared life — joint finances, leases, or similar documentation',
          'A financial sponsor’s affidavit of support',
          'Passport-style photos and identity documents for both spouses',
        ],
      },
      {
        type: 'callout',
        heading: 'When Legal Guidance May Help',
        body: 'Cases involving a prior marriage that wasn’t clearly terminated, an earlier immigration violation, a large age gap or short courtship that may draw extra scrutiny, or an approaching I-751 deadline are all situations where legal guidance can matter. Because eligibility depends on the specific facts, general information is not a substitute for reviewing a situation directly.',
      },
    ],
    faqs: [
      {
        q: 'How long does a marriage-based green card take?',
        qZh: '婚姻绿卡需要多长时间？',
        a: 'Immediate relative cases (married to a U.S. citizen) are generally faster than F2A cases (married to a green card holder), which can involve an additional wait for visa availability. Processing also varies by USCIS office and current caseloads — a consultation is the most reliable way to get a realistic estimate.',
      },
      {
        q: 'What happens if I divorce before removing conditions on my green card?',
        qZh: '在解除条件前离婚会怎样？',
        a: 'A waiver of the joint-filing requirement may be available in some circumstances, including a divorce, but it generally requires additional evidence that the marriage was entered into in good faith. This is a fact-specific situation worth discussing directly.',
      },
      {
        q: 'Can I work while my marriage-based green card is pending?',
        qZh: '绿卡申请期间可以工作吗？',
        a: 'A spouse adjusting status inside the U.S. can generally apply for an Employment Authorization Document to work while the case is pending. Someone going through consular processing abroad does not have this option before the visa is issued.',
      },
      {
        q: 'Do you handle marriage-based cases in Mandarin Chinese?',
        qZh: '可以用中文办理婚姻移民案件吗？',
        a: 'Yes. Rockville Law Group offers consultations in both English and Mandarin Chinese.',
      },
    ],
  },

  {
    slug: 'notice-to-appear-what-happens-next',
    title: 'What Happens After You Receive a Notice to Appear',
    metaTitle: 'What Happens After a Notice to Appear? | Rockville Law Group',
    metaDescription:
      'A Notice to Appear starts removal proceedings, not a final decision. Here is what generally happens next, step by step, and why the response deadline matters.',
    dek: 'Receiving a Notice to Appear is unsettling, but it is the start of a legal process — not the end of one. Here is what generally happens from that point forward.',
    category: 'Immigration Court',
    categoryZh: '移民法庭',
    datePublished: '2026-08-17',
    dateModified: '2026-08-17',
    author: 'Rockville Law Group',
    ...NOT_YET_REVIEWED,
    relatedService: { label: 'Immigration Court', to: '/immigration-court' },
    quickAnswer:
      'A Notice to Appear (NTA) starts removal proceedings — it is not a final decision, and receiving one does not mean removal is guaranteed. It means a case will go before an immigration judge, who will decide the outcome after the proceedings play out.',
    sections: [
      {
        type: 'text',
        heading: 'Reading Your Notice to Appear',
        paragraphs: [
          'An NTA is a charging document issued by the Department of Homeland Security. It generally identifies the person, states the government’s allegations about their immigration history, and cites the specific provisions of law DHS says apply. Some NTAs list a hearing date and time; others list the date and time as "to be determined," with that information sent later by mail or made available through the immigration court’s system. Either way, the document itself is the start of a case, not a ruling on it.',
        ],
      },
      {
        type: 'steps',
        heading: 'What Typically Happens, Step by Step',
        items: [
          { title: 'Notice to Appear Issued', desc: 'DHS files the NTA with the immigration court, formally starting removal proceedings.' },
          {
            title: 'First Master Calendar Hearing',
            desc: 'A short, administrative hearing where the judge confirms information and the case is pled to.',
          },
          { title: 'Identifying Possible Relief', desc: 'The person, generally with an attorney, reviews what forms of relief from removal may be available given their specific circumstances.' },
          { title: 'Filing Applications', desc: 'If relief is being pursued, applications are filed and supporting evidence is gathered before the next hearing.' },
          { title: 'Individual (Merits) Hearing', desc: 'A longer hearing where evidence and testimony are presented and the judge decides the case.' },
          { title: 'Decision', desc: 'The judge rules on the case. Depending on the outcome and the issue, an appeal to the Board of Immigration Appeals may be available.' },
        ],
      },
      {
        type: 'text',
        heading: 'Possible Forms of Relief',
        paragraphs: [
          'Depending on the facts, someone in removal proceedings may be eligible to apply for one or more forms of relief — among them asylum, cancellation of removal, adjustment of status, certain waivers, or voluntary departure. Eligibility for each depends heavily on immigration history, family ties, time in the United States, and the specific allegations in the NTA. None of these is automatic, and which ones may realistically apply to a given case is worth reviewing directly rather than assuming from a general description.',
        ],
      },
      {
        type: 'checklist',
        heading: 'If You’ve Received a Notice to Appear',
        items: [
          'Note the hearing date and time if one is listed — and follow up promptly if it says "to be determined"',
          'Do not ignore the notice even if a date or detail on it seems incorrect',
          'Gather immigration documents: prior filings, entry records, and any correspondence from USCIS or DHS',
          'Consider speaking with an immigration attorney before the first hearing, not after',
        ],
      },
      {
        type: 'callout',
        heading: 'About Missed Hearings',
        body: 'Missing a scheduled hearing can result in an in absentia removal order — a decision made without the person present, which can also affect eligibility for future relief. Deadlines to ask the court to reopen a case after a missed hearing are generally short, so if one has already been missed, prompt legal advice matters.',
      },
    ],
    faqs: [
      {
        q: 'Does a Notice to Appear mean I will be deported?',
        qZh: '收到出庭通知书是否意味着一定会被遣返？',
        a: 'No. An NTA starts a legal process before an immigration judge — it is not itself a removal order. The outcome depends on the specific case, the evidence, and any relief the person may be eligible for.',
      },
      {
        q: 'Do I need a lawyer to respond to a Notice to Appear?',
        qZh: '是否需要律师来应对出庭通知书？',
        a: 'You have the right to be represented by an attorney at your own expense, though the government does not provide one. Because the stakes in removal proceedings are high, many people choose to be represented from the first hearing onward.',
      },
      {
        q: 'What if my Notice to Appear has the wrong hearing date or missing information?',
        qZh: '如果通知书上的信息有误怎么办？',
        a: 'Errors or missing hearing information on an NTA can matter legally and are worth raising with the court or an attorney rather than assumed to resolve themselves — do not simply wait to see what happens.',
      },
      {
        q: 'Can I still apply for other immigration benefits while in removal proceedings?',
        qZh: '在遣返程序期间可以申请其他移民福利吗？',
        a: 'In some circumstances, yes — certain applications can be filed with the immigration court as part of the case. Whether a specific benefit is available depends on the individual’s history and the posture of the case.',
      },
    ],
  },

  {
    slug: 'master-calendar-vs-individual-hearing',
    title: 'Master Calendar Hearing vs. Individual Hearing: What to Expect',
    metaTitle: 'Master Calendar vs. Individual Hearing | Rockville Law Group',
    metaDescription:
      'What actually happens at a master calendar hearing versus an individual (merits) hearing in immigration court, and how many hearings a case typically involves.',
    dek: 'Immigration court proceedings almost always involve more than one type of hearing. Knowing the difference makes the process far less disorienting.',
    category: 'Immigration Court',
    categoryZh: '移民法庭',
    datePublished: '2026-08-17',
    dateModified: '2026-08-17',
    author: 'Rockville Law Group',
    ...NOT_YET_REVIEWED,
    relatedService: { label: 'Immigration Court', to: '/immigration-court' },
    quickAnswer:
      'A master calendar hearing is a short, administrative check-in before an immigration judge — usually a matter of minutes. An individual hearing, also called a merits hearing, is a longer, trial-like proceeding where evidence and testimony are presented and the judge decides the case. Most removal proceedings include at least one master calendar hearing before reaching an individual hearing.',
    sections: [
      {
        type: 'comparison',
        heading: 'Side by Side',
        columns: ['Master Calendar Hearing', 'Individual Hearing'],
        rows: [
          { label: 'Purpose', a: 'Administrative — scheduling, pleadings, confirming information', b: 'Deciding the case on its merits' },
          { label: 'Typical length', a: 'A few minutes', b: 'An hour to a full day or more' },
          { label: 'What happens', a: 'The judge confirms basic case information and next steps', b: 'Evidence and testimony are presented and questioned' },
          { label: 'Who usually speaks', a: 'Mostly the judge and attorneys, briefly', b: 'Witnesses testify, including often the individual themselves' },
          { label: 'How many are typical', a: 'Often more than one, especially in busier courts', b: 'Usually one, though complex cases can involve more' },
        ],
      },
      {
        type: 'text',
        heading: 'What Happens at a Master Calendar Hearing',
        paragraphs: [
          'At a master calendar hearing, the immigration judge typically confirms the person’s identity and address, addresses the allegations in the Notice to Appear, and asks how the person pleads to the government’s charges. If relief from removal is being pursued, the judge sets deadlines for filing applications and schedules the next hearing. Most master calendar hearings are brief, and it is common for a case to involve more than one before moving forward — particularly in courts with heavy caseloads.',
        ],
      },
      {
        type: 'text',
        heading: 'What Happens at an Individual Hearing',
        paragraphs: [
          'An individual — or merits — hearing is where the substance of the case is actually decided. The person (and any witnesses) testify, documentary evidence is submitted, and the government’s attorney has the opportunity to cross-examine. The judge may rule the same day or reserve the decision for a later date. Because this hearing determines the outcome, preparation — organizing evidence, preparing testimony, anticipating the government’s questions — matters considerably more here than at a master calendar hearing.',
        ],
      },
      {
        type: 'text',
        heading: 'How Many Hearings Will There Be?',
        paragraphs: [
          'This varies significantly by case and by court. Straightforward matters may resolve after a single master calendar hearing; others involve several before an individual hearing is even scheduled, particularly given current immigration court backlogs in many jurisdictions. There is no fixed number that applies to every case — it depends on the relief being sought, the complexity of the evidence, and the specific court’s calendar.',
        ],
      },
      {
        type: 'callout',
        heading: 'Preparing for a Hearing',
        body: 'Arriving early, bringing identification and any documents the court has requested, and confirming whether an interpreter is needed all matter regardless of hearing type. Rockville Law Group represents clients directly in both English and Mandarin Chinese, without relying on a court interpreter for attorney-client communication.',
      },
    ],
    faqs: [
      {
        q: 'Do I need to bring anything to a master calendar hearing?',
        qZh: '主日历听证需要携带什么材料？',
        a: 'Identification and any documents the court or your attorney has specifically asked you to bring. Master calendar hearings are largely administrative, so the requirements are generally lighter than for an individual hearing.',
      },
      {
        q: 'Can a case be decided at a master calendar hearing?',
        qZh: '主日历听证是否可以直接决定案件结果？',
        a: 'Occasionally — for example, if relief is granted by agreement or a case is otherwise resolved without a full merits hearing. Most contested cases, however, are decided at an individual hearing.',
      },
      {
        q: 'What if I cannot attend a scheduled hearing?',
        qZh: '如果无法出席已安排的聆讯怎么办？',
        a: 'Missing a hearing without prior arrangement can result in an in absentia removal order. If a conflict arises, it needs to be raised with the court in advance whenever possible — waiting until after a missed hearing is a much harder position to fix.',
      },
      {
        q: 'I am an attorney and cannot attend a hearing — is coverage available?',
        qZh: '如果是律师且无法出庭，是否可以申请代理出庭？',
        a: 'Rockville Law Group provides qualifying hearing coverage for other attorneys, including master calendar and individual hearings — see the For Attorneys page for details on courts, admissions, and how to request coverage.',
      },
    ],
  },

  {
    slug: 'adjustment-of-status-vs-consular-processing',
    title: 'Adjustment of Status vs. Consular Processing: Which Applies to You?',
    metaTitle: 'Adjustment of Status vs. Consular Processing | Rockville Law Group',
    metaDescription:
      'The two ways to complete a green card case — adjustment of status inside the U.S. or consular processing abroad — compared side by side, for family and employment cases.',
    dek: 'Every green card case ends the same way in principle — but where and how that final step happens depends on where the applicant is living and their immigration history.',
    category: 'Family & Employment Immigration',
    categoryZh: '家庭与职业移民',
    datePublished: '2026-08-17',
    dateModified: '2026-08-17',
    author: 'Rockville Law Group',
    ...NOT_YET_REVIEWED,
    relatedService: { label: 'Family-Based Green Cards', to: '/family-based-green-cards' },
    secondaryRelatedService: { label: 'Employment-Based Green Cards', to: '/employment-based-green-cards' },
    quickAnswer:
      'Adjustment of status and consular processing are the two ways to complete the final step of a green card case. Adjustment of status is handled inside the United States, through USCIS. Consular processing is completed at a U.S. embassy or consulate abroad, through the Department of State. Which one applies generally depends on where the applicant is living and their immigration history — not personal preference alone.',
    sections: [
      {
        type: 'comparison',
        heading: 'Side by Side',
        columns: ['Adjustment of Status', 'Consular Processing'],
        rows: [
          { label: 'Where it happens', a: 'Inside the U.S., through USCIS', b: 'At a U.S. embassy or consulate abroad' },
          { label: 'Applicant location', a: 'Must generally remain in the U.S. while the case is pending', b: 'Must be, or travel to be, outside the U.S. for the interview' },
          { label: 'Travel while pending', a: 'May be possible with Advance Parole', b: 'Not applicable — the applicant is already abroad' },
          { label: 'Work authorization while pending', a: 'May be available through an Employment Authorization Document', b: 'Not applicable before the immigrant visa is issued' },
          { label: 'Typical fit', a: 'Applicants already living in the U.S. on a valid basis, or filing concurrently as an immediate relative', b: 'Applicants living abroad, or whose immigration history makes adjustment unavailable' },
        ],
      },
      {
        type: 'text',
        heading: 'Why the Distinction Matters',
        paragraphs: [
          'The two paths are not interchangeable options to pick freely — eligibility for adjustment of status depends on specific legal requirements, including how the applicant last entered the United States and whether they have maintained lawful status. Someone who does not meet those requirements may need to pursue consular processing even if they are currently living in the U.S., which can also mean leaving the country to complete the process — a consequence worth understanding well before it becomes relevant.',
        ],
      },
      {
        type: 'text',
        heading: 'How This Applies to Family- and Employment-Based Cases',
        paragraphs: [
          'Both family-based and employment-based green card cases end with either adjustment of status or consular processing — the underlying category doesn’t change which options exist, but it does affect timing. An immediate relative of a U.S. citizen who is in the U.S. can sometimes file the adjustment application concurrently with the initial petition. An employment-based applicant generally waits for the underlying petition to be approved and a visa to become available before adjustment can be filed. Read more about family-based green cards or employment-based green cards for the category-specific process.',
        ],
      },
      {
        type: 'callout',
        heading: 'Complications That Can Affect the Choice',
        body: 'A period of unlawful presence, a prior overstay, certain criminal history, or other grounds of inadmissibility can affect whether adjustment of status is available at all, and can carry separate consequences for consular processing as well. These situations are highly fact-specific — general information about the two paths is not a substitute for reviewing an individual history directly.',
      },
    ],
    faqs: [
      {
        q: 'Can I choose which one I want?',
        qZh: '可以自行选择办理方式吗？',
        a: 'Not entirely — eligibility for adjustment of status depends on specific legal requirements. Someone who doesn’t meet them may need to pursue consular processing regardless of preference.',
      },
      {
        q: 'Is one faster than the other?',
        qZh: '哪一种方式更快？',
        a: 'It depends on the category, the applicant’s home country, and current processing volumes at the relevant USCIS office or consulate — there is no single answer that applies to every case.',
      },
      {
        q: 'What happens if I leave the U.S. while an adjustment of status application is pending?',
        qZh: '在身份调整申请审理期间离开美国会怎样？',
        a: 'Leaving without first obtaining Advance Parole can be treated as abandoning the application in many circumstances. This is a common and serious mistake worth confirming before any travel.',
      },
      {
        q: 'Do you handle both family- and employment-based cases?',
        qZh: '是否同时办理家庭与职业移民案件？',
        a: 'Yes. Rockville Law Group represents clients in both family-based and employment-based green card matters, including the adjustment of status or consular processing stage of each.',
      },
    ],
  },

  {
    slug: 'immigration-court-hearing-coverage-guide',
    title: 'How Does Immigration Court Hearing Coverage Work? A Guide for Attorneys',
    metaTitle: 'Immigration Court Hearing Coverage: A Guide for Attorneys | Rockville Law Group',
    metaDescription:
      'How hearing coverage works for immigration attorneys who need another qualified attorney to appear on a matter — individual, master calendar, and BIA coverage explained.',
    dek: 'For attorneys who need another qualified lawyer to appear on a matter — because of a conflict, distance, or scheduling — here is how coverage typically works with Rockville Law Group.',
    category: 'Attorney Resources',
    categoryZh: '律师专区',
    datePublished: '2026-08-17',
    dateModified: '2026-08-17',
    author: 'Rockville Law Group',
    ...NOT_YET_REVIEWED,
    audience: 'attorney',
    relatedService: { label: 'For Attorneys', to: '/for-attorneys' },
    quickAnswer:
      'Hearing coverage means another qualified immigration attorney appears on the record for a specific hearing — typically a master calendar hearing, individual hearing, or BIA matter — when the attorney of record cannot attend. Rockville Law Group provides coverage for qualifying matters across several courts, with remote appearance available where the court allows it.',
    sections: [
      {
        type: 'text',
        heading: 'When Attorneys Typically Need Coverage',
        paragraphs: [
          'Coverage requests usually come down to a conflict that can’t be moved — an overlapping hearing in another court, a scheduling conflict, distance from the hearing location, illness, or simply a caseload that makes attending every hearing personally impractical. In these situations, having a qualified attorney appear on the record — rather than seeking a continuance — keeps the case moving and avoids delay for the client.',
        ],
      },
      {
        type: 'text',
        heading: 'What Coverage Typically Involves',
        paragraphs: [
          'A coverage attorney generally reviews the case file and posture in advance — the procedural history, what’s being addressed at the specific hearing, and any instructions from the attorney of record — appears on the record for that hearing, and reports back afterward on what occurred and any next steps or deadlines set by the court.',
        ],
      },
      {
        type: 'text',
        heading: 'Individual, Master, and BIA Coverage',
        paragraphs: [
          'Rockville Law Group covers individual hearings, master calendar hearings, and BIA matters. The preparation involved differs by hearing type: master calendar coverage is generally lighter-touch given the administrative nature of that hearing, while individual hearing coverage requires closer familiarity with the evidence and testimony strategy, since the outcome is being decided that day.',
        ],
      },
      {
        type: 'text',
        heading: 'Courts and Remote Appearance',
        paragraphs: [
          'Coverage is available across the courts below, with remote appearance available for qualifying matters, subject to the specific court’s rules and authorization.',
        ],
      },
      {
        type: 'steps',
        heading: 'How to Request Coverage',
        items: [
          { title: 'Submit a Request', desc: 'Share basic hearing details through the request form, or by phone or email.' },
          { title: 'Provide Hearing Information', desc: 'Court, hearing type, date, and any logistical details needed to evaluate the request.' },
          { title: 'Rockville Law Group Reviews', desc: 'Availability and fit for the matter are confirmed.' },
          { title: 'Discuss Scope & Availability', desc: 'Logistics, scope of appearance, and any open questions are discussed before confirming.' },
          { title: 'Confirm the Arrangement', desc: 'Once terms are agreed, the arrangement is confirmed in writing ahead of the hearing.' },
        ],
      },
      {
        type: 'callout',
        heading: 'Admissions vs. Appearance',
        body: 'Appearance in a given court does not necessarily reflect bar admission there — the two are separate and are kept separate throughout Rockville Law Group’s materials. See the For Attorneys page for the full breakdown of admissions versus courts of appearance.',
      },
    ],
    faqs: [
      {
        q: 'Is remote appearance always available?',
        qZh: '是否始终提供远程出庭？',
        a: 'Remote appearance is available for qualifying matters, but it depends on the specific court’s current rules and authorization for that hearing — this is confirmed as part of reviewing each request.',
      },
      {
        q: 'How much lead time is needed to request coverage?',
        qZh: '申请代理出庭需要提前多久联系？',
        a: 'As much notice as possible is preferred to properly review the file and confirm availability, though last-minute requests can sometimes be accommodated depending on the circumstances.',
      },
      {
        q: 'Does submitting a request guarantee coverage?',
        qZh: '提交申请是否保证获得代理？',
        a: 'No. Coverage is confirmed case by case, subject to scope, timing, and availability.',
      },
      {
        q: 'What information should I include in a coverage request?',
        qZh: '申请时应提供哪些信息？',
        a: 'The court, hearing type, date and time, and any relevant procedural history or instructions — the request form and follow-up discussion are designed to gather exactly this.',
      },
    ],
  },
]

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug)
}
