import GraphiQLEditor from '../components/GraphiQLEditor';
import GraphiQLResponse from '../components/GraphiQLResponse';
import SidePanel from '../components/SidePanel';

import '../styles/graphiqlPage.scss';

function GraphiQLPage() {
  return (
    <div className="graphiQLPage">
      <GraphiQLEditor />
      <GraphiQLResponse />
      <SidePanel />
    </div>
  );
}

export default GraphiQLPage;
