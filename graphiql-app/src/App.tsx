import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import Page404 from './routes/Page404';
import Header from './components/Header';
import { IntlProvider } from 'react-intl';
import { LanguagesManager } from './components/languages/languagesManager';
import { translations } from './components/languages/translations';
import { LOCALES } from './components/languages/locales';
import Footer from './components/Footer';
import LoginPage from './routes/LoginPage';
import WelcomePage from './routes/WelcomePage';
import SignOutPage from './routes/SignOutPage';

function App() {
  const { currentLocale, setLocale } = LanguagesManager();

  return (
    <IntlProvider
      messages={translations[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <div className="App wrapper">
        <Header currentLocale={currentLocale} setLocale={setLocale} />
        <div className="appContent">
          <Routes>
            <Route path="/" element={<WelcomePage />}></Route>
            <Route path="/signin" element={<LoginPage authType="signin" />}></Route>
            <Route path="/signup" element={<LoginPage authType="signup" />}></Route>
            <Route path="/reset" element={<LoginPage authType="reset" />}></Route>
            <Route path="/signout" element={<SignOutPage />}></Route>
            <Route path="*" element={<Page404 />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default App;
