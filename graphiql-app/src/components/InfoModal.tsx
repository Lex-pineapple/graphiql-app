import '../styles/infoModal.scss';

function InfoModal({
  text,
  onClickOutside,
}: {
  text: string;
  onClickOutside: (event: React.MouseEvent) => void;
}) {
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
