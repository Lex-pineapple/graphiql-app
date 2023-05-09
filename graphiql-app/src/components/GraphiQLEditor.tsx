import ExecuteButton from '../assets/execute-button.svg';
import CleanButton from '../assets/broom-clean.svg';
import EditorToolbar from './EditorToolbar';

function GraphiQLEditor() {
  return (
    <section className="graphiQLPage__editor">
      <div className="query-editor">
        <div className="query-editor__text">
          <p>Write your query or mutation here</p>
        </div>
        <div className="query-editor__toolbar">
          <button className="executeButton">
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
