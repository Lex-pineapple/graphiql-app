import { IQueryTypeProps } from '../../@types/docsComponents';
import QueryTypeNonObj from './QueryTypeNonObj';
import QueryTypeObj from './QueryTypeObj';

function QueryType({ returnType, onClick, mode }: IQueryTypeProps) {
  return (
    <div className="query-ret-type">
      <div className="query-ret-type-header">Type details</div>
      <div className="query-ret-type-details">
        {mode == 'OBJECT' ? (
          <QueryTypeObj returnType={returnType} onClick={onClick} />
        ) : (
          <QueryTypeNonObj returnType={returnType} />
        )}
      </div>
    </div>
  );
}

export default QueryType;
