import { useEffect, useState } from 'react';
import { auth, registerWithEmailAndPassword, signInWithGoogle } from '../../auth/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoadingModal from '../LoadingModal';
import SignUpValidator from '../../helpers/signUpValidator';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [validState, setValidState] = useState({
    valid: false,
    details: {
      nameValid: true,
      emailValid: true,
      passwordValid: true,
    },
  });
  const validator = new SignUpValidator();

  function register() {
    const validationResult = validator.ValidateSignUp(name, email, password);
    setValidState(validationResult);
    if (validationResult.valid) {
      registerWithEmailAndPassword(name, email, password);
    }
  }

  useEffect(() => {
    if (loading) {
      console.log('loading...');
      return;
    }
    if (user) {
      setShowModal(true);
      dispatch({ type: 'login/loggedIn', payload: true });
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 300);
    }
  }, [user, loading, navigate, dispatch]);

  console.log(validState.details.nameValid);

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
          !validState.details.nameValid
            ? 'signup__form-input-validator-error-name active'
            : 'signup__form-input-validator-error-name'
        }
      >
        Name must be longer that 3 characters
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
          !validState.details.emailValid
            ? 'signup__form-input-validator-error-email active'
            : 'signup__form-input-validator-error-email'
        }
      >
        Please input the correct email
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
          !validState.details.passwordValid
            ? 'signup__form-input-validator-error-password active'
            : 'signup__form-input-validator-error-password'
        }
      >
        The password must be at least 8 characters long, contain at least 1 uppercase letter and at
        least 1 number
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
      {showModal && <LoadingModal text={'Successfully registered user'} />}
    </div>
  );
}

export default SignUp;
