export interface ILangSwitcherProps {
  currentLocale: string;
  setLocale: (locale: string) => void;
  isOpen: boolean;
}
