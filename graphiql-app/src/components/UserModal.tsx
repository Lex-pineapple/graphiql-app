import './../styles/userModal.scss';
import { UserProfile } from './UserProfile';

export interface ProfileModalProps {
  onClickOutside: (event: React.MouseEvent) => void;
}

export const UserModal = ({ onClickOutside }: ProfileModalProps) => {
  return (
    <div className="modal-overlay" onClick={onClickOutside}>
      <div className="modal-window">
        <div className="modal-window__account">Account</div>
        <UserProfile />
        <hr className="modal-window__line"></hr>
        <div className="modal-window__log-out">Logout</div>
      </div>
    </div>
  );
};
