import { initReactI18next } from 'react-i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import vnMessage from './vn/message'
import vnHeader from './vn/header'

import enMessage from './en/message'
import enHeader from './en/header'

import i18n from 'i18next'

i18n.use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .init({
        fallbackLng: 'en',
        debug: false,
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
        resources: {
            en: {
                message: enMessage,
                header: enHeader,
            },
            vn: {
                message: vnMessage,
                header: vnHeader,
            },
        },
    })

export default i18n
