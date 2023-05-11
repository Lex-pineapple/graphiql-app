import { useState } from 'react';
import '../styles/sidePanel.scss';

const charactersExample = `
{
  characters {
    results {
      id
      name
      status
      species
      type
      gender
      image
      created
    }
  }
}
`;
const locationExample = `
{
  locations {
    results {
      name
      id
      type
      dimension
      created
    }
  }
}
`;

const episodeExample = `
{
  episodes {
    results {
      id
      name
      air_date
      created
    }
  }
}
`;

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
        <pre>{charactersExample}</pre>
        <pre>{locationExample}</pre>
        <pre>{episodeExample}</pre>
      </div>
    </div>
  );
}

export default SidePanel;
