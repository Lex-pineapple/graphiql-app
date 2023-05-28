import '../styles/signOutModal.scss';
import { logout } from '../auth/firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { AuthMsg } from '../languages/authMsg';

function SignOutModal({ onClickOutside, hidden }: { onClickOutside: () => void; hidden: boolean }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="signout__modal-overlay" onClick={onClickOutside}>
      <div className={`signout__modal ${!hidden ? 'hidden' : ''}`}>
        <div className="signout__modal-bigtext">
          <FormattedMessage id={AuthMsg.logOutMsg} />
        </div>
        <button className="signout__modal-btn-stay" onClick={onClickOutside}>
          <FormattedMessage id={AuthMsg.logOutNo} />
        </button>
        <button
          className="signout__modal-btn-leave"
          onClick={() => {
            logout();
            dispatch({ type: 'login/loggedIn', payload: false });
            navigate('/');
          }}
        >
          <FormattedMessage id={AuthMsg.logOutYes} />
        </button>
      </div>
    </div>
  );
}

export default SignOutModal;
