/**
 * @file HeroSection.tsx
 * @description Hero (top) section for the professional cleaning landing page.
 */

import React from 'react'
import { MapPin, PhoneCall, ShieldCheck, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { COMPANY_NAME } from '../../constants/company'

/**
 * @component HeroSection
 * @description Main hero banner highlighting reliability and premium cleaning in Ottawa/Gatineau.
 */
export const HeroSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply">
        <div className="absolute -left-40 top-0 h-72 w-72 rounded-full bg-sky-200 blur-3xl" />
        <div className="absolute bottom-0 right-[-6rem] h-80 w-80 rounded-full bg-emerald-200 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-16 md:flex-row md:py-24 lg:py-28">
        {/* Text content */}
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-sky-800">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            {t('hero.badge')}
          </p>

          <h1 className="text-balance text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            {t('hero.titleBeforeCity')}{' '}
            <span className="text-sky-700">{t('hero.titleCity')}</span>
            {t('hero.titleAfterCity')}
          </h1>

          <p className="text-balance text-sm text-slate-600 sm:text-base">
            {t('hero.description', { companyName: COMPANY_NAME })}
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
            {/* CORRECTION : Le lien pointe maintenant vers l'ancre du formulaire en bas de page */}
            <button
  onClick={(e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }}
  className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-sky-200 transition hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50"
>
  {t('hero.primaryCta')}
</button>
            {/* CORRECTION : Le numéro de téléphone pointe vers le bon numéro d'Ottawa/Gatineau */}
            <a
              href="tel:+16137122109"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-medium text-sky-800 shadow-sm transition hover:border-sky-300 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50"
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              {t('hero.secondaryCta')}
            </a>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-600 md:justify-start">
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
              <span>{t('hero.bullet1')}</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-sky-600" aria-hidden="true" />
              <span>{t('hero.bullet2')}</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-sky-600" aria-hidden="true" />
              <span>{t('hero.bullet3')}</span>
            </div>
          </div>
        </div>

        {/* Image / visual card */}
        <div className="w-full max-w-md shrink-0">
          <div className="relative h-72 overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-xl shadow-sky-100 md:h-96">
            {/* CORRECTION : Remplacement du lien CDN par votre image locale personnalisée */}
            <img
              src="/hero-cleaning.jpg"
              alt={t('hero.imageAlt')}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 space-y-2 text-sm text-white">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
                <Sparkles className="h-3 w-3 text-emerald-300" aria-hidden="true" />
                {t('hero.cardBadge')}
              </p>
              <p className="font-semibold">{t('hero.cardText')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
