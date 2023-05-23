import '../styles/header.scss';
import '../styles/hamburgerMenu.scss';

import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderLogo } from './HeaderLogo';
import { LangSwitcher } from './LangSwitcher';
import { UserModal } from './UserModal';
import { useSelector } from 'react-redux';
import { IStore } from '../@types/store';
import AuthComponent from './AuthComponent';
import { IHeaderProps } from '../@types/header';
import WelcomeComponent from './WelcomeComponent';
import SignOutModal from './SignOutModal';

function Header({ currentLocale, setLocale }: IHeaderProps) {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const logInStatus = useSelector((store: IStore) => store.auth.login);
  const [showLogOut, setShowLogOut] = useState(false);
  const [scroll, setScroll] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        if (headerRef.current) {
          const header = headerRef.current.getBoundingClientRect();
          handleScroll(header.top, header.height);
        }
      });
    }
  }, []);

  const handleLogOutClick = () => {
    setShowLogOut(true);
    setShowModal(false);
  };

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
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <header className={`header ${scroll ? 'scroll' : ''}`} ref={headerRef}>
      <div className="header__wrapper container wrapper">
        <HeaderLogo />
        <div className={`header-nav${isOpen ? ' is-open' : ''}`} onClick={toggleMenu}>
          <div className="header-nav-contents">
            {logInStatus ? (
              <WelcomeComponent handleClick={handleUserIconClick} />
            ) : location.pathname !== '/signin' && location.pathname !== '/signup' ? (
              <AuthComponent />
            ) : (
              <></>
            )}
            <LangSwitcher currentLocale={currentLocale} setLocale={setLocale} isOpen={isOpen} />
          </div>
        </div>
      </div>
      {showModal && (
        <UserModal onClickOutside={handleModalClickOutside} onClickLogOut={handleLogOutClick} />
      )}
      <div className={`hamburger${isOpen ? ' open' : ''}`} onClick={toggleMenu}>
        <div className="hamburger-line line1"></div>
        <div className="hamburger-line line2"></div>
        <div className="hamburger-line line3"></div>
      </div>
      <hr className="header__line"></hr>
      <SignOutModal onClickOutside={() => setShowLogOut(false)} hidden={showLogOut} />
    </header>
  );
}

export default Header;
