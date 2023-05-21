import SignIn from '../components/Login/SignIn';
import SignUp from '../components/Login/SignUp';
import '../styles/loginPage.scss';
import ResetPassword from '../components/Login/ResetPassword';
import { FormattedMessage } from 'react-intl';
import { AuthMsg } from '../languages/authMsg';
import { WelcomePageMsg } from '../languages/welcomePageMsg';

function LoginPage({ authType }: { authType: string }) {
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
