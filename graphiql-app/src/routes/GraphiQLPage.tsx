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
  const [sourcesHeaders, setSourceHeaders] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getResources(sourcesQuery, sourcesVariables, sourcesHeaders);
      setIsResult(data);
    };
    sourcesQuery && fetchData();
  }, [sourcesQuery, sourcesVariables, sourcesHeaders]);

  const queryChange = (value: string) => {
    setSourcesQuery(value);
  };

  const variablesChanges = (value: string) => {
    setSourceVariables(value);
  };
  const headersChanges = (value: string) => {
    setSourceHeaders(value);
  };

  return (
    <div className="graphiQLPage wrapper container">
      <GraphiQLEditor
        sourcesQuery={queryChange}
        sourcesVariables={variablesChanges}
        sourcesHeaders={headersChanges}
      />
      <GraphiQLResponse result={isResult} />
      <SidePanel />
    </div>
  );
}

export default GraphiQLPage;
