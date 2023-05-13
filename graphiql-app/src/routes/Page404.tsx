import { Link } from 'react-router-dom';
import '../styles/page404.scss';

function Page404() {
  return (
    <div className="page404-container container wrapper">
      <p className="page404__bigTxt">Whoops!</p>
      <p className="page404__mainTxt">Looks like you&apos;ve got lost.</p>
      <p className="page404__subTxt">
        Go back to the <Link to="/">home</Link> page?
      </p>
    </div>
  );
}

export default Page404;
