import { LOCALES } from './locales';
import { Message } from './messages';

export const translations = {
  [LOCALES.ENGLISH]: {
    [Message.Logout]: 'Log out',
    [Message.Account]: 'Account',
    [Message.Home]: 'Home',
    [Message.PAGE404TEST]: 'PAGE 404 TEST',
    [Message.SignIn]: 'Sign In',
  },
  [LOCALES.RUSSIAN]: {
    [Message.Logout]: 'Выйти',
    [Message.Account]: 'Аккаунт',
    [Message.Home]: 'Домой',
    [Message.PAGE404TEST]: 'СТРАНИЦА 404 ТЕСТ',
    [Message.SignIn]: 'Войти',
  },
};
