import '../../styles/editorToolbar.scss';
import UpButton from '../../assets/circle-up.svg';
import DownButton from '../../assets/circle-down.svg';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { HeaderList } from '../HeadersList';
import { GraphiQlMsg } from '../../languages/graphiQlMsg';
import { IEditorToolbarType } from '../../@types/graphql';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { initVariable } from './initialValues';
import redactorTheme from './redactorTheme';

function EditorToolbar({ textAreaVariables, textAreaHeaders }: IEditorToolbarType) {
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

  const handelVariablesAreaChanges = (value: string) => {
    textAreaVariables(value);
  };

  return (
    <>
      <div className="editor-toolbar">
        <ul className="editor-toolbar__options">
          <li
            className={`editor-toolbar__options-item ${chose === 'variables' ? 'activChoise' : ''}`}
          >
            <div onClick={handleClick} id="variables">
              <FormattedMessage id={GraphiQlMsg.variablesHeader} />
            </div>
          </li>
          <li
            className={`editor-toolbar__options-item ${chose === 'headers' ? 'activChoise' : ''}`}
          >
            <div onClick={handleClick} id="headers">
              <FormattedMessage id={GraphiQlMsg.headersHeader} />
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
        <CodeMirror
          className="CodeMirror-vars"
          style={{ display: isOpen && chose === 'variables' ? 'block' : 'none' }}
          value={initVariable}
          height="100%"
          maxWidth="570px"
          theme={redactorTheme}
          basicSetup={{
            indentOnInput: true,
            defaultKeymap: true,
            autocompletion: true,
            syntaxHighlighting: true,
            lineNumbers: false,
            foldGutter: true,
          }}
          extensions={[json()]}
          onChange={handelVariablesAreaChanges}
        />
        <div style={{ display: isOpen && chose === 'headers' ? 'block' : 'none' }}>
          <HeaderList textAreaHeaders={textAreaHeaders} />
        </div>
      </div>
    </>
  );
}

export default EditorToolbar;
