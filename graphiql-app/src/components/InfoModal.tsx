import '../styles/infoModal.scss';

interface IInfoModalProps {
  text: string;
  onClickOutside: (event: React.MouseEvent) => void;
}

function InfoModal({ text, onClickOutside }: IInfoModalProps) {
  return (
    <div className="info-modal-overlay" onClick={onClickOutside}>
      <div className="info-modal-window">
        <div className="info-modal-text">{text}</div>
        <div className="info-modal-close-btn" onClick={onClickOutside}>
          ✕
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
