import '../styles/signOutPage.scss';
import { logout } from '../auth/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function SignOutPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="signout-container">
      <div className="signout__modal">
        <div className="signout__modal-bigtext">Are you sure you want to sign out?</div>
        <button
          className="signout__modal-btn-stay"
          onClick={() => {
            navigate(-1);
          }}
        >
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

export default SignOutPage;
