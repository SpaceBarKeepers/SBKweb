import React, { useState, useEffect } from 'react';
import { languageOptions, dictionaryList } from '../utils/languages/languages';
import { useParams } from 'react-router-dom';

export const LanguageContext = React.createContext({
  userLang: 'cs',
  text: dictionaryList.cs,
  userLangChange: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [userLang, setUserLang] = useState(
    window.localStorage.getItem('rcml-lang') || 'cs',
  );

  useEffect(() => {
    const langFromLocalStorage = window.localStorage.getItem('rcml-lang');
    if (langFromLocalStorage) setUserLang(langFromLocalStorage);
  }, [window.localStorage.getItem('rcml-lang')]);

  const provider = {
    userLang,
    text: dictionaryList[userLang],
    userLangChange: (selected) => {
      const newLang = languageOptions[selected] ? selected : 'cs';
      setUserLang(newLang);
      window.localStorage.setItem('rcml-lang', newLang);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
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
