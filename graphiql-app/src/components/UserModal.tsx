import './../styles/userModal.scss';
import { UserProfile } from './UserProfile';
import { FormattedMessage } from 'react-intl';
import { Message } from './languages/messages';
import { Link } from 'react-router-dom';

export interface ProfileModalProps {
  onClickOutside: (event: React.MouseEvent) => void;
}

export const UserModal = ({ onClickOutside }: ProfileModalProps) => {
  return (
    <div className="modal-overlay" onClick={onClickOutside}>
      <div className="modal-window">
        <div className="modal-window__account">
          <FormattedMessage id={Message.Account} />
        </div>
        <UserProfile />
        <hr className="modal-window__line"></hr>
        <Link to={'/signout'} onClick={onClickOutside} className="modal-window__log-out">
          <FormattedMessage id={Message.Logout} />
        </Link>
      </div>
    </div>
  );
};
