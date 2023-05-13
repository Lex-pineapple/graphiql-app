import { useEffect, useState } from 'react';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../../auth/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import InfoModal from '../InfoModal';
import { IStore } from '../../@types/store';
import AuthSignInInput from './authSignInInput';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);
  const [showModal, setShowModal] = useState(false);
  const [APIError, setAPIError] = useState({
    type: '',
    message: '',
  });
  const userName = useSelector((store: IStore) => store.auth.authInfo.displayName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseModalClick = () => {
    setShowModal(!showModal);
  };

  async function logIn(email: string, password: string) {
    const msg = await logInWithEmailAndPassword(email, password);
    setAPIError(msg);
    if (msg.type === 'other') setShowModal(true);
  }

  useEffect(() => {
    if (loading) {
      console.log('loading...');
    }
    if (user) {
      if (!userName) {
        setShowModal(true);
        dispatch({ type: 'login/loggedIn', payload: true });
        setTimeout(() => {
          navigate('/graphiql');
        }, 1000);
      } else {
        navigate('/graphiql');
      }
    }
  }, [user, loading, navigate, dispatch, userName]);

  return (
    <div className="signin__form">
      <div className="signin__form-bigtext">Hello!</div>
      <p className="signin__form-subtext">Welcome to GraphQl client.</p>
      <button className="signin__form-btn-google btn-google btn" onClick={signInWithGoogle}>
        Log in with Google
      </button>
      <p className="signin__form-hr">or</p>
      <AuthSignInInput
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        errorType={APIError.type}
        errorMessage={APIError.message}
      />
      <AuthSignInInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        errorType={APIError.type}
        errorMessage={APIError.message}
      />
      <Link to="/reset" className="signin__form-text--highlight signin__form-text--right">
        Forgot password?
      </Link>
      <button
        className="signin__form-btn-login btn-login btn"
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
        <InfoModal
          text={APIError.message || 'Successfully logged in'}
          onClickOutside={handleCloseModalClick}
        />
      )}
    </div>
  );
}

export default SignIn;
