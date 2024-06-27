import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from "../src/locale/en.json";
import trJson from "../src/locale/tr.json";




i18n
    .use(initReactI18next) 
    .init({
        resources : {
            en: {...enJson},
            tr:{...trJson}
        },
        lng: "en", 
        interpolation: {
            escapeValue: false 
        }
    });

export default i18n;
