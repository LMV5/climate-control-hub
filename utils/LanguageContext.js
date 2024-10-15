import { createContext, useContext, useState, useEffect } from "react";
import i18n from "@/i18";
import { getSettings } from "./getSettings";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const fetchSettings = async () => {
      const settings = await getSettings();
      const lang = settings.language || "en";
      i18n.changeLanguage(language);
      setLanguage(language);
    };

    fetchSettings();
  }, []);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
