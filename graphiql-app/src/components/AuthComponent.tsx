import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { IAuthComponentProps } from '../@types/auth';

function AuthComponent(props: IAuthComponentProps) {
  return (
    <Link to={`/${props.type}`} className="header-auth__btn btn-signIn btn">
      <FormattedMessage id={props.message} />
    </Link>
  );
}

export default AuthComponent;
