import { useState } from 'react';

const DEFAULT_LOCALE = 'en-US';

export const LanguagesManager = () => {
  const [currentLocale, setCurrentLocale] = useState(
    localStorage.getItem('locale') || DEFAULT_LOCALE
  );
  const setLocale = (locale: string) => {
    setCurrentLocale(locale);
    localStorage.setItem('locale', locale);
  };
  return { currentLocale, setLocale };
};
