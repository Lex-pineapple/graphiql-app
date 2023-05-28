import { GraphiQlMsg } from '../../languages/graphiQlMsg';
import { IQueryTypeProps } from '../../@types/docsComponents';
import QueryTypeNonObj from './QueryTypeNonObj';
import QueryTypeObj from './QueryTypeObj';
import { FormattedMessage } from 'react-intl';

function QueryType({ returnType, onClick, mode }: IQueryTypeProps) {
  return (
    <div className="query-ret-type">
      <div className="query-ret-type-header">
        <FormattedMessage id={GraphiQlMsg.typeDetailsHeader} />
      </div>
      <div className="query-ret-type-details">
        {mode == 'OBJECT' ? (
          <QueryTypeObj returnType={returnType} onClick={onClick} />
        ) : mode == 'INPUT_OBJECT' ? (
          <QueryTypeObj returnType={returnType} onClick={onClick} />
        ) : (
          <QueryTypeNonObj returnType={returnType} />
        )}
      </div>
    </div>
  );
}

export default QueryType;
