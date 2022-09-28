import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend'

const fallbackLng = ['es']
const availableLanguages = ['es', 'en']

i18n.use(Backend)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng,
        detection: {
            checkWhitelist: true
        },
        debug: false,
        whitelist: availableLanguages,
        interpolation: {
            escapeValue: false // no need for react. it escapes by default
        }
    })



export default i18n






