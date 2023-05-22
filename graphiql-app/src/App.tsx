import { Route, Routes, useNavigate } from 'react-router-dom';
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
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const { currentLocale, setLocale } = LanguagesManager();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    checkForAuthStatus((user) => {
      dispatch({ type: 'login/loggedIn', payload: user.status });
      dispatch({ type: 'auth/addUser', payload: user.data });
      // if (!user.status) navigate('/');
    });
  }, [dispatch, navigate]);

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
