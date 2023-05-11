import '../styles/graphiqlPage.scss';
import GraphiQLEditor from '../components/GraphiQLEditor';
import GraphiQLResponse from '../components/GraphiQLResponse';
import SidePanel from '../components/SidePanel';
import { graphql } from 'graphql';
import { useEffect, useState } from 'react';
import { schema } from '../components/Schema';

function GraphiQLPage() {
  const [isResult, setIsResult] = useState({});
  const [source, setSource] = useState('');

  useEffect(() => {
    if (source.length) {
      graphql({ schema, source }).then((result) => {
        setIsResult(result);
      });
    }
  }, [source]);

  const handleChange = (value) => {
    setSource(value);
  };

  return (
    <div className="graphiQLPage wrapper container">
      <GraphiQLEditor sources={handleChange} />
      <GraphiQLResponse result={isResult} />
      <SidePanel />
    </div>
  );
}

export default GraphiQLPage;
