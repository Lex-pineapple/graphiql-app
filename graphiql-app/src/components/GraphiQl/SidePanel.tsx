import React, { Suspense, useState } from 'react';
const Docs = React.lazy(() => import('../Docs/Docs'));
import '../../styles/sidePanel.scss';
import PreloaderSpinner from '../PreloaderSpinner';
import { FormattedMessage } from 'react-intl';
import { GraphiQlMsg } from '../../languages/graphiQlMsg';

function SidePanel() {
  const [togglePanel, setTogglePanel] = useState(false);

  const handleToggleClick = () => {
    setTogglePanel(!togglePanel);
  };

  return (
    <div className={`sidePanel ${togglePanel ? 'open' : ''}`}>
      <div className="sidePanel-menu">
        <div id="docs" className="sidePanel-menu__button loaded" onClick={handleToggleClick}>
          <FormattedMessage id={GraphiQlMsg.docsHeader} />
        </div>
      </div>
      <div className="sidePanel-info">
        <div className="sidePanel-info-header">
          <FormattedMessage id={GraphiQlMsg.queriesHeader} />
        </div>
        <Suspense fallback={<PreloaderSpinner />}>
          <Docs />
        </Suspense>
      </div>
    </div>
  );
}

export default SidePanel;
