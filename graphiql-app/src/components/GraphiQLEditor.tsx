import ExecuteButton from '../assets/execute-button.svg';
import cleanButton from '../assets/broom-clean.svg';

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
            <img className="button-icon" src={cleanButton} alt="Clean Button" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default GraphiQLEditor;
