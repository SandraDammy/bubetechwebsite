import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const savedLang = localStorage.getItem("appLang") || "en"; 

i18n
.use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
      lng: savedLang,
      fallbackLng: "en",
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", 
    },
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;


