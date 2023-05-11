import '../styles/graphiqlPage.scss';
import GraphiQLEditor from '../components/GraphiQLEditor';
import GraphiQLResponse from '../components/GraphiQLResponse';
import SidePanel from '../components/SidePanel';
import { useEffect, useState } from 'react';
import { getResources } from '../components/api';

function GraphiQLPage() {
  const [isResult, setIsResult] = useState('');
  const [source, setSource] = useState('');

  useEffect(() => {
    if (source.length) {
      const fetchData = async () => {
        const data = await getResources(source);
        setIsResult(data);
      };
      fetchData();
    }
  }, [source]);

  const handleChange = (value: string) => {
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
