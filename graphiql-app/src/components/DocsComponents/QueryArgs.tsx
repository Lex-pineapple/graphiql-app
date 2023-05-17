import { IQueryDetailsProps } from '../../@types/docsComponents';
import styleFieldWithLinks from './styleFieldWithLinks';

function QueryArgs({ queryDetails, onClick }: IQueryDetailsProps) {
  return (
    <div className="query-args">
      <div className="query-args-header">Arguments</div>
      <div className="query-args-fields">
        {styleFieldWithLinks(queryDetails.args, 'query-args-fields', onClick)}
      </div>
    </div>
  );
}

export default QueryArgs;
