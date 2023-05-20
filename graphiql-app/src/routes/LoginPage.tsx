import SignIn from '../components/LoginComponents/SignIn';
import SignUp from '../components/LoginComponents/SignUp';
import '../styles/loginPage.scss';
import ResetPassword from '../components/LoginComponents/ResetPassword';

function LoginPage({ authType }: { authType: string }) {
  return (
    <div className="auth-container">
      <div className="auth__img img">
        <div className="auth__img-text-container">
          <div className="auth__img-bigtext">
            Welcome to <p className="auth__img-bigtext--highlight">GraphiQl</p>
          </div>
          <p className="auth__img-smalltext">
            A graphical interactive in-browser GraphQL IDE - powerful tool that offers syntax
            highlighting, automatic documentation, and much more.
          </p>
          <a href="https://github.com/graphql/graphiql" className="auth__img-github-logo"></a>
        </div>
      </div>
      {authType === 'signin' ? <SignIn /> : authType === 'signup' ? <SignUp /> : <ResetPassword />}
    </div>
  );
}

export default LoginPage;
