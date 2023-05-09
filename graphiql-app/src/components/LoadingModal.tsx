import '../styles/infoModal.scss';

function LoadingModal({ text }: { text: string }) {
  return (
    <div className="info-modal-overlay">
      <div className="info-modal-window">
        <div className="info-modal-text">{text}</div>
      </div>
    </div>
  );
}

export default LoadingModal;
