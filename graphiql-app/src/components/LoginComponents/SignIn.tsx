import { useEffect, useState } from 'react';
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  checkUserExists,
  checkUserEmail,
  checkUserPassword,
} from '../../auth/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import LoadingModal from '../LoadingModal';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const [showModal, setShowModal] = useState(false);
  const [validState, setValidState] = useState({
    email: true,
    pwd: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseModalClick = () => {
    setShowModal(!showModal);
  };

  async function validateLogIn(email: string, password: string) {
    const emailRes = await checkUserExists(email);
    const pwdRes = await checkUserPassword(email, password);
    return {
      email: emailRes,
      pwd: pwdRes,
    };
  }

  async function logIn(email: string, password: string) {
    const res = await validateLogIn(email, password);
    console.log(res);
    setValidState(res);
    if (email && password) {
      if (res.email && !res.pwd) {
        logInWithEmailAndPassword(email, password);
      }
    }
  }

  useEffect(() => {
    if (loading) {
      console.log('loading...');
    }
    if (user) {
      setShowModal(true);
      dispatch({ type: 'login/loggedIn', payload: true });
      setTimeout(() => {
        navigate('/');
      }, 300);
    }
  }, [user, loading, navigate, dispatch]);

  return (
    <div className="signin__form">
      <div className="signin__form-bigtext">Hello!</div>
      <p className="signin__form-subtext">Welcome to GraphQl client.</p>
      <button className="signin__form-btn-google btn-google btn" onClick={signInWithGoogle}>
        Log in with Google
      </button>
      <p className="signin__form-hr">or</p>
      <input
        type="email"
        className="signin__form-input input-email input"
        placeholder="Your email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setValidState({
            ...validState,
            email: true,
          });
        }}
      />
      <p
        className={
          !validState.email
            ? 'signin__form-input-validator-error-email active'
            : 'signup__form-input-validator-error-email'
        }
      >
       {!validState.email && `The user ${email} does not exist`}
      </p>
      <input
        type="password"
        className="signin__form-input input-password input"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p
        className={
          validState.pwd
            ? 'signin__form-input-validator-error-email active'
            : 'signup__form-input-validator-error-email'
        }
      >
       {validState.pwd}
      </p>
      <Link to="/reset" className="signin__form-text--highlight signin__form-text--right">
        Forgot password?
      </Link>
      <button
        className="signin__form-btn-login btn-login btn"
        // onClick={() => setShowModal(true)}
        onClick={() => logIn(email, password)}
      >
        Log In
      </button>
      <div className="signin__form-text--under-container">
        Don&apos;t have an account?{' '}
        <Link to="/signup" className="signin__form-text--highlight">
          Sign up
        </Link>
      </div>
      {showModal && (
        <LoadingModal text={'Successfully logged in'} onClickOutside={handleCloseModalClick} />
      )}
    </div>
  );
}

export default SignIn;
