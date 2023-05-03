import '../styles/header.scss';
import { Link } from 'react-router-dom';
import { HeaderLogo } from './HeaderLogo';
import { LangSwitcher } from './LangSwitcher';
import { UserIcon } from './UserIcon';

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <HeaderLogo />
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-list__item">
              <Link to="/">Home</Link>
            </li>
            <li className="header-nav-list__item">
              <Link to="/unknown">PAGE 404 TEST</Link>
            </li>
          </ul>
        </nav>
        <UserIcon />
        <LangSwitcher />
      </div>
    </header>
  );
}

export default Header;
