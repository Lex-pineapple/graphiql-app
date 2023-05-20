import React, { Suspense, useState } from 'react';
const Docs = React.lazy(() => import('./Docs'));
import '../styles/sidePanel.scss';
import PreloaderSpinner from './PreloaderSpinner';

function SidePanel() {
  const [togglePanel, setTogglePanel] = useState(false);

  const handleToggleClick = () => {
    setTogglePanel(!togglePanel);
  };

  return (
    <div className={`sidePanel ${togglePanel ? 'open' : ''}`}>
      <div className="sidePanel-menu">
        <div id="docs" className="sidePanel-menu__button" onClick={handleToggleClick}>
          Docs
        </div>
      </div>
      <div className="sidePanel-info">
        <div className="sidePanel-info-header">Queries</div>
        <Suspense fallback={<PreloaderSpinner />}>
          <Docs />
        </Suspense>
      </div>
    </div>
  );
}

export default SidePanel;
