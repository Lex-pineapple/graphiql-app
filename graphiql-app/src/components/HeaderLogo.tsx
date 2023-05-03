import { Link } from 'react-router-dom';
import './../styles/headerLogo.scss';

export const HeaderLogo = () => {
  return (
    <Link to="/" className="headerLogo__wrapper">
      <div className="headerLogo__img"></div>
      <span className="headerLogo__text">graphiql</span>
    </Link>
  );
};
