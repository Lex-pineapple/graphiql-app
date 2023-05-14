import getIntrospectionQuery from '../graphql/getIntrospectionQuery';
import { getSchema } from './api';

const getDocsData = getSchema(getIntrospectionQuery());

function Docs() {
  function createDocs() {
    const docs = getDocsData();
    if (docs instanceof Error)
      return 'Error occured during loading of the documentation. Please try again later.';
    else {
    }
  }

  return <div>{createDocs()}</div>;
}

export default Docs;
