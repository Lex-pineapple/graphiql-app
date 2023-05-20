import '../styles/header.scss';
import '../styles/hamburgerMenu.scss';

import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeaderLogo } from './HeaderLogo';
import { LangSwitcher } from './LangSwitcher';
import { UserIcon } from './UserIcon';
import { UserModal } from './UserModal';
import { FormattedMessage } from 'react-intl';
import { Message } from './languages/messages';
import { useSelector } from 'react-redux';
import { IStore } from '../@types/store';
import AuthComponent from './AuthComponent';

interface HeaderProps {
  currentLocale: string;
  setLocale: (locale: string) => void;
}

function Header({ currentLocale, setLocale }: HeaderProps) {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const logInStatus = useSelector((store: IStore) => store.auth.login);
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (headerRef.current === null) {
      return;
    }

    const header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleUserIconClick = () => {
    setShowModal(!showModal);
  };

  const handleModalClickOutside = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      const modalWindow = document.querySelector('.modal-window') as HTMLDivElement;
      modalWindow.classList.toggle('hide-modal-user');
      setTimeout(() => {
        setShowModal(false);
      }, 300);
    }
  };

  const handleScroll = (elTopOffset: number, elHeight: number) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  return (
    <header className={`header${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
      <div className="header__wrapper container wrapper">
        <HeaderLogo />
        <nav className={`header-nav${isOpen ? ' is-open' : ''}`} onClick={toggleMenu}>
          <ul className="header-nav-list">
            <li className="header-nav-list__item">
              <Link to="/">
                <FormattedMessage id={Message.Home} />
              </Link>
            </li>
            <li className="header-nav-list__item">
              <Link to="/graphiql">GraphiQL</Link>
            </li>
            <li className="header-nav-list__item">
              <Link to="/unknown">
                <FormattedMessage id={Message.PAGE404TEST} />
              </Link>
            </li>
          </ul>
        </nav>
        <div className={`status${isOpen ? ' is-open' : ''}`}>
          {logInStatus ? (
            <>
              <AuthComponent type="graphiql" message={Message.GoToMainPage} />
              <UserIcon onClick={handleUserIconClick} />
            </>
          ) : location.pathname !== '/signin' && location.pathname !== '/signup' ? (
            <AuthComponent type="signin" message={Message.SignIn} />
          ) : (
            <></>
          )}
          {logInStatus ? (
            <></>
          ) : location.pathname !== '/signup' ? (
            <AuthComponent type="signup" message={Message.SignUp} />
          ) : (
            <></>
          )}

          <LangSwitcher currentLocale={currentLocale} setLocale={setLocale} isOpen={isOpen} />
        </div>
      </div>
      {showModal && <UserModal onClickOutside={handleModalClickOutside} />}
      <div className={`hamburger${isOpen ? ' open' : ''}`} onClick={toggleMenu}>
        <div className="hamburger-line line1"></div>
        <div className="hamburger-line line2"></div>
        <div className="hamburger-line line3"></div>
      </div>
      <hr className="header__line"></hr>
    </header>
  );
}

export default Header;
