import './../styles/userModal.scss';
import { UserProfile } from './UserProfile';
import { FormattedMessage } from 'react-intl';
import { Message } from '../languages/messages';
import { IProfileModalProps } from '../@types/userModal';

export const UserModal = ({ onClickOutside, onClickLogOut }: IProfileModalProps) => {
  return (
    <div className="modal-overlay" onClick={onClickOutside}>
      <div className="modal-window">
        <div className="modal-window__account">
          <FormattedMessage id={Message.Account} />
        </div>
        <UserProfile />
        <hr className="modal-window__line"></hr>
        <p onClick={onClickLogOut} className="modal-window__log-out">
          <FormattedMessage id={Message.Logout} />
        </p>
      </div>
    </div>
  );
};
