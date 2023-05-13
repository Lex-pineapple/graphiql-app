import ExecuteButton from '../assets/execute-button.svg';
import CleanButton from '../assets/broom-clean.svg';
import EditorToolbar from './EditorToolbar';
import { useState } from 'react';

interface GraphiQLEditorType {
  sourcesQuery: (value: string) => void;
  sourcesVariables: (value: string) => void;
}

function GraphiQLEditor({ sourcesQuery, sourcesVariables }: GraphiQLEditorType) {
  const [queryAreaValue, setQueryAreaValue] = useState('');
  const [variablesAreaValue, setVariablesAreaValue] = useState('');

  const handelExecuteBtn = () => {
    sourcesQuery(queryAreaValue);
    sourcesVariables(variablesAreaValue);
  };

  const handelQueryAreaChanges = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQueryAreaValue(event.target.value);
  };

  const textAreaVariables = (data: string) => {
    setVariablesAreaValue(data);
  };

  return (
    <section className="graphiQLPage__editor">
      <div className="query-editor">
        <textarea
          placeholder="Write your query or mutation here"
          className="query-editor__text"
          onChange={handelQueryAreaChanges}
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
      <EditorToolbar textAreaVariables={textAreaVariables} />
    </section>
  );
}

export default GraphiQLEditor;
