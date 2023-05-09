import { FormattedMessage } from 'react-intl';
import { Message } from './languages/messages';
import { Link } from 'react-router-dom';

function AuthComponent(props: { type: string; message: Message.SignOut | Message.SignIn }) {
  return (
    <Link to={`/${props.type}`} className="header-auth__btn btn-signIn btn">
      <FormattedMessage id={props.message} />
    </Link>
  );
}

export default AuthComponent;
