import { FormattedMessage } from 'react-intl';
import { Message } from './languages/messages';
import { Link } from 'react-router-dom';

function AuthComponent() {
  return (
    <Link to="/signin" className="header-auth__btn btn-signIn btn">
      <FormattedMessage id={Message.SignIn} />
    </Link>
  );
}

export default AuthComponent;
