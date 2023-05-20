import { styleType } from '../../graphql/parseDocsSchema';
import { IArg, ITypeField } from '../../@types/graphql';

function QueryField({ field }: { field: IArg | ITypeField }) {
  return (
    <div className="query-field">
      <div className="query-field-name">{field.name}</div>
      {': '}
      <div className="query-field-type">{styleType(field.type)}</div>
      <p className="query-declaration-descr">{field.description}</p>
    </div>
  );
}

export default QueryField;
