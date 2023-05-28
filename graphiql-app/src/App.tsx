import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './styles/App.scss';
import Page404 from './routes/Page404';
import Header from './components/Header';
import GraphiQLPage from './routes/GraphiQLPage';
import { IntlProvider } from 'react-intl';
import { LanguagesManager } from './languages/languagesManager';
import { translations } from './languages/translations';
import { LOCALES } from './languages/locales';
import Footer from './components/Footer';
import LoginPage from './routes/LoginPage';
import WelcomePage from './routes/WelcomePage';
import { checkForAuthStatus } from './auth/firebase';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PreloaderSpinner from './components/PreloaderSpinner';

function App() {
  const { currentLocale, setLocale } = LanguagesManager();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkForAuthStatus((user) => {
      setIsLoading(false);
      dispatch({ type: 'login/loggedIn', payload: user.status });
      dispatch({ type: 'auth/addUser', payload: user.data });
      if (!user.status) {
        if (pathname === '/graphiql') {
          navigate('/');
        }
      }
    });
  }, []);
  if (isLoading) return <PreloaderSpinner />;

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
            <Route path="/graphiql" element={<GraphiQLPage />}></Route>
            <Route path="*" element={<Page404 />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default App;
