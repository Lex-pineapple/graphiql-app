import './../styles/langSwitcher.scss';
import { LOCALES } from './languages/locales';
import { LangSwitcherProps } from './types/langSwitcherProps';

export const LangSwitcher = ({ setLocale, currentLocale, isOpen }: LangSwitcherProps) => {
  const handelLocaleClick = () => {
    setLocale(currentLocale === LOCALES.ENGLISH ? LOCALES.RUSSIAN : LOCALES.ENGLISH);
  };

  return (
    <button
      className={`lang-switcher__button ${isOpen ? 'is-open' : ''}`}
      onClick={handelLocaleClick}
    >
      {currentLocale === LOCALES.ENGLISH ? 'EN' : 'RU'}
    </button>
  );
};
