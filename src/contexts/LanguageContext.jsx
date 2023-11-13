import React, { useState, useEffect } from 'react';
import { languageOptions, dictionaryList } from '../utils/languages/languages';
import { useParams } from 'react-router-dom';

export const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {
  const [userLang, setUserLang] = useState(
    window.localStorage.getItem('rcml-lang') || navigator.language.toLowerCase().includes("cs") ? "cs" : 'en',
  );

  useEffect(() => {
    const langFromLocalStorage = window.localStorage.getItem('rcml-lang');
    if (langFromLocalStorage) setUserLang(langFromLocalStorage);
  }, []);

  return (
    <LanguageContext.Provider value={{
      userLang,
      text: dictionaryList[userLang],
      userLangChange: (selected) => {
        const newLang = languageOptions[selected] ? selected : 'cs';
        setUserLang(newLang);
        window.localStorage.setItem('rcml-lang', newLang);
      },
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const { lang } = useParams();

  if (lang) {
    window.localStorage.setItem('rcml-lang', lang);
  }

  return React.useContext(LanguageContext);
};
