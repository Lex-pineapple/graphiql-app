import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { UserIcon } from './UserIcon';
import { Message } from '../languages/messages';
import { IWelcomeComponentProps } from '../@types/welcomePage';

function WelcomeComponent({ handleUserIconClick, handleSignOutClick }: IWelcomeComponentProps) {
  return (
    <>
      <Link to="/graphiql" className="header-auth__btn btn-signIn btn">
        <FormattedMessage id={Message.GoToMainPage} />
      </Link>
      <div className="header-auth__signout" onClick={handleSignOutClick}>
        <FormattedMessage id={Message.SignOut} />
      </div>
      <UserIcon onClick={handleUserIconClick} />
    </>
  );
}

export default WelcomeComponent;
