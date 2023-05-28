import { GraphiQlMsg } from '../../languages/graphiQlMsg';
import { IQueryDetailsProps } from '../../@types/docsComponents';
import styleFieldWithLinks from './styleFieldWithLinks';
import { FormattedMessage } from 'react-intl';

function QueryArgs({ queryDetails, onClick }: IQueryDetailsProps) {
  return (
    <div className="query-args">
      <div className="query-args-header">
        <FormattedMessage id={GraphiQlMsg.argsHeader} />
      </div>
      <div className="query-args-fields">
        {styleFieldWithLinks(queryDetails.args, 'query-args-fields', onClick)}
      </div>
    </div>
  );
}

export default QueryArgs;
