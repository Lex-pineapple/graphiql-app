import SignIn from '../components/Login/SignIn';
import SignUp from '../components/Login/SignUp';
import '../styles/loginPage.scss';
import ResetPassword from '../components/Login/ResetPassword';
import { FormattedMessage } from 'react-intl';
import { AuthMsg } from '../languages/authMsg';
import { WelcomePageMsg } from '../languages/welcomePageMsg';
import { useEffect, useState } from 'react';
import { checkForAuthStatus } from '../auth/firebase';
import PreloaderSpinner from '../components/PreloaderSpinner';
import { useNavigate } from 'react-router-dom';

function LoginPage({ authType }: { authType: string }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    checkForAuthStatus((user) => {
      if (user.status) {
        navigate('/graphiql');
      }
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <PreloaderSpinner />;
  }
  return (
    <div className="auth-container">
      <div className="auth__img img">
        <div className="auth__img-text-container">
          <div className="auth__img-bigtext">
            <FormattedMessage id={AuthMsg.sideHeader} />{' '}
            <p className="auth__img-bigtext--highlight">GraphiQl</p>
          </div>
          <p className="auth__img-smalltext">
            <FormattedMessage id={WelcomePageMsg.mainDescr} />
          </p>
          <a href="https://github.com/graphql/graphiql" className="auth__img-github-logo"></a>
        </div>
      </div>
      <div className="auth-form-container">
        {authType === 'signin' ? (
          <SignIn />
        ) : authType === 'signup' ? (
          <SignUp />
        ) : (
          <ResetPassword />
        )}
      </div>
    </div>
  );
}

export default LoginPage;
