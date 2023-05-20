import { Link } from 'react-router-dom';
import '../styles/page404.scss';
import { FormattedMessage } from 'react-intl';
import { NotFoundMsg } from '../languages/notFoundMsg';

function Page404() {
  return (
    <div className="page404-container container wrapper">
      <p className="page404__bigTxt">
        <FormattedMessage id={NotFoundMsg.header} />
      </p>
      <p className="page404__mainTxt">
        <FormattedMessage id={NotFoundMsg.mainText} />
      </p>
      <p className="page404__subTxt">
        <FormattedMessage id={NotFoundMsg.subtextP1} />{' '}
        <Link to="/" className="page404__link">
          <FormattedMessage id={NotFoundMsg.linkText} />
        </Link>{' '}
        <FormattedMessage id={NotFoundMsg.subtextP2} />
      </p>
    </div>
  );
}

export default Page404;
