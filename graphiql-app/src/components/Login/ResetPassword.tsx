import { useEffect, useState } from 'react';
import '../../styles/resetPassword.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, sendPasswordReset } from '../../auth/firebase';
import { Link, useNavigate } from 'react-router-dom';
import InfoModal from '../InfoModal';
import { FormattedMessage, useIntl } from 'react-intl';
import { AuthMsg } from '../../languages/authMsg';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalRes, setModalRes] = useState({
    res: '',
    success: false,
    formatId: '',
  });
  const [user, loading] = useAuthState(auth);
  const intl = useIntl();

  const navigate = useNavigate();

  const handleCloseModalClick = () => {
    setShowModal(!showModal);
  };

  async function managePassowrdReset(email: string) {
    const response = await sendPasswordReset(email);
    setModalRes(response);
    setShowModal(true);
    if (response.success) {
      setTimeout(() => {
        navigate('/signin');
      }, 1000);
    }
  }

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate('/graphiql');
    }
  }, [user, loading, navigate]);

  return (
    <div className="resetpwd__form">
      <p className="resetpwd__form-bigtext">
        <FormattedMessage id={AuthMsg.resetPwdHeader} />
      </p>
      <p className="resetpwd__form-subtext">
        <FormattedMessage id={AuthMsg.resetPwdSubHeader} />
      </p>
      <input
        type="email"
        placeholder={intl.formatMessage({ id: AuthMsg.resetPwdEmailPlh })}
        className="resetpwd__form-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="resetpwd__form-btn" onClick={() => managePassowrdReset(email)}>
        <FormattedMessage id={AuthMsg.resetPwdMainBtn} />
      </button>
      <p className="resetpwd__form-text">
        <FormattedMessage id={AuthMsg.signInNoAccount} />{' '}
        <Link to="/signup" className="resetpwd__form-link">
          <FormattedMessage id={AuthMsg.signUpMainHeader} />
        </Link>
      </p>
      {showModal && (
        <InfoModal
          formatId={modalRes.formatId}
          text={modalRes.res}
          onClickOutside={handleCloseModalClick}
        />
      )}
    </div>
  );
}

export default ResetPassword;
