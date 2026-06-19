/**
 * @file ContactFooter.tsx
 * @description Footer section with contact form and company info for the landing page.
 */

import React, { useState } from 'react'
import { Mail, MapPin, Phone, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { COMPANY_NAME } from '../../constants/company'

/**
 * @interface ContactFormData
 * @description Contact form state structure.
 */
interface ContactFormData {
  name: string
  email: string
  phone: string
  serviceType: string
  message: string
}

/**
 * @component ContactFooter
 * @description Displays a contact form, basic navigation links and company details.
 */
export const ContactFooter: React.FC = () => {
  const { t } = useTranslation()

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  /**
   * @function handleChange
   * @description Updates form state when an input value changes.
   */
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (submitted) {
      setSubmitted(false)
    }
  }

  /**
   * @function handleSubmit
   * @description Handles contact form submission locally with a confirmation message.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // In a real application, this is where a request to a backend API would be made.
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      message: '',
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="border-t border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="mb-10 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-900/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-sky-100">
              <Sparkles className="h-3 w-3 text-emerald-300" aria-hidden="true" />
              {t('footer.badge')}
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold sm:text-3xl">
              {t('footer.heading')}
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300 sm:text-base">
              {t('footer.description')}
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-lg shadow-slate-950/40 sm:p-5"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-slate-100"
                  >
                    {t('footer.form.nameLabel')}
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-10 w-full rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-50 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    placeholder={t('footer.form.namePlaceholder')}
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-slate-100"
                  >
                    {t('footer.form.emailLabel')}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-10 w-full rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-50 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    placeholder={t('footer.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="text-xs font-medium text-slate-100"
                  >
                    {t('footer.form.phoneLabel')}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-10 w-full rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-50 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    placeholder={t('footer.form.phonePlaceholder')}
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="serviceType"
                    className="text-xs font-medium text-slate-100"
                  >
                    {t('footer.form.serviceTypeLabel')}
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="h-10 w-full rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-50 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="" disabled>
                      {t('footer.form.serviceTypePlaceholder')}
                    </option>
                    <option value="residential">
                      {t('footer.form.serviceTypeResidential')}
                    </option>
                    <option value="commercial">
                      {t('footer.form.serviceTypeCommercial')}
                    </option>
                    <option value="post-construction">
                      {t('footer.form.serviceTypePostConstruction')}
                    </option>
                    <option value="other">
                      {t('footer.form.serviceTypeOther')}
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-slate-100"
                >
                  {t('footer.form.messageLabel')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  placeholder={t('footer.form.messagePlaceholder')}
                />
              </div>

              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-sky-900/40 transition hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                {t('footer.form.submit')}
              </button>

              {submitted && (
                <p className="mt-2 text-xs text-emerald-300">
                  {t('footer.form.success')}
                </p>
              )}
            </form>
          </div>

          <div className="space-y-6 text-sm text-slate-300">
            <div>
              <h3 className="text-sm font-semibold text-slate-50">
                {COMPANY_NAME}
              </h3>
              <p className="mt-2 text-xs text-slate-400">
                {t('footer.companyNote')}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-emerald-300" aria-hidden="true" />
                <p>
                  123, Rue de la Propreté
                  <br />
                  Ottawa, ON K1A 0A1
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                <a href="tel:6135550123" className="hover:text-sky-200">
                  (613) 712-2109
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                <a
                  href="mailto:faido.cleaning@gmail.com"
                  className="hover:text-sky-200"
                >
                  faido.cleaning@gmail.com
                </a>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            <div className="flex flex-wrap gap-4 text-xs text-slate-400">
              <nav className="flex flex-wrap gap-3">
                <a href="#hero" className="hover:text-sky-200">
                  {t('footer.navHome')}
                </a>
                <a href="#services" className="hover:text-sky-200">
                  {t('footer.navServices')}
                </a>
                <a href="#zone" className="hover:text-sky-200">
                  {t('footer.navCoverage')}
                </a>
                <a href="#processus" className="hover:text-sky-200">
                  {t('footer.navProcess')}
                </a>
                <a href="#contact" className="hover:text-sky-200">
                  {t('footer.navContact')}
                </a>
              </nav>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-4 text-[11px] text-slate-500">
              <p>
                &copy; {currentYear} {COMPANY_NAME}. {t('footer.copyright')}
              </p>
              <p>{t('footer.legalLine')}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
