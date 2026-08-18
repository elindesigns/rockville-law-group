import Hero from '../components/home/Hero.jsx'
import HowWeHelp from '../components/home/HowWeHelp.jsx'
import MainPracticeAreas from '../components/home/MainPracticeAreas.jsx'
import MatterTeaser from '../components/home/MatterTeaser.jsx'
import WhyRockville from '../components/home/WhyRockville.jsx'
import WeChatSection from '../components/home/WeChatSection.jsx'
import AttorneyTeaser from '../components/home/AttorneyTeaser.jsx'
import Testimonials from '../components/Testimonials.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import JurisdictionDisplay from '../components/JurisdictionDisplay.jsx'
import CTABand from '../components/CTABand.jsx'
import { BuildingIcon } from '../components/shared/Icons.jsx'
import useDocumentTitle from '../lib/useDocumentTitle.js'
import useStructuredData from '../lib/useStructuredData.js'
import { legalServiceSchema, websiteSchema } from '../lib/structuredData.js'

export default function Home() {
  useDocumentTitle(
    'New York Law Firm | Rockville Law Group',
    'Rockville Law Group is a New York law firm representing individuals, families, and businesses across immigration, family law, estate planning, and business law, led by attorney Li Weng. Consultations in English and Mandarin Chinese.',
    { lang: 'en-US', alternatePath: '/zh' },
  )
  useStructuredData([legalServiceSchema(), websiteSchema()])

  return (
    <>
      <Hero />
      <HowWeHelp />
      <MainPracticeAreas />
      <AttorneyTeaser />

      {/* Two featured matters, not one per practice area — all six are
          already listed with descriptions and CTAs in MainPracticeAreas
          directly above, so repeating each one full-bleed just made the
          page longer without adding information. These two carry the
          firm's two broadest audiences (individual/family and business)
          and cross-link the narrower areas from their own pages. */}
      <MatterTeaser
        eyebrow="Matter — Immigration Law"
        title="Representation in Immigration Matters"
        zh="移民法"
        markZh="移民"
        description="Family-based green cards, asylum, EB-1A petitions, and employment-based immigration — through to representation before an immigration judge. Rockville Law Group handles immigration matters from the first filing to the final hearing."
        cta={{ label: 'Explore Immigration Law', to: '/immigration-services' }}
        secondaryCta={{ label: 'Immigration Court', to: '/immigration-court' }}
      />

      <MatterTeaser
        eyebrow="Matter — Business & Corporate Law"
        title="Business & Corporate Counsel"
        zh="商业与公司法"
        markZh="商法"
        description="From formation through contracts, transactions, and the occasional dispute, Rockville Law Group advises New York business owners on the legal matters that come with running and growing a business."
        cta={{ label: 'Explore Business Law', to: '/business-law' }}
        secondaryCta={{ label: 'Securities Law', to: '/ipo-securities' }}
        tone="deep"
        reverse
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Locations & Jurisdictions"
            title="Where Rockville Law Group Practices"
            zh="执业地区与法院"
            align="center"
            icon={BuildingIcon}
          />
          <JurisdictionDisplay />
        </div>
      </section>

      <WhyRockville />
      <Testimonials />

      <WeChatSection />

      {/* Closing CTA stays last: WeChat is an alternative way to reach
          the firm, not the page's final ask. */}
      <CTABand
        eyebrow="Get Started"
        title="Ready to Talk Through Your Situation?"
        description="Schedule a consultation to discuss your legal matter, or read a guide first if you're still getting oriented."
        primary={{ label: 'Schedule a Consultation', to: '/contact#consultation' }}
        secondary={{ label: 'Guides & Resources', to: '/resources' }}
      />
    </>
  )
}
