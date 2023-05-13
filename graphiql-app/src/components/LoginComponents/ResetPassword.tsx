import { useEffect, useState } from 'react';
import '../../styles/resetPassword.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, sendPasswordReset } from '../../auth/firebase';
import { Link, useNavigate } from 'react-router-dom';
import InfoModal from '../InfoModal';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const handleCloseModalClick = () => {
    setShowModal(!showModal);
  };

  async function managePassowrdReset(email: string) {
    const response = await sendPasswordReset(email);
    setModalText(response.res);
    setShowModal(true);
    if (response.success) {
      setTimeout(() => {
        navigate('/signin');
      }, 1000);
    }
  }

  useEffect(() => {
    if (loading) {
      console.log('loading...');
      return;
    }
    if (user) {
      navigate('/graphiql');
    }
  }, [user, loading, navigate]);

  return (
    <div className="resetpwd__form">
      <p className="resetpwd__form-bigtext">Reset password</p>
      <p className="resetpwd__form-subtext">
        Input your email below and we will send you an email with instructions.
      </p>
      <input
        type="email"
        placeholder="Email"
        className="resetpwd__form-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="resetpwd__form-btn" onClick={() => managePassowrdReset(email)}>
        Send password reset email
      </button>
      <p className="resetpwd__form-text">
        Don&apos;t have an accout?{' '}
        <Link to="/signup" className="resetpwd__form-link">
          Register
        </Link>
      </p>
      {showModal && <InfoModal text={modalText} onClickOutside={handleCloseModalClick} />}
    </div>
  );
}

export default ResetPassword;
