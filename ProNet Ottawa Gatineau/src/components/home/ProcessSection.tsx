/**
 * @file ProcessSection.tsx
 * @description Simple 3-step process section for the cleaning landing page.
 */

import React from 'react'
import { ArrowRight, ClipboardList, MessageCircle, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * @component ProcessSection
 * @description Explains the simple 3-step process from quote request to clean space.
 */
export const ProcessSection: React.FC = () => {
  const { t } = useTranslation()

  const steps = t('process.steps', {
    returnObjects: true,
  }) as { title: string; description: string }[]

  const iconMap = [ClipboardList, MessageCircle, Sparkles]

  return (
    <section id="processus" className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-sky-800">
              {t('process.badge')}
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold text-slate-900 sm:text-3xl">
              {t('process.heading')}
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              {t('process.description')}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs text-slate-700">
            <ArrowRight className="h-3 w-3 text-sky-600" aria-hidden={true} />
            {t('process.chipText')}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((stepItem, index) => {
            const Icon = iconMap[index] ?? ClipboardList
            const stepNumber = (index + 1).toString().padStart(2, '0')

            return (
              <article
                key={stepItem.title}
                className="relative flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-600 text-white shadow-sm shadow-sky-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="text-right text-xs font-medium text-slate-500">
                    {t('process.stepLabel')}
                    <div className="text-lg font-semibold text-sky-700">
                      {stepNumber}
                    </div>
                  </div>
                </div>
                <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                  {stepItem.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {stepItem.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
