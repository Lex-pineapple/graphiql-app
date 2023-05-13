import '../styles/graphiqlPage.scss';
import GraphiQLEditor from '../components/GraphiQLEditor';
import GraphiQLResponse from '../components/GraphiQLResponse';
import SidePanel from '../components/SidePanel';
import { useEffect, useState } from 'react';
import { getResources } from '../components/api';

function GraphiQLPage() {
  const [isResult, setIsResult] = useState('');
  const [sourcesQuery, setSourcesQuery] = useState('');
  const [sourcesVariables, setSourceVariables] = useState('');

  const fetchData = async () => {
    const data = await getResources(sourcesQuery, sourcesVariables);
    setIsResult(data);
  };

  useEffect(() => {
    sourcesQuery && fetchData();
  }, [sourcesQuery, sourcesVariables]);

  const queryChange = (value: string) => {
    setSourcesQuery(value);
  };

  const variablesChanges = (value: string) => {
    setSourceVariables(value);
  };

  return (
    <div className="graphiQLPage wrapper container">
      <GraphiQLEditor sourcesQuery={queryChange} sourcesVariables={variablesChanges} />
      <GraphiQLResponse result={isResult} />
      <SidePanel />
    </div>
  );
}

export default GraphiQLPage;
