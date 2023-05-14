import React, { Suspense, useState } from 'react';
const Docs = React.lazy(() => import('./Docs'));
import '../styles/sidePanel.scss';

function SidePanel() {
  const [togglePanel, setTogglePanel] = useState(false);

  const handleToggleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.currentTarget === event.target) {
      return;
    }
    setTogglePanel(!togglePanel);
  };

  return (
    <div className={`sidePanel ${togglePanel ? 'open' : ''}`} onClick={handleToggleClick}>
      <div className="sidePanel-menu">
        <div id="docs" className="sidePanel-menu__button">
          Docs
        </div>
      </div>
      <div className="sidePanel-info">
        <div>Queries</div>
        <Suspense fallback={<div>Loading...</div>}>
          <Docs />
        </Suspense>
      </div>
    </div>
  );
}

export default SidePanel;
