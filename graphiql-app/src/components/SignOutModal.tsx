import '../styles/signOutModal.scss';
import { logout } from '../auth/firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SignOutModal({ onClickOutside, hidden }: { onClickOutside: () => void; hidden: boolean }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="signout__modal-overlay" onClick={onClickOutside}>
      <div className={`signout__modal ${!hidden ? 'hidden' : ''}`}>
        <div className="signout__modal-bigtext">Are you sure you want to sign out?</div>
        <button className="signout__modal-btn-stay" onClick={onClickOutside}>
          No, get me back
        </button>
        <button
          className="signout__modal-btn-leave"
          onClick={() => {
            logout();
            dispatch({ type: 'login/loggedIn', payload: false });
            navigate('/');
          }}
        >
          Yes, Log me out
        </button>
      </div>
    </div>
  );
}

export default SignOutModal;
