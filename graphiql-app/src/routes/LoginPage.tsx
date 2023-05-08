import { useState } from 'react';
import SignIn from '../components/LoginComponents/SignIn';
import SignUp from '../components/LoginComponents/SignUp';
import '../styles/loginPage.scss';

function LoginPage() {
  const [authType, setAuthType] = useState('signin');

  function handleAuthChange(type: string) {
    setAuthType(type);
  }

  return (
    <div className="auth-container">
      <div className="auth__img img">
        <div className="auth__img-text-container">
          <div className="auth__img-bigtext">
            Welcome to <p className="auth__img-bigtext--highlight">GraphiQl</p>
          </div>
          <p className="auth__img-smalltext">
            A powerful tool that offers syntax highlighting, intellisense autocompletion, automatic
            documentation, and much more.
          </p>
          <a href="https://github.com/graphql/graphiql" className="auth__img-github-logo"></a>
        </div>
      </div>
      {authType === 'signin' ? (
        <SignIn handleClick={handleAuthChange} />
      ) : (
        <SignUp handleClick={handleAuthChange} />
      )}
    </div>
  );
}

export default LoginPage;
