import { styleType } from '../../graphql/parseDocsSchema';
import { IQueryDetailsProps } from '../../@types/docsComponents';
import styleFieldWithLinks from './styleFieldWithLinks';

function QueryDeclaration({ queryDetails, onClick }: IQueryDetailsProps) {
  return (
    <div className="query-declaration">
      <p className="query-declaration-header">Query details</p>
      <div className="query-declaration-field">
        <div className="query-declaration-field-name">{queryDetails.name}</div>
        {'('}
        <div className="query-declaration-field-args">
          {styleFieldWithLinks(queryDetails.args, 'query-declaration-field', onClick)}
        </div>
        {'): '}
        <div className="query-declaration-field-type">{styleType(queryDetails.type)}</div>
      </div>
      <p className="query-declaration-descr">{queryDetails.description}</p>
    </div>
  );
}

export default QueryDeclaration;
