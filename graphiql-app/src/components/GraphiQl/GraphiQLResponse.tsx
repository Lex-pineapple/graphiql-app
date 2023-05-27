import { IGraphiQLResponseType } from '../../@types/graphql';

function GraphiQLResponse({ result }: IGraphiQLResponseType) {
  return (
    <section className="graphiQLPage__response">
      {result && <pre className="graphiQLPage__response-text">{result}</pre>}
    </section>
  );
}

export default GraphiQLResponse;
