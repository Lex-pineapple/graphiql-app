import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { UserIcon } from './UserIcon';
import { Message } from '../languages/messages';
import { IWelcomeComponentProps } from '../@types/welcomePage';

function WelcomeComponent({ handleClick }: IWelcomeComponentProps) {
  return (
    <>
      <Link to="/graphiql" className="header-auth__btn btn-signIn btn">
        <FormattedMessage id={Message.GoToMainPage} />
      </Link>
      <UserIcon onClick={handleClick} />
    </>
  );
}

export default WelcomeComponent;
