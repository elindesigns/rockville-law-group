import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MobileActionBar from './components/MobileActionBar.jsx'
import PageTransition from './components/PageTransition.jsx'
import Home from './pages/Home.jsx'
import HomeZh from './pages/HomeZh.jsx'
import NotFound from './pages/NotFound.jsx'

// Home, HomeZh, and NotFound stay in the main bundle — they're the
// three routes most visitors land on directly (EN/ZH homepage, or a
// broken/mistyped link), so bundling them avoids a second round-trip
// on the most common entry paths. Every other route is fetched only
// when actually visited, keeping the initial JS payload to what a
// typical visitor needs instead of all ~35 routes' worth of code.
const About = lazy(() => import('./pages/About.jsx'))
const PracticeAreasHub = lazy(() => import('./pages/PracticeAreasHub.jsx'))
const FamilyLaw = lazy(() => import('./pages/FamilyLaw.jsx'))
const EstatePlanning = lazy(() => import('./pages/EstatePlanning.jsx'))
const BusinessLaw = lazy(() => import('./pages/BusinessLaw.jsx'))
const IpoSecurities = lazy(() => import('./pages/IpoSecurities.jsx'))
const EscrowServices = lazy(() => import('./pages/EscrowServices.jsx'))
const ImmigrationServices = lazy(() => import('./pages/ImmigrationServices.jsx'))
const FamilyBasedGreenCards = lazy(() => import('./pages/FamilyBasedGreenCards.jsx'))
const Asylum = lazy(() => import('./pages/Asylum.jsx'))
const Eb1a = lazy(() => import('./pages/Eb1a.jsx'))
const EmploymentBasedGreenCards = lazy(() => import('./pages/EmploymentBasedGreenCards.jsx'))
const ImmigrationCourt = lazy(() => import('./pages/ImmigrationCourt.jsx'))
const ForAttorneys = lazy(() => import('./pages/ForAttorneys.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Resources = lazy(() => import('./pages/Resources.jsx'))
const Article = lazy(() => import('./pages/Article.jsx'))
const Privacy = lazy(() => import('./pages/Privacy.jsx'))
const Terms = lazy(() => import('./pages/Terms.jsx'))
const PracticeAreasHubZh = lazy(() => import('./pages/PracticeAreasHubZh.jsx'))
const FamilyLawZh = lazy(() => import('./pages/FamilyLawZh.jsx'))
const EstatePlanningZh = lazy(() => import('./pages/EstatePlanningZh.jsx'))
const BusinessLawZh = lazy(() => import('./pages/BusinessLawZh.jsx'))
const IpoSecuritiesZh = lazy(() => import('./pages/IpoSecuritiesZh.jsx'))
const EscrowServicesZh = lazy(() => import('./pages/EscrowServicesZh.jsx'))
const ImmigrationServicesZh = lazy(() => import('./pages/ImmigrationServicesZh.jsx'))
const AboutZh = lazy(() => import('./pages/AboutZh.jsx'))
const FamilyBasedGreenCardsZh = lazy(() => import('./pages/FamilyBasedGreenCardsZh.jsx'))
const AsylumZh = lazy(() => import('./pages/AsylumZh.jsx'))
const Eb1aZh = lazy(() => import('./pages/Eb1aZh.jsx'))
const EmploymentBasedGreenCardsZh = lazy(() => import('./pages/EmploymentBasedGreenCardsZh.jsx'))
const ImmigrationCourtZh = lazy(() => import('./pages/ImmigrationCourtZh.jsx'))
const AttorneyHearingCoverageZh = lazy(() => import('./pages/AttorneyHearingCoverageZh.jsx'))
const ContactZh = lazy(() => import('./pages/ContactZh.jsx'))
const PrivacyZh = lazy(() => import('./pages/PrivacyZh.jsx'))
const TermsZh = lazy(() => import('./pages/TermsZh.jsx'))

export default function App() {
  const location = useLocation()
  const isZh = location.pathname === '/zh' || location.pathname.startsWith('/zh/')

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        {isZh ? '跳转到主要内容' : 'Skip to content'}
      </a>
      <Header />
      <main id="main">
        <PageTransition>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/practice-areas" element={<PracticeAreasHub />} />
              <Route path="/family-law" element={<FamilyLaw />} />
              <Route path="/estate-planning" element={<EstatePlanning />} />
              <Route path="/business-law" element={<BusinessLaw />} />
              <Route path="/ipo-securities" element={<IpoSecurities />} />
              <Route path="/escrow-services" element={<EscrowServices />} />
              <Route path="/immigration-services" element={<ImmigrationServices />} />
              <Route path="/family-based-green-cards" element={<FamilyBasedGreenCards />} />
              <Route path="/asylum" element={<Asylum />} />
              <Route path="/eb1a" element={<Eb1a />} />
              <Route path="/employment-based-green-cards" element={<EmploymentBasedGreenCards />} />
              <Route path="/immigration-court" element={<ImmigrationCourt />} />
              <Route path="/for-attorneys" element={<ForAttorneys />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/:slug" element={<Article />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />

              <Route path="/zh" element={<HomeZh />} />
              <Route path="/zh/practice-areas" element={<PracticeAreasHubZh />} />
              <Route path="/zh/family-law" element={<FamilyLawZh />} />
              <Route path="/zh/estate-planning" element={<EstatePlanningZh />} />
              <Route path="/zh/business-law" element={<BusinessLawZh />} />
              <Route path="/zh/ipo-securities" element={<IpoSecuritiesZh />} />
              <Route path="/zh/escrow-services" element={<EscrowServicesZh />} />
              <Route path="/zh/immigration-services" element={<ImmigrationServicesZh />} />
              <Route path="/zh/about" element={<AboutZh />} />
              <Route path="/zh/family-based-green-cards" element={<FamilyBasedGreenCardsZh />} />
              <Route path="/zh/asylum" element={<AsylumZh />} />
              <Route path="/zh/eb1a" element={<Eb1aZh />} />
              <Route path="/zh/employment-based-green-cards" element={<EmploymentBasedGreenCardsZh />} />
              <Route path="/zh/immigration-court" element={<ImmigrationCourtZh />} />
              <Route path="/zh/attorney-hearing-coverage" element={<AttorneyHearingCoverageZh />} />
              <Route path="/zh/contact" element={<ContactZh />} />
              <Route path="/zh/privacy" element={<PrivacyZh />} />
              <Route path="/zh/terms" element={<TermsZh />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageTransition>
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  )
}
