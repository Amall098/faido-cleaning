/**
 * @file CoverageSection.tsx
 * @description Geographic coverage section for the cleaning landing page.
 */

import React from 'react'
import { MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * @component CoverageSection
 * @description Highlights the service area covering Ottawa/Gatineau and surroundings.
 */
export const CoverageSection: React.FC = () => {
  const { t } = useTranslation()

  const areas = [
    'Ottawa',
    'Gatineau',
    'Hull',
    'Kanata',
    'Orleans',
    t('coverage.areaSurroundings'),
  ]

  return (
    <section
      id="zone"
      className="border-y border-slate-100 bg-slate-50/80 py-14 md:py-16"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {t('coverage.badge')}
          </div>
          <h2 className="text-balance text-2xl font-semibold text-slate-900 sm:text-3xl">
            {t('coverage.heading')}
          </h2>
          <p className="text-sm text-slate-600 sm:text-base">
            {t('coverage.description')}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 md:max-w-sm">
          {areas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-medium text-slate-800 shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
