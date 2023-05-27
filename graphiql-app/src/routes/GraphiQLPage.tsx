import '../styles/graphiqlPage.scss';
import GraphiQLEditor from '../components/GraphiQl/GraphiQLEditor';
import GraphiQLResponse from '../components/GraphiQl/GraphiQLResponse';
import SidePanel from '../components/GraphiQl/SidePanel';
import { useEffect, useState } from 'react';
import { getResources } from '../API/api';
import { IGetRescourcesRet } from '../@types/api';
import ApiErrorModal from '../components/ApiErrorModa';
import PreloaderSpinner from '../components/PreloaderSpinner';

function GraphiQLPage() {
  const [isResult, setIsResult] = useState('');
  const [sourcesQuery, setSourcesQuery] = useState('');
  const [sourcesVariables, setSourceVariables] = useState('');
  const [sourcesHeaders, setSourceHeaders] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState<IGetRescourcesRet>();
  const [isLoading, setIsLoading] = useState(false);
  const [execute, setExecute] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (execute) {
        setIsLoading(true);
        const data = await getResources(sourcesQuery, sourcesVariables, sourcesHeaders);
        setIsLoading(false);
        if (data.type !== 'error') {
          setIsResult(data.contents);
        } else {
          setError(data);
          setOpenModal(true);
        }
        setExecute(false);
      }
    };
    sourcesQuery && fetchData();
  }, [sourcesQuery, sourcesVariables, sourcesHeaders, execute]);

  const handleModalClick = () => {
    setOpenModal(!openModal);
  };

  const queryChange = (value: string) => {
    setSourcesQuery(value);
  };

  const variablesChanges = (value: string) => {
    setSourceVariables(value);
  };
  const headersChanges = (value: string) => {
    setSourceHeaders(value);
  };

  const executeChange = () => {
    setExecute(true);
  };

  return (
    <div className="graphiQLPage wrapper container">
      <GraphiQLEditor
        sourcesQuery={queryChange}
        sourcesVariables={variablesChanges}
        sourcesHeaders={headersChanges}
        execute={executeChange}
      />
      <GraphiQLResponse result={isResult} />
      <SidePanel />
      {openModal && (
        <ApiErrorModal
          formatId={error?.formatId}
          text={error?.contents}
          onClickOutside={handleModalClick}
        />
      )}
      {isLoading && <PreloaderSpinner />}
    </div>
  );
}

export default GraphiQLPage;
