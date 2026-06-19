/**
 * @file ServicesSection.tsx
 * @description Services overview section for the cleaning landing page.
 */

import React from 'react'
import { Building2, Hammer, Home, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * @component ServicesSection
 * @description Presents the main cleaning services with icons and descriptions.
 */
export const ServicesSection: React.FC = () => {
  const { t } = useTranslation()

  const services = [
    {
      id: 'residential',
      icon: Home,
      title: t('services.residential.title'),
      badge: t('services.residential.badge'),
      description: t('services.residential.description'),
      points: t('services.residential.points', {
        returnObjects: true,
      }) as string[],
    },
    {
      id: 'commercial',
      icon: Building2,
      title: t('services.commercial.title'),
      badge: t('services.commercial.badge'),
      description: t('services.commercial.description'),
      points: t('services.commercial.points', {
        returnObjects: true,
      }) as string[],
    },
    {
      id: 'post-work',
      icon: Hammer,
      title: t('services.postWork.title'),
      badge: t('services.postWork.badge'),
      description: t('services.postWork.description'),
      points: t('services.postWork.points', {
        returnObjects: true,
      }) as string[],
    },
  ]

  return (
    <section id="services" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col items-center text-center md:mb-12">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-emerald-700">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            {t('services.badge')}
          </p>
          <h2 className="mt-3 text-balance text-2xl font-semibold text-slate-900 sm:text-3xl">
            {t('services.heading')}
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            {t('services.subheading')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-md"
              >
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-600 text-white shadow-sm shadow-sky-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 rounded-xl bg-gradient-to-r from-sky-50 to-emerald-50 px-3 py-2 text-xs text-slate-700">
                  {t('services.cardNote')}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
