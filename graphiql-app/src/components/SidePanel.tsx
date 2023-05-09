import { useState } from 'react';
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
        <div>Docs info</div>
      </div>
    </div>
  );
}

export default SidePanel;
