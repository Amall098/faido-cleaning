/**
 * @file LanguageToggle.tsx
 * @description Small control to switch between French and English languages.
 */

import React from 'react'
import { useTranslation } from 'react-i18next'

/**
 * @component LanguageToggle
 * @description Renders a compact FR/EN toggle that updates the active i18n language.
 */
export const LanguageToggle: React.FC = () => {
  const { i18n, t } = useTranslation()

  const currentLang = i18n.language.startsWith('fr') ? 'fr' : 'en'

  /**
   * @function handleChangeLanguage
   * @description Changes the active language if different from the current one.
   */
  const handleChangeLanguage = (lang: 'fr' | 'en') => {
    if (lang !== currentLang) {
      void i18n.changeLanguage(lang)
    }
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-2 py-1 text-xs text-slate-700 shadow-sm backdrop-blur">
      <span className="hidden text-[10px] uppercase tracking-[0.16em] text-slate-400 sm:inline">
        {t('languageToggle.label')}
      </span>
      <div className="flex rounded-full bg-slate-100 p-0.5">
        <button
          type="button"
          onClick={() => handleChangeLanguage('fr')}
          className={`rounded-full px-2 py-1 text-[11px] font-medium transition ${
            currentLang === 'fr'
              ? 'bg-slate-900 text-white shadow'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          {t('languageToggle.frShort')}
        </button>
        <button
          type="button"
          onClick={() => handleChangeLanguage('en')}
          className={`rounded-full px-2 py-1 text-[11px] font-medium transition ${
            currentLang === 'en'
              ? 'bg-slate-900 text-white shadow'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          {t('languageToggle.enShort')}
        </button>
      </div>
    </div>
  )
}
