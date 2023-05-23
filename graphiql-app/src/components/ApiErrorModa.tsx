import '../styles/errorModal.scss';
import { FormattedMessage } from 'react-intl';
import { IInfoModalProps } from '../@types/infoModal';

function ApiErrorModal({ formatId, text, onClickOutside }: IInfoModalProps) {
  return (
    <div className="error-modal-overlay" onClick={onClickOutside}>
      <div className="error-modal-window">
        <div className="error-modal-text">{formatId ? <FormattedMessage id={formatId} /> : ''}</div>
        <div className="error-modal-error-message">{text ? text : ''}</div>
        <div className="error-modal-close-btn" onClick={onClickOutside}>
          ✕
        </div>
      </div>
    </div>
  );
}

export default ApiErrorModal;
