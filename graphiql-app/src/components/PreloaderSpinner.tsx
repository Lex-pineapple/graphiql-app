import '../styles/preloaderSpinner.scss';

function PreloaderSpinner() {
  return (
    <div className="preloader-spinner-container">
      <div className="preloader-spinner-set-one">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="preloader-spinner-set-two">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default PreloaderSpinner;
