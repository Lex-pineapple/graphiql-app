import { useState } from 'react';

import UpButton from '../assets/circle-up.svg';
import DownButton from '../assets/circle-down.svg';
import '../styles/editorToolbar.scss';

interface EditorToolbarType {
  textAreaVariables: (value: string) => void;
}

function EditorToolbar({ textAreaVariables }: EditorToolbarType) {
  const [isOpen, setIsOpen] = useState(false);
  const [chose, setChose] = useState('variables');
  const [heightSection, setheightSection] = useState(0);
  const togglePanel = () => {
    if (isOpen) {
      setheightSection(0);
    } else {
      setheightSection(150);
    }
    setIsOpen(!isOpen);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isOpen) {
      setIsOpen(!isOpen);
    }
    const target = event.target as HTMLDivElement;
    setChose(target.id);
    setheightSection(150);
  };

  const handelVariablesAreaChanges = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    textAreaVariables(event.target.value);
  };

  return (
    <>
      <div className="editor-toolbar">
        <ul className="editor-toolbar__options">
          <li
            className={`editor-toolbar__options-item ${chose === 'variables' ? 'activChoise' : ''}`}
          >
            <div onClick={handleClick} id="variables">
              Variables
            </div>
          </li>
          <li
            className={`editor-toolbar__options-item ${chose === 'headers' ? 'activChoise' : ''}`}
          >
            <div onClick={handleClick} id="headers">
              Headers
            </div>
          </li>
        </ul>
        <button className="editor-toolbar__button" onClick={togglePanel}>
          {isOpen ? (
            <img className="toolbar-button-icon" src={DownButton} alt="Execute Button" />
          ) : (
            <img className="toolbar-button-icon" src={UpButton} alt="Execute Button" />
          )}
        </button>
      </div>
      <div style={{ height: `${heightSection}px` }} className="tab-sectisdfon">
        {isOpen && chose === 'variables' && (
          <textarea
            placeholder="Variables section"
            className="tab-section"
            onChange={handelVariablesAreaChanges}
          ></textarea>
        )}
        {isOpen && chose === 'headers' && (
          <textarea placeholder="Headers section" className="tab-section"></textarea>
        )}
      </div>
    </>
  );
}

export default EditorToolbar;
