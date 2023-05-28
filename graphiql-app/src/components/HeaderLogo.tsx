import { Link } from 'react-router-dom';
import './../styles/headerLogo.scss';

export const HeaderLogo = () => {
  return (
    <Link to="/" className="headerLogo__wrapper">
      <div className="headerLogo__img">
        <span className="circle-big circle-top"></span>
        <span className="circle-small circle-left-top"></span>
        <span className="circle-small circle-right-top"></span>
        <span className="circle-small circle-center"></span>
        <span className="circle-big circle-left-bottom circle-gradient"></span>
        <span className="circle-big circle-right-bottom"></span>
        <span className="line line-right-top"></span>
        <span className="line line-right-bottom"></span>
        <span className="line line-bottom line-gradient-reverse"></span>
        <span className="line line-right line-gradient"></span>
        <span className="line line-left-top line-gradient"></span>
        <span className="line line-center-bottom-left line-gradient"></span>
        <span className="line line-center-bottom-right"></span>
        <span className="line line-center-top-right"></span>
        <span className="line line-center-top-left"></span>
        <span className="line line-center-top"></span>
        <span className="line line-top"></span>
      </div>
      <span className="headerLogo__text">graphiql</span>
    </Link>
  );
};
