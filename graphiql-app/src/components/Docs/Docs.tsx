import '../../styles/sidePanelDocs.scss';
import { useEffect, useState } from 'react';
import { getSchema } from '../../API/api';
import { findTypeByObject, getQueries, getTypeKind } from '../../graphql/parseDocsSchema';
import getIntrospectionQuery from '../../graphql/getIntrospectionQuery';
import { IArg, IType, ITypeField } from '../../@types/graphql';
import QueryListQuery from './QueryListQuery';
import QueryDeclaration from './QueryDeclaration';
import QueryType from './QueryType';
import QueryArgs from './QueryArgs';
import QueryField from './QueryField';

const getDocsData = getSchema(getIntrospectionQuery());

function Docs() {
  const [queryDetails, setQueryDetails] = useState<ITypeField>();
  const [showQueryDetails, setShowQueryDetails] = useState(false);
  const [showField, setShowField] = useState<IArg | ITypeField | null>();

  function handleQueryClick(query: ITypeField) {
    setQueryDetails(query);
    setShowField(null);
    setShowQueryDetails(true);
  }

  function handleTypeClick(field: IArg | ITypeField) {
    setShowField(field);
  }

  function createDocs() {
    const docs = getDocsData();
    if (docs instanceof Error)
      return 'Error occured during loading of the documentation. Please try again later.';
    else {
      const queries = getQueries(docs);
      if (queries)
        return (
          <>
            {createQueriesList(queries)}
            {createQueryInfo(docs.data.__schema.types)}
          </>
        );
    }
  }

  function createQueriesList(docs: ITypeField[]) {
    return (
      <div className="docs-queries-list">
        {docs.map((query, idx) => {
          return <QueryListQuery key={idx} query={query} onClick={handleQueryClick} />;
        })}
      </div>
    );
  }

  function createQueryInfo(schemaTypes: IType[]) {
    if (showField) {
      return showTypeFieldDetails(showField, schemaTypes);
    } else {
      if (queryDetails && showQueryDetails) {
        return createQueryDetails(queryDetails, schemaTypes);
      }
    }
  }

  function showTypeFieldDetails(field: IArg | ITypeField, schemaTypes: IType[]) {
    const typeKind = getTypeKind(field.type);
    const returnType = findTypeByObject(field.type, schemaTypes);
    if (returnType) {
      return (
        <div className="docs-queries-details">
          <QueryField field={field} />
          <QueryType returnType={returnType} onClick={handleTypeClick} mode={typeKind} />
        </div>
      );
    }
  }

  function createQueryDetails(queryDetails: ITypeField, schemaTypes: IType[]) {
    const returnType = findTypeByObject(queryDetails.type, schemaTypes);
    if (returnType && returnType.fields) {
      return (
        <div className="docs-queries-details">
          <QueryDeclaration queryDetails={queryDetails} onClick={handleTypeClick} />
          <QueryType returnType={returnType} onClick={handleTypeClick} mode={'OBJECT'} />
          <QueryArgs queryDetails={queryDetails} onClick={handleTypeClick} />
        </div>
      );
    }
  }

  return <div className="docs">{createDocs()}</div>;
}

export default Docs;
