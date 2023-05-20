import { AuthMsg } from 'languages/authMsg';
import '../styles/infoModal.scss';
import { FormattedMessage } from 'react-intl';

interface IInfoModalProps {
  formatId: AuthMsg.signUpSuccess | AuthMsg.signInSuccess;
  text: string;
  onClickOutside: (event: React.MouseEvent) => void;
}

function InfoModal({ formatId, text, onClickOutside }: IInfoModalProps) {
  return (
    <div className="info-modal-overlay" onClick={onClickOutside}>
      <div className="info-modal-window">
        <div className="info-modal-text">
          {formatId ? <FormattedMessage id={formatId} /> : text}
        </div>
        <div className="info-modal-close-btn" onClick={onClickOutside}>
          ✕
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
