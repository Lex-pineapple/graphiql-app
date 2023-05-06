import { Link } from 'react-router-dom';
import './../styles/headerLogo.scss';

export const HeaderLogo = () => {
  return (
    <Link to="/" className="headerLogo__wrapper">
      <div className="headerLogo__imgssss">
        <div className="circle-big circle-top"></div>
        <div className="circle-small circle-left-top"></div>
        <div className="circle-small circle-right-top"></div>
        <div className="circle-small circle-center"></div>
        <div className="circle-big circle-left-bottom"></div>
        <div className="circle-big circle-right-bottom"></div>
        <div className="line line-right-top"></div>
        <div className="line line-right-bottom"></div>
        <div className="line line-bottom"></div>
        <div className="line line-right"></div>
        <div className="line line-left-top"></div>
        <div className="line line-center-bottom-left"></div>
        <div className="line line-center-bottom-right"></div>
        <div className="line line-center-top-right"></div>
        <div className="line line-center-top-left"></div>
        <div className="line line-center-top"></div>
        <div className="line line-top"></div>
      </div>
      <span className="headerLogo__text">graphiql</span>
    </Link>
  );
};
