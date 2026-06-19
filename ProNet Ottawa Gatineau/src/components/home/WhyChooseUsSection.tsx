/**
 * @file WhyChooseUsSection.tsx
 * @description Trust and differentiation section for the cleaning landing page.
 */

import React from 'react'
import { BadgeCheck, Leaf, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * @component WhyChooseUsSection
 * @description Explains why customers in Ottawa/Gatineau should trust the company.
 */
export const WhyChooseUsSection: React.FC = () => {
  const { t } = useTranslation()

  const reasons = t('whyChooseUs.reasons', {
    returnObjects: true,
  }) as { title: string; description: string }[]

  const iconMap = [ShieldCheck, Leaf, BadgeCheck]

  return (
    <section id="pourquoi" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-50">
            {t('whyChooseUs.badge')}
          </p>
          <h2 className="mt-3 text-balance text-2xl font-semibold text-slate-900 sm:text-3xl">
            {t('whyChooseUs.heading')}
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            {t('whyChooseUs.description')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = iconMap[index] ?? ShieldCheck
            return (
              <article
                key={reason.title}
                className="flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50/80 p-5 shadow-sm"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm shadow-emerald-200">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {reason.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
