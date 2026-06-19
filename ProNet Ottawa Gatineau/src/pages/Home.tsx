/**
 * @file Home.tsx
 * @description Main landing page for the professional cleaning company website.
 */

import React from 'react'
import { HeroSection } from '../components/home/HeroSection'
import { ServicesSection } from '../components/home/ServicesSection'
import { CoverageSection } from '../components/home/CoverageSection'
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection'
import { ProcessSection } from '../components/home/ProcessSection'
import { ContactFooter } from '../components/home/ContactFooter'
import { LanguageToggle } from '../components/common/LanguageToggle'
import { COMPANY_NAME } from '../constants/company'
import { useTranslation } from 'react-i18next'

/**
 * @component HomePage
 * @description Composes all sections to create a conversion-focused landing page.
 */
const HomePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#hero" className="flex items-baseline gap-2">
            <span className="text-sm font-semibold text-slate-900">
              {COMPANY_NAME}
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 sm:inline">
              {t('common.companyTagline')}
            </span>
          </a>
          <LanguageToggle />
        </div>
      </header>

      <main>
        <HeroSection />
        <ServicesSection />
        <CoverageSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <ContactFooter />
      </main>
    </div>
  )
}

export default HomePage
