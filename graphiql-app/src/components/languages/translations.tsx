import { LOCALES } from './locales';
import { Message } from './messages';
import { WelcomePageMsg } from './welcomePageMsg';

export const translations = {
  [LOCALES.ENGLISH]: {
    [Message.Logout]: 'Log out',
    [Message.Account]: 'Account',
    [Message.Home]: 'Home',
    [Message.SignIn]: 'Sign In',
    [Message.SignUp]: 'Sign up',
    [Message.SignOut]: 'Sign Out',
    [Message.GoToMainPage]: 'Go to Main Page',
    [WelcomePageMsg.mainDescr]:
      'A graphical interactive in-browser IDE - a powerful tool that offers syntax highlighting, automatic documentation, and much more.',
    [WelcomePageMsg.getStartedBtn]: 'Get Started',
    [WelcomePageMsg.aboutMainHeader]: 'About the QraphiQL',
    [WelcomePageMsg.aboutHeader1]: 'A query language for API',
    [WelcomePageMsg.aboutHeader2]: 'Get exactly what you need from the API',
    [WelcomePageMsg.aboutHeader3]: 'Get many resources in a single request',
    [WelcomePageMsg.aboutDescr1]:
      'GraphQL is a query language for APIs and a runtime for fulfilling those queries. GraphQL provides a complete and understandable description of the data in API, giving your the power to ask for exactly what need and nothing more.',
    [WelcomePageMsg.aboutDescr2]:
      'Send a GraphQL query to the API and get exactly what you need, nothing more and nothing less. GraphQL queries always return predictable results. Apps using GraphQL are fast and stable because they control the data they get, not the server.',
    [WelcomePageMsg.aboutDescr3]:
      'GraphQL queries access not just the properties of one resource but also smoothly follow references between them. While typical REST APIs require loading from multiple URLs, GraphQL APIs get all the data our needs in a single request. App GraphQL quick even on slow mobile network connections.',
    [WelcomePageMsg.courseAboutHeader]: 'About the course',
    [WelcomePageMsg.courseAboutDescr1p1]:
      'is free-of-charge and community-based education program conducted by',
    [WelcomePageMsg.courseAboutDescr1p2]: 'developer community since 2013',
    [WelcomePageMsg.courseAboutDescr2]:
      'Everyone can study at RS School, regardless of age, professional employment, or place of residence.',
    [WelcomePageMsg.courseAboutDescr3]:
      'The mentors and trainers of our school are front-end and javascript developers from different companies and countries.',
    [WelcomePageMsg.ourTeamHeader]: 'Our Team',
    [WelcomePageMsg.name1]: 'Sasha Sonich',
    [WelcomePageMsg.name2]: 'Alexei Kozlovskiy',
    [WelcomePageMsg.name3]: 'Anatoliy Iliev',
    [WelcomePageMsg.prof1]: 'Frontend Developer',
  },
  [LOCALES.RUSSIAN]: {
    [Message.Logout]: 'Выйти',
    [Message.Account]: 'Аккаунт',
    [Message.Home]: 'Домой',
    [Message.SignIn]: 'Войти',
    [Message.SignUp]: 'Зарегистрироваться',
    [Message.SignOut]: 'Выйти',
    [Message.GoToMainPage]: 'На главную',
    [WelcomePageMsg.mainDescr]:
      'Графическая интерактивная среда разработки в браузере — мощный инструмент, предлагающий подсветку синтаксиса, автоматическую документацию и многое другое.',
    [WelcomePageMsg.getStartedBtn]: 'Начать',
    [WelcomePageMsg.aboutMainHeader]: 'О QraphiQL',
    [WelcomePageMsg.aboutHeader1]: 'Язык запросов для API',
    [WelcomePageMsg.aboutHeader2]: 'Получайте только то что вам нужно от API',
    [WelcomePageMsg.aboutHeader3]: 'Сразу несколько ресурсов в одном запросе',
    [WelcomePageMsg.aboutDescr1]:
      'GraphQL — это язык запросов для API и IDE для выполнения этих запросов. GraphQL предоставляет полное и понятное описание данных в API, давая вам возможность запрашивать именно то, что вам нужно, и ничего более.',
    [WelcomePageMsg.aboutDescr2]:
      'Отправьте GraphQL-запрос на API и получите именно то, что вам нужно, не больше и не меньше. Запросы GraphQL всегда возвращают предсказуемые результаты. Приложения, использующие GraphQL, работают быстро и стабильно, потому что они контролируют получаемые данные, а не сервер.',
    [WelcomePageMsg.aboutDescr3]:
      'GraphQL-запросы обращаются не только к свойствам одного ресурса, но и плавно следуют ссылкам между ними. В то время как типичные API REST требуют загрузки с нескольких URL-адресов, API GraphQL получают все данные, которые нам нужны, в одном запросе. Приложение GraphQL работает быстро даже при медленном подключении к мобильной сети.',
    [WelcomePageMsg.courseAboutHeader]: 'О курсе',
    [WelcomePageMsg.courseAboutDescr1p1]:
      '- это бесплатная общественная образовательная программа, проводимая сообществом разработчиков',
    [WelcomePageMsg.courseAboutDescr1p2]: 'с 2013 года.',
    [WelcomePageMsg.courseAboutDescr2]:
      'Учиться в RS School могут все желающие, независимо от возраста, профессиональной занятости и места жительства.',
    [WelcomePageMsg.courseAboutDescr3]:
      'Менторы и тренеры нашей школы — фронтенд- и javascript-разработчики из разных компаний и стран.',
    [WelcomePageMsg.ourTeamHeader]: 'Наша команда',
    [WelcomePageMsg.name1]: 'Саша Сонич',
    [WelcomePageMsg.name2]: 'Алексей Козловский',
    [WelcomePageMsg.name3]: 'Анатолий Ильев',
    [WelcomePageMsg.prof1]: 'Frontend-разработчик',
  },
};
