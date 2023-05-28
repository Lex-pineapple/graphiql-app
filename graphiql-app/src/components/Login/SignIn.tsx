import { useEffect, useState } from 'react';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../../auth/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import InfoModal from '../InfoModal';
import { IStore } from '../../@types/store';
import AuthSignInInput from './authSignInInput';
import { FormattedMessage } from 'react-intl';
import { AuthMsg } from '../../languages/authMsg';
import { ApiMsg } from '../../languages/apiMsg';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);
  const [showModal, setShowModal] = useState(false);
  const [APIError, setAPIError] = useState({
    type: '',
    message: '',
    format: false,
  });
  const userName = useSelector((store: IStore) => store.auth.authInfo.displayName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseModalClick = () => {
    setShowModal(!showModal);
  };

  async function googleSignIn() {
    const msg = await signInWithGoogle();
    if (msg) {
      setAPIError(msg);
      if (msg.type === 'other') setShowModal(true);
    }
  }

  async function logIn(email: string, password: string) {
    const msg = await logInWithEmailAndPassword(email, password);
    setAPIError(msg);
    if (msg.type === 'other') setShowModal(true);
  }

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      if (!userName) {
        setAPIError({
          type: '',
          message: '',
          format: false,
        });
        setShowModal(true);
        dispatch({ type: 'login/loggedIn', payload: true });
        setTimeout(() => {
          navigate('/graphiql');
        }, 3000);
      } else {
        navigate('/graphiql');
      }
    }
  }, [user, loading, navigate, dispatch, userName]);

  return (
    <div className="signin__form">
      <div className="signin__form-bigtext">
        <FormattedMessage id={AuthMsg.signInMainHeader} />
      </div>
      <p className="signin__form-subtext">
        <FormattedMessage id={AuthMsg.signInSubHeader} />
      </p>
      <button className="signin__form-btn-google btn-google btn" onClick={() => googleSignIn()}>
        <FormattedMessage id={AuthMsg.signInGoogleBtn} />
      </button>
      <p className="signin__form-hr">
        <FormattedMessage id={AuthMsg.signInOrHr} />
      </p>
      <AuthSignInInput
        type="email"
        placeholder={AuthMsg.signInEmailPlh}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        errorType={APIError.type}
        errorMessage={APIError.message}
        format={APIError.format}
      />
      <AuthSignInInput
        type="password"
        placeholder={AuthMsg.signInPwdPlaceholder}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        errorType={APIError.type}
        errorMessage={APIError.message}
        format={APIError.format}
      />
      <Link to="/reset" className="signin__form-text--highlight signin__form-text--right">
        <FormattedMessage id={AuthMsg.signInForgotPwd} />
      </Link>
      <button
        className="signin__form-btn-login btn-login btn"
        onClick={() => logIn(email, password)}
      >
        <FormattedMessage id={AuthMsg.signInLogInBtn} />
      </button>
      <div className="signin__form-text--under-container">
        <FormattedMessage id={AuthMsg.signInNoAccount} />{' '}
        <Link to="/signup" className="signin__form-text--highlight">
          <FormattedMessage id={AuthMsg.signInSignUp} />
        </Link>
      </div>
      {showModal && (
        <InfoModal
          formatId={APIError.message ? ApiMsg.apiGenError : AuthMsg.signInSuccess}
          text={APIError.message || 'Successfully logged in'}
          onClickOutside={handleCloseModalClick}
        />
      )}
    </div>
  );
}

export default SignIn;
