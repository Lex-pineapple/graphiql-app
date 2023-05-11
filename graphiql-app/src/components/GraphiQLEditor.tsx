import ExecuteButton from '../assets/execute-button.svg';
import CleanButton from '../assets/broom-clean.svg';
import EditorToolbar from './EditorToolbar';
import { useState } from 'react';

function GraphiQLEditor({ sources }) {
  const [textareaValue, setTextareaValue] = useState('');

  const handelAreaChanges = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };

  const handelExecuteBtn = () => {
    sources(textareaValue);
  };

  return (
    <section className="graphiQLPage__editor">
      <div className="query-editor">
        <textarea
          placeholder="Write your query or mutation here"
          className="query-editor__text"
          onChange={handelAreaChanges}
        ></textarea>
        <div className="query-editor__toolbar">
          <button className="executeButton" onClick={handelExecuteBtn}>
            <img className="button-icon" src={ExecuteButton} alt="Execute Button" />
          </button>
          <button className="cleanButton">
            <img className="button-icon" src={CleanButton} alt="Clean Button" />
          </button>
        </div>
      </div>
      <EditorToolbar />
    </section>
  );
}

export default GraphiQLEditor;
