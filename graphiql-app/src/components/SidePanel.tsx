import { useState } from 'react';
import '../styles/sidePanel.scss';

const variables = `
for Variables

query Alive($status: String!) {
  characters(filter: { status: $status }) {
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

Variables

{
  "status": "Alive"
}

`;

const characters = `
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
const location = `
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

const episode = `
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
        <hr></hr>
        <pre>{variables}</pre>
        <hr></hr>
        <pre>{characters}</pre>
        <hr></hr>
        <pre>{location}</pre>
        <hr></hr>
        <pre>{episode}</pre>
      </div>
    </div>
  );
}

export default SidePanel;
