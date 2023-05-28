import '../styles/infoModal.scss';
import { FormattedMessage } from 'react-intl';
import { IInfoModalProps } from '../@types/infoModal';

function InfoModal({ formatId, text, onClickOutside }: IInfoModalProps) {
  return (
    <div className="info-modal-overlay" onClick={onClickOutside}>
      <div className="info-modal-window">
        <div className="info-modal-text">{formatId && <FormattedMessage id={formatId} />}</div>
        <div className="info-modal-small-text">{text}</div>
        <div className="info-modal-close-btn" onClick={onClickOutside}>
          ✕
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
