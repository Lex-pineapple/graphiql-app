import { useEffect, useState } from 'react';
import { auth, registerWithEmailAndPassword } from '../../auth/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import InfoModal from '../InfoModal';
import SignUpValidator from '../../helpers/signUpValidator';
import { IStore } from '../../@types/store';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, loading] = useAuthState(auth);
  const [showModal, setShowModal] = useState(false);
  const [APIError, setAPIError] = useState({
    type: '',
    message: '',
  });
  const [validState, setValidState] = useState({
    valid: false,
    details: {
      nameValid: {
        res: true,
        message: '',
      },
      emailValid: {
        res: true,
        message: '',
      },
      passwordValid: {
        res: true,
        message: '',
      },
    },
  });
  const userName = useSelector((store: IStore) => store.auth.authInfo.displayName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validator = new SignUpValidator();

  const handleCloseModalClick = () => {
    setShowModal(!showModal);
  };

  async function register() {
    const validationResult = validator.ValidateSignUp(name, email, password);
    setValidState(validationResult);
    if (validationResult.valid) {
      const msg = await registerWithEmailAndPassword(name, email, password);
      setAPIError(msg);
      if (msg.type === 'other') setShowModal(true);
    }
  }

  useEffect(() => {
    if (loading) {
      console.log('loading...');
      return;
    }
    if (user) {
      if (!userName) {
        setShowModal(true);
        dispatch({ type: 'login/loggedIn', payload: true });
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 2000);
      } else {
        navigate('/', { replace: true });
      }
    }
  }, [user, loading, navigate, dispatch]);

  return (
    <div className="signup__form">
      <div className="signup__form-bigtext">Sign up</div>
      <p className="signup__form-subtext">Join the GraphGl community.</p>
      <p className="signup__form-input-header-text">Name</p>
      <input
        type="text"
        className="signup__form-input input-text input"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p
        className={
          !validState.details.nameValid.res
            ? 'signup__form-input-validator-error-name active'
            : 'signup__form-input-validator-error-name'
        }
      >
        {validState.details.nameValid.message}
      </p>
      <p className="signup__form-input-header-text">Email</p>
      <input
        type="email"
        className="signup__form-input input-email input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p
        className={
          !validState.details.emailValid.res || APIError.type === 'email'
            ? 'signup__form-input-validator-error-email active'
            : 'signup__form-input-validator-error-email'
        }
      >
        {validState.details.emailValid.message || APIError.message}
      </p>
      <p className="signup__form-input-header-text">Password</p>
      <input
        type="password"
        className="signup__form-input input-password input"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p
        className={
          !validState.details.passwordValid.res || APIError.type === 'password'
            ? 'signup__form-input-validator-error-password active'
            : 'signup__form-input-validator-error-password'
        }
      >
        {validState.details.passwordValid.message || APIError.message}
      </p>
      <button className="signup__form-btn-signup btn-signup btn" onClick={register}>
        Get started now
      </button>
      <div className="signin__form-text--under-container">
        Already a user?{' '}
        <Link to="/signin" className="signin__form-text--highlight">
          Log in
        </Link>
      </div>
      {showModal && (
        <InfoModal
          text={APIError.type === 'other' ? APIError.message :  'Sign up successful'}
          onClickOutside={handleCloseModalClick}
        />
      )}
    </div>
  );
}

export default SignUp;
