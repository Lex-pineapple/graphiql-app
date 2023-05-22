import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Message } from '../languages/messages';

function AuthComponent() {
  return (
    <>
      <Link to="/signin" className="header-auth__btn btn-signIn btn">
        <FormattedMessage id={Message.SignIn} />
      </Link>
      <div className="header-auth-signup">
        <div className="header-auth__text">
          <FormattedMessage id={Message.NotMember} />
        </div>
        <Link to="/signup" className="header-auth__link">
          <FormattedMessage id={Message.SignUp} />
        </Link>
      </div>
    </>
  );
}

export default AuthComponent;
