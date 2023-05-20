import { LOCALES } from './locales';
import { Message } from './messages';

export const translations = {
  [LOCALES.ENGLISH]: {
    [Message.Logout]: 'Log out',
    [Message.Account]: 'Account',
    [Message.Home]: 'Home',
    [Message.PAGE404TEST]: 'PAGE 404 TEST',
    [Message.SignIn]: 'Sign In',
    [Message.SignUp]: 'Sign up',
    [Message.SignOut]: 'Sign Out',
    [Message.GoToMainPage]: 'Go to Main Page',
  },
  [LOCALES.RUSSIAN]: {
    [Message.Logout]: 'Выйти',
    [Message.Account]: 'Аккаунт',
    [Message.Home]: 'Домой',
    [Message.PAGE404TEST]: 'СТРАНИЦА 404 ТЕСТ',
    [Message.SignIn]: 'Войти',
    [Message.SignUp]: 'Зарегистрироваться',
    [Message.SignOut]: 'Выйти',
    [Message.GoToMainPage]: 'На главную',
  },
};
