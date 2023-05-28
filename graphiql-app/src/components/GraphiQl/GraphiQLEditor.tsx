import ExecuteButton from '../../assets/execute-button.svg';
import CleanButton from '../../assets/broom-clean.svg';
import EditorToolbar from './EditorToolbar';
import { useState } from 'react';
import { IGraphiQLEditorType } from '../../@types/graphql';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { initQuery, initVariable } from './initialValues';
import redactorTheme from './redactorTheme';

function GraphiQLEditor({
  sourcesQuery,
  sourcesVariables,
  sourcesHeaders,
  execute,
}: IGraphiQLEditorType) {
  const [queryAreaValue, setQueryAreaValue] = useState(initQuery);
  const [variablesAreaValue, setVariablesAreaValue] = useState(initVariable);
  const [headersAreaValue, setHeadersAreaValue] = useState('');

  const handelExecuteBtn = () => {
    sourcesQuery(queryAreaValue);
    sourcesVariables(variablesAreaValue);
    sourcesHeaders(headersAreaValue);
    execute();
  };

  const handelQueryAreaChanges = (value: string) => {
    setQueryAreaValue(value);
  };

  const textAreaVariables = (data: string) => {
    setVariablesAreaValue(data);
  };

  const textAreaHeaders = (data: string) => {
    setHeadersAreaValue(data);
  };

  const cleanQueryField = () => {
    setQueryAreaValue('');
  };

  return (
    <section className="graphiQLPage__editor">
      <div className="query-editor">
        <CodeMirror
          className="CodeMirror"
          value={queryAreaValue}
          theme={redactorTheme}
          height="100%"
          maxWidth="540px"
          basicSetup={{
            indentOnInput: true,
            defaultKeymap: true,
            autocompletion: false,
            lineNumbers: false,
            foldGutter: true,
          }}
          extensions={[javascript()]}
          onChange={handelQueryAreaChanges}
        />
        <div className="query-editor__toolbar">
          <button className="executeButton" onClick={handelExecuteBtn}>
            <img className="button-icon" src={ExecuteButton} alt="Execute Button" />
          </button>
          <button className="cleanButton" onClick={cleanQueryField}>
            <img className="button-icon" src={CleanButton} alt="Clean Button" />
          </button>
        </div>
      </div>
      <EditorToolbar textAreaVariables={textAreaVariables} textAreaHeaders={textAreaHeaders} />
    </section>
  );
}

export default GraphiQLEditor;
