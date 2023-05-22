import { IQueryListQueryProps } from '../../@types/docsComponents';
import { styleType } from '../../graphql/parseDocsSchema';

function QueryListQuery(props: IQueryListQueryProps) {
  return (
    <div className="docs-queries-list__query clickable" onClick={() => props.onClick(props.query)}>
      <div className="docs-queries-list__query-name">{props.query.name}</div>
      {props.query.args.length > 0 ? (
        <div className="docs-queries-list__query-args">(...)</div>
      ) : (
        <></>
      )}
      <div className="docs-queries-list__query-type">{styleType(props.query.type)}</div>
    </div>
  );
}

export default QueryListQuery;
