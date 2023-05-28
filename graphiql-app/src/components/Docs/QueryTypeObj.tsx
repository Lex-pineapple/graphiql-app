import { IQueryTypeProps } from '../../@types/docsComponents';
import styleFieldWithLinks from './styleFieldWithLinks';

function QueryTypeObj({ returnType, onClick }: IQueryTypeProps) {
  return (
    <>
      <div className="query-ret-type-text">type </div>
      <div className="query-ret-type-name">{returnType?.name}</div>
      {'{'}
      <div className="query-ret-type-fields">
        {returnType.fields &&
          styleFieldWithLinks(returnType.fields, 'query-ret-type-fields', onClick)}
        {returnType.inputFields &&
          styleFieldWithLinks(returnType.inputFields, 'query-ret-type-fields', onClick)}
      </div>
      {'}'}
    </>
  );
}

export default QueryTypeObj;
