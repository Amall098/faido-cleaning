/**
 * @file App.tsx
 * @description Root application component with routing and i18n provider.
 */

import React from 'react'
import { HashRouter, Route, Routes } from 'react-router'
import { I18nextProvider } from 'react-i18next'
import HomePage from './pages/Home'
import i18n from './i18n'

/**
 * @component App
 * @description Wraps the router with the i18n provider and defines top-level routes.
 */
export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </I18nextProvider>
  )
}
