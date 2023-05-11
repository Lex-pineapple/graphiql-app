import { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import '../styles/sidePanel.scss';
import getIntrospectionQuery from '../graphql/getIntrospectionQuery';

function SidePanel() {
  const [togglePanel, setTogglePanel] = useState(false);
  const [query, setQuery] = useState('');

  function getSchema() {
    if (!query) {
      request('https://swapi-graphql.netlify.app/.netlify/functions/index', getIntrospectionQuery())
        .then((data) => {
          console.log(data);
          setQuery(JSON.stringify(data));
        })
        .catch((error) => console.error(error));
    }
  }

  useEffect(() => {
    getSchema();
  })

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
        <div>{query}</div>
      </div>
    </div>
  );
}

export default SidePanel;
