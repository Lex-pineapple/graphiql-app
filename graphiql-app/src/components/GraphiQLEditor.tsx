import ExecuteButton from '../assets/execute-button.svg';
import CleanButton from '../assets/broom-clean.svg';
import EditorToolbar from './EditorToolbar';
import { useState } from 'react';

interface GraphiQLEditorType {
  sourcesQuery: (value: string) => void;
  sourcesVariables: (value: string) => void;
  sourcesHeaders: (value: string) => void;
}

export const defaultHeaders = `
{
  "Content-Type": "application/json"
}
`;

function GraphiQLEditor({ sourcesQuery, sourcesVariables, sourcesHeaders }: GraphiQLEditorType) {
  const [queryAreaValue, setQueryAreaValue] = useState('');
  const [variablesAreaValue, setVariablesAreaValue] = useState('');
  const [headersAreaValue, setHeadersAreaValue] = useState(defaultHeaders);

  const handelExecuteBtn = () => {
    sourcesQuery(queryAreaValue);
    sourcesVariables(variablesAreaValue);
    sourcesHeaders(headersAreaValue);
  };

  const handelQueryAreaChanges = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQueryAreaValue(event.target.value);
  };

  const textAreaVariables = (data: string) => {
    setVariablesAreaValue(data);
  };

  const textAreaHeaders = (data: string) => {
    setHeadersAreaValue(data);
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
      <EditorToolbar textAreaVariables={textAreaVariables} textAreaHeaders={textAreaHeaders} />
    </section>
  );
}

export default GraphiQLEditor;
// export default defaultHeaders;
